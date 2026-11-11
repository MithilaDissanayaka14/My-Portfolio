interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'w-5 h-5' }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[\s./-]/g, '');

  switch (normalized) {
    case 'react':
    case 'reactnative':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="#38bdf8" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f7df1e">
          <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.2-.2 1.6-.6.4-.4.6-1 .6-1.8v-.2h-2.1v.2c0 .4-.1.7-.3.9-.2.2-.5.3-.9.3-.4 0-.8-.1-1-.4-.2-.3-.3-.7-.3-1.3V10h-2.2v4.1c0 1.1.3 2 1 2.6.7.7 1.6 1.1 2.6 1.1v.1zm-6.5-.1c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-2v-.2h-2.1v.2c0 .5-.1.8-.3 1-.2.2-.5.3-.9.3-.4 0-.7-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.6.1-1.1.4-1.5.3-.4.8-.8 1.4-1.2.7-.4 1.3-.9 1.8-1.4.5-.5.7-1.2.7-2 0-.9-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.4-.9-1 0-1.8.3-2.4.9-.6.6-.9 1.4-.9 2.4v.2h2.2v-.2c0-.4.1-.7.3-.9.2-.2.5-.3.8-.3.4 0 .7.1.9.3.2.2.3.5.3.9 0 .5-.2.9-.5 1.3-.3.4-.8.7-1.5 1.1-.8.5-1.4 1-1.8 1.6-.4.6-.6 1.3-.6 2.1 0 1 .3 1.8 1 2.4.6.6 1.4.9 2.5.9z" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#3178c6">
          <path d="M3 3h18v18H3V3zm8.5 7.7h-3v7.3H6.7v-7.3h-3V9h7.8v1.7zm6.7 4.2c.4 0 .7-.1 1-.3.3-.2.4-.5.4-.9 0-.4-.1-.7-.4-.9-.3-.2-.8-.4-1.5-.7-.9-.3-1.6-.7-2-1.1-.4-.4-.7-1-.7-1.7 0-.8.3-1.5 1-2 .7-.5 1.5-.8 2.6-.8 1 0 1.9.3 2.5.8.6.5.9 1.2.9 2.1h-1.9c0-.4-.1-.8-.4-1-.3-.2-.7-.4-1.2-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.6.3.8.2.2.7.4 1.4.7 1 .3 1.7.7 2.1 1.1.4.4.7 1 .7 1.8 0 .9-.3 1.6-1 2.2-.7.6-1.6.8-2.7.8-1.2 0-2.1-.3-2.8-.9-.7-.6-1-1.4-1-2.4h1.9c0 .6.2 1.1.5 1.4.3.3.8.5 1.4.5z" />
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2C8.3 2 8.5 3.6 8.5 3.6v1.7h3.6v.5H4.9s-2.9.3-2.9 4.1 2.5 3.9 2.5 3.9h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4 0 2.4-2.4V4.4S15.6 2 11.9 2zm-1.8 1.4c.4 0 .8.3.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" fill="#387eb8" />
          <path d="M12.1 22c3.6 0 3.4-1.6 3.4-1.6v-1.7h-3.6v-.5h7.2s2.9-.3 2.9-4.1-2.5-3.9-2.5-3.9H18v2.1s.1 2.5-2.5 2.5h-4.3s-2.4 0-2.4 2.4v4.4s-.4 2.4 3.3 2.4zm1.8-1.4c-.4 0-.8-.3-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#ffe052" />
        </svg>
      );

    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#ea580c">
          <path d="M8.8 16.5s-.8.2-1.7.4c-1.3.3-2.4.3-2.4.3s1.2.6 3.2.7c2.4.1 4.5-.4 4.5-.4s-.8.3-2 .5c-1.6.3-3.7.3-3.7.3s1.3.5 3.6.5c3.2 0 6.1-.8 6.1-.8s-.9.4-2.5.6c-2.1.3-4.5.3-4.5.3s1.7.5 4.7.4c3.4-.1 6.8-1 6.8-1s-3.7 2.1-10.8 1.9c-4.2-.1-6.7-1-6.7-1s1.5-.7 4.1-1.3c2.7-.6 4.3-.9 4.3-.9l-3.2-.5z" />
          <path d="M14.9 11.8s1.4 1.4-.4 2.6c-2.2 1.4-4.8 1.5-6.7 1.5-1.4 0-2.2-.2-2.2-.2s.8.3 2.5.3c2.2 0 4.9-.3 6.9-1.5 2.3-1.4.9-2.7.9-2.7zm-2.8-4.9s-1.8.8-1.5 2.6c.3 2 3.1 2.7 4.6 1.4 1.4-1.2.6-2.5.6-2.5s.4.8-.1 1.5c-.7 1-2.7 1.1-3.6.3-1-.9-.5-2.2-.5-2.2l.5-1.1zm2.3-3.6s2.3 2.4-.2 4.6c-1.9 1.6-4 1.8-5.7 1.8-1.3 0-2.1-.2-2.1-.2s.8.3 2.3.3c2 0 4.4-.3 6.2-1.7 2.2-1.7.5-3.3.5-3.3l-1-1.5z" />
        </svg>
      );

    case 'c':
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9a4.5 4.5 0 1 0 0 6" />
          {normalized === 'cpp' && (
            <>
              <path d="M17 10v4" />
              <path d="M15 12h4" />
              <path d="M21 10v4" />
              <path d="M19 12h4" />
            </>
          )}
        </svg>
      );

    case 'csharp':
    case 'c#':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M13.5 9.5a3 3 0 1 0 0 5" />
          <path d="M16 10.5v3M18.5 10.5v3M15 12h4.5" strokeWidth="1.5" />
        </svg>
      );

    case 'flutter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM6.3 15.7l5.657 5.657L21.684 11.63H14.31L8.657 17.287 6.3 15.7zm5.657 5.657L14.314 24h7.37L16.028 18.3z" />
        </svg>
      );

    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f97316">
          <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.8 5.7h-7.6l.3 2.9h7.1l-.7 7.2-4.9 1.4-4.9-1.4-.3-3.6h2.4l.2 1.8 2.6.7 2.6-.7.3-3.2H6.9l-.7-7.8h11.8l-.2 2.6z" />
        </svg>
      );

    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.7 5.7h-7.5l.3 2.9h7l-.7 7.2-4.8 1.4-4.8-1.4-.4-3.6h2.4l.2 1.8 2.6.7 2.6-.7.3-3.2H7l-.6-7.8h11.5l-.2 2.6z" />
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.8-1.9 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.1 6.4 3.1 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.8 1.9-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.1-6.4-3.1zM6 12c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.8-1.9 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.1 6.4 3.1 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.8 1.9-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.1-6.4-3.1z" />
        </svg>
      );

    case 'aspnet':
    case 'aspnetcore':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M7 15l5-6 5 6" />
          <path d="M9 13h6" />
        </svg>
      );

    case 'springboot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#22c55e">
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm-1.2 14.5c-2.3-.2-3.8-1.8-3.8-3.9 0-2.3 1.7-3.9 4-3.9 1.6 0 2.8.7 3.5 1.8l-1.6 1.1c-.4-.7-1-1.1-1.9-1.1-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1c.9 0 1.5-.4 1.9-1.1l1.6 1.1c-.7 1.1-1.9 1.8-3.7 1.8z" />
        </svg>
      );

    case 'springsecurity':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#22c55e">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm1 3.8v4.4l3.8-2.2L13 5.8zm-2 0l-3.8 2.2 3.8 2.2V5.8zm-5 4.6v5.2l4.5 2.6v-5.2L6 10.4zm12 0l-4.5 2.6v5.2l4.5-2.6v-5.2z" />
        </svg>
      );

    case 'express':
    case 'expressjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f4f4f5" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 8h6M7 12h4M7 16h6M15 8l2 8M19 8l-2 8" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3.6.1.8-.2.8-.5v-1.9c-2.5.5-3.1-1.2-3.1-1.2-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8 1-2.4-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.8-1.2 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.6 1 1.4 1 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.5c0 .3.2.7.8.5C19.4 19.8 22 16.2 22 12c0-5.5-4.5-10-10-10z" />
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#22c55e">
          <path d="M12 2C12 2 7 7 7 13.5c0 3.6 2.2 6.5 5 7.5v-19zm0 0c0 0 5 5 5 11.5 0 3.6-2.2 6.5-5 7.5v-19z" />
        </svg>
      );

    case 'efcore':
    case 'entityframeworkcore':
    case 'hibernate':
    case 'hibernatejpa':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );

    case 'agenticai':
    case 'aiml':
    case 'aimlfundamentals':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
          <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
          <path d="M16 11v1a4 4 0 0 1-8 0v-1" />
          <path d="M12 16v4" />
          <path d="M8 20h8" />
          <circle cx="12" cy="7" r="1" fill="#f97316" />
        </svg>
      );

    case 'langgraph':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="8" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5l7 1.5M7.5 8.5l3.5 7M16.5 10.5l-3.5 5" />
        </svg>
      );

    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#059669">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-5-5.5h4v-5h2v5h4l-5 5.5z" />
        </svg>
      );

    case 'arduino':
    case 'microcontrollers':
    case 'hardwareintegration':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="1.5" />
          <circle cx="15" cy="9" r="1.5" />
          <path d="M9 15h6M2 9h2M2 15h2M20 9h2M20 15h2M9 2v2M15 2v2M9 20v2M15 20v2" />
        </svg>
      );

    case 'git':
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f97316">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      );

    case 'vscode':
    case 'intellij':
    case 'intellijidea':
    case 'expo':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f4f4f5" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 9l3 3-3 3M13 15h3" />
        </svg>
      );

    case 'oop':
    case 'restapis':
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

