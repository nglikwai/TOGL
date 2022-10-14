<script>
import { headerLinks } from "../data";
console.log(headerLinks);
export default {
  data() {
    return {
      headerLinks,
    };
  },
};
</script>

<template>
  <div class="header-wrapper">
    <img :src="require('../assets/logo.png')" alt="" />
    <div class="header-right">
      <div class="link-container">
        <a :href="headerLink.link" class="link" v-for="headerLink in headerLinks" :key="headerLink.title">
          {{ headerLink.title }}
        </a>
        <button class="link font-size-button">A</button>
        <button class="link font-size-button">A</button>
        <button class="link font-size-button">A</button>
      </div>
      <div class="header-buttons">
        <button>H</button>
        <button>O</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

.font-size-button{
  background: transparent;
  border: none;
  padding: 0;
  margin:0;
  cursor: pointer;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  padding-right: 20px;
}

.link-container {
  display: flex;
  align-items: flex-start;
  color: #2079a9;
  padding: 10px 0 10px 0;
}

.header-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.header-buttons button{
  border: none;
  padding:4px 16px;
  color:#3B5874;
  background: white;
  border-radius: 3rem;
  margin-left: 10px;
}
.link {
  font-size: 16px;
  margin-left: 16px;
  color:#2079a9;
  text-decoration: underline;
}


 

</style>
