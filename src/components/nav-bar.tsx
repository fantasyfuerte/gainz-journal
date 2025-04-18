import { CgHomeAlt } from "react-icons/cg";
import MenuButton from "./ui/menu-button";
import Link from "next/link";
import ExerciseList from "./exercise-list";
import NewExercise from "./ui/new-exercise-link";
import SignOut from "./ui/sign-out";

async function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed w-full top-0 text-primary bg-background z-50">
      <MenuButton>
        <div className="flex flex-col gap-3 py-3 pb-10 px-2 h-full overflow-y-scroll">
          <NewExercise />
          <ExerciseList />
          <SignOut />
        </div>
      </MenuButton>
      <Link href="/">
        <CgHomeAlt size={25} className="cursor-pointer" />
      </Link>
    </nav>
  );
}

export default NavBar;
