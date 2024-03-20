<template>
  <div>
    <h2 id="checkOutHeading">Checkout</h2>
    <!-- <div> -->
    <table id="checkoutTable">
      <thead>
        <tr>
          <th>Lesson</th>
          <th>Subject</th>
          <th>Location</th>
          <th>Price</th>
          <!-- <th>Stock</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in cart" :key="product.id">
          <td style="width: 10%">
            <img :src="product.image" alt="Product Image" />
          </td>
          <td>{{ product.subject }}</td>
          <td>{{ product.location }}</td>
          <td>Price: {{ product.price }}</td>
          <td>
            <button @click="removeItem(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
    <h3 id="credentialHeading">Please enter your credentials:</h3>
    <div id="credentialBox">
      <div id="BothCredentials">
        <div id="nameCredential">
          <strong>Name:</strong>
          <input v-model="name" type="text" />
        </div>
        <div id="phoneCredential">
          <strong>Phone No.:</strong>
          <input v-model="phone" type="tel" />
        </div>
      </div>
    </div>

     <h2 id="orderInfoHeading">Order Information</h2>
    <div id="orderInfoBox">
      <div id="orderInfoDetails">
        <strong>Name (autofilled): </strong><p>{{name}}</p>
        <strong>Phone Number (autofilled): </strong><p>{{phone}}</p>
      </div>
    </div>
    <p style="font-size: small;font-family: Arial, Helvetica, sans-serif; text-align: center; margin-left: 50%;">Make sure to enter the valid form of credentials to place order</p>
    <!-- <button id="PlaceOrderButton" @click="submitForm" :disabled="!credentialsValidation">Place Order</button> -->
    <button id="PlaceOrderButton" @click="submitForm">Place Order</button>
  </div>
</template>

<script>
export default {
  name: "Form-Component",
  props: ["cart"],
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    removeItem(index) {
      this.$emit("remove-item", index);
    },
    submitForm() {
      console.log("Form submitted with:", this.name, this.address);
      (this.name = ""), (this.phone = "");
    },
  },
};
</script>

<style>
#checkOutHeading {
  /*CSS for the checkout heading when we toggle the page*/
  font-size: 50px;
  margin-top: 5%;
  margin-left: 3%;
  text-align: left;
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1.5px;
  margin-left: 45%;
}

#checkoutTable {
  /*setting up the table where the carItems are added*/
  width: 70%;
  border-collapse: collapse;
  border-spacing: 10px;
  margin-top: 20px;
  text-align: center;
  margin-left: 15%;
  background-color: khaki;
  font-family: Arial, Helvetica, sans-serif;
}

/*Checkout table CSS*/
#checkoutTable th {
  color: black;
  font-weight: bold;
  padding: 10px;
  border: 1px solid black;
  background-color: #e1e356;
}
#checkoutTable td {
  border: 1px solid black;
  font-size: large;
}

#checkoutTable img {
  float: left;
  width: 70%;
  height: 70%;
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
#credentialHeading {
  /*in the checkout page, we have the main heading to prompt the user to please enter their credentials. CSS for that*/

  margin-left: 8%;
  margin-top: 10%;
  font-size: 40px;
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
}

#credentialBox {
  /*This is the container for the name and phone number credentials*/
  border: 1px solid black;
  width: 40%;
  height: 200px;
  margin-left: 5%;
  background-color: khaki;
}
#nameCredential {
  /*this is the CSS for the positioning, font, styling, etc., of the name label inside the credentialBox*/
  position: absolute;
  margin-left: 0%;
  margin-top: 4%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
}

#phoneCredential {
  /*this is the CSS for the positioning, font, styling, etc., of the phone label inside the credentialBox*/
  position: absolute;
  margin-left: 18%;
  margin-top: 4%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
}

#BothCredentials {
  /*I wanted to adjust both the name and phone number credentials at the same time instead of individually so I made this ID for that*/
  margin-left: 5%;
  margin-top: 3%;
}

#orderInfoBox {
  /*this is the order details box where the name and phone number is autofilled just before we place the order.
    this is located next to the credentials box*/
  border: 1px solid black;
  width: 40%;
  height: 250px;
  margin-left: 55%;
  margin-top: -15%;
  background-color: khaki;
}

#orderInfoHeading {
  /*in the checkout page, we have the main heading "Order Information" just above the orderInfoBox. CSS for that*/
  position: absolute;
  margin-left: 65%;
  margin-top: -20%;
  font-size: 40px;
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
}

#orderInfoDetails {
  /*CSS for the name and phone number label which is to be auto-filled*/
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  margin-left: 5%;
  margin-top: 10%;
}

#PlaceOrderButton {
  /*CSS positioning for the place order button after both the credential and orderInfo boxes*/
  position: absolute;
  margin-top: -2.5%;
  margin-left: 82%;
}
</style>