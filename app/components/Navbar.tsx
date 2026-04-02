import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <nav>
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

                <li>
                    <link rel="stylesheet" href="">Location</link>
                </li>
            </ul>
        </nav>
    </>
  );
};