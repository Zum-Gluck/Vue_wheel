<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home">
        <template #itemImg>
          <img src="./assets/img/TabBar/home.png" />
        </template>
        <template #itemImg_active>
          <img src="./assets/img/TabBar/home_active.png" />
        </template>
        <template #itemFont>
          <span>首页</span>
        </template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template #itemImg>
          <img src="./assets/img/TabBar/category.png" />
        </template>
        <template #itemImg_active>
          <img src="./assets/img/TabBar/category_active.png" />
        </template>
        <template #itemFont>
          <span>分类</span>
        </template>
      </TabBarItem>
      <TabBarItem path="/cart">
        <template #itemImg>
          <img src="./assets/img/TabBar/cart.png" />
        </template>
        <template #itemImg_active>
          <img src="./assets/img/TabBar/cart_active.png" />
        </template>
        <template #itemFont>
          <span>购物车</span>
        </template>
      </TabBarItem>
      <TabBarItem path="/user">
        <template #itemImg>
          <img src="./assets/img/TabBar/user.png" />
        </template>
        <template #itemImg_active>
          <img src="./assets/img/TabBar/user_active.png" />
        </template>
        <template #itemFont>
          <span>我的</span>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import TabBarItem from "./components/TabBar/TabBar-item";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
