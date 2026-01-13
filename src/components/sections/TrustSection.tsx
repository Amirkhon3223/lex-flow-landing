import { Card } from "../ui/card";
import { Quote } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function TrustSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            {t("trust.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("trust.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-10 bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 rounded-3xl">
            <Quote className="h-10 w-10 text-blue-600 mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "{t("trust.review1Text")}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                {t("trust.review1Author").charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{t("trust.review1Author")}</p>
                <p className="text-sm text-gray-600">{t("trust.review1Role")}</p>
              </div>
            </div>
          </Card>

          <Card className="p-10 bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 rounded-3xl">
            <Quote className="h-10 w-10 text-green-600 mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "{t("trust.review2Text")}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                {t("trust.review2Author").charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{t("trust.review2Author")}</p>
                <p className="text-sm text-gray-600">{t("trust.review2Role")}</p>
              </div>
            </div>
          </Card>

          <Card className="p-10 bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 rounded-3xl">
            <Quote className="h-10 w-10 text-purple-600 mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "{t("trust.review3Text")}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                {t("trust.review3Author").charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{t("trust.review3Author")}</p>
                <p className="text-sm text-gray-600">{t("trust.review3Role")}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
