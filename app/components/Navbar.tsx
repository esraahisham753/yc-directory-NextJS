import { auth, signIn, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
  const session = await auth()

  return (
    <header>
        <nav>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={143} height={30}/>
            </Link>
            <div>
                {
                    session?.user ? (
                        <>
                            <Link href="/startup/create">Create</Link>
                            <form action={async() => {
                                "use server";
                                await signOut();
                            }}>
                                <button type="submit">Logout</button>
                            </form>
                        </>
                    ) :
                    (
                        <form action={async() => {
                            "use server";
                            await signIn();
                        }}>
                            <button type="submit">Login</button>
                        </form>
                    )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar