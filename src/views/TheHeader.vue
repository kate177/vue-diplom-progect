<template>
    <section class="header">
        <TheContainer>
            <ul class="header-navigation">
                <li class="header-navigation__link"><a class="header-navigation__item" href="#"><span>ОБЩАЯ ИНФОРМАЦИЯ</span></a>
                    <ul class="header-submenu">
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">СОТРУДНИКИ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">НАПРАВЛЕНИЕ ДЕЯТЕЛЬНОСТИ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">СТРУКТУРА</a></li>
                    </ul>
                </li>
                <li class="header-navigation__link"><a class="header-navigation__item" href="#"><span>СТАНДАРТИЗАЦИЯ</span></a>
                    <ul class="header-submenu">
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ФОНД ТНПА</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ПЕРЕОДИЧЕСКИЕ ИЗДАНИЯ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ДОКУМЕНТЫ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">СТП 04-2011 КУРСОВЫЕ РАБОТЫ</a></li>
                    </ul>
                </li>
                <li class="header-navigation__link"><a class="header-navigation__item" href="#"><span>МЕНЕДЖМЕНТ КАЧЕСТВА</span></a></li>
                <li class="header-navigation__link"><a class="header-navigation__item" href="#"><span>МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ</span></a>
                    <ul class="header-submenu">
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ГРАФИКИ ПОВЕРКИ СИ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ОБРАЗЕЦ АКТА МЕТРОЛОГИЧЕСКОГО ОБЕСПЕЧЕНИЯ НИР</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ОБРАЗЕЦ СПИСКА УЧЕБНОГО (НАУЧНОГО) ОБОРУДОВАНИЯ (СРЕДСТВ ИЗМЕРЕНИЯ)</a></li>
                    </ul>
                </li>
                <li class="header-navigation__link"><a class="header-navigation__item" href="#"><span>ЗАЩИТА ПДн</span></a>
                    <ul class="header-submenu">
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ОБРАЗЕЦ РЕЕСТРА ПДн</a></li>
                        <li class="header-submenu__link"><a class="header-submenu__item" href="#">ЗАКОН РЕСПУБЛИКИ БЕЛАРУСЬ ОТ 07.05.2021 №99-З “О ЗАЩИТЕ ПЕРСОНАЛЬНЫХ ДАННЫХ”</a></li>
                    </ul>
                </li>
            </ul>
        </TheContainer>
    </section>
</template>

<script>
import TheContainer from '../components/TheContainer.vue'
    export default {
        components:{
            TheContainer
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        background-color: #6890D0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &-navigation{
            display: flex;
            min-height: 50px;
            &__link{
                position: relative;
                align-self: center;
                flex: 1 1 auto;
                &:first-child .header-navigation__item{
                    padding: 15px 42px;
                    background-color: #fff;
                    box-sizing: border-box;
                }
                &:first-child .header-submenu{
                    width: 100%;
                    opacity: 1;
                    visibility: visible;
                }
                &:last-child .header-submenu{
                    width: 207px;
                }
                &:not(:first-child):hover .header-submenu{
                    opacity: 1;
                    visibility: visible;
                    transition: .2s ease;
                }
                &:not(:first-child):hover .header-navigation__item span::after{
                    display: block;
                }
                &:not(:first-child) .header-navigation__item span::after{
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    right: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #040844;
                    display: none;
                }
            }
            &__item{
                text-transform: uppercase;
                display: block;
                text-decoration: none;
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                color: #040844;
                box-sizing: border-box;
                padding:15px 0 15px 32px;
                & span{
                    position: relative;
                }
            }
        }
        &-submenu{
            position: absolute;
            opacity: 0;
            visibility: hidden;
            width: 296px;
            bottom: 0;
            left: 0;
            background-color: #fff;
            transform: translate(0, 99.5%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 20px 12px;
            transition: .2s ease;
            box-sizing: border-box;
            &__link{
                &:not(:last-child){
                    margin-bottom: 40px;
                }
            }
            &__item{
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.03em;
                color: #040844;
            }
        }
    }
</style>