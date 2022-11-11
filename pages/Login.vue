<template>
  <register>
    <div class="flex justify-center ">
      <div class="w-fit"><page-header name="Sign into twitter" /></div>
    </div>
    <div class="flex flex-col items-center w-full  mx-auto px-4 ">
      <button
        class="w-full xs:w-3/5 border rounded-full p-1 text-sm col hover:border-dim-100"
      >
        Google signin
      </button>
      <button
        class="w-full xs:w-3/5 border rounded-full p-1 text-sm my-4 hover:bg-slate-100"
      ><i class="fa-brands fa-apple mr-2"></i>
<span>Sign in with Apple</span>
    </button>
    or
      <input type="text"
      placeholder="Phone, email or Username"
        class="w-full xs:w-3/5 border rounded-lg p-2 text-lg "
      />
      <button
        class="w-full xs:w-3/5 border rounded-full p-1 text-xs my-4 py-2 text-white bg-dim-900"
      >
      Next
      </button>
      <button
        class="w-full xs:w-3/5 border rounded-full p-1 text-sm hover:bg-slate-100"
      >
       Forgot Password
      </button>
      <p class="relative mt-8">Don't have an account? <NuxtLink class="text-dim-500 font-semibold" to="/Signup">Signup</NuxtLink></p>
    </div>
  </register>
</template>

<script>
export default {};
</script>

<style scoped>
.col:hover {
  background: rgb(248, 255, 253);
}
</style>
