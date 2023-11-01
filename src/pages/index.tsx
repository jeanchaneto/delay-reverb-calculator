import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='min-h-screen' >
    <h1>Hello world</h1>
   </main> 
  )
}
