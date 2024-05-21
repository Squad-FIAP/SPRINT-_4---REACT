import {} from 'react';
import '../scss/estilo.scss';
import Logo from '../assets/logo HC.svg'

function Footer() {

  return (
    <>
    <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <p>Em parceria com:</p>
                    <img src={Logo} alt='logo hc' />
                    <div id="footer_social_media">
                        <a href="#" className="footer-link" id="instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="footer-link" id="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="footer-link" id="whatsapp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
            </div>
            <ul className="footer-list">
                <li>
                    <h3>Blog</h3>
                </li>
                <li>
                    <a href="#" className="footer-link">Tech</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Adventures</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Music</a>
                </li>
            </ul>

            <ul className="footer-list">
                <li>
                    <h3>Products</h3>
                </li>
                <li>
                    <a href="#" className="footer-link">App</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Desktop</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Cloud</a>
                </li>
            </ul>

            <div id="footer_subscribe">
                    <h3>Subscribe</h3>
                    <p>Enter your E-mail to get modified about our news solutions</p>

                    <div id="input_group">
                        <input type="email" id="email"/>
                        <button>
                            <i className="fa-regular fa-envelope"></i>
                        </button>
                    </div>
            </div>
        </div>
        <div id="footer_copyright">
            &#169
            2024 all rights reserved
        </div>
    </footer>
    </>
  );
}
export default Footer;