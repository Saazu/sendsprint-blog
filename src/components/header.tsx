import React from "react";
import Image from "next/image";
import Link from "next/link";
import sendsprintIcon from '../assets/images/logo.svg'

export default async function Home() {
return (
    <header className="flex flex-row justify-between sm:jsutify-end items-center px-8 py-6 bg-green-100 rounded-md">
      <div className="hidden sm:block">
        <Link href="/">
          <Image 
            src={sendsprintIcon}
            alt="Sendsprint" 
          />
        </Link>
      </div>
      <div>
        <Link href="/">
          <p>Home of Sendsprint News</p>
        </Link>
      </div>
    </header>
  );
}