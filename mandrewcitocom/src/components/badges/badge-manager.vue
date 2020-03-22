<template>
<div rel="badgeContainer" role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false">
   <div class="toast-header">
      <img src="" class="rounded mr-2" alt="">
      <strong class="mr-auto">{{title}}</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <div class="toast-body">
    {{message}}
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      notifications: [],
      title: '',
      message: ''
    }
  },
  created () {
    this.$root.$on('DATA_PUBLISHED', (payload) => {
      this.title = payload.title
      this.message = payload.message
      this.$refs.badgeContainer.toast({
        autohide: true,
        delay: 2000
      })
    })
  }
}
</script>

<style>

</style>
