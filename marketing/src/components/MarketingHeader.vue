<template>
  <div style="width: 100%; padding: 10px; background: #f5f5f5; border: 1px solid #ccc;">
    <h2>📣 Marketing Header (Vue)</h2>
  </div>
</template>

<script lang="ts">
import { defineCustomElement } from 'vue';

export default defineCustomElement({
  name: 'marketing-header',
  styles: [],
  render() {
    return this.$slots.default?.() || [];
  }
});
</script>