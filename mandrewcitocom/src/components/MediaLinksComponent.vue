<template>
  <div class="text-center">
    <div class="link-container" v-for="link in links" v-bind:key="link.id">
      <a :href="link.link" v-bind:class="'btn fa-'+ link.icon[1]"  :ref="'container' + link.id" >
      <font-awesome-icon :icon="link.icon" size="3x" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaLinksComponents',
  props: {
    msg: String
  },
  data: function () {
    return {
      pressedKeys: [],
      konami: [38, 38, 40, 40, 37, 39, 37, 39, 65, 66],
      timeout: undefined,
      links: [
        {
          id: 0,
          icon: ['fab', 'github'],
          link: 'https://github.com/mandrewcito'
        },
        {
          id: 1,
          icon: ['fab', 'dev'],
          link: 'https://dev.to/mandrewcito/'
        },
        {
          id: 2,
          icon: ['fab', 'stack-overflow'],
          link: 'https://stackoverflow.com/users/6228583/mandrewcito'
        },
        {
          id: 4,
          icon: ['fab', 'codepen'],
          link: 'https://codepen.io/mandrewcito'
        },
        {
          id: 7,
          icon: ['fab', 'twitter'],
          link: 'https://twitter.com/Mandrewcito'
        },
        {
          id: 5,
          icon: ['fas', 'envelope'],
          link: 'mailto:anbaalo@gmail.com'
        },
        {
          id: 3,
          icon: ['fab', 'linkedin'],
          link: 'https://es.linkedin.com/in/anbaalo'
        },
        {
          id: 6,
          icon: ['fab', 'instagram'],
          link: 'https://www.instagram.com/mandriltrompetero/'
        }
      ]
    }
  },
  created: function () {
    var self = this
    var run = () => {
      this.links.forEach(link => {
        var elemDom = self.$refs['container' + link.id][0]
        elemDom.className += ' fa-spin'
        setTimeout(function (element) { element.className = element.className.replace('fa-spin', '') }, 4000, elemDom)
      })
    }
    document.addEventListener('keyup', (e) => {
      this.pressedKeys.push(e.keyCode)
      clearTimeout(this.timeout)
      this.timeout = setTimeout((self) => { self.pressedKeys = [] }, 2000, this)
      if (JSON.stringify(this.pressedKeys) === JSON.stringify(this.konami)) {
        run()
      }
    })
    this.$root.$on('KONAMI', () => {
      run()
    })
    this.$root.$on('suffle', () => {
      var a = this.links[0]
      this.links.splice(0, 1)
      setTimeout((element) => this.links.push(element), 500, a)
      // this.links.push(a)
    })
  }
}
</script>
<style scoped lang="less">
ul {
  list-style-type: none;
}

a.btn {
  color: white;
}

.fa {
  padding: 5px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin-top: 5px;
}

a.fa-envelope, a.fa-stack-overflow, a.fa-instagram, a.fa-twitter, a.fa-linkedin,
a.fa-dev, a.fa-github, a.fa-codepen {
  width: 100%;
  margin-bottom: 0px;
  border-radius: 0px;
}

.link-container:hover {
    opacity: 0.7;
}
.fa-envelope {
 background-color: red;
}
.fa-stack-overflow {
  background-color:orange;
}
.fa-instagram {
  background-color:pink;
}

.fa-twitter {
  background-color:blueviolet;
}

.fa-linkedin {
  background-color:#0073b1;
}

.fa-dev {
  background-color:black;
}
.fa-github {
  background-color: cadetblue;
}

.fa-codepen {
  background-color:black;
}

</style>
