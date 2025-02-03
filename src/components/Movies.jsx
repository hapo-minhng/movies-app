import LoadingSpinner from "./LoadingSpinner";
import MovieCard from "./MovieCard";

export default function Movies({ errorMessage, isLoading, movieList }) {
  return (
    <section className="all-movies">
      <h2 className="mt-2">All Movies</h2>

      {isLoading ? (
        <LoadingSpinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
}
