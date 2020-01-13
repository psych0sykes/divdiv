import React from "react";


function Nav() {
return(
<nav class="flex justify-between w-full bg-black text-white p-4">
<a href="/"><span class="font-semibold text-xl tracking-tight">divdiv</span></a>
  <div class="md:items-center md:w-auto flex">
    <div class="md:flex hidden">
      <a class="block md:text-white mr-4 navLink" href="" id="navYourDiv">your div</a>
    </div>
    <div class="flex text-sm" v-else>
        <a class="p-2 ml-2 bg-white text-black font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="/auth/signin" id="navLogin">login</a>
    </div>
  </div>
</nav>
);
}

export default Nav;

