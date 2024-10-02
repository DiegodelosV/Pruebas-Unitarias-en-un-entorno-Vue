
<template>
    <div class="about">
        <h1>{{ mensaje }}</h1>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    data() {
        return {
            mensaje: 'Hola mundo'
        }
    }

}
</script>

<style scoped>
about {
    color: blue;
    font-size: 50px;
    text-align: center;
}
</style>