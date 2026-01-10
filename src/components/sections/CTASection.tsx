import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold tracking-tight leading-tight">
          Организуй свою практику как профессионал
        </h2>
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Клиенты, дела, документы, календарь — всё в одном месте. Попробуй LexFlow бесплатно
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="light" size="2xl">
            Попробовать бесплатно
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button variant="outline-white" size="2xl">
            Смотреть демо
          </Button>
        </div>

        <p className="text-sm text-blue-200 mt-8 font-medium">
          Без кредитной карты • Настройка за 2 минуты • Отмени в любой момент
        </p>
      </div>
    </section>
  );
}
