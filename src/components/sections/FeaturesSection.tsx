import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, FolderOpen, FileText, Calendar, BarChart3, Brain } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-1.5 text-sm font-medium mb-6">
            Всё в одном месте
          </Badge>
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            Вся работа юриста — одна платформа
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            От первого звонка клиента до закрытия дела — всё под контролем
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Clients Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Клиенты
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Карточки клиентов с контактами, историей и всеми делами в одном месте
            </p>
          </Card>

          {/* Cases Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
              <FolderOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Кейсы
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Дела с задачами, комментариями и важными датами. Удобная структура по клиентам
            </p>
          </Card>

          {/* Documents Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-8 shadow-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Документы
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Полная версионность с diff. Видишь каждое изменение — как в GitHub
            </p>
          </Card>

          {/* Calendar Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-8 shadow-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Календарь
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Даты судов, встречи с клиентами, дедлайны — всё в едином календаре
            </p>
          </Card>

          {/* Analytics Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-8 shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Аналитика
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Статистика по делам, клиентам, документам. Понимай свою практику
            </p>
          </Card>

          {/* AI Module */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-8 shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              AI-помощник
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Анализ документов, поиск рисков, судебная практика, рекомендации
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
