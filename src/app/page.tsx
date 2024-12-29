import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <form className="w-[380px] h-[390px] rounded-lg mt-[200px] gap-5 flex flex-col items-center justify-center bg-zinc-900">
      <h1 className='text-white text-2xl'>Entre na sua Conta</h1>

      <div className="">
        <input type="email" placeholder='Seu E-mail' className='py-1 px-2 rounded outline-none border-none' />
      </div>
      
      <div className="">
        <input type="password" placeholder='Sua Senha' className='py-1 px-2 rounded outline-none border-none' />
      </div>

      <div className="flex gap-4">
        <Link href="/dashboard" className='w-[100px] text-center outline-none border-none rounded text-white bg-blue-600 py-1'>Entrar</Link>
        <Link href="/dashboard" className='w-[100px] text-center outline-none border-none rounded text-white bg-blue-600 py-1'>Cadastrar</Link>
      </div>
    </form>
  )
}
