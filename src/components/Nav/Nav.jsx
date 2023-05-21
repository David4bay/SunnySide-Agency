import { useState } from 'react';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {

    const [revealMenu, setRevealMenu] = useState(true);

    function showMenu() {
        setRevealMenu(!revealMenu);
        revealMenu === true ? 'hide' : 'show'
    }

    return (
        <nav className='Top__Nav'>
            <ul className='Inner__Nav'>
                <li className='Logo'>
                    <h1>Sunnyside</h1>
                </li>
                <li className='Dropdown__Wrapper'>
                <FontAwesomeIcon className='faBars' onClick={showMenu} icon={faBars} />
                    <ul className={`${revealMenu === true ? 'hide' : 'show'} Dropdown__Container`}>
                        <li className='Dropdown__Item'>
                            <a href="#">About</a>
                        </li>
                        <li className='Dropdown__Item'>
                            <a href="#">Services</a>
                        </li>
                        <li className='Dropdown__Item'>
                            <a href="#">Projects</a>
                        </li>
                        <li className='Dropdown__Item'>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;