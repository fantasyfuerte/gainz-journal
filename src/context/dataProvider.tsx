"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { loadExercises } from "@/libs/fetchs";
import { Exercise } from "@/components/exercise-list";
import { UserContext } from "./userProvider";

interface DataContext {
  exercises: null | Exercise[];
  refresh: () => void;
}

export const DataContext = createContext<DataContext>({
  exercises: null,
  refresh: () => {},
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [exercises, setExercises] = useState<null | Exercise[]>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const { user } = useContext(UserContext);

  function refresh() {
    setRefreshTrigger((prev) => !prev);
  }

  useEffect(() => {
    if (user === null || user.email === undefined || user.email === null)
      return;
    loadExercises(user.email)
      .then((data) => {
        if (data.message === "No exercises found") return [];
        return data.sort((a: Exercise, b: Exercise) => b.id - a.id);
      })
      .then(setExercises);
  }, [refreshTrigger, user]);

  return (
    <DataContext.Provider value={{ exercises: exercises, refresh: refresh }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
