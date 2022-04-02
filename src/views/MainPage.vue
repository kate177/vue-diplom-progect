<template>
  <BlockOne />
  <BlockTwo />
  <Menu />
  <router-view />
</template>

<script>
import BlockOne from "../components/BlockOne.vue";
import BlockTwo from "../components/BlockTwo.vue";
import Menu from "../components/Menu.vue";

export default {
  components: {
    BlockOne,
    BlockTwo,
    Menu,
  },
};
</script>
