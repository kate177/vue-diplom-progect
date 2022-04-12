<template>
    <div class="header-navigation__wrap">
        <ul class="header-navigation" :class="toggleList ? 'active' : '' ">
            <li
                class="header-navigation__link" 
                v-for="link in list"
                :class="link.isOpen ? 'active' : '' "
                :key="link.id"
                ><a 
                    @click.prevent.stop="$emit('open', (link.id - 1))"
                    class="header-navigation__item"
                    href="#"
                    ><span>{{link.menuName}}</span><span v-if="link.subLinks" class="header-submenu__arrow"></span>
                </a>
                <ul class="header-submenu"  v-if="link.subLinks">
                    <li
                        v-for="sublink in link.subLinks" 
                        :key="sublink.subName" 
                        class="header-submenu__link"
                        ><router-link
                            class="header-submenu__item"
                            :to="sublink.to"
                            ><span>{{sublink.subName}}</span>
                        </router-link>
                    
                    </li>
                </ul>
            </li>
            <div v-if="toggleList" @click="$emit('closeMenu')" class="header-navigation__close">
                <img src="../assets/img/close.svg" alt="">
            </div>
        </ul>
        <div @click="$emit('openMenu')" class="navigation-burger"><span></span></div>
    </div>
</template>

<script>
    export default {
        emits:['closeMenu','open','openMenu'],
        props:{
            list:{
                type:Array,
                required:true,
                default:[]
            },
            toggleList:{
                type:Boolean,
                required:true,
                default:false
            }
        }
    }
</script>

<style lang="scss">
    .header{
        &-navigation__wrap{
            min-height: 50px;
        }
        &-navigation{
            &__item{
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                color: #040844;
                display: block;
                text-transform: uppercase;
            }
            &__close{
                display: none;
            }
        }
        &-submenu{
            z-index: 3;
            &__link{
                font-weight: 600;
            }
            &__item{
                text-decoration: none;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.01em;
                color: #040844; 
                text-transform: uppercase;
                &:hover{
                    text-decoration: underline;
                }
                &.active-link{
                    text-decoration: underline;
                }
            }
            &__arrow{
                display: none;
            }
        }
    }
    @media (min-width:960px){
        .header-navigation{
            display: flex;
            justify-content: center;
            &__link{
                position: relative;
                &:first-child .header-navigation__item{
                    padding: 15px 43px;
                    box-sizing: border-box;
                    background-color: #fff;
                }
                &:not(:first-child) .header-submenu{
                    width: 296px;
                }
                &:last-child .header-submenu{
                    width: 205px;
                    left: -50px;
                }
                &:not(:first-child) .header-submenu{
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }
                &:not(:first-child):hover{
                    text-decoration: underline;
                }
            }
            &__item{
                padding: 15px 0 15px 32px;
            }
        }
        .navigation-burger{
            display: none;
        }
        .header-submenu{
            position: absolute;
            bottom: 1px;
            left: 0;
            width: 100%;
            transform: translate(0, 100%);
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 20px 8px;
            box-sizing: border-box;
            transition: .2s ease all;
            &__link{
                &:not(:last-child){
                    margin-bottom: 40px;
                }
            }
        }
    }
     .wrapper.pc .header-navigation .header-navigation__link:hover .header-submenu{
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transition: .2s ease opacity;
    }
    .wrapper.touch .header-submenu__arrow{
       display: block;
       width: 0;
       height: 0;
       border-left: 5px solid transparent;
       border-right: 5px solid transparent;
       border-top: 5px solid #fff;
       margin: 0 0 0 5px;
    }
    .wrapper.touch .header-navigation .header-navigation__item{
        display: flex;
        align-items: center;
    }
    .wrapper.touch .header-navigation .header-navigation__link.active .header-submenu{
        opacity: 1;
        visibility: visible;
        pointer-events: all;
    }
    .wrapper.touch .header-navigation .header-navigation__link.active .header-submenu__arrow{
        transform: rotate(180deg);
    }
    @media(max-width:1180px){
        .header-navigation__item{
            padding:15px 0px 15px 15px;
            font-size: 13px;
            cursor: pointer;
        }
        .header-navigation__link:first-child .header-navigation__item{
            padding: 15px 25px;
        }
        .header-submenu__link{
            &:not(:last-child){
                margin-bottom: 25px;
            }
        }
        .header-submenu__item{
            font-size: 13px;
            line-height: 17px;
        }
        .header-navigation__link:last-child .header-submenu{
            left: -80px;
        }
    }
    @media(max-width:960px){
        .header-navigation__wrap{
            display: flex;
            align-items: center;
            min-height: 40px;
            justify-content: flex-end;
            position: relative;
        }
        .header-navigation{
            position: fixed;
            top: 0;
            left:100%;
            background-color: #6890D0;
            width: 100%;
            height: 100%;
            overflow: auto;
            z-index: 2;
            padding: 100px 10px 0;
            transition: .2s ease all;
            &__link{
                padding: 20px;
                &.active .header-submenu{
                    display: block;
                }
            }
            &.active{
                left: 0;
                transition: .2s ease all;
            }
        }
        .header-submenu{
            background-color: #fff;
            padding: 12px;
            box-sizing: border-box;
            display: none;
        }
        .header-submenu__item{
            font-size: 20px;
            line-height: 24px;
        }
        .navigation-burger{
            cursor: pointer;
            display: block;
            height: 30px;
            width: 30px;
            position: relative;
            & span,
            &::before,
            &::after{
                position: absolute;
                height: 3px;
                background-color: #040844;
                width: 100%;
                left: 0;
            }
            &::after{
                content: '';
                bottom: 0;
            }
            &::before{
                content: '';
                top: 0;
            }
            & span{
                top: 50%;
                transform: translate(0, -50%);
            }
        }
        .header-navigation__link:first-child .header-navigation__item{
            padding: 0;
        }
        .header-navigation__item{
            padding: 0;
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 20px;
        }
        .header-navigation__close{
            display: block;
            position: absolute;
            top: 10px;
            right: 10px;
            width: 60px;
            height: 60px;
            cursor: pointer;
            & img{
                max-width: 100%;
            }
        }
    }
</style>