export const NAV=["Home","Portfolio","Interactive Tools","Media & Animations","About","Contact"];
export const id=s=>s.toLowerCase().replace(/[^a-z]+/g,"-");
export const CATS=["All","Basic & Preliminary Design","Stability","Resistance & Powering","Statutory Calculations","Shipyard & Production"];
export const CONTACT={email:"dontervin@outlook.com",linkedin:"https://linkedin.com/in/dontervinlindo",location:"Kozhikode, Kerala, India"};
// To add a picture to a project, upload it to public/projects/ and add img:"/projects/yourfile.jpg" to that project.
export const PROJECTS=[
 {slug:"kamsarmax",cat:"Basic & Preliminary Design",title:"82,000 DWT Kamsarmax Bulk Carrier",tag:"82,000 DWT",
  p:{"Vessel type":"Bulk carrier","Stage":"Basic design","Role":"Design Engineer"},
  scope:["Hull generation","General arrangement","EEDI calculations"],tools:["NAPA","Rhino","Excel"]},
 {slug:"mpp12k-subdivision",cat:"Stability",title:"12,000 DWT MPP: Subdivision and Damage Stability",tag:"12,000 DWT",
  p:{"Vessel type":"Multi-purpose vessel","Rules":"SOLAS Chapter II-1","Role":"Design Engineer"},
  scope:["Arranged zones and bulkheads","Generated damage cases","Compared attained and required subdivision indices","Derived principal dimensions from parent-ship and class register data"],tools:["NAPA","Excel"]},
 {slug:"mpp7500-inclining",cat:"Stability",title:"7,500 DWT MPP (INS Mahé): Inclining Experiment",tag:"7,500 DWT",
  p:{"Vessel type":"Multi-purpose vessel","Task":"Inclining experiment","Role":"Design Engineer"},
  scope:["Recorded pendulum deflection angles and heeling moments","Established experimental lightship particulars","Validated the NAPA model and developed loading conditions"],tools:["NAPA","Excel"]},
 {slug:"teu1700",cat:"Basic & Preliminary Design",title:"1,700 TEU Methanol-Ready Container Ship",tag:"1,700 TEU",
  p:{"Vessel type":"Container ship","Fuel":"Methanol-ready","Role":"Design Engineer"},
  scope:["Developed the NAPA stability model","Checked container loading for stack weights, GM, draft, trim and bridge visibility","Sized the methanol tank and checked its effect on GA, stability, loading conditions and EEDI"],tools:["NAPA","Rhino"]},
 {slug:"mr-tanker-powering",cat:"Resistance & Powering",title:"55,000 DWT MR Tanker and 12,000 DWT MPP: Powering",tag:"55,000 DWT",
  p:{"Vessel types":"MR tanker, MPP","Software":"NavCad","Role":"Design Engineer"},
  scope:["Transferred hull forms from Rhino and NAPA to NavCad","Selected resistance methods","Produced resistance and power curves","Selected main engines using NavCad results and engine data"],tools:["NavCad","Rhino","NAPA"]},
 {slug:"waps-eexi",cat:"Statutory Calculations",title:"Wind-Assisted Propulsion: EEXI Feasibility",tag:"EEXI / WAPS",
  p:{"Vessel types":"MR tanker, 12,000 DWT MPP","Guidance":"DNV","Role":"Design Engineer"},
  scope:["Used manufacturer WAPS inputs and DNV calculation guidance","Built an Excel-based EEXI tool","Evaluated the effect of the system on attained EEXI"],tools:["Excel","VBA"]},
 {slug:"tonnage-loadline",cat:"Statutory Calculations",title:"GT/NT Tonnage and Load Line Calculations",tag:"GT / NT",
  p:{"Convention":"ITC 1969","Also":"Load Line / freeboard","Role":"Design Engineer"},
  scope:["GT and NT tonnage by hand calculation and Excel sheet","Preliminary Load Line and freeboard calculations"],tools:["Excel"]},
 {slug:"eexi-100m",cat:"Statutory Calculations",title:"EEXI for 100 m+ Vessels",tag:"EEXI",
  p:{"Vessel size":"100 m+ LOA","Data":"Shop-trial engine data","Role":"Junior Naval Architect"},
  scope:["Calculated EEXI with an Excel template","Obtained missing engine data directly from Goltens Dubai"],tools:["Excel"]},
 {slug:"cochin-shipyard",cat:"Shipyard & Production",title:"Ship Repair and Production, Cochin Shipyard",tag:"Shipyard",
  p:{"Vessels":"INS Beas, Nireekshak, Jyoti, Vinash","Period":"2019 to 2024","Role":"Project Lead"},
  scope:["Planned and supervised repair and structural fabrication work","Coordinated with shipyard, Navy and classification society surveyors","Prepared material take-offs and kitting from nesting plans for MPP block construction"],tools:["AutoCAD","Excel"]}];
export const MEDIA=[]; // add {t:"Title",badge:"OpenFOAM CFD",vid:"https://www.youtube.com/embed/VIDEOCODE"} items here
export const SOFTWARE=["NAPA 2025.2.1","Rhino","NavCad","AutoCAD","Microsoft Excel","Excel/VBA"];
export const SKILLS=[
 ["Basic and preliminary ship design","Hull generation, principal dimension development, general arrangement, parent ship analysis, hydrostatics, loading conditions"],
 ["Ship stability","NAPA stability and hydrostatic modelling, intact and damage stability, deterministic and probabilistic damage stability, SOLAS Chapter II-1, IS Code 2008, KN/GZ curves, subdivision analysis"],
 ["Resistance and powering","NavCad, hull resistance, powering calculations, resistance curves, engine selection"],
 ["Statutory calculations","EEDI, EEXI, wind-assisted propulsion assessment, Load Line and freeboard, GT and NT tonnage"],
 ["Shipyard and production","Ship repair, new-build production, structural work, welding, dimensional inspection, material take-off, classification society coordination"]];
export const EXP=[
 {role:"Design Engineer",org:"Smart Engineering and Design Solutions (SEDS)",when:"May 2025 to present",pts:[
  "Basic and preliminary design of an 82,000 DWT Kamsarmax bulk carrier: hull generation, general arrangement, EEDI.",
  "Develop NAPA stability models for a 7,500 DWT MPP, 1,700 TEU methanol-ready container ship, 55,000 DWT MR tanker and 12,000 DWT MPP.",
  "Intact, deterministic and probabilistic damage stability calculations and client deliverables.",
  "Resistance and powering in NavCad, engine selection, EEXI feasibility for wind-assisted propulsion, GT/NT tonnage and Load Line."]},
 {role:"Junior Naval Architect",org:"Navalt Solar and Electric Boats",when:"October 2024 to April 2025",pts:[
  "EEXI calculations for 100 m+ vessels; checked FRP vessel general arrangement drawings.",
  "Prepared preliminary drawings for an 83 m bulk carrier and coordinated with class representatives during FRP construction."]},
 {role:"Project Lead",org:"Cochin Shipyard (subcontractor V.J. Jacob)",when:"December 2019 to October 2024",pts:[
  "Supervised ship repair and production work, allocating jobs among welders, fitters and helpers.",
  "Coordinated with shipyard and Navy personnel, supervised hot work and accompanied class surveyors."]}];
export const EDU={deg:"B.Tech in Naval Architecture and Shipbuilding",uni:"Cochin University of Science and Technology (CUSAT)",when:"2015 to 2019"};
