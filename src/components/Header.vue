<template>
    <div class="page-container">
        <div class="header-container">
            <img class="logoHeader" :src="image" @click="navigateMain">
            <nav role="navigation" class="nav">
                <ul class="navegar">
                    <li class="nav-item" @click="navigateMain">
                        <a>Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a>Filmes</a>
                    </li>
                    <li class="nav-item">
                        <a>Series</a>
                    </li>
                    <li class="nav-item">
                        <a>Mais recentes</a>
                    </li>
                    <li class="nav-item" @click="navigateMyList">
                        <a>Minha Lista</a>
                    </li>
                </ul>
            </nav>
            <div class="search-container">
                <div class="inputContainer">
                    <input type="text" placeholder="Genêro, Filme, Serie, Titulo"/>
                </div>
                <div class="icon">
                    <font-awesome-icon :icon="['fa', 'magnifying-glass']" class="icon alt" />

                </div>
            </div>
            <div class="icons">
                <div class="redDOt"></div>
                <font-awesome-icon :icon="['fa', 'bell']" class="icon alt" />
                <font-awesome-icon :icon="['fa', 'user-circle']" class="icon alt" />
            </div>
        </div>
    </div>
</template>
<script>
import image from '../assets/logo-small.png'

export default{
    name: 'HeaderVue',

    data(){
        return{
            image,
        }
    },
    methods:{
        navigateMyList(){
            this.$router.push({ name: "MyListVue"})
        },
        navigateMain(){
            this.$router.push({name: "MainVue"})
        }
    }
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.page-container{
    width: 100%;
    color: #fff;
}
.logoHeader{
    align-items: center;
    width: 100px;
    height: auto;
}

.header-container{
    width: 100%;
    height: 12%;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background:#141414;
}

.nav ul{
    display: flex;
    flex-direction: row;
    color: #fff;
}

.nav li{
    display: flex;
    list-style: none;
    margin-right: 30px;
    font-size: 20px;
}

li a:hover{
    color: #ccc
}

.search-container{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}
.icon {
    font-size: 1.5rem;
}

.inputContainer input{
    width: 200px;
    color: #fff;    
    border: none;
    background: transparent;
    padding: 5px;
    font-size: 15px;
}
.icons{
    display: flex;
    align-items: center;
    margin-right: 20px;
    gap: 20px;
}
.redDOt{
    position: absolute;
    top: 11px;
    right: 64px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
}

</style>