import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom'
import { MovieProps } from './types'

const imageUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

const CardMovie = (props: MovieProps) => {
    const navigate = useNavigate ();

    const handleNavigate = () => {
        navigate(`/movie/${props.id}`);
    };

    return (
        <Link to={`/movie/${props.id}`} className="border block p-2 rounded-lg transition-all hover:scale-105" onClick={handleNavigate}>
            <li key={props.id}>
                {props.backdrop_path && (
                    <img
                        src={imageUrl(props.backdrop_path)}
                        alt={`Capa do filme ${props.title}`}
                        className="w-full border border-cyan-100"
                    />
                )}
                <strong className='text-xl'>{props.title}</strong>
                <p className='text-lg'>{(props.vote_average * 10).toFixed(0)}%</p>
                <p className='text-sm'>{props.release_date}</p>
            </li>
        </Link>
    );
};
export default CardMovie;