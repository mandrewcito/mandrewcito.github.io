<template>
  <div class="row">
    <div class="col-md-12">
      <div class="from-group">
        <div class="row">
          <div class="offset-md-3 col-lg-3 col-md-3">
            <div class="mt-0">
              <input type="text" placeholder="Search" aria-label="Search" class="form-control" v-model="query">
            </div>
          </div>
        <div class="col-lg-3 col-md-3  md-form ">
          <div class="custom-switch">
            <input type="checkbox" id="customSwitches" class="custom-control-input" v-model="ownProjects">
              <label for="customSwitches" class="custom-control-label">Only mandrewcito's projects</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top:15px;">
        <div class="offset-md-1 col-lg-10 col-md-10">
          <ListContainer :items="linksFiltered">
            <LinkItem slot-scope="row" :item="row.item"></LinkItem>
          </ListContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ListContainer from '../components/common/ListContainer'
import LinkItem from '../components/utilities/LinkItem'
export default {
  components: {
    ListContainer,
    LinkItem
  },
  data () {
    return {
      links: [],
      query: '',
      ownProjects: undefined,
      linksFiltered: []
    }
  },
  methods: {
    filterLinks: function () {
      var value = this.query
      if (value.length === 0) {
        this.linksFiltered = this.links
      } else {
        var normalized = value.toLowerCase()
        this.linksFiltered = this.links.filter(function (link) {
          return link.name.toLowerCase().indexOf(normalized) !== -1 ||
            link.tags.indexOf(normalized) !== -1
        })
      }
      if (this.ownProjects !== undefined) {
        if (this.ownProjects) {
          this.linksFiltered = this.linksFiltered.filter(function (ele) {
            return ele.owner === 'mandrewcito'
          })
        }
      }
    }
  },
  mounted: function () {
    var self = this
    axios
      .get('data/links.json')
      .then(function (response) {
        self.links = response.data.links
        self.linksFiltered = self.links
      })
  },
  watch: {
    query: function (value) {
      this.filterLinks()
    },
    ownProjects: function (value) {
      this.filterLinks()
    }
  }
}
</script>

<style>

</style>
