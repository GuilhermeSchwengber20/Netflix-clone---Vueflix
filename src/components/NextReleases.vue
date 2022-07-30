<template>
    <div class="next-releases-container">
        <div class="videoContainer">
            <video autoplay muted loop src="../assets/video.mp4"></video>
        </div>

        <div class="container-releases">
            <h1>O Código Bill Gates</h1>
            <p>
                Bill Gates fala sobre a missão de vida ou morte para melhorar as
                condições de saneamento no mundo em desenvolvimento. E suas irmãs
                relembra a infância com ele.
            </p>
            <button class="button-play">
                <font-awesome-icon :icon="['fa', 'circle-play']" class="icon alt"></font-awesome-icon>
                <span>Assistir</span>
            </button>
            <button class="button-info">
                <font-awesome-icon :icon="['fa', 'circle-info']" class="icon alt"></font-awesome-icon>

                <span>Mais Informações</span>
            </button>

        </div>
    </div>
</template>
<script>
export default{
    name: "NextReleases",
    data(){
        return{

        }
    }
}
</script>
<style>
.next-releases-container{
    width: 100%;
    height: 500px;
    position: relative;
    background: #1414147e;
    display: flex;
    align-items: center;
}

.next-releases-container > .videoContainer{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 99%;
    overflow: hidden;
}

.next-releases-container > .videoContainer > video {
    width: 100%;
}

.container-releases{
    width: 500px;
    margin-left: 40px;
}

.container-releases h1{
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 30px;
    text-align: justify;
}

.container-releases p{
    color: #e9e9e9;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: #e9e9e9 0em 0em 0em;
    font-size: 15px;
    margin-bottom: 30px;
    text-align: justify;

}

.container-releases button{
    border: none;
    background: rgba(78, 78, 78, 0.562);
    color: #e9e9e9;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    transition: transform 0.5s;
}

.container-releases button span{
    padding-left: 10px;
}

.button-play{
    width: 150px;
    height: 30px;
    margin-right: 20px;
}
.button-info{
    width: 190px;
    height: 30px;
}



</style>