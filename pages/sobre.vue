<template>
  <section class="container">
    <Introduction :title="introduction.title" :subtitle="introduction.subtitle" />
    <div class="row">
      <div class="col-lg-4 col-md-12 profile">
        <div class="profile__image">
          <img src="~assets/img/pp.jpeg" alt="Cairo Campos" />
        </div>

        <h4>Minhas Redes</h4>
        <div class="network">
          <div class="network__item">
            <a v-for="social in socials" :key="social.name" :href="social.url">
              <font-awesome-icon :icon="['fab', social.icon]" :alt="social.name" />
            </a>
          </div>
        </div>

        <h4>Minhas Habilidades</h4>
        <div class="skills">
          <div class="skills__item" v-for="skill in skills" :key="skill.name" :title="skill.name">
              <font-awesome-icon :icon="['fab', skill.icon]" :alt="skill.name" />
          </div>
        </div>

      </div>
      <div class="col-lg-8 col-md-12">
        <div class="card">
          <div class="card__title">
            Antes de mais nada, seja muito bem vindo!
          </div>
          <div class="card__description">
            <p>
              Muito prazer em conhecê-lo, espero que encontre o profissional que está procurando!
            </p>
            <p>
              Meu nome completo é <strong>Cairo Campos da Silva</strong> 
              tenho 22 anos.
              Nasci e fui criado no interior de Minas Gerais, mais especificamente
              na cidade de <strong>Governador Valadares.</strong>
            </p>
            <p>
              Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong>
              pela <strong>Universidade Norte Do Paraná (UNOPAR).</strong>
              Desde criança sou paixonado por tecnologia, mas infelizmente, apenas aos 18 anos
              tive contato com programação e a web foi a minha primeira paixão! Ver meus códigos
              construídos apenas com <strong>HTML</strong> e uns retoques com <strong>CSS</strong>
              era uma satisfação imensa haha! Mas eu queria mais, foi ai que entrei na faculdade e
              comprei o meu primeiro curso voltado para o <strong>desenvolvimento web</strong>, dai
              começou minha jornada nesse universo!
            </p>
            <div class="divider"></div>
            <h3>Quais meus conhecimentos ?</h3>
            <p>
              Geralmente eu desenvolvo minhas aplicações para front-end utilizando alguns frameworks
              javascript como <strong>VueJS</strong> e <strong>NuxtJS</strong> para trabalhar SEO.
            </p>
            <p>
              Tenho conhecimento também em aplicações back-end, nesse ambiente geralmente utilizo
              <strong>PHP + Laravel</strong> como framework, tenho conhecimento em bancos de dados relacionais,
              como o <strong>Mysql, MariaDB e Postgre</strong>, e não relacionais como o próprio <strong>MongoDB</strong>.
              <br>
              Quando vou desenhar um layout do zero, eu busco arquitetar toda a estrutura, cores, fonte, icones...Utilizo 
              o <strong>Figma / AdobeXD</strong> como ferramentas de prototipagem.
            </p>
            <div class="divider"></div>
            <h3>O que faço hoje ?</h3>
            <p>
              Atualmente trabalho como desenvolvedor <strong>front-end</strong>
              em uma empresa que fornece serviço para provedores de internet na minha cidade.
              Anteriormente trabalhava como Suporte Técnico e como o horário era reduzido, 
              eu me aventurava como freelancer 😊. Pegava alguns projetos apenas, devido ter comprometimento
              com os prazos e prezava a qualidade de meu serviço.
            </p>
            <p>
              Nessa jornada de freelancer, encontrei um parceiro, que hoje trabalhamos juntos e temos uma idéia
              de iniciarmos uma <strong>Start Up!</strong> Isso mesmo, estamos elaborando um projeto e torcemos para que dê certo!
              Afinal ser um programador sem riscos, não é ser um programador, né ?
            </p>
            <div class="divider"></div>
            <h3>Deseja saber mais sobre mim ?</h3>
            <p>
              Claro que aqui eu abordo apenas algumas coisas, seria muito inviável descrever tudo apenas aqui 🤔. 
              <br>
              Mas se você está interessado e deseja entrar em contato, para me conhecer mais ou falar sobre
              as idéias que você ou sua empresa deseja trabalhar, conte comigo!
              Será um prazer fazer parte de seu projeto!! 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition:"page",
  data() {
    return {
      introduction: {
        title:"Olá, que bom que deseja saber mais sobre mim!",
        subtitle:"Sobre mim"
      },
      socials: [
        {name:"Likedin", url:"https://www.linkedin.com/in/cairo-campos-a369b2174/", icon:"linkedin-in"},
        {name:"Github", url:"https://github.com/cairocampos", icon:"github"},
        {name:"Instagram", url:"https://instagram.com/cairocampos98", icon:"instagram"},
        {name:"Facebook", url:"https://www.facebook.com/cairo.campos.1", icon:"facebook"},
        {name:"Whatsapp", url:"https://api.whatsapp.com/send?phone=33991409852", icon:"whatsapp"},
      ],
      skills: [
        {name:"npm", type:"fab", icon:"npm"},
        {name:"vuejs", type:"fab", icon:"vuejs"},
        {name:"yarn", type:"fab", icon:"yarn"},
        {name:"javascript", type:"fab", icon:"js-square"},
        {name:"php", type:"fab", icon:"php"},
        {name:"laravel", type:"fab", icon:"laravel"},
        {name:"nodejs", type:"fab", icon:"node"},
        {name:"linux", type:"fab", icon:"linux"},
        {name:"windows", type:"fab", icon:"windows"},
        {name:"ubuntu", type:"fab", icon:"ubuntu"},
        {name:"css3", type:"fab", icon:"css3-alt"},
        {name:"html5", type:"fab", icon:"html5"},
        {name:"sass", type:"fab", icon:"sass"},
        {name:"bootstrap", type:"fab", icon:"bootstrap"},
        {name:"git", type:"fab", icon:"git-alt"},
        {name:"github", type:"fab", icon:"github-square"},
        {name:"gitlab", type:"fab", icon:"gitlab"},
        {name:"figma", type:"fab", icon:"figma"},
      ]
    }
  },
  head() {
    return {
      title: "Sobre",
      meta: [
        {
          hid: "description",
          name:"description",
          content: "Desenvolvedor Web Front End - VueJS, NuxtJS, Javascript, PHP, Laravel, NodeJS e mais!"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    margin-bottom: 32px;
    img{
      height: 250px;
      border-radius: 50%;
      border: 5px solid var(--orchid-crayola-darken);
    }
  }
}

.card {
  padding:22px;
  color:#222;
  margin-bottom: 20px;
  &__title {
    font-size:2.5rem;
    font-family: "Poppins";
    border-bottom:2px solid #EEE;
    color: var(--light-coral-darken);
  }
  &__description {
    font-family: "Nunito";
    font-size: 18px;
    margin-top: 32px;
    p {
      font-weight: 500;
      strong {
        color: var(--orchid-crayola-darken);
      }
    }
  }
}

.divider {
  height:2px;
  background:#EEE;
  margin-bottom: 16px;
}

.network {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  &__item {
    font-size: 3rem;
    a {
      color: var(--orchid-crayola);
      &+a {
        margin-left: 2rem;
      }
      &:hover {
        color: var(--light-coral);
      }
    }
  }
}

.skills {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 36px;
  &__item {
    font-size: 24px;
    border:1px solid #EEE;
    padding:8px;
    width: 50px;
    text-align: center;
    transition: all .3s;
    &:hover {
      background: var(--orchid-crayola-darken);
      border-color:var(--light-coral);
    }
  }
}

</style>