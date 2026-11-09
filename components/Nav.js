"use client";
import { useEffect, useState } from "react";
export default function Nav({items}){
  const [a,setA]=useState(""),[o,setO]=useState(false);
  useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setA(e.target.id)),{rootMargin:"-45% 0px -50% 0px"});
    items.forEach(([id])=>{const el=document.getElementById(id);el&&io.observe(el)});return()=>io.disconnect()},[items]);
  return(<header className="sticky top-0 z-40 bg-navy text-white"><nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between" aria-label="Main">
    <a href="/#home" className="font-head font-semibold">Don Tervin Lindo</a>
    <ul className="hidden lg:flex gap-6 text-sm">{items.map(([id,l])=><li key={id}><a href={`/#${id}`} aria-current={a===id?"true":undefined} className={a===id?"text-cyan":"text-white/80 hover:text-white"}>{l}</a></li>)}</ul>
    <button className="lg:hidden text-sm border border-white/40 px-3 py-1" aria-expanded={o} onClick={()=>setO(!o)}>{o?"Close":"Menu"}</button></nav>
    {o&&<ul className="lg:hidden bg-ocean px-5 py-3 space-y-3">{items.map(([id,l])=><li key={id}><a href={`/#${id}`} onClick={()=>setO(false)} className="block py-1">{l}</a></li>)}</ul>}</header>);
}
