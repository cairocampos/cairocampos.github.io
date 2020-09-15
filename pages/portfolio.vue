<template>
  <section class="container">
    <Introduction :title="introduction.title" :subtitle="introduction.subtitle" />
    <div class="row">
        <div v-for="project in projects" :key="project.index" class="col-lg-4 col-md-6">
            <div class="box">
                <img class="box__image" src="~assets/img/teste.jpg" :alt="project.name" />
                <h3 class="my-2">{{project.name}}</h3>
                <div class="box__description">
                    {{project.description}}
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    head: {
        title: "Portfólio",
        meta: [
        { hid: 'description', name: 'description', content: 'Desenvolvedor Web Front End - VueJS, NuxtJS, Javascript, PHP, Laravel, NodeJS e mais!' }
        ]
    },
    data() {
        return {
            introduction: {
                title:"Aqui está alguns dos meus projetos desenvolvidos.",
                subtitle:"Portfólio"
            },
            projects: [
                {id:1, name:"Teste", image:"", description:"Projeto de teste"},
                {id:1, name:"Teste", image:"", description:"Projeto de teste"},
                {id:1, name:"Teste", image:"", description:"Projeto de teste"},
                {id:1, name:"Teste", image:"", description:"Projeto de teste"},
                {id:1, name:"Teste", image:"", description:"Projeto de teste"},
            ]
        }
    }
}
</script>

<style lang="scss">
.box {
    width:100%;
    min-height:350px;
    background-color: var(--platinum);
    border-radius: 4px;
    margin-bottom: 32px;
    cursor: pointer;
    transition: all .3s;
    &__image {
        width:100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    h3 {
        color: var(--light-coral-darken);
        text-align: center;
        font-family: "Nunito";
        font-weight: bold;
    }
    &__description {
        padding: 0 16px 16px 16px;
        color:#333;
        font-weight: 500;
    }
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 4px rgba(211, 80, 88,0.8);
    }
}

</style>