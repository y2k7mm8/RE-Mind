import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const testQuestions = [
  {
    subject: 'Математика',
    icon: '🔢',
    color: 'teal',
    question: 'Чему равно значение выражения: (15 + 25) × 2 - 10?',
    options: ['60', '70', '80', '90'],
    correct: 1,
    explanation: 'Сначала скобки: 15 + 25 = 40, затем умножение: 40 × 2 = 80, и вычитание: 80 - 10 = 70'
  },
  {
    subject: 'Физика',
    icon: '⚛️',
    color: 'purple',
    question: 'Какая формула описывает второй закон Ньютона?',
    options: ['E = mc²', 'F = ma', 'P = mv', 'W = Fd'],
    correct: 1,
    explanation: 'Второй закон Ньютона: F = ma (сила равна произведению массы на ускорение)'
  },
  {
    subject: 'История',
    icon: '📜',
    color: 'cyan',
    question: 'В каком году произошла Великая Октябрьская революция?',
    options: ['1905', '1914', '1917', '1922'],
    correct: 2,
    explanation: 'Октябрьская революция произошла в 1917 году в России'
  },
  {
    subject: 'Английский',
    icon: '🇬🇧',
    color: 'pink',
    question: 'Which word is a synonym for "happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correct: 1,
    explanation: '"Joyful" (радостный) является синонимом слова "happy" (счастливый)'
  },
];

export function MiniTests() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = testQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section className="py-24 bg-[#faf9f7] dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/30 rounded-full mb-6 shadow-sm">
            <span className="text-indigo-700 dark:text-indigo-300 text-sm font-medium">Попробуйте сами</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Мини-тесты RE:MIND
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
            Интерактивные вопросы адаптируются под уровень знаний каждого ученика
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-sm"
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-slate-500 dark:text-slate-300 font-medium">
                    Вопрос {currentQuestion + 1} из {testQuestions.length}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-300 font-medium">
                    Правильных: {score}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-600/50 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / testQuestions.length) * 100}%` }}
                    className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-blue-500 dark:to-purple-500"
                  />
                </div>
              </div>

              {/* Subject badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-blue-500/10 border border-teal-100 dark:border-blue-500/30 rounded-full mb-6 shadow-sm">
                <span className="text-xl">{question.icon}</span>
                <span className="text-teal-700 dark:text-blue-300 font-medium">{question.subject}</span>
              </div>

              {/* Question */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 leading-relaxed">
                {question.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correct;
                  const showCorrect = showResult && isCorrect;
                  const showWrong = showResult && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      whileHover={!showResult ? { scale: 1.01 } : {}}
                      whileTap={!showResult ? { scale: 0.99 } : {}}
                      className={`w-full p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all ${
                        showCorrect
                          ? 'bg-teal-50 dark:bg-green-900/20 border-teal-500 dark:border-green-500 text-teal-700 dark:text-green-300 shadow-sm'
                          : showWrong
                          ? 'bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-500 text-red-700 dark:text-red-300 shadow-sm'
                          : isSelected && !showResult
                          ? 'bg-teal-50 dark:bg-blue-900/20 border-teal-500 dark:border-blue-500 text-teal-700 dark:text-blue-300 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:border-teal-200 dark:hover:border-blue-500/50'
                      } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className="font-medium">{option}</span>
                      {showCorrect && <CheckCircle className="w-6 h-6 text-teal-600 dark:text-green-400" />}
                      {showWrong && <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl mb-6 ${
                      selectedAnswer === question.correct
                        ? 'bg-teal-50 dark:bg-green-900/20 border border-teal-200 dark:border-green-700/50'
                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {selectedAnswer === question.correct ? (
                        <CheckCircle className="w-6 h-6 text-teal-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className={`font-bold mb-1 ${
                          selectedAnswer === question.correct ? 'text-teal-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                        }`}>
                          {selectedAnswer === question.correct ? 'Правильно!' : 'Неправильно'}
                        </p>
                        <p className="text-slate-600 dark:text-slate-200 text-sm">{question.explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {showResult && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleNext}
                  className="w-full px-6 py-4 bg-teal-500 hover:bg-teal-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20 dark:shadow-blue-500/20 font-medium"
                >
                  {currentQuestion < testQuestions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm text-center shadow-sm"
            >
              <div className="mb-6">
                <div className="text-6xl mb-4">
                  {score === testQuestions.length ? '🎉' : score >= testQuestions.length / 2 ? '👍' : '💪'}
                </div>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">
                  {score === testQuestions.length
                    ? 'Отлично!'
                    : score >= testQuestions.length / 2
                    ? 'Хороший результат!'
                    : 'Продолжайте учиться!'}
                </h3>
                <p className="text-xl text-slate-600 dark:text-slate-200 mb-8">
                  Вы ответили правильно на {score} из {testQuestions.length} вопросов
                </p>
              </div>

              {/* Score visualization */}
              <div className="mb-8">
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      className="text-slate-200 dark:text-slate-600"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-teal-500 dark:text-blue-500"
                      initial={{ strokeDashoffset: 552 }}
                      animate={{ strokeDashoffset: 552 - (552 * score) / testQuestions.length }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{
                        strokeDasharray: 552,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-4xl font-bold text-slate-800 dark:text-white">
                        {Math.round((score / testQuestions.length) * 100)}%
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-300">Точность</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-teal-50 dark:bg-blue-900/20 border border-teal-100 dark:border-blue-700/50 rounded-xl mb-6">
                <p className="text-teal-700 dark:text-blue-200 text-sm">
                  🧠 RE:MIND запомнит ваши результаты и предложит повторить сложные темы в оптимальное время
                </p>
              </div>

              <button
                onClick={handleRestart}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white rounded-xl flex items-center justify-center gap-2 transition-all mx-auto font-medium shadow-sm"
              >
                <RotateCcw className="w-5 h-5" />
                Пройти заново
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}