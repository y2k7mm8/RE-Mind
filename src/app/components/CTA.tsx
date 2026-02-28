import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-[#faf9f7] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-purple-400/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-green-500/10 border border-teal-100 dark:border-green-500/30 rounded-full mb-6 shadow-sm">
              <CheckCircle className="w-4 h-4 text-teal-600 dark:text-green-400" />
              <span className="text-teal-700 dark:text-green-300 text-sm font-medium">
                Готовы начать?
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-teal-700 to-cyan-700 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Превратите обучение в устойчивые знания
          </h2>

          <p className="text-xl text-slate-500 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Внедрите RE:MIND в образовательный процесс лицея и увеличьте
            успеваемость учеников в 3 раза
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20 dark:shadow-blue-500/20 text-lg font-medium">
              Запросить демо
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl border border-slate-200 dark:border-slate-600 transition-all text-lg font-medium flex items-center gap-2 shadow-sm">
              <Mail className="w-5 h-5" />
              Связаться с нами
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "✅", text: "Бесплатное тестирование" },
              { icon: "🎓", text: "Обучение учителей" },
              { icon: "📊", text: "Аналитика успеваемости" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-xl backdrop-blur-sm shadow-sm"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-slate-600 dark:text-slate-200 text-sm font-medium">
                  {feature.text}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-slate-200 dark:border-slate-600/50 pt-8">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-2xl font-bold text-slate-400 dark:text-slate-500">
                RE:MIND
              </div>
              <div className="text-slate-400 dark:text-slate-500">×</div>
              <div className="text-xl font-semibold text-slate-400 dark:text-slate-500">
                Лицей 99
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
