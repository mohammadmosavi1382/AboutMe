
import Network from "./Network"
import face from "../assets/images/faceme.jpg"
function Biogerafi() {
    return (
        <main className=" flex flex-row w-310  mt-2 bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col justify-between  ml-9  text-right">
              
                <h1 dir="rtl" className="text-black text-right pr-11 pt-5  font-bold  ">
                    سلام من سید محمد موسوی هستم
                </h1>
           
                <h2 className="text-3xl font-bold  mb-2 pr-11 text-gray-700 ">
                    توسعه دهنده وب                 </h2>
                <span dir="rtl" className=" font-stretch-150% pl-2 pr-11  font-semibold leading-relaxed text-gray-700 ">
                حدود یک ساله که وارد دنیای وب شدم و روی یادگیری و توسعه‌ی فرانت‌اند تمرکز دارم.
                در حال حاضر با React کار می‌کنم و در مسیر یادگیری معماری‌های اصولی فرانت‌اند مثل Component-Based Architecture و Clean Architecture for Front-end هستم تا پروژه‌هایی استاندارد، مقیاس‌پذیر و قابل نگهداری بسازم.
                
<br />
<br />
در این مسیر بر روی مجموعه‌ای از پروژه‌ها و تمرین‌های آموزشی کار کرده‌ام؛ از توسعه کامپوننت‌های کاربردی و طراحی رابط‌های واکنش‌گرا با React، تا پیاده‌سازی فرم‌ها، مدیریت وضعیت و برقراری ارتباط با APIها.
همواره تلاش کرده‌ام علاوه بر نگارش کد استاندارد، بر بهبود تجربه کاربری، ساختاردهی اصولی پروژه و افزایش کارایی تمرکز داشته باشم تا مسیر رسیدن به پروژه‌های حرفه‌ای و قابل ارائه هموارتر شود.      
                </span>

                

                <div className=" mb-25   pr-1  flex w-195  border-t border-amber-200">
                    <div className=" pl-20 pt-4">
          <Network/>
        </div>
        </div>
            </div>
            <div className="  ">
<img  className="h-155 w-305 rounded-tr-xl rounded-br-2xl object-cover " src={face} alt="" />
            </div>
        </main>
    )
} export default Biogerafi