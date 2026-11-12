const { spawn } = require('child_process');
const fs = require('fs');

async function testCertifications() {
  const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const port = 9250;
  const p = spawn(edge, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--user-data-dir=C:\\Users\\E\\AppData\\Local\\Temp\\edge-cdp-certs',
    '--window-size=1440,1100',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const tabsRes = await fetch('http://127.0.0.1:' + port + '/json/list');
  const tabs = await tabsRes.json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  await new Promise(res => ws.onopen = res);

  let msgId = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      const handler = (evt) => {
        const data = JSON.parse(evt.data);
        if (data.id === id) {
          ws.removeEventListener('message', handler);
          resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evalJs(expr) {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
    return res?.result?.value;
  }

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Page.navigate', { url: 'http://localhost:5173/' });
  await new Promise(r => setTimeout(r, 2500));

  // 1. Scroll to #certifications
  await evalJs(`document.getElementById('certifications')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
  await new Promise(r => setTimeout(r, 400));

  // 2. Check Badge and Heading
  const headingCheck = await evalJs(`(() => {
    const sec = document.getElementById('certifications');
    const text = sec ? sec.innerText : '';
    return {
      hasBadgeText: text.includes('VERIFIED CREDENTIALS') || text.includes('Verified Credentials'),
      heading: sec.querySelector('h2')?.innerText?.trim(),
      subtitle: sec.querySelector('p')?.innerText?.trim()
    };
  })()`);
  console.log('Heading Check:', headingCheck);

  // 3. Inspect Certificate Cards
  const cardsCheck = await evalJs(`(() => {
    const sec = document.getElementById('certifications');
    const cards = Array.from(sec.querySelectorAll("article[role='button']"));
    return {
      cardCount: cards.length,
      cards: cards.map(c => {
        const r = c.getBoundingClientRect();
        return {
          title: c.querySelector('h3')?.innerText?.trim(),
          issuer: c.querySelector('p.text-neutral-300')?.innerText?.trim(),
          year: c.querySelector('.font-mono.text-neutral-400')?.innerText?.trim(),
          width: Math.round(r.width),
          height: Math.round(r.height)
        };
      })
    };
  })()`);
  console.log('Cards Check (Desktop 1440):');
  console.log(JSON.stringify(cardsCheck, null, 2));

  // 4. Test Clicking Card 1 (AI & ML SkyRek)
  await evalJs(`document.querySelectorAll("#certifications article[role='button']")[0].click();`);
  await new Promise(r => setTimeout(r, 350));

  const modalCheck1 = await evalJs(`(() => {
    const modal = document.querySelector("[role='dialog'][aria-modal='true']");
    if (!modal) return { isOpen: false };
    const title = modal.querySelector('#cert-modal-title')?.innerText?.trim();
    const notice = modal.querySelector('.text-neutral-400 span')?.innerText?.trim();
    const bodyOverflow = document.body.style.overflow;
    return {
      isOpen: true,
      title,
      notice,
      bodyOverflow
    };
  })()`);
  console.log('Modal Check 1 (SkyRek):', modalCheck1);

  // Capture screenshot of open modal on desktop
  const shotModalDesktop = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('cert_modal_desktop.png', Buffer.from(shotModalDesktop.data, 'base64'));
  console.log('Saved cert_modal_desktop.png');

  // 5. Test Escape Key Closing
  await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'Escape', windowsVirtualKeyCode: 27 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', windowsVirtualKeyCode: 27 });
  await new Promise(r => setTimeout(r, 350));

  const closedAfterEscape = await evalJs(`(() => {
    return {
      isOpen: Boolean(document.querySelector("[role='dialog']")),
      bodyOverflow: document.body.style.overflow
    };
  })()`);
  console.log('After Escape:', closedAfterEscape);

  // 6. Test Clicking Card 2 (Moratuwa Python) and Closing with Close Button
  await evalJs(`document.querySelectorAll("#certifications article[role='button']")[1].click();`);
  await new Promise(r => setTimeout(r, 350));

  const modalCheck2 = await evalJs(`(() => {
    const modal = document.querySelector("[role='dialog']");
    return {
      title: modal?.querySelector('#cert-modal-title')?.innerText?.trim()
    };
  })()`);
  console.log('Modal Check 2 (Moratuwa):', modalCheck2);

  // Click close button
  await evalJs(`document.querySelector("[role='dialog'] button[aria-label='Close certificate preview']").click();`);
  await new Promise(r => setTimeout(r, 350));

  // 7. Test Clicking Card 6 (Diploma CS ICTA) and Closing with Backdrop Click
  await evalJs(`document.querySelectorAll("#certifications article[role='button']")[5].click();`);
  await new Promise(r => setTimeout(r, 350));

  const modalCheck6 = await evalJs(`(() => {
    const modal = document.querySelector("[role='dialog']");
    return {
      title: modal?.querySelector('#cert-modal-title')?.innerText?.trim()
    };
  })()`);
  console.log('Modal Check 6 (Diploma):', modalCheck6);

  // Click backdrop
  await evalJs(`document.querySelector("[role='dialog'] .bg-black\\\\/80").click();`);
  await new Promise(r => setTimeout(r, 350));

  // 8. Capture Desktop Grid Screenshot
  await evalJs(`(() => {
    const sec = document.getElementById('certifications');
    const r = sec.getBoundingClientRect();
    window.scrollBy(0, r.top + 160);
  })()`);
  await new Promise(r => setTimeout(r, 500));

  const shotGridDesktop = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('cert_grid_desktop.png', Buffer.from(shotGridDesktop.data, 'base64'));
  console.log('Saved cert_grid_desktop.png');

  // 9. Mobile Test (375x812) - Open Modal and verify responsive fit
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 1,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 400));

  await evalJs(`document.querySelectorAll("#certifications article[role='button']")[0].click();`);
  await new Promise(r => setTimeout(r, 400));

  const mobileModalCheck = await evalJs(`(() => {
    const modal = document.querySelector("[role='dialog'] > div:last-child");
    const r = modal.getBoundingClientRect();
    return {
      modalWidth: Math.round(r.width),
      modalHeight: Math.round(r.height),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      fitsInViewport: r.width <= window.innerWidth && r.height <= window.innerHeight
    };
  })()`);
  console.log('Mobile Modal Check (375x812):', mobileModalCheck);

  const shotModalMobile = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('cert_modal_mobile.png', Buffer.from(shotModalMobile.data, 'base64'));
  console.log('Saved cert_modal_mobile.png');

  // Close modal
  await evalJs(`document.querySelector("[role='dialog'] button[aria-label='Close certificate preview']").click();`);
  await new Promise(r => setTimeout(r, 300));

  // Capture Mobile Grid Screenshot
  const shotGridMobile = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('cert_grid_mobile.png', Buffer.from(shotGridMobile.data, 'base64'));
  console.log('Saved cert_grid_mobile.png');

  ws.close();
  p.kill();
  console.log('Verification completed successfully!');
}

testCertifications().catch(console.error);
