<script>
import { registerQuestions } from "../data";
import Checkbox from "../components/CheckBox.vue"
import Footer from "../components/Footer.vue"
import Tag from "../components/Tag.vue"
export default {
  data() {
    return {
      registerQuestions,
      tags: ["document A.pdf", "related document B.pdf"]
    };
  },
  components: { Checkbox, Footer, Tag },
  methods: {
    onSubmit() {
      this.$emit("loginAction", this.username);
    },
  },
};
</script>

<template>
  <div class="outer-wrapper">
    <div class="heading"></div>
    <div class="lower-wrapper">
      <div class="form-wrapper">

        <div class="form-inner-wrapper">
          <div class="title">Create Vour Account</div>
          <div class="session">
            <div class="warning">*Fields are required if not otherwise stated.</div>
            <div v-for="session in registerQuestions" :key="session.sessionTitle">
              <div class="session-title">{{session.sessionTitle}}</div>
              <div class="question" v-for="question in session.questions" :key="question.title">

                <div class="question-title">{{ question.title }}</div>

                <div v-if="question.type==='file'">
                  <button>{{question.label}}</button>
                  <div class="tag-wrapper">
                    <div v-for="tag in tags" :key="tag.id">
                      <Tag :tag="tag" />
                    </div>

                  </div>
                </div>

                <div v-if="question.description">

                  <div class="question-description" v-for="item in question.description" :key="item">
                    <Checkbox v-if="question.type==='checkbox'" />{{item}}
                  </div>
                </div>


                <div v-if="question.instruction" class="question-instruction">{{ question.instruction }} </div>

                <input v-if="question.type === 'input'" type="text">
              </div>
            </div>
          </div>
          <div class="action-button">
            <button id="back">Back</button>
            <button id="apply">Apply</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style scoped>
.outer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 139px);
}

.heading {
  background: white;
  border-radius: 25px 25px 0px 0px;
  padding: 20px;
  width: 1420px;
}

.lower-wrapper {
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-wrapper {
  width: 1420px;
  padding-bottom: 160px;
}


.form-inner-wrapper {
  padding: 0 20px;
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  border-radius: 0 0 25px 25px;
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
  display: grip;
}

.session-title {
  font-size: 24px;
  color: #2079a9;
  font-family: Hind Madurai Bold;
}

.session input[type="text"] {
  background: #ecf6fb;
  border: #3D9DD1 solid 1px;
  padding: 4px 10px;
  margin: 0 10px;
  border-radius: 8px;
  height: 40px;
  width: 500px;
}

.session input[type="text"]:focus {
  border: #2A79A9 solid 1px;
}

.question {
  padding: 16px 0;
}

.tag-wrapper {
  display: flex;
}

.question button {
  background: #2A79A9;
  color: white;
  border: none;
  text-align: start;
  padding: 10px;
  margin: 0 10px;
  border-radius: 8px;
  width: 300px;
  font-size: 24px;
  font-family: Hind Madurai Light;
}

.question-title {
  color: #2079a9;
  font-size: 24px;
  padding: 2px 0;
  font-family: Hind Madurai Medium;
}

.question-description {
  font-size: 20px;
  color: #00325c;
  padding: 4px 10px;
  display: flex;
  line-height: 30px;
}

.question-instruction {
  font-size: 16px;
  color: #00325c;
  padding: 4px 10px;
}

#apply {
  background: #2CA2B9;
  color: white;
  border: none;
  padding: 4px 30px;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  border-radius: 3rem;
  font-size: 24px;
}

#back {
  background: white;
  color: #2CA2B9;
  border: 3px solid #2CA2B9;
  padding: 4px 30px;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  border-radius: 3rem;
  font-size: 24px;
}

.action-button {
  padding-top: 50px;
  display: flex;
}
</style>
