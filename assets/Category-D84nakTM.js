import{u as t,j as e,L as a}from"./index-CegPZ9rm.js";import{b as i}from"./db-Drv87ZTb.js";const o=()=>{const{category:s}=t(),l=i.filter(r=>r.genre===s);return e.jsx("div",{className:"flex flex-wrap",children:l.map(r=>e.jsxs(a,{to:`/product/${r.id}`,className:"p-4  group flex flex-col items-center justify-between w-full h-[60vh] border border-r-primary border-b-primary md:w-1/2 lg:w-1/3 odd:bg-primary_light",children:[e.jsx("div",{className:"relative h-[80%] w-full",children:e.jsx("img",{loading:"lazy",className:"absolute object-contain bg-gr w-full h-full  ",src:r.img,alt:""})}),e.jsxs("div",{className:"flex w-full justify-between items-center font-bold uppercase text-primary",children:[e.jsx("h1",{className:"text-xl",children:r.title}),e.jsx("p",{className:"group-hover:hidden",children:r.price}),e.jsx("button",{className:"hidden group-hover:inline-block uppercase px-4 py-2 text-white bg-primary font-bold rounded",children:"add to cart"})]})]},r.id))})};export{o as default};
