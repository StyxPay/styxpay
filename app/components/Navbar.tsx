import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between backdrop-blur border rounded-full mt-4 border-white/5 bg-black/40">
        <Link href="/" className="flex items-center gap-1.5 lg:w-[220px]">
          <Image
            src="/logo.png"
            alt="StyxPay Logo"
            width={40}
            height={40}
            className="w-12 h-12"
          />
          <span className="font-medium text-lg tracking-tight text-white font-display">
            StyxPay
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
          <a href="/#features" className="hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="/#developers" className="hover:text-white transition-colors duration-200">
            Developers
          </a>
          <a href="/#tokenomics" className="hover:text-white transition-colors duration-200">
            $STYX
          </a>
          <a href="/status" className="hover:text-white transition-colors duration-200">
            Status
          </a>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/sign-up" className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors tracking-tight">
            Get Early Access
          </Link>
        </div>
      </div>
    </nav>
  )
}
