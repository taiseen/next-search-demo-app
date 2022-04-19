import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/table"><a>Table</a></Link>
                <Link href="/server"><a>Server</a></Link>
            </nav>
        </header>
    )
}

export default Navbar