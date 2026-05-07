import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // レスポンスの雛形を作成
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // リクエストのCookieを更新（これ以降のサーバーコンポーネント用）
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          
          supabaseResponse = NextResponse.next({
            request,
          })
          
          // レスポンスのCookieを更新（ブラウザに返す用）
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // ユーザー情報を取得することで、必要に応じてトークンが自動更新される
  // ⚠️ 注意: ここで getSession() ではなく getUser() を使うことがセキュリティ上推奨されています
  await supabase.auth.getUser()

  return supabaseResponse
}