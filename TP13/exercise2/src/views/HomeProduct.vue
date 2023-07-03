<script setup>
  import Header from '../components/Header.vue'
//   import Sidebar from '../components/Sidebar.vue'
  import ListProduct from '../components/ListProduct.vue'
</script>
<template> 
    <div class="w-full">
        <Header/>
        <main>
            <div class="mx-auto bg-slate-200">
                <!-- Your content -->
                <div class="flex">
                    <!-- sidebar -->
                    <!-- <Sidebar/> -->
                    <!-- list Category Table -->
                    <ListProduct/>
                </div>    
            </div>
        </main>
    </div>
</template>