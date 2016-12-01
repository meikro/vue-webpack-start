<template>
    <div>
        <table class="table">
            <tr v-for="book in tasks">
                <td>{{book.id}}</td>
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.price}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data: {
            tasks: [] //为空，可以是null
        },
        ready: function () {
            this.getCustomers()
        },
        methods: {
            getCustomers: function () {
                var _self = this;
                this.$http.get('./src/books.json')
                        .then((response) => {
                            _self.$set('tasks', response.data)
                        })
                        .catch(function (response) {
                            console.log(response)
                        })
            }
        }
    }
</script>