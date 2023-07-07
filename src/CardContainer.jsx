import {} from "react";
import Card from "./Card";
import Spinner from "./Spinner";

function CardContainer({ appState }) {
  const { data, isLoading, isError } = appState;
  console.log(isLoading);

  return (
    <div className="flex flex-col items-center">
      {data?.results ? (
        <>
          <p className="text-center font-bold mt-6">Characters</p>
          <ul className="h-fit items-center place-content-center mt-6 pb-20 max-md:flex max-md:flex-col md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-10 gap-10 content-center">
            {data.results?.map((character) => (
              <Card character={character} key={character.id} />
            ))}
          </ul>
        </>
      ) : isLoading ? (
        <Spinner />
      ) : isError ? (
        <p className="text-lg font-bold mt-20 animate-bounce">
          Somthing went wrong. Don't worry is not your fault!
        </p>
      ) : null}
    </div>
  );
}

export default CardContainer;
