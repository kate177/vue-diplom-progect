<template>
    <TheBureau/>
    <TheMainImg/>
    <TheHeader/>
    <router-view />
</template>

<script>
import TheContainer from '../components/TheContainer.vue'
import TheBureau from '../views/TheBureau.vue'
import TheMainImg from '../views/TheMainImg.vue'
import TheHeader from '../views/TheHeader.vue'
export default {
  components: {
    TheContainer,
    TheBureau,
    TheMainImg,
    TheHeader
  },
};
</script>
<style >
  .wrapper{
    overflow: hidden;
    min-height: 100%;
  }
</style>
