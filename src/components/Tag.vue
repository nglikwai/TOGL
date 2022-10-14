<template>
    <div class="tag-wrapper">
        {{tag}}
        <button>X</button>
    </div>
</template>

<script>
export default {
    props: {
        tag: String
    }
}
</script>

<style  scoped>
.tag-wrapper {
    background: #ecf6fb;
    border: #3D9DD1 solid 1px;
    padding: 4px 10px;
    margin: 10px;
    width: auto;
    border-radius: 8px;
    height: 40px;
    color: #3B5874;
    font-size: 20px;
}

.tag-wrapper button {
    color: #3D9DD1;
    background: transparent;
    border: none;
    padding-left: 20px;
}
</style>