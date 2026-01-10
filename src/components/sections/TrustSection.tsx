import { Lock, Shield, Star } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 font-bold tracking-tight">
            Безопасность и надёжность
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">Шифрование данных</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Все документы защищены современным шифрованием
            </p>
          </div>

          <div className="text-center group">
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">Адвокатская тайна</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Построено для юристов — с учётом конфиденциальности
            </p>
          </div>

          <div className="text-center group">
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl mb-3 font-semibold">Регулярные бэкапы</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Твои данные всегда в сохранности и доступны
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
