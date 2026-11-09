"use client";
import { useState } from "react";
import { CALCS, validate } from "@/lib/calc";
export default function Calculators(){
  const [i,setI]=useState(0),c=CALCS[i];
  const init=x=>Object.fromEntries(x.inputs.map(a=>[a[0],String(a[3])]));
  const [v,setV]=useState(init(c)),[res,setRes]=useState(null),[err,setErr]=useState("");
  const pick=n=>{setI(n);setV(init(CALCS[n]));setRes(null);setErr("")};
  const go=e=>{e.preventDefault();try{setRes(c.run(validate(c,v)));setErr("")}catch(x){setErr(String(x));setRes(null)}};
  return(<div>
    <div role="tablist" className="flex flex-wrap gap-2 mb-6">{CALCS.map((x,n)=><button key={x.id} role="tab" aria-selected={n===i} onClick={()=>pick(n)}
      className={`px-4 py-2 text-sm border ${n===i?"bg-navy text-white border-navy":"border-steel text-slate2 hover:border-teal"}`}>{x.name}</button>)}</div>
    <div className="grid lg:grid-cols-2 gap-8">
      <form onSubmit={go} noValidate className="bg-mist border border-steel/40 p-6 space-y-4">
        <p className="font-mono text-sm text-tealdk">{c.formula}</p>
        {c.inputs.map(([k,l,u])=><label key={k} className="block text-sm">{l}<span className="flex mt-1"><input inputMode="decimal" value={v[k]} onChange={e=>setV({...v,[k]:e.target.value})} className="w-full border border-steel px-3 py-2 bg-white"/><span className="px-3 py-2 bg-navy text-white text-sm font-mono whitespace-nowrap">{u}</span></span></label>)}
        <button className="bg-teal text-navy font-semibold px-6 py-3 hover:bg-cyan">Calculate</button>
        {err&&<p role="alert" className="text-red-700 text-sm">{err}</p>}
      </form>
      <div className="space-y-4" aria-live="polite">
        {res&&<table key={res[0][1]} className="rise w-full text-sm border border-steel/40"><tbody>{res.map(([a,b,u])=><tr key={a} className="border-t border-steel/30 first:border-0"><td className="p-3 text-slate2">{a}</td><td className="p-3 text-right font-mono font-medium">{b} {u}</td></tr>)}</tbody></table>}
        <div className="text-sm text-slate2 space-y-2"><p><b className="text-navy">Method.</b> {c.how}</p><p><b className="text-navy">Assumptions.</b> {c.assume}</p><p><b className="text-navy">Limitations.</b> {c.limits}</p></div>
      </div></div>
    <p className="mt-6 text-xs text-slate2">Preliminary calculators for understanding and early estimates. They do not replace detailed NAPA modelling, statutory verification or class approval.</p>
  </div>);
}
