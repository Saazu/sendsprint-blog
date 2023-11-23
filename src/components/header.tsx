import React from "react";
import Image from "next/image";
import sendsprintIcon from '../assets/images/logo.svg'

export default async function Home() {
return (
    <header className="flex flex-row justify-between items-center px-8 py-6 bg-green-100 rounded">
      <Image 
        src={sendsprintIcon}
        alt="Sendsprint"
        className="xs-hidden"
      />
      <div>
        <p>Home of Sendsprint News</p>
      </div>
    </header>
  );
}