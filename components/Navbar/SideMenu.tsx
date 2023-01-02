import Link from 'next/link'

type SideMenuProps = {
  handleSetIsOpened: () => void
  isOpened: boolean
}

const MENU_LIST: { title: string; url: string }[] = [
  {
    title: '演奏動画一覧',
    url: '/',
  },
  {
    title: '見たアニメ一覧',
    url: '/animes',
  },
]

export const SideMenu = (props: SideMenuProps) => {
  return (
    <div className={props.isOpened ? 'fixed top-0 left-0 min-h-screen w-full bg-black/70' : ''}>
      <div
        className={
          props.isOpened
            ? 'fixed top-0 left-0 w-[70%] min-h-screen ease-in duration-500 bg-slate-200 py-[0.75rem] px-[1rem]'
            : 'fixed  top-0 left-[-100%] min-h-screen ease-in duration-500'
        }
      >
        <p className='font-bold text-cyan-800 text-[1.5rem] border border-indigo-600'>Menu</p>
        <ul>
          {MENU_LIST.map((menu) => (
            <li key={menu.title} className='mb-3'>
              <Link
                href={menu.url}
                onClick={props.handleSetIsOpened}
                className='font-semibold text-cyan-800 text-[1rem] hover:opacity-70'
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
