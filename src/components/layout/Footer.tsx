import { GitCompare } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <GitCompare className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-xl font-semibold">LexFlow</span>
            </div>
            <p className="text-sm leading-relaxed">
              Система управления юридической практикой
            </p>
          </div>

          <div>
            <h4 className="text-white text-base mb-4 font-semibold">Продукт</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Демо</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base mb-4 font-semibold">Компания</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base mb-4 font-semibold">Юридическое</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2026 LexFlow. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
