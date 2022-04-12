<template>
    <Container :styles="'container--body'">
        <section class="block-people">
            <div class="block-people-column">
                <div class="block-people-column__item">
                    <div class="block-people-column__img">
                        <img src="https://www.meme-arsenal.com/memes/dd06f13790a014cf867db3c961fd6441.jpg" alt="">
                    </div>
                    <div class="block-people-column__info">
                        <div class="block-people-column__rang">Начальник:</div>
                        <div class="block-people-column__name">АЛЕШКЕВИЧ Николай Александрович</div>
                        <div class="block-people-column__place">(к. 5, ауд. 3-6)</div>
                    </div>
                </div>
            </div>
            <div class="block-people-column">
                <div class="block-people-column__item">
                    <div class="block-people-column__img">
                        <img src="https://www.meme-arsenal.com/memes/dd06f13790a014cf867db3c961fd6441.jpg" alt="">
                    </div>
                    <div class="block-people-column__info">
                        <div class="block-people-column__rang">Ведущий специалист:  </div>
                        <div class="block-people-column__name">МАТЬКУНОВА Татьяна Владимировна</div>
                        <div class="block-people-column__place">(к. 5, ауд. 3-9)</div>
                    </div>
                </div>
            </div>
            <div class="block-people-column">
                <div class="block-people-column__item">
                    <div class="block-people-column__img">
                        <img src="https://www.meme-arsenal.com/memes/dd06f13790a014cf867db3c961fd6441.jpg" alt="">
                    </div>
                    <div class="block-people-column__info">
                        <div class="block-people-column__rang">Ведущий специалист: </div>
                        <div class="block-people-column__name">ЛОСЕВА Ольга Валентиновна</div>
                        <div class="block-people-column__place">(к. 5, ауд. 3-9)</div>
                    </div>
                </div>
            </div>
            <div class="block-people-column">
                <div class="block-people-column__item">
                    <div class="block-people-column__img">
                        <img src="https://www.meme-arsenal.com/memes/dd06f13790a014cf867db3c961fd6441.jpg" alt="">
                    </div>
                    <div class="block-people-column__info">
                        <div class="block-people-column__rang">Ведущий инженер:</div>
                        <div class="block-people-column__name">КРАВЧЕНКО Владимир Владимирович</div>
                        <div class="block-people-column__place">(к. 5)</div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
</template>

<script>
import Container from '../components/Container.vue'
export default {
    components:{
        Container
    }
}
</script>

<style lang="scss" scoped>
    .block-people{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -29.5px;
        &-column{
            flex: 0 1 50%;
            padding: 0 29.5px;
            box-sizing: border-box;
            &__item{
                border: 1px solid #5C5C5C;
                padding: 15px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                @media(max-width:710px){
                   padding: 7px;
                }
            }
            &__img{
                flex: 0 1 107%;
                overflow: hidden;
                position: relative;
                padding: 0 0 71% 0;
                @media(max-width:710px){
                    flex: 0 1 39%;
                    padding: 0 0 44% 0;
                }
                & img {
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &__info{
                flex: 1 1 auto;
                margin-left: 15px;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #333232;
                & > *:not(:last-child){
                    margin-bottom: 15px;
                }
            }
            &__rang{
                color: #5F5F5F;
            }
            &:not(:last-child){
                margin-bottom: 40px;
            }
            @media(max-width:710px){
                flex: 0 1 100%;
            }
        }
    }
</style>