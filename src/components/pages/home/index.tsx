import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

import Pagination from '../../molecules/pagination';

import { movieProps } from './types'
import CardMovie from "../../molecules/card-movie";

export default function Home() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    // Requisicao na api
    const { data, isFetching } = useFetch<movieProps[]>(
        search
            ? `3/search/movie?&query=${encodeURIComponent(
                search
            )}&page=${page}${category ? `&with_genres=${category}` : ''}`
            : `3/movie/top_rated?&page=${page}`,
        {},
        'results',
        [page, search, category]
    );

    return (
        <>
            <h1>Home page</h1>

            <ul className="grid grid-cols-4 gap-5 items-stretch">
                {isFetching && <p>Carregando</p>}
                {data?.map((movie) => (
                    <CardMovie
                        id={movie.id}
                        key={movie.id}
                        release_date={movie.release_date}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        backdrop_path={movie.backdrop_path}
                    />
                ))}
            </ul>

            <Pagination
                currentPage={page}
                handleChangePage={(newPage) => setPage(newPage)}
                pageSize={20}
                totalItems={1000}
            />
        </>
    );
}