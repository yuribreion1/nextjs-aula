import Link from "next/link";

export function Header() {
    return(
        <header>
            <nav className={"uk-navbar-container"}>
                <div className={"uk-navbar-left ml-5 mb-5"}>
                    <a  className={"uk-navbar-item uk-logo"}>
                        <h3>Aula Next.JS</h3>
                    </a>
                    <ul className={"uk-navbar-nav"}>
                        <li>
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/posts'}>
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link href={'/dashboard'}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href={'/products'}>
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}