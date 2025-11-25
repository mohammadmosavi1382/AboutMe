import Logo from "../assets/images/logo.svg"

function Header() {
    return (
     <>

     <main className="pt-0 mb-2 mt-0 ">
    
        <div className="flex flex-row justify-between bg-white rounded-2xl pb-1 rounded-tr-3xl  w-310 h-16 ">
            <div className="flex items-center ">
                <p className="text-black pl-2">mohammad.mosavi20033@gmail.com</p>
            </div>
            <nav dir="rtl" className="flex   gap-10 items-center font-bold ">
                <a className=" text-black font-stretch-90%   hover:decoration-blue-700 relative text-gray-800 font-bold 
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 
             after:transition-all after:duration-300 hover:after:w-full" href="" >خانه</a>
                <a className="text-black  pr-10 relative text-gray-800 font-bold 
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 
             after:transition-all after:duration-300 hover:after:w-full " href=""> مهارت ها</a>
   </nav>
            <div className=" justify-end bg-white flex gap-2 rounded-2xl   ">
            <div className="text-right pl-5 ">
                <h2 className="text-black font-bold ml-6 " > SeniorCode.ir

                </h2>
                <p className=" font-bold pt-1  text-blue-950">سیــنـیــورکـــد</p>
            </div> 
            <div className="w-20 pl-2 rounded-r-3xl overflow-hidden">
                <img src={Logo} className=" pr-3 mr-5 w-17 h-13 pt-1 object-cover mt-1 " />
            </div>
        </div>
        </div>
        </main>
        </>
    )
} export default Header