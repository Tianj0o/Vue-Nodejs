<template>
  <div class="pages-hero">
    
    <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30px" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="m-2">攻略站</span>
      </div>
      <router-link tag="div" to="/">更多英雄 &gt;</router-link>
    </div>
    <div v-if="model">
     
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      model:null
    }
  },
  props:{
    id:{required:true}
  },
  methods:{
    async fetch(){
      const res =await  this.$http.get(`/heros/${this.id}`)
      this.model= res.data
      console.log(this.model)
    }
  },
  created(){
    this.fetch()
  }
}
</script>