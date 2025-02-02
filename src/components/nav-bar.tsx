import { CgHome, CgMenuLeft } from "react-icons/cg";

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed w-full top-0 text-primary">
      <CgMenuLeft size={30} className="cursor-pointer" />
      <CgHome size={25} className="cursor-pointer" />
    </nav>
  );
}

export default NavBar;
