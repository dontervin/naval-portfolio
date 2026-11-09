"use client";
import { useState } from "react";
const F=[["loa","LOA (m)","45"],["beam","Beam (m)","10"],["draft","Draft (m)","3.2"],["speed","Speed (kn)","12"],["displacement","Displacement (t)","900"],["gm","GM (m)","0.8"]];
export default function Tools(){
  const [v,setV]=useState(Object.fromEntries(F.map(([k,,d])=>[k,d])));
  const [r,setR]=useState(null),[err,setErr]=useState(""),[busy,setBusy]=useState(false);
  async function run(e){e.preventDefault();setBusy(true);setErr("");
    try{const res=await fetch("/api/calculate-tool",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});
      const j=await res.json();res.ok?setR(j):(setErr(j.error),setR(null))}catch{setErr("Network error. Try again.")}setBusy(false)}
  const fn=r?Math.min(r.metrics.froude/1.2,1):0;
  return(<div className="grid lg:grid-cols-2 gap-8">
    <form onSubmit={run} className="bg-deck border border-steel p-6 grid grid-cols-2 gap-4 content-start">
      {F.map(([k,l])=><label key={k} className="text-sm text-slate-300">{l}
        <input type="number" step="any" required value={v[k]} onChange={e=>setV({...v,[k]:e.target.value})} className="mt-1 w-full bg-navy border border-steel px-3 py-2 text-white"/></label>)}
      <button disabled={busy} className="col-span-2 bg-ice text-navy font-semibold py-3 hover:bg-sky disabled:opacity-60">{busy?"Calculating...":"Calculate"}</button>
      {err&&<p role="alert" className="col-span-2 text-red-300 text-sm">{err}</p>}
    </form>
    <div className="bg-deck border border-steel p-6" aria-live="polite">
      {!r?<p className="text-slate-400">Enter vessel particulars and select Calculate. Results appear here.</p>:<>
        <div className="flex items-baseline justify-between"><h3 className="font-head text-xl">{r.regime} regime</h3><span className="text-slate-400 text-sm">Fn {r.metrics.froude}</span></div>
        <div className="h-2 bg-navy my-3"><div className="h-2 bg-gradient-to-r from-sky to-ice transition-all duration-700" style={{width:`${fn*100}%`}}/></div>
        <table className="w-full text-sm mt-4"><tbody>{[["Froude number",r.metrics.froude],["Block coefficient",r.metrics.cb],["Admiralty coefficient",r.metrics.admiralty],["L/B",r.metrics.lb],["B/T",r.metrics.bt]].map(([a,b])=>
          <tr key={a} className="border-t border-steel"><td className="py-2 text-slate-300">{a}</td><td className="text-right text-white">{b}</td></tr>)}</tbody></table>
        <ul className="mt-4 space-y-1 text-sm">{r.checks.map(c=><li key={c.name} className={c.pass?"text-ice":"text-red-300"}>{c.pass?"Pass":"Fail"}: {c.name}</li>)}</ul></>}
    </div></div>);
}
