import{s as j,r as l,u as h,j as t,P as v,b as _,c as I,e as b,f as B,B as E,g as H,A as k,h as y,i as C}from"./sanity-bc65eeab.js";function g(e){const{actionHandlers:n,index:s,menuItems:a,menuItemGroups:r,title:i}=e,{features:o}=I();return!(a!=null&&a.length)&&!i?null:t.jsx(b,{actions:t.jsx(B,{menuItems:a,menuItemGroups:r,actionHandlers:n}),backButton:o.backButton&&s>0&&t.jsx(E,{as:H,"data-as":"a",icon:k,mode:"bleed"}),title:i})}var u=Object.freeze,w=Object.defineProperty,A=(e,n)=>u(w(e,"raw",{value:u(n||e.slice())})),d;const R=j(C)(d||(d=A([`
  position: relative;
`])));function T(e){const{children:n}=e,{collapsed:s}=y();return t.jsx(R,{hidden:s,height:"fill",overflow:"auto",children:n})}function G(e){const{index:n,pane:s,paneKey:a,...r}=e,{child:i,component:o,menuItems:m,menuItemGroups:p,type:U,...f}=s,[c,x]=l.useState(null),{title:P=""}=h(s);return t.jsxs(v,{id:a,minWidth:320,selected:r.isSelected,children:[t.jsx(g,{actionHandlers:c==null?void 0:c.actionHandlers,index:n,menuItems:m,menuItemGroups:p,title:P}),t.jsxs(T,{children:[_.isValidElementType(o)&&l.createElement(o,{...r,...f,ref:x,child:i,paneKey:a}),l.isValidElement(o)&&o]})]})}export{G as default};
