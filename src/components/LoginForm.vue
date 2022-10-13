<template>
    <div>
        <input v-model="username" type="text" />
        <button @click="onSubmit()">Login</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                username:''
            }
        },
        methods:{
            onSubmit(){
                this.$emit("loginAction",this.username)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>