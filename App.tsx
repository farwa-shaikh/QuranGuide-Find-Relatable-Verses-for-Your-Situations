
import React, { useState, useCallback, useEffect } from 'react';
import TopicSelector from './components/TopicSelector';
import VerseDisplay from './components/VerseDisplay';
import { fetchVersesForTopic } from './services/geminiService';
import type { Verse, Topic } from './types';
import { TOPICS } from './constants';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleTopicSelect = useCallback((topic: Topic) => {
    setSelectedTopic(topic);
    setVerses([]);
    setError(null);
  }, []);

  const handleGoBack = () => {
    setSelectedTopic(null);
    setVerses([]);
    setError(null);
  };

  useEffect(() => {
    if (!selectedTopic) {
      return;
    }

    const getVerses = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedVerses = await fetchVersesForTopic(selectedTopic.name);
        setVerses(fetchedVerses);
      } catch (err) {
        setError('Failed to fetch verses. Please check your connection or API key and try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getVerses();
  }, [selectedTopic]);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-teal-500/80 selection:text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/seed/quran/1920/1080')" }}
      ></div>
      <div className="relative isolate min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-300 tracking-tight">
            Quranic Healing
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Find solace and guidance through verses from the Holy Quran, tailored to your needs.
          </p>
        </header>

        <main className="w-full max-w-4xl flex-grow">
          {!selectedTopic ? (
            <TopicSelector topics={TOPICS} onSelectTopic={handleTopicSelect} />
          ) : (
            <VerseDisplay
              topic={selectedTopic}
              verses={verses}
              isLoading={isLoading}
              error={error}
              onGoBack={handleGoBack}
            />
          )}
        </main>
        
        <footer className="text-center mt-8 text-slate-400 text-sm">
          <p>Powered by AI. Always consult with a qualified scholar for deep religious guidance.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
