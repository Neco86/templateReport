(self.webpackChunktest=self.webpackChunktest||[]).push([[371],{75941:function($){$.exports={wrapper:"wrapper___3iih1",config:"config___1jRLL",workArea:"workArea___3Z94m",input:"input___3IKyb",btn:"btn___h4QN4",parseResult:"parseResult___2m4fz",row:"row___35U44",templateInput:"templateInput___3qfFR",errInput:"errInput___2Sb3-",table:"table___3-dMD"}},66635:function($,O,n){"use strict";n.r(O),n.d(O,{default:function(){return ie}});var Le=n(59319),q=n(34866),Be=n(63185),_=n(9676),Fe=n(57663),x=n(27884),$e=n(34792),R=n(0),k=n(86582),f=n(2824),Oe=n(47673),Y=n(20086),ee=n(75941),o=n.n(ee),a=n(67294),U=n(7869),te=n.n(U),ae=n(30381),j=n.n(ae);function ne(i){for(var c=new ArrayBuffer(i.length),r=new Uint8Array(c),s=0;s<i.length;s++)r[s]=i.charCodeAt(s)&255;return c}function re(i){var c=te().write({SheetNames:["sheet1"],Sheets:{sheet1:i}},{bookType:"xlsx",bookSST:!1,type:"binary"}),r=new Blob([ne(c)],{type:"application/octet-stream"});return r}function le(i){var c=re(i),r=URL.createObjectURL(c),s=document.createElement("a");s.href=r,s.download="".concat(j()().format("YYYY_MM_DD"),".xlsx"),s.innerText="".concat(j()().format("YYYY_MM_DD"),".xlsx"),s.click(),URL.revokeObjectURL(r)}var z=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"index",c="https://neco86.github.io/templateReport/config/".concat(i,".json?t=").concat(Date.now());return fetch(c).then(function(r){return r.json()})},u=n(85893),ue=Y.Z.TextArea,se=U.utils.table_to_sheet,D=/MOMENT\(.+\)/g,E="TEMPLATE_CONFIG",M="TEMPLATE_AUTO",oe=function i(c){return c.map(function(r){return{title:r.title.replace(D,function(s){return j()().format(s.slice(7,s.length-1))}),dataIndex:r.dataIndex,sorter:r.sorter?function(s,L){var S,C;return s[(S=r==null?void 0:r.dataIndex)!==null&&S!==void 0?S:0]-L[(C=r==null?void 0:r.dataIndex)!==null&&C!==void 0?C:0]}:void 0,children:r.children?i(r.children):void 0}})},ie=function(){var i=(0,a.useState)([]),c=(0,f.Z)(i,2),r=c[0],s=c[1],L=(0,a.useState)(""),S=(0,f.Z)(L,2),C=S[0],ce=S[1],de=(0,a.useState)([]),P=(0,f.Z)(de,2),N=P[0],ve=P[1],fe=(0,a.useState)(!!localStorage.getItem(M)),w=(0,f.Z)(fe,2),B=w[0],me=w[1],he=(0,a.useState)(""),V=(0,f.Z)(he,2),y=V[0],H=V[1],pe=(0,a.useState)([]),J=(0,f.Z)(pe,2),Z=J[0],ge=J[1],xe=(0,a.useState)([]),K=(0,f.Z)(xe,2),Se=K[0],F=K[1],Ce=(0,a.useState)([]),G=(0,f.Z)(Ce,2),ye=G[0],Ie=G[1],Q=(0,a.useRef)(),W=(0,a.useMemo)(function(){return N.length},[N]),m=(0,a.useMemo)(function(){return(0,k.Z)(new Array(W)).map(function(){return""})},[W]),be=(0,a.useState)(m),X=(0,f.Z)(be,2),h=X[0],T=X[1],Ae=(0,a.useMemo)(function(){return C.split(`
`).filter(Boolean).map(function(e){return e.split(/(\$\{[0-9]+\})/g).filter(Boolean).map(function(t){return/\$\{[0-9]+\}/.test(t)?{type:"input",dataIndex:+t.slice(2,t.length-1)}:{type:"text",value:t}})})},[C]),je=(0,a.useCallback)(function(e){return function(t){T(m.map(function(l,v){var d;return v===e?t.target.value:(d=h==null?void 0:h[v])!==null&&d!==void 0?d:""}))}},[h,m]),Ee=(0,a.useCallback)(function(){ge([].concat((0,k.Z)(Z),[h])),H(""),T(m),F([]),Q.current.focus()},[Z,m,h]),b=(0,a.useCallback)(function(){T(m),F([])},[m]),A=(0,a.useCallback)(function(e){var t=(0,k.Z)(m),l=[];N.forEach(function(v,d){var p,g;t[d]=(p=(g=e.replace(/\s/g,"").match(v))===null||g===void 0?void 0:g[1])!==null&&p!==void 0?p:"",t[d]||l.push(d)}),T(t),F(l)},[m,N]),Ne=(0,a.useCallback)(function(){var e=se(document.getElementById("table"));le(e)},[]),Ze=(0,a.useCallback)(function(e){var t=e.target.checked;me(t),t?(localStorage.setItem(M,"1"),b(),y&&A(y)):localStorage.removeItem(M)},[b,A,y]),Te=(0,a.useCallback)(function(e){var t=e.target.value;H(t),B&&(b(),t&&A(t))},[B,b,A]),I=(0,a.useCallback)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!e||!e.wordTemplate||!e.columns||!e.parseRules?(R.default.error("\u914D\u7F6E\u6587\u4EF6\u4E0D\u6B63\u786E!"),localStorage.removeItem(E)):(localStorage.setItem(E,JSON.stringify(e)),ce(e.wordTemplate.replace(D,function(l){return j()().format(l.slice(7,l.length-1))})),s(oe(e.columns)),ve(e.parseRules.map(function(l){return new RegExp(l)})),t||R.default.success("\u5BFC\u5165\u914D\u7F6E\u6210\u529F!"))},[]),Re=(0,a.useCallback)(function(){var e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=function(t){var l,v,d=t==null||(l=t.target)===null||l===void 0||(v=l.files)===null||v===void 0?void 0:v[0];if(d){var p=new FileReader;p.onload=function(){var g=p.result;try{var Me=JSON.parse(g);I(Me)}catch(Ye){R.default.error("\u914D\u7F6E\u4E0D\u6B63\u786E!")}},p.readAsText(d,"UTF-8")}},e.click()},[I]);(0,a.useEffect)(function(){z().then(function(e){var t=e.list;Ie(t)})},[]);var ke=(0,a.useCallback)(function(e){z(e).then(I)},[I]);return(0,a.useEffect)(function(){try{var e=JSON.parse(localStorage.getItem(E));e&&I(e,!0)}catch(t){localStorage.removeItem(E)}},[I]),(0,u.jsxs)("div",{className:o().wrapper,children:[(0,u.jsxs)("div",{className:o().config,children:[(0,u.jsx)(x.Z,{size:"small",onClick:Re,children:"\u5BFC\u5165\u914D\u7F6E"}),ye.map(function(e){var t=e.name,l=e.fileName;return(0,u.jsx)(x.Z,{size:"small",onClick:function(){return ke(l)},children:t},l)})]}),(0,u.jsxs)("div",{className:o().workArea,children:[(0,u.jsx)(ue,{ref:Q,autoFocus:!0,className:o().input,value:y,onChange:Te}),(0,u.jsxs)("div",{children:[(0,u.jsx)(x.Z,{className:o().btn,size:"small",type:"primary",onClick:function(){return A(y)},disabled:!y,children:"\u89E3\u6790\u2192"}),(0,u.jsx)(_.Z,{className:o().btn,checked:B,onChange:Ze,children:"\u81EA\u52A8\u2192"})]}),(0,u.jsxs)("div",{className:o().parseResult,children:[Ae.map(function(e,t){return(0,u.jsx)("div",{className:o().row,children:e.map(function(l,v){var d=l.type,p=l.value,g=l.dataIndex;return(0,u.jsxs)(a.Fragment,{children:[d==="input"&&(0,u.jsx)(Y.Z,{value:h[g],onChange:je(g),className:"".concat(o().templateInput," ").concat(Se.includes(g)&&o().errInput),size:"small"}),d==="text"&&p]},"".concat(t,"_").concat(v))})},t)}),(0,u.jsxs)("div",{className:o().row,children:[(0,u.jsx)(x.Z,{size:"small",type:"primary",onClick:Ee,disabled:!h.filter(Boolean).length,children:"\u786E\u8BA4"}),(0,u.jsx)(x.Z,{size:"small",type:"primary",danger:!0,onClick:b,disabled:!h.filter(Boolean).length,children:"\u6E05\u7A7A"})]})]})]}),(0,u.jsx)(x.Z,{className:o().btn,size:"small",type:"primary",disabled:!Z.length,onClick:Ne,children:"\u5BFC\u51FA"}),(0,u.jsx)(q.Z,{id:"table",className:o().table,columns:r,dataSource:Z,bordered:!0,pagination:!1})]})}},18685:function(){},20067:function(){},55382:function(){},72095:function(){},61219:function(){}}]);
