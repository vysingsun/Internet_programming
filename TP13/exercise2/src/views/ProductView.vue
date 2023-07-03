<script setup>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import ProductTable from '../components/ProductTable.vue'
</script>
<template>
    <div >
        <Header/>
        <main>
            <div class="mx-auto bg-slate-200">
                <!-- Your content -->
                <div class="flex">
                    <!-- sidebar -->
                    <Sidebar/>
                    <!-- list Category Table -->
                    <ProductTable/>                
                </div>    
            </div>
        </main>
    </div>
</template>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    position: relative;
  }
  .wrapper{
    width: 95vw;
    height: 100vh;
    position: relative;
    margin-top: 0;
    padding-top: 0vh;
  }
</style>