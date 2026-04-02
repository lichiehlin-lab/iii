import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, mbtiTypes } from './data';
import { 
  ChevronRight, ChevronLeft, RotateCcw, Globe, User, Menu,
  Layout, FlaskConical, Target, Zap, Sparkles, Feather, Mic, Star,
  ClipboardCheck, Shield, Briefcase, Coffee, Wrench, Brush, Flame, Music
} from 'lucide-react';

const icons: Record<string, any> = {
  Layout, FlaskConical, Target, Zap, Sparkles, Feather, Mic, Star,
  ClipboardCheck, Shield, Briefcase, Coffee, Wrench, Brush, Flame, Music
};

type View = 'cover' | 'instructions' | 'test' | 'result';

// Character image mapping (using official 16Personalities avatar URLs)
const characterImages: Record<string, string> = {
  INTJ: "https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.png",
  INTP: "https://www.16personalities.com/static/images/personality-types/avatars/intp-logician.png",
  ENTJ: "https://www.16personalities.com/static/images/personality-types/avatars/entj-commander.png",
  ENTP: "https://www.16personalities.com/static/images/personality-types/avatars/entp-debater.png",
  INFJ: "https://www.16personalities.com/static/images/personality-types/avatars/infj-advocate.png",
  INFP: "https://www.16personalities.com/static/images/personality-types/avatars/infp-mediator.png",
  ENFJ: "https://www.16personalities.com/static/images/personality-types/avatars/enfj-protagonist.png",
  ENFP: "https://www.16personalities.com/static/images/personality-types/avatars/enfp-campaigner.png",
  ISTJ: "https://www.16personalities.com/static/images/personality-types/avatars/istj-logistician.png",
  ISFJ: "https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender.png",
  ESTJ: "https://www.16personalities.com/static/images/personality-types/avatars/estj-executive.png",
  ESFJ: "https://www.16personalities.com/static/images/personality-types/avatars/esfj-consul.png",
  ISTP: "https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso.png",
  ISFP: "https://www.16personalities.com/static/images/personality-types/avatars/isfp-adventurer.png",
  ESTP: "https://www.16personalities.com/static/images/personality-types/avatars/estp-entrepreneur.png",
  ESFP: "https://www.16personalities.com/static/images/personality-types/avatars/esfp-entertainer.png",
};

export default function App() {
  const [view, setView] = useState<View>('cover');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});

  const progress = useMemo(() => {
    return Math.round(((Object.keys(answers).length) / questions.length) * 100);
  }, [answers]);

  const handleStart = () => {
    setView('instructions');
    window.scrollTo(0, 0);
  };

  const handleBeginTest = () => {
    setView('test');
    setCurrentQuestionIndex(0);
    setAnswers({});
    window.scrollTo(0, 0);
  };

  const handleAnswer = (option: 'A' | 'B') => {
    const questionId = questions[currentQuestionIndex].id;
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      setView('result');
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const mbtiResult = useMemo(() => {
    if (view !== 'result') return null;

    const scores: Record<string, number> = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        const dimension = q.weight[answer];
        scores[dimension]++;
      }
    });

    const type = [
      scores.E >= scores.I ? 'E' : 'I',
      scores.S >= scores.N ? 'S' : 'N',
      scores.T >= scores.F ? 'T' : 'F',
      scores.J >= scores.P ? 'J' : 'P'
    ].join('');

    return { type, data: mbtiTypes[type] };
  }, [view, answers]);

  return (
    <div className="min-h-screen bg-[#fdfcf9] font-sans text-[#555] selection:bg-[#a8c6b9]/20 relative overflow-x-hidden">
      {/* Subtle Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'cover' && (
            <motion.div
              key="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col items-center justify-center p-6"
            >
              <div className="container mx-auto flex flex-col items-center text-center max-w-5xl">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 md:left-20 opacity-20 hidden md:block">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 110C10 110 40 10 110 10" stroke="#7a4a4a" strokeWidth="2" strokeDasharray="4 4"/>
                    <path d="M105 5L115 10L105 15" stroke="#7a4a4a" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="absolute bottom-20 right-10 md:right-20 opacity-20 hidden md:block">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M10 110C10 110 40 10 110 10" stroke="#7a4a4a" strokeWidth="2" strokeDasharray="4 4"/>
                    <path d="M105 5L115 10L105 15" stroke="#7a4a4a" strokeWidth="2"/>
                  </svg>
                </div>

                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-16"
                >
                  <div className="inline-block px-4 py-1 rounded-full bg-[#7a4a4a]/10 text-[#7a4a4a] text-xs font-bold tracking-widest uppercase mb-6">
                    Discover Your True Self
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-[#7a4a4a] mb-8 leading-tight tracking-tight">
                    MBTI <span className="text-[#a8c6b9]">Personality Test</span>
                  </h1>
                  <p className="text-lg md:text-2xl text-[#555]/70 max-w-2xl mx-auto leading-relaxed font-medium">
                    Explore your inner world and discover your unique personality code.<br />
                    Just 10 minutes to start your journey of self-discovery.
                  </p>
                </motion.div>

                {/* Character Illustrations Row */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex justify-center -space-x-8 mb-16"
                >
                  {['INTJ', 'INFJ', 'ISTJ', 'ISTP'].map((type, i) => (
                    <motion.div
                      key={type}
                      initial={{ rotate: i % 2 === 0 ? -10 : 10 }}
                      whileHover={{ y: -10, rotate: 0, zIndex: 10 }}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-4 border-[#fdfcf9] shadow-lg overflow-hidden flex items-center justify-center p-2"
                    >
                      <img 
                        src={characterImages[type]} 
                        alt={type} 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col items-center gap-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(122, 74, 74, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    className="bg-[#7a4a4a] hover:bg-[#633a3a] text-white px-20 py-7 rounded-full font-black text-2xl transition-all flex items-center gap-4 group"
                  >
                    Start Now <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* MBTI Introduction Section */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-32 text-left max-w-3xl mx-auto space-y-12 bg-white/50 backdrop-blur-sm p-12 rounded-[3rem] border border-[#7a4a4a]/5"
                >
                  <section>
                    <h3 className="text-2xl font-black text-[#7a4a4a] mb-4 flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#a8c6b9] rounded-full" />
                      About MBTI Test
                    </h3>
                    <p className="text-lg text-[#555]/80 leading-relaxed font-medium">
                      MBTI is a "personality preference tool," much like being left-handed or right-handed, reflecting your natural psychological tendencies. It is not an ability test, cannot judge intelligence or talent, nor is it a psychological diagnosis. All 16 personality types are equal, with no superiority or inferiority; every trait has its unique value and blind spots.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-black text-[#7a4a4a] mb-4 flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#d9b87d] rounded-full" />
                      Note: Results May Change
                    </h3>
                    <p className="text-lg text-[#555]/80 leading-relaxed font-medium">
                      Personality preferences may change due to <span className="text-[#7a4a4a] font-bold">age, environment, and stress levels</span>.
                    </p>
                  </section>
                </motion.div>
              </div>
            </motion.div>
          )}

          {view === 'instructions' && (
            <motion.div
              key="instructions"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="min-h-screen flex flex-col items-center justify-center p-6"
            >
              <div className="max-w-2xl w-full bg-white rounded-[4rem] p-12 md:p-20 shadow-[0_40px_80px_-20px_rgba(122,74,74,0.1)] border border-[#7a4a4a]/5 text-center relative overflow-hidden">
                {/* Decorative Background Illustration */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-10 pointer-events-none">
                  <img src={characterImages['INFJ']} alt="Decorative" className="w-64 h-auto" referrerPolicy="no-referrer" />
                </div>

                <div className="w-20 h-20 bg-[#a8c6b9]/20 rounded-full flex items-center justify-center mx-auto mb-10 relative z-10">
                  <User size={40} className="text-[#a8c6b9]" />
                </div>
                <h2 className="text-4xl font-black text-[#7a4a4a] mb-8 tracking-tight relative z-10">Answering Suggestions</h2>
                <p className="text-2xl text-[#555]/80 leading-relaxed mb-16 font-medium relative z-10">
                  Please answer based on <span className="text-[#7a4a4a] font-black">"your usual self"</span>,<br />
                  rather than "who you wish to be."<br />
                  This directly affects the accuracy of the test.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBeginTest}
                  className="bg-[#7a4a4a] hover:bg-[#633a3a] text-white px-16 py-6 rounded-full font-black text-xl transition-all shadow-xl shadow-[#7a4a4a]/20 relative z-10"
                >
                  Begin Test
                </motion.button>
              </div>
            </motion.div>
          )}

          {view === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="container mx-auto px-6 py-16 max-w-3xl min-h-screen flex flex-col"
            >
              {/* Progress Bar */}
              <div className="mb-20">
                <div className="flex justify-between items-end mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#7a4a4a] uppercase tracking-[0.2em]">Question</span>
                    <span className="text-lg font-black text-[#7a4a4a]">{currentQuestionIndex + 1}</span>
                    <span className="text-xs font-bold text-[#7a4a4a]/30">/ {questions.length}</span>
                  </div>
                  <span className="text-sm font-black text-[#a8c6b9]">{progress}%</span>
                </div>
                <div className="h-3 bg-[#7a4a4a]/5 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    className="h-full bg-[#a8c6b9] rounded-full shadow-[0_0_10px_rgba(168,198,185,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="flex-1 flex flex-col justify-center">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_30px_60px_-15px_rgba(122,74,74,0.08)] border border-[#7a4a4a]/5 mb-12 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#a3b1d6] via-[#a8c6b9] to-[#d9b87d]" />
                  
                  <h2 className="text-3xl md:text-5xl font-black text-center mb-20 text-[#7a4a4a] leading-[1.2] tracking-tight">
                    {questions[currentQuestionIndex].text}
                  </h2>

                  <div className="grid gap-6">
                    {(['A', 'B'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className={`w-full p-8 rounded-[2rem] border-2 transition-all text-xl font-bold text-center flex items-center justify-center relative group overflow-hidden
                          ${answers[questions[currentQuestionIndex].id] === opt 
                            ? 'border-[#a8c6b9] bg-[#a8c6b9]/5 text-[#7a4a4a]' 
                            : 'border-[#7a4a4a]/5 hover:border-[#a8c6b9]/50 hover:bg-[#fdfcf9] text-[#555]/80'}`}
                      >
                        <span className="relative z-10">{questions[currentQuestionIndex].options[opt]}</span>
                        {answers[questions[currentQuestionIndex].id] === opt && (
                          <motion.div 
                            layoutId="active-bg"
                            className="absolute inset-0 bg-[#a8c6b9]/10 -z-0"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`flex items-center gap-3 font-black text-sm uppercase tracking-widest transition-all ${currentQuestionIndex === 0 ? 'opacity-0 pointer-events-none' : 'text-[#7a4a4a]/40 hover:text-[#7a4a4a]'}`}
                  >
                    <ChevronLeft size={20} /> Previous
                  </button>
                  
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === Math.floor(currentQuestionIndex / (questions.length/3)) ? 'bg-[#a8c6b9]' : 'bg-[#7a4a4a]/10'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'result' && mbtiResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-6 py-20 max-w-6xl"
            >
              <div className="text-center mb-24">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100 }}
                  className="relative inline-block mb-12"
                >
                  <div className="absolute inset-0 bg-[#a8c6b9]/10 rounded-full blur-3xl scale-150 -z-10" />
                  <img 
                    src={characterImages[mbtiResult.type]} 
                    alt={mbtiResult.type}
                    className="w-64 md:w-96 h-auto mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <div className="space-y-4 mb-16">
                  <h2 className="text-xs font-black text-[#a8c6b9] uppercase tracking-[0.4em]">Your Personality Type</h2>
                  <h1 className="text-6xl md:text-8xl font-black text-[#7a4a4a] tracking-tighter">
                    {mbtiResult.data.title}
                  </h1>
                  <div className="inline-flex items-center gap-4">
                    <div className="h-px w-8 bg-[#7a4a4a]/20" />
                    <span className="text-4xl font-black text-[#7a4a4a]/30 tracking-widest">{mbtiResult.type}</span>
                    <div className="h-px w-8 bg-[#7a4a4a]/20" />
                  </div>
                </div>
                
                <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 mb-20 text-left shadow-[0_40px_80px_-20px_rgba(122,74,74,0.1)] border border-[#7a4a4a]/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Globe size={120} className="text-[#7a4a4a]" />
                  </div>

                  <div className="relative z-10">
                    <p className="text-2xl md:text-3xl leading-[1.6] text-[#555] mb-8 font-medium italic">
                      "{mbtiResult.data.description}"
                    </p>
                    <p className="text-xl leading-[1.6] text-[#7a4a4a]/60 mb-16 font-bold">
                      {mbtiResult.data.shortcomings}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-12 pt-16 border-t border-[#7a4a4a]/10">
                      <div>
                        <h3 className="text-xs font-black text-[#7a4a4a]/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                          <div className="w-4 h-px bg-[#7a4a4a]/40" /> Career Paths
                        </h3>
                        <p className="text-xl font-bold text-[#7a4a4a] leading-relaxed">{mbtiResult.data.career}</p>
                      </div>
                      <div className="flex flex-col justify-end items-end">
                        <button
                          onClick={handleStart}
                          className="flex items-center gap-3 px-10 py-5 bg-[#7a4a4a] text-white rounded-full font-black hover:bg-[#633a3a] transition-all shadow-xl shadow-[#7a4a4a]/20 group"
                        >
                          <RotateCcw size={20} className="group-hover:rotate-[-180deg] transition-transform duration-500" /> Retake Test
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personality Types Grid - Enhanced with Icons and Illustrations */}
              <div className="mt-40 pt-20 border-t border-[#7a4a4a]/10">
                <div className="text-center mb-32">
                  <h2 className="text-5xl font-black text-[#7a4a4a] mb-6 tracking-tight">Personality Types Overview</h2>
                  <p className="text-[#555]/50 font-bold tracking-widest uppercase text-sm">Explore all 16 personalities</p>
                </div>
                
                {['Analysts', 'Diplomats', 'Sentinels', 'Explorers'].map((group) => {
                  const groupTypes = Object.entries(mbtiTypes).filter(([_, data]) => data.group === group);
                  const groupColors: Record<string, string> = {
                    'Analysts': '#a3b1d6',
                    'Diplomats': '#a8c6b9',
                    'Sentinels': '#94b2c5',
                    'Explorers': '#d9b87d'
                  };
                  const groupColor = groupColors[group] || '#7a4a4a';
                  
                  return (
                    <div key={group} className="mb-40">
                      <div className="flex items-center gap-8 mb-20">
                        <h3 className="text-4xl font-black whitespace-nowrap" style={{ color: groupColor }}>{group}</h3>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#7a4a4a]/10 to-transparent relative">
                          <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-[#7a4a4a]/20 rotate-45" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {groupTypes.map(([type, data]) => {
                          const IconComponent = icons[data.iconName];
                          return (
                            <motion.div 
                              key={type}
                              whileHover={{ y: -12 }}
                              className={`text-center rounded-[3rem] transition-all bg-white border-2 relative group overflow-hidden
                                ${type === mbtiResult.type 
                                  ? 'border-[#7a4a4a] shadow-[0_40px_80px_-20px_rgba(122,74,74,0.15)] scale-105 z-20' 
                                  : 'border-transparent hover:border-[#7a4a4a]/10 hover:shadow-2xl'}`}
                            >
                              {/* Background Illustration */}
                              <div className="h-48 relative overflow-hidden">
                                <img 
                                  src={data.imageUrl} 
                                  alt={data.title}
                                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
                                
                                {/* Floating Icon */}
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#7a4a4a] group-hover:rotate-12 transition-transform">
                                  {IconComponent && <IconComponent size={24} />}
                                </div>
                              </div>

                              <div className="px-8 pb-10 -mt-12 relative z-10">
                                {type === mbtiResult.type && (
                                  <div className="inline-block bg-[#7a4a4a] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-4">Your Type</div>
                                )}
                                <div className="relative mb-6">
                                  <div 
                                    className="absolute inset-0 rounded-full blur-2xl opacity-20 transition-transform group-hover:scale-150" 
                                    style={{ backgroundColor: groupColor }}
                                  />
                                  <img 
                                    src={characterImages[type]} 
                                    alt={type}
                                    className="w-28 md:w-36 h-auto mx-auto relative z-10 drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <h4 className="font-black text-2xl mb-2" style={{ color: groupColor }}>{data.title}</h4>
                                <p className="text-xs font-black text-[#555]/30 mb-6 tracking-[0.3em] uppercase">{type}</p>
                                <p className="text-sm text-[#555]/60 leading-relaxed font-medium mb-4 line-clamp-2">{data.description}</p>
                                <p className="text-xs text-[#7a4a4a]/50 font-bold italic line-clamp-2">{data.shortcomings}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
