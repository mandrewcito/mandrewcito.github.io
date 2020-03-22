<template>
<a :href="item.url">
    <div class="row">
        <div class="col-lg-2 col-md-2">
            <img :src="item.favicon" alt="favicon" class="mr-3" width="20" height="20"></div> <div class="col-lg-4 col-md-4">
            <span>{{item.name}}</span>
        </div>
        <div class="col-lg-3 col-md-3">
            <span v-for="(tag,index) in item.tags" v-bind:key="index" class="m-1 badge badge-secondary">{{tag}}</span>
        </div>
        <div class="col-lg-1 col-md-1">
            <span v-if="item.owner">{{item.owner}}</span>
        </div>
    </div>
</a>
</template>

<script>
export default {
  props: {
    item: undefined
  }
}
</script>

<style>

</style>
