import { LanguageSelector } from "../ui/language-selector";
import {useI18n} from "../../i18n/I18nContext.tsx";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-16 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <img src="/src/assets/ROUNDED_LEXFLOW_BG.png" alt="LexFlow" className="w-10 h-10"/>
              </div>
              <span className="text-white text-xl font-semibold">LexFlow</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <div className="[&_button]:text-gray-400 [&_button:hover]:text-white [&_button:hover]:bg-gray-800">
              <LanguageSelector align="left" />
            </div>
          </div>

          <div>
            <h4 className="text-white text-base mb-4 font-semibold">Продукт</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">{t("footer.features")}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t("footer.pricing")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base mb-4 font-semibold">Компания</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.blog")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.support")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base mb-4 font-semibold">Юридическое</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
