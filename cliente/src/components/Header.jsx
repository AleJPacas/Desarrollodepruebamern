import {FaSearch} from 'react-icons/fa'; {/* sirve para agarrar el icono de search*/}
import {Link} from 'react-router-dom'; {/* este permite acceder al routeo*/}

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-gray-500'>Shand</span>
              <span className='text-gray-600'>Estate</span>
          </h1>
          <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder = 'search...' className='bg-transparent focus:outline-none w-24 sm:-64'/>
            <FaSearch className='text-slate-600'/>
          </form>
          <ul className='flex gap-4'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li> {/* cuando se haga chiquito se quita */}
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            <li className='hidden sm:inline text-slate-700 hover:underline'>sig in</li>
          </ul>
      </div>
    </header>
  )
}
