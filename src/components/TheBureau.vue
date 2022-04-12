<template>
    <section class="bureau">
        <Container>
            <div class="bureau-body">
                <div class="bureau-img">
                    <img src="../assets/img/logo.png" alt="">
                </div>
                <div class="bureau-name">бюро стандартизации и метрологии</div>
            </div>
        </Container>
    </section>
</template>

<script>
import Container from './Container.vue'
    export default {
        components:{
            Container
        }
    }
</script>

<style lang="scss" scoped>
    .bureau{
        padding: 7px 0;
        &-body{
            display: flex;
            align-items: center;
        }
        &-img{
            flex: 0 0 60px;
            height: 60px;
            & img{
                display: block;
                max-width: 100%;
            }
        }
        &-name{
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 700;
            font-size: 23px;
            line-height: 27px;
            margin-left: 20px;
            color: #040844;
            flex: 1 1 auto;
            @media(max-width:500px){
                font-size: 16px;
                line-height: 20px;
                margin-left: 10px;
            }
        }
    }
</style>