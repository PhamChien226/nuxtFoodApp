<template>
  <main class="container">
    <section
      class="image"
      :style="`background:url(/${currentItem.img}) no-repeat center center`"
    ></section>

    <section class="details">
      <h1>{{ currentItem.item }}</h1>
      <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>

      <div class="quantity">
        <input type="number" min="1" v-model="count" />
        <button @click="addToCart" class="primary">
          Add to cart -${{ combinedPrice }}
        </button>
      </div>

      <fieldset v-if="currentItem.options">
        <legend>
          <h3>Option</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input
            type="radio"
            name="option"
            :value="option"
            :id="option"
            v-model="$v.itemOptions.$model"
          />

          <label :key="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="currentItem.addOns">
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="addon in currentItem.addOns" :key="addon">
          <input
            type="checkbox"
            name="addon"
            :value="addon"
            :id="addon"
            v-model="$v.itemAddons.$model"
          />

          <label :key="addon">{{ addon }}</label>
        </div>
      </fieldset>

      <AppToast v-if="cartSubmitted">
        Order Submitted <br />
        Check out more <nuxt-link to="/restaurants">restaurants</nuxt-link>!
      </AppToast>

      <AppToast v-if="errors">
        Please select options and
        <br />addons before continuing
      </AppToast>
    </section>

    <section class="options">
      <h3>Description</h3>
      <p>{{ currentItem.description }}</p>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import AppToast from "@/components/AppToast.vue";
import { required } from "vuelidate/lib/validators";

export default {
  components: {
    AppToast,
  },

  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemOptions: "",
      itemAddons: [],
      itemSizeAndCost: [],
      cartSubmitted: false,
      errors:false
    };
  },

  validations: {
    itemOptions: {
      required,
    },
    itemAddons: {
      required,
    },
  },

  computed: {
    ...mapState(["fooddata"]),
    currentItem() {
      let result;

      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j];
            break;
          }
        }
      }

      return result;
    },

    combinedPrice() {
      let total = this.count * this.currentItem.price;
      return total.toFixed(2);
    },
  },

  methods: {
    addToCart() {
      let formOutput = {
        item: this.currentItem.item,
        count: this.count,
        options: this.itemOptions,
        addOns: this.itemAddons,
        combinedPrice: this.combinedPrice,
      };
      let addOnError = this.$v.itemAddons.$invalid;
      let optionError = this.currentItem.options
        ? this.$v.itemOptions.$invalid
        : false;

      if (addOnError || optionError) {
        this.errors = true;
      } else {
        this.errors = false;
        this.cartSubmitted = true;
        this.$store.commit("addToCart", formOutput);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr; //fr fraction unit
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1/1/2/2;
  background-size: cover;
}
</style>