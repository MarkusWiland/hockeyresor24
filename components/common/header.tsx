'use client'

import Link from 'next/link'

export default function Header() {
  const navigationLinks = [
    { href: '/', label: 'Hem' },
    { href: '/matcher', label: 'Matcher' },
    { href: '/lag', label: 'Lag' },
    { href: '/arenor', label: 'Arenor' },
    { href: '/om', label: 'Om sajten' },
  ]

  return (
    <nav className="container flex items-center justify-between py-4 px-4 lg:px-8 mx-auto">
      {/* Logotyp */}
      <div className="text-xl font-bold text-[hsl(var(--foreground))]">
        Hockeybiljetter.se
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex items-center gap-6">
        {navigationLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
