<script setup>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import CategoryTable from '../components/CategoryTable.vue'
</script>
<template> 
    <div class="w-full">
        <Header/>
        <main>
            <div class="mx-auto bg-slate-200">
                <!-- Your content -->
                <div class="flex">
                    <!-- sidebar -->
                    <Sidebar/>
                    <!-- list Category Table -->
                    <CategoryTable/>
                </div>    
            </div>
        </main>
    </div>
</template>