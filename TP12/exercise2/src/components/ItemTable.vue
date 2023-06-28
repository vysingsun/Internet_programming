<template>
    <div class="bg-slate-100 w-4/5 p-6">
        <div class="w-full flex justify-between bg-white p-5 rounded-t-lg ">
            <div class="font-medium text-base px-5 py-2.5 ml-2">Item</div>
            <div>
                <button @click="showPopup = true" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add New</button>
            </div>
        </div>
        <!-- list table -->
        <div class="no-scrollbar relative overflow-y-auto h-[55vh] w-full overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="w-1/4 px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item._id" class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{item._id}}
                        </th>
                        <td class="px-6 py-4">
                            {{item.name}}
                        </td>
                        <td class="px-6 py-4">
                            {{item.desc}}
                        </td>
                        <td class="px-6 py-4">
                            <div>Edit</div>
                            <button @click="DeleteItem(item._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <AddCatePopup v-if="showPopup">
        <form>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">                   
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="mt-3 text-center  sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add new Item</h3>
                                    <div class="mt-2">
                                        <input type="text" name="name" v-model="name"  aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name">
                                    </div>
                                    <div class="mt-2">
                                        <input type="text" name="desc" v-model="desc"  aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description">
                                    </div>
                                    <div class="mt-2">
                                        <select  id="default" v-model="category" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ImageUrl">
                                            <option disabled selected>Choose a category</option>
                                            <option v-for="category in categories" :key="category._id" :value="category._id">{{category.name}}</option>
                                           
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button v-on:click="addItem()"  class="inline-flex w-full justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Add</button>
                                <button @click="showPopup = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </AddCatePopup>
</template>

<script>
    import AddCatePopup from './AddCatePopup.vue';
    import categoryApi from '../libs/category';
    import itemApi from '../libs/item'
    import axios from 'axios';
    export default {
        components: {
            AddCatePopup
        },
        data() {
            return {
                categories: [],
                items: [],
                showPopup: false,
                name: '',
                desc: '',
            }
        },
        async mounted(){
            this.categories = await categoryApi.getCategory();
            this.categories = this.categories.data;

            this.items = await itemApi.getAllItemApi();
            this.items = this.items.data;
        },
        methods: {
            async addItem(){
                console.log(this.name);
                console.log(this.desc);
                console.log(this.category);
                let result = await axios.post("http://localhost:3001/item/create",{
                    name:this.name,
                    desc:this.desc,
                    category:this.category
                })
                console.log("Called");
                console.log(result);
            },
            DeleteItem(id){
                if(confirm('Are you sure ?')){
                    axios.post(`http://localhost:3001/item/delete/${id}`)
                    .then(res => {
                        console.log("deleted?");
                            
                    }); 
                }
            }
        }
    }
</script>

<style>
        
    /* Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
    display: none;
    }

    .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    }
        
</style>