export default function Footer() {
  const languages = [
    "English (UK)",
    "العربية",
    "Français (France)",
    "Italiano",
    "Deutsch",
    "Русский",
    "Español",
    "Bahasa Indonesia",
    "Türkçe",
    "Português (Brasil)",
    "हिन्दी",
  ];

  const links = [
    "Sign Up",
    "Log in",
    "Messenger",
    "Facebook Lite",
    "Video",
    "Meta Pay",
    "Meta Store",
    "Meta Quest",
    "Ray-Ban Meta",
    "Meta AI",
    "Instagram",
    "Threads",
    "Voting Information Centre",
    "Privacy Policy",
    "Privacy Centre",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Cookies",
    "AdChoices",
    "Terms",
    "Help",
    "Contact uploading and non-users",
    "Settings",
  ];

  return (
    <div className="w-full bg-white border-t">
      <div className="mx-auto w-full max-w-[980px] px-4 py-5">
        {/* Languages */}
        <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-[#737373] pb-2">
          {languages.map((lang) => (
            <li key={lang}>
              <a href="#" className="hover:underline">
                {lang}
              </a>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="border-t border-gray-300 pt-2 pb-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-[#737373]">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Meta Copyright */}
        <div className="pt-1">
          <p className="text-[11px] text-[#737373]">
            Meta © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
