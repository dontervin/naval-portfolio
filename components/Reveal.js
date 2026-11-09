"use client";
import { useEffect, useRef, useState } from "react";
export default function Reveal({children,delay=0,dir="up",className=""}){
  const r=useRef(null),[on,setOn]=useState(false);
  useEffect(()=>{const el=r.current;if(!el)return;
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);io.disconnect()}},{threshold:.12,rootMargin:"0px 0px -8% 0px"});
    io.observe(el);return()=>io.disconnect()},[]);
  return <div ref={r} className={`rv rv-${dir} ${on?"in":""} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>;
}
