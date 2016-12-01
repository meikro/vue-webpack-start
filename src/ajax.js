/**
 * Created by Me1kro on 16/12/1.
 */
import vueResource from 'vue-resource'
var demo = new Vue({
    el: '#book',
    data: {
        gridColumns: ['id', 'author', 'name', 'price'],
        gridData: [],
        apiUrl: './books.json'
    },
    ready: function() {
        this.getCustomers()
    },
    methods: {
        getCustomers: function() {
            this.$http.get(this.apiUrl)
                .then((response) => {
                    this.$set('gridData', response.data)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
});