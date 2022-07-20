<template>
    <transition name="fade">
        <div v-if="show" class="preloader">
            <div class="divImg">
                <img class="logoPreloader" :src="image"/>
            </div>
            <Spinner />
        </div>
    </transition>
</template>
<script>
import Spinner from "../components/Spinner.vue"
import image from "../assets/logo-big.png";
export default{
    name: "PreloaderVue",
    components: {
        Spinner,
    },
    data(){
        return {
            show: true,
            image: image
        };
    },
    methods:{
        showToggle() {
            setTimeout(() => {
                this.show = false;
                this.$router.push("/Main");
            }, 4000)
        }
    },
    mounted(){
        if(this.show) this.showToggle();
    },
};
</script>
<style>
.preloader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #141414;
    z-index: 999;
}
.divImg{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width){
    .logoPreloader{
        width: 200px;
    }
}
</style>