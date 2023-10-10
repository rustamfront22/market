<template>
  <div class="current">
    <div class="container">
      <div class="card-content">
        <div class="card-content_carousel">
          <Carousel
            id="gallery"
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
          >
            <Slide v-for="(slide, index) in data.images" :key="index">
              <div class="carousel__item">
                <img :src="slide" alt="" />
              </div>
            </Slide>
          </Carousel>

          <Carousel
            id="thumbnails"
            :breakpoints="breakpoints"
            v-model="currentSlide"
            ref="carousel"
            class="carousel-mini"
          >
            <Slide v-for="(slide, index) in data.images" :key="index">
              <div class="carousel__item" @click="slideTo(index - 1)">
                <img :src="slide" alt="" />
              </div>
            </Slide>
          </Carousel>
        </div>
        <div class="card-content_info">
          <div class="card-content_info-title">
            <div class="card-rs">
              <div class="product__card-rating">Rating: {{ data.rating }}</div>
              <div class="card-content-stock">
                в наличии: {{ data.stock }} шт.
              </div>
            </div>
            <div class="product__card-name">
              <h5>{{ data.title }}</h5>
            </div>
          </div>
          <div class="card-content_info-pay">
            <h3>Цена</h3>
            <div class="product__card-price">{{ data.price }} $</div>
            <div class="product__card-discount">
              <s
                >{{
                  data.price -
                  ((data.price * data.discountPercentage) / 100).toFixed()
                }}
                сум</s
              >
              <span>скидка {{ data.discountPercentage }}%</span>
            </div>
          </div>
          <div class="description">
            <h3>Описание</h3>
            {{ data.title }} <br />
            <p class="description-title">{{ data.description }}</p>
          </div>
        </div>
        <!-- <pre>{{ data }}</pre> -->
      </div>
    </div>
    <NewProducts />
  </div>
  
</template>
<script setup>
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import NewProducts from "../home/NewProducts.vue";
const props = defineProps(["data"]);
const currentSlide = ref(null);
const slideTo = (val) => {
  currentSlide.value = val;
};
const breakpoints = ref({
  0: {
    itemsToShow: 3,
  },
  1536: {
    itemsToShow: 6,
  },
},)
</script>