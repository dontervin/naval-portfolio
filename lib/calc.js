// Standard naval architecture relations. Units are shown beside each input in the UI.
const KN=0.514444,G=9.81;
export const CALCS=[
 {id:"cb",name:"Block coefficient",formula:"Cb = ∇ / (L × B × T)",
  inputs:[["vol","Displacement volume ∇","m³",12000,1,2e6],["L","Length L (LBP or LWL)","m",120,1,500],["B","Beam B","m",20,0.5,100],["T","Draft T","m",7,0.1,40]],
  run:v=>{const cb=v.vol/(v.L*v.B*v.T);if(cb>1)throw"Cb above 1.0 is physically impossible. Check ∇, L, B and T.";return[["Block coefficient Cb",cb.toFixed(3),""]]},
  how:"Cb is the ratio of the underwater hull volume to the volume of the enclosing box. Typical full-form cargo ships have high values and fine, fast ships have low values.",
  assume:"∇ is the moulded displacement volume and L, B, T use the same reference as the volume.",limits:"Does not account for appendage volume or shell plating allowance."},
 {id:"fn",name:"Froude number",formula:"Fn = V / √(g × L),  V in m/s = knots × 0.514444,  g = 9.81 m/s²",
  inputs:[["V","Speed V","knots",14,0.1,60],["L","Length L (LWL)","m",120,1,500]],
  run:v=>{const fn=v.V*KN/Math.sqrt(G*v.L);return[["Froude number Fn",fn.toFixed(3),""],["Speed V",(v.V*KN).toFixed(2),"m/s"],["Speed-length ratio V/√L",(v.V/Math.sqrt(v.L*3.28084)).toFixed(2),"(kn, ft)"]]},
  how:"Fn compares speed with the wave-making speed of a hull of that length. Low values indicate displacement operation, and wave resistance grows quickly as Fn increases.",
  assume:"Fresh and salt water give the same Fn because g and L are the only inputs.",limits:"Gives no resistance value on its own."},
 {id:"disp",name:"Displacement",formula:"∇ = Cb × L × B × T,  Δ = ρ × ∇,  ρ = 1.025 t/m³ (seawater)",
  inputs:[["cb","Block coefficient Cb","-",0.8,0.2,1,],["L","Length L","m",120,1,500],["B","Beam B","m",20,0.5,100],["T","Draft T","m",7,0.1,40]],
  run:v=>{const vol=v.cb*v.L*v.B*v.T;return[["Displacement volume ∇",vol.toFixed(0),"m³"],["Displacement Δ (seawater)",(1.025*vol).toFixed(0),"tonnes"]]},
  how:"Multiplying the block box volume by Cb gives the hull volume, and multiplying by water density gives the mass of water displaced.",
  assume:"Seawater density of 1.025 t/m³.",limits:"Moulded displacement only. Not a substitute for a hydrostatic table."},
 {id:"pow",name:"Admiralty power estimate",formula:"P = Δ^(2/3) × V³ / C",
  inputs:[["D","Displacement Δ","tonnes",15000,1,1e6],["V","Speed V","knots",14,0.1,60],["C","Admiralty coefficient C (from a similar ship)","-",450,50,1000]],
  run:v=>{const P=Math.pow(v.D,2/3)*Math.pow(v.V,3)/v.C;return[["Estimated shaft power P",P.toFixed(0),"kW"]]},
  how:"The Admiralty method scales power from a similar, known vessel. Calibrate C from that ship's displacement, speed and power.",
  assume:"The new ship is geometrically and hydrodynamically similar to the reference ship and operates at a similar Froude number.",limits:"A rough early-stage figure only. Not a replacement for NavCad or model-test powering."},
 {id:"gm",name:"Metacentric height",formula:"BM = I / ∇,   GM = KB + BM − KG",
  inputs:[["KB","Centre of buoyancy KB","m",3.8,0.01,50],["I","Waterplane transverse inertia I","m⁴",120000,1,5e7],["vol","Displacement volume ∇","m³",12000,1,2e6],["KG","Centre of gravity KG","m",7.5,0.01,60]],
  run:v=>{const bm=v.I/v.vol,gm=v.KB+bm-v.KG;return[["Transverse BM",bm.toFixed(2),"m"],["GM (solid)",gm.toFixed(2),"m"],["IS Code 2008 minimum GM0",gm>=0.15?"met (≥ 0.15 m)":"not met (< 0.15 m)",""]]},
  how:"GM is the distance from the centre of gravity to the transverse metacentre and indicates initial stability.",
  assume:"Upright condition, no free surface correction.",limits:"Initial stability only. Full stability needs GZ curves, free surface effects and the applicable criteria, normally assessed in NAPA."}];
export function validate(c,vals){const out={};for(const [k,l,,,min,max] of c.inputs){const n=Number(vals[k]);if(vals[k]===""||!Number.isFinite(n))throw `${l}: enter a number.`;if(n<min||n>max)throw `${l}: use a value between ${min} and ${max}.`;out[k]=n}return out}
