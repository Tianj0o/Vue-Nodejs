<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        ><img class="w-100" src="../assets/1.png" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/2.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/3.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/4.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/5.jpeg" alt=""
      /></swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newCats">
      <template #items="{ category }">
        <div class="py-2" v-for="(news,i) in category.newslist" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>

          <span>{{news.data}}</span>
        </div>
      </template>
    </m-list-card>
    <m-card icon="card-hero" title="英雄列表"></m-card>
    <m-card icon="card-hero" title="英雄列表"></m-card>

    <m-card icon="card-hero" title="英雄列表"></m-card>

    <m-card icon="card-hero" title="英雄列表"></m-card>

    <m-card icon="card-hero" title="英雄列表"></m-card>
  </div>
</template>
<script>
import "../assets/iconfont/iconfont.css";
import "../../src/style.scss";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 1500,
        },
        pagination: {
          el: ".pagination-home",
        },
        // Some Swiper option/callback...
      },
      newCats: [],
    };
  },
  methods:{
    async fetchNewCats(){
      const res = await this.$http.get('news/list')
      this.newCats=res.data
      console.log(this.newCats)
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 100, false);
  },
  created(){
    this.fetchNewCats()
  }
};
</script>

<style lang="scss">
.nav-icons {
  .nav-item {
    width: 25%;
    border-right: 1px solid #d4d9de;
  }
}
</style>>
