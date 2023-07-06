import { GoMarkGithub } from "react-icons/go";

function Header() {
  return (
    <header className="text-gray-50 text-center text-3xl font-semibold sticky top-0 bg-slate-950 justify-between h-16 flex z-50 items-center">
      {" "}
      My previous code sucks!
      <GoMarkGithub className=" fill-lime-300" />
    </header>
  );
}

export default Header;
