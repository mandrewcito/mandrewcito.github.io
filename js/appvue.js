var app = new Vue({
    el: '#app',
    data: {
      links: [],
      query: "",
      ownProjects: undefined,
      linksFiltered: []
    },
    methods:{
        filterLinks: function(){
            var value = this.query;
            if (value.length == 0){
                this.linksFiltered = this.links;
            }else{
                var normalized = value.toLowerCase();
                this.linksFiltered = this.links.filter(function(link){
                    return link.name.toLowerCase().indexOf(normalized) !== -1 ||
                        link.tags.indexOf(normalized) !== -1
                });
            }
            if (this.ownProjects !== undefined){
                if(this.ownProjects){
                    this.linksFiltered = this.linksFiltered.filter(function(ele){
                        return ele.owner === "mandrewcito";
                    });
                }
            }
        }
    },
    mounted: function() {
        var self = this;
        axios
            .get("data/links.json")
            .then(function(response){
                self.links = response.data.links;
                self.linksFiltered = self.links;
            });
    },
    watch:{
        query: function(value) {
            this.filterLinks();
        },
        ownProjects: function(value){
            this.filterLinks();
        }
    }
  });