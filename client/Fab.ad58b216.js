import{S as e,i as s,s as t,aq as n,N as a,c,ac as l,j as o,o as i,m as r,W as d,at as u,ad as m,r as f,u as p,ae as $,p as h,d as b,Z as x,_ as y,$ as g,ab as j,O as v,a0 as E,au as S,av as _,a1 as C,M as I,e as M,f as N,g as O,l as V,a as w,b as D,V as U}from"./client.930fc604.js";function q(e){let s;return{c(){s=M("div"),this.h()},l(e){s=N(e,"DIV",{class:!0}),O(s).forEach(b),this.h()},h(){V(s,"class","mdc-fab__touch")},m(e,t){r(e,s,t)},d(e){e&&b(s)}}}function F(e){let s,t,n,a;const c=e[20].default,o=I(c,e,e[22],null);let i=e[8]&&q();return{c(){s=M("div"),t=w(),o&&o.c(),i&&i.c(),n=l(),this.h()},l(e){s=N(e,"DIV",{class:!0}),O(s).forEach(b),t=D(e),o&&o.l(e),i&&i.l(e),n=l(),this.h()},h(){V(s,"class","mdc-fab__ripple")},m(e,c){r(e,s,c),r(e,t,c),o&&o.m(e,c),i&&i.m(e,c),r(e,n,c),a=!0},p(e,s){o&&o.p&&4194304&s&&U(o,c,e,e[22],s,null,null),e[8]?i||(i=q(),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i(e){a||(h(o,e),a=!0)},o(e){f(o,e),a=!1},d(e){e&&b(s),e&&b(t),o&&o.d(e),i&&i.d(e),e&&b(n)}}}function W(e){let s,t,x;const y=[{use:[[n,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[18].disabled,addClass:e[15],removeClass:e[16],addStyle:e[17]}],e[14],...e[0]]},{class:a({[e[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":e[5],"mdc-fab--exited":e[6],"mdc-fab--extended":e[7],"smui-fab--color-primary":"primary"===e[4],"mdc-fab--touch":e[8],...e[12]})},{style:Object.entries(e[13]).map(Z).concat([e[2]]).join(" ")},{href:e[9]},e[18]];var g=e[10];function j(e){let s={$$slots:{default:[F]},$$scope:{ctx:e}};for(let e=0;e<y.length;e+=1)s=v(s,y[e]);return{props:s}}return g&&(s=new g(j(e)),e[21](s)),{c(){s&&c(s.$$.fragment),t=l()},l(e){s&&o(s.$$.fragment,e),t=l()},m(e,n){s&&i(s,e,n),r(e,t,n),x=!0},p(e,[l]){const o=521215&l?d(y,[507929&l&&{use:[[n,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[18].disabled,addClass:e[15],removeClass:e[16],addStyle:e[17]}],e[14],...e[0]]},4594&l&&{class:a({[e[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":e[5],"mdc-fab--exited":e[6],"mdc-fab--extended":e[7],"smui-fab--color-primary":"primary"===e[4],"mdc-fab--touch":e[8],...e[12]})},8196&l&&{style:Object.entries(e[13]).map(Z).concat([e[2]]).join(" ")},512&l&&{href:e[9]},262144&l&&u(e[18])]):{};if(4194560&l&&(o.$$scope={dirty:l,ctx:e}),g!==(g=e[10])){if(s){m();const e=s;f(e.$$.fragment,1,0,(()=>{p(e,1)})),$()}g?(s=new g(j(e)),e[21](s),c(s.$$.fragment),h(s.$$.fragment,1),i(s,t.parentNode,t)):s=null}else g&&s.$set(o)},i(e){x||(s&&h(s.$$.fragment,e),x=!0)},o(e){s&&f(s.$$.fragment,e),x=!1},d(n){e[21](null),n&&b(t),s&&p(s,n)}}}const Z=([e,s])=>`${e}: ${s};`;function k(e,s,t){const n=["use","class","style","ripple","color","mini","exited","extended","touch","href","component","getElement"];let a=x(s,n),{$$slots:c={},$$scope:l}=s;const o=y(g());let i,{use:r=[]}=s,{class:d=""}=s,{style:u=""}=s,{ripple:m=!0}=s,{color:f="secondary"}=s,{mini:p=!1}=s,{exited:$=!1}=s,{extended:h=!1}=s,{touch:b=!1}=s,{href:I=null}=s,M={},N={},{component:O=(null==I?S:_)}=s;return j("SMUI:label:context","fab"),j("SMUI:icon:context","fab"),e.$$set=e=>{s=v(v({},s),E(e)),t(18,a=x(s,n)),"use"in e&&t(0,r=e.use),"class"in e&&t(1,d=e.class),"style"in e&&t(2,u=e.style),"ripple"in e&&t(3,m=e.ripple),"color"in e&&t(4,f=e.color),"mini"in e&&t(5,p=e.mini),"exited"in e&&t(6,$=e.exited),"extended"in e&&t(7,h=e.extended),"touch"in e&&t(8,b=e.touch),"href"in e&&t(9,I=e.href),"component"in e&&t(10,O=e.component),"$$scope"in e&&t(22,l=e.$$scope)},[r,d,u,m,f,p,$,h,b,I,O,i,M,N,o,function(e){M[e]||t(12,M[e]=!0,M)},function(e){e in M&&!M[e]||t(12,M[e]=!1,M)},function(e,s){N[e]!=s&&(""===s||null==s?(delete N[e],t(13,N)):t(13,N[e]=s,N))},a,function(){return i.getElement()},c,function(e){C[e?"unshift":"push"]((()=>{i=e,t(11,i)}))},l]}class z extends e{constructor(e){super(),s(this,e,k,W,t,{use:0,class:1,style:2,ripple:3,color:4,mini:5,exited:6,extended:7,touch:8,href:9,component:10,getElement:19})}get getElement(){return this.$$.ctx[19]}}export{z as F};
