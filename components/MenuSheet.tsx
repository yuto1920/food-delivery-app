import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from './ui/button'
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, Heart } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
const MenuSheet = async() => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser()
  if(!user){
    redirect("/login");
  }
  const {avator_url, full_name} = user?.user_metadata;
  return (
    <Sheet>
  <SheetTrigger asChild>
    <Button variant={"ghost"} size={"icon"}><Menu /></Button></SheetTrigger>
  <SheetContent side='left' className='w-72 p-6'>
    <SheetHeader>
      <SheetTitle className='sr-only'>メニュー情報</SheetTitle>
      <SheetDescription>ユーザー情報とメニュー情報を表示</SheetDescription>
    </SheetHeader>
    <div>
      <Avatar>
        <AvatarImage src={avator_url} />
          <AvatarFallback>ユーザー名</AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-5">
        <div className="font-bold">{full_name}</div>
        <div>
          <Link href={"#"} className="text-green-500 text-xs">アカウントを管理する</Link>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-5">

    </div>
    <ul>
      <li>
        <Link href = {"/orders"} className="flex items-center gap-4 ">
          <div>
            <Bookmark fill="bg-primary"/>
          </div>
          <span className="font-bold">
            注文内容
          </span>
        </Link>
      </li>
      <li>
        <Link href = {"/favorites"} className="flex items-center gap-4 ">
          <div>
            <Heart fill="bg-primary"/>
          </div>
          <span className="font-bold">
            お気に入り
          </span>
        </Link>
      </li>
    </ul>
    <SheetFooter>
      <Button>ログアウト</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
  )
}

export default MenuSheet