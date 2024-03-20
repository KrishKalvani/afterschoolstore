<template>
  <div class="app">
    <div id="navigation" style="background-color: #110d78; ">
       
        <a href="afterSchool.html"><img id="logo" src="cw1logo.png"></a><!--website logo-->
        <p style="position: absolute;margin-top: -110px;margin-left: 40%; color: white; font-family: Arial, Helvetica, sans-serif;">Search:</p>
        <input id="searchInput" v-model="searchValue" type="text" placeholder="Search lessons..."><!--search input, searchVal is tracked here-->
        <!--change made here-->
      </div>
      <h3 id="welcomeText">Welcome! Buy any lesson you want and pursue your studies <em>AfterSchool</em></h3><!--welcome message-->
      <!-- <div v-if="showLesson"> v-if here also because I don't want the sort buttons to be there in the checkout page -->
        
      <div id="sortPriceButtons"><!--here are all the sorting buttons- sort by price-->
        <button v-on:click="sortByPrice('ascending')">Sort by Price (Low to High)</button>
        <button v-on:click="sortByPrice('descending')">Sort by Price (High to Low)</button>
      </div>
      <div id="sortSubButtons"><!--sort by subject-->
        <button id="sortSubButton" v-on:click="sortAlphabetically('ascending')">Sort by Subject (A to Z)</button>
        <button id="sortSubButton" v-on:click="sortAlphabetically('descending')">Sort by Subject (Z to A)</button>
      </div>
      <div id="sortLocationButtons"><!--sort by location-->
        <button id="sortLocButtons" v-on:click="sortLocationAlphabetically('ascending')">Sort by Location (A to Z)</button>
        <button id="sortLocButtons" v-on:click="sortLocationAlphabetically('descending')">Sort by Location (Z to A)</button>
      </div>
      <div id="sortSpacesButtons"><!--sort by spaces-->
        <button v-on:click="sortBySpaces('ascending')">Sort by Spaces (Low to High)</button>
        <button v-on:click="sortBySpaces('descending')">Sort by Spaces (High to Low)</button>
      </div>
      
      
    <!-- </div> -->
    <header>
      <!-- <h1>{{sitename}}</h1> -->
      <button id="checkOutButton" @click="showCheckout" :disabled="cart.length===0 && showLesson">{{this.cart.length}}Checkout</button>
    </header>
    <main>
      <product-list v-if="showLesson" @addProduct="addToCart"></product-list>
      <checkout v-else :cart='cart'></checkout>
      <!-- <form-component v-if="showForm" :cart="cart" @remove-item="removeFromCart"></form-component> -->
      
    </main>
    <div id="footer">
      <p style="margin-left: 45%;">Web page made by Krish Kalvani</p>
    </div>
  </div>
  
</template>

<script> /* eslint-disable */
import productList from "./components/ProductList.vue";
import checkout from "./components/Form.vue"


export default {
  name: 'App',
  components: {
    productList,
    checkout
  },
  data(){
    return{
      sitename: 'AfterSchool',
      cart:[],
      showLesson: true
    }
  },
  methods: {
    showCheckout(){
      this.showLesson = this.showLesson ? false : true; // Show the checkout form
    },
    addToCart(lesson){
      console.log("addProduct event received by the root component.");
      this.cart.push(lesson);
    },
     removeFromCart(index) {
      this.cart.splice(index, 1); // Remove item from cart
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{ /*body css*/
    margin: 0;
    background-color:#ff9900 ;
    /* background: linear-gradient(to bottom, #ff9900, #ff66cc); */
}
#navigation{ /*navigation bar*/
   
    height:70px;
    width:100%;
}
#searchInput{ /*search bar in the nav bar*/
    position: absolute;
    margin-top: 15px;
    margin-left: 35%;
    width: 300px;
    height: 30px;
    
    padding: 5px;
}

#sortPriceButtons{ /*positioning the sort price button*/
    position: absolute;
    margin-left:2%;
    margin-top: -2%;
}
#sortSubButtons{ /*positioning the sort subject button*/
    position: absolute;
    margin-top: -2%;
    margin-left: 28%;
}

#sortLocationButtons{ /*positioning the sort location button*/
    position: absolute;
    margin-top: -2%;
    margin-left: 51%;

}

#sortSpacesButtons{
    position: absolute;
    margin-top: -2%;
    margin-left: 74%;

}


#welcomeText{ /*CSS for the welcome message*/
    font-size: 50px;
    margin-left: 3%;
    text-align: center;
    color: white;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 2px;
   
    
}

/*Logo in the nav bar*/
#logo{
    height:200px;
    width: 9%;
    margin-left:1%;
    margin-top: -4.5%;
    
}
#checkOutButton {
  /*CSS for the checkout button on the top in the nav bar*/
  position: absolute;
  margin-top: -18.5%;
  margin-left: 90%;
  height: 8%;
  width: 6%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: #9692f7;
}

#footer{ /*footer at the bottom of the page*/
    position: absolute;
    /* margin-left: 50%; */
    background-color: #110d78;
    color: white;
    font-size: larger;
    width: 100%;
    margin-top: 30%;
}
</style>
