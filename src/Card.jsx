import { FaUser } from "react-icons/fa";

function Card({ character }) {
  return (
    <li className="max-sm:w-80 w-96 md:w-60 realtive min-h h-40 md:h-fit shadow-lg shadow-black/50 rounded-md overflow-hidden flex md:flex-col bg-slate-50/70 backdrop-blur-lg getBigger">
      <img
        src={character.image}
        alt={character.name}
        className=" bg-slate-500/80 w-2/5 md:w-full md:h-52"
      />
      <div className="w-3/5 md:w-full md:py-2 flex flex-col items-center">
        {" "}
        <p
          className="text-slate-900 w-full flex items-center gap-2 px-6 py-3 font-extralight"
          title={character.name}
        >
          <span className=" rounded-full p-2 bg-slate-900/80">
            <FaUser
              className={`text-xs ${
                character.status === "Alive"
                  ? "fill-lime-400"
                  : character.status === "Dead"
                  ? "fill-red-500"
                  : "fill-yellow-400"
              }`}
            />
          </span>
          <span className="truncate w-full">{character.name}</span>
        </p>{" "}
        <hr className=" border-black/20 w-[90%] mb-2" />
        <div className="flex flex-col items-start font-semibold w-[80%] text-sm gap-0.5">
          <p>
            <span className=" text-black/50 font-light">Species:</span>{" "}
            {character.species}
          </p>
          <p>
            <span className=" text-black/50 font-light">Gender:</span>{" "}
            {character.gender}
          </p>
          <p className="truncate w-full " title={character.location.name}>
            <span className=" text-black/50  font-light">Location:</span>{" "}
            {character.location.name}
          </p>
          <p
            className={`${
              character.status === "Alive"
                ? "text-lime-400"
                : character.status === "Dead"
                ? "text-red-500"
                : "text-yellow-400"
            }`}
          >
            <span className="text-black/50 font-light">Status:</span>{" "}
            {character.status.toUpperCase()}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
