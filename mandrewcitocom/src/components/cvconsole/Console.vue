<template>
<div  v-on:click="onClickContainer" id="terminal">
    <div class="text-left terminal terminal-content">
        <div>
            <div class="col-12" v-for="(command, index) in outputs" v-bind:key="index">
                {{command.length > 0 ? command : ' '}}
            </div>
            <div id="divinput" class="input-terminal col-12">
                {{this.cmd}}
                  <input ref="terminal" type="text" v-model="command" v-on:keyup="onKeyup"  style="width: 70%"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      cmd: 'guest@mandrewcito.com:~$ ',
      command: '',
      outputs: []
    }
  },
  mounted: function () {
    this.$refs.terminal.focus()
  },
  methods: {
    onKeyup: function (event) {
      if (event.keyCode === 13) {
        if (this.command === '') {
          this.outputs.push(this.cmd)
        } else {
          for (var element of this.proccessCommand(this.command)) {
            this.outputs.push(element)
          }
        }
        this.command = ''
        setTimeout(function (element, scroll) {
          element.scrollIntoView()
        }, 50, this.$refs.terminal)
      }
    },
    proccessCommand: function (command) {
      var params = command.split(' ').splice(1)
      command = command.split(' ')[0]
      var result = [this.cmd + command]
      var self = this
      var commands = {
        help: {
          description: 'print this menu',
          action: function () {
            var result = []
            for (var command in commands) {
              result.push(' - ' + command + ': ' + commands[command].description)
            }
            return result
          }
        },
        cls: {
          description: 'clear screen',
          action: () => {
            this.outputs = []
            this.command = ''
          }
        },
        projects: {
          description: 'a tiny link list of my projects',
          action: function () {
            return [
              'signalrcore: signalr core python client',
              'json_repository: python library that simplfies store json entities',
              'event_channel: tiny pub-sub implementation']
          }
        },
        whoami: {
          description: 'Website description',
          action: function () {
            return [
              'You are a visitor on mandrewcito´s personal website',
              '+ Who is mandrewcito?',
              '- mandrewcito aka Andrés baamonde lozano is a software developer living in A Coruña. Currently working at Balidea ']
          }
        },
        konami: {
          description: 'send konami code to media links component',
          action: () => {
            this.$root.$emit('KONAMI', {
              title: ' Notification title',
              message: 'notification message'
            })
            return ['konami code sended!']
          }
        },
        suffle: {
          description: 'suffle links',
          action: () => {
            this.$root.$emit('suffle', {
            })
            return ['suffle!']
          }
        },
        notify: {
          description: 'notify [type:error] [message]',
          action: (params) => {
            var payload = {
              type: params[0] === undefined ? 'error' : params[0],
              title: 'funny notifications ! ',
              message: params[0] === undefined ? 'default message' : params.splice(1).join(' ')
            }
            self.$root.$emit(payload.type, payload)
            return ['notification sended']
          }
        },
        contact: {
          description: 'display contact section',
          action: function () {
            return [
              'my social media are there     ===>',
              'you can also mail me: anbaalo@gmail.com']
          }
        }
      }
      if (Object.keys(commands).indexOf(command) === -1) {
        result.push(command + ' : command not found, type help for more info')
      } else {
        for (var element of commands[command].action(params)) {
          result.push(element)
        }
      }
      return result
    },
    onClickContainer: function () {
      this.$refs.terminal.focus()
    }
  }
}
</script>

<style scoped lang="less">
textarea:focus, input:focus{
    outline: none;
}
.mini-terminal {
  bottom: 0;
  z-index: 11;
  right: 30px;
}
input[type="text"] {
  border: 0px;
}
.terminal {
  height: 85vh;
  overflow-y: auto;
  background-color:white;
  font-family: 'UnifontMedium';
  font-weight: normal;
  font-style: normal;
}
.console-background {
  background-color: black;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75), black 120%
  );
  height: 50vh;
  margin: 0;
  overflow: hidden;
  padding: 2rem;
  color: white;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 5px #C8C8C8;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 0.15),
      rgba(black, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
}
::selection {
  background: #0080FF;
  text-shadow: none;
}
</style>
