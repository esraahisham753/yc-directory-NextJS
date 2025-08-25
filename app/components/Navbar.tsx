import { auth, signIn, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="bg-white p-4 font-worksans">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={143} height={30}/>
            </Link>
            <div className="flex justify-between items-center gap-5">
                {
                    session?.user ? (
                        <>
                            <Link className="font-semibold text-xl cursor-pointer" href="/startup/create">Create</Link>
                            <form action={async() => {
                                "use server";
                                await signOut({redirectTo: "/"});
                            }}>
                                <button type="submit" className="text-[#EF4444] font-semibold text-xl cursor-pointer">Logout</button>
                            </form>
                            <Link href={`user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) :
                    (
                        <form action={async() => {
                            "use server";
                            await signIn();
                        }}>
                            <button className="font-semibold text-xl cursor-pointer" type="submit">Login</button>
                        </form>
                    )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar