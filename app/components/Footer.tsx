import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 lg:w-[300px]">
          <Image
            src="/logo.png"
            alt="StyxPay Logo"
            width={50}
            height={50}
            className="w-8 h-8"
          />
          <span className="font-medium text-neutral-300 font-display">
            StyxPay
          </span>
        </div>

        <div className="flex gap-8 text-sm text-neutral-500">
          <a href="https://docs.styxpay.app" className="hover:text-white transition-colors">
            Docs
          </a>
          <Link href="/demo" className="hover:text-white transition-colors">
            Demo
          </Link>
          <Link href="https://github.com/StyxPay" className="hover:text-white transition-colors">Github</Link>
          <Link href="https://x.com/usestyxpay" className="hover:text-white transition-colors">X / Twitter</Link>
        </div>

        <div className="text-[12px] text-neutral-600 lg:w-[300px] text-end">
          © 2026 StyxPay Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
