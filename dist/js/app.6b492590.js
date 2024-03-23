(function(){"use strict";var t={7676:function(t,e,o){var n=o(5130),i=o(6768),s=o(4232);const r={class:"app"},a=(0,i.Lk)("head",null,[(0,i.Lk)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.4/css/all.css",integrity:"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",crossorigin:"anonymous"})],-1),c={id:"navigation",style:{"background-color":"#110d78"}},l=(0,i.Lk)("a",{href:"afterSchool.html"},[(0,i.Lk)("img",{id:"logo",src:"cw1logo.png"})],-1),u=(0,i.Lk)("p",{style:{position:"absolute","margin-top":"-110px","margin-left":"40%",color:"white","font-family":"Arial, Helvetica, sans-serif"}}," Search: ",-1),d=(0,i.Lk)("h3",{id:"welcomeText"},[(0,i.eW)(" Welcome! Buy any lesson you want and pursue your studies "),(0,i.Lk)("em",null,"AfterSchool")],-1),h={key:0},p={id:"sortPriceButtons"},m={id:"sortSubButtons"},k={id:"sortLocationButtons"},g={id:"sortSpacesButtons"},L=["disabled"],b={class:"fas fa-cart-plus"},f=(0,i.Lk)("br",null,null,-1),v=(0,i.Lk)("div",{id:"footer"},[(0,i.Lk)("p",{style:{"margin-left":"45%"}},"Web page made by Krish Kalvani")],-1);function C(t,e,o,C,y,w){const I=(0,i.g2)("product-list"),S=(0,i.g2)("checkout");return(0,i.uX)(),(0,i.CE)("div",r,[a,(0,i.Lk)("div",c,[l,u,(0,i.bo)((0,i.Lk)("input",{id:"searchInput","onUpdate:modelValue":e[0]||(e[0]=t=>y.searchValue=t),type:"text",placeholder:"Search lessons..."},null,512),[[n.Jo,y.searchValue]])]),d,y.showLesson?((0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("div",p,[(0,i.Lk)("button",{onClick:e[1]||(e[1]=t=>w.sortByPrice("ascending"))}," Sort by Price (Low to High) "),(0,i.Lk)("button",{onClick:e[2]||(e[2]=t=>w.sortByPrice("descending"))}," Sort by Price (High to Low) ")]),(0,i.Lk)("div",m,[(0,i.Lk)("button",{id:"sortSubButton",onClick:e[3]||(e[3]=t=>w.sortAlphabetically("ascending"))}," Sort by Subject (A to Z) "),(0,i.Lk)("button",{id:"sortSubButton",onClick:e[4]||(e[4]=t=>w.sortAlphabetically("descending"))}," Sort by Subject (Z to A) ")]),(0,i.Lk)("div",k,[(0,i.Lk)("button",{id:"sortLocButtons",onClick:e[5]||(e[5]=t=>w.sortLocationAlphabetically("ascending"))}," Sort by Location (A to Z) "),(0,i.Lk)("button",{id:"sortLocButtons",onClick:e[6]||(e[6]=t=>w.sortLocationAlphabetically("descending"))}," Sort by Location (Z to A) ")]),(0,i.Lk)("div",g,[(0,i.Lk)("button",{onClick:e[7]||(e[7]=t=>w.sortBySpaces("ascending"))}," Sort by Spaces (Low to High) "),(0,i.Lk)("button",{onClick:e[8]||(e[8]=t=>w.sortBySpaces("descending"))}," Sort by Spaces (High to Low) ")])])):(0,i.Q3)("",!0),(0,i.Lk)("header",null,[(0,i.Lk)("button",{id:"checkOutButton",onClick:e[9]||(e[9]=(...t)=>w.showCheckout&&w.showCheckout(...t)),disabled:0===y.cart.length&&y.showLesson},[(0,i.Lk)("span",b,[f,(0,i.eW)((0,s.v_)(this.cart.length)+" Checkout",1)])],8,L)]),(0,i.Lk)("main",null,[y.showLesson?((0,i.uX)(),(0,i.Wv)(I,{key:0,lessons:w.lessonList,onAddProduct:w.addToCart},null,8,["lessons","onAddProduct"])):((0,i.uX)(),(0,i.Wv)(S,{key:1,cart:y.cart,onRemoveItem:w.removeFromCart,onEmptyCart:w.emptyCart},null,8,["cart","onRemoveItem","onEmptyCart"]))]),v])}o(4114);const y=t=>((0,i.Qi)("data-v-41de5a12"),t=t(),(0,i.jt)(),t),w={id:"lessonsGrid"},I=["src"],S={id:"lessonContent"},j=["onClick"],A={key:1,id:"disabledAddToCartButton",disabled:"disabled"},B=y((()=>(0,i.Lk)("br",null,null,-1)));function O(t,e,o,n,r,a){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("div",w,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.lessons,(t=>((0,i.uX)(),(0,i.CE)("div",{id:"lessonCard",key:t.id},[(0,i.Lk)("figure",null,[(0,i.Lk)("img",{id:"lessonPic",src:t.image},null,8,I)]),(0,i.Lk)("main",S,[(0,i.Lk)("p",null,"Subject: "+(0,s.v_)(t.subject),1),(0,i.Lk)("p",null,"Location: "+(0,s.v_)(t.location),1),(0,i.Lk)("p",null,"Price (AED): "+(0,s.v_)(t.price),1),(0,i.Lk)("p",null,"Spaces: "+(0,s.v_)(t.spaces),1),a.canAddToCart(t)?((0,i.uX)(),(0,i.CE)("button",{key:0,id:"addtocartButton",onClick:e=>a.add(t)},"Add to cart",8,j)):((0,i.uX)(),(0,i.CE)("button",A,[(0,i.eW)("Sold "),B,(0,i.eW)(" Out")]))])])))),128))])])}var P={name:"ProductList",props:["lessons"],methods:{add(t){console.log("added product",t.id),this.$emit("addProduct",t)},canAddToCart:function(t){return t.spaces>0}}},E=o(1241);const V=(0,E.A)(P,[["render",O],["__scopeId","data-v-41de5a12"]]);var _=V;const x=(0,i.Lk)("h2",{id:"checkOutHeading"},"Checkout",-1),W={id:"checkoutTable"},X=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Lesson"),(0,i.Lk)("th",null,"Subject"),(0,i.Lk)("th",null,"Location"),(0,i.Lk)("th",null,"Price"),(0,i.Lk)("th",null,"Stock")])],-1),M={style:{width:"10%"}},T=["src"],H=["onClick"],F=(0,i.Lk)("h3",{id:"credentialHeading"},"Please enter your credentials:",-1),D={id:"credentialBox"},K={id:"BothCredentials"},N={id:"nameCredential"},R=(0,i.Lk)("strong",null,"Name:",-1),Z={id:"phoneCredential"},$=(0,i.Lk)("strong",null,"Phone No.:",-1),z=(0,i.Lk)("h2",{id:"orderInfoHeading"},"Order Information",-1),J={id:"orderInfoBox"},U={id:"orderInfoDetails"},G=(0,i.Lk)("strong",null,"Name (autofilled): ",-1),Q=(0,i.Lk)("strong",null,"Phone Number (autofilled): ",-1),q=(0,i.Lk)("p",{style:{"font-size":"small","font-family":"Arial, Helvetica, sans-serif","text-align":"center","margin-left":"50%"}}," Make sure to enter the valid form of credentials to place order ",-1),Y=["disabled"];function tt(t,e,o,r,a,c){return(0,i.uX)(),(0,i.CE)("div",null,[x,(0,i.Lk)("table",W,[X,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.cart,((t,e)=>((0,i.uX)(),(0,i.CE)("tr",{key:t.id},[(0,i.Lk)("td",M,[(0,i.Lk)("img",{src:t.image,alt:"Product Image"},null,8,T)]),(0,i.Lk)("td",null,(0,s.v_)(t.subject),1),(0,i.Lk)("td",null,(0,s.v_)(t.location),1),(0,i.Lk)("td",null,"Price: "+(0,s.v_)(t.price),1),(0,i.Lk)("td",null,"Spaces: "+(0,s.v_)(t.spaces),1),(0,i.Lk)("td",null,[(0,i.Lk)("button",{onClick:t=>c.removeItem(e)},"Remove",8,H)])])))),128))])]),F,(0,i.Lk)("div",D,[(0,i.Lk)("div",K,[(0,i.Lk)("div",N,[R,(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.name=t),type:"text"},null,512),[[n.Jo,a.name]])]),(0,i.Lk)("div",Z,[$,(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.phone=t),type:"tel"},null,512),[[n.Jo,a.phone]])])])]),z,(0,i.Lk)("div",J,[(0,i.Lk)("div",U,[G,(0,i.Lk)("p",null,(0,s.v_)(a.name),1),Q,(0,i.Lk)("p",null,(0,s.v_)(a.phone),1)])]),q,(0,i.Lk)("button",{id:"PlaceOrderButton",onClick:e[2]||(e[2]=(...t)=>c.submitForm&&c.submitForm(...t)),disabled:!c.credentialsValidation}," Place Order ",8,Y)])}var et={name:"Form-Component",props:["cart"],data(){return{name:"",phone:""}},methods:{removeItem(t){console.log("Attempting to remove item at index:",t),this.$emit("remove-item",t),console.log("form function done")},submitForm(){0===this.cart.length?alert("Please add lessons to your cart to place an order."):alert("Order Submitted. Thank you!"),this.$emit("empty-cart")}},computed:{nameValidation:function(){return/^[A-Za-z\s]+$/.test(this.name)},phoneValidation:function(){return/^[0-9]+$/.test(this.phone)},credentialsValidation:function(){return this.nameValidation&&this.phoneValidation}}};const ot=(0,E.A)(et,[["render",tt]]);var nt=ot,it={name:"App",components:{productList:_,checkout:nt},data(){return{sitename:"AfterSchool",cart:[],showLesson:!0,searchValue:"",sortOrder:"ascending",lessons:[{id:1001,image:"MathIcon.jpg",subject:"Math",location:"Nahda",price:100,spaces:5,cartItemCount:0},{id:1002,image:"MicroBio.png",subject:"Microbiology",location:"Qouz",price:90,spaces:5,cartItemCount:0},{id:1003,image:"organicChem.png",subject:"Organic Chemistry",location:"Barsha",price:150,spaces:5,cartItemCount:0},{id:1004,image:"physIcon.png",subject:"Physics",location:"Dubai Museum",price:100,spaces:5,cartItemCount:0},{id:1005,image:"advancedMath.png",subject:"Advanced Math",location:"Knowledge Village",price:120,spaces:5,cartItemCount:0},{id:1006,image:"advancedEnglish.jpg",subject:"Advanced English",location:"Buhairah",price:80,spaces:5,cartItemCount:0},{id:1007,image:"musicIcon.png",subject:"Music",location:"Dubai Opera",price:90,spaces:5,cartItemCount:0},{id:1008,image:"engIcon.png",subject:"English",location:"City Walk",price:70,spaces:5,cartItemCount:0},{id:1009,image:"chemistryIcon.png",subject:"Chemistry",location:"Jumeriah",price:100,spaces:5,cartItemCount:0},{id:1010,image:"bioIcon.png",subject:"Biology",location:"Rolla",price:100,spaces:5,cartItemCount:0}]}},methods:{emptyCart(){this.cart=[]},showCheckout(){this.showLesson=!this.showLesson},addToCart:function(t){t.spaces>0&&(t.spaces--,t.cartItemCount++,this.cart.push(t))},removeFromCart(t){const e=this.cart[t];this.cart.splice(t,1);const o=this.lessons.find((t=>t.id===e.id));o&&(o.cartItemCount=Math.max(0,o.cartItemCount-1),o.spaces++)},sortByPrice:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.price-o.price:"descending"===t?o.price-e.price:0))},sortAlphabetically:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.subject.localeCompare(o.subject):"descending"===t?o.subject.localeCompare(e.subject):0))},sortLocationAlphabetically:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.location.localeCompare(o.location):"descending"===t?o.location.localeCompare(e.location):0))},sortBySpaces:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.spaces-e.cartItemCount-(o.spaces-o.cartItemCount):"descending"===t?o.spaces-o.cartItemCount-(e.spaces-e.cartItemCount):0))}},computed:{lessonList(){return this.searchValue.trim().length>0?this.lessons.filter((t=>{let e=this.searchValue.trim().toLowerCase(),o=t.subject.toLowerCase().includes(e),n=t.location.toLowerCase().includes(e);return o||n})):this.lessons}}};const st=(0,E.A)(it,[["render",C]]);var rt=st;(0,n.Ef)(rt).mount("#app"),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((t=>{console.log("SW registered: ",t)})).catch((t=>{console.log("SW registration failed: ",t)}))}))}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],s=t[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<r&&(r=s));if(a){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],a=n[1],c=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(c)var u=c(o)}for(e&&e(n);l<r.length;l++)s=r[l],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},n=self["webpackChunkafterschoolstore"]=self["webpackChunkafterschoolstore"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7676)}));n=o.O(n)})();
//# sourceMappingURL=app.6b492590.js.map