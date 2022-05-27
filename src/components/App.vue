<!--****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************-->
<template>
  <div>
    <!--
      https://picsum.photos/200/300 <br/>
      https://picsum.photos/seed/picsum/200/300
    -->
    <div class="bg-dark text-center py-3 px-6 m-1 mb-0 rounded">
      <input
        class="cart-input"
        v-model="cartTitle"
        type="text"
        placeholder="Cart Title"/>
      <input
        class="cart-input mt-1"
        v-model="cartDisc"
        type="text"
        placeholder="Cart Discription" />
      <input
        class="cart-input mt-1"
        v-model="src"
        type="text"
        placeholder="Image Src"/>
      <input
        class="cart-input mt-1"
        v-model="color"
        type="text"
        placeholder="Cart Color"/>
      <button class="btn-blue mt-2" @click="Create()">Create</button>
    </div>
    <div style="max-height: 60vh; overflow: scroll;">
      <Cart
        v-for="(cart, i) in carts"
        :title="cart.title"
        :src="cart.src"
        :disc="cart.disc"
        :class="cart.class"/>
    </div>
    
  </div>
</template>

<script>
  import Cart from "$/Cart/Cart.vue";

  const carts = [
    {
      title: "Too Old",
      disc: `This card will return you to before 15 years`,
      src: "./assets/1.jpg",
      "class": "bg-red-600 after:bg-red-600"
    },
    {
      title: "No For All",
      disc: `Use this card against an opponent who owns something you want`,
      src: "./assets/2.jpg",
      "class": "bg-green-600 after:bg-green-600"
    }
  ]

  export default {
    name: "App",
    components: { Cart },
    data() {
      return {
        carts,
        cartTitle: "",
        cartDisc: "",
        src: "",
        color: ""
      }
    },
    methods: {
      Create() {
        if (isNaN(this.cartTitle) && isNaN(this.cartDisc)) {
          let cart = {}
          cart.title = this.cartTitle;
          cart.disc = this.cartDisc;
          cart.class = `bg-${this.color}-600 after:bg-${this.color}-600`;
          
          if (isNaN(this.src)){
            cart.src = this.src;
          }else {
            cart.src = "https://picsum.photos/200/300";
          }
          this.carts.push(cart);
          this.cartTitle = "";
          this.cartDisc = "";
          this.src = "";
          this.color = "";
        }
      }
    }
  };
  console.clear();
</script>
