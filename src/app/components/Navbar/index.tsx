import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='w-[40rem] h-14 bg-zinc-800 mb-5 gap-4 flex items-center justify-between px-2'>
      <div className='bg-green-600 w-10 h-10 rounded-full'></div>
      <ul className='gap-4 flex text-white'>

            <Link href="/dashboard" className='cursor-pointer bg-zinc-600 hover:bg-zinc-900 px-2 py-1 rounded duration-200 transition-colors'>
                  Dashboard
            </Link>
            <Link href="/produto" className='cursor-pointer bg-zinc-600 hover:bg-zinc-900 px-2 py-1 rounded duration-200 transition-colors'>
                  Produto
            </Link>
            <Link href="/contato" className='cursor-pointer bg-zinc-600 hover:bg-zinc-900 px-2 py-1 rounded duration-200 transition-colors'>
                  Contato
            </Link>
            <Link href="/" className='cursor-pointer bg-zinc-600 hover:bg-red-600 px-2 py-1 rounded duration-200 transition-colors'>
                  Sair
            </Link>
      </ul>

      <div className='bg-green-600 w-10 h-10 rounded-full'></div>
    </header>
  )
}