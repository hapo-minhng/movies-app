export default function TrendingMovies({ trendingMovies }) {
  return (
    <>
      {trendingMovies.length > 0 && (
        <section className="trending">
          <h2>Trending</h2>

          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p>{index + 1}</p>

                <img src={movie.poster_url} alt={`${movie.title} poster`} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
