!function(t){function e(e){for(var i,a,s=e[0],l=e[1],u=e[2],v=0,c=[];v<s.length;v++)a=s[v],r[a]&&c.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(h&&h(e);c.length;)c.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={3:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://raddeana-portal.oss-cn-hangzhou.aliyuncs.com";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=l;o.push(["kA/l",0]),n()}({"kA/l":function(t,e,n){"use strict";n.r(e);var i=n("m1cH"),r=n.n(i),o=n("iCc5"),a=n.n(o),s=n("V7oC"),l=n.n(s),u=n("ve5s"),h=n.n(u),v=[],c=void 0,d=void 0,f=void 0,y=void 0,g=void 0,p=void 0,m=void 0,w=Math.PI,b=Math.atan2,x=Math.sin,k=Math.cos,M=Math.sqrt,P=Math.floor,S=Math.min,O=Math.max,j=Math.pow,q=2*w,A=.5*w,_=void 0,C=50,T=.2,E=150;function R(){d.width=window.innerWidth,d.height=window.innerHeight,y=d.width,g=d.height,p=.5*y,m=.5*g,c=h()(p,m),f.beginPath(),f.fillStyle="hsl(0, 0%, 0%)",f.fillRect(0,0,y,g)}function W(t){requestAnimationFrame(W),function(t){if(v.length<3e3)for(var e=0;e<10;e++)v.push(new F);f.save(),f.beginPath(),f.arc(p,m,C,0,q),f.clip(),f.translate(p,m),f.rotate(-.1);f.scale(.94,.94),f.translate(-p,-m),f.drawImage(d,0,0,y,g),f.restore(),f.save(),f.beginPath(),f.fillStyle="hsla(0, 0%, 0%, 0.04)",f.fillRect(0,0,y,g),f.translate(p,m),f.beginPath(),v.reduceRight(function(t,e,n){var i=_.copy().sub(e.pos),r=i.mag();if(r<C)e.reset(!0);else{var o=O(0,S(E,r-C)),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return n*(1-j(2,-10*t/i))+e}(o,0,1,E),s=function(t,e,n,i,r){return(t-e)*(r-i)/(n-e)+i}(a,0,1,.1,T);e.acc.add(i.copy().limit(s)),e.draw()}},null),f.globalCompositeOperation="lighter",f.strokeStyle="hsla("+(z(0,20)+.08*t)%360+", 100%, 60%, 0.1)",f.lineWidth=3,f.save(),f.filter="blur(6px) saturate(150%) contrast(150%)",f.stroke(),f.restore(),f.lineWidth=1.5,f.stroke(),f.restore()}(t)}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Array.isArray(t)?t[P(Math.random()*t.length)]:null===e?Math.random()*t:Math.random()*(e-t)+t}window.addEventListener("load",function(){d=document.createElement("canvas"),f=d.getContext("2d"),document.body.append(d),window.addEventListener("resize",R),R(),function(){R(),_=new H(0,0);for(var t=0;t<600;t++)v.push(new F)}(),requestAnimationFrame(W)});var F=function(){function t(){a()(this,t),this.reset()}return l()(t,[{key:"reset",value:function(t){var e=z(q),n=[0,5];t&&(n=[1,9]);var i=z.apply(void 0,r()(n))*c;this.pos=new H(i,0).rotate(e),this.lastPos=this.pos.copy(),this.vel=_.copy().sub(this.pos).limit(10).rotate(A),this.acc=new H}},{key:"draw",value:function(){var t=this.pos,e=this.lastPos,n=this.vel,i=this.acc;n.add(i).mult(.99),i.set(0,0),e.set(t),t.add(n),f.moveTo(e.x,e.y),f.lineTo(t.x,t.y)}}]),t}(),H=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;a()(this,t),this.x=e,this.y=n}return l()(t,[{key:"copy",value:function(){return new t(this.x,this.y)}},{key:"set",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.x,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.y;if(e instanceof t){var i=e;e=i.x,n=i.y}return this.x=e,this.y=n,this}},{key:"add",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;if(e instanceof t){var i=e;e=i.x,n=i.y}return this.x+=e,this.y+=n,this}},{key:"sub",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;if(e instanceof t){var i=e;e=i.x,n=i.y}return this.x-=e,this.y-=n,this}},{key:"mult",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;if(e instanceof t){var i=e;e=i.x,n=i.y}return this.x*=e,this.y*=n,this}},{key:"div",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;if(e instanceof t){var i=e;e=i.x,n=i.y}return this.x/=e,this.y/=n,this}},{key:"heading",value:function(){return b(this.y,this.x)}},{key:"magSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"mag",value:function(){return Math.sqrt(this.magSq())}},{key:"limit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.magSq();return null===t&&(t=M(e)),e>t*t&&(this.div(M(e)),this.mult(t)),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t)return this;var e=this.heading()+t,n=this.mag();return this.set(k(e),x(e)).mult(n)}}]),t}()}});
//# sourceMappingURL=rainbow-blender.f90e2041843c89d72d05.js.map