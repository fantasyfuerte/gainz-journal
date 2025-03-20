export type Set = {
  id: number;
  trainingId: number;
  reps: number;
  weight: number;
};

export type Training = {
  id: number;
  exerciseId: number;
  date: Date;
};

export type User = {
  email: string;
  name: string;
  image: string;
}