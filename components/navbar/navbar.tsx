"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
    const { data: session } = useSession(); //세션 정보를 가져옴

    return (
        <nav className={style.navbar}>
            <Link href="/">
                <h1>navbar</h1>
            </Link>

            <ul className="">
                {session ? ( //세션 정보가 있으면 signOut()호출
                    <button onClick={() => signOut()}>Sign out</button>
                ) : (
                    //세션 정보가 없으면 signIn()호출
                    <button onClick={() => signIn()}>Sign in</button>
                )}
            </ul>
        </nav>
    );
}
