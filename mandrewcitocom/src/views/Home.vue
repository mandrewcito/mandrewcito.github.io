<template>
  <div class="container">
    <Console id="consoleComponent" />
  </div>
  </template>

<script>

import Console from '@/components/cvconsole/Console.vue'

export default {
  name: 'Home',
  components: {
    Console
  }
}
</script>
<style scoped>
#consoleComponent {
  top: 100px;
}

@media only screen and (max-width: 600px) {
  #consoleComponent {
    display: none
  }
}
.container {
  min-height: 80vh;
}
</style>
