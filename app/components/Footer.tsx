import Link from "next/link";
import "./Footer.css";

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footerContainer">
                    {/*left section*/}
                    <div className="footerSection">
                        <h2 className="logo">My Website</h2>
                        <p>Buildirn modern web pages</p>
                    </div>

                    {/*Middle section */}
                    <div className="footerSection">
                        <h3>Quick links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/*Right section */}
                    <div className="footerSection">
                        <h3>Follow Us</h3>
                        <div className="socials">
                            <a href="#" target="_blank">FB</a>
                            <a href="#" target="_blank">YT</a>
                            <a href="#" target="_blank">X</a>
                        </div>
                    </div>
                </div>

                {/*Bottom */}
                <div className="footerBottom">
                    <p>&copy; 2023 My Website; All Rights Reserved</p>                    
                </div>
            </footer>
        </>
    );
};