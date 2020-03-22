<template>
<div class="skill-container">
    <label>{{skill.name}}</label>
    <font-awesome-icon :icon="skill.icon" size="1x" />
    <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar"
          :style="'width: ' + level + '%'" :aria-valuenow="level" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    skill: {
      name: String,
      level: Number,
      icon: String
    }
  },
  data () {
    return {
      level: 0,
      increment: 1
    }
  },
  methods: {
    makeIncrement: function () {
      if (this.level <= this.skill.level) {
        this.level += this.increment
        setTimeout(() => this.makeIncrement(), 50)
      }
    }
  },
  mounted: function () {
    this.makeIncrement()
  }
}
</script>
