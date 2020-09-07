<template>
  <section class="container">
    <Introduction :title="introduction.title" :subtitle="introduction.subtitle" />
    <div class="row">
        
    </div>
  </section>
</template>

<script>
export default {
    props:["slug"], //this.$route.params.slug,
    data() {
        return {
            introduction: {
                title: "",
                subtitle:"Cairo Campos"
            },
        }
    }
}
</script>

<style lang="scss">
</style>