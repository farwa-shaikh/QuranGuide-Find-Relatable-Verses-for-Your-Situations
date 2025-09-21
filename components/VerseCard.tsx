
import React from 'react';
import type { Verse } from '../types';

interface VerseCardProps {
  verse: Verse;
}

const VerseCard: React.FC<VerseCardProps> = ({ verse }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-teal-500/50 hover:shadow-teal-500/5 animate-fade-in-up">
      <header className="flex justify-between items-center pb-4 border-b border-slate-700">
        <h3 className="text-xl font-bold text-teal-300">{verse.surahName} {verse.verseNumber}</h3>
      </header>
      
      <div className="mt-4 space-y-6">
        {/* Arabic Text */}
        <div className="text-right">
          <p className="font-amiri text-3xl md:text-4xl leading-relaxed text-slate-100" dir="rtl">
            {verse.arabicText}
          </p>
        </div>

        {/* Transliteration */}
        <div>
          <h4 className="font-semibold text-teal-400 mb-1">Transliteration</h4>
          <p className="text-slate-300 italic">{verse.transliteration}</p>
        </div>

        {/* Translation */}
        <div>
          <h4 className="font-semibold text-teal-400 mb-1">Translation</h4>
          <p className="text-slate-200">"{verse.translation}"</p>
        </div>

        {/* Explanation */}
        <div className="pt-4 border-t border-slate-700/50">
           <h4 className="font-semibold text-teal-400 mb-2">Guidance</h4>
           <p className="text-slate-300 text-sm leading-relaxed">{verse.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default VerseCard;
