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
    <m-list-card icon="menu1" title="新闻资讯" :categories="newCats">
      <template #items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
         class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info text-grey-1">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipse">{{news.title}}</span>

          <span class="text-grey">{{news.updatedAt.slice(5,10)}}</span>
        </router-link
        >
      </template>
    </m-list-card>
    <m-list-card icon="card-hero" title="英雄列表" :categories="newHeros">
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
        <router-link  tag="div" :to="`/heros/${hero._id}`" class="p-2 fs-lg text-center " style="width:20%;" v-for="(hero,i) in category.heroList" :key="i">
          <img :src="hero.avatar" alt="" class="w-100">
          <div>{{hero.name}}</div>
        </router-link>
        </div>
      </template>
    </m-list-card>
    

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
      newHeros:[]
    };
  },
  methods:{
    async fetchNewCats(){
      const res = await this.$http.get('news/list')
      this.newCats=res.data
    },
    async fetchNewHeros(){
      const res = await this.$http.get('heros/list')
      this.newHeros=res.data
      console.log(this.newHeros)
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
    this.fetchNewHeros()
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
