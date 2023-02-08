<template>
  <div class="dialog" v-if="show" @click.stop="hidePopup">
    <div class="main-form" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>

import toggleMixin from '@/mixins/toggleMixin'
export default {
  name: 'my-popup',
  mixins: [toggleMixin]
}
</script>

<style scoped>
div.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.main-form {
  width: 450px;
  margin: 10% auto;
  padding: 10px 20px;
  border-radius: 10px; 
  background: #009edf;
  color: #FFF;
}
</style>