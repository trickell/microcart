import Image from "next/image";
import Intro from "./components/Intro"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="microfy-home">
        <h1 className="text-4xl font-bold text-center">
          Welcome to <span className="text-blue-500 logo">Microfiy</span>
        </h1>
        <h3>The little cart that <em>does</em></h3>
     </div>
     <div className="homecontent">
      <Intro />
      <Login />
      <Signup />
      </div>
    </main>
  );
}
