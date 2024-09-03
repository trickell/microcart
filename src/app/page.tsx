import Image from "next/image";
import Intro from "./components/Intro"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"

export default function Home(props) {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="microfy-home login">
          <h1 className="text-4xl font-bold text-center">
            Welcome to <span className="text-blue-500 logo">Microfiy</span>
          </h1>
          <p>The little cart that <em>does</em></p>
        </div>
        <Intro />
     </div>
     <div className="demo_area">
          <div className="demo">
            <div>
              <button className="nav">Demo</button>
            </div>
            <div>
              Show me whats up
            </div>
          </div>
          <div className="wizard">
            <div>
              <button className="nav">Wizard</button>
            </div>
            <div>Set up my cart now</div>
          </div>
      </div>
      <div className="homecontent">
      
        <Login />
        <Signup />
      </div>
    </main>
  );
}
