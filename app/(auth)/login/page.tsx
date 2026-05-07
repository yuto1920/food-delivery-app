import { login } from './actions'
import { Button } from "@/components/ui/button"

export default function loginpage() {
    return (
        <form>
            <Button variant="outline" formAction={login}>Login</Button>
        </form>
    )
}