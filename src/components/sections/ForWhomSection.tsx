import { Card } from "../ui/card";
import { Users, Shield, Zap } from "lucide-react";

export function ForWhomSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            Для кого LexFlow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            От соло-юриста до юридической фирмы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-10 bg-gradient-to-br from-white to-blue-50/30 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Соло-юристы
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Ведёшь клиентов самостоятельно? LexFlow систематизирует твою практику — клиенты, дела, документы в порядке
            </p>
            <p className="text-sm text-blue-600 font-medium">
              → Организованность и контроль
            </p>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-white to-green-50/30 border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-8 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Малые бюро
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Команда из 2–8 юристов? Работайте в одном workspace. Общая база клиентов и дел, роли и права доступа
            </p>
            <p className="text-sm text-green-600 font-medium">
              → Командная работа и прозрачность
            </p>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-white to-purple-50/30 border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 font-semibold">
              Ассистенты
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Помогаешь юристу? LexFlow упрощает контроль версий документов и ведение дел без хаоса
            </p>
            <p className="text-sm text-purple-600 font-medium">
              → Быстрая работа без ошибок
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
