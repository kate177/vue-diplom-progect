<template>
    <section v-scrolto class="header">
        <Container>
            <TheNavigations 
                @closeMenu="closeMenu"
                @open="toggleOpen"
                @openMenu="openMenu"
                :toggleList="toggleList"
                :list="list"
            />
        </Container>
    </section>
</template>

<script>
import Container from './Container.vue'
import TheNavigations from './TheNavigations.vue'
    export default {
        data(){
            return {
                list:[
                    { 
                        menuName:'ОБЩАЯ ИНФОРМАЦИЯ',
                        id:1,
                        subLinks:[{subName:'СОТРУДНИКИ',to:'/collaborator'},{subName:'НАПРАВЛЕНИЕ ДЕЯТЕЛЬНОСТИ',to:'/segment_direction'},{subName:'СТРУКТУРА',to:''}],
                        isOpen:false
                    },
                    { 
                        menuName:'СТАНДАРТИЗАЦИЯ',
                        id:2,
                        subLinks:[{subName:'ФОНД ТНПА',to:''},{subName:'ПЕРЕОДИЧЕСКИЕ ИЗДАНИЯ',to:''},{subName:'ДОКУМЕНТЫ',to:''},{subName:'СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ',to:''},{subName:'СТП 04-2011 КУРСОВЫЕ РАБОТЫ',to:''}],
                        isOpen:false
                    },
                    { 
                        menuName:'МЕНЕДЖМЕНТ КАЧЕСТВА',
                        id:3,
                        to:'/quality_management',
                    },
                    { 
                        menuName:'МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ',
                        id:4,
                        subLinks:[{subName:'ГРАФИКИ ПОВЕРКИ СИ',to:''},{subName:'ОБРАЗЕЦ АКТА МЕТРОЛОГИЧЕСКОГО ОБЕСПЕЧЕНИЯ НИР',to:''},{subName:'ОБРАЗЕЦ СПИСКА УЧЕБНОГО (НАУЧНОГО) ОБОРУДОВАНИЯ (СРЕДСТВ ИЗМЕРЕНИЯ)',to:''}],
                        isOpen:false
                    },
                    { 
                        menuName:'ЗАЩИТА ПДн',
                        id:5,
                        subLinks:[{subName:'ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ',to:''},{subName:'ОБРАЗЕЦ РЕЕСТРА ПДн',to:''},{subName:'ЗАКОН РЕСПУБЛИКИ БЕЛАРУСЬ ОТ 07.05.2021 №99-З “О ЗАЩИТЕ ПЕРСОНАЛЬНЫХ ДАННЫХ”',to:''}],
                        isOpen:false
                    },
                ],
                toggleList:false,
            }
        },
        methods:{
            toggleOpen(idx){
                this.list.map((link, index) => {
                    if("isOpen" in link){
                        idx === index ? link.isOpen = !link.isOpen : link.isOpen = false
                    } else {
                        if(idx === index) {
                            this.$router.push(link.to)
                            this.closeMenu()
                        }
                    }
                })
            },
            closeMenu(){
                this.toggleList = false
                document.body.classList.remove('fixed')
            },
            openMenu(){
                this.toggleList = true
                document.body.classList.add('fixed')
            }
        },
        components:{
            Container,
            TheNavigations
        },
    }
</script>

<style>
    .header{
        font-family: 'Open-Sans', sans-serif;
        background-color: #6890D0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .header.fixed{
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        z-index: 5;
    }
</style>
