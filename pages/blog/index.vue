<template>
  <section class="container">
    <Introduction :title="introduction.title" :subtitle="introduction.subtitle" />
    <div class="row">
        
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            introduction: {
                title:"Em que posso te ajudar hoje ?",
                subtitle:"Blog"
            },
        }
    }
}
</script>

<style lang="scss">
</style>