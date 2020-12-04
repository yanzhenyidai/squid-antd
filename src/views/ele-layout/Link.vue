<!--<template>-->
<!--  <component :is="type" v-bind="linkProps(to)">-->
<!--    <slot />-->
<!--  </component>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    to: {-->
<!--      type: String,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    isExternal() {-->
<!--      return this.isExternalM(this.to)-->
<!--    },-->
<!--    type() {-->
<!--      if (this.isExternalM) {-->
<!--        return 'a'-->
<!--      }-->
<!--      return 'router-link'-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    isExternalM(path){-->
<!--      return /^(https?:|mailto:|tel:)/.test(path)-->
<!--    },-->
<!--    linkProps(to) {-->
<!--      if (this.isExternalM) {-->
<!--        return {-->
<!--          href: to,-->
<!--          target: '_blank',-->
<!--          rel: 'noopener'-->
<!--        }-->
<!--      }-->
<!--      return {-->
<!--        to: to-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
