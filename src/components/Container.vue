<template>
    <div class="container" :class="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        styles:{
            type:String,
            validator(value){
                return ['container--body'].includes(value)
            }
        }
    }
}
</script>

<style lang="scss">
    .container{
        max-width: 1179px;
        padding: 0 12px;
        margin: 0 auto;
        &--body{
            padding: 36px 12px 40px 288px;
            max-width: 1088px;
            @media(max-width:1180px){
                padding-left: 335px;
            }
            @media(max-width:960px){
                padding-left: 12px;
            }
        }
    }
</style>