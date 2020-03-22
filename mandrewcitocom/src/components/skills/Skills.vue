<template>
  <div class="row">
      <div class="offset-md-3 offset-xs-0 col-md-2 col-xs-12">
          <legend>Frontend</legend>
          <Skill v-for="(element,index) in skillsFrontend" v-bind:key="index" :skill="element"></Skill>
      </div>
      <div class="col-md-2 col-xs-12">
          <legend> Backend</legend>
          <Skill v-for="(element,index) in skillsBackend" v-bind:key="index" :skill="element"></Skill>
      </div>
      <div class="col-md-2 col-xs-12">
          <legend> Other </legend>
          <Skill v-for="(element,index) in skillsOther" v-bind:key="index" :skill="element"></Skill>
      </div>
  </div>
</template>

<script>
import Skill from './Skill'
export default {
  components: {
    Skill
  },
  data () {
    return {
      skillsBackend: [
        {
          name: 'python',
          level: 90
        },
        {
          name: 'C#',
          level: 90
        },
        {
          name: 'Java',
          level: 60
        },
        {
          name: 'C++',
          level: 50
        },
        {
          name: 'Php',
          level: 40
        },
        {
          name: 'R / Matlab',
          level: 30
        }
      ],
      skillsFrontend: [
        {
          name: 'html',
          level: 90
        },
        {
          name: 'css',
          level: 50
        },
        {
          name: 'Javascript',
          level: 90
        },
        {
          name: 'vue',
          level: 80
        },
        {
          name: 'Angular',
          level: 60
        },
        {
          name: 'React',
          level: 50
        }
      ],
      skillsOther: [
        {
          name: 'bash',
          level: 60
        },
        {
          name: 'powershell',
          level: 30
        },
        {
          name: 'awk',
          level: 60
        },
        {
          name: 'SQL',
          level: 80
        },
        {
          name: 'No-SQL',
          level: 60
        },
        {
          name: 'Containers',
          level: 90
        }
      ]
    }
  }
}
</script>

<style>

</style>
