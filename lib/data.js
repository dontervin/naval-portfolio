export const NAV=["Home","Portfolio","Interactive Tools","Media & Animations","About","Contact"];
export const id=s=>s.toLowerCase().replace(/[^a-z]+/g,"-");
export const CATS=["All","Commercial Vessels","Yachts/Catamarans","Offshore Structures","Retrofits/Conversions"];
// Replace placeholder content/images with real projects (or load from Supabase `projects` table).
export const PROJECTS=[
 {slug:"tug-32",cat:"Commercial Vessels",title:"32 m ASD Harbour Tug",img:"/projects/tug-render.jpg",ga:"/projects/tug-ga.svg",
  p:{LOA:"32.0 m",B:"11.5 m",T:"4.6 m",V:"12 kn",Class:"DNV"},scope:["Hull lines optimisation","Stability booklet","Class approval drawings"],tools:["Rhino 3D","Maxsurf","AutoCAD"]},
 {slug:"cat-18",cat:"Yachts/Catamarans",title:"18 m Sailing Catamaran",img:"/projects/cat-render.jpg",ga:"/projects/cat-ga.svg",
  p:{LOA:"18.0 m",B:"8.2 m",T:"1.2 m",V:"18 kn",Class:"RINA"},scope:["Hull form development","Resistance and seakeeping","Structural scantlings"],tools:["Rhino 3D","Maxsurf","ANSYS"]},
 {slug:"jacket-q",cat:"Offshore Structures",title:"Wellhead Platform Jacket",img:"/projects/jacket-render.jpg",ga:"/projects/jacket-ga.svg",
  p:{LOA:"42.0 m",B:"28.0 m",T:"n/a",V:"n/a",Class:"ABS"},scope:["FEA structural verification","Transportation analysis","Fabrication drawings"],tools:["ANSYS","AutoCAD","NAPA"]},
 {slug:"ferry-conv",cat:"Retrofits/Conversions",title:"Ro-Pax Ferry Conversion",img:"/projects/ferry-render.jpg",ga:"/projects/ferry-ga.svg",
  p:{LOA:"68.0 m",B:"14.2 m",T:"3.3 m",V:"14 kn",Class:"BV"},scope:["Deadweight and stability re-assessment","Lightship survey","Class approval"],tools:["NAPA","Maxsurf","AutoCAD"]}];
export const MEDIA=[
 {t:"Hull resistance, CFD",badge:"OpenFOAM CFD",vid:"https://www.youtube.com/embed/VIDEO_ID_1"},
 {t:"Dynamic stability in beam seas",badge:"Maxsurf Motion Analysis",vid:"https://www.youtube.com/embed/VIDEO_ID_2"},
 {t:"Exploded assembly walkthrough",badge:"Rhino 3D Walkthrough",vid:"https://player.vimeo.com/video/VIDEO_ID_3"}];
export const SOFTWARE=["Rhino 3D","Maxsurf","ANSYS","AutoCAD","NAPA","OpenFOAM","SolidWorks","Orca3D"];
