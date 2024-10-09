import{t as uu,m as lu,C as hu,n as Is,F as cu,k as du,_ as fu,i as mu,v as Ut,p as pu,S as gu,h as We,w as _u,x as yu}from"./index-BT2NFm00.js";var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,oo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,T,I){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[T].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)y[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],T=E.g[2];var I=E.g[3],p=m+(I^g&(T^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[2]+606105819&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[3]+3250441966&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[6]+2821735955&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[7]+4249261313&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[10]+4294925233&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[11]+2304563134&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[14]+2792965006&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[15]+1236535329&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(T^I&(g^T))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[11]+643717713&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[0]+3921069994&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[15]+3634488961&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[4]+3889429448&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[3]+4107603335&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[8]+1163531501&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[7]+1735328473&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[12]+2368359562&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(g^T^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[11]+1839030562&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[14]+4259657740&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[7]+4139469664&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[10]+3200236656&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[3]+3572445317&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[6]+76029189&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[15]+530742520&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[2]+3299628645&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(T^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[14]+2878612391&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[5]+4237533241&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[10]+4293915773&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[1]+2240044497&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[6]+2734768916&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[13]+1309151649&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[2]+718787259&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=g;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){s(this,y),T=0;break}}else for(;I<m;)if(y[T++]=E[I++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)E[g++]=this.g[m]>>>y&255;return E};function o(E,m){var g=h;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function u(E,m){this.h=m;for(var g=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==m||(g[T]=I,y=!1)}this.g=g}var h={};function d(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return k(f(-E));for(var m=[],g=1,y=0;E>=g;y++)m[y]=E/g|0,g*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(_(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=w,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),p=parseInt(E.substring(T,T+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(g),y=y.add(f(p)))}return y}var w=d(0),R=d(1),S=d(16777216);r=u.prototype,r.m=function(){if(x(this))return-k(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(x(this))return"-"+k(this).toString(E);for(var m=f(Math.pow(E,6)),g=this,y="";;){var T=nt(g,m).g;g=K(g,T.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=T,N(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=K(this,E),x(E)?-1:N(E)?0:1};function k(E){for(var m=E.g.length,g=[],y=0;y<m;y++)g[y]=~E.g[y];return new u(g,~E.h).add(R)}r.abs=function(){return x(this)?k(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),p=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=p>>>16,I&=65535,p&=65535,g[T]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function K(E,m){return E.add(k(m))}r.j=function(E){if(N(this)||N(E))return w;if(x(this))return x(E)?k(this).j(k(E)):k(k(this).j(E));if(x(E))return k(this.j(k(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,p=this.i(y)&65535,kt=E.i(T)>>>16,Ae=E.i(T)&65535;g[2*y+2*T]+=p*Ae,G(g,2*y+2*T),g[2*y+2*T+1]+=I*Ae,G(g,2*y+2*T+1),g[2*y+2*T+1]+=p*kt,G(g,2*y+2*T+1),g[2*y+2*T+2]+=I*kt,G(g,2*y+2*T+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function G(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Q(E,m){this.g=E,this.h=m}function nt(E,m){if(N(m))throw Error("division by zero");if(N(E))return new Q(w,w);if(x(E))return m=nt(k(E),m),new Q(k(m.g),k(m.h));if(x(m))return m=nt(E,k(m)),new Q(k(m.g),m.h);if(30<E.g.length){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(E);)g=Ct(g),y=Ct(y);var T=it(g,1),I=it(y,1);for(y=it(y,2),g=it(g,2);!N(y);){var p=I.add(y);0>=p.l(E)&&(T=T.add(g),I=p),y=it(y,1),g=it(g,1)}return m=K(E,T.j(m)),new Q(T,m)}for(T=w;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),p=I.j(m);x(p)||0<p.l(E);)g-=y,I=f(g),p=I.j(m);N(I)&&(I=R),T=T.add(I),E=K(E,p)}return new Q(T,E)}r.A=function(E){return nt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&E.i(y);return new u(g,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|E.i(y);return new u(g,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^E.i(y);return new u(g,this.h^E.h)};function Ct(E){for(var m=E.g.length+1,g=[],y=0;y<m;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(g,E.h)}function it(E,m){var g=m>>5;m%=32;for(var y=E.g.length-g,T=[],I=0;I<y;I++)T[I]=0<m?E.i(I+g)>>>m|E.i(I+g+1)<<32-m:E.i(I+g);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,oo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Yt=u}).apply(typeof As<"u"?As:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ao,Be,uo,bn,br,lo,ho,co;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var l=n;i=i.split(".");for(var c=0;c<i.length-1;c++){var v=i[c];if(!(v in l))break t;l=l[v]}i=i[i.length-1],c=l[i],a=a(c),a!=c&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,c=!1,v={next:function(){if(!c&&l<i.length){var A=l++;return{value:a(A,i[A]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,l){return i.call.apply(i.bind,arguments)}function w(i,a,l){if(!i)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function S(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),i.apply(this,c)}}function N(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(c,v,A){for(var C=Array(arguments.length-2),$=2;$<arguments.length;$++)C[$-2]=arguments[$];return a.prototype[v].apply(c,C)}}function x(i){const a=i.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=i[c];return l}return[]}function k(i,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(d(c)){const v=i.length||0,A=c.length||0;i.length=v+A;for(let C=0;C<A;C++)i[v+C]=c[C]}else i.push(c)}}class K{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=h.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Ct=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function it(i,a,l){for(const c in i)a.call(l,i[c],c,i)}function E(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(l in c)i[l]=c[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(c,l)&&(i[l]=c[l])}}function T(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){h.setTimeout(()=>{throw i},0)}function p(){var i=sr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const c=Ae.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var Ae=new K(()=>new Va,i=>i.reset());class Va{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let we,Re=!1,sr=new kt,Ii=()=>{const i=h.Promise.resolve(void 0);we=()=>{i.then(Sa)}};var Sa=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){I(l)}var a=Ae;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Re=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Ca=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return i}();function Pe(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,c=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Ct){t:{try{nt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ka[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Pe.aa.h.call(this)}}N(Pe,ht);var ka={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Da=0;function Na(i,a,l,c,v){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=v,this.key=++Da,this.da=this.fa=!1}function hn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function cn(i){this.src=i,this.g={},this.h=0}cn.prototype.add=function(i,a,l,c,v){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var C=ar(i,a,c,v);return-1<C?(a=i[C],l||(a.fa=!1)):(a=new Na(a,this.src,A,!!c,v),a.fa=l,i.push(a)),a};function or(i,a){var l=a.type;if(l in i.g){var c=i.g[l],v=Array.prototype.indexOf.call(c,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(c,v,1),A&&(hn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ar(i,a,l,c){for(var v=0;v<i.length;++v){var A=i[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==c)return v}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),lr={};function Ai(i,a,l,c,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ai(i,a[A],l,c,v);return null}return l=Pi(l),i&&i[ln]?i.K(a,l,f(c)?!!c.capture:!!c,v):ba(i,a,l,!1,c,v)}function ba(i,a,l,c,v,A){if(!a)throw Error("Invalid event type");var C=f(v)?!!v.capture:!!v,$=cr(i);if($||(i[ur]=$=new cn(i)),l=$.add(a,l,c,C,A),l.proxy)return l;if(c=xa(),l.proxy=c,c.src=i,c.listener=l,i.addEventListener)Ca||(v=C),v===void 0&&(v=!1),i.addEventListener(a.toString(),c,v);else if(i.attachEvent)i.attachEvent(Ri(a.toString()),c);else if(i.addListener&&i.removeListener)i.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function xa(){function i(l){return a.call(i.src,i.listener,l)}const a=Ma;return i}function wi(i,a,l,c,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)wi(i,a[A],l,c,v);else c=f(c)?!!c.capture:!!c,l=Pi(l),i&&i[ln]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],l=ar(A,l,c,v),-1<l&&(hn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=cr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=ar(a,l,c,v)),(l=-1<i?a[i]:null)&&hr(l))}function hr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[ln])or(a.i,i);else{var l=i.type,c=i.proxy;a.removeEventListener?a.removeEventListener(l,c,i.capture):a.detachEvent?a.detachEvent(Ri(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=cr(a))?(or(l,i),l.h==0&&(l.src=null,a[ur]=null)):hn(i)}}}function Ri(i){return i in lr?lr[i]:lr[i]="on"+i}function Ma(i,a){if(i.da)i=!0;else{a=new Pe(a,this);var l=i.listener,c=i.ha||i.src;i.fa&&hr(i),i=l.call(c,a)}return i}function cr(i){return i=i[ur],i instanceof cn?i:null}var dr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pi(i){return typeof i=="function"?i:(i[dr]||(i[dr]=function(a){return i.handleEvent(a)}),i[dr])}function ct(){Mt.call(this),this.i=new cn(this),this.M=this,this.F=null}N(ct,Mt),ct.prototype[ln]=!0,ct.prototype.removeEventListener=function(i,a,l,c){wi(this,i,a,l,c)};function _t(i,a){var l,c=i.F;if(c)for(l=[];c;c=c.F)l.push(c);if(i=i.M,c=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var v=a;a=new ht(c,i),y(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var C=a.g=l[A];v=dn(C,c,!0,a)&&v}if(C=a.g=i,v=dn(C,c,!0,a)&&v,v=dn(C,c,!1,a)&&v,l)for(A=0;A<l.length;A++)C=a.g=l[A],v=dn(C,c,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],c=0;c<l.length;c++)hn(l[c]);delete i.g[a],i.h--}}this.F=null},ct.prototype.K=function(i,a,l,c){return this.i.add(String(i),a,!1,l,c)},ct.prototype.L=function(i,a,l,c){return this.i.add(String(i),a,!0,l,c)};function dn(i,a,l,c){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==l){var $=C.listener,st=C.ha||C.src;C.fa&&or(i.i,C),v=$.call(st,c)!==!1&&v}}return v&&!c.defaultPrevented}function Vi(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(i,a||0)}function Si(i){i.g=Vi(()=>{i.g=null,i.i&&(i.i=!1,Si(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Oa extends Mt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Si(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(i){Mt.call(this),this.h=i,this.g={}}N(Ve,Mt);var Ci=[];function ki(i){it(i.g,function(a,l){this.g.hasOwnProperty(l)&&hr(a)},i),i.g={}}Ve.prototype.N=function(){Ve.aa.N.call(this),ki(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=h.JSON.stringify,La=h.JSON.parse,Fa=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function mr(){}mr.prototype.h=null;function Di(i){return i.h||(i.h=i.i())}function Ni(){}var Se={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){ht.call(this,"d")}N(pr,ht);function gr(){ht.call(this,"c")}N(gr,ht);var $t={},bi=null;function fn(){return bi=bi||new ct}$t.La="serverreachability";function xi(i){ht.call(this,$t.La,i)}N(xi,ht);function Ce(i){const a=fn();_t(a,new xi(a))}$t.STAT_EVENT="statevent";function Mi(i,a){ht.call(this,$t.STAT_EVENT,i),this.stat=a}N(Mi,ht);function yt(i){const a=fn();_t(a,new Mi(a,i))}$t.Ma="timingevent";function Oi(i,a){ht.call(this,$t.Ma,i),this.size=a}N(Oi,ht);function ke(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},a)}function De(){this.g=!0}De.prototype.xa=function(){this.g=!1};function Ua(i,a,l,c,v,A){i.info(function(){if(i.g)if(A)for(var C="",$=A.split("&"),st=0;st<$.length;st++){var B=$[st].split("=");if(1<B.length){var dt=B[0];B=B[1];var ft=dt.split("_");C=2<=ft.length&&ft[1]=="type"?C+(dt+"="+B+"&"):C+(dt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function qa(i,a,l,c,v,A,C){i.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+C})}function ie(i,a,l,c){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+ja(i,l)+(c?" "+c:"")})}function Ba(i,a){i.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function ja(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var c=l[i];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return fr(l)}catch{return a}}var mn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Li={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_r;function pn(){}N(pn,mr),pn.prototype.g=function(){return new XMLHttpRequest},pn.prototype.i=function(){return{}},_r=new pn;function Ot(i,a,l,c){this.j=i,this.i=a,this.l=l,this.R=c||1,this.U=new Ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fi}function Fi(){this.i=null,this.g="",this.h=!1}var Ui={},yr={};function Tr(i,a,l){i.L=1,i.v=Tn(Dt(a)),i.m=l,i.P=!0,qi(i,null)}function qi(i,a){i.F=Date.now(),gn(i),i.A=Dt(i.v);var l=i.A,c=i.R;Array.isArray(c)||(c=[String(c)]),ts(l.i,"t",c),i.C=0,l=i.j.J,i.h=new Fi,i.g=ys(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Oa(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,c=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ci[0]=v.toString()),v=Ci);for(var A=0;A<v.length;A++){var C=Ai(l,v[A],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ce(),Ua(i.i,i.u,i.A,i.l,i.R,i.m)}Ot.prototype.ca=function(i){i=i.target;const a=this.M;a&&Nt(i)==3?a.j():this.Y(i)},Ot.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Nt(this.g);var a=this.g.Ba();const ae=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||as(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ae?Ce(3):Ce(2)),Er(this);var l=this.g.Z();this.X=l;e:if(Bi(this)){var c=as(this.g);i="";var v=c.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Ne(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(c[a],{stream:!(A&&a==v-1)});c.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,qa(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,st=this.g;if(($=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G($)){var B=$;break e}}B=null}if(l=B)ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vr(this,l);else{this.o=!1,this.s=3,yt(12),Qt(this),Ne(this);break t}}if(this.P){l=!0;let It;for(;!this.J&&this.C<C.length;)if(It=za(this,C),It==yr){ft==4&&(this.s=4,yt(14),l=!1),ie(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Ui){this.s=4,yt(15),ie(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ie(this.i,this.l,It,null),vr(this,It);if(Bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||C.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ie(this.i,this.l,C,"[Invalid Chunked Response]"),Qt(this),Ne(this);else if(0<C.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Vr(dt),dt.M=!0,yt(11))}}else ie(this.i,this.l,C,null),vr(this,C);ft==4&&Qt(this),this.o&&!this.J&&(ft==4?ms(this.j,this):(this.o=!1,gn(this)))}else ou(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Qt(this),Ne(this)}}}catch{}finally{}};function Bi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function za(i,a){var l=i.C,c=a.indexOf(`
`,l);return c==-1?yr:(l=Number(a.substring(l,c)),isNaN(l)?Ui:(c+=1,c+l>a.length?yr:(a=a.slice(c,c+l),i.C=c+l,a)))}Ot.prototype.cancel=function(){this.J=!0,Qt(this)};function gn(i){i.S=Date.now()+i.I,ji(i,i.I)}function ji(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ke(R(i.ba,i),a)}function Er(i){i.B&&(h.clearTimeout(i.B),i.B=null)}Ot.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ba(this.i,this.A),this.L!=2&&(Ce(),yt(17)),Qt(this),this.s=2,Ne(this)):ji(this,this.S-i)};function Ne(i){i.j.G==0||i.J||ms(i.j,i)}function Qt(i){Er(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ki(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function vr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||Ir(l.h,i))){if(!i.K&&Ir(l.h,i)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Rn(l),An(l);else break t;Pr(l),yt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=ke(R(l.Za,l),6e3));if(1>=Gi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ht(l,11)}else if((i.K||l.g==i)&&Rn(l),!G(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const dt=B[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=B[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const ae=B[5];ae!=null&&typeof ae=="number"&&0<ae&&(c=1.5*ae,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const It=i.g;if(It){const Vn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vn){var A=c.h;A.g||Vn.indexOf("spdy")==-1&&Vn.indexOf("quic")==-1&&Vn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ar(A,A.h),A.h=null))}if(c.D){const Sr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(c.ya=Sr,W(c.I,c.D,Sr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=i;if(c.qa=_s(c,c.J?c.ia:null,c.W),C.K){$i(c.h,C);var $=C,st=c.L;st&&($.I=st),$.B&&(Er($),gn($)),c.g=C}else ds(c);0<l.i.length&&wn(l)}else B[0]!="stop"&&B[0]!="close"||Ht(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Ht(l,7):Rr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Ce(4)}catch{}}var Ka=class{constructor(i,a){this.g=i,this.map=a}};function zi(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ki(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Gi(i){return i.h?1:i.g?i.g.size:0}function Ir(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Ar(i,a){i.g?i.g.add(a):i.h=a}function $i(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}zi.prototype.cancel=function(){if(this.i=Qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Qi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return x(i.i)}function Ga(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],l=i.length,c=0;c<l;c++)a.push(i[c]);return a}a=[],l=0;for(c in i)a[l++]=i[c];return a}function $a(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const c in i)a[l++]=c;return a}}}function Wi(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=$a(i),c=Ga(i),v=c.length,A=0;A<v;A++)a.call(void 0,c[A],l&&l[A],i)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qa(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var c=i[l].indexOf("="),v=null;if(0<=c){var A=i[l].substring(0,c);v=i[l].substring(c+1)}else A=i[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Wt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Wt){this.h=i.h,_n(this,i.j),this.o=i.o,this.g=i.g,yn(this,i.s),this.l=i.l;var a=i.i,l=new Me;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Xi(this,l),this.m=i.m}else i&&(a=String(i).match(Hi))?(this.h=!1,_n(this,a[1]||"",!0),this.o=be(a[2]||""),this.g=be(a[3]||"",!0),yn(this,a[4]),this.l=be(a[5]||"",!0),Xi(this,a[6]||"",!0),this.m=be(a[7]||"")):(this.h=!1,this.i=new Me(null,this.h))}Wt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(xe(a,Yi,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(xe(a,Yi,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(xe(l,l.charAt(0)=="/"?Xa:Ha,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",xe(l,Ja)),i.join("")};function Dt(i){return new Wt(i)}function _n(i,a,l){i.j=l?be(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function yn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Xi(i,a,l){a instanceof Me?(i.i=a,Za(i.i,i.h)):(l||(a=xe(a,Ya)),i.i=new Me(a,i.h))}function W(i,a,l){i.i.set(a,l)}function Tn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function be(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xe(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Wa),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Wa(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Yi=/[#\/\?@]/g,Ha=/[#\?:]/g,Xa=/[#\?]/g,Ya=/[#\?@]/g,Ja=/#/g;function Me(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Lt(i){i.g||(i.g=new Map,i.h=0,i.i&&Qa(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Me.prototype,r.add=function(i,a){Lt(this),this.i=null,i=se(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Ji(i,a){Lt(i),a=se(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Zi(i,a){return Lt(i),a=se(i,a),i.g.has(a)}r.forEach=function(i,a){Lt(this),this.g.forEach(function(l,c){l.forEach(function(v){i.call(a,v,c,this)},this)},this)},r.na=function(){Lt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const v=i[c];for(let A=0;A<v.length;A++)l.push(a[c])}return l},r.V=function(i){Lt(this);let a=[];if(typeof i=="string")Zi(this,i)&&(a=a.concat(this.g.get(se(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},r.set=function(i,a){return Lt(this),this.i=null,i=se(this,i),Zi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function ts(i,a,l){Ji(i,a),0<l.length&&(i.i=null,i.g.set(se(i,a),x(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const A=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=A;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),i.push(v)}}return this.i=i.join("&")};function se(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Za(i,a){a&&!i.j&&(Lt(i),i.i=null,i.g.forEach(function(l,c){var v=c.toLowerCase();c!=v&&(Ji(this,c),ts(this,v,l))},i)),i.j=a}function tu(i,a){const l=new De;if(h.Image){const c=new Image;c.onload=S(Ft,l,"TestLoadImage: loaded",!0,a,c),c.onerror=S(Ft,l,"TestLoadImage: error",!1,a,c),c.onabort=S(Ft,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=S(Ft,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=i}else a(!1)}function eu(i,a){const l=new De,c=new AbortController,v=setTimeout(()=>{c.abort(),Ft(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:c.signal}).then(A=>{clearTimeout(v),A.ok?Ft(l,"TestPingServer: ok",!0,a):Ft(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Ft(l,"TestPingServer: error",!1,a)})}function Ft(i,a,l,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(l)}catch{}}function nu(){this.g=new Fa}function ru(i,a,l){const c=l||"";try{Wi(i,function(v,A){let C=v;f(v)&&(C=fr(v)),a.push(c+A+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function En(i){this.l=i.Ub||null,this.j=i.eb||!1}N(En,mr),En.prototype.g=function(){return new vn(this.l,this.j)},En.prototype.i=function(i){return function(){return i}}({});function vn(i,a){ct.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(vn,ct),r=vn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Le(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Le(this)),this.g&&(this.readyState=3,Le(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;es(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function es(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Oe(this):Le(this),this.readyState==3&&es(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Oe(this))},r.Qa=function(i){this.g&&(this.response=i,Oe(this))},r.ga=function(){this.g&&Oe(this)};function Oe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Le(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function Le(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ns(i){let a="";return it(i,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function wr(i,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=ns(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):W(i,a,l))}function Y(i){ct.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Y,ct);var iu=/^https?$/i,su=["POST","PUT"];r=Y.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_r.g(),this.v=this.o?Di(this.o):Di(_r),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){rs(this,A);return}if(i=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)l.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())l.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=h.FormData&&i instanceof h.FormData,!(0<=Array.prototype.indexOf.call(su,a,void 0))||c||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{os(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){rs(this,A)}};function rs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,is(i),In(i)}function is(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),In(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ss(this):this.bb())},r.bb=function(){ss(this)};function ss(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Nt(i)!=4||i.Z()!=2)){if(i.u&&Nt(i)==4)Vi(i.Ea,0,i);else if(_t(i,"readystatechange"),Nt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var v=String(i.D).match(Hi)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),c=!iu.test(v?v.toLowerCase():"")}l=c}if(l)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var A=2<Nt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",is(i)}}finally{In(i)}}}}function In(i,a){if(i.g){os(i);const l=i.g,c=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||_t(i,"ready");try{l.onreadystatechange=c}catch{}}}function os(i){i.I&&(h.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Nt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),La(a)}};function as(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ou(i){const a={};i=(i.g&&2<=Nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<i.length;c++){if(G(i[c]))continue;var l=T(i[c]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fe(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function us(i){this.Aa=0,this.i=[],this.j=new De,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fe("baseRetryDelayMs",5e3,i),this.cb=Fe("retryDelaySeedMs",1e4,i),this.Wa=Fe("forwardChannelMaxRetries",2,i),this.wa=Fe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(i&&i.concurrentRequestLimit),this.Da=new nu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=us.prototype,r.la=8,r.G=1,r.connect=function(i,a,l,c){yt(0),this.W=i,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=_s(this,null,this.W),wn(this)};function Rr(i){if(ls(i),i.G==3){var a=i.U++,l=Dt(i.I);if(W(l,"SID",i.K),W(l,"RID",a),W(l,"TYPE","terminate"),Ue(i,l),a=new Ot(i,i.j,a),a.L=2,a.v=Tn(Dt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=ys(a.j,null),a.g.ea(a.v)),a.F=Date.now(),gn(a)}gs(i)}function An(i){i.g&&(Vr(i),i.g.cancel(),i.g=null)}function ls(i){An(i),i.u&&(h.clearTimeout(i.u),i.u=null),Rn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&h.clearTimeout(i.s),i.s=null)}function wn(i){if(!Ki(i.h)&&!i.s){i.s=!0;var a=i.Ga;we||Ii(),Re||(we(),Re=!0),sr.add(a,i),i.B=0}}function au(i,a){return Gi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ke(R(i.Ga,i,a),ps(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Ot(this,this.j,i);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=cs(this,v,a),l=Dt(this.I),W(l,"RID",i),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Ue(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(ns(A)))+"&"+a:this.m&&wr(l,this.m,A)),Ar(this.h,v),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),v.T=!0,Tr(v,l,null)):Tr(v,l,a),this.G=2}}else this.G==3&&(i?hs(this,i):this.i.length==0||Ki(this.h)||hs(this))};function hs(i,a){var l;a?l=a.l:l=i.U++;const c=Dt(i.I);W(c,"SID",i.K),W(c,"RID",l),W(c,"AID",i.T),Ue(i,c),i.m&&i.o&&wr(c,i.m,i.o),l=new Ot(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=cs(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ar(i.h,l),Tr(l,c,a)}function Ue(i,a){i.H&&it(i.H,function(l,c){W(a,c,l)}),i.l&&Wi({},function(l,c){W(a,c,l)})}function cs(i,a,l){l=Math.min(i.i.length,l);var c=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=v[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let $=!0;for(let st=0;st<l;st++){let B=v[st].g;const dt=v[st].map;if(B-=A,0>B)A=Math.max(0,v[st].g-100),$=!1;else try{ru(dt,C,"req"+B+"_")}catch{c&&c(dt)}}if($){c=C.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,c}function ds(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;we||Ii(),Re||(we(),Re=!0),sr.add(a,i),i.v=0}}function Pr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ke(R(i.Fa,i),ps(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,fs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ke(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),An(this),fs(this))};function Vr(i){i.A!=null&&(h.clearTimeout(i.A),i.A=null)}function fs(i){i.g=new Ot(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);W(a,"RID","rpc"),W(a,"SID",i.K),W(a,"AID",i.T),W(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(a,"TO",i.ja),W(a,"TYPE","xmlhttp"),Ue(i,a),i.m&&i.o&&wr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Tn(Dt(a)),l.m=null,l.P=!0,qi(l,i)}r.Za=function(){this.C!=null&&(this.C=null,An(this),Pr(this),yt(19))};function Rn(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function ms(i,a){var l=null;if(i.g==a){Rn(i),Vr(i),i.g=null;var c=2}else if(Ir(i.h,a))l=a.D,$i(i.h,a),c=1;else return;if(i.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;c=fn(),_t(c,new Oi(c,l)),wn(i)}else ds(i);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&au(i,a)||c==2&&Pr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),v){case 1:Ht(i,5);break;case 4:Ht(i,10);break;case 3:Ht(i,6);break;default:Ht(i,2)}}}function ps(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function Ht(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),c=i.Xa;const v=!c;c=new Wt(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||_n(c,"https"),Tn(c),v?tu(c.toString(),l):eu(c.toString(),l)}else yt(2);i.G=0,i.l&&i.l.sa(a),gs(i),ls(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function gs(i){if(i.G=0,i.ka=[],i.l){const a=Qi(i.h);(a.length!=0||i.i.length!=0)&&(k(i.ka,a),k(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function _s(i,a,l){var c=l instanceof Wt?Dt(l):new Wt(l);if(c.g!="")a&&(c.g=a+"."+c.g),yn(c,c.s);else{var v=h.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Wt(null);c&&_n(A,c),a&&(A.g=a),v&&yn(A,v),l&&(A.l=l),c=A}return l=i.D,a=i.ya,l&&a&&W(c,l,a),W(c,"VER",i.la),Ue(i,c),c}function ys(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Y(new En({eb:l})):new Y(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ts(){}r=Ts.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Pn(){}Pn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ct.call(this),this.g=new us(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!G(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new oe(this)}N(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Rr(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=fr(i),i=l);a.i.push(new Ka(a.Ya++,i)),a.G==3&&wn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Rr(this.g),delete this.g,Tt.aa.N.call(this)};function Es(i){pr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}N(Es,pr);function vs(){gr.call(this),this.status=1}N(vs,gr);function oe(i){this.g=i}N(oe,Ts),oe.prototype.ua=function(){_t(this.g,"a")},oe.prototype.ta=function(i){_t(this.g,new Es(i))},oe.prototype.sa=function(i){_t(this.g,new vs)},oe.prototype.ra=function(){_t(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,co=function(){return new Pn},ho=function(){return fn()},lo=$t,br={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,bn=mn,Li.COMPLETE="complete",uo=Li,Ni.EventType=Se,Se.OPEN="a",Se.CLOSE="b",Se.ERROR="c",Se.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Be=Ni,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ao=Y}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const ws="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new uu("@firebase/firestore");function qe(){return Jt.logLevel}function D(r,...t){if(Jt.logLevel<=Ut.DEBUG){const e=t.map(Qr);Jt.debug(`Firestore (${Te}): ${r}`,...e)}}function bt(r,...t){if(Jt.logLevel<=Ut.ERROR){const e=t.map(Qr);Jt.error(`Firestore (${Te}): ${r}`,...e)}}function de(r,...t){if(Jt.logLevel<=Ut.WARN){const e=t.map(Qr);Jt.warn(`Firestore (${Te}): ${r}`,...e)}}function Qr(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${Te}) INTERNAL ASSERTION FAILED: `+r;throw bt(t),new Error(t)}function z(r,t){r||O()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends cu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Tu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Eu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class vu{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const s=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new fo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new pt(t)}}class Iu{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Au{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Iu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ru{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new wu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Pu(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function j(r,t){return r<t?-1:r>t?1:0}function fe(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new et(0,0))}static max(){return new L(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends He{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends He{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return Vu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new b(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new b(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new b(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(n+=h,s++):(o(),s++)}if(o(),u)throw new b(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(H.fromString(t))}static fromName(t){return new M(H.fromString(t).popFirst(5))}static empty(){return new M(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new H(t.slice()))}}function Su(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new zt(s,M.empty(),t)}function Cu(r){return new zt(r.readTime,r.key,-1)}class zt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new zt(L.min(),M.empty(),-1)}static max(){return new zt(L.max(),M.empty(),-1)}}function ku(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Du)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let s=0,o=0,u=!1;t.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&e()},d=>n(d))}),u=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(s=>s?P.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,s)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++h,h===o&&n(u)},_=>s(_))}})}static doWhile(t,e){return new P((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function bu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function nn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Wr.oe=-1;function Qn(r){return r==null}function Fn(r){return r===0&&1/r==-1/0}function xu(r){return typeof r=="number"&&Number.isInteger(r)&&!Fn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ee(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function po(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ot(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,o){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ps(this.data.getIterator())}getIteratorFrom(t){return new Ps(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Ps{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new At([])}unionWith(t){let e=new ut(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new go("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Mu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(r){if(z(!!r),typeof r=="string"){let t=0;const e=Mu.exec(r);if(z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Xr(r){const t=r.mapValue.fields.__previous_value__;return Hr(t)?Xr(t):t}function Xe(r){const t=Kt(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e,n,s,o,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f}}class Ye{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ye("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ye&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function te(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hr(r)?4:Fu(r)?9007199254740991:Lu(r)?10:11:O()}function Vt(r,t){if(r===t)return!0;const e=te(r);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Xe(r).isEqual(Xe(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Kt(s.timestampValue),h=Kt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return Zt(s.bytesValue).isEqual(Zt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return J(s.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(s.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return J(s.integerValue)===J(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=J(s.doubleValue),h=J(o.doubleValue);return u===h?Fn(u)===Fn(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return fe(r.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Rs(u)!==Rs(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Vt(u[d],h[d])))return!1;return!0}(r,t);default:return O()}}function Je(r,t){return(r.values||[]).find(e=>Vt(e,t))!==void 0}function me(r,t){if(r===t)return 0;const e=te(r),n=te(t);if(e!==n)return j(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=J(o.integerValue||o.doubleValue),d=J(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(r,t);case 3:return Vs(r.timestampValue,t.timestampValue);case 4:return Vs(Xe(r),Xe(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(o,u){const h=Zt(o),d=Zt(u);return h.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=j(h[f],d[f]);if(_!==0)return _}return j(h.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=j(J(o.latitude),J(u.latitude));return h!==0?h:j(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ss(r.arrayValue,t.arrayValue);case 10:return function(o,u){var h,d,f,_;const w=o.fields||{},R=u.fields||{},S=(h=w.value)===null||h===void 0?void 0:h.arrayValue,N=(d=R.value)===null||d===void 0?void 0:d.arrayValue,x=j(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:Ss(S,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===kn.mapValue&&u===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(u===kn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=j(d[w],_[w]);if(R!==0)return R;const S=me(h[d[w]],f[_[w]]);if(S!==0)return S}return j(d.length,_.length)}(r.mapValue,t.mapValue);default:throw O()}}function Vs(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=Kt(r),n=Kt(t),s=j(e.seconds,n.seconds);return s!==0?s:j(e.nanos,n.nanos)}function Ss(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=me(e[s],n[s]);if(o)return o}return j(e.length,n.length)}function pe(r){return xr(r)}function xr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Kt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Zt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=xr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${xr(e.fields[u])}`;return s+"}"}(r.mapValue):O()}function Mr(r){return!!r&&"integerValue"in r}function Yr(r){return!!r&&"arrayValue"in r}function Cs(r){return!!r&&"nullValue"in r}function ks(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function xn(r){return!!r&&"mapValue"in r}function Lu(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ke(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ee(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ke(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ke(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Fu(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ke(e)}setAll(t){let e=at.emptyPath(),n={},s=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,n,s),n={},s=[],e=h.popLast()}u?n[h.lastSegment()]=Ke(u):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];xn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ee(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new Et(Ke(this.value))}}function _o(r){const t=[];return Ee(r.fields,(e,n)=>{const s=new at([e]);if(xn(n)){const o=_o(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,s,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),Et.empty(),0)}static newFoundDocument(t,e,n,s){return new gt(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),Et.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),Et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e){this.position=t,this.inclusive=e}}function Ds(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=me(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ns(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Vt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Uu(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{}class tt extends yo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Bu(t,e,n):e==="array-contains"?new Ku(t,n):e==="in"?new Gu(t,n):e==="not-in"?new $u(t,n):e==="array-contains-any"?new Qu(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ju(t,n):new zu(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(me(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends yo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return To(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function To(r){return r.op==="and"}function Eo(r){return qu(r)&&To(r)}function qu(r){for(const t of r.filters)if(t instanceof St)return!1;return!0}function Or(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+pe(r.value);if(Eo(r))return r.filters.map(t=>Or(t)).join(",");{const t=r.filters.map(e=>Or(e)).join(",");return`${r.op}(${t})`}}function vo(r,t){return r instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.field.isEqual(s.field)&&Vt(n.value,s.value)}(r,t):r instanceof St?function(n,s){return s instanceof St&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,h)=>o&&vo(u,s.filters[h]),!0):!1}(r,t):void O()}function Io(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${pe(e.value)}`}(r):r instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Io).join(" ,")+"}"}(r):"Filter"}class Bu extends tt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ju extends tt{constructor(t,e){super(t,"in",e),this.keys=Ao("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class zu extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Ao("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ao(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Ku extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yr(e)&&Je(e.arrayValue,this.value)}}class Gu extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Je(this.value.arrayValue,e)}}class $u extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Je(this.value.arrayValue,e)}}class Qu extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Je(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e=null,n=[],s=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function bs(r,t=null,e=[],n=[],s=null,o=null,u=null){return new Wu(r,t,e,n,s,o,u)}function Jr(r){const t=F(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Or(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Qn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>pe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>pe(n)).join(",")),t.ue=e}return t.ue}function Zr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Uu(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!vo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ns(r.startAt,t.startAt)&&Ns(r.endAt,t.endAt)}function Lr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e=null,n=[],s=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hu(r,t,e,n,s,o,u,h){return new Wn(r,t,e,n,s,o,u,h)}function wo(r){return new Wn(r)}function xs(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Xu(r){return r.collectionGroup!==null}function Ge(r){const t=F(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new ut(at.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new qn(o,n))}),e.has(at.keyField().canonicalString())||t.ce.push(new qn(at.keyField(),n))}return t.ce}function Rt(r){const t=F(r);return t.le||(t.le=Yu(t,Ge(r))),t.le}function Yu(r,t){if(r.limitType==="F")return bs(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new qn(s.field,o)});const e=r.endAt?new Un(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Un(r.startAt.position,r.startAt.inclusive):null;return bs(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Fr(r,t,e){return new Wn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Hn(r,t){return Zr(Rt(r),Rt(t))&&r.limitType===t.limitType}function Ro(r){return`${Jr(Rt(r))}|lt:${r.limitType}`}function ue(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Io(s)).join(", ")}]`),Qn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pe(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pe(s)).join(",")),`Target(${n})`}(Rt(r))}; limitType=${r.limitType})`}function Xn(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of Ge(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,h,d){const f=Ds(u,h,d);return u.inclusive?f<=0:f<0}(n.startAt,Ge(n),s)||n.endAt&&!function(u,h,d){const f=Ds(u,h,d);return u.inclusive?f>=0:f>0}(n.endAt,Ge(n),s))}(r,t)}function Ju(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Po(r){return(t,e)=>{let n=!1;for(const s of Ge(r)){const o=Zu(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Zu(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?me(d,f):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return po(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new X(M.comparator);function xt(){return tl}const Vo=new X(M.comparator);function je(...r){let t=Vo;for(const e of r)t=t.insert(e.key,e);return t}function So(r){let t=Vo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Xt(){return $e()}function Co(){return $e()}function $e(){return new ve(r=>r.toString(),(r,t)=>r.isEqual(t))}const el=new X(M.comparator),nl=new ut(M.comparator);function U(...r){let t=nl;for(const e of r)t=t.add(e);return t}const rl=new ut(j);function il(){return rl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fn(t)?"-0":t}}function ko(r){return{integerValue:""+r}}function sl(r,t){return xu(t)?ko(t):ti(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this._=void 0}}function ol(r,t,e){return r instanceof Bn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hr(o)&&(o=Xr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof Ze?No(r,t):r instanceof tn?bo(r,t):function(s,o){const u=Do(s,o),h=Ms(u)+Ms(s.Pe);return Mr(u)&&Mr(s.Pe)?ko(h):ti(s.serializer,h)}(r,t)}function al(r,t,e){return r instanceof Ze?No(r,t):r instanceof tn?bo(r,t):e}function Do(r,t){return r instanceof jn?function(n){return Mr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Bn extends Yn{}class Ze extends Yn{constructor(t){super(),this.elements=t}}function No(r,t){const e=xo(t);for(const n of r.elements)e.some(s=>Vt(s,n))||e.push(n);return{arrayValue:{values:e}}}class tn extends Yn{constructor(t){super(),this.elements=t}}function bo(r,t){let e=xo(t);for(const n of r.elements)e=e.filter(s=>!Vt(s,n));return{arrayValue:{values:e}}}class jn extends Yn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ms(r){return J(r.integerValue||r.doubleValue)}function xo(r){return Yr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ul(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Ze&&s instanceof Ze||n instanceof tn&&s instanceof tn?fe(n.elements,s.elements,Vt):n instanceof jn&&s instanceof jn?Vt(n.Pe,s.Pe):n instanceof Bn&&s instanceof Bn}(r.transform,t.transform)}class ll{constructor(t,e){this.version=t,this.transformResults=e}}class wt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Jn{}function Mo(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ei(r.key,wt.none()):new rn(r.key,r.data,wt.none());{const e=r.data,n=Et.empty();let s=new ut(at.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new ne(r.key,n,new At(s.toArray()),wt.none())}}function hl(r,t,e){r instanceof rn?function(s,o,u){const h=s.value.clone(),d=Ls(s.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof ne?function(s,o,u){if(!Mn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Ls(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Oo(s)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Qe(r,t,e,n){return r instanceof rn?function(o,u,h,d){if(!Mn(o.precondition,u))return h;const f=o.value.clone(),_=Fs(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ne?function(o,u,h,d){if(!Mn(o.precondition,u))return h;const f=Fs(o.fieldTransforms,d,u),_=u.data;return _.setAll(Oo(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(r,t,e,n):function(o,u,h){return Mn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function cl(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=Do(n.transform,s||null);o!=null&&(e===null&&(e=Et.empty()),e.set(n.field,o))}return e||null}function Os(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fe(n,s,(o,u)=>ul(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class rn extends Jn{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Jn{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Oo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Ls(r,t,e){const n=new Map;z(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,h=t.data.field(o.field);n.set(o.field,al(u,h,e[s]))}return n}function Fs(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,ol(o,u,t))}return n}class ei extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dl extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&hl(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Qe(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Qe(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Co();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(s.key)?null:h;const d=Mo(u,h);d!==null&&n.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&fe(this.mutations,t.mutations,(e,n)=>Os(e,n))&&fe(this.baseMutations,t.baseMutations,(e,n)=>Os(e,n))}}class ni{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){z(t.mutations.length===n.length);let s=function(){return el}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new ni(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,q;function gl(r){switch(r){default:return O();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Lo(r){if(r===void 0)return bt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Z.OK:return V.OK;case Z.CANCELLED:return V.CANCELLED;case Z.UNKNOWN:return V.UNKNOWN;case Z.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Z.INTERNAL:return V.INTERNAL;case Z.UNAVAILABLE:return V.UNAVAILABLE;case Z.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Z.NOT_FOUND:return V.NOT_FOUND;case Z.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Z.ABORTED:return V.ABORTED;case Z.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Z.DATA_LOSS:return V.DATA_LOSS;default:return O()}}(q=Z||(Z={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Yt([4294967295,4294967295],0);function Us(r){const t=_l().encode(r),e=new oo;return e.update(t),new Uint8Array(e.digest())}function qs(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,n],0),new Yt([s,o],0)]}class ri{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ze(`Invalid padding: ${e}`);if(n<0)throw new ze(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ze(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ze(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Yt.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Yt.fromNumber(n)));return s.compare(yl)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Us(t),[n,s]=qs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ri(o,s,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Ie===0)return;const e=Us(t),[n,s]=qs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ze extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,sn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Zn(L.min(),s,new X(j),xt(),U())}}class sn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sn(n,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Fo{constructor(t,e){this.targetId=t,this.me=e}}class Uo{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Bs{constructor(){this.fe=0,this.ge=zs(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),n=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new sn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=zs()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tl{constructor(t){this.Le=t,this.Be=new Map,this.ke=xt(),this.qe=js(),this.Qe=new X(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Lr(o))if(n===0){const u=new M(o.path);this.Ue(e,u,gt.newNoDocument(u,L.min()))}else z(n===1);else{const u=this.Ye(e);if(u!==n){const h=this.Ze(t),d=h?this.Xe(h,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,h;try{u=Zt(n).toUint8Array()}catch(d){if(d instanceof go)return de("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new ri(u,s,o)}catch(d){return de(d instanceof ze?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.Ie===0?null:h}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&Lr(h.target)){const d=new M(h.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,gt.newNoDocument(d,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=U();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new Zn(t,e,this.Qe,this.ke,n);return this.ke=xt(),this.qe=js(),this.Qe=new X(j),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Bs,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Bs),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function js(){return new X(M.comparator)}function zs(){return new X(M.comparator)}const El={asc:"ASCENDING",desc:"DESCENDING"},vl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Il={and:"AND",or:"OR"};class Al{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ur(r,t){return r.useProto3Json||Qn(t)?t:{value:t}}function zn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qo(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function wl(r,t){return zn(r,t.toTimestamp())}function Pt(r){return z(!!r),L.fromTimestamp(function(e){const n=Kt(e);return new et(n.seconds,n.nanos)}(r))}function ii(r,t){return qr(r,t).canonicalString()}function qr(r,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Bo(r){const t=H.fromString(r);return z($o(t)),t}function Br(r,t){return ii(r.databaseId,t.path)}function Cr(r,t){const e=Bo(t);if(e.get(1)!==r.databaseId.projectId)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(zo(e))}function jo(r,t){return ii(r.databaseId,t)}function Rl(r){const t=Bo(r);return t.length===4?H.emptyPath():zo(t)}function jr(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zo(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ks(r,t,e){return{name:Br(r,t),fields:e.value.mapValue.fields}}function Pl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(z(_===void 0||typeof _=="string"),lt.fromBase64String(_||"")):(z(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),lt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(f){const _=f.code===void 0?V.UNKNOWN:Lo(f.code);return new b(_,f.message||"")}(u);e=new Uo(n,s,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Cr(r,n.document.name),o=Pt(n.document.updateTime),u=n.document.createTime?Pt(n.document.createTime):L.min(),h=new Et({mapValue:{fields:n.document.fields}}),d=gt.newFoundDocument(s,o,u,h),f=n.targetIds||[],_=n.removedTargetIds||[];e=new On(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Cr(r,n.document),o=n.readTime?Pt(n.readTime):L.min(),u=gt.newNoDocument(s,o),h=n.removedTargetIds||[];e=new On([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Cr(r,n.document),o=n.removedTargetIds||[];e=new On([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new pl(s,o),h=n.targetId;e=new Fo(h,u)}}return e}function Vl(r,t){let e;if(t instanceof rn)e={update:Ks(r,t.key,t.value)};else if(t instanceof ei)e={delete:Br(r,t.key)};else if(t instanceof ne)e={update:Ks(r,t.key,t.data),updateMask:Ol(t.fieldMask)};else{if(!(t instanceof dl))return O();e={verify:Br(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof Bn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Ze)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof tn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof jn)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:wl(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function Sl(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(s,o){let u=s.updateTime?Pt(s.updateTime):Pt(o);return u.isEqual(L.min())&&(u=Pt(o)),new ll(u,s.transformResults||[])}(e,t))):[]}function Cl(r,t){return{documents:[jo(r,t.path)]}}function kl(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=jo(r,s);const o=function(f){if(f.length!==0)return Go(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:le(R.field),direction:bl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Ur(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Dl(r){let t=Rl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){z(n===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=Ko(w);return R instanceof St&&Eo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(N){return new qn(he(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(w){let R;return R=typeof w=="object"?w.value:w,Qn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(w){const R=!!w.before,S=w.values||[];return new Un(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,S=w.values||[];return new Un(S,R)}(e.endAt)),Hu(t,s,u,o,h,"F",d,f)}function Nl(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ko(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=he(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=he(e.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=he(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=he(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(he(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>Ko(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function bl(r){return El[r]}function xl(r){return vl[r]}function Ml(r){return Il[r]}function le(r){return{fieldPath:r.canonicalString()}}function he(r){return at.fromServerFormat(r.fieldPath)}function Go(r){return r instanceof tt?function(e){if(e.op==="=="){if(ks(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NAN"}};if(Cs(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ks(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NOT_NAN"}};if(Cs(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:le(e.field),op:xl(e.op),value:e.value}}}(r):r instanceof St?function(e){const n=e.getFilters().map(s=>Go(s));return n.length===1?n[0]:{compositeFilter:{op:Ml(e.op),filters:n}}}(r):O()}function Ol(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $o(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e,n,s,o=L.min(),u=L.min(),h=lt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t){this.ct=t}}function Fl(r){const t=Dl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.un=new ql}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(zt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class ql{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ut(H.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ut(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ge(0)}static kn(){return new ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.changes=new ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Qe(n.mutation,s,At.empty(),et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const s=Xt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=je();return o.forEach((h,d)=>{u=u.insert(h,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Xt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,s){let o=xt();const u=$e(),h=function(){return $e()}();return e.forEach((d,f)=>{const _=n.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof ne)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Qe(_.mutation,f,_.mutation.getFieldMask(),et.now())):u.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return h.set(f,new jl(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(t,e){const n=$e();let s=new X((u,h)=>u-h),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||At.empty();_=h.applyToLocalView(f,_),n.set(d,_);const w=(s.get(h.batchId)||U()).add(d);s=s.insert(h.batchId,w)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,w=Co();_.forEach(R=>{if(!o.has(R)){const S=Mo(e.get(R),n.get(R));S!==null&&w.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):P.resolve(Xt());let h=-1,d=o;return u.next(f=>P.forEach(f,(_,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,U())).next(_=>({batchId:h,changes:So(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let s=je();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=je();return this.indexManager.getCollectionParents(t,o).next(h=>P.forEach(h,d=>{const f=function(w,R){return new Wn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let h=je();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Qe(_.mutation,f,At.empty(),et.now()),Xn(e,f)&&(h=h.insert(d,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Fl(s.bundledQuery),readTime:Pt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.overlays=new X(M.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Xt();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const s=Xt(),o=e.length+1,u=new M(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&s.set(d.getKey(),d)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new X((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=Xt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=Xt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=s)););return P.resolve(h)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new ml(e,n));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.Tr=new ut(rt.Er),this.dr=new ut(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new rt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new rt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new M(new H([])),n=new rt(e,t),s=new rt(e,t+1),o=[];return this.dr.forEachInRange([n,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new H([])),n=new rt(e,t),s=new rt(e,t+1);let o=U();return this.dr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new rt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class rt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(rt.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new fl(o,e,n,s);this.mutationQueue.push(u);for(const h of s)this.br=this.br.add(new rt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],u=>{const h=this.Dr(u.wr);o.push(h)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ut(j);return e.forEach(s=>{const o=new rt(s,0),u=new rt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],h=>{n=n.add(h.wr)})}),P.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new rt(new M(o),0);let h=new ut(j);return this.br.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(h=h.add(d.wr)),!0)},u),P.resolve(this.Cr(h))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){z(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return P.forEach(e.mutations,s=>{const o=new rt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new rt(e,0),s=this.br.firstAfterOrEqual(n);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t){this.Mr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=xt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=xt();const u=e.path,h=new M(u.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||ku(Cu(_),n)<=0||(s.has(_.key)||Xn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,s){O()}Or(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Hl(this)}getSize(t){return P.resolve(this.size)}}class Hl extends Bl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.persistence=t,this.Nr=new ve(e=>Jr(e),Zr),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new si,this.targetCount=0,this.kr=ge.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ge(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Wr(0),this.Kr=!1,this.Kr=!0,this.$r=new $l,this.referenceDelegate=t(this),this.Ur=new Xl(this),this.indexManager=new Ul,this.remoteDocumentCache=function(s){return new Wl(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Ll(e),this.Gr=new Kl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Gl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Ql(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const s=new Jl(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Jl extends Nu{constructor(t){super(),this.currentSequenceNumber=t}}class oi{constructor(t){this.persistence=t,this.Jr=new si,this.Yr=null}static Zr(t){return new oi(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,n=>{const s=M.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ai(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _u()?8:bu(yu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Zl;return this.Xi(t,e,u).next(h=>{if(o.result=h,this.zi)return this.es(t,e,u,h.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(qe()<=Ut.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(qe()<=Ut.DEBUG&&D("QueryEngine","Query:",ue(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(qe()<=Ut.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):P.resolve())}Yi(t,e){if(xs(e))return P.resolve(null);let n=Rt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Fr(e,null,"F"),n=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.Ji.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.ts(e,h);return this.ns(e,f,u,d.readTime)?this.Yi(t,Fr(e,null,"F")):this.rs(t,f,e,d)}))})))}Zi(t,e,n,s){return xs(e)||s.isEqual(L.min())?P.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const u=this.ts(e,o);return this.ns(e,u,n,s)?P.resolve(null):(qe()<=Ut.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ue(e)),this.rs(t,u,e,Su(s,-1)).next(h=>h))})}ts(t,e){let n=new ut(Po(t));return e.forEach((s,o)=>{Xn(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return qe()<=Ut.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ue(e)),this.Ji.getDocumentsMatchingQuery(t,e,zt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new X(j),this._s=new ve(o=>Jr(o),Zr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function nh(r,t,e,n){return new eh(r,t,e,n)}async function Qo(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let d=U();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({hs:f,removedBatchIds:u,addedBatchIds:h}))})})}function rh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(h,d,f,_){const w=f.batch,R=w.keys();let S=P.resolve();return R.forEach(N=>{S=S.next(()=>_.getEntry(d,N)).next(x=>{const k=f.docVersions.get(N);z(k!==null),x.version.compareTo(k)<0&&(w.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),_.addEntry(x)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(d,w))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let d=U();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Wo(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ih(r,t){const e=F(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const h=[];t.targetChanges.forEach((_,w)=>{const R=s.get(w);if(!R)return;h.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,_.addedDocuments,w)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),s=s.insert(w,S),function(x,k,K){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,S,_)&&h.push(e.Ur.updateTargetData(o,S))});let d=xt(),f=U();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(sh(o,u,t.documentUpdates).next(_=>{d=_.Ps,f=_.Is})),!n.isEqual(L.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return P.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.os=s,o))}function sh(r,t,e){let n=U(),s=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=xt();return e.forEach((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(h)),d.isNoDocument()&&d.version.isEqual(L.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):D("LocalStore","Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)}),{Ps:u,Is:s}})}function oh(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ah(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,P.resolve(s)):e.Ur.allocateTargetId(n).next(u=>(s=new qt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function zr(r,t,e){const n=F(r),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!nn(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function Gs(r,t,e){const n=F(r);let s=L.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=F(d),R=w._s.get(_);return R!==void 0?P.resolve(w.os.get(R)):w.Ur.getTargetData(f,_)}(n,u,Rt(t)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,h.targetId).next(d=>{o=d})}).next(()=>n.ss.getDocumentsMatchingQuery(u,t,e?s:L.min(),e?o:U())).next(h=>(uh(n,Ju(t),h),{documents:h,Ts:o})))}function uh(r,t,e){let n=r.us.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class $s{constructor(){this.activeTargetIds=il()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lh{constructor(){this.so=new $s,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new $s,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn=null;function kr(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class fh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,u){const h=kr(),d=this.xo(e,n.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${h}:`,d,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,d,f,s).then(_=>(D("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw de("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",d,"request:",s),_})}Lo(e,n,s,o,u,h){return this.Mo(e,n,s,o,u)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Te}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,n){const s=ch[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=kr();return new Promise((u,h)=>{const d=new ao;d.setWithCredentials(!0),d.listenOnce(uo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case bn.NO_ERROR:const _=d.getResponseJson();D(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case bn.TIMEOUT:D(mt,`RPC '${t}' ${o} timed out`),h(new b(V.DEADLINE_EXCEEDED,"Request time out"));break;case bn.HTTP_ERROR:const w=d.getStatus();if(D(mt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const N=function(k){const K=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(K)>=0?K:V.UNKNOWN}(S.status);h(new b(N,S.message))}else h(new b(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new b(V.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(mt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,n,15)})}Bo(t,e,n){const s=kr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=co(),h=ho(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");D(mt,`Creating RPC '${t}' stream ${s}: ${_}`,d);const w=u.createWebChannel(_,d);let R=!1,S=!1;const N=new dh({Io:k=>{S?D(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(R||(D(mt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),D(mt,`RPC '${t}' stream ${s} sending:`,k),w.send(k))},To:()=>w.close()}),x=(k,K,G)=>{k.listen(K,Q=>{try{G(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return x(w,Be.EventType.OPEN,()=>{S||(D(mt,`RPC '${t}' stream ${s} transport opened.`),N.yo())}),x(w,Be.EventType.CLOSE,()=>{S||(S=!0,D(mt,`RPC '${t}' stream ${s} transport closed`),N.So())}),x(w,Be.EventType.ERROR,k=>{S||(S=!0,de(mt,`RPC '${t}' stream ${s} transport errored:`,k),N.So(new b(V.UNAVAILABLE,"The operation could not be completed")))}),x(w,Be.EventType.MESSAGE,k=>{var K;if(!S){const G=k.data[0];z(!!G);const Q=G,nt=Q.error||((K=Q[0])===null||K===void 0?void 0:K.error);if(nt){D(mt,`RPC '${t}' stream ${s} received error:`,nt);const Ct=nt.status;let it=function(g){const y=Z[g];if(y!==void 0)return Lo(y)}(Ct),E=nt.message;it===void 0&&(it=V.INTERNAL,E="Unknown error status: "+Ct+" with message "+nt.message),S=!0,N.So(new b(it,E)),w.close()}else D(mt,`RPC '${t}' stream ${s} received:`,G),N.bo(G)}}),x(h,lo.STAT_EVENT,k=>{k.stat===br.PROXY?D(mt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===br.NOPROXY&&D(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Dr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(r){return new Al(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,n,s,o,u,h,d){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ho(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new b(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mh extends Xo{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Pl(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Pt(u.readTime):L.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=jr(this.serializer),e.addTarget=function(o,u){let h;const d=u.target;if(h=Lr(d)?{documents:Cl(o,d)}:{query:kl(o,d)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=qo(o,u.resumeToken);const f=Ur(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){h.readTime=zn(o,u.snapshotVersion.toTimestamp());const f=Ur(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,t);const n=Nl(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=jr(this.serializer),e.removeTarget=t,this.a_(e)}}class ph extends Xo{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Sl(t.writeResults,t.commitTime),n=Pt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=jr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Vl(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,qr(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(V.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Lo(t,qr(e,n),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(V.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _h{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{n.enqueueAndForget(async()=>{re(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=F(d);f.L_.add(4),await on(f),f.q_.set("Unknown"),f.L_.delete(4),await er(f)}(this))})}),this.q_=new _h(n,s)}}async function er(r){if(re(r))for(const t of r.B_)await t(!0)}async function on(r){for(const t of r.B_)await t(!1)}function Yo(r,t){const e=F(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ci(e)?hi(e):Ie(e).r_()&&li(e,t))}function ui(r,t){const e=F(r),n=Ie(e);e.N_.delete(t),n.r_()&&Jo(e,t),e.N_.size===0&&(n.r_()?n.o_():re(e)&&e.q_.set("Unknown"))}function li(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ie(r).A_(t)}function Jo(r,t){r.Q_.xe(t),Ie(r).R_(t)}function hi(r){r.Q_=new Tl({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Ie(r).start(),r.q_.v_()}function ci(r){return re(r)&&!Ie(r).n_()&&r.N_.size>0}function re(r){return F(r).L_.size===0}function Zo(r){r.Q_=void 0}async function Th(r){r.q_.set("Online")}async function Eh(r){r.N_.forEach((t,e)=>{li(r,t)})}async function vh(r,t){Zo(r),ci(r)?(r.q_.M_(t),hi(r)):r.q_.set("Unknown")}async function Ih(r,t,e){if(r.q_.set("Online"),t instanceof Uo&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const h of o.targetIds)s.N_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.N_.delete(h),s.Q_.removeTarget(h))}(r,t)}catch(n){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Kn(r,n)}else if(t instanceof On?r.Q_.Ke(t):t instanceof Fo?r.Q_.He(t):r.Q_.We(t),!e.isEqual(L.min()))try{const n=await Wo(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.Q_.rt(u);return h.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.N_.get(f);_&&o.N_.set(f,_.withResumeToken(d.resumeToken,u))}}),h.targetMismatches.forEach((d,f)=>{const _=o.N_.get(d);if(!_)return;o.N_.set(d,_.withResumeToken(lt.EMPTY_BYTE_STRING,_.snapshotVersion)),Jo(o,d);const w=new qt(_.target,d,f,_.sequenceNumber);li(o,w)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){D("RemoteStore","Failed to raise snapshot:",n),await Kn(r,n)}}async function Kn(r,t,e){if(!nn(t))throw t;r.L_.add(1),await on(r),r.q_.set("Offline"),e||(e=()=>Wo(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await er(r)})}function ta(r,t){return t().catch(e=>Kn(r,e,t))}async function nr(r){const t=F(r),e=Gt(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ah(t);)try{const s=await oh(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,wh(t,s)}catch(s){await Kn(t,s)}ea(t)&&na(t)}function Ah(r){return re(r)&&r.O_.length<10}function wh(r,t){r.O_.push(t);const e=Gt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function ea(r){return re(r)&&!Gt(r).n_()&&r.O_.length>0}function na(r){Gt(r).start()}async function Rh(r){Gt(r).p_()}async function Ph(r){const t=Gt(r);for(const e of r.O_)t.m_(e.mutations)}async function Vh(r,t,e){const n=r.O_.shift(),s=ni.from(n,t,e);await ta(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await nr(r)}async function Sh(r,t){t&&Gt(r).V_&&await async function(n,s){if(function(u){return gl(u)&&u!==V.ABORTED}(s.code)){const o=n.O_.shift();Gt(n).s_(),await ta(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await nr(n)}}(r,t),ea(r)&&na(r)}async function Ws(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const n=re(e);e.L_.add(3),await on(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await er(e)}async function Ch(r,t){const e=F(r);t?(e.L_.delete(2),await er(e)):t||(e.L_.add(2),await on(e),e.q_.set("Unknown"))}function Ie(r){return r.K_||(r.K_=function(e,n,s){const o=F(e);return o.w_(),new mh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Th.bind(null,r),Ro:Eh.bind(null,r),mo:vh.bind(null,r),d_:Ih.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),ci(r)?hi(r):r.q_.set("Unknown")):(await r.K_.stop(),Zo(r))})),r.K_}function Gt(r){return r.U_||(r.U_=function(e,n,s){const o=F(e);return o.w_(),new ph(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rh.bind(null,r),mo:Sh.bind(null,r),f_:Ph.bind(null,r),g_:Vh.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await nr(r)):(await r.U_.stop(),r.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,h=new di(t,e,u,s,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fi(r,t){if(bt("AsyncQueue",`${t}: ${r}`),nn(r))return new b(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=je(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ce;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.W_=new X(M.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class _e{constructor(t,e,n,s,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new _e(t,e,ce.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Dh{constructor(){this.queries=Xs(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=Xs(),o.forEach((u,h)=>{for(const d of h.j_)d.onError(n)})})(this,new b(V.ABORTED,"Firestore shutting down"))}}function Xs(){return new ve(r=>Ro(r),Hn)}async function Nh(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new kh,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const h=fi(u,`Initialization of query '${ue(t.query)}' failed`);return void t.onError(h)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&mi(e)}async function bh(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function xh(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const h of u.j_)h.X_(s)&&(n=!0);u.z_=s}}n&&mi(e)}function Mh(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function mi(r){r.Y_.forEach(t=>{t.next()})}var Kr,Ys;(Ys=Kr||(Kr={})).ea="default",Ys.Cache="cache";class Oh{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new _e(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=_e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Kr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){this.key=t}}class ia{constructor(t){this.key=t}}class Lh{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=Po(t),this.Ra=new ce(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Hs,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,h=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,w)=>{const R=s.get(_),S=Xn(this.query,w)?w:null,N=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;R&&S?R.data.isEqual(S.data)?N!==x&&(n.track({type:3,doc:S}),k=!0):this.ga(R,S)||(n.track({type:2,doc:S}),k=!0,(d&&this.Aa(S,d)>0||f&&this.Aa(S,f)<0)&&(h=!0)):!R&&S?(n.track({type:0,doc:S}),k=!0):R&&!S&&(n.track({type:1,doc:R}),k=!0,(d||f)&&(h=!0)),k&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ra:u,fa:n,ns:h,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((_,w)=>function(S,N){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return x(S)-x(N)}(_.type,w.type)||this.Aa(_.doc,w.doc)),this.pa(n),s=s!=null&&s;const h=e&&!s?this.ya():[],d=this.da.size===0&&this.current&&!s?1:0,f=d!==this.Ea;return this.Ea=d,u.length!==0||f?{snapshot:new _e(this.query,t.Ra,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:h}:{wa:h}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hs,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new ia(n))}),this.da.forEach(n=>{t.has(n)||e.push(new ra(n))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return _e.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Fh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Uh{constructor(t){this.key=t,this.va=!1}}class qh{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new ve(h=>Ro(h),Hn),this.Ma=new Map,this.xa=new Set,this.Oa=new X(M.comparator),this.Na=new Map,this.La=new si,this.Ba={},this.ka=new Map,this.qa=ge.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Bh(r,t,e=!0){const n=ha(r);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await sa(n,t,e,!0),s}async function jh(r,t){const e=ha(r);await sa(e,t,!0,!1)}async function sa(r,t,e,n){const s=await ah(r.localStore,Rt(t)),o=s.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await zh(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&Yo(r.remoteStore,s),h}async function zh(r,t,e,n,s){r.Ka=(w,R,S)=>async function(x,k,K,G){let Q=k.view.ma(K);Q.ns&&(Q=await Gs(x.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,Q)));const nt=G&&G.targetChanges.get(k.targetId),Ct=G&&G.targetMismatches.get(k.targetId)!=null,it=k.view.applyChanges(Q,x.isPrimaryClient,nt,Ct);return Zs(x,k.targetId,it.wa),it.snapshot}(r,w,R,S);const o=await Gs(r.localStore,t,!0),u=new Lh(t,o.Ts),h=u.ma(o.documents),d=sn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(h,r.isPrimaryClient,d);Zs(r,e,f.wa);const _=new Fh(t,e,u);return r.Fa.set(t,_),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function Kh(r,t,e){const n=F(r),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(u=>!Hn(u,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await zr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&ui(n.remoteStore,s.targetId),Gr(n,s.targetId)}).catch(en)):(Gr(n,s.targetId),await zr(n.localStore,s.targetId,!0))}async function Gh(r,t){const e=F(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ui(e.remoteStore,n.targetId))}async function $h(r,t,e){const n=Zh(r);try{const s=await function(u,h){const d=F(u),f=et.now(),_=h.reduce((S,N)=>S.add(N.key),U());let w,R;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=xt(),x=U();return d.cs.getEntries(S,_).next(k=>{N=k,N.forEach((K,G)=>{G.isValidDocument()||(x=x.add(K))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,N)).next(k=>{w=k;const K=[];for(const G of h){const Q=cl(G,w.get(G.key).overlayedDocument);Q!=null&&K.push(new ne(G.key,Q,_o(Q.value.mapValue),wt.exists(!0)))}return d.mutationQueue.addMutationBatch(S,f,K,h)}).next(k=>{R=k;const K=k.applyToLocalDocumentSet(w,x);return d.documentOverlayCache.saveOverlays(S,k.batchId,K)})}).then(()=>({batchId:R.batchId,changes:So(w)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,h,d){let f=u.Ba[u.currentUser.toKey()];f||(f=new X(j)),f=f.insert(h,d),u.Ba[u.currentUser.toKey()]=f}(n,s.batchId,e),await an(n,s.changes),await nr(n.remoteStore)}catch(s){const o=fi(s,"Failed to persist write");e.reject(o)}}async function oa(r,t){const e=F(r);try{const n=await ih(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Na.get(o);u&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?z(u.va):s.removedDocuments.size>0&&(z(u.va),u.va=!1))}),await an(e,n,t)}catch(n){await en(n)}}function Js(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,u)=>{const h=u.view.Z_(t);h.snapshot&&s.push(h.snapshot)}),function(u,h){const d=F(u);d.onlineState=h;let f=!1;d.queries.forEach((_,w)=>{for(const R of w.j_)R.Z_(h)&&(f=!0)}),f&&mi(d)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Qh(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let u=new X(M.comparator);u=u.insert(o,gt.newNoDocument(o,L.min()));const h=U().add(o),d=new Zn(L.min(),new Map,new X(j),u,h);await oa(n,d),n.Oa=n.Oa.remove(o),n.Na.delete(t),pi(n)}else await zr(n.localStore,t,!1).then(()=>Gr(n,t,e)).catch(en)}async function Wh(r,t){const e=F(r),n=t.batch.batchId;try{const s=await rh(e.localStore,t);ua(e,n,null),aa(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await an(e,s)}catch(s){await en(s)}}async function Hh(r,t,e){const n=F(r);try{const s=await function(u,h){const d=F(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return d.mutationQueue.lookupMutationBatch(f,h).next(w=>(z(w!==null),_=w.keys(),d.mutationQueue.removeMutationBatch(f,w))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,_,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>d.localDocuments.getDocuments(f,_))})}(n.localStore,t);ua(n,t,e),aa(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await an(n,s)}catch(s){await en(s)}}function aa(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function ua(r,t,e){const n=F(r);let s=n.Ba[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function Gr(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||la(r,n)})}function la(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(ui(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),pi(r))}function Zs(r,t,e){for(const n of e)n instanceof ra?(r.La.addReference(n.key,t),Xh(r,n)):n instanceof ia?(D("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||la(r,n.key)):O()}function Xh(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(D("SyncEngine","New document in limbo: "+e),r.xa.add(n),pi(r))}function pi(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new M(H.fromString(t)),n=r.qa.next();r.Na.set(n,new Uh(e)),r.Oa=r.Oa.insert(e,n),Yo(r.remoteStore,new qt(Rt(wo(e.path)),n,"TargetPurposeLimboResolution",Wr.oe))}}async function an(r,t,e){const n=F(r),s=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach((h,d)=>{u.push(n.Ka(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){s.push(f);const w=ai.Wi(d.targetId,f);o.push(w)}}))}),await Promise.all(u),n.Ca.d_(s),await async function(d,f){const _=F(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(f,R=>P.forEach(R.$i,S=>_.persistence.referenceDelegate.addReference(w,R.targetId,S)).next(()=>P.forEach(R.Ui,S=>_.persistence.referenceDelegate.removeReference(w,R.targetId,S)))))}catch(w){if(!nn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const S=_.os.get(R),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);_.os=_.os.insert(R,x)}}}(n.localStore,o))}async function Yh(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const n=await Qo(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(h=>{h.forEach(d=>{d.reject(new b(V.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await an(e,n.hs)}}function Jh(r,t){const e=F(r),n=e.Na.get(t);if(n&&n.va)return U().add(n.key);{let s=U();const o=e.Ma.get(t);if(!o)return s;for(const u of o){const h=e.Fa.get(u);s=s.unionWith(h.view.Va)}return s}}function ha(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=oa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qh.bind(null,t),t.Ca.d_=xh.bind(null,t.eventManager),t.Ca.$a=Mh.bind(null,t.eventManager),t}function Zh(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hh.bind(null,t),t}class Gn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=tr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return nh(this.persistence,new th,t.initialUser,this.serializer)}Ga(t){return new Yl(oi.Zr,this.serializer)}Wa(t){return new lh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gn.provider={build:()=>new Gn};class $r{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Js(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yh.bind(null,this.syncEngine),await Ch(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Dh}()}createDatastore(t){const e=tr(t.databaseInfo.databaseId),n=function(o){return new fh(o)}(t.databaseInfo);return function(o,u,h,d){return new gh(o,u,h,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,h){return new yh(n,s,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Js(this.syncEngine,e,0),function(){return Qs.D()?new Qs:new hh}())}createSyncEngine(t,e){return function(s,o,u,h,d,f,_){const w=new qh(s,o,u,h,d,f);return _&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await on(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}$r.provider={build:()=>new $r};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=mo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=fi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Nr(r,t){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Qo(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function to(r,t){r.asyncQueue.verifyOperationInProgress();const e=await nc(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ws(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ws(t.remoteStore,s)),r._onlineComponents=t}async function nc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;de("Error using user provided cache. Falling back to memory cache: "+e),await Nr(r,new Gn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Nr(r,new Gn);return r._offlineComponents}async function ca(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await to(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await to(r,new $r))),r._onlineComponents}function rc(r){return ca(r).then(t=>t.syncEngine)}async function ic(r){const t=await ca(r),e=t.eventManager;return e.onListen=Bh.bind(null,t.syncEngine),e.onUnlisten=Kh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=jh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Gh.bind(null,t.syncEngine),e}function sc(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,d,f){const _=new tc({next:R=>{_.Za(),u.enqueueAndForget(()=>bh(o,w)),R.fromCache&&d.source==="server"?f.reject(new b(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new Oh(h,_,{includeMetadataChanges:!0,_a:!0});return Nh(o,w)}(await ic(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(r,t,e){if(!e)throw new b(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function oc(r,t,e,n){if(t===!0&&n===!0)throw new b(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function no(r){if(!M.isDocumentKey(r))throw new b(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ro(r){if(M.isDocumentKey(r))throw new b(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function gi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function ee(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gi(r);throw new b(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}oc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=da((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new io({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new io(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Tu;switch(n.type){case"firstParty":return new Au(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=eo.get(e);n&&(D("ComponentProvider","Removing Datastore"),eo.delete(e),n.terminate())}(this),Promise.resolve()}}function ac(r,t,e,n={}){var s;const o=(r=ee(r,rr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&de("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=pt.MOCK_USER;else{h=pu(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new b(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new pt(f)}r._authCredentials=new Eu(new fo(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ir(this.firestore,t,this._query)}}class vt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vt(this.firestore,t,this._key)}}class jt extends ir{constructor(t,e,n){super(t,e,wo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vt(this.firestore,null,new M(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function Vc(r,t,...e){if(r=We(r),fa("collection","path",t),r instanceof rr){const n=H.fromString(t,...e);return ro(n),new jt(r,null,n)}{if(!(r instanceof vt||r instanceof jt))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return ro(n),new jt(r.firestore,null,n)}}function uc(r,t,...e){if(r=We(r),arguments.length===1&&(t=mo.newId()),fa("doc","path",t),r instanceof rr){const n=H.fromString(t,...e);return no(n),new vt(r,null,new M(n))}{if(!(r instanceof vt||r instanceof jt))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return no(n),new vt(r.firestore,r instanceof jt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ho(this,"async_queue_retry"),this.Vu=()=>{const n=Dr();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Dr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Dr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Bt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!nn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw bt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=di.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class un extends rr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new so,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new so(t),this._firestoreClient=void 0,await t}}}function Sc(r,t){const e=typeof r=="object"?r:du(),n=typeof r=="string"?r:"(default)",s=fu(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=mu("firestore");o&&ac(s,...o)}return s}function ma(r){if(r._terminated)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||lc(r),r._firestoreClient}function lc(r){var t,e,n;const s=r._freezeSettings(),o=function(h,d,f,_){return new Ou(h,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,da(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new ec(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ye(lt.fromBase64String(t))}catch(e){throw new b(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ye(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=/^__.*__$/;class cc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new rn(t,this.data,e,this.fieldTransforms)}}function ga(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ei{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ei(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return $n(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ga(this.Cu)&&hc.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class dc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||tr(t)}Qu(t,e,n,s=!1){return new Ei({Cu:t,methodName:e,qu:n,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _a(r){const t=r._freezeSettings(),e=tr(r._databaseId);return new dc(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ya(r,t,e,n,s,o={}){const u=r.Qu(o.merge||o.mergeFields?2:0,t,e,s);Ia("Data must be an object, but it was:",u,n);const h=Ea(n,u);let d,f;if(o.merge)d=new At(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const w of o.mergeFields){const R=fc(t,w,e);if(!u.contains(R))throw new b(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);pc(_,R)||_.push(R)}d=new At(_),f=u.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,f=u.fieldTransforms;return new cc(new Et(h),d,f)}function Ta(r,t){if(va(r=We(r)))return Ia("Unsupported field value:",t,r),Ea(r,t);if(r instanceof pa)return function(n,s){if(!ga(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const h of n){let d=Ta(h,s.Lu(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=We(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return sl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:zn(s.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zn(s.serializer,o)}}if(n instanceof yi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ye)return{bytesValue:qo(s.serializer,n._byteString)};if(n instanceof vt){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ii(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ti)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw h.Bu("VectorValues must only contain numeric values.");return ti(h.serializer,d)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${gi(n)}`)}(r,t)}function Ea(r,t){const e={};return po(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(r,(n,s)=>{const o=Ta(s,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function va(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof yi||r instanceof ye||r instanceof vt||r instanceof pa||r instanceof Ti)}function Ia(r,t,e){if(!va(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=gi(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function fc(r,t,e){if((t=We(t))instanceof _i)return t._internalPath;if(typeof t=="string")return Aa(r,t);throw $n("Field path arguments must be of type string or ",r,!1,void 0,e)}const mc=new RegExp("[~\\*/\\[\\]]");function Aa(r,t,e){if(t.search(mc)>=0)throw $n(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new _i(...t.split("."))._internalPath}catch{throw $n(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function $n(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${n}`),u&&(d+=` in document ${s}`),d+=")"),new b(V.INVALID_ARGUMENT,h+r+d)}function pc(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ra("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gc extends wa{data(){return super.data()}}function Ra(r,t){return typeof t=="string"?Aa(r,t):t instanceof _i?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new b(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yc{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ee(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>J(u.doubleValue));return new Ti(o)}convertGeoPoint(t){return new yi(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Xr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const e=Kt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);z($o(n));const s=new Ye(n.get(1),n.get(3)),o=new M(n.popFirst(5));return s.isEqual(e)||bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Tc extends wa{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ln(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ra("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ln extends Tc{data(t={}){return super.data(t)}}class Ec{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Nn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ln(this._firestore,this._userDataWriter,n.key,n,new Nn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const d=new Ln(s._firestore,s._userDataWriter,h.doc.key,h.doc,new Nn(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new Ln(s._firestore,s._userDataWriter,h.doc.key,h.doc,new Nn(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:vc(h.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function vc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Ic extends yc{constructor(t){super(),this.firestore=t}convertBytes(t){return new ye(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new vt(this.firestore,null,e)}}function Cc(r){r=ee(r,ir);const t=ee(r.firestore,un),e=ma(t),n=new Ic(t);return _c(r._query),sc(e,r._query).then(s=>new Ec(t,n,r,s))}function kc(r,t,e){r=ee(r,vt);const n=ee(r.firestore,un),s=Pa(r.converter,t);return vi(n,[ya(_a(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,wt.none())])}function Dc(r){return vi(ee(r.firestore,un),[new ei(r._key,wt.none())])}function Nc(r,t){const e=ee(r.firestore,un),n=uc(r),s=Pa(r.converter,t);return vi(e,[ya(_a(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,wt.exists(!1))]).then(()=>n)}function vi(r,t){return function(n,s){const o=new Bt;return n.asyncQueue.enqueueAndForget(async()=>$h(await rc(n),s,o)),o.promise}(ma(r),t)}(function(t,e=!0){(function(s){Te=s})(gu),lu(new hu("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new un(new vu(n.getProvider("auth-internal")),new Ru(n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ye(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Is(ws,"4.7.3",t),Is(ws,"4.7.3","esm2017")})();export{Cc as a,Nc as b,Vc as c,Dc as d,uc as e,Sc as g,kc as s};
