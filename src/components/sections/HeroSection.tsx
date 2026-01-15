import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, FolderOpen, Users, FileText, ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-8">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1.5 text-sm font-medium hover:shadow-lg transition-all">
            {t("hero.badge")}
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] font-bold">
            {t("hero.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://app.lex-flow.com" target="_blank" rel="noopener noreferrer">
              <Button variant="dark" size="xl">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            {/* <a href="https://app.lex-flow.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-scale" size="xl">
                {t("hero.demo")}
              </Button>
            </a> */}
          </div>

          <p className="text-sm text-gray-500 font-medium">
            {t("hero.noCreditCard")}
          </p>
        </div>

        {/* Hero Visual - System Structure */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <FolderOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-lg">{t("hero.structure")}</span>
                <p className="text-sm text-gray-500">{t("hero.structureSubtitle")}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Client Card */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border-2 border-blue-200">
                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("hero.clients")}</h3>
                <p className="text-sm text-gray-600 mb-4">{t("hero.clientsDesc")}</p>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <span>{t("hero.clientsCount")}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>

              {/* Case Card */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border-2 border-purple-200">
                <div className="h-12 w-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                  <FolderOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("hero.cases")}</h3>
                <p className="text-sm text-gray-600 mb-4">{t("hero.casesDesc")}</p>
                <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                  <span>{t("hero.casesCount")}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>

              {/* Documents Card */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border-2 border-green-200">
                <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("hero.documents")}</h3>
                <p className="text-sm text-gray-600 mb-4">{t("hero.documentsDesc")}</p>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <span>{t("hero.documentsCount")}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
