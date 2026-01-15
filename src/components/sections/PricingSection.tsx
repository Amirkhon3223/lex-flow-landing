import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function PricingSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl rounded-3xl">
            <div className="mb-8">
              <h3 className="text-2xl mb-4 font-semibold">{t("pricing.basic")}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">{t("pricing.basicPrice")}</span>
                <span className="text-gray-600 text-lg">{t("pricing.basicPeriod")}</span>
              </div>
              <p className="text-sm text-gray-600">{t("pricing.basicYear")}</p>
            </div>

            <a href="https://app.lex-flow.com" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="full" className="mb-8">
                {t("pricing.basicCta")}
              </Button>
            </a>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.basicFeature1")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.basicFeature2")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.basicFeature3")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.basicFeature4")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.basicFeature5")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.basicFeature6")}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 pt-6 border-t border-gray-200 font-medium text-center">
              {t("pricing.basicDesc")}
            </p>
          </Card>

          {/* Pro Plan */}
          <Card className="p-10 bg-gradient-to-br from-blue-600 to-purple-600 border-0 relative shadow-2xl scale-105 rounded-3xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-white text-blue-600 px-4 py-1.5 text-sm font-semibold shadow-lg">
                {t("pricing.proBadge")}
              </Badge>
            </div>

            <div className="mb-8 text-white">
              <h3 className="text-2xl mb-4 font-semibold">{t("pricing.pro")}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">{t("pricing.proPrice")}</span>
                <span className="text-blue-100 text-lg">{t("pricing.proPeriod")}</span>
              </div>
              <p className="text-sm text-blue-100">{t("pricing.proYear")}</p>
            </div>

            <a href="https://app.lex-flow.com" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="light-colored" size="full" className="mb-8">
                {t("pricing.proCta")}
              </Button>
            </a>

            <div className="space-y-4 text-white mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">{t("pricing.proFeature1")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">{t("pricing.proFeature2")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">{t("pricing.proFeature3")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">{t("pricing.proFeature4")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">{t("pricing.proFeature5")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">{t("pricing.proFeature6")}</span>
              </div>
            </div>

            <p className="text-sm text-blue-100 pt-6 border-t border-white/20 font-medium text-center">
              {t("pricing.proDesc")}
            </p>
          </Card>

          {/* Pro Max Plan */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl rounded-3xl">
            <div className="mb-8">
              <h3 className="text-2xl mb-4 font-semibold">{t("pricing.proMax")}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">{t("pricing.proMaxPrice")}</span>
                <span className="text-gray-600 text-lg">{t("pricing.proMaxPeriod")}</span>
              </div>
              <p className="text-sm text-gray-600">{t("pricing.proMaxYear")}</p>
            </div>

            <a href="https://app.lex-flow.com" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="full" className="mb-8">
                {t("pricing.proMaxCta")}
              </Button>
            </a>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.proMaxFeature1")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.proMaxFeature2")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.proMaxFeature3")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.proMaxFeature4")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.proMaxFeature5")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{t("pricing.proMaxFeature6")}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 pt-6 border-t border-gray-200 font-medium text-center">
              {t("pricing.proMaxDesc")}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
