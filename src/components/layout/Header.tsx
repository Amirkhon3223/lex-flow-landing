import { Button } from "../ui/button";
import { LanguageSelector } from "../ui/language-selector";
import {useI18n} from "../../i18n/I18nContext.tsx";


export function Header() {
  const { t } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-2xl border-b border-gray-200/50 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <img src="/src/assets/ROUNDED_LEXFLOW_BG.png" alt="LexFlow" className="w-10 h-10"/>
            </div>
            <span className="text-2xl font-semibold tracking-tight">LexFlow</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors text-[15px] font-medium">{t("header.features")}</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors text-[15px] font-medium">{t("header.pricing")}</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-[15px] font-medium">{t("header.blog")}</a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button variant="dark" className="text-[15px] font-medium px-6">
              {t("header.try")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
