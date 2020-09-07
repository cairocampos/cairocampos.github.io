<template>
  <div class="container color-primary">
    <div class="review d-flex flex-column align-items-center justify-content-center">
      <h1 class="review__title">Cairo Campos</h1>
      <h4 class="review__subtitle">
        Olá, muito prazer, seja muito bem vindo! <br/> 
        Eu sou um desenvolvedor web <strong>front-end</strong>,
        focado em <strong>design moderno</strong>!
        Se precisa dar vida em sua idéia e transformá-la em <strong>negócios</strong>,
        conte comigo !        
      </h4>
      <div class="social my-5">
        <a class="social__item" v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
          <font-awesome-icon :icon="['fab', social.icon]" :alt="social.name" />
        </a>
      </div>
      <NuxtLink class="btn btn-lg btn-outline-primary" to="/portfolio">Ir para o Portfólio</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return  {
      socials: [
        {name:"Likedin", url:"https://www.linkedin.com/in/cairo-campos-a369b2174/", icon:"linkedin-in"},
        {name:"Github", url:"https://github.com/cairocampos", icon:"github"},
        {name:"Instagram", url:"https://instagram.com/cairocampos98", icon:"instagram"},
        {name:"Facebook", url:"https://www.facebook.com/cairo.campos.1", icon:"facebook-f"},
        {name:"Whatsapp", url:"https://api.whatsapp.com/send?phone=33991409852", icon:"whatsapp"},
      ]
    }
  }
}
</script>

<style lang="scss">
.review {
  height:calc(100vh - 60px);
  &__title {
    font-family: "Nunito";
    font-weight: 700;
    font-size: 5.4rem;
    color:var(--light-coral-darken);
    text-shadow: 0 0 2px rgba(20,0,0,.05);
    margin-bottom: 3rem;
    text-align: center;
  }
  &__subtitle {
    color: #999;
    text-align: center;
    max-width: 800px;
    font-weight: 300;
    line-height: 3rem;
    strong {
      color: var(--light-coral);
      font-weight: 700;
    }
  }
}

.social {
  width:100%;
  height:80px;
  display: flex;
  justify-content: center;
  &__item {
    font-size: 48px;
    color:var(--orchid-crayola);
    &:hover {
      color:var(--light-coral);
    }
  }
  &__item + &__item {
    margin-left: 32px;
  }
}


@media(min-width: 800px) {
  .review {
    &__title {
      font-size: 8rem;
    }
  }
}
</style>
