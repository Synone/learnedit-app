import { VocabularyCollection } from './vocabulray';

export interface LearnerProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: Date | string;
  vocabularyLists: VocabularyCollection[];
}
