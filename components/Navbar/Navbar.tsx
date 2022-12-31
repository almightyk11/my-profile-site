import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Navbar = () => {
  const [isShadow, setIsShadow] = useState(false)

  useEffect(() => {
    const handleIsShadow = () => (window.scrollY >= 56 ? setIsShadow(true) : setIsShadow(false))
    window.addEventListener('scroll', handleIsShadow)
  }, [])

  return (
    <div
      className={
        isShadow
          ? 'w-full fixed h-[3.5rem] z-[100] flex items-center justify-end px-[1rem] bg-cyan-800 shadow-xl ease-in-out duration-300'
          : 'w-full fixed h-[3.5rem] z-[100] flex items-center justify-end px-[1rem] bg-cyan-800'
      }
    >
      <IconContext.Provider value={{ color: '#cccccc', size: '2rem' }}>
        <GiHamburgerMenu className='cursor-pointer' />
      </IconContext.Provider>
    </div>
  )
}
