export interface WeatherInfo {
  temp: string;
  condition: string;
  icon: 'sun' | 'cloud' | 'rain' | 'snow';
}

export interface Activity {
  time: string;
  title: string;
  description?: string;
  important?: string;
  type: 'transport' | 'visit' | 'food' | 'rest' | 'shopping';
  navLink?: string;
}

export interface FoodOption {
  name: string;
  type: string;
  price: string;
  features: string[];
  navLink?: string;
  isPrimary: boolean;
}

export interface DayItinerary {
  id: number;
  dateLabel: string;
  title: string;
  weather: WeatherInfo;
  highlights: string[];
  schedule: Activity[];
  food: FoodOption[];
  tips: string[];
}

export enum TabView {
  HOME = 'HOME',
  TOOLS = 'TOOLS'
}
