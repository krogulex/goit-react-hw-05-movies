import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ loadTrendingsMovies, movies, loadMovieDetails }) => {
  useEffect(() => {
    loadTrendingsMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Home-page</p>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movie/${movie.id}`} state={{ from: '/' }}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;