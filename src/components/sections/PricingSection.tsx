import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            Простые и честные цены
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Платишь за масштаб использования, а не за отключенные функции
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl rounded-3xl">
            <div className="mb-8">
              <h3 className="text-2xl mb-4 font-semibold">Basic</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">$7</span>
                <span className="text-gray-600 text-lg">/месяц</span>
              </div>
              <p className="text-sm text-gray-600">или $70/год (экономия $14)</p>
            </div>

            <Button variant="outline" size="full" className="mb-8">
              Начать
            </Button>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">5 клиентов, 10 кейсов</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">2 документа на кейс</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Версионность и diff</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Календарь и аналитика</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">AI-чат (ограничен)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">100 МБ хранилища</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 pt-6 border-t border-gray-200 font-medium text-center">
              Точка входа для знакомства
            </p>
          </Card>

          {/* Pro Plan */}
          <Card className="p-10 bg-gradient-to-br from-blue-600 to-purple-600 border-0 relative shadow-2xl scale-105 rounded-3xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-white text-blue-600 px-4 py-1.5 text-sm font-semibold shadow-lg">
                Популярный
              </Badge>
            </div>

            <div className="mb-8 text-white">
              <h3 className="text-2xl mb-4 font-semibold">Pro</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">$19</span>
                <span className="text-blue-100 text-lg">/месяц</span>
              </div>
              <p className="text-sm text-blue-100">или $180/год (экономия $48)</p>
            </div>

            <Button variant="light-colored" size="full" className="mb-8">
              Начать
            </Button>

            <div className="space-y-4 text-white mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">Безлимит клиентов и кейсов</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">Безлимит документов</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">Все возможности AI</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">AI-анализ документов</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">Судебная практика</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-0.5 font-bold" />
                <span className="text-base">20 ГБ хранилища</span>
              </div>
            </div>

            <p className="text-sm text-blue-100 pt-6 border-t border-white/20 font-medium text-center">
              Основной рабочий тариф
            </p>
          </Card>

          {/* Pro Max Plan */}
          <Card className="p-10 bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl rounded-3xl">
            <div className="mb-8">
              <h3 className="text-2xl mb-4 font-semibold">Pro Max</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">$70</span>
                <span className="text-gray-600 text-lg">/месяц</span>
              </div>
              <p className="text-sm text-gray-600">или $700/год (экономия $140)</p>
            </div>

            <Button variant="outline" size="full" className="mb-8">
              Начать
            </Button>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">До 8 пользователей</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Роли и права доступа</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Командная работа</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Всё из Pro для команды</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Безлимит хранилища</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">Приоритетная поддержка</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 pt-6 border-t border-gray-200 font-medium text-center">
              Для команд и юрфирм
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
