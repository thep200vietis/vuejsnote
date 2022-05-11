# Vue notes
> ## 1. Cài đặt
```bash
- Cần cài đặt nodejs đầu tiên
- npm sẽ được tích hợp cài sẵn khi cài nodejs
- npm install vue
- npm install --global vue-cli
- npm run dev
```
> ## 2. Vue syntax and directives
``` ts
- el: '#app'               : Mount với một Dom có id là app
- v-bind:attribute="value" : Gán giá trị cho thuộc tính attribute của element
- v-bind:attribute="value" ~ :attribute="value" (viết tắt)

- v-on:event="function"            : Gán một một hàm thực thi khi event được gọi
- v-on:event="function"            ~ @event="funciton" (viết tắt)
- v-on:event.prevent | stop | self | capture | once | passive ="function" 
- v-on:keyup.keyoard="function"	   : Gán một một hàm thực thi khi event keyboard
- Các event mặc định trong html khi sử dụng với v-on sẽ bị loại bỏ chữ `on` đầu tiên.

- v-model="value"          : Gán giá trị cho thuộc tính 2 chiều của element
- v-model.lazy="value"     : Đợi hoàn tất thì mới thay đổi giá trị trên chiều dữ liệu còn lại 
- v-model.number="value"   : Gán giá trị là dạng số
- v-model.trim="value"     : Gán giá trị là dạng string và loại bỏ khoảng trắng đầu và cuối
- Sử dụng `v-model` để đồng bộ dữ liệu 2 chiều trong các tag html như checkbox, radio, input, textarea, .... Có thể đồng bộ sử dụng với các thuộc tính trong data của component.

- v-for="(item, index) in list"     : Duyệt qua một list các giá trị, `index` là mặc định.
- v-for="(value, key) in myObject"  : Duyệt qua một object
- `v-for` được ưu tiên xử lý trước `v-if` khi render

- v-html="value"             : In ra value như html
- v-if="condition"         : Khi condition là true thì element sẽ được render
- v-else-if
- v-else                            : Khi condition là false thì element không được render
- v-show="condition"	            : Khi condition là true thì element sẽ không bị gán `display=none`
```
> ## Vue components and lifeCycle Hooks
### Component
Được tạo ra nhằm mục đích giảm tối thiểu việc lặp code. Vuejs sử dụng component để tổ chức project. Các component sẽ được tạo ra, gọi tới và render ra màn hình khi vue cần đến chúng. Việc tạo ra và gọi lúc nào là việc của dev.
``` js
- Cấu trúc của một component trong file .vue
	- template: chứa view của component
	- script: chứa logic của component 
	<template></template>
	<script>
	export default {
		name: 'HelloWorld',
		data: function () {
				return {
				msg: "Say hello",
			}
		},
	}
	</script>
```
Sau khi một component được tạo chúng ta nhúng chúng vào trong file bằng cách tạo vue instance và khai báo component trong đó, việc cuối cùng `mount` với `DOM` để render ra màn hình.
``` js
- Component được khai báo trong Vue instance
	new Vue({
		el: '#app',
		router,
		components: { App },
		template: '<App/>'
	})
```
Trên đây là cách phổ biến nhất khi làm việc với vuejs khi chúng ta build nguyên một cấu trúc project của vue bằng `npm`. Ngoài ra vẫn còn một số cách sử dụng trực tiếp khác như:
``` js
- Tạo một component và khai báo cục bộ component đó:
	Vue.component('HelloWorld', {
		template: '<h1>Hello World</h1>'
	})

- Tạo một component và khai báo toàn cục component đó:
	var com = Vue.component('HelloWorld', {
			template: '<h1>Hello World</h1>'
```
### Data component
Cách khai báo thứ 1 và 2 là như nhau, việc dùng `return` để trả về một thuộc tính sẽ có tác dụng mỗi khi một một instance được gọi nó sẽ trả về một data khác nhau vì vậy mà khi các component được sử dụng lại ở nhiều nơi thì nếu một chỗ thay đổi thuộc tính thì những chỗ khác không bị thay đổi cùng.

Cách khai báo thuộc tính thứ 3 sẽ làm cho việc thay đổi thuộc tính của một component trong nhiều nơi khác nhau thay đổi cùng nhau.
``` js
- Data chứa các các thuộc tính của một component:
- Ta có 3 kiểu khai báo data như bên dưới:
	data: function () {
			return {
			msg: "Say hello",
		}
	},

	data() {
			return {
			msg: "Say hello",
		}
	},

	data: {
		msg: "Say hello",
	},
```
### LifeCycle Hooks
``` js
- init
	- beforeCreate()   : Chạy khi init một instance, lúc này data và event vẫn chưa được thiết lập
	- created()        : Lúc này data và event đã được thiết lập

- Link to DOM
	- beforeMount()    : Chạy khi data và event đã thiết lập tuy nhiên vẫn chưa gắn vào DOM
	- mounted()        : Chạy khi data và event đã thiết lập và gắn vào DOM

- Update
	- beforeUpdate()   : Chạy ngay sau khi đối tượng đã được gắn vào Dom và trước khi rendrr ra màn hình
	- updated()        : Chạy ngay sau beforeUpdate()
	- Dữ liệu ở beforeUpdate() và Updated() là như nhau

- Destroy
	- beforeDestroy()  : Trước khi hủy một instance
	- destroyed()      : Lúc này insrtance đã bị hủy
```

> ## Vue props and $emit
Props được sử dụng để truyền dữ liệu từ component cha xuống component con, $emit được sử dụng cho mục đích ngược lại.
``` js
- Props:
	- Thực hiện truyền biến `username` từ component cha sang component con
	- Lưu ý `v-bind:user-name="userName"` chuyển tên biến sang kebard-case
	- Parent component:
		Vue.component('parent-component', {
            template: '#parent',
            data: function() {
                return {
                    userName: 'Thep',
                }
            },
        });
	- Phild component:
		Vue.component('child-component', {
            template: '#child',
            data: function() {
                return {
                    message: 'Hello there',
                }
            },
            props: ['userName'],
        });
	- Render:
		<child-component v-bind:user-name="userName"></child-component>
```
``` js
- $emit:
	- Component con gửi dữ liệu sang component cha thông qua việc phát đi một event `$emit` kèm theo dữ liệu.
	- Parent component:
		Vue.component('parent-component', {
            template: '#parent',
            data: function() {
                return {
                    userName: 'Thep',
                }
            },
            methods: {
                changeUsername: function(val) {
                    this.userName = val
                }
            },
        });
	- Child component:
		 Vue.component('child-form-component', {
            template: '#child-form',

            data: function() {
                return {
                    name: this.userName,
                }
            },
            props: ['userName'],
            methods: {
                onEnterNew: function(event) {
                    this.$emit('pass-to-parent', this.name);
                },
            }
        })
	- Render:
		<input type="text" v-model="name" v-on:input="onEnterNew">
		<child-form-component v-on:pass-to-parent="changeUsername"></child-form-component>
```
> ## Vue Router
- **Note:** vuejs sẽ auto option việc cài đặt vue-route, folder mặc định của nó khi init là route và file index.js
- Build các route và tạo instance cho route rồi sau đó sử dụng vue instance vào file main.js
``` js
- Tạo một instance cho route
	- `export default new Router({ routes }) `
- router instance được khai báo trong vue instance như sau:
	new Vue({
		el: '#app',
		router,
		components: { App },
		template: '<App/>'
	})
```
``` js
- Cấu trúc của một route
	- `{path: '/home/:id', name:'home.route', component: Home}`
	- path: set directive cho route
	- name: tên của route
	- :id: tham số truyền vào route
	- component: đối tượng component để render (nhớ import file component vào file nơi mình khai báo và đăng ký route)
```
``` vue
- Sử dụng route
	- sử dụng tag route-link để render link
	- `<router-link v-bind:to="{name: 'user', params: {id: 4}}">user</router-link>`
```
> ## Vuex

