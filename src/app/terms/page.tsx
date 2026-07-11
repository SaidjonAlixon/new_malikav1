import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

export default function TermsOfService() {
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
            Условия использования
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg">
              Благодарим вас за посещение нашего веб-сайта и использование наших услуг. Пожалуйста, внимательно ознакомьтесь с настоящими условиями перед использованием услуг «Малика Сервис» (далее — «Мы»).
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Общие положения</h2>
            <p>
              Используя данный веб-сайт, вы полностью соглашаетесь с настоящими Условиями использования. Если вы не согласны с какой-либо частью этих условий, просим вас не использовать наш веб-сайт.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Предоставление услуг</h2>
            <p>
              Мы предоставляем услуги по техническому обслуживанию мобильных устройств, замене запчастей и настройке программного обеспечения. Цены и сроки, указанные на сайте, являются ориентировочными — окончательная стоимость определяется после непосредственного осмотра устройства.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Гарантийные условия</h2>
            <p>
              Мы обычно предоставляем гарантию до 6 месяцев на выполненные работы и установленные запчасти (оригинальные детали). Однако гарантия утрачивает силу, если устройство было уронено, попало в воду или вскрыто в другой мастерской.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Использование материалов сайта</h2>
            <p>
              Все материалы веб-сайта (тексты, дизайн, логотипы) защищены. Несанкционированное копирование и распространение в коммерческих целях запрещено.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Ограничение ответственности</h2>
            <p>
              Мы стремимся к бесперебойной и безошибочной работе сайта, однако не несём ответственности за проблемы, вызванные перебоями в интернете или действиями третьих лиц.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Изменения</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящие Условия использования в любое время. Изменения вступают в силу с момента их публикации на веб-сайте.
            </p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
