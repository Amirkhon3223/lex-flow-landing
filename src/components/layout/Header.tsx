import { Button } from "../ui/button";
import { GitCompare } from "lucide-react";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-2xl border-b border-gray-200/50 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <GitCompare className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">LexFlow</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors text-[15px] font-medium">Возможности</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors text-[15px] font-medium">Цены</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-[15px] font-medium">Блог</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-[15px] font-medium hover:bg-gray-100">
              Войти
            </Button>
            <Button variant="dark" className="text-[15px] font-medium px-6">
              Попробовать
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
