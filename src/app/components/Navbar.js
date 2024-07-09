import Link from 'next/link';
import paths from '../paths';

function Navbar () {

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link href={paths.home()}>
                        MICROFIY</Link>
                </li>
                <li>
                    <Link href={paths.profile()}>
                        Profile</Link>
                </li>
                <li>
                    <Link href={paths.shopping()}>
                        Shopping</Link>   
                </li>
                <li>
                    <Link href={paths.cart()}>
                        Cart</Link>
                </li>
                <li>
                    <Link href={paths.about()}>
                        About</Link>
                </li>
                <li>
                    <div className="searchbar">
                        <input
                            type="text"
                            name="search"
                            id="search" />
                        <button className="search-btn">
                            Search
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
};


export default Navbar;