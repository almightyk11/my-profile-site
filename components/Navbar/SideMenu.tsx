import Link from 'next/link'

type SideMenuProps = {
  handleSetIsOpened: () => void
  isOpened: boolean
}

export const SideMenu = (props: SideMenuProps) => {
  return (
    <div className={props.isOpened ? 'fixed top-0 left-0 h-screen w-full bg-black/70' : ''}>
      <div
        className={
          props.isOpened
            ? 'fixed top-0 left-0 w-[70%] h-screen ease-in duration-500 bg-slate-200 py-[0.75rem] px-[1rem]'
            : 'fixed  top-0 left-[-100%] h-screen ease-in duration-500'
        }
      >
        <p className='font-bold text-cyan-800 text-[1.25rem] border border-indigo-600'>Menu</p>
        <ul>
          <li>
            <Link
              href='/'
              onClick={props.handleSetIsOpened}
              className='font-medium text-cyan-800 text-[1rem] hover:opacity-70'
            >
              演奏動画一覧
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
