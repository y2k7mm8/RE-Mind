import { TrendingDown, Clock, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const forgettingCurveData = [
  { time: '0ч', retention: 100 },
  { time: '1д', retention: 58 },
  { time: '2д', retention: 44 },
  { time: '6д', retention: 36 },
  { time: '31д', retention: 21 },
];

export function Problem() {
  return (
    <section className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/30 rounded-full mb-6 shadow-sm">
            <TrendingDown className="w-4 h-4 text-red-500 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-300 text-sm font-medium">Проблема</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Кривая забывания Эббингауза
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Без системного повторения ученики теряют до 80% школьного материала уже через месяц после изучения
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Быстрое забывание</h3>
              <p className="text-slate-500 dark:text-slate-300 leading-relaxed">
                После урока или домашнего задания ученики забывают более 50% материала уже в первый день
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Неэффективное повторение</h3>
              <p className="text-slate-500 dark:text-slate-300 leading-relaxed">
                Традиционное зазубривание перед контрольной не создаёт устойчивые знания в долговременной памяти
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-2xl backdrop-blur-sm shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">График удержания информации</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={forgettingCurveData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-600" opacity={0.5} />
                <XAxis dataKey="time" className="stroke-slate-400 dark:stroke-slate-400" tick={{ fill: '#94a3b8' }} />
                <YAxis className="stroke-slate-400 dark:stroke-slate-400" tick={{ fill: '#94a3b8' }} unit="%" />
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
                <Line
                  type="monotone"
                  dataKey="retention"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-slate-400 dark:text-slate-400 mt-4 text-center">
              Без системного повторения эффективность обучения стремительно падает
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}