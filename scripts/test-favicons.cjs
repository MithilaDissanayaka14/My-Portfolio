const sharp = require('sharp');
const fs = require('fs');

async function testFavicons() {
  // Option 1: Full circular logo as is (centered 1024x1024)
  const full180 = await sharp('src/assets/Logo.png')
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync('C:/Users/E/.gemini/antigravity/brain/338e5a05-2ed3-483b-a528-34c958131580/test_full_180.png', full180);

  const full32 = await sharp('src/assets/Logo.png')
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync('C:/Users/E/.gemini/antigravity/brain/338e5a05-2ed3-483b-a528-34c958131580/test_full_32.png', full32);

  const full16 = await sharp('src/assets/Logo.png')
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .resize(16, 16)
    .png()
    .toBuffer();
  fs.writeFileSync('C:/Users/E/.gemini/antigravity/brain/338e5a05-2ed3-483b-a528-34c958131580/test_full_16.png', full16);

  // Option 2: Simplified square version using ONLY the MD monogram (centered, no tiny text)
  // MD emblem is approx x: 350..1150, y: 180..670 (width 800, height 490)
  // Center is (750, 425). If we take a square around (755, 435) of size 850x850:
  // With the glowing orange ring or orange border on dark #09090b:
  // Let's extract the emblem region:
  const emblemWidth = 840;
  const emblemHeight = 840;
  const left = Math.round(755 - emblemWidth / 2);
  const top = Math.round(435 - emblemHeight / 2);

  const croppedEmblem = await sharp('src/assets/Logo.png')
    .extract({ left: Math.max(0, left), top: Math.max(0, top), width: emblemWidth, height: emblemHeight })
    .toBuffer();

  const mono180 = await sharp(croppedEmblem).resize(180, 180).png().toBuffer();
  fs.writeFileSync('C:/Users/E/.gemini/antigravity/brain/338e5a05-2ed3-483b-a528-34c958131580/test_mono_180.png', mono180);

  const mono32 = await sharp(croppedEmblem).resize(32, 32).png().toBuffer();
  fs.writeFileSync('C:/Users/E/.gemini/antigravity/brain/338e5a05-2ed3-483b-a528-34c958131580/test_mono_32.png', mono32);

  const mono16 = await sharp(croppedEmblem).resize(16, 16).png().toBuffer();
  fs.writeFileSync('C:/Users/E/.gemini/antigravity/brain/338e5a05-2ed3-483b-a528-34c958131580/test_mono_16.png', mono16);

  console.log('All test favicon images generated!');
}

testFavicons().catch(console.error);
