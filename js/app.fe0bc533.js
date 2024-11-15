(function(){"use strict";var e={2753:function(e,t,a){var r=a(3751),n=a(641);const o={id:"app"};function i(e,t){const a=(0,n.g2)("router-link"),r=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("header",null,[(0,n.Lk)("nav",null,[(0,n.bF)(a,{to:"/"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Home")]))),_:1}),(0,n.bF)(a,{to:"/hourly"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("Hourly")]))),_:1}),(0,n.bF)(a,{to:"/forecast"},{default:(0,n.k6)((()=>t[2]||(t[2]=[(0,n.eW)("5-Day Forecast")]))),_:1})])]),(0,n.bF)(r)])}var c=a(6262);const l={},u=(0,c.A)(l,[["render",i]]);var s=u,d=a(5220);const h={class:"home-layout"},p={class:"sidebar"},m={class:"main-content"},f=["src"];function v(e,t,a,r,o,i){const c=(0,n.g2)("LocationList"),l=(0,n.g2)("SearchBar"),u=(0,n.g2)("WeatherCard");return(0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("aside",p,[(0,n.bF)(c,{locations:o.savedLocations,onRemove:i.removeLocation,onView:i.fetchWeather},null,8,["locations","onRemove","onView"])]),(0,n.Lk)("main",m,[(0,n.Lk)("video",{autoplay:"",muted:"",loop:"",src:i.backgroundVideo,class:"background-video"},null,8,f),(0,n.bF)(l,{onSearch:i.fetchWeather},null,8,["onSearch"]),o.weather?((0,n.uX)(),(0,n.Wv)(u,{key:0,weather:o.weather},null,8,["weather"])):(0,n.Q3)("",!0)])])}a(4114);function y(e,t,a,o,i,c){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.city=e),onKeyup:t[1]||(t[1]=(0,r.jR)(((...e)=>c.search&&c.search(...e)),["enter"])),placeholder:"Enter a city"},null,544),[[r.Jo,i.city]]),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>c.search&&c.search(...e))},"Search")])}var w={data(){return{city:""}},methods:{search(){this.$emit("search",this.city)}}};const b=(0,c.A)(w,[["render",y]]);var k=b,L=a(33);function g(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("h2",null,(0,L.v_)(a.weather.name),1),(0,n.Lk)("p",null,"Temperature: "+(0,L.v_)(a.weather.main.temp)+"°C",1),(0,n.Lk)("p",null,"Conditions: "+(0,L.v_)(a.weather.weather[0].description),1)])}var C={props:["weather"]};const E=(0,c.A)(C,[["render",g]]);var _=E;const S=["onClick"],W=["onClick"];function X(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("div",null,[t[0]||(t[0]=(0,n.Lk)("h2",null,"Saved Locations",-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.locations,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t},[(0,n.eW)((0,L.v_)(e)+" ",1),(0,n.Lk)("button",{onClick:e=>i.removeLocation(t)},"Remove",8,S),(0,n.Lk)("button",{onClick:t=>i.viewLocation(e)},"View",8,W)])))),128))])])}var F={props:["locations"],methods:{removeLocation(e){this.$emit("remove",e)},viewLocation(e){this.$emit("view",e)}}};const O=(0,c.A)(F,[["render",X],["__scopeId","data-v-3250b6eb"]]);var A=O,D=a(4335),j=a.p+"media/clear.a3b69d2a.mp4",x=a.p+"media/cloudy.1b9e3934.mp4",H=a.p+"media/rainy.602a452b.mp4",T=a.p+"media/snow.710380b7.mp4",V=a.p+"media/thunderstorms.2da630a5.mp4",B=a.p+"media/default.4616f70a.mp4",I={components:{SearchBar:k,WeatherCard:_,LocationList:A},data(){return{weather:null,savedLocations:[]}},computed:{backgroundVideo(){if(!this.weather)return B;const e=this.weather.weather[0].main.toLowerCase();return e.includes("clear")?j:e.includes("clouds")?x:e.includes("rain")?H:e.includes("snow")?T:e.includes("thunderstorm")?V:B}},methods:{async fetchWeather(e){try{const t="ed57883fd55ff80c481683537b82903d",a=await D.A.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:e,appid:t,units:"metric"}});this.weather=a.data,this.savedLocations.includes(e)||this.savedLocations.push(e)}catch(t){console.error("Error fetching weather:",t)}},removeLocation(e){this.savedLocations.splice(e,1)}}};const P=(0,c.A)(I,[["render",v],["__scopeId","data-v-3f32247d"]]);var M=P;function R(e,t,a,r,o,i){const c=(0,n.g2)("SearchBar"),l=(0,n.g2)("chart-hourly");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(c,{onSearch:i.fetchWeather},null,8,["onSearch"]),t[0]||(t[0]=(0,n.Lk)("h1",null,"Hourly Weather Forecast",-1)),o.hourlyData?((0,n.uX)(),(0,n.Wv)(l,{key:0,data:o.hourlyData},null,8,["data"])):(0,n.Q3)("",!0)])}a(1454);function q(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Lk)("canvas",{id:"hourly-chart"},null,-1)]))}var K=a(8293),Q={props:["data"],mounted(){const e=document.getElementById("hourly-chart");new K.t1(e,{type:"line",data:{labels:this.data.map((e=>e.time)),datasets:[{label:"Temperature (°C)",data:this.data.map((e=>e.temperature)),borderColor:"blue",fill:!1},{label:"Precipitation (mm)",data:this.data.map((e=>e.precipitation)),borderColor:"green",fill:!1}]}})}};const $=(0,c.A)(Q,[["render",q]]);var J=$,N={components:{SearchBar:k,ChartHourly:J},data(){return{hourlyData:null}},methods:{async fetchWeather(e){try{const t="ed57883fd55ff80c481683537b82903d",a=await D.A.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:e,appid:t,units:"metric"}}),r=a.data.list.slice(0,8).map((e=>({time:e.dt_txt,temperature:e.main.temp,precipitation:e.rain?.["3h"]||0})));this.hourlyData=r}catch(t){console.error("Error fetching hourly weather:",t)}}}};const U=(0,c.A)(N,[["render",R]]);var Y=U;const z={key:0};function G(e,t,a,r,o,i){return(0,n.uX)(),(0,n.CE)("div",null,[t[1]||(t[1]=(0,n.Lk)("h1",null,"5-Day Weather Forecast",-1)),o.forecastData?((0,n.uX)(),(0,n.CE)("table",z,[t[0]||(t[0]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"Date"),(0,n.Lk)("th",null,"Conditions"),(0,n.Lk)("th",null,"High (°C)"),(0,n.Lk)("th",null,"Low (°C)")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.forecastData,(e=>((0,n.uX)(),(0,n.CE)("tr",{key:e.date},[(0,n.Lk)("td",null,(0,L.v_)(e.date),1),(0,n.Lk)("td",null,(0,L.v_)(e.conditions),1),(0,n.Lk)("td",null,(0,L.v_)(e.high),1),(0,n.Lk)("td",null,(0,L.v_)(e.low),1)])))),128))])])):(0,n.Q3)("",!0)])}a(8992),a(3949);var Z={data(){return{forecastData:null}},async mounted(){try{const e="5c0cdf1c6d1cfa4d0ee6bf43d39d6dbc",t="New York",a=await D.A.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:t,appid:e,units:"metric"}}),r={};a.data.list.forEach((e=>{const t=e.dt_txt.split(" ")[0];r[t]?(r[t].high=Math.max(r[t].high,e.main.temp),r[t].low=Math.min(r[t].low,e.main.temp)):r[t]={high:e.main.temp,low:e.main.temp,conditions:e.weather[0].description}})),this.forecastData=Object.keys(r).slice(0,5).map((e=>({date:e,...r[e]})))}catch(e){console.error("Error fetching 5-day forecast:",e)}}};const ee=(0,c.A)(Z,[["render",G]]);var te=ee;const ae=[{path:"/",name:"Home",component:M},{path:"/hourly",name:"Hourly",component:Y},{path:"/forecast",name:"Forecast",component:te}],re=(0,d.aE)({history:(0,d.LA)(),routes:ae});var ne=re;(0,r.Ef)(s).use(ne).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/new weather-app/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],c=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(l)var s=l(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(2753)}));r=a.O(r)})();
//# sourceMappingURL=app.fe0bc533.js.map