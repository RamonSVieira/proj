import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="flex justify-center py-4">
        <h2 className="text-red-800 text-5xl block">Pirate Netflix</h2>
        {/* <Link to={`/`}>Home</Link> */}
      </header>
    );
  };
  export default Header;