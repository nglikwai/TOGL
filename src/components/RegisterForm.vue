<template>
  <div class="form-wrapper">
    <div class="title">Create Vour Account</div>
    <div class="session">
      <div class="warning">*Fields are required if not otherwise stated.</div>
      <div class="session-title">{{ registerQuestions.sessionOne.title }}</div>
      <div class="question-title">
        {{ registerQuestions.sessionOne.questionOne.title }}
      </div>
      <div
        class="question"
        v-for="item in registerQuestions.sessionOne.questionOne.choice"
        :key="item.title"
      >
        {{ item.title }}
      </div>
      <div>
        <div class="question-title">
          {{ registerQuestions.sessionOne.questionTwo.title }}
        </div>
        <input type="text" />
      </div>
      <div>
        <div class="question-title">
          {{ registerQuestions.sessionOne.questionThree.title }}
        </div>
        <input type="text" />
      </div>
      <div>
        <div class="question-title">
          {{ registerQuestions.sessionOne.questionFour.title }}
        </div>
        <input type="text" />
      </div>
      <div>
        <div class="question-title">
          {{ registerQuestions.sessionOne.questionFive.title }}
        </div>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
import { registerQuestions } from "../data";

export default {
  data() {
    return {
      registerQuestions,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("loginAction", this.username);
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  top: 150px;
  left: 250px;
  width: 80%;
  max-width: 1420px;
  height: 50px;
  border-radius: 25px 25px 0px 0px;
  padding: 20px;
  background: white;
  height: 100vh;
  margin-top: 100px;
}

.title {
  background: #2ca2b9;
  color: white;
  font-size: 40px;
  padding: 4px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  margin: 10px 0;
}

.warning {
  color: #3b5974;
  font-size: 16px;
}

.session {
  padding: 40px 80px;
}

.session-title {
  font-size: 24px;
  font-weight: bold;
  color: #2079a9;
  padding: 8px 0;
}

.session input {
  background: #ecf6fb;
  border: #deebf6 solid 1px;
  border-radius: 4px;
  height: 40px;
  width: 500px;
}

.question-title {
  color: #2079a9;
  font-size: 24px;
}

.question {
  font-size: 20px;
  color: #00325c;
  padding: 4px 0;
}
</style>
