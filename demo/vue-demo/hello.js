var app1 = new Vue({
    el: "#app1",
    // 放置数据
    data: {
        book: {
            id: 0,
            name: '',
            anthor: '',
            price: ''
        },
        books: [{
                id: "1",
                name: "西游记",
                anthor: "梁嘉裕",
                price: "30"
            },
            {
                id: "2",
                name: "红楼梦",
                anthor: "梁嘉裕",
                price: "40"
            },
            {
                id: "3",
                name: "三国演义",
                anthor: "梁嘉裕",
                price: "35"
            },
            {
                id: "4",
                name: "水浒传",
                anthor: "梁嘉裕",
                price: "20"
            }
        ]
    },
    // 放置方法
    methods: {
        addBook: function() {
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            this.book = {
                id: 0,
                name: '',
                anthor: '',
                price: ''
            };
        },
        delBook: function(index) {
            this.books.splice(index, 1);
        }
    },
    // 计算属性
    computed: {
        sumBook: function() {
            var sum = 0;
            for (var i = 0; i < this.books.length; i++) {
                sum += Math.floor(this.books[i].price);
            }
            return sum;
        }
    }
});
