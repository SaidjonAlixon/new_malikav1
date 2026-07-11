import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0a101c] min-h-screen">
      <div className="pt-[120px] pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-gray-300">
          
          <Link href="/" className="group inline-flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-500 mb-12 backdrop-blur-sm relative overflow-hidden w-fit cursor-pointer">
            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
            <div className="w-8 h-8 shrink-0 rounded-full bg-blue-600 flex items-center justify-center border border-blue-500/50 relative z-10 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)]">
              <ArrowLeft size={16} className="text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
            </div>
            <span className="text-xs font-bold tracking-[0.1em] uppercase text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300">
              Главная
            </span>
          </Link>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg">
              Настоящая Политика конфиденциальности объясняет, как «Малика Сервис» (далее — «Мы») собирает, использует и защищает данные пользователей (далее — «Вы»). Мы серьёзно относимся к безопасности ваших персональных данных.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Какие данные мы собираем?</h2>
            <p>
              В процессе использования наших услуг мы можем собирать следующие данные, которые вы добровольно предоставляете:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ваше имя (для обращения при оформлении заказа)</li>
              <li>Номер телефона (для связи с вами и подтверждения заказа)</li>
              <li>Выбранный тип услуги и ваши комментарии</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Как мы используем данные?</h2>
            <p>
              Собранные персональные данные используются для следующих целей:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ответ на ваш запрос и предоставление услуг</li>
              <li>Связь с вами по вопросам обслуживания устройства</li>
              <li>Улучшение качества услуг и анализ работы сайта (например, через Google Analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Передача данных третьим лицам</h2>
            <p>
              Мы не продаём, не обмениваем и не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Безопасность информации</h2>
            <p>
              Мы принимаем все необходимые меры безопасности для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Ваши данные хранятся на защищённых серверах.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Изменения</h2>
            <p>
              Мы можем время от времени вносить изменения в настоящую Политику конфиденциальности. Любые изменения публикуются на этой странице и вступают в силу с момента публикации.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Контакты</h2>
            <p>
              Если у вас есть вопросы по настоящей Политике конфиденциальности, вы можете связаться с нами:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Адрес:</strong> Ташкент, Шайхантахурский район, ТЦ Малика, блок А, магазин 15</li>
              <li><strong>Телефон:</strong> +998 33 999 03 33</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
