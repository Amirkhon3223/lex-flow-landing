import { Card } from "../ui/card";
import { FolderOpen, FileText, Calendar } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            {t("problem.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("problem.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
              <FileText className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              {t("problem.chaos")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("problem.chaosDesc")}
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
              <FolderOpen className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              {t("problem.clients")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("problem.clientsDesc")}
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6">
              <Calendar className="h-7 w-7 text-yellow-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              {t("problem.time")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("problem.timeDesc")}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
