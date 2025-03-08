import { NavLink } from "react-router-dom"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <footer className="footer ">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3> Platform</h3>
                        <ul>
                            <li>
                                <NavLink to="/">Practice</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Challenges</NavLink>
                            </li>

                            <li>
                                <NavLink to="/leaderboard">LeaderBoard</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3> Support</h3>
                        <ul>
                            <li>
                                <NavLink to="/">Documentation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Help Center</NavLink>
                            </li>

                            <li>
                                <NavLink to="/">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <ul>
                            <li>
                                <NavLink to="/" className="">feedback@com</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="logo"><FaInstagramSquare /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="logo"><FaFacebookSquare /></NavLink>
                            </li>

                            <li>
                                <NavLink to="/" className="logo"><FaTwitterSquare /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="logo"><FaYoutubeSquare />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
        </footer >



            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2025 CLI Practice Platform, All Right Reserved
                                <NavLink to="/" target="_blank">
                                    Product
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}