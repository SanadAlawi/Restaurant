import{j as e,c as i,g as n,a as p,d as h,L as o}from"./index-BFLPKW7I.js";import{c as j}from"./createSvgIcon-HtgCJFqe.js";import{S as u}from"./ShoppingCart-pVK__ytF.js";const f=j(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),v=()=>{const s=i(n).reduce((c,r)=>c+r.price*r.quantity,0).toFixed(2),l=+s>=50?0:15 .toFixed(2),a=(+s+ +l).toFixed(2);return e.jsxs("div",{className:"p-4 bg-primary_light text-primary flex flex-col gap-4 w-full h-1/2 md:h-full md:w-1/3 md:px-20 md:justify-center lg:w-1/2 lg:px-40",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal (3 items)"}),e.jsxs("span",{children:["$",s]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Service Cost"}),e.jsxs("span",{children:["$",l]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Delivery Cost"}),e.jsx("span",{className:"uppercase text-green-500",children:"free!"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"uppercase",children:"total(incl. vat)"}),e.jsxs("span",{className:"font-bold",children:["$",a]})]}),e.jsx("button",{className:"px-4 py-2 uppercase text-white bg-primary rounded w-1/2 self-end",children:"checkout"})]})},y=()=>{const t=p();return l=>{console.log(l),t(h(l))}},g=t=>{const{id:s,img:l,title:a,price:c,quantity:r}=t,x=y(),m=d=>{d.preventDefault(),x(s)};return e.jsxs(o,{to:`/product/${s}`,className:"text-primary flex justify-between items-center gap-8",children:[e.jsx("img",{loading:"lazy",className:" h-[100px] w-[100px] object-contain",src:l,alt:""}),e.jsxs("div",{children:[e.jsx("h1",{className:"uppercase text-xl font-bold",children:a}),e.jsxs("span",{className:"",children:["Quantity: ",r]})]}),e.jsxs("p",{className:"font-bold",children:["$",(c*r).toFixed(2)]}),e.jsx(f,{onClick:m,className:"cursor-pointer hover:text-red-500"})]})},N=()=>{const t=i(n);return e.jsx("div",{className:"p-4 flex flex-col gap-4 overflow-y-auto w-full h-1/2 md:h-full md:w-2/3 md:px-20 md:justify-center lg:w-1/2 lg:px-40",children:t.map(s=>e.jsx(g,{...s},s.id))})},w=()=>e.jsxs("div",{className:"text-primary flex flex-col items-center justify-center gap-8 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]",children:[e.jsx(u,{className:"text-primary_light",style:{fontSize:"min(50vw, 20rem)"}}),e.jsx("h1",{className:"text-2xl font-bold md:text-4xl",children:"Cart is Empty"}),e.jsx(o,{to:"/",className:"bg-primary text-white rounded px-4 py-2 hover:opacity-90",children:"Go To Home"})]}),S=()=>i(n).length?e.jsxs("div",{className:"h-[calc(100vh-6rem)] w-full flex flex-col md:flex-row md:h-[calc(100vh-9rem)]",children:[e.jsx(N,{}),e.jsx(v,{})]}):e.jsx(w,{});export{S as default};
