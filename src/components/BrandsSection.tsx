"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, Tablet, Laptop, Watch, Headphones, Cpu, Gamepad2, Camera } from "lucide-react";

export default function BrandsSection() {
  const { t, language } = useLanguage();

  const devices = [
    {
      name: language === 'uz' ? 'SMARTFONLAR' : language === 'ru' ? 'СМАРТФОНЫ' : language === 'en' ? 'SMARTPHONES' : 'TELEFONLAR',
      icon: <Smartphone className="w-16 h-16 text-blue-500" strokeWidth={1.5} />,
      textColor: "text-blue-500",
      glowColor: "rgba(59,130,246,0.15)",
    },
    {
      name: language === 'uz' ? 'PLANSHETLAR' : language === 'ru' ? 'ПЛАНШЕТЫ' : language === 'en' ? 'TABLETS' : 'TABLETLER',
      icon: <Tablet className="w-16 h-16 text-purple-500" strokeWidth={1.5} />,
      textColor: "text-purple-500",
      glowColor: "rgba(168,85,247,0.15)",
    },
    {
      name: language === 'uz' ? 'NOUTBUKLAR' : language === 'ru' ? 'НОУТБУКИ' : language === 'en' ? 'LAPTOPS' : 'LAPTOPLAR',
      icon: <Laptop className="w-16 h-16 text-orange-500" strokeWidth={1.5} />,
      textColor: "text-orange-500",
      glowColor: "rgba(249,115,22,0.15)",
    },
    {
      name: language === 'uz' ? 'AQLLI SOATLAR' : language === 'ru' ? 'УМНЫЕ ЧАСЫ' : language === 'en' ? 'SMART WATCHES' : 'AKILLI SAATLER',
      icon: <Watch className="w-16 h-16 text-emerald-500" strokeWidth={1.5} />,
      textColor: "text-emerald-500",
      glowColor: "rgba(16,185,129,0.15)",
    },
    {
      name: language === 'uz' ? 'QULOQCHINLAR' : language === 'ru' ? 'НАУШНИКИ' : language === 'en' ? 'EARBUDS' : 'KULAKLIKLAR',
      icon: <Headphones className="w-16 h-16 text-cyan-500" strokeWidth={1.5} />,
      textColor: "text-cyan-500",
      glowColor: "rgba(6,182,212,0.15)",
    },
    {
      name: language === 'uz' ? 'GEYMPADLAR' : language === 'ru' ? 'ГЕЙМПАДЫ' : language === 'en' ? 'GAMEPADS' : 'GAMEPADLER',
      icon: <Gamepad2 className="w-16 h-16 text-rose-500" strokeWidth={1.5} />,
      textColor: "text-rose-500",
      glowColor: "rgba(244,63,94,0.15)",
    },
    {
      name: language === 'uz' ? 'KAMERALAR' : language === 'ru' ? 'КАМЕРЫ' : language === 'en' ? 'CAMERAS' : 'KAMERALAR',
      icon: <Camera className="w-16 h-16 text-yellow-500" strokeWidth={1.5} />,
      textColor: "text-yellow-500",
      glowColor: "rgba(234,179,8,0.15)",
    },
    {
      name: language === 'uz' ? 'BOSHQA' : language === 'ru' ? 'ДРУГИЕ' : language === 'en' ? 'OTHERS' : 'DİĞER',
      icon: <Cpu className="w-16 h-16 text-gray-300" strokeWidth={1.5} />,
      textColor: "text-gray-300",
      glowColor: "rgba(209,213,219,0.15)",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[url('/bg-dark-1.png')] bg-fixed bg-cover bg-center overflow-hidden" id="brendlar">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Area */}
        <div className="flex flex-col items-center justify-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 tracking-tighter text-center px-4"
          >
            {language === 'uz' ? "Barcha turdagi qurilmalarni ta'mirlaymiz" : language === 'ru' ? 'Мы ремонтируем все виды устройств' : language === 'en' ? 'We repair all types of devices' : 'Tüm cihaz türlerini onarıyoruz'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl text-center mb-8"
          >
            {t("brands.desc")}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
          />
        </div>

        {/* Premium Masonry / Square Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 1.02, 0.73, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-center justify-center p-8 sm:p-12 h-56 sm:h-64 rounded-[2rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Internal Dynamic Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem] mix-blend-screen"
                style={{ background: `radial-gradient(circle at center, ${device.glowColor}, transparent 60%)` }}
              />
              
              {/* Massive Watermark Icon in background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-150 transition-all duration-700 pointer-events-none">
                <div className="w-48 h-48 flex items-center justify-center scale-[3]">
                  {device.icon}
                </div>
              </div>

              {/* Main Icon */}
              <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                {device.icon}
              </div>
              
              {/* Device Name */}
              <span className={`relative z-10 text-sm sm:text-lg font-bold tracking-[0.2em] uppercase text-center ${device.textColor}`}>
                {device.name}
              </span>
              
              {/* Edge highlight */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
