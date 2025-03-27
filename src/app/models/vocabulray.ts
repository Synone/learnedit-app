import { LearnerProfile } from './profile';

export interface Vocabulary {
  id: string;
  vocabulary: string;
  definition: string;
  level: string;
  type: string;
  useCases: string[];
  synonyms: string[];
  antonyms: string[];
  isLearnt: boolean;
  refLink: string;
  categoryIds: string[];
  createdAt: Date | string;
}

export interface VocabularyCategory {
  id: string;
  category: string;
  vocabularyListIds: string[];
}

export interface VocabularyCollection {
  id: string;
  wordsList: Vocabulary[];
  createdAt: Date | string;
  updatedAt: Date | string;
  author: LearnerProfile;
}
