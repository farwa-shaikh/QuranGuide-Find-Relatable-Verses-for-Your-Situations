
export interface Verse {
  surahName: string;
  verseNumber: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  explanation: string;
}

export interface Topic {
  name: string;
  icon: React.ElementType;
  description: string;
}
