import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';

function HeaderBar() {
  const { lang, setLang, strings, allLanguages } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const switchLabel = lang; // ENG or ESP

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-900 px-4 py-2 shadow-lg">
      <div className="flex justify-end items-center gap-4">
        {/* Language switcher */}
        <div className="relative" ref={containerRef}>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-haspopup="menu"
            aria-expanded={open}
            className="inline-flex items-center gap-1 px-2 py-1 text-sm text-white hover:text-white hover:bg-gray-600 cursor-pointer"
            title="Select language"
            type="button"
          >
            <span className="font-semibold">{switchLabel}</span>
            <span className="transform rotate-90 text-xs leading-none">›</span>
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-2 min-w-[120px] rounded bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5 z-50"
              style={{zIndex: 9999}}
            >
              <ul className="py-1">
                {Object.keys(allLanguages).map((key) => (
                  <li key={key}>
                    <button
                      role="menuitem"
                      onClick={() => {
                        setLang(key);
                        setOpen(false);
                      }}
                      className={`cursor-pointer w-full text-left px-3 py-2 text-sm ${
                        key === lang ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'
                      }`}
                      type="button"
                    >
                      <span className="mr-2 text-xs">{key}</span>
                      <span className="text-gray-200 text-sm">{allLanguages[key].name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <a
          href="https://truspace.dev/login"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {strings.login}
        </a>
        <a
          href="https://truspace.dev/register"
          className="text-sm/6 font-semibold text-white hover:text-white hover:underline"
        >
          {strings.register}
        </a>
        <a
          href="https://github.com/openkfw/TruSpace"
          className="text-gray-400 hover:text-gray-300"
        >
          <span className="sr-only">GitHub</span>
          <svg
            className="size-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HeaderBar;
