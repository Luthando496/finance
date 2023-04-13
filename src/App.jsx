import {FaMoneyBillAlt,FaBuilding,FaHandsHelping,FaWallet,FaEnvelope,FaPhone,FaSearchLocation,FaTimes} from 'react-icons/fa'
import {CiMenuBurger} from 'react-icons/ci'
// import {Box,Tab,Tabs} from '@mui/material'
import {useState} from 'react'



function App() {
  const [toggle,setToggle]= useState(1)
  const [show,setShow]= useState(false)

  const updateToggle=(id)=>{
    setToggle(id)
  }




  return (
    <>
    <nav className="blue-1 py-4 w-full">
    <div className="w-[90%] mx-auto flex justify-between items-center">
    <h1 className="text-4xl font-light text-white">BankWise</h1>

    <ul className="flex-gap-8 hidden lg:flex items-center gap-2 lg:gap-6">
      <li className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <a href='#overview' className=" lg:text-md font-semibold text-white">Overview</a>
      </li>
      <li className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
        <a href='#features' className=" lg:text-md font-semibold text-white">Features</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a href='#inter' className=" lg:text-md font-semibold text-white">Intergrations</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a href='#pay' className=" lg:text-md font-semibold text-white">Money Services</a>
      </li>
    </ul>

    <button className="lg:hidden text-5xl text-orange-600 " onClick={()=> setShow(!show)} >
      <CiMenuBurger  />
    </button>

    {show && <div className={`${show ?'fixed lg:hidden top-0 left-0 translate-x-0 duration-1000 z-40 bg-slate-900 w-full h-full':'fixed top-0 lg:hidden translate-x-[-100%] duration-1000'}`}>
      <div className="text-right pr-8">
        <button className="lg:hidden text-[5rem] text-orange-600 " onClick={()=> setShow(!show)} >
          <FaTimes  />
        </button>
      </div>

      <ul className="flex flex-col gap-8">
      <li  className="hover:bg-white/10  cursor-pointer duration-700 px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)} href='#overview' className=" lg:text-md font-semibold text-white">Overview</a>
      </li>
      <li  className="hover:bg-white/10 duration-700  cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)}  href='#features' className="lg:text-md font-semibold text-white">Features</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)} href='#inter' className="lg:text-md font-semibold text-white">Intergrations</a>
      </li>
      <li className="hover:bg-white/10 duration-700 cursor-pointer px-6 py-4 rounded-2xl">
        <a onClick={()=> setShow(!show)} href='#pay' className=" lg:text-md font-semibold text-white">Money Services</a>
      </li>
      </ul>
    </div>}

    <button className="text-white hidden lg:block bg-white/75 hover:bg-white/10 duration-700 hover:text-indigo-600 rounded-xl px-8 py-4 text-xl font-semibold">Get Started</button>

    </div>
     
    </nav>

    <header id='overview' className="min-h-[120vh] head w-full">
    <div className="w-full h-full flex justify-center items-center py-16">
    <div className="space-y-8 text-center">
    <h3 className="text-xl text-lime-500 font-semibold">All-in-one banking for everyone</h3>
    <h1 className="text-[6rem] font-semibold capitalize  text-white">Smart and simple <br /> online banking</h1>
    <p className="text-md text-light text-emerald-400">With our secure online banking services, you can manage<br/> your finances from anywhere, at any time.</p>
    <div className="flex items-center w-[90%] mx-auto">
    <input type="text" className="w-[70%]  lg:w-[70%]  focus:outline-none py-4 px-8" />
    <input type="button" value='Sign up'  className=" bg-cyan-700 uppercase text-white focus:outline-none tracking-[2px] py-4 px-8" />

    </div>

    </div>

    </div>

    </header>

    <main  id='features' className=" w-full py-[3rem] bg-teal-900">
          <h2 className="text-xl text-teal-300 font-semibold text-center">Why BankWise?</h2>
          <h1 className="text-center leading-normal text-5xl my-3 font-bold text-white">The only fintech app<br/> you’ll ever need</h1>
          <p className="text-center text-gray-300 text-md font-light">Our online banking platform is user-friendly and easy to navigate.</p>

          <div className="w-[90%] mx-auto my-[4rem] py-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">


          {/* card */}
          <div className="w-full py-8 hover:bg-white/10 duration-700 cursor-pointer rounded-2xl">
          <div className=" w-full mb-6 flex justify-center">
          <FaMoneyBillAlt className='text-[4rem] text-red-900  text-center' />
          </div>
          <h3 className="text-center capitalize font-bold text-xl text-white">Checking account</h3>
          <p className="text-md text-center mt-2 text-white font-semibold">Facilisis id diam eget quam.<br/> Nisi vestibulum accumsan<br /> lectus.</p>
          </div>
          {/*  */}
          {/* card */}
          <div className="w-full py-8 hover:bg-white/10 duration-700 cursor-pointer rounded-2xl">
          <div className=" w-full mb-6 flex justify-center">
          <FaBuilding className='text-[4rem] text-red-900  text-center' />
          </div>
          <h3 className="text-center capitalize font-bold text-xl text-white">Savings account</h3>
          <p className="text-md text-center mt-2 text-white font-semibold">Facilisis id diam eget quam.<br/> Nisi vestibulum accumsan<br /> lectus.</p>
          </div>
          {/*  */}
          {/* card */}
          <div className="w-full py-8 hover:bg-white/10 duration-700 cursor-pointer rounded-2xl">
          <div className=" w-full mb-6 flex justify-center">
          <FaHandsHelping className='text-[4rem] text-red-900  text-center' />
          </div>
          <h3 className="text-center capitalize font-bold text-xl text-white">Low Interest Loans</h3>
          <p className="text-md text-center mt-2 text-white font-semibold">Facilisis id diam eget quam.<br/> Nisi vestibulum accumsan<br /> lectus.</p>
          </div>
          {/*  */}
          {/* card */}
          <div className="w-full py-8 hover:bg-white/10 duration-700 cursor-pointer rounded-2xl">
          <div className=" w-full mb-6 flex justify-center">
          <FaWallet className='text-[4rem] text-red-900  text-center' />
          </div>
          <h3 className="text-center capitalize font-bold text-xl text-white">Flexible credit loans</h3>
          <p className="text-md text-center mt-2 text-white font-semibold">Facilisis id diam eget quam.<br/> Nisi vestibulum accumsan<br /> lectus.</p>
          </div>
          {/*  */}

          </div>
    </main>

    <section className="min-h-[60vh] py-20">
    <div className="w-[90%] mx-auto gap-12 grid grid-cols-1 lg:grid-cols-2">

    {/* left */}
    <div className="flex flex-col gap-8 border-l-4 border-l-gray-400  ">
      {/* card */}
      <div className={`${toggle === 1 ? 'border-l-slate-950 border-l-4 bg-sky-400/50' : 'bg-transparent'} space-y-2 px-6 -ml-[4px] cursor-pointer    py-8`} onClick={()=> updateToggle(1)}  >
      <h2 className="text-4xl font-semibold text-green-200">Income and expense tracker</h2>
      <p className="text-md font-semibold tracking-[2px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatum doloremque assumenda asperiores maiores qui placeat, odio a non facilis quaerat minus, in necessitatibus.</p>

      </div>
      {/*  */} 
      {/* card */}
      <div className={`${toggle === 2 ? 'border-l-slate-950 border-l-4  bg-sky-400/50' : 'bg-transparent'} space-y-2 px-6 -ml-[4px] cursor-pointer   py-8`} onClick={()=> updateToggle(2)} >
      <h2 className="text-4xl font-semibold text-green-900">Automated invoicing</h2>
      <p className="text-md font-semibold tracking-[2px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatum doloremque assumenda asperiores maiores qui placeat, odio a non facilis quaerat minus, in necessitatibus.</p>

      </div>
      {/*  */}
      {/* card */}
      <div className={`${toggle === 3 ? 'border-l-slate-950 border-l-4  bg-sky-400/50' : 'bg-transparent'} space-y-2 px-6 -ml-[4px] cursor-pointer   py-8`} onClick={()=> updateToggle(3)}   >
      <h2 className="text-4xl font-semibold text-green-900">Crypto connection</h2>
      <p className="text-md font-semibold tracking-[2px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatum doloremque assumenda asperiores maiores qui placeat, odio a non facilis quaerat minus, in necessitatibus.</p>

      </div>
      {/*  */}
    </div>

    <div className={`w-full h-full relative  ${toggle === 1 ? 'block' : 'hidden'}`}>
    <img src="/assets/pexels-essow-936722.jpg" alt="" className="w-full h-full" />
    <div className="w-full h-full bg-green-600/20 top-0 left-0 absolute"></div>

    </div>
    <div className={`w-full h-full relative ${toggle === 2 ? 'block' : 'hidden'}`}>
    <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFua2luZyUyMGFuZCUyMGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-full" />
    <div className="w-full h-full bg-gray-600/20 top-0 left-0 absolute"></div>

    </div>
    <div className={`w-full h-full relative ${toggle === 3 ? 'block' : 'hidden'}`}>
    <img src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFua2luZyUyMGFuZCUyMGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-full" />
    <div className="w-full h-full bg-gray-600/20 top-0 left-0 absolute"></div>
    </div>

    </div>

    </section>


    <section className="w-full py-16">
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8 items-center">

    <div className="w-full">
    <img src="/assets/pexels-pixabay-164527.jpg" alt="money" className="w-full h-full" />
    </div>

    <div className="w-full px-8 py-16">

    <h1 className="text-[4rem] leading-[1.2] text-black/70">
    Be in complete control over your money
    </h1>
    <p className="text-xl font-semibold my-4 text-gray-400">Our online banking platform is protected with the latest encryption technology and multi-factor authentication, giving you peace of mind when managing your finances.</p>

    </div>

    </div>

    </section>


    <section className="w-full py-16 bg-gray-200/5 shadow-2xl shadow-pink-600">
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8 items-center">


    <div className="w-full px-8 py-16">

    <h1 className="text-[4rem] leading-[1.2] text-black/70">
    Virtual or physical ⎯ it’s your choice
    </h1>
    <p className="text-xl font-semibold my-4 text-gray-400">Whether you’re at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go.</p>

    </div>

    <div className="w-full ">
    <img src="/assets/pexels-pixabay-210574.jpg" alt="money" className="w-full h-full]" />
    </div>

    </div>

    </section>

    <section className="py-28 w-full bg-slate-900 ">

    <div className="mt-20 rounded-2xl shadow-lg mx-auto w-[90%] flex flex-col lg:flex-row shadow-pink-600 justify-center items-center py-20 px-8 lg:px-[6rem] gap-6 bg-sky-900">
    <div className="img overflow-hidden w-full">
      <img src="/assets/ethan-hoover-0YHIlxeCuhg-unsplash.jpg" alt="person" className="w-full hover:scale-150 duration-700 rounded-2xl h-[27rem] " />
    </div>

    <div className="py-16">
      <h1 className="text-3xl text-[4rem] leading-[1.2] font-semibold text-black/70">
      Be in complete control over your money
      </h1>
      <p className="text-xl font-semibold my-4 text-gray-400">"I've been using FinFlow for over a year now, and it has completely changed the way I manage my finances. It's so easy to use and has helped me save time and stay on top of my accounts. Highly recommend!"</p>
      <p className="text-md font-bold text-yellow-700">Jacob Jones, CEO @ Penta</p>
    </div>

    </div>

    </section>


    <section  id='pay' className="py-20 w-full bg-gray-200/90">
    <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* left */}
    <div className="space-y-4">
    <FaMoneyBillAlt className='text-green-400 text-[6rem]' />
    <h1 className="text-5xl font-bold text-black/80">Wallet Integrations</h1>
    <p className="text-xl font-semibold text-gray-500/80">Whether you’re at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go.</p>

    <button className="text-md capitalize font-semibold px-8 rounded-2xl py-4 bg-green-900 hover:bg-green-400 hover:text-lime-950 duration-1000 text-lime-300">Learn more</button>
    </div>

    {/* // right */}
    <div className="grid grid-cols-2 gap-4 items-baseline space-y-6">
    {/* card */}
    <div className="flex flex-col gap-8">
    <div className="card flex flex-col gap-4">
    <div className="img w-full">
    <img src="/assets/Online-Banking-Wallet-Image-1.jpg" alt="apple-pay" className="h-[3rem]" />
    </div>
    <p className="text-gray-600 font-semibold text-md">Make secure payments in stores, online, and in apps with just a touch of your Apple device.</p>
    </div>
    {/*  */}
    <div className="card flex flex-col gap-4">
    <div className="img w-full">
    <img src="/assets/Online-Banking-Wallet-Image-3.jpg" alt="stripe-pay" className="h-[3rem]" />
    </div>
    <p className="text-gray-600 font-semibold text-md">Make secure payments in stores, online, and in apps with just a touch of your Apple device.</p>
    </div>
    </div>
    {/*  */}


     {/* card */}
     <div className="flex flex-col gap-8">
    <div className="card flex flex-col gap-4">
    <div className="img w-full">
    <img src="/assets/Online-Banking-Wallet-Image-2.jpg" alt="paypal-pay" className="h-[3rem]" />
    </div>
    <p className="text-gray-600 font-semibold text-md">Make secure payments in stores, online, and in apps with just a touch of your Apple device.</p>
    </div>
    {/*  */}
    <div className="card flex flex-col gap-4">
    <div className="img w-full">
    <img src="/assets/Online-Banking-Wallet-Image-4.jpg" alt="apple-pay" className="h-[3rem]" />
    </div>
    <p className="text-gray-600 font-semibold text-md">Make secure payments in stores, online, and in apps with just a touch of your Apple device.</p>
    </div>
    </div>
    {/*  */}


    </div>

    </div>

    </section>

    <section id='inter' className="pt-28 pb-12 blue-1 w-full">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-[19rem] mx-auto w-[90%] border-b pb-8">
    <div className="space-y-4">
      <h1 className="text-4xl tracking-[3px] capitalize font-bold text-white">Contact information</h1>
      <p className="text-md text-gray-400 font-semibold">Rhoncus quam dolor enim egestas cras. Senectus<br/> quis lectus pharetra diam sociis etiam magna</p>
    </div>

    <div className="space-y-4">
      <div className="flex gap-4">
        <FaEnvelope className='text-3xl text-sky-400' />
        <p className="text-md font-semibold cursor-pointer hover:text-sky-400 text-white">luthandodidiza197@gmail.com</p>
      </div>
      <div className="flex gap-4">
        <FaPhone className='text-3xl text-sky-400' />
        <p className="text-md font-semibold cursor-pointer hover:text-sky-400 text-white">(+27) 76 705 7533</p>
      </div>
      <div className="flex gap-4">
        <FaSearchLocation className='text-3xl text-sky-400' />
        <p className="text-md font-semibold cursor-pointer hover:text-sky-400 text-white">Cape Town, Western Cape, South Africa</p>
      </div>
    </div>

    </div>

    <div className="mt-8 w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 border-b pb-8">
    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Product</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Overview</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Features</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Solutions</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Tutorials</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Pricing</h2>
        </li>
      </ul>
    </div>

    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Company</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">About Us</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Careers</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Press</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">News</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Contact</h2>
        </li>
      </ul>
    </div>
    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Resources</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Blogs</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Help Center</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Support</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Tutorials</h2>
        </li>
      </ul>
    </div>
    {/* card */}
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Social</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Twitter</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Facebook</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">GitHub</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Linkedin</h2>
        </li>
      </ul>
    </div>
    <div className="">
      <h2 className="text-md text-black font-semibold capitalize tracking-[2px] mb-9">Legal</h2>

      <ul className="space-y-6 flex flex-col">
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Terms</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Privacy</h2>
        </li>
        <li className="">
          <h2 className="text-xl cursor-pointer hover:-translate-x-3 hover:text-sky-500 duration-700 font-semibold text-white">Cookies</h2>
        </li>
      </ul>
    </div>

    </div>

    <div className="mt-12 w-[85%] mx-auto items-center flex justify-between flex-col lg:flex-row">
    <h1 className="text-5xl font-bold text-white">BankWise</h1>

    <p className="text-xl font-semibold text-gray-400">Copyright: © 2023 BankWise Bank Theme by Luthando Didiza. All Rights Reserved.</p>

    </div>

    </section>

    </>


  )
}

export default App



