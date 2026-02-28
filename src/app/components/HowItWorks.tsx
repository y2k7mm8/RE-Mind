import { BookOpen, Brain, Calendar, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Изучение материала',
    description: 'Ученик проходит тему на уроке или дома. RE:MIND фиксирует первичное усвоение материала.',
    color: 'teal',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Анализ с помощью ИИ',
    description: 'Алгоритм рассчитывает индивидуальную кривую забывания ученика и определяет оптимальный интервал.',
    color: 'purple',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Интервальные повторения',
    description: 'В нужное время RE:MIND напоминает о повторении и генерирует адаптивные тесты по школьным предметам.',
    color: 'cyan',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Адаптация алгоритма',
    description: 'На основе результатов тестов система корректирует интервалы и сложность заданий.',
    color: 'pink',
  },
  {
    number: '05',
    icon: Award,
    title: 'Достижение мастерства',
    description: 'Знания закрепляются в долговременной памяти, растет индекс памяти и уровень по предмету.',
    color: 'amber',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-teal-400/10 dark:bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-blue-500/10 border border-teal-100 dark:border-blue-500/30 rounded-full mb-6 shadow-sm">
            <span className="text-teal-700 dark:text-blue-300 text-sm font-medium">Методология</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Пятишаговая система превращения знаний в устойчивые навыки
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 via-cyan-200 to-purple-200 dark:from-blue-500/50 dark:via-purple-500/50 dark:to-pink-500/50" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  {/* Icon and number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-blue-900/30 dark:to-blue-800/10 border border-teal-100 dark:border-blue-700/50 backdrop-blur-sm flex flex-col items-center justify-center relative z-10 shadow-sm">
                      <div className="text-4xl font-bold text-slate-300 dark:text-slate-500 mb-2">{step.number}</div>
                      <step.icon className="w-12 h-12 text-teal-600 dark:text-blue-400" />
                    </div>
                    {/* Dot on line */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-2 border-teal-300 dark:border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-sm" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-2xl backdrop-blur-sm hover:shadow-md transition-all">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-teal-100 dark:border-blue-700/30 rounded-2xl backdrop-blur-sm text-center shadow-sm"
        >
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-4 font-medium">
            Весь процесс автоматизирован и требует минимум времени от студента
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-300">
            <span>⏱️ 5-10 минут в день</span>
            <span>📱 Доступно на всех устройствах</span>
            <span>🔔 Умные напоминания</span>
            <span>📊 Детальная аналитика</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}