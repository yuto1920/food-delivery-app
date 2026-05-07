import { type NextRequest } from 'next/server'
// proxy ではなく、ミドルウェア用のファイルから updateSession を読み込む
import { updateSession } from '@/lib/supabase/proxy'

// ⚠️ ここが重要！ 関数名を `proxy` から `middleware` に変更
export async function proxy(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}