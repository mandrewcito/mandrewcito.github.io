<template>
  <div class="row">
    <div class="col-12">
        <DraggableDiv id="dragDiv" class="col-11">
          <template slot="header">
            <div v-bind:class="{ 'd-none': hidden }" >
              <div class="wc-box d-flex justify-content-end">
                <div class="minimize pull-right" v-on:click="hidden = true"></div>
                <div class="maximize pull-right"></div>
                <div class="close pull-right"></div>
              </div>
            </div>
          </template>
            <template slot="main" >
              <Console v-bind:class="{ 'd-none': hidden }" ></Console>
            </template>
            <template slot="footer">
            </template>
        </DraggableDiv>
        <div v-bind:class="{ 'd-none': !hidden }" class="animated bounce">
          <div class="sticky-bottom position-absolute mini-terminal">
            <div class="wc-box d-flex justify-content-end">
                <div class="minimize pull-right" v-on:click="hidden = true"></div>
                <div class="maximize pull-right" v-on:click="hidden = false"></div>
                <div class="close pull-right"></div>
            </div>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import DraggableDiv from '../DraggableDiv'
import Console from './Console'
export default {
  components: {
    DraggableDiv,
    Console
  },
  name: 'DraggableConsole',
  props: {
    msg: String
  },
  data: function () {
    return {
      hidden: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wc-box {
  background-color: black;
}

.wc-box div {
  position: relative;
  float: left;
  width: 30px;
  height: 30px;
}

.wc-box div:before,
.wc-box div:after {
  top: 30%;
  right: 30%;
  bottom: 30%;
  left: 30%;
  content: " ";
  position: absolute;
  border-color: #CCCCCC;
  border-style: solid;
  border-width: 0 0 2px 0;
}

.wc-box .minimize:before {
  border-bottom-width: 2px;
}

.wc-box .maximize:before {
  border-width: 1px 1px 2px 1px;
}

.wc-box .close:before,
.wc-box .close:after {
  bottom: 50%;
  top: 50%;
}

.wc-box .close:before {
  transform: rotate(45deg);
}

.wc-box .close:after {
  transform: rotate(-45deg);
}

.wc-box div:hover {
  background-color: #CCCCCC;
}

.wc-box .close:hover {
  background-color: #E04343;
}

.wc-box div:hover:after,
.wc-box div:hover:before {
  border-color: #333333;
}

.wc-box .close:hover:after,
.wc-box .close:hover:before {
  border-color: #FFFFFF;
}

</style>
