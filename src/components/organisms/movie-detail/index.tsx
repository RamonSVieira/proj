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

  const { data: movieDetails, isFetching, error } = useFetch<MovieDetails>(
    '3/movie/${id}?',
    {},
    '',
    [id]
  );

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movieDetails.title}</h2>
    </div>
  );
};

export default MovieDetail;