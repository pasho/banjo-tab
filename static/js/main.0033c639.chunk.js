(this["webpackJsonpbanjo-tab"]=this["webpackJsonpbanjo-tab"]||[]).push([[0],{32:function(n,e,t){n.exports=t(63)},37:function(n,e,t){},38:function(n,e,t){},63:function(n,e,t){"use strict";t.r(e);var m=t(0),a=t.n(m),r=t(29),o=t.n(r),c=(t(37),t(4)),i=t(8),l=t(9),s=t(2),u=t(1),d=t(15),h=function(n){return Array.from(Array(n).keys())},b=function(n){return h(5).map((function(e){return{stringIndex:e,fret:(null!==n&&void 0!==n?n:[])[e]}})).filter((function(n){var e=n.fret;return void 0!==e&&" "!==e})).map((function(n){var e=n.stringIndex,t=n.fret;if(isNaN(parseInt(t))){var m="abcdefghijklmnopqrst".indexOf(t);if(-1!==m)return{stringIndex:e,fret:(10+m).toString()}}return{stringIndex:e,fret:t}}))},p=function(n){var e,t=b(n);if(0!==t.length)return null===(e=t[0])||void 0===e?void 0:e.stringIndex},E=function(n,e){return Object.keys(n).reduce((function(n,t){return void 0!==e[t]?Object(s.a)(Object(s.a)({},n),Object(d.a)({},t,e[t])):n}),Object(s.a)({},n))},g=function(n,e){return n.split("\n").map((function(n){return n.trim()})).filter((function(n){return n})).map((function(n){return n.split(";").map((function(n){return n.trim()})).reduce((function(n,t,m){if(m%e===0)return[[t]].concat(Object(u.a)(n));var a=Object(c.a)(n,1)[0],r=n.slice(1);return[[].concat(Object(u.a)(a),[t])].concat(Object(u.a)(r))}),[]).reverse()})).reduce((function(n,e){return[].concat(Object(u.a)(n),Object(u.a)(e))}),[]).filter((function(n){return!(1===n.length&&""===n[0])}))},f=function(n,e){return n.split("\n").map((function(n){return n.trim()})).map((function(n){return n.split(";").map((function(n){return n.trim()})).reduce((function(n,t,m){if(m%e===0)return[[t]].concat(Object(u.a)(n));var a=Object(c.a)(n,1)[0],r=n.slice(1);return[[].concat(Object(u.a)(a),[t])].concat(Object(u.a)(r))}),[]).reverse()})).reduce((function(n,e){return[].concat(Object(u.a)(n),Object(u.a)(e))}),[])},x={width:800,lineSpacing:10,sidePaddingEnabled:!0,textCharCentreOffset:{x:-3.5,y:4},noteHorizontalLineAdjustment:.5,showNotes:!1},v=function(n){return 5*n},$=function(n){return 4*n},q=function(n,e){return n?e:0},j=v(10),y=$(10),O=q(!0,j),w={padding:j,staveHeight:y,sidePadding:O,staveHeightWithPadding:y+j,staveWidth:800-2*O},k=m.createContext(Object(s.a)(Object(s.a)({},x),w)),G=function(){return Object(m.useContext)(k)},A=function(n){var e=E(G(),n),t=e.lineSpacing,a=e.sidePaddingEnabled,r=e.width,o=Object(m.useMemo)((function(){return v(t)}),[t]),c=Object(m.useMemo)((function(){return $(t)}),[t]),i=Object(m.useMemo)((function(){return q(a,t)}),[a,t]),l=Object(m.useMemo)((function(){return function(n,e){return n+e}(c,o)}),[c,o]),u=Object(m.useMemo)((function(){return function(n,e){return n-e}(r,i)}),[r,i]);return m.createElement(k.Provider,{value:Object(s.a)(Object(s.a)({},e),{},{padding:o,staveHeight:c,sidePadding:i,staveHeightWithPadding:l,staveWidth:u})},n.children)},D=function(n){var e=n.chord,t=n.noteX,a=n.staveY,r=n.width,o=G(),c=o.lineSpacing,i=o.textCharCentreOffset;if(!e)return null;var l=t+r/2+e.length*i.x,s=a-1.5*c+i.y;return m.createElement("text",{x:l,y:s},e)},C=function(n){var e,t=n.x,a=n.y,r=n.width,o=n.strings,c=R().tuning,i=G(),l=i.showNotes,s=i.lineSpacing,u=i.staveHeight,d=i.textCharCentreOffset,h=b(o).map((function(n){var e=n.stringIndex,t=n.fret;return l?{stringIndex:e,fret:t+function(n,e,t){var m="a\u266d a b\u266d b c c# d e\u266d e f f# g".split(" "),a=n.toLowerCase().split("").reverse()[e],r=m.indexOf(a),o=m[(r+parseInt(t))%m.length];return null!==o&&void 0!==o?o:""}(c,e,t)}:{stringIndex:e,fret:t}})),p=null!==(e=function(n){var e,t=b(n);if(0!==t.length)return null===(e=t[t.length-1])||void 0===e?void 0:e.stringIndex}(o))&&void 0!==e?e:0,E=a+s*(p+.5),g=a+u+s,f=t+.5*r;return m.createElement(m.Fragment,null,h.map((function(n){var e=n.stringIndex,t=n.fret,r=f+d.x*t.length,o=a+e*s+d.y;return m.createElement("text",{key:e,x:r,y:o},t)})),m.createElement("line",{x1:f,y1:E,x2:f,y2:g,strokeWidth:1,stroke:"black"}))},P=function(n){var e=G(),t=e.staveHeight,a=e.lineSpacing,r=e.noteHorizontalLineAdjustment,o=n.y+t+a,i=n.x+.25*n.width-r,l=n.x+.75*n.width+r,s=n.strings.split(","),u=Object(c.a)(s,2),d=u[0],h=u[1];return m.createElement(m.Fragment,null,m.createElement(C,{strings:d,width:.5*n.width,x:n.x,y:n.y}),m.createElement(C,{strings:h,width:.5*n.width,x:n.x+.5*n.width,y:n.y}),m.createElement("line",{x1:i,y1:o,x2:l,y2:o,strokeWidth:3,stroke:"black"}))},B=function(n){return m.createElement(P,{x:n.x,y:n.y,width:n.width,strings:n.strings+",    0"})},F=function(n){var e,t,a=G(),r=a.lineSpacing,o=a.textCharCentreOffset,i=a.staveHeight,l=n.strings.split(","),s=Object(c.a)(l,2),u=s[0],d=s[1],h=null!==(e=p(u))&&void 0!==e?e:0,b=null!==(t=p(d))&&void 0!==t?t:0,E=n.x+.25*n.width,g=n.x+.75*n.width,f=n.y+(h-.5)*r,x=n.y+(b-.5)*r,v=E+.5*r,$=g-.5*r,q=f-.5*r,j=x-.5*r,y=Math.min(q,j),O=n.label.length,w=n.x+.5*n.width+o.x*O,k=n.y+i+2*r+o.y;return m.createElement(m.Fragment,null,m.createElement(P,{x:n.x,y:n.y,width:n.width,strings:n.strings}),m.createElement("path",{d:"M ".concat(E," ").concat(f," C ").concat(v," ").concat(y,", ").concat($," ").concat(y,", ").concat(g," ").concat(x),stroke:"black",strokeWidth:1,fill:"transparent"}),m.createElement("text",{x:w,y:k},n.label))},S=function(n){var e=-1===n.strings.indexOf(",")?n.strings.substr(0,n.strings.length-1)+"0,"+n.strings:n.strings;return m.createElement(F,Object(s.a)(Object(s.a)({},n),{strings:e,label:"H"}))},M=function(n){var e=-1===n.strings.indexOf(",")?n.strings+","+n.strings.substr(0,n.strings.length-1)+"0":n.strings;return m.createElement(F,Object(s.a)(Object(s.a)({},n),{strings:e,label:"P"}))},W=function(n){return m.createElement(F,Object.assign({},n,{label:"SL"}))},I=function(n){switch(n.noteType){case"b":return m.createElement(B,n);case"h":return m.createElement(S,n);case"p":return m.createElement(M,n);case"s":return m.createElement(W,n);case"m":return m.createElement(C,n);case"d":return m.createElement(P,n);default:return null}},N=function(n){var e=G();return m.createElement("line",{x1:n.x,y1:n.y,x2:n.x,y2:n.y+e.staveHeight,strokeWidth:1,stroke:"black"})},H=function(n){var e=G().sidePadding;return m.createElement("line",{x1:e,y1:n.y,x2:e+n.width,y2:n.y,strokeWidth:1,stroke:"black"})},T=function(n){var e=G(),t=e.lineSpacing,a=e.sidePadding,r=R(),o=r.barWidth,c=r.noteWidth,i=o*n.barNotes.length;return m.createElement(m.Fragment,null,h(5).map((function(e){return m.createElement(H,{key:e,y:n.y+e*t,width:i})})),h(n.barNotes.length+1).map((function(e){return m.createElement(N,{key:e,y:n.y,x:a+e*o})})),n.barNotes.map((function(e,t){var r=a+t*o;return e.map((function(e,t){var a=r+t*c,o=e.split(":").map((function(n){return n.trim()})).reduce((function(n,e){if(e[0]){if(e[0]===e[0].toUpperCase())return Object(s.a)(Object(s.a)({},n),{},{chord:e});if(e[0]===e[0].toLowerCase())return Object(s.a)(Object(s.a)({},n),{},{noteType:e[0],strings:e.substr(1)})}return n}),{noteType:"",strings:"",chord:""}),i=o.noteType,l=o.strings,u=o.chord;return m.createElement(m.Fragment,{key:t},m.createElement(D,{chord:u,noteX:a,staveY:n.y,width:c}),m.createElement(I,{noteType:i,strings:l,x:a,y:n.y,width:c}))}))})))},L=m.createContext({tuning:"gDGBd",meter:4,barsPerStave:4,barWidth:0,noteWidth:0}),R=function(){return Object(m.useContext)(L)},K=function(n){var e=n.notes,t=n.children,a=G(),r=a.width,o=a.padding,i=a.staveHeightWithPadding,l=a.staveWidth,d=E(R(),n),h=d.barsPerStave,b=d.meter,p=Object(m.useMemo)((function(){return function(n,e){return n/e}(l,h)}),[l,h]),f=Object(m.useMemo)((function(){return function(n,e){return n/e}(p,b)}),[p,b]),x=function(n,e,t){return g(n,e).reduce((function(n,e,m){if(m%t===0)return[[e]].concat(Object(u.a)(n));var a=Object(c.a)(n,1)[0],r=n.slice(1);return[[].concat(Object(u.a)(a),[e])].concat(Object(u.a)(r))}),[]).reverse()}(e,b,h),v=.5*o+i*x.length;return m.createElement(L.Provider,{value:Object(s.a)(Object(s.a)({},d),{},{barWidth:p,noteWidth:f})},m.createElement("svg",{viewBox:"0 0 ".concat(r," ").concat(v),preserveAspectRatio:"xMidYMid meet"},x.map((function(n,e){return m.createElement(T,{key:e,y:.5*o+i*e,barNotes:n})})),t))},V=function(n){var e=n.title,t=n.description,a=n.tuning;return m.createElement(m.Fragment,null,m.createElement("h1",null,e),t&&m.createElement("p",null,t),m.createElement("p",null,a),m.createElement(K,n))},Y=function(){return a.a.createElement(V,{title:"Hop High Ladies v1",notes:"\n      G:h  0,  2;h 0, 1;m0;m  0;\n      s  2,  4;b0040;m 0;b0000;\n      h  0,  2;h 0, 1;m0;m  0;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:h  0,  2;h 0, 1;m0;m  0;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      G:p 3, 0;m  0;D7:h  0,  2;b0120;\n\n      G:m  0;m5;p2,0;b0000;\n      s  2,  4;b0040;m 0;b0000;\n      m  0;m5;p2,0;b0000;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:m  0;m5;p2,0;b0000;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      p 3, 0;m  0;D7:h  0,  2;b0120\n    "})},z=function(){return a.a.createElement(V,{title:"Hop High Ladies v2",notes:"\n        G:h  0,  2;h 0, 1;m0;b  0;\n        s  2,  4;b  4;m 0;b0;\n        h  0,  2;h 0, 1;m0;b  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:h  0,  2;h 0, 1;m0;b  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        G:p 3, 0;m  0;D7:h  0,  2;m   0;\n  \n        G:m  0;m5;p2,0;d 0,  0;\n        s  2,  4;b  4;m 0;b0;\n        m  0;m5;p2,0;d 0,  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:m  0;m5;p2,0;d 0,  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        p 3, 0;m  0;D7:h  0,  2;m   0\n      "})},J=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null),a.a.createElement(z,null))},X=function(){return a.a.createElement(V,{title:"Worried Man's Blues",notes:"\n      G;;;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m  0;m   0;\n      C:m   2;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n\n      G:m   0;b0000;b0000;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m   4;m  0;\n      D7:m  2;b0120;b0120;m  2;\n      m 0;m  2;m  0;m   4;\n      G:m  0;b0000;m0000;\n    "})},U=function(){return a.a.createElement(V,{title:"Worried Man's Blues (octave up v.1)",notes:"\n      G;;;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987;m 8;m  7;\n      C:m  9;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n\n      G:m  7;b987;b987;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987; m 7;m 8;\n      D7:m a;baa7;baa7;m a;\n      G:m9;m a;m 8;m 7;\n      m 8;b987;m987\n    "})},Q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(X,null),a.a.createElement(U,null))},Z=function(){var n=nn().position,e=G(),t=e.padding,a=e.lineSpacing,r=t+(.1+n)*R().noteWidth,o=.5*t-.5*a,c=o+5*a;return m.createElement("line",{x1:r,y1:o,x2:r,y2:c,strokeWidth:1,stroke:"black"},m.createElement("animate",{attributeName:"visibility",from:"visible",to:"hidden",dur:"1s",repeatCount:"indefinite"}))},_=a.a.createContext({position:0,meter:4}),nn=function(){return Object(m.useContext)(_)},en=function(){var n=Object(m.useState)([]),e=Object(c.a)(n,2),t=e[0],r=e[1],o=Object(m.useState)(0),i=Object(c.a)(o,2),l=i[0],s=i[1],d=Object(m.useMemo)((function(){return{move:function(n){switch(n){case"left":s(Math.max(0,l-1));break;case"right":s(Math.min(t.length,l+1))}},addNote:function(n){r([].concat(Object(u.a)(t.slice(0,l)),[n],Object(u.a)(t.slice(l)))),s(l+1)},del:function(){l<t.length&&r([].concat(Object(u.a)(t.slice(0,l)),Object(u.a)(t.slice(l+1))))},backspace:function(){r([].concat(Object(u.a)(t.slice(0,Math.max(0,l-1))),Object(u.a)(t.slice(l)))),s(Math.max(0,l-1))}}}),[l,s,t,r]),h=d.move,b=d.addNote,p=d.del,E=d.backspace,g=Object(m.useCallback)((function(n){switch(n.keyCode){case 37:h("left");break;case 39:h("right");break;case 8:E();break;case 46:p();break;case 66:b("b0000")}}),[h,b,E,p]);Object(m.useEffect)((function(){return document.addEventListener("keydown",g),function(){return document.removeEventListener("keydown",g)}}),[g]);return a.a.createElement(_.Provider,{value:{position:l,meter:4}},a.a.createElement(V,{title:"Editor",meter:4,notes:t.join(";")},a.a.createElement(Z,null)))},tn=function(n){var e=n.position,t=G(),a=t.sidePadding,r=t.staveHeightWithPadding,o=R().noteWidth,c=a+e*o;return m.createElement("rect",Object.assign({x:c,y:0,width:o,height:r},{strokeWidth:1,stroke:"black",fill:"transparent"}))},mn=function(n){var e,t=n.notes,a=n.title,r=n.textPosition,o=R().meter,c=f(t,o),i=c.length,l=f(t.substr(0,r),o),s=Math.max(0,l.length-1),d=Math.max(0,(null!==(e=l[0])&&void 0!==e?e:[]).length-1),h=t[r-1];""===t[r]&&(void 0===h||"\n"===h||";"===h&&l[s].length===o)&&(c=[].concat(Object(u.a)(c.slice(0,s+1)),[[]],Object(u.a)(c.slice(s+1,i))),s++,d=0);var b=c.slice(Math.max(0,s-1),s+1).map((function(n){return n.join(";")})).join("\n");return m.createElement(V,{title:a,notes:b,barsPerStave:2},m.createElement(tn,{position:d}))},an=function(){var n=Object(m.useState)(""),e=Object(c.a)(n,2),t=e[0],a=e[1],r=Object(m.useState)(0),o=Object(c.a)(r,2),i=o[0],l=o[1];return m.createElement(m.Fragment,null,m.createElement(A,{sidePaddingEnabled:!1,width:400},m.createElement(mn,Object.assign({title:"Editor"},{textPosition:i,notes:t}))),m.createElement("br",null),m.createElement("textarea",{rows:10,onSelect:function(n){return l(n.target.selectionStart)},onChange:function(n){return a(n.target.value)},value:t}))},rn=function(){return a.a.createElement(V,{title:"Rose Tattoo",tuning:"gDGBd",meter:4,notes:"\n  Am:m  2;b2122;m  2;b  0;\n  m  2;b  0;m  2;b 0;\n  C:m 1;b2102;m 1;m0;\n  h0,2;b2102;p2,0;b 1;\n  G:m0;b0000;m0;m 1;\n  b0;b2;b0;b 1;\n  Am:m 1;b2122;m 0;b2022;\n  m  2;b2122;m  2;b2122\n"})},on=(t(38),function(){return a.a.createElement(V,{title:"Sandy River Belle A",notes:"\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m2;m0;\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m   2;m   0;\n\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m2;m0;\n      d0, 5;d5, 5;d0, 5;d5, 5;\n      d0, 0;s  2,  4;m  0;b0000\n    "})}),cn=function(){return a.a.createElement(V,{title:"Sandy River Belle B",notes:"\n      b0;b5;d 5,  7;b 5;\n      m9;d9, 8;d7, 8;d9, 8;\n      b0;b5;d 5,  7;b 5;\n      d 7,  9;b 7;m7;b7777;\n\n      b0;b5;d 5,  7;b 5;\n      m9;d9, 8;d7, 8;d9, 8;\n      d0, 5;d5, 5;d0, 5;d5, 5;\n      d0, 0;s  2,  4;m  0;b0000\n    "})},ln=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(on,null),a.a.createElement(cn,null))},sn=t(16),un=sn.Vex.Flow.Renderer,dn=new sn.Artist(10,10,700,{scale:.8}),hn=new sn.VexTab(dn),bn=function(n){var e=n.staves,t=n.space,r=n.tuning,o=n.time,c=G().showNotes,i=Object(m.useRef)(null);return Object(m.useEffect)((function(){var n=i.current;n.innerHTML="";var m=new un(n,un.Backends.SVG),a="\n      options tab-stems=true tab-stem-direction=down scale=0.75 width=1200\n      ".concat(e.map((function(n){return function(n,e,t,m,a){return"\noptions space=".concat(n,"\ntabstave time=").concat(m," notation=").concat(e," strings=5 tuning=").concat(t,"\n").concat(a)}(null!==t&&void 0!==t?t:60,null!==c&&void 0!==c&&c,null!==r&&void 0!==r?r:"D/5,B/4,G/4,D/4,G/5",null!==o&&void 0!==o?o:"4/4",n)})).join("\n"),"\n    ");hn.reset(),dn.reset(),hn.parse(a),dn.render(m)}),[e,r,c,t,o]),a.a.createElement("div",{ref:i})},pn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Russian National Anthem"),a.a.createElement("p",null,"gCGBd"),a.a.createElement(bn,{tuning:"D/5,B/4,G/4,C/4,G/5",staves:["\n            notes :hd (2/1.1/2.0/3.0/4) $.top.G$ :8 ## 0/3 =|: 1/2-0/5 0h2/3 0/2-0/5 4-4/4 | 2/3-0/5 0/3-5/4 0/3-0/5 0-0/4 |\n            notes 2/4-0/5 2s4/4 5/4-0/5 5/4-0/3 $.top.P, $ | 2/3-0/5 0h1/2 (0/1.0/2.0/3.2/4)$.top.G$-0/5 ## 0/3 |\n          ","\n            notes :8 2/1-0/5 0/1-1/2 0/1-0/5 0/2-0/3 | 1/2-0/5 0/2-2/3 0/2-0/5 4-4/4 | 2/3-0/5 0/3-5/4 0/3-0/5 0-0/4 |\n            notes 1/2-0/5 0/2-2/3 0/3-0/2 $.top.P, $ 1h3/2 | :q 2/1 :8 (2/1.1/2.0/3.0/4)$.top.C$-0/5 0/1-1/2 0h1/2 |\n          ","\n            notes :q 0/1 :8 (0/1.0/2.0/3.2/4)$.top.G$-0/5 0/3-0/2 $.top.P, $ 1h3/2 | :q 1/2 :8 (2/1.1/2.0/3.0/4)$.top.C$-0/5 0/2-2/3 0h2/3 |\n            notes :q 0/1 :8 (0/1.0/2.0/3.2/4)$.top.G$-0/5 4/4-0/3 $.top.P, $ 2/3-0/2 $.top.P, $ | \n            notes 1/2-0/5 2/3-0/2 $.top.P, $ 1/2-0/5 2/3-0/2 $.top.P, $ | 1/2-0/5 2/3-1/2 :q 3/1 :8 (3/1.1/2.2/3.0/4)$.top.F$-0/5 |\n          ","\n            notes :q 3/1 :8 (3/1.1/2.2/3.0/4)-0/5 2p0/1 1p0/2 | :q 2/1 :8 (2/1.1/2.0/3.0/4)$.top.C$-0/5 :q 1/2 :8 (2/1.1/2.0/3.0/4)-0/5 |\n            notes :q 0/1 :8 (0/1.0/2.0/3.2/4)$.top.G$-0/5 1p0/2 2p0/3 | :q 1/2 :8 (2/1.1/2.2/3.0/4)$.top.Am$-0/5 :q 2/3 :8 (2/1.1/2.2/3.0/4)-0/5 |\n            notes 1/2-0/5 0/2-2/3 0/3-0/5 0-0/4 |\n          ","\n            notes 1/2-0/5 0/2-2/3 0/3-0/5 ## 0/3 =:| :q 0/3 (0/1.0/2.0/3.2/4)$.top.G$ 2/3 0/2 | :w (2/1.1/2.0/3.0/4)$.top.C$ =||\n            text .-1,:w,1.,|2.\n          "]}))},En=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Korobeiniki"),a.a.createElement("p",null,"gDGBd"),a.a.createElement(bn,{time:"2/4",staves:["\n            notes =|: :8 2/1-0/5 0h1/2 | 0/1-0/5 1p0/2 | :q 2/3 :8 2/3-1/2 | 2/1-0/5 0/1-1/2 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 |\n            text .0,|,:h,E,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|\n          ","\n            notes :8 6/2-7/3 0/1-6/2 | :q 7/1 :8 5/1-6/2 | 5/2-0/5 4/3s5/3 | 5/2-0/5 0/1-5/3 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 =:|\n            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,Fine,|\n            text ++,.0,:h,Dm,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|\n          ","\n            notes :q 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 |\n            notes :q 0/1 :8 (0/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (0/1.0/2.1/3.2/4)-0/5 |\n            notes :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 |\n            notes :q 1/3 :8 (2/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (2/1.0/2.1/3.2/4)-0/5 |\n            text .-1,:h,Bridge\n            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|\n          ","\n            notes :q 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 |\n            notes :q 0/1 :8 (0/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (0/1.0/2.1/3.2/4)-0/5 |\n            notes :q 1/2 2/1 | 7/1 7/1 | :h 6/1 $.a>/top.$ | 6v/1 |\n            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,D.C. al Fine,|\n            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|\n\n          "]}),a.a.createElement("h1",null,"Korobeiniki (syncopated bridge)"),a.a.createElement("p",null,"gDGBd"),a.a.createElement(bn,{time:"2/4",staves:["\n            notes =|: :8 2/1-0/5 0h1/2 | 0/1-0/5 1p0/2 | :q 2/3 :8 2/3-1/2 | 2/1-0/5 0/1-1/2 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 |\n            text .0,|,:h,E,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|\n          ","\n            notes :8 6/2-7/3 0/1-6/2 | :q 7/1 :8 5/1-6/2 | 5/2-0/5 4/3s5/3 | 5/2-0/5 0/1-5/3 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 =:|\n            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,Fine,|\n            text ++,.0,:h,Dm,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|\n          ","\n            notes :qd 2/1 :8 0/5 | :qd 1/2 :8 0/5 |\n            notes :qd 0/1 :8 0/5 | :qd 0/2 :8 0/5 |\n            notes :qd 1/2 :8 0/5 | :qd 2/3 :8 0/5 |\n            notes :qd 1/3 :8 0/5 | :qd 0/2 :8 0/5 |\n            text .-1,:h,Bridge\n            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|\n          ","\n            notes :qd 2/1 :8 0/5 | :qd 1/2 :8 0/5 |\n            notes :qd 0/1 :8 0/5 | :qd 0/2 :8 0/5 |\n            notes :q 1/2 2/1 | 7/1 7/1 | :h 6/1 $.a>/top.$ | 6v/1 |\n            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,D.C. al Fine,|\n            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|\n\n          "]}),a.a.createElement("h1",null,"Korobeiniki (travel banjo)"),a.a.createElement("p",null,"cGCEg"),a.a.createElement(bn,{time:"2/4",staves:["\n            notes =|: :8 0/2-0/5 4/4-0/3 $.top.P, $ | 2/3-0/5 0/3-4/4 | :q 2/4 :8 2/4-0/3 $.top.P, $ | 0/2-0/5 2p0/3 | 4/4-0/5 4/4-0/3 $.top.P, $ | 2/3-0/5 :q 0/2 | :8 0/3-0/5 :q 2/4 | :h 2v/4 |\n            text .0,|,:h,E,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|\n          ","\n            notes :8 1/2-2/3 2/3-1/2$.top.M\u2192, $ | :q 2/1 :8 3p1/2 | 0/2-0/5 4/4-0/3 $.top.P, $ | 0/2-0/5 2p0/3 | 4/4-0/5 4/4-0/3 $.top.P, $ | 2/3-0/5 :q 0/2 | :8 0/3-0/5 :q 2/4 | :h 2v/4 =:|\n            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,Fine,|\n            text ++,.0,:h,Dm,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|\n          ","\n            notes :qd 0/2 :8 0/5 | :qd 0/3 :8 0/5 |\n            notes :qd 2/3 :8 0/5 | :qd 4/4 :8 0/5 |\n            notes :qd 0/3 :8 0/5 | :qd 2/4 :8 0/5 |\n            notes :qd 1/4 :8 0/5 | :qd 4/4 :8 0/5 |\n            text .-1,:h,Bridge\n            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|\n          ","\n            notes :qd 0/2 :8 0/5 | :qd 0/3 :8 0/5 |\n            notes :qd 2/3 :8 0/5 | :qd 4/4 :8 0/5 |\n            notes :q 0/3 0/2 | 2/1 2/1 | :h 1/1$.a>/top.$ | 1v/1 |\n            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,D.C. al Fine,|\n            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|\n\n          "]}))},gn=function(){return a.a.createElement(V,{title:"Kalinka",description:"lower",tuning:"gCGBd",barsPerStave:9,meter:2,notes:"\n        ;b  2;\n        b  0;h   4,   5;\n        b  0;h   4,   5;\n        b  0;p   5,   4;\n        b   2;d  2,  2;\n        d  0,   5;h   4,   5;\n        b  0;h   4,   5;\n        b  0;p   5,   4;\n        m   2;\n      "})},fn=function(){return a.a.createElement(V,{title:"Kalinka",description:"higher",tuning:"gDGBd",barsPerStave:9,meter:2,notes:"\n        ;b 0;\n        b  2;p   3,  0;\n        b  2;p   3,  0;\n        b  2;d  0,   3;\n        b   2;d 0, 0;\n        p  2;p   3,  0;\n        b  2;p   3,  0;\n        b  2;d  0,   3;\n        m   2;\n      "})},xn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(gn,null),a.a.createElement(fn,null))},vn=function(){return a.a.createElement(V,{title:"Mortal Kombat",description:"melody notes",tuning:"gDGBd",barsPerStave:4,meter:4,notes:"\n        d  2,  2;d 1,  2;d0,  2;p2;\n        d  5,  5;d 5,  5;d5,  5;d 5,  5;\n        d  0,  0;d 0,  0;d 1,  0;d0, 1;\n        d   3,   3;d  2,   3;d 1,   3;p 1;\n\n        d  2,  2;d 1,  2;d0,  2;p2;\n        d  5,  5;d 5,  5;d5,  5;d 5,  5;\n        d  0,  0;d 0,  0;d0,  0;d 0,  0;\n        d   3,   3;d  2,   3;d 1,   3;p 1;\n\n        d  2,  2;d 1,  2;d0,  2;p2;\n        d  5,  5;d 5,  5;d5,  5;d 5,  5;\n        d  0,  0;d 0,  0;d0,  0;d 0,  0;\n        d   3,   3;d  2,   3;d 1,   3;p 1\n    "})},$n=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null),a.a.createElement("img",{src:"".concat("","/mortal-kombat-1.jpg"),alt:"Notes 1"}),a.a.createElement("img",{src:"".concat("","/mortal-kombat-2.jpg"),alt:"Notes 2"}))},qn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Lambada"),a.a.createElement("p",null,"gDGBd"),a.a.createElement(bn,{staves:["\n            notes :q 2/4\n            notes =|: :8 2/1-0/5 2p0/1 1p0/2 :q 2/3 |\n            notes :8 2/3-1/2 0/1-2/3 0h2/3 2p0/4 |\n            notes :q 2/4 :8 (2/1.1/2.0/3.2/4)-0/5 0h2/4 (2/1.1/2.0/3.2/4)-0/5 =:|\n            text .-1,:q,Part A,|,:w, ,|, ,|, ,|\n            text ++,.0,:q,Am,|,:w, ,|,:h,F,G,|,:w,C,|\n          ","\n            notes =|: :8 0/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |\n            notes :8 2/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |\n            notes :8 0/1-0/5 2p0/3 0-0/3 2p0/3 |\n            notes :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 0h2/3 (2/1.1/2.2/3.2/4)-0/5 =:|\n            notes :8 1p0/2 :h 2v/3 =|=\n            text .-1,|Part B,:w, ,|, ,|, ,|1., ,|2.,:hd, ,|\n            text ++,.0,|,:w,Dm,|, ,|,G,|,Am,|,:hd,Am,|\n          "]}))},jn=function(){var n="\n    Em:m  0;m  0;h  2;d  0,   4;\n    C:m   2;;m   2;;\n    D:d   4,   4;h  2;;h  2;\n    G:m 0;m 0;D:d  2,   0;d    x,   0;\n  ";return a.a.createElement(V,{title:"Moonlight Shadow",description:"melody notes",tuning:"gDGBd",barsPerStave:5,meter:4,notes:"\n        ".concat("\n    ;;;h   2,   4;\n  ","\n        ").concat(n,"\n        ").concat(n," \n        ").concat("\n    G:m 0;h 3;p 2;d 0,  0;\n    D:d  2,  2;d 0,  2;;;\n    Em:m 0;d x,  2;C:m  0;d  0,   2;\n    D:d  2,  2;d 0,  2;;h  2;\n    G:m 0;h 3;p 2;d 0,  0;\n    D:d  2,   4;p   2;;h   2,   4;\n    Em:d  0,  0;m   4;C:h   2,   4;m  0;\n    D:m  2;\n  ","       \n      ")})},yn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(jn,null))},On=function(){return a.a.createElement(V,{title:"Prince Igor",description:"melody notes",tuning:"gDGBd",barsPerStave:16,meter:2,notes:"\n       m  2;m  2;\n       m2;mx;\n       mx;h2\n       m 1;d 0,  2;\n       h 1;m0;\n       mx;mx;\n       ;m2;\n       m 0;p  2;\n       m   2;m   2;\n       m  2;m  x;\n       m  x;m 0;\n       m  2;d  0,   4;\n       d  0,   4;m   2;\n       m   x;m   x;\n       ;m   4;\n       m  0;m 0;\n       m  2;m  2;\n       m2;mx;\n       mx;h2;\n       m 1;d 0,  2;\n       h 1;m0;\n       mx;mx;\n       ;m2;\n       m 0;p  2;\n       m   2;m   2;\n       m  2;m  x;\n       m  x;m 0;\n       m  2;d  0,   4;\n       d  0,   4;m   2;\n       m   x;m   x;\n       m   x;;\n       ;;\n\n       m  2;m  2;\n       m 1;m x;\n       m x;m0;\n       m 1;d 0,  2;\n       h 1;m0;\n       mx;mx;\n       mx;m1;\n       m0;m 0;\n       m1;m1;\n       m5;mx;\n       mx;m7;\n       m5;p3,1;\n       d0, 1;m 0;\n       m x;m x;\n       m x;m 1;\n       m0;p 1;\n       m  2;m  2;\n       m 1;m x;\n       m x;m0;\n       m 1;d 0,  2;\n       h  2;m 0;\n       m x;m x;\n       m x;m 1;\n       m 0;m  0;\n       m  2;m  2;\n       m2;mx;\n       mx;h2;\n       m 1;d 0,  2;\n       m 0;m x;\n       m x;m x;\n       m x;m x;\n       ;;  \n\n       m  2;m  2;\n       m2;mx;\n       mx;h2;\n       m 1;d 0,  2;\n       h 1;m0;\n       mx;mx;\n       ;m2;\n       m 0;p  2;\n       m   2;m   2;\n       m  2;m  x;\n       m  x;m 0;\n       m  2;d  0,   4;\n       d  0,   4;m   2;\n       m   x;m   x;\n       ;m   4;\n       m  0;m 0;\n       m  2;m  2;\n       m2;mx;\n       mx;h2;\n       m 1;d 0,  2;\n       h 1;m0;\n       mx;mx;\n       ;h2;\n       m0;p 1;\n       m   2;m   2;\n       m  2;m  x;\n       ;d  2, 0;\n       m  2;d  0,   4;\n       d  0,   4;m   2;\n       m   x;m   x;\n       ;;\n       m  2;m  2;\n       m2;mx;\n       mx;h2;\n       m 1;d 0,  2;\n       d 0,  2;m  0;\n       m  x;;\n       m  2;m  2;\n       m2;mx;\n       mx;h2;\n       m 1;d 0,  2;\n       m 0;m x;\n       m x;;       \n\n\n      \n    "})},wn=function(){return a.a.createElement(V,{title:"Prince Igor",description:"clawhammer arrangement",tuning:"gDGBd",barsPerStave:16,meter:2,notes:"\n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2\n        m 1;d 0,  2;\n        h 1;m0;\n        G:b0000;m0;\n        b0000;m2;\n        m 0;p  2;\n        Am:m   2;m   2;\n        m  2;b2122;\n        m  2;m 0;\n        m  2;d  0,   4;\n        d  0,   4;m   2;\n        Em:b2002;m   2;\n        b2002;m   4;\n        m  0;m 0;\n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2;\n        m 1;d 0,  2;\n        h 1;m0;\n        G:b0000;m0;\n        b0000;m2;\n        m 0;p  2;\n        Am:m   2;m   2;\n        m  2;b2122;\n        m  2;m 0;\n        m  2;d  0,   4;\n        d  0,   4;m   2;\n        Em:b2002;m   2;\n        b2002;m   4;\n        m  0;m 0;\n\n        Am:m  2;m  2;\n        m 1;b2122;\n        m 1;m0;\n        m 1;d 0,  2;\n        h 1;m0;\n        G:b0000;m0;\n        b0000;m 4;\n        m0;m 0;\n        m 4;m 4;\n        m5;b5555;\n        m7;b7777;\n        m5;p 6, 4;\n        d0,  5;m 0;\n        b0000;m 0;\n        b0000;m 1;\n        m0;p 1;\n        Am:m  2;m  2;\n        m 1;b2122;\n        m 1;m0;\n        m 1;d 0,  2;\n        h  2;m 0;\n        G:b0000;m 0;\n        b0000;m 1;\n        m 0;m  0;\n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2;\n        m 1;d 0,  2;\n        G:m 0;b0000;\n        m  0;b0000;\n        m 0;b0000;\n        m  0;b0000;\n          \n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2;\n        m 1;d 0,  2;\n        h 1;m0;\n        G:b0000;m0;\n        b0000;m2;\n        m 0;p  2;\n        Am:m   2;m   2;\n        m  2;b2122;\n        m  2;m 0;\n        m  2;d  0,   4;\n        d  0,   4;m   2;\n        Em:b2002;m   2;\n        b2002;m   4;\n        m  0;m 0;\n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2;\n        m 1;d 0,  2;\n        h 1;m0;\n        G:b0000;m0;\n        b0000;h2;\n        m0;p 1;\n        Am:m   2;m   2;\n        m  2;b2122;\n        m  2;d  2, 0;\n        m  2;d  0,   4;\n        d  0,   4;m   2;\n        Em:b2002;m   2;\n        b2002;m   2;\n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2;\n        m 1;d 0,  2;\n        d 0,  2;m  0;\n        G:b0000;m  0;\n        Am:m  2;m  2;\n        m2;b2122;\n        m2;h2;\n        m 1;d 0,  2;\n        G:m 0;b0000;\n        m  0;b0000;\n       "})},kn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:"".concat("","/uletai-syao.jpg"),alt:"Notes"}),a.a.createElement(On,null),a.a.createElement(wn,null),a.a.createElement("h1",null,"Prince Igor"),a.a.createElement("p",null,"gDBGd"),a.a.createElement(bn,{time:"4/4",staves:["\n            notes =|: :q 2/3 $.top.Am$ 2/3 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 |\n            notes :q 2/1 :8 0h2/1 :q 1/2 :8 0/2-2/3 |\n            notes 0h1/2 \n        "]}))};function Gn(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Sokolov's Polka"),a.a.createElement("p",null,"gDGBd"),a.a.createElement(bn,{time:"2/4",staves:["\n              notes :16 4/1-0/5-4h5/2 0h5/2-4/1-0/5 |\n              notes :8d 5p:16:4/1  :q 4/1 |\n              notes :16 7/2-7/1-8/3-7/2 9/4-8/3-7/2-7/1 |\n              notes :8d 10p:16:9/1  :q 9/1 |\n            ","\n              notes :16 14/1-12/2-14/3-0/5 4/1-5/2-4h5/2 |\n              notes :8d 5p:16:4/1  :q 4/1 |\n              notes :16 3/3-2/2-2/1-0/5 :8 4p2/1 |\n              notes 2/1-4/2 :q 9/1 =||\n            ","\n              notes :16 17p16/1-17/2-16/3 5/2-4/1-4h5/2 |\n              notes :8d 5p:16:4/1  :q 4/1 |\n              notes :16 4/1-4/2-0/2-2/3 0h4/2-4/1-0/5 |\n              notes :8d 4p:16:2/1 :q 0/5 |\n            ","\n              notes :16 9/1-0/5-7/2-0/5 7/2-9/3-8h9/3 |\n              notes :8d 5p:16:4/1  :q 4/1 |\n              notes :8 (2/1.2/2)-0/5 (4/1.2/2)p2/1 |\n              notes 5p4/2 :q (9/1.7/2.7/3.9/4) =||\n            ","\n              notes :8 9/1-:16:0/5-9/1 7/2-9/1-9/3-9/1 |\n              notes :8 4/4 (2/3.4/2) :q 9/1 |\n              notes :8 9/1-:16:0/5-9/1 7/2-9/1-9/3-9/1 |\n              notes :8 4/4 (2/3.4/2) :q 9/1 |\n            ","\n              notes :8 9/1 9/2 10/1 0/5 |\n              notes :16 9/1 10/2 9h10/2 :8 9/1 10/2 |\n              notes :8 0/4 (10/1.10/2.11/3) (12/1.10/2.11/3) (10/1.10/2.11/3) |\n              notes :16 10/2 0/5 11/3 0/5 :8 10/2 (0/1.0/2.12/3) |\n            ","\n              notes :16 5/1 0/2 2/1 0/5 :8 7/1 (5/1.5/2.4/3) |\n              notes :8d 5p:16:4/1  :q 4/1 |\n              notes :16 3/3-2/2-2/1-0/5 :8 4p2/1 |\n              notes 2/1-4/2 :q (4/1.4/2.4/3.4/4) =||\n            "]}))}function An(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Oi To Ne Vecher"),a.a.createElement("p",null,"gCGCd"),a.a.createElement(bn,{key:"Dm",tuning:"D/5,C/5,G/4,C/4,G/5",staves:["\n              notes :q 2/3 $.top.Dm$ :8 3p2/3 | 2h5/4 4p2/4 |\n              notes 2p1/4 $.top.A7, $ :q 4/4 | 4/4 ## |\n            ","\n              notes :q 2/3 $.top.Dm$ :8 3p2/3 | 2/4 2/3 2p0/3 $.top.C6, $| \n              notes :qd 2/3 $.top.F$ :16 3p2/3 | :h 0/3 $.top.C$ |\n            ","\n              notes =|: :q 5/4 $.top.F$ 2/3 | :8 0/2 2/3 0/3 5/4 |\n              notes :h 0/2 $.top.C$ | 1/2 $.top.A7$ |\n            ","\n              notes :q 0/1 $.top.Dm$ :8 2/3 2/3 | 0/2 $.top.Gsus$ 3/3 2p0/3 $.top.A7, $ |\n              notes :h 2/4 $.top.Dm$ | 0/4 $.top.C$ =:|\n              notes :h 0/1 $.top.Dm$ | 0/1 $.top.Dm$ =|= \n              text .-1,:h, ,|, ,|1., ,|, ,|2.\n            "]}),a.a.createElement("h1",null,"Oi To Ne Vecher"),a.a.createElement("p",null,"gDGBd"),a.a.createElement(bn,{key:"Em",staves:["\n              notes :q 0/2 $.top.Dm$ :8 1p0/2 | 2/4 0/3 4p2/4 |\n              notes 2p1/4 $.top.A7, $ :q 4/4 | 4/4 ## |\n            ","\n              notes :q 0/2 $.top.Dm$ :8 1p0/2 | 2/4 0/2 0/2 2/3 $.top.C6, $| \n              notes :qd 0/2 $.top.F$ :16 1p0/2 | :h 2/3 $.top.C$ |\n            ","\n              notes =|: :q 0/3 $.top.F$ 0/2 | :8 0/1 0/2 2p0/3 |\n              notes :h 0/1 $.top.C$ | 1/1 $.top.A7$ |\n            ","\n              notes :q 2/1 $.top.Dm$ :8 0/2 0/2 | 0/1 $.top.Gsus$ 1/2 0/2 2/3 $.top.A7, $ |\n              notes :h 2/4 $.top.Dm$ | 0/4 $.top.C$ =:|\n              notes :h 2/1 $.top.Dm$ | 2/1 $.top.Dm$ =|= \n              text .-1,:h, ,|, ,|1., ,|, ,|2.\n            "]}))}function Dn(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Those were the days (Dorogoy Dlinnoyu) V1"),a.a.createElement("p",null,"f#DGBd"),a.a.createElement(bn,{time:"4/4",tuning:"D/5,B/4,G/4,D/4,F#/5",staves:["\n              notes :8 0/2-4/3 $.top.II, $ 2h3/2 2p0/1 2p0/2 |\n              notes :8 0/1-0/2 $.top.Bm, $ (0/1.0/2.4/3.4/4)-0/5 :q 0/2 :8 (0/1.0/2.4/3.4/4)-0/5 |\n              notes :8 4/4-4/4 0h2/3 0/2-2/3 0/3-4/4 | \n              notes :q 2/4 $.top.Em$ :8 (2/1.0/2.0/3.2/4)-0/5 :q 2/4 :8 (2/1.0/2.0/3.2/4)-0/5 |\n            ","\n              notes :8 0/2-4/3 2h3/2 2p0/1 2p0/2 |\n              notes :8 0/1-0/2 $.top.Bm, $ (0/1.0/2.4/3.4/4)-0/5 :q 0/2 :8 (0/1.0/2.4/3.4/4)-0/5 |\n              notes :8 2/2-2/2 $.top.I, $  2h3/2 2/2-1/3 3s4/3 | \n              notes :q 2/2 $.top.F#$ :8 (4/1.2/2.3/3.4/4)-0/5 :q 2/2 :8 (4/1.2/2.3/3.4/4)-0/5 |\n            ","\n              notes :q ## 0/1 $.top.II$ 0/1 2/2 |\n              notes :q 2/2 :8 (4/1.3/2.4/3.4/4)p0/2 $.top.Bm, $ ## 0/2 0/2-2/3 |\n              notes :q 2/3 :8 (0/1.0/2.0/3.0/4)-5/4 $.top.G, $ ## 2/4 4s5/4 |\n              notes :q 2/3 :8 (2/1.2/2.2/3.2/4)h4/3 $.top.A, $ :8d 2p:16:0/2 :8 2p0/3 |\n            ","\n              notes :h 4/4 :8 (4/1.3/2.2/3.4/4)p0/4 2h4/4 |\n              notes :q 2/3 :8 (0/1.0/2.0/3.0/4)-5/4 $.top.G, $ ## 0/3 2h4/3 |\n              notes :q 2/1 :8 (4/1.3/2.4/3.4/4)p0/1 $.top.Bm, $ ## 0/2 2h3/2 |\n              notes :8 (4/1.2/2.3/3.4/4)-0/5 $.top.F#, $ ## 2/1 : 8d 0/1-:16:2/2 :8 0/2-3/3 |\n              notes :q 0/2 $.top.Bm$ :8 (0/1.0/2.4/3.4/4)-0/5 :q 0/2 :8 (0/1.0/2.4/3.4/4)-0/5 =|=\n            "]}),a.a.createElement("h1",null,"Those were the days (Dorogoy Dlinnoyu) V2"),a.a.createElement("p",null,"gDGBd"),a.a.createElement(bn,{time:"4/4",staves:["\n              notes :8 0/2-0/2 2/2-0/1 2p0/1 2p0/2 |\n              notes :8 0/1-0/2 t:hd:0/2 |\n              notes :8 4/4-4/4 0h2/3 0/2-2/3 0/3-4/4 | \n              notes :w 2/4 |\n            ","\n              notes :8 0/2-0/2 2/2-0/1 2p0/1 2p0/2 |\n              notes :8 0/1-0/2 t:hd:0/2 |\n              notes :8 2/2-2/2 2/2-0/1 2/2-1/3 3/3-0/2 | \n              notes :w 2/2 |\n            ","\n              notes :q ## 0/1 0/1 2/2 |\n              notes :q 2/2 :8 0/2-0/2 ## 0/2 0/2-2/3 |\n              notes :q 2/3 :8 0/3-0/3 ## 2/4 4/4-0/3 |\n              notes :qd 2/3 :8 0/2 :8d 2p:16:0/2 :8 2p0/3 |\n            ","\n              notes :h 4/4 :8 ## 0/4 2h4/4 |\n              notes :q 2/3 :8 0/3-0/3 ## 0/3 2/3-0/2 |\n              notes :q 2/1 :8 0/1-0/1 ## 0/2 2/2-0/1 |\n              notes :qd 4/1 :8 2/1 : 8d 0/1-:16:2/2 :8 0/2-3/3 |\n              notes :w 0/2 =|=\n            "]}))}var Cn=function(n){var e=n.path,t=n.title,r=n.children;return Object(m.useEffect)((function(){document.title="Banjo Tab :: "+t})),a.a.createElement(i.b,{path:e},r)},Pn=function(){var n=Object(m.useState)(!1),e=Object(c.a)(n,2),t=e[0],r=e[1];return a.a.createElement(l.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"content"},a.a.createElement("span",null,a.a.createElement("input",{type:"checkbox",id:"showNotes",checked:t,onChange:function(){return r(!t)}}),a.a.createElement("label",{htmlFor:"showNotes"},"Show Notes"),a.a.createElement("br",null),a.a.createElement(l.b,{to:"/russian-anthem"},"Russian Anthem"),"::",a.a.createElement(l.b,{to:"/korobeiniki"},"Korobeiniki"),"::",a.a.createElement(l.b,{to:"/lambada"},"Lambada"),"::",a.a.createElement(l.b,{to:"/prince-igor"},"Prince Igor"),"::",a.a.createElement(l.b,{to:"/sokolov"},"Sokolov's Polka"),"::",a.a.createElement(l.b,{to:"/those-were-the-days"},"Those were the days")),a.a.createElement(A,{showNotes:t},a.a.createElement(i.d,null,a.a.createElement(Cn,{path:"/worried-man",title:"Worried Man's Blues"},a.a.createElement(Q,null)),a.a.createElement(Cn,{path:"/hop-high-ladies",title:"Hop High Ladies"},a.a.createElement(J,null)),a.a.createElement(Cn,{path:"/rose-tattoo",title:"Rose Tattoo"},a.a.createElement(rn,null)),a.a.createElement(Cn,{path:"/interactive-editor",title:"Interactive Editor"},a.a.createElement(en,null)),a.a.createElement(Cn,{path:"/text-editor",title:"Text Editor"},a.a.createElement(an,null)),a.a.createElement(Cn,{path:"/sandy-river-belle",title:"Sandy River Belle"},a.a.createElement(ln,null)),a.a.createElement(Cn,{path:"/russian-anthem",title:"Russian Anthem"},a.a.createElement(pn,null)),a.a.createElement(Cn,{path:"/korobeiniki",title:"Korobeiniki"},a.a.createElement(En,null)),a.a.createElement(Cn,{path:"/kalinka",title:"Kalinka"},a.a.createElement(xn,null)),a.a.createElement(Cn,{path:"/mortal-kombat",title:"Mortal Kombat"},a.a.createElement($n,null)),a.a.createElement(Cn,{path:"/lambada",title:"Lambada"},a.a.createElement(qn,null)),a.a.createElement(Cn,{path:"/moonlight-shadow",title:"Moonlight Shadow"},a.a.createElement(yn,null)),a.a.createElement(Cn,{path:"/prince-igor",title:"Prince Igor"},a.a.createElement(kn,null)),a.a.createElement(Cn,{path:"/sokolov",title:"Sokolov's Polka"},a.a.createElement(Gn,null)),a.a.createElement(Cn,{path:"/oi-to-ne-vecher",title:"Oi, to ne vecher"},a.a.createElement(An,null)),a.a.createElement(Cn,{path:"/those-were-the-days",title:"Those were the days"},a.a.createElement(Dn,null)),a.a.createElement(i.b,{path:"/"},a.a.createElement(i.a,{to:"/sokolov"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0033c639.chunk.js.map