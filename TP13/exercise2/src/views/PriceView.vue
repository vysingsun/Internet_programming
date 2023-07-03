<script setup>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import PriceTable from '../components/PriceTable.vue'
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
                    <PriceTable/>
                    
                </div>    
            </div>
        </main>
    </div>
   
</template>