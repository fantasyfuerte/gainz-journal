import { CgMenuLeft } from "react-icons/cg";

function MenuButton() {
  return (
    <>
      <CgMenuLeft size={30} className="cursor-pointer" />
      <div className="absolute top-0 left-0 w-[80%] h-screen z-10 bg-background/90 border-r-2 border-background/80 backdrop-blur-sm" />
    </>
  );
}

export default MenuButton;
