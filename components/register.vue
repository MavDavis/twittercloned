<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center z-50"
  >
    <!-- modal -->
    <div class="w-full h-full relative flex flex-col justify-center items-center bg">
      <div class="bg-white width xs:rounded-xl">
        <div class="w-full flex justify-center  p-4 bgs  relative">
          <div class="absolute top-0 left-2 flex items-center w-fit h-fit p-2 cursor-pointer">
            <i class="fas fa-times text-2xl"></i>
          </div>
          <logo />
        </div>
      <div class="modal  relative flex flex-col justify-center xs:items-center">
       
        <slot></slot>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg {
  background: rgba(0, 0, 0, 0.5);
}
.width {
  width: 100%;
  max-width: 614px;
  margin-left: auto;
  margin-right: auto;

}.modal{
    height: 500px;
    border-radius:  0 0 10px 10px;

}
.bgs{
    height: 4rem;
    border-radius: 10px  10px 0 0 ;

}
@media (max-width: 614px) {
  .modal {
    height: calc(100vh - 4rem);
    border-radius: 0;
  }
}
</style>
