export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : "https://tu-dominio.com";

export async function loadExercises() {
  const response = await fetch(`${API_BASE_URL}/api/exercises`);
  const data = await response.json();
  return data;
}

export async function loadExercise(id: number) {
  const response = await fetch(`${API_BASE_URL}/api/exercises/${id}`);
  const data = await response.json();
  return data;
}

export async function loadTrainings(id: number) {
  const response = await fetch(`${API_BASE_URL}/api/exercises/${id}/trainings`);
  const data = await response.json();
  if (data.message) return null;
  return data;
}

export async function deleteExercise(id: number) {
  const response = await fetch(`${API_BASE_URL}/api/exercises/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

export async function updateExercise(id: number, description: string) {
  const response = await fetch(`${API_BASE_URL}/api/exercises/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description }),
  });
  const data = await response.json();
  return data;
}

export async function loadSets(id: number, tid: number) {
  const response = await fetch(
    `${API_BASE_URL}/api/exercises/${id}/trainings/${tid}`
  );
  const data = await response.json();
  if (data.message) return null;
  return data;
}

export async function deleteWorkout(id: number, tid: number) {
  const response = await fetch(
    `${API_BASE_URL}/api/exercises/${id}/trainings/${tid}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  if (data.message) return null;
}
