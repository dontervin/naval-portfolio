"use client";
import { useEffect, useRef, useState } from "react";
const WV=`uniform float t;varying float vH;varying vec2 vP;void main(){vec3 p=position;float h=sin(p.x*.7+t)*.06+sin(p.y*1.1-t*1.2)*.04+sin((p.x+p.y)*.4+t*.6)*.05;p.z+=h;vH=h;vP=p.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
const WF=`varying float vH;varying vec2 vP;void main(){float line=1.-smoothstep(0.,.06,abs(fract(vH*14.)-.5));float fade=1.-smoothstep(6.,22.,length(vP));gl_FragColor=vec4(vec3(.02,.07,.11)+vec3(.05,.35,.36)*line*.55*fade,1.);}`;
const B="px-3 py-1.5 font-mono text-xs border border-cyan/50 hover:border-cyan aria-pressed:bg-cyan aria-pressed:text-navy";
export default function HeroStage(){
  const box=useRef(null),api=useRef({}),[st,setSt]=useState("load"),[ui,setUi]=useState({inspect:false,wire:false,sound:false});
  useEffect(()=>{api.current.apply&&api.current.apply(ui)},[ui,st]);
  useEffect(()=>{
    let dead=false,off=()=>{};
    (async()=>{
      const probe=document.createElement("canvas");
      if(!(probe.getContext("webgl2")||probe.getContext("webgl"))){setSt("nogl");return}
      const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,small=matchMedia("(max-width: 768px)").matches;
      const [THREE,{buildTanker},{OrbitControls},{RoomEnvironment}]=await Promise.all([import("three"),import("@/lib/tanker"),import("three/examples/jsm/controls/OrbitControls.js"),import("three/examples/jsm/environments/RoomEnvironment.js")]);
      if(dead)return;
      const el=box.current;let w=el.clientWidth,h=el.clientHeight;
      const r=new THREE.WebGLRenderer({antialias:!small,powerPreference:"high-performance"});
      r.setPixelRatio(Math.min(window.devicePixelRatio,small?1.25:1.75));r.setSize(w,h);r.localClippingEnabled=true;r.toneMapping=THREE.ACESFilmicToneMapping;
      r.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y";r.domElement.setAttribute("aria-hidden","true");el.appendChild(r.domElement);
      const scene=new THREE.Scene();scene.background=new THREE.Color(0x060d16);scene.fog=new THREE.Fog(0x060d16,12,34);
      const pm=new THREE.PMREMGenerator(r);scene.environment=pm.fromScene(new RoomEnvironment(),.04).texture;
      const cam=new THREE.PerspectiveCamera(32,w/h,.1,80),key=new THREE.DirectionalLight(0xffffff,2.2),rim=new THREE.DirectionalLight(0x66d9cf,1.6);
      key.position.set(-5,8,6);rim.position.set(6,3,-6);scene.add(key,rim);
      const ship=buildTanker(),solid=new THREE.Plane(new THREE.Vector3(-1,0,0),0),wirep=new THREE.Plane(new THREE.Vector3(1,0,0),0);
      ship.group.traverse(o=>{if(o.isMesh)o.material.clippingPlanes=[o.userData.wire?wirep:solid]});scene.add(ship.group);
      const seg=small?90:160,wm=new THREE.ShaderMaterial({uniforms:{t:{value:0}},vertexShader:WV,fragmentShader:WF}),water=new THREE.Mesh(new THREE.PlaneGeometry(48,48,seg,seg),wm);
      water.rotation.x=-Math.PI/2;scene.add(water);
      const scan=new THREE.Mesh(new THREE.PlaneGeometry(2.6,2),new THREE.MeshBasicMaterial({color:0x66d9cf,transparent:true,opacity:.22,side:THREE.DoubleSide}));scan.rotation.y=Math.PI/2;scene.add(scan);
      const ctl=new OrbitControls(cam,r.domElement);ctl.enabled=false;ctl.enableDamping=true;ctl.minDistance=5;ctl.maxDistance=18;ctl.maxPolarAngle=1.5;ctl.target.set(0,.2,0);
      let time=0,mx=0,my=0,vis=true,raf=0,wireMode=false,inspect=false,last=performance.now();const tmp=new THREE.Vector3(),L=ship.length;
      const draw=()=>{const n=performance.now();time+=Math.min(.05,(n-last)/1000);last=n;wm.uniforms.t.value=time;
        const p=reduce?1:Math.min(1,Math.max(0,(time-.6)/4.5)),e=1-Math.pow(1-p,3),c=-L/2-.6+e*(L+1.2);
        solid.constant=wireMode?-99:c;wirep.constant=wireMode?99:-c;scan.visible=!wireMode&&p<1;scan.position.set(c,.1,0);
        if(!reduce){ship.group.rotation.x=Math.sin(time*.7)*.015;ship.group.rotation.z=Math.sin(time*.5)*.01;ship.group.position.y=-.45+Math.sin(time*.9)*.03}
        if(inspect)ctl.update();else{const a=.95+(reduce?0:time*.04)+mx*.35;tmp.set(Math.cos(a)*11.5,3-my*.5,Math.sin(a)*11.5);cam.position.lerp(tmp,reduce?1:.06);cam.lookAt(0,.2,0)}
        r.render(scene,cam)};
      const loop=()=>{raf=requestAnimationFrame(loop);if(vis&&!document.hidden)draw()};
      const move=e=>{const b=el.getBoundingClientRect();mx=((e.clientX-b.left)/b.width-.5)*2;my=((e.clientY-b.top)/b.height-.5)*2;reduce&&!inspect&&draw()};
      el.addEventListener("pointermove",move);
      const io=new IntersectionObserver(([e])=>{vis=e.isIntersecting});io.observe(el);
      const ro=new ResizeObserver(()=>{w=el.clientWidth;h=el.clientHeight;if(!w||!h)return;r.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix();reduce&&draw()});ro.observe(el);
      let ac,gain;const sound=on=>{if(on&&!ac){ac=new AudioContext();const n=ac.sampleRate*2,buf=ac.createBuffer(1,n,ac.sampleRate),d=buf.getChannelData(0);let l=0;
        for(let i=0;i<n;i++){l=(l+.02*(Math.random()*2-1))/1.02;d[i]=l*3.5}
        const s=ac.createBufferSource();s.buffer=buf;s.loop=true;const lp=ac.createBiquadFilter();lp.type="lowpass";lp.frequency.value=500;
        const lfo=ac.createOscillator(),lg=ac.createGain();lfo.frequency.value=.12;lg.gain.value=220;lfo.connect(lg);lg.connect(lp.frequency);
        gain=ac.createGain();gain.gain.value=0;s.connect(lp);lp.connect(gain);gain.connect(ac.destination);s.start();lfo.start()}
        if(ac){ac.resume();gain.gain.setTargetAtTime(on?.35:0,ac.currentTime,.4)}};
      api.current.apply=u=>{inspect=u.inspect;wireMode=u.wire;ctl.enabled=u.inspect;r.domElement.style.touchAction=u.inspect?"none":"pan-y";sound(u.sound);reduce&&draw()};
      if(reduce){ctl.addEventListener("change",draw);draw()}else loop();
      off=()=>{cancelAnimationFrame(raf);io.disconnect();ro.disconnect();el.removeEventListener("pointermove",move);ctl.dispose();ac&&ac.close();api.current.apply=null;
        scene.traverse(o=>{o.geometry&&o.geometry.dispose();o.material&&o.material.dispose()});pm.dispose();r.dispose();r.domElement.remove()};
      setSt("gl");
    })().catch(()=>{if(!dead)setSt("nogl")});
    return()=>{dead=true;off()};
  },[]);
  const t=(k)=>setUi(u=>({...u,[k]:!u[k]}));
  return(<figure style={{transform:"translateY(calc(var(--sy,0) * -0.05px))"}} className="relative aspect-[3/2] overflow-hidden border border-white/15 bg-ocean m-0">
    <div ref={box} className="absolute inset-0"/>
    {st==="load"&&<p className="absolute inset-0 grid place-items-center font-mono text-xs text-cyan">Loading 3D model</p>}
    {st==="nogl"&&<><picture><source media="(prefers-reduced-motion: reduce)" srcSet="/hero/roro-static.webp"/><img src="/hero/roro-animation.webp" width="508" height="336" alt="Animated exploded view of a RoRo vessel separating into superstructure, cargo deck, hull structure and machinery spaces" className="w-full h-full object-cover"/></picture>
      <figcaption className="absolute bottom-0 left-0 bg-navy/85 text-cyan font-mono text-xs px-3 py-2">RoRo vessel: exploded view animation</figcaption></>}
    {st==="gl"&&<figcaption className="absolute inset-x-0 bottom-0 bg-navy/85 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-cyan">
      <span className="font-mono text-xs">Illustrative procedural tanker model. Not a project vessel.</span>
      <span className="flex gap-2"><button className={B} aria-pressed={ui.inspect} onClick={()=>t("inspect")}>Inspect</button><button className={B} aria-pressed={ui.wire} onClick={()=>t("wire")}>Wireframe</button><button className={B} aria-pressed={ui.sound} onClick={()=>t("sound")}>Water sound</button></span></figcaption>}
  </figure>);
}
