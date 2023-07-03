<script setup>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import UserTable from '../components/UserTable.vue'
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
                    <UserTable/>
                </div>    
            </div>
        </main>
    </div>
</template>