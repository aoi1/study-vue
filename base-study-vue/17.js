new Vue({
  el: '#app',
  data: {
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vuew.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
  watch: {
    current: function(val) {
      axios.get('http://api.github.com/search/repositories', {
        params: { q: 'topic:' + val }
      }).then(function(response) {
        this.list = response.data.items
      }.bind(this))
    }
  },
})
