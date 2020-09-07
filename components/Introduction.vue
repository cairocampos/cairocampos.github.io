<template>
  <div class="introduction">
      <h5 class="introduction__subtitle">{{subtitle}}</h5>
      <h3 class="introduction__title">{{textAnimation}}</h3>
  </div>
</template>

<script>
export default {
    props: ["title", "subtitle"],
    data() {
        return {
            textAnimation: ""
        }
    },
    methods: {
        animeDescription() {
            let i = 0;
            let length = parseInt(this.title.length) + 1;
            const timer = setInterval(() => {                
                this.textAnimation = this.title.substring(0, i);
                i++;

                if(i == length) {
                    clearInterval(timer);
                }
            }, 35);
        }
    },
    created() {
        this.animeDescription();
    }
}
</script>

<style lang="scss">
.introduction {
    margin-top: 32px;
    margin-bottom: 32px;
    max-width: 500px;
    &__subtitle::after {
        content:"";
        display: block;
        height:2px;
        background-color:#FFF;
        max-width: 20px;
    }
}
</style>