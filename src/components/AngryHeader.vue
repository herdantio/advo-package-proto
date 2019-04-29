<template>
    <h1 class="angry-header">{{text}}</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'AngryHeader',
    computed: {
        ...mapState('proto',{
            text: state => state.text
        })
    }
}
</script>

<style lang="scss" scoped>
.angry-header{
    color: red;
}
</style>