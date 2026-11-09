"use client";
import { useState } from "react";
import { CATS, PROJECTS } from "@/lib/data";
export default function Portfolio(){
  const [c,setC]=useState("All"),[m,setM]=useState(null);
  const list=PROJECTS.filter(p=>c==="All"||p.cat===c);
  return(<>
    <div className="flex flex-wrap gap-2 mb-8">{CATS.map(x=><button key={x} onClick={()=>setC(x)} aria-pressed={c===x}
      className={`px-4 py-2 text-sm border ${c===x?"bg-ice text-navy border-ice":"border-steel text-slate-300 hover:border-sky"}`}>{x}</button>)}</div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{list.map(p=>
      <button key={p.slug} onClick={()=>setM(p)} className="text-left bg-deck border border-steel hover:border-ice transition-colors">
        <img loading="lazy" src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover bg-steel"/>
        <div className="p-4"><p className="text-sky text-sm">{p.cat}</p><h3 className="font-head text-lg">{p.title}</h3></div></button>)}</div>
    {m&&<div role="dialog" aria-modal="true" aria-label={m.title} className="fixed inset-0 z-50 bg-black/80 overflow-y-auto p-4" onClick={()=>setM(null)}>
      <div className="max-w-3xl mx-auto bg-deck border border-steel p-6" onClick={e=>e.stopPropagation()}>
        <div className="flex justify-between"><h3 className="font-head text-2xl">{m.title}</h3><button onClick={()=>setM(null)} aria-label="Close" className="text-2xl">&times;</button></div>
        <img src={m.img} alt="" className="w-full my-4 bg-steel"/><img src={m.ga} alt={`${m.title} general arrangement`} className="w-full bg-navy mb-4"/>
        <table className="w-full text-sm mb-4"><tbody>{Object.entries(m.p).map(([k,v])=><tr key={k} className="border-t border-steel"><td className="py-2 text-slate-300">{k}</td><td className="text-right">{v}</td></tr>)}</tbody></table>
        <h4 className="font-head mb-2">Scope of work</h4><ul className="list-disc pl-5 mb-4 text-slate-200">{m.scope.map(s=><li key={s}>{s}</li>)}</ul>
        <div className="flex flex-wrap gap-2">{m.tools.map(t=><span key={t} className="px-3 py-1 text-xs bg-steel text-ice">{t}</span>)}</div>
      </div></div>}
  </>);
}
