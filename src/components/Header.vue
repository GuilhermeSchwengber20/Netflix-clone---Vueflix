<template>
    <div class="page-container">
        <div class="header-container">
            <img class="logoHeader" :src="image">
            <nav role="navigation" class="nav">
                <ul class="navegar">
                    <li class="nav-item">
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
                    <li class="nav-item">
                        <a>Minha Lista</a>
                    </li>
                </ul>
            </nav>
            <div class="icons">
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
}
.logoHeader{
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
</style>