import LoadingSpinner from "./LoadingSpinner";

export default function Movies({ errorMessage, isLoading, movieList }) {
  return (
    <section className="all-movies">
      <h2>All Movies</h2>

      {isLoading ? (
        <LoadingSpinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movieList.map((movie) => (
            <p key={movie.id} className="text-white">
              {movie.title}
            </p>
          ))}
        </ul>
      )}
    </section>
  );
}
