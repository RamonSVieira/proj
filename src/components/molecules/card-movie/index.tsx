import { MovieProps } from './types'

const imageUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

const CardMovie = (props: MovieProps) => {
    return (
        <li key={props.id} className="border ">
            {props.backdrop_path && (
                <img
                    src={imageUrl(props.backdrop_path)}
                    alt={`Capa do filme ${props.title}`}
                    className="w-full border border-cyan-100"
                />
            )}
            <p>{props.vote_average}</p>
            <strong>{props.title}</strong>
            <p>{props.release_date}</p>
        </li>
    );
};
export default CardMovie;