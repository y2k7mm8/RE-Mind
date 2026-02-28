import { Brain, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative max-h-full flex items-center justify-center overflow-hidden bg-[#faf9f7] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto  px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* RE:MIND Logo */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent tracking-tight">
              RE:MIND
            </h1>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-50 dark:bg-blue-500/20 border border-teal-100 dark:border-blue-500/30 rounded-full shadow-sm">
              <Brain className="w-5 h-5 text-teal-600 dark:text-blue-400" />
              <span className="text-teal-700 dark:text-blue-300 text-sm font-medium">
                Лицей 99, Бишкек
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
            Школьные знания в долговременной памяти
          </h2>

          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Система интервального повторения для освоения школьной программы. От
            математики до истории — всё остаётся в памяти навсегда.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://ssss-git-main-victorvladimirovich1s-projects.vercel.app/"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20 dark:shadow-blue-500/20 font-medium"
            >
              Начать обучение
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl border border-slate-200 dark:border-slate-600 transition-all shadow-sm font-medium">
              Узнать больше
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
        >
          {[
            {
              value: "87%",
              label: "Удержание знаний через 30 дней",
              color: "teal",
            },
            {
              value: "3x",
              label: "Эффективнее обычного повторения",
              color: "purple",
            },
            { value: "12+", label: "Школьных предметов", color: "cyan" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-100 dark:border-slate-700/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`text-5xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3`}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
