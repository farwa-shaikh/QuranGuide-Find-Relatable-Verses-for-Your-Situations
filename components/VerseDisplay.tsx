
import React from 'react';
import type { Verse, Topic } from '../types';
import VerseCard from './VerseCard';
import LoadingSpinner from './icons/LoadingSpinner';

interface VerseDisplayProps {
  topic: Topic;
  verses: Verse[];
  isLoading: boolean;
  error: string | null;
  onGoBack: () => void;
}

const VerseDisplay: React.FC<VerseDisplayProps> = ({ topic, verses, isLoading, error, onGoBack }) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-teal-300">Verses for {topic.name}</h2>
          <p className="text-slate-400 mt-1">{topic.description}</p>
        </div>
        <button
          onClick={onGoBack}
          className="bg-slate-700/50 hover:bg-slate-700 text-slate-200 font-semibold py-2 px-4 rounded-lg border border-slate-600 transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back
        </button>
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center p-12 bg-slate-800/30 rounded-lg">
          <LoadingSpinner />
          <p className="mt-4 text-slate-300 text-lg">Seeking guidance from the Quran...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg" role="alert">
          <strong className="font-bold">An error occurred: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {!isLoading && !error && (
        <div className="space-y-6">
          {verses.map((verse, index) => (
            <VerseCard key={index} verse={verse} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VerseDisplay;
