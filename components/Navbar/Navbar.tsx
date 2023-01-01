import { Burger } from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'

import { SideMenu } from './SideMenu'

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [isShadow, setIsShadow] = useState(false)

  useEffect(() => {
    const handleIsShadow = () => (window.scrollY >= 56 ? setIsShadow(true) : setIsShadow(false))
    window.addEventListener('scroll', handleIsShadow)
  }, [])

  const handleSetIsOpened = useCallback(() => setIsOpened((o) => !o), [])

  return (
    <div
      className={
        isShadow
          ? 'w-full fixed h-[3.5rem] z-[100] flex items-center justify-end px-[1rem] bg-cyan-800 shadow-xl ease-in-out duration-300'
          : 'w-full fixed h-[3.5rem] z-[100] flex items-center justify-end px-[1rem] bg-cyan-800'
      }
    >
      <Burger
        opened={isOpened}
        onClick={handleSetIsOpened}
        color='#cccccc'
        size={25}
        className='z-[200]'
      />
      <SideMenu isOpened={isOpened} handleSetIsOpened={handleSetIsOpened} />
    </div>
  )
}
