<template>
    <div class="card p-3 bg-white mt-3 ai-center">
     <div class="card-header pb-3 d-flex">
       <i class="iconfont" :class='`icon-${icon}`'></i>
       <div class="fs-xxl flex-1 px-2">{{title}}</div>
       <i class="iconfont icon-menu1"></i>
     </div>
     <div class="card-body pt-3">
       <slot></slot>
     </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true,
        },
        icon:{
            type:String,
            required:true,
        },

    }
}
</script>
<style lang='scss'>


.card {
    .card-header {
        border-bottom: 1px solid rgb(216, 208, 208);
    }
    border-bottom: 1px solid rgb(216, 208, 208);
}
</style>