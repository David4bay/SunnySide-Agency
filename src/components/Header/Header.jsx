import Nav from "../Nav/Nav";
import './Header.css'

function Header() {
    return (
        <>
        <header className='Header'>
        <Nav />
        <h1 className="Header__Title">We are creatives </h1>
        <i className="Arrow__Down"></i>
        </header>
        </>
    )
}

export default Header;