<template>
  <section class="container">
    <Introduction :title="introduction.title" :subtitle="introduction.subtitle" />
    <div class="row">
        
    </div>
  </section>
</template>

<script>
export default {
    head: {
      title: "Blog",
      meta: [
        { hid: 'description', name: 'description', content: 'Blog do Cairo Campos  - Desenvolvedor web, tudo sobre tecnologia front end e muito mais!' }
      ]
    },
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