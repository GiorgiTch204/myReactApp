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
                    <Link href="../about">About</Link>
                </li>

                <li>
                    <Link href="../contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </>
  );
};