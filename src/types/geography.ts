export type Language = 'en' | 'ta';

export type SyllabusTopicId = 
  | 'physical' 
  | 'transport' 
  | 'social' 
  | 'disasters' 
  | 'environment' 
  | 'landmarks' 
  | 'current_affairs';

export interface RiverInfo {
  id: string;
  name: { en: string; ta: string };
  origin: { en: string; ta: string };
  mouth: { en: string; ta: string };
  lengthKm: number;
  type: 'delta' | 'estuary';
  description: { en: string; ta: string };
  states: string[];
}

export interface MineralInfo {
  id: string;
  name: { en: string; ta: string };
  category: 'metallic_ferrous' | 'metallic_nonferrous' | 'metallic_precious' | 'nonmetallic' | 'energy';
  leadingProducer: { en: string; ta: string };
  indianHubs: { en: string; ta: string };
  uses: { en: string; ta: string };
}

export interface TribeInfo {
  id: string;
  name: { en: string; ta: string };
  region: { en: string; ta: string };
  category: 'tamilnadu' | 'india' | 'world';
  description: { en: string; ta: string };
  distinctFeature: { en: string; ta: string };
  imagePlaceholderColor: string;
}

export interface LandmarkInfo {
  id: string;
  name: { en: string; ta: string };
  tamilName?: string;
  location: { en: string; ta: string };
  significance: { en: string; ta: string };
  keyFact: { en: string; ta: string };
  type: 'natural_geology' | 'fluvial' | 'volcanic' | 'meteorite';
  imagePlaceholder: string;
}

export interface GreenEnergyInfo {
  id: string;
  name: { en: string; ta: string };
  type: 'solar' | 'wind' | 'hydro' | 'geothermal' | 'tidal';
  capacity: string;
  location: { en: string; ta: string };
  highlights: { en: string; ta: string };
}

export interface GlossaryTerm {
  termEn: string;
  termTa: string;
  definitionEn: string;
  definitionTa: string;
  unit: string;
}

export interface QuizQuestion {
  id: number;
  question: { en: string; ta: string };
  options: { en: string[]; ta: string[] };
  correctIndex: number;
  explanation: { en: string; ta: string };
  source: string;
}
