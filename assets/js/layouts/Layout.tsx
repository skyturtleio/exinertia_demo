import { Link } from "@inertiajs/react";

import { type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="mb-6 space-x-2 underline">
        <Link href="/" prefetch="hover">Home</Link>
        <Link href="/i/counter" prefetch={['mount', 'hover']}>Counter</Link>
        <a href="/stock">Phoenix</a>
      </header>
      <div>
        {children}
      </div>
    </>
  )
}

