import { Card } from "../ui/card";
import { Users, Building2, Briefcase } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function ForWhomSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            {t("forWhom.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-10 bg-gradient-to-br from-white to-blue-50/30 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("forWhom.solo")}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {t("forWhom.soloDesc")}
            </p>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-white to-green-50/30 border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-8 shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("forWhom.firm")}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {t("forWhom.firmDesc")}
            </p>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-white to-purple-50/30 border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t("forWhom.inhouse")}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {t("forWhom.inhouseDesc")}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
