import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад на главную
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Условия использования
          </h1>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              ТЗ: Условия использования
            </h2>
            <p className="text-yellow-900">
              Здесь должен быть полный текст Условий использования LexFlow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
