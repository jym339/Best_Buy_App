export interface WizardStepProps {
  onNext: () => void;
}

export enum Step {
  Welcome = 0,
  Survey = 1,
  Qualification = 2,
  Process = 3,
  Testimonials = 4,
}

export interface Review {
  name: string;
  location: string;
  time: string;
  text: string;
  rating: number;
}