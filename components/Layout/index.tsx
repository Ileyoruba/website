import Link from 'next/link'
import { useRouter } from 'next/router'

declare global {
  interface Navigator {
    userAgentData: any
  }
}

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="">
      {router.pathname.includes('kid') && <div className="fixed top-0 w-full h-full -z-50 brightness-200"></div>}
      <header className='sticky top-0 py-2 bg-white border-b'>
        <div className='px-4 mx-auto md:w-3/4'>
          <nav className='flex justify-between'>
            <p className='self-center'>
              <Link href='/'>
                <a className='font-bold hover:cursor-pointer'>ILEYORUBA</a>
              </Link>

            </p>
            <Link href='/kids'>
              <a className='text-2xl font-bold text-orange-300 funky'>KIDS</a>
            </Link>
          </nav>
          
        </div>
      </header>
      <main>
        <div className='px-4 mx-auto md:w-3/4'>
        {children}
        </div>
      </main>
      <footer className='flex justify-center py-4 text-sm'>
        <p>&copy; IleYoruba 2021</p>
      </footer>
    </div>
  )
}
