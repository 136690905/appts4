<template>
  <div class="home">
    <div class="header">
      瑞恩商城
    </div>
    <div class="nav">
      <div class="pic">
        <img src="http://localhost:8080/images/img_02.png" alt="">
      </div>
    </div>
    <ul class="list flex">
      <li class="item">
        <img src="http://localhost:8080/images/img_05.png" alt="" class="item-img">
        <p>限时抢购</p>
      </li>
      <li class="item">
        <img src="http://localhost:8080/images/img_07.png" alt="" class="item-img">
        <p>登录福利</p>
      </li>
      <li class="item">
        <img src="http://localhost:8080/images/img_09.png" alt="" class="item-img">
        <p>优惠券包</p>
      </li>
      <li class="item">
        <img src="http://localhost:8080/images/img_11.png" alt="" class="item-img">
        <p>推荐新品</p>
      </li>
    </ul>

    <div class="advert flex">
      <div>
        <img src="http://localhost:8080/images/img_20.png" alt="">
      </div>
      <div>
        <img src="http://localhost:8080/images/img_18.png" alt="">
        <img src="http://localhost:8080/images/img_23.png" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue"
import {home} from "@/api/http_api"
onMounted(() => {
  home().then(res => {
      console.log(res)
  })
})
</script>
<style lang="scss" scoped>
.home{
  width:90%;
  margin:0 auto;
  overflow: hidden;
  .header{
    text-align:center;
    font-size:18px;
  }
  .nav{
    .pic{
      width:375px;
      height:256px;
      margin:20px 0;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .list{
    justify-content: space-between;
    font-size:14px;
    margin:20px 0;
    .item{
      text-align: center;
    }
    img{
      width:40px;
      height:40px;
      
    }
  }
  .advert div:nth-child(1){
    margin:0 10px;
    img{
      width:145px;
      height:155px;
    }
  }
  .advert div:nth-child(2){
    margin-top:-10px;
    img:nth-child(1){
      width:165px;
      height:90px;
      
    }
    img:nth-child(2){
      width:155px;
      height:70px;
    }
  }
}
</style>
