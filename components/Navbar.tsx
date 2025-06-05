import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={92}
                        height={56}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="rounded-full bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    )
}

export default Navbar