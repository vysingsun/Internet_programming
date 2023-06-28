<script setup>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import ItemTable from '../components/ItemTable.vue'
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
                    <ItemTable/>
                    
                </div>    
            </div>
        </main>
    </div>
   
</template>
<!-- <style>
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
</style> -->