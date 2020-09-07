<template>
  <footer class="footer d-flex align-items-center justify-content-center">
    Desenvolvido com 
    <font-awesome-icon :icon="['fa', 'heart']" class="mx-2" />
    <strong>Cairo Campos</strong>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    height:50px;
    background-color:var(--light-coral-darken);
    position: relative;
    top: 60px;
    width: 100%;
}
</style>