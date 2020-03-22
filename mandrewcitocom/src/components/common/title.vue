<template>
  <div>
    <h3> {{title}}</h3>
    <h4>{{subtitle}}</h4>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>
