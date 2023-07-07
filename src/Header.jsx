import { GoMarkGithub } from "react-icons/go";

function Header() {
  return (
    <header className="text-gray-50 text-center text-xl sm:text-3xl font-semibold sticky top-0 bg-slate-950 justify-between h-16 flex z-50 items-center">
      {" "}
      Rick & Morty Character Explorer
      <a
        href="https://github.com/cmollinea/"
        target="_blank"
        className="flex flex-col text-center items-center mr-2 hover:text-lime-400 text-lime-50 transition-all"
      >
        {" "}
        <GoMarkGithub className="text-3xl" />
        <span className="text-xs">Profile</span>
      </a>
    </header>
  );
}

export default Header;
