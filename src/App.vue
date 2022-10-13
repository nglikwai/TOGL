<script>
import RegisterForm from "./components/RegisterForm.vue";
import Header from "./components/Header.vue";
import { mapActions } from "vuex";
import { Button } from "ant-design-vue";

export default {
  name: "App",
  data() {
    return {
      title: "Title",
      questions: ["Question1", "Question2", "Question3"],
    };
  },
  mounted() {
    console.log("hi");
  },
  components: { RegisterForm, Button, Header },
  methods: {
    ...mapActions(["updateLoginAction"]),
    loginAction(username) {
      this.updateLoginAction(username);
      console.log(this.$store.state.login.username);
    },
    alerting() {
      alert("hi");
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <Header />
    <RegisterForm @loginAction="loginAction" />
    <Button @click="loginAction(this.$store.state.login.username)">hi</Button>
    <div v-for="question in questions">
      <p>{{ question }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: #e4f5ff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
