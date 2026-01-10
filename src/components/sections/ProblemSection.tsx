import { Card } from "../ui/card";
import { FolderOpen, FileText, Calendar, BarChart3 } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            Знакомые проблемы?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Хаос в документах, потерянные даты, забытые клиенты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
              <FolderOpen className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              Хаос в делах
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Клиенты в телефоне, дела в блокноте, документы в почте — всё разрознено
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
              <FileText className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              Версии документов
            </h3>
            <p className="text-gray-600 leading-relaxed">
              «Финал_v12» в почте — что изменилось? Где предыдущая версия?
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6">
              <Calendar className="h-7 w-7 text-yellow-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              Потерянные даты
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Даты судов и встреч разбросаны по календарям и напоминаниям
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
            <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-lg mb-3 font-semibold">
              Нет понимания
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Сколько дел в работе? Какой доход? Где узкие места?
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
