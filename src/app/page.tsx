import Image from "next/image";
import Intro from "./components/Intro"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-500">Microfiy</span>
      </h1>
      <Image
        src="/microfiy.png"
        alt="Microfiy logo"
        width={400}
        height={400}
      />
      <Intro />
      <Login />
      <Signup />
    </main>
  );
}
