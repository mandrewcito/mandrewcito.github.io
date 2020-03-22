<template>
  <ul v-if="items.length" class="list-group">
    <li v-for="(item, index) in items" v-bind:key="index" class="list-group-item">
       <slot :item="item"></slot>
    </li>
  </ul>
  <p v-else>This view has no items.</p>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style>

</style>
