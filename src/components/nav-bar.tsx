import { CgHomeAlt } from "react-icons/cg";
import MenuButton from "./menu-button";
import ExerciseCard from "./exercise-card";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed w-full top-0 text-primary bg-background z-50">
      <MenuButton>
        <div className="flex flex-col gap-3 py-3 px-2">
          <Link href="/new" className="flex flex-col">
            <button className="bg-button rounded-lg py-2 my-3">
              New Exercise
            </button>
          </Link>
          {/* Mapping over the array of exercises */}
          <ul className="flex flex-col gap-3">
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
          </ul>
        </div>
      </MenuButton>
      <Link href="/">
        <CgHomeAlt size={25} className="cursor-pointer" />
      </Link>
    </nav>
  );
}

export default NavBar;
