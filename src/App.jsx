import { useState } from "react";
import useGetCharacter from "./useGetCharacter";
import CardContainer from "./CardContainer";
import Header from "./Header";
import NavButtons from "./NavButtons";

export default function App() {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const { appState } = useGetCharacter(url);
  const page = url.split("=").slice(-1);

  return (
    <div className="bg-lime-300 relative min-h-screen">
      <Header />
      <p className=" text-center mt-4">
        This is my first project made with REACT. It's a little Rick & Morty.
        Character Explorer Enjoy It!{" "}
      </p>
      <NavButtons page={page} setUrl={setUrl} info={appState.data?.info} />
      <CardContainer appState={appState} />
      <footer className=" bg-slate-950 text-gray-50 h-8 flex items-center text place-content-center absolute w-full bottom-0">
        Made with 💚 by ProcastinatorDev
      </footer>
    </div>
  );
}
