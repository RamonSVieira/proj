// components/pages/MovieDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  backdrop_path?: string;
  vote_average: number;
  release_date: string
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const { data, isFetching } = useFetch<MovieDetails>(
    `3/movie/${id}?`,
    {},
    '',
    [id]
  );

  useEffect(() => {
    if (data) {
      setMovieDetails(data);
    }
  }, [data]);

  if (isFetching || !movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2 className='text-4xl text-center mb-6'>{movieDetails.title}</h2>
      <div className='flex gap-8'>
        {movieDetails.backdrop_path && (
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} />
        )}
        <div>
          <p className='text-xl'>Descrição: </p>
          <p className='mb-4'>{movieDetails.overview}</p>
          <p>Nota: {(movieDetails.vote_average * 10).toFixed(0)}% </p> 
          <p>Ano de lançamento: {movieDetails.release_date.substring(0, 4)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;