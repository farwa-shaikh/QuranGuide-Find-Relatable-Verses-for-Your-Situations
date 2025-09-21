
import React from 'react';
import type { Topic } from '../types';

interface TopicSelectorProps {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, onSelectTopic }) => {
  return (
    <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">How are you feeling today?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {topics.map((topic) => (
            <button
            key={topic.name}
            onClick={() => onSelectTopic(topic)}
            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-left hover:bg-slate-800/80 hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
                <div className="flex items-start gap-4">
                    <div className="bg-teal-500/10 p-3 rounded-lg border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                        <topic.icon className="h-8 w-8 text-teal-300" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-teal-300 group-hover:text-teal-200 transition-colors">{topic.name}</h3>
                        <p className="mt-1 text-slate-400 group-hover:text-slate-300 transition-colors">{topic.description}</p>
                    </div>
                </div>
            </button>
        ))}
        </div>
    </div>
  );
};

export default TopicSelector;
