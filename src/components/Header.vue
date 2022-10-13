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
  <div class="container">
    <div class="link" v-for="headerLink in headerLinks" :key="headerLink.title">
      {{ headerLink.title }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  color: #2079a9;
  padding: 10px;
  align-self: flex-end;
}

.link {
  padding: 0 5px;
}
</style>
