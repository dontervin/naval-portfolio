"use client";
import { useState } from "react";
import Link from "next/link";
import { CATS, PROJECTS } from "@/lib/data";
export default function Portfolio(){
  const [c,setC]=useState("All"),list=PROJECTS.filter(p=>c==="All"||p.cat===c);
  return(<><div className="flex flex-wrap gap-2 mb-8">{CATS.map(x=><button key={x} onClick={()=>setC(x)} aria-pressed={c===x}
    className={`px-3 py-2 text-sm border ${c===x?"bg-navy text-white border-navy":"border-steel text-slate2 hover:border-teal"}`}>{x}</button>)}</div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{list.map(p=><Link key={p.slug} href={`/projects/${p.slug}`} className="group border border-steel/50 bg-white hover:border-teal flex flex-col">
      {p.img?<img loading="lazy" src={p.img} alt={p.title} className="w-full aspect-[16/9] object-cover"/>:<div className="aspect-[16/9] bg-ocean flex items-end p-4 font-mono text-cyan text-2xl">{p.tag}</div>}
      <div className="p-5 flex-1 flex flex-col"><p className="font-mono text-xs text-tealdk uppercase tracking-wide">{p.cat}</p><h3 className="font-head font-semibold text-lg mt-1">{p.title}</h3>
        <p className="text-sm text-slate2 mt-2 flex-1">{p.summary}</p><p className="text-xs text-slate2 mt-3">{p.involvement}</p>
        <div className="flex flex-wrap gap-1 mt-3">{p.tools.map(t=><span key={t} className="font-mono text-xs bg-mist px-2 py-1">{t}</span>)}</div>
        <span className="mt-4 text-sm font-semibold text-tealdk group-hover:underline">View project</span></div></Link>)}</div></>);
}
