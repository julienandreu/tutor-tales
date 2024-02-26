/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-lg text-center">
        Welcome to your Next.js + Tailwind CSS app.
      </p>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signIn('google')}>Sign in with google</button>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
