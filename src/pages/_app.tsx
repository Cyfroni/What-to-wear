import { type Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import Link from "next/link";
import "../styles/globals.css";

const Navigation = () => {
  const { data: sessionData } = useSession();

  return (
    <nav className="absolute flex h-16 w-screen items-center bg-cyan-700 text-white">
      <span className="flex min-h-[52px] min-w-[150px] items-center justify-center border-r-2 text-3xl font-semibold ">
        {sessionData?.user?.name}
      </span>
      <ul className="ml-5 flex flex-1 items-center text-xl">
        <li>
          <Link
            href={"/"}
            className="m-1 rounded-lg p-2 transition-colors hover:bg-cyan-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/clothes"}
            className="m-1 rounded-lg p-2 transition-colors hover:bg-cyan-600"
          >
            Clothes
          </Link>
        </li>
        <li className="ml-auto mr-3">
          <button
            onClick={sessionData ? () => signOut() : () => signIn()}
            className="rounded-lg bg-white p-2 text-cyan-700 transition-colors hover:bg-cyan-600 hover:text-white"
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navigation />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
