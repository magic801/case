<template>
  <div>jsBridge功能介绍页11</div>
  <div class="button-group">
    <div
      v-for="item in functionList"
      :key="item.name"
      class="button-container"
    >
      <input
        class="big-button"
        type="button"
        :value="item.label"
        @click="item.click" 
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { closePage, getAppBaseInfo, scanCode, configNavigationBar, routerNativePage, requestLocation } from '@jdl/js-bridge'

const functionList = [{
  name: 'getAppBaseInfo',
  label: '获取App基础信息',
  click: () => {
    getAppBaseInfo().then((data: any) => {
      console.log(JSON.stringify(data))
      alert(JSON.stringify(data))
    })
  }
}, {
  name: 'closePage',
  label: '关闭页面',
  click: () => {
    closePage()
  }
}, {
  name: 'scanCode',
  label: '扫一扫',
  click: () => {
    scanCode().then((data: any) => {
      console.log(JSON.stringify(data))
      alert(JSON.stringify(data))
    })
  }
}, {
  name: 'configNavigationBar',
  label: '隐藏导航栏',
  click: () => {
    configNavigationBar({
      configType: 'hideNavi'
    })
  }
}, {
  name: 'configNavigationBar',
  label: '获取导航栏状态',
  click: () => {
    configNavigationBar({
      configType: 'getNaviHeight'
    }).then((data: any) => {
      console.log(JSON.stringify(data))
      alert(JSON.stringify(data))
    })
  }
}, {
  name: 'requestLocation',
  label: '获取定位经纬度',
  click: () => {
    requestLocation().then((data: any) => {
      console.log(JSON.stringify(data))
      alert(JSON.stringify(data))
    })
  }
}, {
  name: 'routerNativePage',
  label: '跳转原生订单页面',
  click: () => {
    routerNativePage({
      "pageName" : "PartsOrderDetailPage", //页面名称
      "pageParams" : { //页面参数
        "billNo" : "12345678",
        "billType" : 0
      }
	  }).then((data: any) => {
      console.log(JSON.stringify(data))
      alert(JSON.stringify(data))
    })
  }
}]

</script>

<style lang="scss" scoped>
.button-group {
  border: 0px;

  .button-container {
    margin: 10px;

    .big-button {
      width: 100%;
      height: 36px;
      font-size: 16px;
      background: lightblue;
      border: 0px;
    }
  }
}


</style>
