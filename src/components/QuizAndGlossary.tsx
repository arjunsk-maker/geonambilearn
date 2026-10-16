import React, { useState } from 'react';
import { Language, QuizQuestion } from '../types/geography';
import { QUIZ_QUESTIONS, GLOSSARY_DATA } from '../data/geographyData';
import { CheckCircle2, XCircle, HelpCircle, BookOpen, RotateCcw, Trophy, Search, BookMarked } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizAndGlossaryProps {
  language: Language;
}

export const QuizAndGlossary: React.FC<QuizAndGlossaryProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'glossary'>('quiz');
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQIndex];

  const handleSelectOption = (optIndex: number) => {
    if (selectedAnswers[currentQIndex] !== undefined) return; // already answered

    const isCorrect = optIndex === currentQ.correctIndex;
    const newAnswers = { ...selectedAnswers, [currentQIndex]: optIndex };
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setScore(0);
    setIsCompleted(false);
  };

  // Filter glossary
  const filteredGlossary = GLOSSARY_DATA.filter((item) => {
    const q = glossarySearch.toLowerCase();
    return (
      item.termEn.toLowerCase().includes(q) ||
      item.termTa.includes(q) ||
      item.definitionEn.toLowerCase().includes(q) ||
      item.definitionTa.includes(q)
    );
  });

  return (
    <div className="w-full space-y-10 py-6 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு மதிப்பீடு & கலைச்சொல் சொல்லடைவு' : 'Evaluation & Scientific Glossary'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {language === 'ta' ? 'சுய மதிப்பீட்டு வினாடி வினா & அகராதி' : 'Syllabus Quiz & Bilingual Glossary'}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {language === 'ta'
            ? 'பாடநூல் மதிப்பீட்டு வினாக்களுக்கு விடையளித்து உங்கள் அறிவைச் சோதியுங்கள் மற்றும் கலைச்சொற்களைத் தேடுங்கள்.'
            : 'Test your grasp of syllabus concepts through textbook questions and explore authentic SCERT geography terminology.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 gap-1">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'quiz' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>{language === 'ta' ? 'பாட வினாடி வினா (Quiz)' : 'Interactive Quiz'}</span>
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'glossary' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>{language === 'ta' ? 'சொல்லடைவு (A-Z Glossary)' : 'Official Glossary'}</span>
          </button>
        </div>
      </div>

      {/* QUIZ TAB */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-9 rounded-3xl border border-white/10 space-y-6">
          {!isCompleted ? (
            <>
              {/* Progress bar & Question number */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-4">
                <span className="font-semibold text-white">
                  {language === 'ta' ? `வினா ${currentQIndex + 1} / ${QUIZ_QUESTIONS.length}` : `Question ${currentQIndex + 1} of ${QUIZ_QUESTIONS.length}`}
                </span>
                <span className="text-cyan-400 font-mono font-semibold">
                  {language === 'ta' ? `மதிப்பெண்: ${score}` : `Score: ${score}`}
                </span>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  {currentQ.source}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  {currentQ.question[language]}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options[language].map((option, idx) => {
                  const hasAnswered = selectedAnswers[currentQIndex] !== undefined;
                  const isSelected = selectedAnswers[currentQIndex] === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let btnStyle = 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200';
                  if (hasAnswered) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-500/20 border-rose-500/50 text-rose-300 font-semibold';
                    } else {
                      btnStyle = 'bg-white/5 border-white/5 opacity-50 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={hasAnswered}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {hasAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next button */}
              {showExplanation && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 leading-relaxed">
                    <span className="font-bold text-cyan-400 block mb-1">
                      {language === 'ta' ? 'விளக்கம்:' : 'Textbook Explanation:'}
                    </span>
                    {currentQ.explanation[language]}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg transition-colors cursor-pointer"
                    >
                      {currentQIndex === QUIZ_QUESTIONS.length - 1
                        ? (language === 'ta' ? 'முடிவுகளைப் பார்க்க' : 'Finish Quiz')
                        : (language === 'ta' ? 'அடுத்த வினா →' : 'Next Question →')}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Quiz Completed Score Summary */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">
                  {language === 'ta' ? 'வினாடி வினா நிறைவடைந்தது!' : 'Evaluation Completed!'}
                </h3>
                <p className="text-sm text-slate-400">
                  {language === 'ta'
                    ? `நீங்கள் ${QUIZ_QUESTIONS.length}-க்கு ${score} மதிப்பெண்கள் பெற்றுள்ளீர்கள்.`
                    : `You scored ${score} out of ${QUIZ_QUESTIONS.length} on this official syllabus test.`}
                </p>
              </div>

              <div className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl font-black text-cyan-400 font-mono">
                  {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
                </span>
                <span className="block text-[11px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  {score >= 7 ? 'Excellent Mastery (சிறந்த தேர்ச்சி)' : 'Good Effort (தொடர்ந்து பயில்க)'}
                </span>
              </div>

              <div>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{language === 'ta' ? 'மீண்டும் வினாடி வினா தொடங்கு' : 'Retake Quiz'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GLOSSARY TAB */}
      {activeTab === 'glossary' && (
        <div className="space-y-6">
          {/* Search Input */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 border border-white/10 shadow-lg text-sm">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={language === 'ta' ? 'கலைச்சொல்லைத் தேடுங்கள் (எ.கா: Albedo)...' : 'Search geographic terms (e.g. Albedo)...'}
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="bg-transparent border-none outline-none text-white w-full text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Glossary Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((term, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded font-semibold">
                    {term.unit}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{term.termEn}</h4>
                  <span className="text-xs text-indigo-300 font-medium block">{term.termTa}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {language === 'ta' ? term.definitionTa : term.definitionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
