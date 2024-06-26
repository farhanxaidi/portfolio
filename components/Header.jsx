import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header>
        <div className="container mx-auto mt-8 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">Farhan<span className="text-accent">.</span></h1>
            </Link>
            {/* Desktop Navbar */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>
            {/* Mobile Navbar */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}

export default Header
