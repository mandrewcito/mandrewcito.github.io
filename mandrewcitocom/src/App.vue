<template>
  <div id="app">

    <div class="row nav-container">
              <!--  <div class="col-md-2" style="  padding: 30px;">
        <span class="badge badge-warning">Website under construction</span>
      </div>

      <div id="nav" class="col-md-8">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/utilities">Utilities</router-link>
      </div> -->
    </div>
      <div class="row app-container">
        <div class="col-12">
            <router-view/>
        </div>
        <div id="mediaButtons" class=".d-none col-1">
          <MediaLinksComponent></MediaLinksComponent>
        </div>
    </div>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">
          @mandrewcito website built with <a href="//vuejs.org">Vue</a> and <a href="//getbootstrap.com/docs/4.0">Bootstrap </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import MediaLinksComponent from './components/MediaLinksComponent'
import notificationService from './notificationService'
export default {
  name: 'App',
  components: {
    MediaLinksComponent
  },
  props: {
    msg: String
  },
  created: function () {
    Object.keys(notificationService.types).forEach(
      (key) => this.$root.$on(
        notificationService.types[key],
        (payload) => notificationService.notify({ ...{ type: notificationService.types[key] }, ...payload })))
  }
}
</script>

<style lang="less">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
body {
  background-color: #f7dbe7;
}
.nav-container {
  min-height: 10px;
  width: 100%;
}
/*
Colores
#f75197
247, 81, 151
#eaf751
234, 247, 81
#51f7b1
81, 247, 177
#5e51f7
94, 81, 247
 */
#mediaButtons {
  position:absolute;
  right: 0px;
  top: 50px;
  height: 60vh;
  z-index: 100;
}
@media only screen and (max-width: 600px) {
  #mediaButtons {
    display: none
  }
}
.app-container {
  height: 96vh;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
  display:flex;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: black;
    &.router-link-exact-active {
      color: grey;
    }
  }
  a + a {
    margin-right: 10px;
  }
}
</style>
