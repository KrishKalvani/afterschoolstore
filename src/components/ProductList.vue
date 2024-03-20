<template>
  <div>
    <!-- <div v-for="lesson in lessons" :key="lesson.id">
      <h2>{{ lesson.subject }}</h2>
      <figure>
        <img id="productImage" v-bind:src="lesson.image" />
      </figure>
      <p v-html="lesson.description"></p>
      <p>Price:{{ lesson.price }}</p>
      <p>Available stock: {{ lesson.spaces }}</p>
      <button @click="add(lesson)">Add to cart</button>
    </div> -->
    <div id="lessonsGrid">
    <div id="lessonCard" v-for="lesson in lessons" :key="lesson.id"><!--lessonCard for CSS, v-for to iterate over the lessons array (now lessons list array) to display the lessons-->
          <figure>
            <img id="lessonPic" v-bind:src="lesson.image"><!--lesson image-->
          </figure>
          <main id="lessonContent"><!--lesson details-->
            <p>Subject: {{ lesson.subject }}</p>
            <p>Location: {{ lesson.location }}</p>
            <p>Price (AED): {{ lesson.price }}</p>
            <p>Spaces: {{lesson.spaces }}</p>
            <button id="addtocartButton" @click="add(lesson)">Add to cart</button>
            <!--this buttons check if we can add to the cart-->
            <!-- <button style="margin-bottom: 60px;" id="addtocartButton" v-on:click="addToCart(lesson)" v-if="canAddToCart(lesson)">Add to Cart</button>
            <button id="disabledAddToCartButton" disabled="disabled" v-else>Sold <br> Out</button>sold out if the button gets disabled meaning we can't add to the cart anymore -->
          </main>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      lessons: [
        {
        id: 1001,
        image: "MathIcon.jpg",
        subject: "Math",
        location: "Nahda",
        price: 100,
        spaces: 5,
        cartItemCount: 0 //this is there for every lesson object because I want to track whether this specific lesson is there in the cart
      },
      {
        id: 1002,
        image: "MicroBio.png",
        subject: "Microbiology",
        location: "Qouz",
        price: 90,
        spaces: 5,
        cartItemCount: 0 //its set to 0 because initially there is nothing in the cart at first
      },
      {
        id: 1003,
        image: "organicChem.png",
        subject: "Organic Chemistry",
        location: "Barsha",
        price: 150,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1004,
        image: "physIcon.png",
        subject: "Physics",
        location: "Dubai Museum",
        price: 100,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1005,
        image: "advancedMath.png",
        subject: "Advanced Math",
        location: "Knowledge Village",
        price: 120,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1006,
        image: "advancedEnglish.jpg",
        subject: "Advanced English",
        location: "Buhairah",
        price: 80,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1007,
        image: "musicIcon.png",
        subject: "Music",
        location: "Dubai Opera",
        price: 90,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1008,
        image: "engIcon.png",
        subject: "English",
        location: "City Walk",
        price: 70,
        spaces: 5,
        cartItemCount: 0

      },
      {
        id: 1009,
        image: "chemistryIcon.png",
        subject: "Chemistry",
        location: "Jumeriah",
        price: 100,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1010,
        image: "bioIcon.png",
        subject: "Biology",
        location: "Rolla",
        price: 100,
        spaces: 5,
        cartItemCount: 0
      },
      ],
    };
  },
  methods:{
    add(lesson){
        console.log("added product", lesson.id);
        this.$emit('addProduct', lesson);
    },
  },
};
</script>

<style scoped>
#lessonPic{
    height: 10%;
    width: 10%;
}


/* size of the lesson picture */
#lessonPic{
    height: 40%;
    width: 40%;
    margin-left:-160px;
    margin-top: 50px;
    
}

#lessonContent{ /*CSS for the subject, location, price, spaces and the addtocart button*/
    margin-left: 50%;
    margin-top:-40%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}


#addtocartButton{ /*positioning and designing each addtocart button in each lesson*/
    margin-left:-83%; 
    margin-top:-5px;
    height: 25%;
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: #9692f7;
}
#disabledAddToCartButton{/*same for the disabled version when its sold out*/
    margin-left:-83%; 
    margin-top:-5px;
    height: 25%;
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: #9692f7;
    margin-bottom: 60px;

}

  #lessonsGrid { /*this sets up the display of the lessons using grid, it arranges it as 5 lessons per row*/
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 20px;
    justify-content: center;
  }

  #lessonCard { /*this sets up the border, size, and background color for each lesson*/
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    width: 250px;
    height: 350px; 
    background-color: #e6edbe;
    /* display:flex;
    flex-direction: column; */
  }



#NoLessonFoundText{
    position: absolute;
    margin-left: 39%;
    margin-top: 10%;
    font-size: 40px;
    color: white;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1px;

}
</style>