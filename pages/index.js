import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <main className="bg-black h-screen overflow-hidden">
        <Sidebar /> 
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}
