# Vue notes
> ## 1. Cài đặt
---
```bash
- Cần cài đặt nodejs đầu tiên
- npm sẽ được tích hợp cài sẵn khi cài nodejs
- npm install vue
- npm install --global vue-cli
- npm run dev
```
> ## 2. Vue syntax and directives
---
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
> ## 3. Vue components and lifeCycle Hooks
---
> ### 3.1 Component
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
> ### 3.2 Data component
Cách khai báo thứ 1 và 2 là như nhau, việc dùng `return` để trả về một thuộc tính sẽ có tác dụng mỗi khi một một instance được gọi nó sẽ trả về một data khác nhau vì vậy mà khi các component được sử dụng lại ở nhiều nơi thì nếu một chỗ thay đổi thuộc tính thì những chỗ khác không bị thay đổi cùng.

Cách khai báo thuộc tính thứ 3 sẽ làm cho việc thay đổi thuộc tính của một component trong nhiều nơi khác nhau thay đổi cùng nhau.
``` js
- Data chứa các các thuộc tính của một component:
- Ta có 3 kiểu khai báo data như bên dưới:
    data: function () {
        return { msg: "Say hello" }
    },

    data() {
        return { msg: "Say hello" }
    },

    data: {msg: "Say hello" },
```
> ### 3.3 LifeCycle Hooks
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

> ## 4. Vue props and $emit
---
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
> ## 5. Vue-router
---
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
> ## 6. Vuex
---
Khi project trở nên lớn hơn thì các component lồng nhau nhiều hơn và việc chia sẻ dữ liệu trên các component sẽ trở nên rất khó. Sử dụng `vuex` để thực hiện chia sẻ chung các `state` trên các component. Vuex sử dụng duy nhất một cây trạng thái để lưu trữ trạng thái và chia sẻ trên các component.
```js
- Cấu trúc của store:
    - State: Trạng thái cần lưu trữ
    - Getters: Filter state trước khi lấy
    - Mutations: Nơi duy nhất thực hiện `update` thay đổi state.
    - actions: Nơi thưc hiện  `commit` thay đổi dữ liệu từ `mutations`
- Data flow:
    - Component gọi `actions` để thay đổi dữ liệu thông qua `dispatch`, `actions` được gọi sẽ thực hiện `commit` của `mutations` tương ứng, `mutations` sẽ thực hiện `update` dữ liệu trên state đã được khai báo
    - Cần tới `actions` để thực hiện `commit` thay đổi dữ liệu là vì các hoạt động bất đồng bộ trên ứng dụng nên khi các hoạt động của ứng dụng hoàn tất ta mới thực hiện commit thay đổi dữ liệu.
```
```js
// file .js vuex tuto
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

- state:
    const state = { count: [1, 2, 3, 4, 5] }

- getters:
    const getters = {
        show(state) {
            return function(val) {
                 // do something with val
                return something;
            }
        }
    }

- mutations:
    mutations = {
        increment(state, params) { state.count.push(params) }
    }

- actions:
    actions = {
        increment({commit}, params) { commit('increment', params) }
    }

export default new Vuex.Store({state, getters, mutations, actions})

- component:
    methods: {
        HandleIncrement(params) {
            return this.$store.dispatch('increment', params)
        },
        // truyền tham số vào getters
        ShowGetters(params) {
            return this.$store.getters['Name_modules/name_getters'](params)
        }
    },
```
```js
- Cấu trúc của module:
    - Khi dự án trở nên lớn hơn `state` được chia sẻ trên các `component` cũng lớn theo, vì vậy để dễ dàng quản lý các `state` vuex cung cấp chức năng modules để chúng ta chia các `state` theo các nhóm khác nhau.
    - `namespaced: true`: Được sử dụng khi trên các nhóm có các `actions` cùng tên nhau.
```
```js
// file name_modules.js
export default {namespaced: true, state, getters, mutations, actions}

// file index.js
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({modules: {tuto: tutorial, otuto: otherTutorial}})

// file components
methods: {
    HandleIncrement() {
        return this.$store.dispatch('Name_modules/actions')
    },
},
```
> ## 7. Filters
---
Filter (bộ lọc) được vuejs sử dụng để format các kiểu dữ liệu thường gặp trong project trước khi render ra view.
```js
// khai báo thông thường
// in /filters/index.js
export default {
    addDoubleZero: val => val + '00',
    formatCurrency: (val, str) => val + str,
}

// in main.js
import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

// use
<p>{{ name | addDoubleZero }}</p>
<p>{{ price | formatCurrency('VNĐ') }}</p>
```
Tham số đầu tiên sẽ tự động được pass vào `filter`, vd: `price | formatCurrency('VNĐ')` trong đó `formatCurrency: (val, str)` nên price được auto pass vào tham số `val` của hàm formatCurrency
