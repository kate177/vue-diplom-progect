<template>
    <section class="main-img">
        <div class="img-body">
            <img src="../assets/img/bg-img.jpg" alt="">
        </div>
    </section>
</template>


<style lang="scss" scoped>
    .main-img{
        display: flex;
    }
    .img-body{
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 0 0 16% 0;
        background-color: #6890D0;
        & img{
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
</style>