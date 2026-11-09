import { NextResponse } from "next/server";
export const runtime = "nodejs";
// All formulas/constants live ONLY here (server-side). Replace with your proprietary logic;
// load secret constants from env vars (e.g. process.env.CALC_K1) for extra protection.
const num=(v,min,max)=>{const n=Number(v);return Number.isFinite(n)&&n>min&&n<max?n:null};
export async function POST(req){
  let b; try{b=await req.json()}catch{return NextResponse.json({error:"Invalid JSON"},{status:400})}
  const L=num(b.loa,1,500),B=num(b.beam,0.5,100),T=num(b.draft,0.1,40),V=num(b.speed,0.1,60),D=num(b.displacement,0.1,1e6),GM=num(b.gm??0.5,-5,50);
  if([L,B,T,V,D].includes(null)) return NextResponse.json({error:"Check inputs: all values must be positive, realistic numbers."},{status:422});
  const g=9.81,vms=V*0.5144;
  const fn=vms/Math.sqrt(g*L);
  const cb=D/(1.025*L*B*T);
  const adm=(Math.pow(D,2/3)*Math.pow(V,3))/ (Number(process.env.CALC_REF_POWER)||1000);
  const lb=L/B,bt=B/T;
  const regime=fn<0.4?"Displacement":fn<1.0?"Semi-displacement":"Planing";
  const gmReq=0.15; // IMO minimum GM (m) placeholder; extend with full criteria server-side
  const checks=[{name:"Initial GM >= 0.15 m",pass:GM>=gmReq},{name:"L/B within 2.5-9",pass:lb>=2.5&&lb<=9},{name:"Block coefficient 0.30-0.90",pass:cb>=0.3&&cb<=0.9}];
  return NextResponse.json({metrics:{froude:+fn.toFixed(3),cb:+cb.toFixed(3),admiralty:+adm.toFixed(1),lb:+lb.toFixed(2),bt:+bt.toFixed(2)},regime,checks});
}
