
import type { Topic } from './types';
import { HeartIcon, ShieldCheckIcon, SparklesIcon, CloudIcon, SunIcon } from './components/icons/TopicIcons';

export const TOPICS: Topic[] = [
  {
    name: "Anxiety",
    icon: CloudIcon,
    description: "Find peace and tranquility for a worried mind."
  },
  {
    name: "Sadness",
    icon: HeartIcon,
    description: "Discover comfort and hope during times of grief."
  },
  {
    name: "Health",
    icon: ShieldCheckIcon,
    description: "Seek verses for physical and spiritual well-being."
  },
  {
    name: "Depression",
    icon: SunIcon,
    description: "Find light and strength to overcome despair."
  },
  {
    name: "Gratitude",
    icon: SparklesIcon,
    description: "Verses to cultivate thankfulness and positivity."
  }
];
