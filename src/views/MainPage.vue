<template>
    <div class="wrapper" :class="isTouch ? 'touch' : 'pc' ">
      <TheBureau/>
      <TheMainImg/>
      <TheHeader v-scrolto/>
      <router-view />
    </div>
</template>

<script>
import Container from '../components/Container.vue'
import TheBureau from '../components/TheBureau.vue'
import TheMainImg from '../components/TheMainImg.vue'
import TheHeader from '../components/TheHeader.vue'
import TheInfo from './TheInfo.vue'
import wtatUse from '../helpers/wtatUse'
export default {
  components: {
    Container,
    TheBureau,
    TheMainImg,
    TheHeader,
    TheInfo
  },
  computed:{
    isTouch(){
      return wtatUse()
    }
  },
};
</script>
<style >
  .wrapper{
    overflow: hidden;
    min-height: 100vh;
  }
</style>
