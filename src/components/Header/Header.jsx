import { Nav } from "../Nav/Nav";
import { TopBar } from "../TopBar/TopBar"
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return <header className="header">
            <TopBar/>
            <div className="div-header">
                <Link to={"/"}><img className="img-logo" src="/images/Logo.png" alt="logo" /></Link>
                <SearchBar/>
            </div>
            <Nav/>
        </header>
}