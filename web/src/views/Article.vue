<template>
    <div class="page-articles" v-if="model">
        <div class="d-flex py-3 px-2">
            <i class="iconfont icon-back-line"></i>
            <strong class="flex-1" style="color:#4394e4">{{model.title}}</strong>
            <span class="text-grey fs-xs">06/09</span>
        </div>
        <div v-html="model.body" class="w-100 px-3 body"></div>
        <div>
        <div class="p-2 fs-xs">
           <i class="iconfont icon-back-line"></i>
           <strong style="color:#4394e4">相关资讯</strong>
        </div>
        <router-link 
        tag="div"
        :to="`/articles/${item._id}`"
        v-for="item in model.relate" 
        :key='item._id'>
        {{item.title}}
        </router-link>
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
    watch:{
        id(){
            this.fetch()
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`articles/${this.id}`)
            this.model = res.data
            console.log(this.model)
        }
    },
    created(){
        this.fetch()
    }

}
</script>

<style lang="scss">
.page-articles {
    .body {
        border-top: rgb(206, 199, 199) 1px solid;
        img {
            max-width: 100%;
            height: auto;
        }
    }
}
</style>