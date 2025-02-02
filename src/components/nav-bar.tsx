import { CgHome } from "react-icons/cg";
import MenuButton from "./menu-button";

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed w-full top-0 text-primary">
      <MenuButton />
      <CgHome size={25} className="cursor-pointer" />
    </nav>
  );
}

export default NavBar;
