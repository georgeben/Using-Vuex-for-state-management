(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Using-Vuex-for-state-management/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("64a9"),a=o.n(r);a.a},2375:function(t,e,o){},"3ca7":function(t,e,o){"use strict";var r=o("7f99"),a=o.n(r);a.a},"53ac":function(t,e,o){"use strict";var r=o("2375"),a=o.n(r);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Navbar"),o("router-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-expand-sm navbar-light "},[o("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Shop Universe")]),t._m(0),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item active"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Admin Login")])],1)])])],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],c=(o("ade2"),o("2877")),u={},d=Object(c["a"])(u,i,s,!1,null,"cd6afece",null),l=d.exports,p={name:"App",components:{Navbar:l}},m=p,f=(o("034f"),Object(c["a"])(m,a,n,!1,null,null,null)),v=f.exports,h=o("8c4f"),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("section",{staticClass:"products"},t._l(t.products,function(t){return o("div",{key:t.id},[o("ProductItem",{staticClass:"product-item",attrs:{product:t}})],1)}),0),o("section",{staticClass:"cart"},[o("ShoppingCart")],1)])},b=[],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item card"},[r("img",{attrs:{src:o("f34a"),alt:"Failed to load image"}}),r("div",{staticClass:"title"},[r("h4",[t._v(t._s(t.product.name))]),r("h5",[t._v("N"+t._s(t.product.price))])]),r("p",[t._v(t._s(t.product.description))]),t.modify?r("div",[r("button",[r("router-link",{staticClass:"edit-link",attrs:{to:"/update/"+t.product.id}},[t._v("Edit")])],1),r("button",{on:{click:t.deleteProduct}},[t._v("Delete")])]):r("button",{staticClass:"btn",on:{click:t.addProductToCart}},[t._v("Add To Cart")])])},y=[],C=(o("7f7f"),o("7514"),[{id:1,name:"Gold Sneakers",description:"Grey and blue sneakers with white sole.",price:3e3,quantity:1},{id:2,name:"Shorts",description:"GNice blue shorts for men.",price:3e3,quantity:1},{id:3,name:"Jacket",description:"Brown gucci jacket with grey lining.",price:3e3,quantity:1}]),P=[{id:1,name:"George Benjamin",email:"msdcconnect@gmail.com",password:"george"}],w={getAllProducts:function(){return C},findItem:function(t){console.log(1,"Finding item with id",t);var e=C.find(function(e){return e.id==t});return console.log("Found it",e),e},addNewProduct:function(t){var e=t.name,o=t.description,r=t.price;console.log("Last product",C[C.length-1]);var a=C[C.length-1].id;C.push({id:++a,name:e,description:o,price:r})},removeProduct:function(t){C.forEach(function(e,o){e.id==t&&C.splice(o,1)})},updateProduct:function(t,e){console.log("New product details",e),console.log("In the shop function",t),C.forEach(function(o,r){o.id==t&&(o=e,console.log("Updated product",o))})},getUserById:function(t){return P.reduce(function(e){return e.id!=t})},getUserByEmail:function(t){return P.reduce(function(e){return e.email!=t})}},x={name:"ProductItem",props:["product","modify"],data:function(){return{error:"",name:this.product.name,description:this.product.description,price:this.product.price}},methods:{addProductToCart:function(){this.$store.commit("addToCart",this.product)},deleteProduct:function(){console.log("About to delete ",this.product.id),this.$store.commit("removeProduct",this.product.id)},finishEditing:function(){if(""!=this.product_name){if(""!=this.product_description)return""==this.product_price?(this.error="Please enter a valid price",void console.log("No price")):void(this.product_price<10?this.error="Price of product cannot be less than 10 naira":(console.log("Hhahah",this.product),this.$store.commit("updateProduct",this.product.id,this.product),console.log("All good, Ready to add")));this.error="Please add product description"}else this.error="Please add product name"}}},I=x,E=(o("3ca7"),Object(c["a"])(I,_,y,!1,null,"19aa7124",null)),k=E.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("h4",[t._v("Your Cart")]),o("p",[t._v("This lists all the items you have chosen to buy.")]),t._l(t.cartItems,function(t){return o("div",{key:t.id},[o("CartItem",{attrs:{item:t}})],1)}),o("p",[t._v("Total: "+t._s(t.cartTotal))]),o("button",{staticClass:"btn",on:{click:t.show}},[t._v("Checkout")])],2)},A=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cart-item"},[t._m(0),o("div",{staticClass:"detail"},[o("h5",[t._v(t._s(t.item.name))]),o("p",[t._v(t._s(t.item.description))]),o("div",{staticClass:"quantity"},[o("label",{attrs:{for:"quantity"}},[t._v("Quantity")]),o("button",{on:{click:t.increaseQuantity}},[t._v("+")]),o("p",[t._v(t._s(t.item.quantity))]),o("button",{on:{click:t.decreaseQuantity}},[t._v("-")])]),o("p",[t._v("N"+t._s(t.item.price))]),o("button",{staticClass:"btn remove-btn",on:{click:t.removeProductFromCart}},[t._v("Remove from cart")])])])},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img"},[r("img",{attrs:{src:o("f34a"),alt:"Failed to load image"}})])}],N={name:"CartItem",props:["item"],methods:{removeProductFromCart:function(){console.log("About to remove",this.item.id),this.$store.commit("removeFromCart",this.item.id)},increaseQuantity:function(){console.log("About to increase by 1"),this.$store.commit("increaseQuantity",this.item.id)},decreaseQuantity:function(){this.item.quantity>1?(console.log("About to decrease by 1"),this.$store.commit("decreaseQuantity",this.item.id)):console.log("Cannot reduce qty any more")}}},q=N,T=(o("b048"),Object(c["a"])(q,O,j,!1,null,"654f7ca5",null)),U=T.exports,M={name:"ShoppingCart",methods:{show:function(){console.log(this.$store.state.cart)}},computed:{cartItems:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.getters.cartTotal}},components:{CartItem:U}},Q=M,F=(o("53ac"),Object(c["a"])(Q,S,A,!1,null,"7e9908b6",null)),L=F.exports,D={name:"home",methods:{},components:{ProductItem:k,ShoppingCart:L},created:function(){this.$store.dispatch("getAllProducts")},computed:{products:function(){return this.$store.state.products}}},B=D,G=(o("cccb"),Object(c["a"])(B,g,b,!1,null,null,null)),H=G.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:t.signInUser}},[o("h5",[t._v("Admin Login")]),o("p",{staticClass:"error"},[t._v(t._s(t.error))]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Sign in")])])},R=[],W=o("f499"),Y=o.n(W),V={name:"Login",data:function(){return{error:"",email:"",password:""}},methods:{signInUser:function(t){t.preventDefault(),console.log(w);var e=w.getUserByEmail(this.email);console.log(e),e?e.password===this.password?(console.log("Successfully logged in"),localStorage.setItem("user",Y()(e)),this.$router.push("/dashboard")):(console.log("Wrong password"),this.error="You entered a wrong password"):(console.log("User does not exist"),console.log("Wrog details"))}}},z=V,K=Object(c["a"])(z,J,R,!1,null,null,null),X=K.exports,Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Welcome "+t._s(t.user.name))]),o("button",{on:{click:t.logOut}},[t._v("Log out")]),o("button",{attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Add product")]),o("button",{on:{click:t.show}},[t._v("Show")]),o("div",{staticClass:"products"},t._l(t.products,function(t){return o("div",{key:t.id},[o("ProductItem",{staticClass:"product-item",attrs:{product:t,modify:!0}})],1)}),0),o("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),o("div",{staticClass:"modal-body"},[o("form",[o("p",{staticClass:"error"},[t._v(t._s(t.error))]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Product name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_name,expression:"product_name"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.product_name},on:{input:function(e){e.target.composing||(t.product_name=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Product description")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_description,expression:"product_description"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1"},domProps:{value:t.product_description},on:{input:function(e){e.target.composing||(t.product_description=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Product price")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_price,expression:"product_price"}],staticClass:"form-control",attrs:{type:"number",id:"exampleInputPassword2"},domProps:{value:t.product_price},on:{input:function(e){e.target.composing||(t.product_price=e.target.value)}}})])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),o("button",{staticClass:"btn delete",attrs:{type:"button"},on:{click:t.addProduct}},[t._v("Add product")])])])])])])},tt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add product")]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],et={name:"Dashboard",data:function(){return{error:"",product_name:"",product_description:"",product_price:""}},methods:{logOut:function(){localStorage.removeItem("user"),this.$router.push("/")},addProduct:function(){if(console.log(this.product_price),""!=this.product_name){if(""!=this.product_description)return""==this.product_price?(this.error="Please enter a valid price",void console.log("No price")):void(this.product_price<10?this.error="Price of product cannot be less than 10 naira":(console.log("All good, Ready to add"),w.addNewProduct({name:this.product_name,description:this.product_description,price:this.product_price,quantity:1}),this.clearInputs(),$("#exampleModal").modal("hide")));this.error="Please add product description"}else this.error="Please add product name"},show:function(){console.log(this.products)},clearInputs:function(){this.product_name="",this.product_description="",this.product_price=""}},computed:{user:function(){return JSON.parse(localStorage.getItem("user"))},products:function(){return this.$store.state.products}},created:function(){this.$store.dispatch("getAllProducts")},components:{ProductItem:k}},ot=et,rt=Object(c["a"])(ot,Z,tt,!1,null,"40d29066",null),at=rt.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("p",{staticClass:"error"},[t._v(t._s(t.error))]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Product name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Product description")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Product price")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"number",id:"exampleInputPassword2"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),o("button",{on:{click:t.submit}},[t._v("Submit")])])},it=[],st={name:"UpdateItem",data:function(){return{error:""}},created:function(){w.findItem(this.$route.params.id),console.log(this.$route.params.id)},computed:{product:function(){return w.findItem(this.$route.params.id)}},methods:{submit:function(t){t.preventDefault(),console.log(this.product),this.$store.commit("updateProduct",this.product.id,this.product),this.$router.push("/dashboard")}}},ct=st,ut=Object(c["a"])(ct,nt,it,!1,null,null,null),dt=ut.exports;r["a"].use(h["a"]);var lt=new h["a"]({mode:"history",routes:[{path:"/",name:"home",component:H},{path:"/login",name:"Login",component:X,meta:{guest:!0}},{path:"/dashboard",name:"Dashboard",component:at,meta:{requiresAuth:!0}},{path:"/update/:id",name:"UpdateItem",component:dt,meta:{requiresAuth:!0}}]});lt.beforeEach(function(t,e,o){t.matched.some(function(t){return t.meta.requiresAuth})?null==localStorage.getItem("user")?o({path:"/login",params:{nextUrl:t.fullPath}}):o():t.matched.some(function(t){return t.meta.guest})?null==localStorage.getItem("user")?o():o({name:"Dashboard"}):o()});var pt=lt,mt=(o("ac6a"),o("6762"),o("2fdb"),o("2f62"));r["a"].use(mt["a"]);var ft=new mt["a"].Store({state:{products:[],cart:[]},mutations:{addProducts:function(t,e){t.products=e},addToCart:function(t,e){t.cart.includes(e)?console.log("Already exists"):t.cart.push(e)},removeFromCart:function(t,e){t.cart.forEach(function(o,r){o.id==e&&t.cart.splice(r,1)})},increaseQuantity:function(t,e){console.log("Increase quantity mutation"),t.cart.forEach(function(t){t.id==e&&(t.quantity++,console.log(t))})},decreaseQuantity:function(t,e){console.log("Increase quantity mutation"),t.cart.forEach(function(t){t.id==e&&(t.quantity--,console.log(t))})},removeProduct:function(t,e){w.removeProduct(e)},updateProduct:function(t,e,o){console.log("Mutation trying to update ",e),w.updateProduct(e,o)}},actions:{getAllProducts:function(t){var e=w.getAllProducts();t.commit("addProducts",e)}},getters:{cartTotal:function(t){var e=0;return t.cart.forEach(function(t){e+=t.price*t.quantity}),e}}}),vt=ft;r["a"].config.productionTip=!1,new r["a"]({router:pt,store:vt,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,o){},"7f99":function(t,e,o){},ade2:function(t,e,o){"use strict";var r=o("c5ea"),a=o.n(r);a.a},b048:function(t,e,o){"use strict";var r=o("cc3b"),a=o.n(r);a.a},c5ea:function(t,e,o){},cc3b:function(t,e,o){},cccb:function(t,e,o){"use strict";var r=o("d563"),a=o.n(r);a.a},d563:function(t,e,o){},f34a:function(t,e,o){t.exports=o.p+"img/shoe.e0ab4551.jpg"}});
//# sourceMappingURL=app.d6261b9b.js.map