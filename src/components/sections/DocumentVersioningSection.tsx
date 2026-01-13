import { Badge } from "../ui/badge";
import { GitCompare, Upload, Search, RotateCcw } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function DocumentVersioningSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 px-4 py-1.5 text-sm font-medium">
              {t("documentVersioning.badge")}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t("documentVersioning.title")}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("documentVersioning.subtitle")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Upload className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("documentVersioning.upload")}</h3>
                  <p className="text-gray-600">{t("documentVersioning.uploadDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("documentVersioning.diff")}</h3>
                  <p className="text-gray-600">{t("documentVersioning.diffDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("documentVersioning.rollback")}</h3>
                  <p className="text-gray-600">{t("documentVersioning.rollbackDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <GitCompare className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold">{t("documentVersioning.diff")}</span>
                </div>
                <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-2">v1.2 → v1.3</Badge>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-gray-700 font-medium">1. General Provisions</span>
                </div>
                <div className="p-3 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <span className="line-through text-red-700 font-medium">Penalty is 5% of amount</span>
                </div>
                <div className="p-3 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <span className="text-green-700 font-medium">Penalty is 2% of amount</span>
                </div>
                <div className="p-3 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <span className="text-green-700 font-medium">+ Early termination clause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
