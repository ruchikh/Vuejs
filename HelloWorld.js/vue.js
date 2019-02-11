
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'You loaded this page on' + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: '#app3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
		{text: "Learn JavaScript"},
		{text: "Learn Vue"},
		{text: "Build something awesome"}
		]
	}
})

var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Hello Vue!'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7= new Vue({
	el: '#app7',
	data: {
		groceryList: [
		{ id:0, text:'Vegetable' },
		{	id:1, text: 'Cheese'},
		{ id:2, text: 'Whatever else humans are suppose to eat' }
			]
	}
})


var app8 = new Vue({
  el: '#app8',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json()).then(data => {this.info = data.bpi})
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})

// Tdodo component

Vue.component('todo-item', {
	template: `\ 
	<li>\ {{title}}\
	<button v-on:click="$emit(\'remove\')">Remove</button>\
	</li>\ `, 
	props: ['title']
})


new Vue({
	el:"#todo-list",
	data: {
		newTodoText: "",
		todos: [{
			id: 1,
			title: "Do this Dishes"
		},
		{
			id: 2,
			title: "Do this Work"
		}],
		newTodoId: 4
	},
	methods: {
		addNewTodo: function(){
			this.todos.push({
				id: this.newTodoId++,
				title: this.newTodoText
			})
			this.newTodoText = ""
		},

		removeAll(){
			this.todos = []
		}
	}
})


var app9 = new Vue({
	el:"#app9",
	data: {
		product: 'Baby Pic',
		image: './assets/download.jpeg',
		inStock: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		sizes: ["X", "XS", "M", "L"].join(','),
		cart: 0

	}
})

