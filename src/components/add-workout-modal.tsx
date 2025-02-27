interface Props {
  closeModal: () => void;
  addWorkout: () => void;
}

function AddWorkOutModal({ closeModal, addWorkout }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] z-50">
      <div className="bg-secondary h-52 w-80 rounded-lg"></div>
      <ul className="flex gap-2">
        <button
          className="bg-cta text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12"
          onClick={addWorkout}
        >
          Add Workout
        </button>
        <button
          className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12"
          onClick={closeModal}
        >
          Cancel
        </button>
      </ul>
    </div>
  );
}

export default AddWorkOutModal;
