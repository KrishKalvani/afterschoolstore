<template>
  <div class="app">
    <head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>

    </head>
    <div id="navigation" style="background-color: #110d78">
      <a href="afterSchool.html"><img id="logo" src="cw1logo.png" /></a
      ><!--website logo-->
      <p
        style="
          position: absolute;
          margin-top: -110px;
          margin-left: 40%;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Search:
      </p>
      <input
        id="searchInput"
        v-model="searchValue"
        type="text"
        placeholder="Search lessons..."
      /><!--search input, searchVal is tracked here-->
      <!--change made here-->
    </div>
    <h3 id="welcomeText">
      Welcome! Buy any lesson you want and pursue your studies
      <em>AfterSchool</em>
    </h3>
    <!--welcome message-->
    <!-- <div v-if="showLesson"> v-if here also because I don't want the sort buttons to be there in the checkout page -->

    <div id="sortPriceButtons">
      <!--here are all the sorting buttons- sort by price-->
      <button v-on:click="sortByPrice('ascending')">
        Sort by Price (Low to High)
      </button>
      <button v-on:click="sortByPrice('descending')">
        Sort by Price (High to Low)
      </button>
    </div>
    <div id="sortSubButtons">
      <!--sort by subject-->
      <button id="sortSubButton" v-on:click="sortAlphabetically('ascending')">
        Sort by Subject (A to Z)
      </button>
      <button id="sortSubButton" v-on:click="sortAlphabetically('descending')">
        Sort by Subject (Z to A)
      </button>
    </div>
    <div id="sortLocationButtons">
      <!--sort by location-->
      <button
        id="sortLocButtons"
        v-on:click="sortLocationAlphabetically('ascending')"
      >
        Sort by Location (A to Z)
      </button>
      <button
        id="sortLocButtons"
        v-on:click="sortLocationAlphabetically('descending')"
      >
        Sort by Location (Z to A)
      </button>
    </div>
    <div id="sortSpacesButtons">
      <!--sort by spaces-->
      <button v-on:click="sortBySpaces('ascending')">
        Sort by Spaces (Low to High)
      </button>
      <button v-on:click="sortBySpaces('descending')">
        Sort by Spaces (High to Low)
      </button>
    </div>

    <!-- </div> -->
    <header>
      <!-- <h1>{{sitename}}</h1> -->
      <button id="checkOutButton" @click="showCheckout" :disabled="cart.length === 0 && showLesson">
        <!-- <span class="fas fa-cart-plus">Checkout</span> -->
        <span class="fas fa-cart-plus"><br>{{ this.cart.length }} Checkout</span>
      </button>
    </header>
    <main>
      <product-list
        v-if="showLesson"
        :lessons="lessons"
        @addProduct="addToCart"
      ></product-list>
      <!-- <checkout v-else :cart="cart"></checkout> -->
      <checkout v-else :cart="cart" @remove-item="removeFromCart"></checkout>
    </main>
    <div id="footer">
      <p style="margin-left: 45%">Web page made by Krish Kalvani</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import productList from "./components/ProductList.vue";
import checkout from "./components/Form.vue";

export default {
  name: "App",
  components: {
    productList,
    checkout,
  },
  data() {
    return {
      sitename: "AfterSchool",
      cart: [],
      showLesson: true,
      searchValue: "",
      sortOrder: "ascending",
      lessons: [
        {
          id: 1001,
          image: "MathIcon.jpg",
          subject: "Math",
          location: "Nahda",
          price: 100,
          spaces: 5,
          cartItemCount: 0, //this is there for every lesson object because I want to track whether this specific lesson is there in the cart
        },
        {
          id: 1002,
          image: "MicroBio.png",
          subject: "Microbiology",
          location: "Qouz",
          price: 90,
          spaces: 5,
          cartItemCount: 0, //its set to 0 because initially there is nothing in the cart at first
        },
        {
          id: 1003,
          image: "organicChem.png",
          subject: "Organic Chemistry",
          location: "Barsha",
          price: 150,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1004,
          image: "physIcon.png",
          subject: "Physics",
          location: "Dubai Museum",
          price: 100,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1005,
          image: "advancedMath.png",
          subject: "Advanced Math",
          location: "Knowledge Village",
          price: 120,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1006,
          image: "advancedEnglish.jpg",
          subject: "Advanced English",
          location: "Buhairah",
          price: 80,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1007,
          image: "musicIcon.png",
          subject: "Music",
          location: "Dubai Opera",
          price: 90,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1008,
          image: "engIcon.png",
          subject: "English",
          location: "City Walk",
          price: 70,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1009,
          image: "chemistryIcon.png",
          subject: "Chemistry",
          location: "Jumeriah",
          price: 100,
          spaces: 5,
          cartItemCount: 0,
        },
        {
          id: 1010,
          image: "bioIcon.png",
          subject: "Biology",
          location: "Rolla",
          price: 100,
          spaces: 5,
          cartItemCount: 0,
        },
      ],
    };
  },
  methods: {
    showCheckout() {
      this.showLesson = this.showLesson ? false : true; // Show the checkout form
    },
    addToCart: function (lesson) {
      //this function adds the IDs of each lesson thats added in the cart
      if (lesson.spaces > 0) {
        lesson.spaces--;
        //if the spaces left of the lesson is more that whats in the cart
        lesson.cartItemCount++; //then we can add it (increment the cartItemCount value)
        this.cart.push(lesson); //literally adding/pushing the lesson ID in the cart array
      }
    },

    // addToCart(lesson) {
    //   console.log("addProduct event received by the root component.");
    //   this.cart.push(lesson);
    // },

    // removeFromCart(index) {
    //   console.log("Removing item at index:", index);
    //   this.cart.splice(index, 1); // Remove item from cart
    // },
    removeFromCart(index) {
    // Get the removed item based on index
    const removedLesson = this.cart[index];
    // Splice it from the cart
    this.cart.splice(index, 1);
    // Now, find this lesson in your lessons array and update the cartItemCount and spaces
    const lessonToUpdate = this.lessons.find(lesson => lesson.id === removedLesson.id);
    if (lessonToUpdate) {
      // If the item is found, update its cartItemCount and spaces
      lessonToUpdate.cartItemCount = Math.max(0, lessonToUpdate.cartItemCount - 1);
      lessonToUpdate.spaces++;
    }
  },
    
  },
};
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
body {
  /*body css*/
  margin: 0;
  background-color: #ff9900;
  /* background: linear-gradient(to bottom, #ff9900, #ff66cc); */
}
#navigation {
  /*navigation bar*/

  height: 70px;
  width: 100%;
}
#searchInput {
  /*search bar in the nav bar*/
  position: absolute;
  margin-top: 15px;
  margin-left: 35%;
  width: 300px;
  height: 30px;

  padding: 5px;
}

#sortPriceButtons {
  /*positioning the sort price button*/
  position: absolute;
  margin-left: 2%;
  margin-top: -2%;
}
#sortSubButtons {
  /*positioning the sort subject button*/
  position: absolute;
  margin-top: -2%;
  margin-left: 28%;
}

#sortLocationButtons {
  /*positioning the sort location button*/
  position: absolute;
  margin-top: -2%;
  margin-left: 51%;
}

#sortSpacesButtons {
  position: absolute;
  margin-top: -2%;
  margin-left: 74%;
}

#welcomeText {
  /*CSS for the welcome message*/
  font-size: 50px;
  margin-left: 3%;
  text-align: center;
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 2px;
}

/*Logo in the nav bar*/
#logo {
  height: 200px;
  width: 9%;
  margin-left: 1%;
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

#footer {
  /*footer at the bottom of the page*/
  position: absolute;
  /* margin-left: 50%; */
  background-color: #110d78;
  color: white;
  font-size: larger;
  width: 100%;
  margin-top: 30%;
}
</style>
