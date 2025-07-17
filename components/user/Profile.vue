<template>
<div>

<div class="p-20 flex justify-between">
    <h1 class=""><span class="text-gray-400">Home / </span> My Account</h1>
    <h1>Welcome <span class="text-red-500">Salim</span> </h1>

</div>
  <div class="py-5 px-20 grid grid-cols-[30%_70%]">
    <div class="flex flex-col gap-y-5">
    <div>
        <h1 class="font-bold ">Manage My Account</h1>
        <ul class="flex flex-col gap-y-2 mt-5 ml-7 text-gray-500">
            <li>Profile</li>
            <li>Adress Book</li>
            <li>My Payment Option</li>
        </ul>
    </div>
    <div>
        <h1 class="font-bold ">My Orders</h1>
        <ul class="flex flex-col gap-y-2 mt-5 ml-7 text-gray-500">
            <li>My Returns</li>
            <li>My Cancelations</li>
        </ul>
    </div>
    </div>
    <div class="shadow-md p-20 leading-[45px] w-full">
        <h1 class="text-xl font-semibold  text-red-600">Edit Your Profile</h1>
        <div class="flex justify-between gap-5 w-full">
            <div>

            <label for="">First Name</label>
            <input 
            placeholder="First Name"
            type="text" class=" border-none  w-full h-14 bg-gray-100  px-5" />
            </div>
            <div>

            <label for="">Last Name</label>
            <input 
            placeholder="Last Name"
            type="text" class=" border-none  w-full h-14 bg-gray-100  px-5" />
            </div>

        </div>
        <div>
            <label for="">Email</label>
            <input
            placeholder="Email"
            type="email" class=" border-none  w-full h-14 bg-gray-100  px-5" />
        </div>
        <div>
            <label for="">New Password </label>
            <input
            placeholder="New Password"
            type="password" class=" border-none  w-full h-14 bg-gray-100  px-5" />
        </div>
        <div>
            <label for="">Confirm Password </label>
            <input
            placeholder="Confirm Password"
            type="password" class=" border-none  w-full h-14 bg-gray-100  px-5" />
        </div>
        <div class="float-right mt-5 cursor-pointer" >
            <button class="bg-red-600 text-white font-semibold px-5 py-3 rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out">Save Changes</button>
            <button class="bg-gray-200 text-black font-semibold px-5 py-3 rounded-md hover:bg-gray-300 transition-all duration-300 ease-in-out ml-5">Cancel</button>
        </div>

    </div>

  </div>
</div>
</template>
