import{j as e,r as d,u as x}from"./index-BFLPKW7I.js";import{u as m,b as h}from"./db-CVlP49VQ.js";import{c as l}from"./createSvgIcon-HtgCJFqe.js";const p=l(e.jsx("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew"),j=l(e.jsx("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos"),u=()=>{const[t,s]=d.useState(1);return[t,()=>{s(a=>a<10?a+1:a)},()=>{s(a=>a>1?a-1:a)}]},f=t=>{const[s,n,r]=u();let a=(t.price*s).toFixed(2);const c=m(),o=()=>{c(t,s)},i=s==10?"Max Quantity":"";return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("p",{className:"font-bold text-2xl",children:["$",a," ",e.jsx("span",{className:"text-red-600 text-sm",children:i})," "]}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex-1 flex justify-between items-center border border-primary p-1",children:[e.jsx("h1",{className:"flex-1",children:"Quantity"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"cursor-pointer",onClick:r,children:[" ",e.jsx(p,{})," "]}),e.jsxs("span",{className:"text-xl",children:[" ",s," "]}),e.jsxs("span",{className:"cursor-pointer",onClick:n,children:[" ",e.jsx(j,{})," "]})]})]}),e.jsx("button",{className:"text-white bg-primary px-4 py-2 uppercase",onClick:o,children:"add to cart"})]})]})},k=()=>{const{id:t}=x(),s=h.find(r=>r.id===+t),n=()=>{window.open(s.img,"_blank")};return e.jsxs("div",{className:"p-4 text-primary h-[calc(100vh-6rem)] gap-8 flex flex-col md:flex-row md:items-center md:h-[calc(100vh-9rem)] lg:px-20 xl:p-40",children:[e.jsx("a",{className:"relative w-full h-1/2 md:h-[70vh]",href:s.img,target:"_blank",rel:"noopener noreferrer",onClick:r=>r.stopPropagation(),children:e.jsx("img",{loading:"lazy",className:"absolute object-contain w-full h-full rounded",src:s.img,alt:"",onClick:n})}),e.jsxs("div",{className:"flex flex-col justify-center gap-4 h-1/2 md:h-[70vh] ",children:[e.jsx("h1",{className:"font-bold text-4xl",children:s.title}),e.jsxs("p",{children:[s.desc,"                "]}),e.jsx(f,{...s})]})]})};export{k as default};
