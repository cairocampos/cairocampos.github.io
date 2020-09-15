<template>
  <section class="container">
    <Introduction :title="introduction.title" :subtitle="introduction.subtitle" />
    <div class="row">
        <div class="col-lg-8">
            <div class="form mb-5">
                <label for="name">Nome* <strong v-if="isEmpty.name">Esse campo é obrigatório</strong></label>
                <input @blur="checkField('name')" type="text" class="form-control form-control-lg" name="name" v-model="form.name" />
                <label for="email">Email* <strong v-if="isEmpty.email">Esse campo é obrigatório</strong></label>
                <input @blur="checkField('email')" type="email" class="form-control form-control-lg" name="email" v-model="form.email" />
                <label for="whatsapp">Telefone (Whatsapp)</label>
                <input type="text" class="form-control form-control-lg" name="whatsapp" v-model="form.whatsapp" />
                <label for="message">Mensagem*  <strong v-if="isEmpty.message">Esse campo é obrigatório</strong></label>
                <textarea @blur="checkField('message')" class="form-control form-control-lg" name="message" cols="30" rows="10"  v-model="form.message"></textarea>
                <p>Os campos com (*) são obrigatórios!</p>
                <input @click="sendEmail" type="submit" :disabled="btnDisabled" class="btn btn-lg btn-block btn-secondary mt-5" value="Enviar" />
            </div>
        </div>
        <div class="col-lg-4">
            <h4>Ou...me chame em uma das redes sociais! 😉</h4>
            <div class="card">
                <div class="list-group">
                    <a 
                        class="list-group-item" 
                        v-for="social in socials" 
                        :key="social.name" 
                        :href="social.url" 
                        target="_blank">
                        <font-awesome-icon :icon="['fab', social.icon]" /> {{social.name}}
                    </a>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    head: {
        title: "Contato",
        meta: [
        { hid: 'description', name: 'description', content: 'Desenvolvedor Web Front End - VueJS, NuxtJS, Javascript, PHP, Laravel, NodeJS e mais!' }
        ]
    },
    data() {
        return {
            introduction: {
                title:"E ai, bora bater um papo ?",
                subtitle:"Contato"
            },
            socials: [
                {name:"Likedin", url:"https://www.linkedin.com/in/cairo-campos-a369b2174/", icon:"linkedin-in"},
                {name:"Github", url:"https://github.com/cairocampos", icon:"github"},
                {name:"Instagram", url:"https://instagram.com/cairocampos98", icon:"instagram"},
                {name:"Facebook", url:"https://www.facebook.com/cairo.campos.1", icon:"facebook"},
                {name:"Whatsapp", url:"https://api.whatsapp.com/send?phone=33991409852", icon:"whatsapp"},
            ],
            form: {
                name:"",
                email:"",
                whatsapp:"",
                message:""
            },
            isEmpty: {
                name:false,
                email:false,
                message:false
            },
            btnDisabled:true,
        }
    },
    watch: {
        'form.message':function(val) {
            if(val.trim() != "") {
                this.formIsDone();
            }
        }
    },
    methods: {
        sendEmail() {
            //
        },
        checkField(fieldName) {
            if(this.form[fieldName].trim() == "") {
                this.isEmpty[fieldName] = true;
            } else {
                this.isEmpty[fieldName] = false;
            }

            this.formIsDone();
        },
        formIsDone() {
            const {name, email, message} = this.form;

            if(name.trim() != "" && email.trim() != "" && message.trim() != "") {
                this.btnDisabled = false;
            }
        }
    }
}
</script>

<style lang="scss">
.form {
    background-color:var(--platinum);
    padding: 2.5rem;
    border-radius: 8px;
    label {
        color: #333;
        strong {
            color:red;
            font-weight: 500;
        }
    }
    input:not(:nth-child(1)) {
        margin-bottom: 16px;
    }
    .btn:disabled {
        cursor: not-allowed;
    }
}

.list-group {
    &-item {
        font-size: 2rem;
        color: var(--light-coral-darken);
    }
}
</style>