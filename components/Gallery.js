"use client";
import { useState } from "react";
export default function Gallery({items}){
  const cats=["All",...new Set(items.map(i=>i.cat))],[c,setC]=useState("All"),[m,setM]=useState(null);
  const list=items.filter(i=>c==="All"||i.cat===c);
  return(<><div className="flex flex-wrap gap-2 mb-6">{cats.map(x=><button key={x} onClick={()=>setC(x)} aria-pressed={c===x} className={`px-3 py-2 text-sm border ${c===x?"bg-navy text-white border-navy":"border-steel text-slate2"}`}>{x}</button>)}</div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{list.map(i=><button key={i.src} onClick={()=>setM(i)} className="text-left border border-steel/50"><img loading="lazy" src={i.src} alt={i.alt} className="w-full aspect-[4/3] object-cover"/><span className="block p-3 text-sm">{i.title}</span></button>)}</div>
    {m&&<div role="dialog" aria-modal="true" aria-label={m.title} className="fixed inset-0 z-50 bg-navy/95 overflow-y-auto p-4" onClick={()=>setM(null)}><div className="max-w-4xl mx-auto text-white" onClick={e=>e.stopPropagation()}>
      <button onClick={()=>setM(null)} className="mb-3 underline">Close</button><img src={m.src} alt={m.alt} className="w-full"/><h3 className="font-head text-xl mt-4">{m.title}</h3>
      <p className="font-mono text-cyan text-sm">{m.software}</p><p className="mt-2 text-white/80">{m.note}</p></div></div>}</>);
}
