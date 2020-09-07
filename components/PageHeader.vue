<template>
  <header class="header">
      <div class="nav-menu container container-fluid">
      <div class="logo">
        <NuxtLink to="/">
          <font style="font-weight:700;color:#FAFAFC">{ CAIRO</font><font style="font-weight:400;color:#FF858D;">CAMPOS }</font>
        </NuxtLink>
      </div>
      <div class="d-flex align-items-center">
        <ul class="menu d-flex align-items-center" :class={active:isActive}>
          <li @click="isActive = false" class="menu__item" v-for="(menu, index) in menus" :key="index">
            <NuxtLink :to="menu.url">{{menu.name}}</NuxtLink>
          </li>
        </ul>
        <div class="bars" @click="isActive = !isActive">
          <span 
            class="bars__item" 
            :class="{active:isActive}" 
            v-for="n in 3" 
            :key="n">
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive:false,
      menus: [
        {name: "Blog", url:"blog"},
        {name: "Sobre Mim", url:"sobre"},
        {name:"Portfólio", url:"portfolio"},
        {name:"Contato", url:"contato"},
      ]
    }
  }

}
</script>

<style scoped lang="scss">
.header {
  height: 60px;
}

.nav-menu {
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.bars {
  height:35px;
  width:50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items:center;
  position: relative;
  cursor: pointer;
  &__item {
    width:100%;
    background:#FAFAFC;
    height: 6px;
    border-radius:4px;
    display: block;
    transition: transform .5s;
  }
  &__item.active:nth-child(1) {
    display: none;
  }
  &__item.active:nth-child(2) {
    transform: rotate(45deg);
    position: absolute;    
    top: 15px;
  }
  &__item.active:nth-child(3) {
    transform: rotate(-45deg);
    position: absolute;
    top: 15px;
  }
}

.menu {
  margin-right: 20px;
  transition: all .3s;
  width: 0;
  height:0;
  overflow: hidden;
  transform: translate3d(50px,0,0);
  &__item{
    margin-right: 20px;
    margin-bottom:0;
    a {
      color: #FFF;
      &:hover {
        color:var(--light-coral);
      }
    }
  }
  &.active {
    transform: translate3d(0,0,0);
    height: 100%;
    width: 350px;
  }
}

.logo {
  font-size: 1.5rem;
}

@media (max-width: 800px) {
  .menu {
    display: none !important;
    &.active {
      display: flex !important;
      height: 100%;
      position: absolute;
      top: 60px;
      right: 0;
      width: 100%;
      flex-direction: column;
      background: rgba(0,0,0,0.8);
      width: 100%;
      margin:0;
      z-index: 10;
    }
 }  
  
  .menu__item {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
  }
}

@media(min-width:800px) {
  .logo {
    font-size: 2rem;
  }
}
</style>