import { X, MessageCircle, Phone, Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { Button } from "./ui/button";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const { t } = useI18n();

  if (!isOpen) return null;

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Telegram",
      description: t("support.telegramDesc"),
      link: "https://t.me/Amirich_us",
      buttonText: t("support.openTelegram"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: t("support.whatsappDesc"),
      link: "https://wa.me/12672283117",
      buttonText: t("support.openWhatsapp"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Phone,
      title: t("support.phone"),
      description: "+1 (267) 228-3117",
      link: "tel:+12672283117",
      buttonText: t("support.call"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Mail,
      title: t("support.email"),
      description: "lexflow.team@gmail.com",
      link: "mailto:lexflow.team@gmail.com",
      buttonText: t("support.sendEmail"),
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-6 sm:py-8 rounded-t-2xl sm:rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {t("support.title")}
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            {t("support.subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      {channel.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 break-all">
                      {channel.description}
                    </p>
                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline-scale"
                        className="text-sm sm:text-base"
                      >
                        {channel.buttonText}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-center">
          <p className="text-sm text-gray-500">
            {t("support.workingHours")}
          </p>
        </div>
      </div>
    </div>
  );
}
