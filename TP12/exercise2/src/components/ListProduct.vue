<script>
import categoriesApi from '../libs/category'
import productsApi from '../libs/product'
import productpriceApi from '../libs/productprice'
export default {
  data() {
    return {
      categories: [],
      products: [],
      productPrices: []
      
    }
  },
  async mounted() {
    this.categories = await categoriesApi.getCategoryItem();
    // this.products = await productsApi.getAllProduct("", "").data;
    // this.products = this.products.data

    // this.products = await productsApi.getProductApi();

    // this.productPrices = await productpriceApi.getProductPrice();
    // this.productPrices = this.productPrices.data
    console.log(this.products);
    
  },
  methods: {
    async onClick(categoryId, itemId){
      this.products = await productsApi.getAllProduct(categoryId, itemId)
    }
  }
}
</script>

<template>
  <div class="w-full h-[95vh] flex justify-center items-center">
    <div class="w-[75%]">
      <h1 class="w-full flex justify-center pb-4">tp11ip.com</h1>
      <div class="w-full flex rounded-2xl shadow-[1px_1px_20px_-6px_#0D2750] ">
        <div class="bg-slate-50 w-[30%] rounded-l-2xl p-8">  
          <ol v-for="category in categories" :key="category._id" class="space-y-4 list-decimal list-inside dark:text-gray-400">
            <ul>
              <a href="#" @Click="onClick(category._id,'')">{{category.name}}</a>
                <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                  <li v-for="item in category?.items" :key="item._id">
                    <a href="#" @click="onClick(item.category, item._id)">{{item.name}}</a>
                  </li>                  
                </ul>
            </ul>
          </ol>
        </div>

        <!-- pic -->
        <div class="bg-slate-200 w-[75%] overflow-y-auto grid grid-cols-4 gap-4 rounded-r-2xl p-10">
          <div v-for="product in products" :key="product._id" class="w-full bg-white rounded-lg shadow-[1px_1px_20px_-6px_#0D2750] p-4">           
              <div class="w-full">
                <div>
                  <img :src="product.imageUrl" alt="imgLogo">
                </div>
                <div class="w-full flex justify-center py-2">{{product.title}}</div>
                <!-- <div v-for="productPrice in productPrices" :key="productPrice._id"> -->
                  <div v-for="price in product?.prices" :key="price._id" class="flex justify-around">
                    <div>Shop1</div>
                    <div>$ {{price.price}}</div>
                    <div>{{ price.source }}</div>
                  </div>
                <!-- </div> -->
              </div>           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
