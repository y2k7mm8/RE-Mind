import { Trophy, Zap, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const memoryIndexData = [
  { name: 'Индекс памяти', value: 87, fill: '#14b8a6' },
];

const topicStatuses = [
  { name: 'Математика', level: 'Мастер', index: 94, color: 'teal', icon: '🔢' },
  { name: 'Физика', level: 'Продвинутый', index: 87, color: 'purple', icon: '⚛️' },
  { name: 'История', level: 'Изучается', index: 72, color: 'cyan', icon: '📜' },
  { name: 'Английский', level: 'Новичок', index: 45, color: 'pink', icon: '🇬🇧' },
];

export function Rewards() {
  return (
    <section className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-yellow-500/10 border border-amber-100 dark:border-yellow-500/30 rounded-full mb-6 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-600 dark:text-yellow-400" />
            <span className="text-amber-700 dark:text-yellow-300 text-sm font-medium">Интеллектуальные награды</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Система мотивации и прогресса
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto">
            Визуализация достижений через индекс памяти, статусы тем и уровни мастерства
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-blue-900/30 dark:to-blue-800/20 border border-teal-100 dark:border-blue-700/50 rounded-2xl backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Индекс памяти</h3>
                <p className="text-slate-500 dark:text-slate-300">Общий показатель удержания знаний</p>
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                87
              </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                data={memoryIndexData}
                startAngle={180}
                endAngle={0}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                  fill="#14b8a6"
                />
              </RadialBarChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-white/80 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-600/30 shadow-sm">
                <div className="text-2xl font-bold text-teal-600 dark:text-green-400">+12</div>
                <div className="text-xs text-slate-500 dark:text-slate-300">За месяц</div>
              </div>
              <div className="p-3 bg-white/80 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-600/30 shadow-sm">
                <div className="text-2xl font-bold text-cyan-600 dark:text-blue-400">94%</div>
                <div className="text-xs text-slate-500 dark:text-slate-300">Точность</div>
              </div>
              <div className="p-3 bg-white/80 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-600/30 shadow-sm">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">156</div>
                <div className="text-xs text-slate-500 dark:text-slate-300">Повторений</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Статусы тем</h3>
            {topicStatuses.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-2xl backdrop-blur-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white">{topic.name}</h4>
                      <span className="text-sm text-teal-600 dark:text-blue-400 font-medium">{topic.level}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">{topic.index}</div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-600/50 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${topic.index}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-blue-600 dark:to-blue-400"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Trophy, label: 'Достижения', value: '24', color: 'amber' },
            { icon: Zap, label: 'Текущая серия', value: '12 дней', color: 'orange' },
            { icon: Target, label: 'Пройдено тем', value: '47', color: 'teal' },
            { icon: TrendingUp, label: 'Рост индекса', value: '+18%', color: 'cyan' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600/50 rounded-2xl backdrop-blur-sm text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-teal-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}