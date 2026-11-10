// Illustrative procedural MR-tanker-style model. NOT a project vessel and not to scale of any real ship.
import * as THREE from "three";
const L=11,B=1.9,D=1.0,NI=72,NS=14;
const fw=u=>u<.06?.5+.5*(u/.06):u>.88?Math.pow(Math.max(0,1-(u-.88)/.12),.7):1;
const rise=u=>u>.9?Math.pow((u-.9)/.1,2)*.3:u<.05?(1-u/.05)*.08:0;
const gs=s=>.3+.7*Math.sqrt(1-Math.pow(1-s,3));
export function buildTanker(){
  const g=new THREE.Group(),K=2*NS+1,pos=[],col=[],idx=[],red=new THREE.Color(0x8b1e24),navy=new THREE.Color(0x16293f);
  for(let i=0;i<=NI;i++){const u=i/NI,x=(u-.5)*L,w=fw(u)*B/2,r=rise(u);
    for(let k=0;k<K;k++){const side=k<=NS?-1:1,s=k<=NS?1-k/NS:(k-NS)/NS;pos.push(x,r+s*(D-r),side*w*gs(s));(s<.4?red:navy).toArray(col,col.length)}}
  for(let i=0;i<NI;i++)for(let k=0;k<K-1;k++){const a=i*K+k,b=a+1,c=a+K,d=c+1;idx.push(a,b,c,b,d,c)}
  const hg=new THREE.BufferGeometry();hg.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));hg.setAttribute("color",new THREE.Float32BufferAttribute(col,3));hg.setIndex(idx);hg.computeVertexNormals();
  g.add(new THREE.Mesh(hg,new THREE.MeshStandardMaterial({vertexColors:true,metalness:.35,roughness:.5,side:THREE.DoubleSide})));
  const wire=new THREE.Mesh(hg,new THREE.MeshBasicMaterial({color:0x66d9cf,wireframe:true,transparent:true,opacity:.55}));wire.userData.wire=true;g.add(wire);
  const dp=[],di=[];for(let i=0;i<=NI;i++){const u=i/NI,x=(u-.5)*L,w=fw(u)*B/2;dp.push(x,D,-w,x,D,w);if(i<NI){const a=i*2;di.push(a,a+1,a+2,a+1,a+3,a+2)}}
  const dg=new THREE.BufferGeometry();dg.setAttribute("position",new THREE.Float32BufferAttribute(dp,3));dg.setIndex(di);dg.computeVertexNormals();
  g.add(new THREE.Mesh(dg,new THREE.MeshStandardMaterial({color:0x4b5b52,metalness:.2,roughness:.7,side:THREE.DoubleSide})));
  const white=new THREE.MeshStandardMaterial({color:0xe9eef3,metalness:.1,roughness:.5}),dark=new THREE.MeshStandardMaterial({color:0x1b2430,metalness:.4,roughness:.5}),grey=new THREE.MeshStandardMaterial({color:0x8494a4,metalness:.5,roughness:.45});
  const box=(w,h,d,x,y,z,m)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);g.add(b);return b};
  const hx=-L/2+.9;[[1.3,1.5],[1.2,1.4],[1.1,1.3],[.9,1.1]].forEach(([l,w],t)=>box(l,.26,w,hx,D+.13+t*.26,0,white));
  box(.6,.22,1.75,hx+.1,D+1.17,0,white);box(.5,.04,1.8,hx+.1,D+1.3,0,dark);
  const f=new THREE.Mesh(new THREE.CylinderGeometry(.12,.14,.5,20),dark);f.position.set(hx-.35,D+1.25,0);g.add(f);
  const m=new THREE.Mesh(new THREE.CylinderGeometry(.012,.012,.7,6),grey);m.position.set(hx+.1,D+1.65,0);g.add(m);
  box(8.2,.06,.08,.35,D+.04,0,grey);box(.08,.06,.9,.35,D+.04,0,grey);box(.08,.06,.9,-1.6,D+.04,0,grey);box(.08,.06,.9,2.2,D+.04,0,grey);
  for(let i=0;i<12;i++)for(const z of[-.45,.45]){const h=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.05,16),grey);h.position.set(-3.2+i*.65,D+.03,z);g.add(h)}
  box(.35,.2,.4,L/2-1,D+.1,0,dark);
  g.position.y=-.45;return{group:g,length:L};
}
