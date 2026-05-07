import Link from "next/link"
import MenuSheet from './MenuSheet'
const Header = () => {
  return (
    <header className='bg-background h-16 fixed top-0 left-0 w-full'>
        <div className='flex items-center h-full space-x-4 px-4 max-w-7xl mx-auto'>
            <MenuSheet></MenuSheet>
            <div className='font-bold'><Link href={"/"}>logo</Link></div>
            <div>住所を選択</div>
            <div className='flex-1'>検索バー</div>
            <div>カート</div>
        </div>
    </header>
  )
}

export default Header