<template>
  <div class="layout">
    <PageHeader />
    <transition name="slidedown">
    <Nuxt id="app"/>
    </transition>
    <PageFooter />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&family=Poppins:wght@400;700&display=swap');
@import "~/assets/sass/style";
.slidedown-enter,
.slidedown-leave-to {
  opacity: 0;
  transform: translate3d(0, -30px, 0);
}
.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.3s;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  flex: 1;
}




</style>
