import { Badge } from "../ui/badge";
import { GitCompare, Search, Clock } from "lucide-react";

export function DocumentVersioningSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 px-4 py-1.5 text-sm font-medium">
              Killer Feature
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Версионность документов как в GitHub
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Каждое изменение фиксируется. Наглядный diff показывает, что именно изменилось между версиями договора.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <GitCompare className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Полная история версий</h3>
                  <p className="text-gray-600">Все версии документа сохранены. Вернись к любой версии в один клик</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Наглядный diff</h3>
                  <p className="text-gray-600">Видишь изменения: что удалено (красным), что добавлено (зелёным)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Кто и когда</h3>
                  <p className="text-gray-600">История изменений с указанием автора и времени правок</p>
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
                  <span className="font-semibold">Сравнение версий</span>
                </div>
                <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-2">v1.2 → v1.3</Badge>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-gray-700 font-medium">1. Общие положения</span>
                </div>
                <div className="p-3 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <span className="line-through text-red-700 font-medium">Штраф составляет 5% от суммы</span>
                </div>
                <div className="p-3 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <span className="text-green-700 font-medium">Штраф составляет 2% от суммы</span>
                </div>
                <div className="p-3 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <span className="text-green-700 font-medium">+ Досрочное расторжение</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="font-medium">2 часа назад • 3 правки</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
