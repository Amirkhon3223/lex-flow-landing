import { Card } from "../ui/card";
import { Users, FolderOpen, FileText, Calendar, BarChart3, Brain } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function FeaturesSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Clients Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("features.clients")}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("features.clientsDesc")}
            </p>
          </Card>

          {/* Cases Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
              <FolderOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("features.cases")}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("features.casesDesc")}
            </p>
          </Card>

          {/* Documents Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-8 shadow-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("features.documents")}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("features.documentsDesc")}
            </p>
          </Card>

          {/* Calendar Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-8 shadow-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("features.calendar")}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("features.calendarDesc")}
            </p>
          </Card>

          {/* Analytics Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-8 shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("features.analytics")}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("features.analyticsDesc")}
            </p>
          </Card>

          {/* AI Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-8 shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("features.ai")}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("features.aiDesc")}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
