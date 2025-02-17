export async function loadExercises() {
    const response = await fetch("http://localhost:3000/api/exercises");
    const data = await response.json();
    return data
  }