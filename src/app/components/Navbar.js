import Link from 'next/link';
import paths from '../paths';

function Navbar () {

    return (
        // <nav className="navbar">
        //     <ul className="nav-list">
        //         <li>
        //             <Link href={paths.home()}>
        //                 MICROFIY</Link>
        //         </li>
        //         <li>
        //             <Link href={paths.profile()}>
        //                 Profile</Link>
        //         </li>
        //         <li>
        //             <Link href={paths.shopping()}>
        //                 Shopping</Link>   
        //         </li>
        //         <li>
        //             <Link href={paths.cart()}>
        //                 Cart</Link>
        //         </li>
        //         <li>
        //             <Link href={paths.about()}>
        //                 About</Link>
        //         </li>
        //         <li>
        //             <div className="searchbar">
        //                 <input
        //                     type="text"
        //                     name="search"
        //                     id="search" />
        //                 <button className="search-btn">
        //                     Search
        //                 </button>
        //             </div>
        //         </li>
        //     </ul>
        // </nav>

        <TailwindNavbar/>
    )
};


export default Navbar;


function TailwindNavbar() {
    return (
<div className="navhead">
<nav class="gray-200" >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href={paths.home()} class="logo flex items-center space-x-3 rtl:space-x-reverse">
        <span className="microfy">Microfiy</span>
        </Link>
        <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 
        justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
        focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>


    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 
      rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 
      md:dark:bg-transparent dark:border-gray-700">
        <li>
        <Link href={paths.profile()} className="nav">Profile</Link>
        </li>

        <li>
        <Link href={paths.cart()} className="nav">Cart</Link>
        </li>
        
        <li>
        <Link href={paths.shopping()} className="nav">Shopping</Link>
        </li>

        <li>
        <Link href={paths.about()} className="nav">About</Link>
        </li>
        <li>
          <input type="text" placeholder="Search" className="searchbar" id="searchbar">
          </input>
        </li>
      </ul>
    </div>
   
    </div>
  </nav>
</div>

 
  

    )
}