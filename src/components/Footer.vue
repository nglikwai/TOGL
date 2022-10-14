<template>
  <footer>
    <div class="footer-inner">
      <div class="left-wrapper">
        <img :src="require('../assets/land-logo.png')" alt="">
        <div class="info-wrapper">
          <a href="/">Important Notices</a> | <a href="/">Privacy Policy Statement</a>
          <div>Lands Department The Government of the HKSAR</div>
          <div>All Right Reserved</div>
        </div>
      </div>
      <img :src="require('../assets/w3c.png')" alt="" />
    </div>
  
  </footer>
</template>

<style scoped>
a {
  color: #3B5874;
}

footer {
  width:100%;
  background: #ECF6FB;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-inner{
  width:1420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-wrapper {
  display: flex;
  align-items: center;
}

.info-wrapper{
  padding:4px 10px;
  color:#3B5874;
  font-family: Hind Madurai Bold;
  font-size: 20px;
}
</style>
