import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function NavButtons({ page, setUrl, info }) {
  const handleNextButton = () => {
    setUrl(info.next);
  };

  const handlePrevButton = () => {
    setUrl(info.prev);
  };

  return (
    <div className="flex gap-2 place-content-center items-center mt-6 ">
      <button
        className={`rounded-full bg-slate-950/80 hover:text-lime-300 ${
          info?.prev
            ? "hover:bg-slate-950 hover:-translate-y-0.5 active:translate-y-0.5"
            : ""
        } transition-all duration-200  p-2 shadow-md shadow-slate-800/50  text-gray-50 disabled:bg-slate-900/50`}
        disabled={!info?.prev}
        onClick={() => handlePrevButton()}
      >
        <MdArrowBackIosNew />
      </button>
      <p className=" text-lg mx-1">{page}/48</p>
      <button
        className={`rounded-full bg-slate-950/80 hover:text-lime-300 ${
          info?.next
            ? "hover:bg-slate-950 hover:-translate-y-0.5 active:translate-y-0.5"
            : ""
        } transition-all duration-200  p-2 shadow-md shadow-slate-800/50  text-gray-50 disabled:bg-slate-900/50`}
        disabled={!info?.next}
        onClick={() => handleNextButton()}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default NavButtons;
