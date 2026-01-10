import { Users, FolderOpen, FileText, Zap } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Простой workflow от клиента до закрытия дела
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                1
              </div>
            </div>
            <div className="h-20 w-20 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">
              Создай клиента
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Добавь карточку клиента с контактами
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                2
              </div>
            </div>
            <div className="h-20 w-20 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <FolderOpen className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">
              Открой кейс
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Создай дело для клиента с описанием
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                3
              </div>
            </div>
            <div className="h-20 w-20 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <FileText className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">
              Загрузи документы
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Добавь договоры с автоверсионностью
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                4
              </div>
            </div>
            <div className="h-20 w-20 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <Zap className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">
              Работай спокойно
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Всё под контролем в одном месте
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
