<template>
    <div class="bg-slate-100 w-4/5 p-6">
        <div class="w-full flex justify-between bg-white p-5 rounded-t-lg ">
            <div class="font-medium text-base px-5 py-2.5 ml-2">Product</div>
            <div>
                <button @click="showPopup = true" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add New</button>
            </div>
        </div>
        <!-- list table -->
        <div class="no-scrollbar relative overflow-x-auto h-[55vh] w-full overflow-y-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product._id" class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{product._id}}
                        </th>
                        <td class="px-6 py-4">
                            <div class="w-16">
                                <img class="p-0 w-full" :src="serverUrl+product.image" alt="">
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            {{product.title}}
                        </td>
                        <td class="px-6 py-4">
                            $ {{product.price}}
                        </td>
                        <td class="px-6 py-4">
                            <div>Edit</div>
                            <form >
                                <button @click="DeleteProduct(product._id)">Delete</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <AddProductPopup v-if="showPopup">
        <!-- @submit.prevent="submitForm" -->
        <form enctype="multipart/form-data">
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">                   
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="mt-3 text-center  sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add new Item</h3>
                                    <div class="mt-2">
                                        <label for="countries" class="block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Product title</label>
                                        <input type="text"  v-model="title"  aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title">
                                    </div>
                                    
                                    <!-- <div class="mt-2">
                                        <label for="countries" class="block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                                        <input type="text" name="price" v-model="price"  aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price">
                                    </div> -->
                                    <div class="mt-2">
                                        <label for="countries" class="block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                        <!-- <input type="text" name="imageUrl" v-model="imageUrl"  aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="imageUrl"> -->
                                        <input class="p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" ref="file" @change="handleFileChange">
                                    </div>
                                    <div class="mt-2">
                                        <label for="countries" class="block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Category</label>
                                        <select  @change="change" id="category" v-model="category1" name="category1" class="category bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category">
                                            <option v-for="category in categories" :key="category._id" :value="category._id">{{category.name}}</option>
                                        </select>
                                    </div>
                                    <div class="mt-2">
                                        <label for="countries" class="block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Sub-Category</label>
                                        <select id="item" v-model="item" name="item" class=" bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="item">
                                            <option v-for="item in items" :key="item._id" :value="item._id">{{item.name}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <!-- v-on:click="submitForm()"  -->
                                <button v-on:click="submitForm()" class="inline-flex w-full justify-center rounded-md bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Add</button>
                                <button @click="showPopup = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </AddProductPopup>
</template>

<script>
    import AddCatePopup from './AddCatePopup.vue';
    import categoryApi from '../libs/category';
    import itemApi from '../libs/item';
    import produdctTable from '../libs/productTable'
    import axios from 'axios';
    export default {
        components: {
            AddCatePopup
        },
        data(){
            return{
                categories: [],
                items: [],
                products: [],
                showPopup: false,
                category1: '',
                title: '',
                image: '',
                category: '',
                item: '',
                file : '',
                serverUrl: 'http://localhost:3001/static/',
                imageUrl: null
            }
        },
        
        methods:{
            async submitForm(){
                const formData = new FormData()
                formData.append("title", this.title);
                formData.append("image", this.file);
                formData.append("category", this.category1)
                formData.append("item", this.item)
                console.log(this.title);
                console.log(this.file);
                try {
                    const res = await axios.post("http://localhost:3001/product/create",formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                    console.log(res.data);
                } catch (error) {
                    console.log(error);
                }
            },
            handleFileChange(){
                this.file = this.$refs.file.files[0];
            },
            change: async function categorySelect(){
                console.log(this.category1);
                const test = await itemApi.getItemApi(this.category1)
                console.log(test);
                this.items = test["data"]
            },
            DeleteProduct(id){
                if(confirm('Are you sure ?')){
                    axios.post(`http://localhost:3001/product/delete/${id}`)
                    .then(( res )=> {
                        console.log("deleted?");
                        
                    }); 
                }
            }
        },
        async mounted(){
            this.categories = await categoryApi.getCategory();
            this.categories = this.categories.data;

            this.products = await produdctTable.getProductApi();
            console.log(this.products);
        }
    }
</script>