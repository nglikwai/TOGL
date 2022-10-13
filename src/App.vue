<script>
import LoginForm from './components/LoginForm.vue'
import { mapActions } from 'vuex'
import { Button } from 'ant-design-vue';

export default {
  name: 'App',
  data() {
    return {
      title: 'Title',
      questions: ['Question1', 'Question2', 'Question3']
    }

  },
  mounted(){
    console.log('hi')
  },
  components: { LoginForm, Button },
  methods: {
    ...mapActions(['updateLoginAction']),
    loginAction(username) {
      this.updateLoginAction(username)
      console.log(this.$store.state.login.username)
    },
    alerting() {
      alert('hi')
    }
  },
}

</script>

<template>
  <div>
    <LoginForm @loginAction="loginAction" />
    <Button @click="loginAction(this.$store.state.login.username)">hi</Button>
    <div v-for="question in questions">
      <p>{{question}}</p>
    </div>
  </div>
</template>
