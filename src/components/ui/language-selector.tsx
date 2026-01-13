import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { cn } from "@/lib/utils";

const FlagIcon = ({ code }: { code: "ru" | "en" | "tj" }) => {
  if (code === "ru") {
    // Флаг России: белый-синий-красный
    return (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="5" fill="#FFFFFF"/>
        <rect y="5" width="20" height="5" fill="#0039A6"/>
        <rect y="10" width="20" height="5" fill="#D52B1E"/>
      </svg>
    );
  }

  if (code === "en") {
    // Флаг Великобритании (упрощенный Union Jack)
    return (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="15" fill="#012169"/>
        <path d="M0 0L20 15M20 0L0 15" stroke="#FFFFFF" strokeWidth="3"/>
        <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="2"/>
        <path d="M10 0V15M0 7.5H20" stroke="#FFFFFF" strokeWidth="5"/>
        <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="3"/>
      </svg>
    );
  }

  if (code === "tj") {
    // Флаг Таджикистана: красный-белый-зеленый
    return (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="5" fill="#CC0000"/>
        <rect y="5" width="20" height="5" fill="#FFFFFF"/>
        <rect y="10" width="20" height="5" fill="#006600"/>
        <circle cx="10" cy="7.5" r="2" fill="#F8C300"/>
      </svg>
    );
  }

  return null;
};

export function LanguageSelector({ align = "right" }: { align?: "left" | "right" }) {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "ru" as const, name: t("language.ru") },
    { code: "en" as const, name: t("language.en") },
    { code: "tj" as const, name: t("language.tj") },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
        aria-label={t("language.select")}
      >
        <FlagIcon code={language} />
        <span className="hidden sm:inline">{currentLang?.name}</span>
      </button>

      {isOpen && (
        <div className={cn(
          "absolute mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
          align === "right" ? "right-0" : "left-0"
        )}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 transition-colors cursor-pointer",
                language === lang.code && "bg-blue-50 text-blue-600"
              )}
            >
              <span className="flex items-center gap-3">
                <FlagIcon code={lang.code} />
                <span>{lang.name}</span>
              </span>
              {language === lang.code && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
