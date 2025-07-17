<template>
    <HomeNav/>
    <div class="p-5 grid grid-cols-1 md:p-20 md:flex md:gap-5">
        <div class="shadow-md p-5 md:p-10 leading-[60px]">
            <div class="flex font-semibold justify-start items-center gap-5">

            <div class="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-red-600">

            <svg
            class="w-6 text-white"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
            </div>
            <h1>Call To Us</h1>
            </div>
             <div class="p-5 leading-[25px] text-[14px]">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            </div>
            <div class="h-[1px] bg-gray-300"></div>
            <div class="flex font-semibold justify-start items-center gap-5">

            <div class="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-red-600">

           <svg 
           class="w-6 text-white "
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

            </div>
            <h1>Write To Us</h1>
            </div>
            <div class="p-5 leading-[25px] text-[14px]">

            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
            </div>




        </div>
                <div class="shadow-md p-5 md:p-10 ">
                    <div class="flex justify-between gap-3 ">

                    <input type="text" placeholder="First Name" class="w-full h-10 px-5 bg-gray-100 rounded-sm focus:outline-none"/>
                    <input type="text" placeholder="Last Name" class="w-full h-10 px-5 bg-gray-100 rounded-sm focus:outline-none"/>
                    <input type="text" placeholder="Email" class="w-full h-10 px-5 bg-gray-100 rounded-sm focus:outline-none"/>
                    </div>
                    <textarea type="text" placeholder="Message" class="w-full p-5 mt-5 h-1/2 px-5  bg-gray-100 rounded-sm focus:outline-none"/>
                    <button class="float-right cursor-pointer mt-5 h-10 px-5 bg-[#DB4444] text-white  rounded-sm focus:outline-none">Send</button>
                </div>

    </div>
    <HomeFooter/>
</template>