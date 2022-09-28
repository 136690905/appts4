<template>
    <div>
        <van-tabbar v-model="active" @change="onchange">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分销</van-tabbar-item>
            <van-tabbar-item icon="friends-o">购物</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import {useRouter} from "vue-router"
let active = ref(0)
let router = useRouter()
let onchange:(index?:number | string) => void = function (index?:number | string) {
    console.log(index)
    console.log(active)
    switch(index){
        case 0:router.push("/");break;
        case 1:router.push("/fenxiao");break;
        case 2:router.push("/mycart");break;
        case 3:router.push("/mine");break
    }
}
// 点击函数
</script>
<style lang="scss" scoped>

</style>