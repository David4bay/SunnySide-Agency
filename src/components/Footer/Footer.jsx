import './Footer.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="Footer">
            <strong className="Footer__Title">sunnyside</strong>
            <p className="Footer__Info">
                <span className="Social">About</span>
                <span className="Social">Services</span>
                <span className="Social">Projects</span>
            </p>
            <p className="Footer__Icons">
                <FaFacebookSquare className='Facebook__Icon' />
                <FaInstagram className='Instagram__Icon' />
                <FaTwitter className='Twitter__Icon' />
                <FaPinterest className='Pinterest__Icon' />
                
            </p>
            <div className="Attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noopener noreferrer'>Frontend Mentor</a>. 
            Coded by <a href="https://github.com/">David Sunday Bayode</a>.
        </div>
        </footer>
    );
}

export default Footer;