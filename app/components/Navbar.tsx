import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
        <nav className="navContainer">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="../pages/about">About</Link>
                </li>

                <li>
                    <Link href="../pages/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </>
  );
};