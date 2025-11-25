
import logotelegram from "../assets/images/telegramLogo.svg"

import instagram from "../assets/images/instagram.svg"
import git from "../assets/images/github.svg"
function Network(){

    return(
        <div className="felx items-start w-175   ">
        <h3 dir="rtl" className="flex-row-reverse justify-between  text-gray-700 font-stretch-200% font-bold mb-5   ">شبکه‌های اجتماعی:</h3>
        <div className="flex  gap-4">
          <a className="px-2 py-1 rounded-full bg-gray-100 text-black  flex flex-row-reverse ">mohammadmosavi1382
            <img className="mr-1 " src={git}  />
          </a>

       
          <a className="px-2 py-1 rounded-full bg-gray-100 text-black flex flex-row-reverse">mohmad.mosavi_
            <img className="mr-1 "  src={instagram} alt="" />
       
          </a>
          <a className="px-2 py-1 rounded-full  bg-gray-100 text-black flex flex-row-reverse ">mohmd-mosaviii
          <img className="mr-1 "  src={logotelegram}/>
          </a>
          
        </div>
      </div>

    )
}export default Network