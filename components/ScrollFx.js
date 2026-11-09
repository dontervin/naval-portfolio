"use client";
import { useEffect } from "react";
export default function ScrollFx(){
  useEffect(()=>{const d=document.documentElement;let t=false;
    const f=()=>{t=false;const y=window.scrollY,h=d.scrollHeight-window.innerHeight;d.style.setProperty("--sy",Math.min(y,900));d.style.setProperty("--sp",h>0?y/h:0)};
    const on=()=>{if(!t){t=true;requestAnimationFrame(f)}};f();window.addEventListener("scroll",on,{passive:true});return()=>window.removeEventListener("scroll",on)},[]);
  return <div aria-hidden="true" className="fixed top-14 left-0 h-0.5 w-full bg-teal origin-left z-40" style={{transform:"scaleX(var(--sp,0))"}}/>;
}
