"use client";
import { useState } from "react";
const I="mt-1 w-full bg-navy border border-steel px-3 py-2 text-white";
export default function Contact(){
  const [s,setS]=useState("idle"),[err,setErr]=useState("");
  async function send(e){e.preventDefault();setS("busy");const body=Object.fromEntries(new FormData(e.target));
    const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
    if(r.ok)setS("done");else{setErr((await r.json().catch(()=>({}))).error||"Something went wrong.");setS("idle")}}
  if(s==="done")return <p className="bg-deck border border-ice p-6">Thanks. Your inquiry is in and I will reply within two working days.</p>;
  return(<form onSubmit={send} className="bg-deck border border-steel p-6 grid sm:grid-cols-2 gap-4 max-w-3xl">
    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true"/>
    <label>Name<input required name="name" className={I}/></label>
    <label>Professional email<input required type="email" name="email" className={I}/></label>
    <label>Company / organisation<input name="company" className={I}/></label>
    <label>Vessel type<select name="vessel_type" className={I}>{["Commercial vessel","Yacht / catamaran","Offshore structure","Retrofit / conversion","Other"].map(o=><option key={o}>{o}</option>)}</select></label>
    <label className="sm:col-span-2">Project scope<textarea required name="scope" rows={4} className={I}/></label>
    <label>Expected timeline<select name="timeline" className={I}>{["Under 1 month","1-3 months","3-6 months","6+ months","Not sure yet"].map(o=><option key={o}>{o}</option>)}</select></label>
    <button disabled={s==="busy"} className="self-end bg-ice text-navy font-semibold py-3 hover:bg-sky disabled:opacity-60">{s==="busy"?"Sending...":"Send inquiry"}</button>
    {err&&<p role="alert" className="sm:col-span-2 text-red-300 text-sm">{err}</p>}
  </form>);
}
