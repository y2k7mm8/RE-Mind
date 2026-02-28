import { Sparkles, Brain, Target, LineChart as LineChartIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const optimalRepetitionData = [
  { time: '0', traditional: 100, spaced: 100 },
  { time: '1 день', traditional: 58, spaced: 90 },
  { time: '2 дня', traditional: 44, spaced: 88 },
  { time: '1 нед', traditional: 36, spaced: 85 },
  { time: '1 мес', traditional: 21, spaced: 87 },
];

export function Solution() {
  return (
    <section className="py-24 bg-[#faf9f7] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 dark:bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-green-500/10 border border-teal-100 dark:border-green-500/30 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-green-400" />
            <span className="text-teal-700 dark:text-green-300 text-sm font-medium">Решение</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Интервальное повторение с ИИ
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Адаптивная система RE:MIND определяет оптимальные интервалы повторения для каждого ученика и каждого школьного предмета
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl backdrop-blur-sm mb-12 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Сравнение эффективности методов обучения
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={optimalRepetitionData}>
              <defs>
                <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSpaced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-600" opacity={0.5} />
              <XAxis dataKey="time" className="stroke-slate-400" tick={{ fill: '#94a3b8' }} />
              <YAxis className="stroke-slate-400" tick={{ fill: '#94a3b8' }} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgb(30, 41, 59)',
                  border: '1px solid rgb(51, 65, 85)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
                }}
                labelStyle={{ color: '#f1f5f9', fontWeight: 600 }}
                itemStyle={{ color: '#f1f5f9' }}
              />
              <Area
                type="monotone"
                dataKey="traditional"
                stroke="#ef4444"
                strokeWidth={2}
                fill="url(#colorTraditional)"
                name="Традиционное обучение"
              />
              <Area
                type="monotone"
                dataKey="spaced"
                stroke="#14b8a6"
                strokeWidth={3}
                fill="url(#colorSpaced)"
                name="Интервальное повторение"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded" />
              <span className="text-slate-500 dark:text-slate-300 text-sm">Традиционное обучение</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-teal-500 rounded" />
              <span className="text-slate-500 dark:text-slate-300 text-sm">Интервальное повторение</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: 'Адаптивные алгоритмы',
              description: 'Система анализирует индивидуальные особенности памяти ученика и подбирает оптимальные интервалы',
              color: 'teal',
            },
            {
              icon: Target,
              title: 'Школьная программа',
              description: 'Математика, физика, химия, биология, история, английский — все предметы в одной системе',
              color: 'purple',
            },
            {
              icon: LineChartIcon,
              title: 'Аналитика для учителей',
              description: 'Учителя видят статистику по каждому ученику и могут корректировать образовательный процесс',
              color: 'cyan',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl backdrop-blur-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}-50 dark:bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}