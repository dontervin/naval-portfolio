export const CONTACT={email:"dontervin@outlook.com",linkedin:"https://linkedin.com/in/dontervinlindo",location:"Kozhikode, Kerala, India"};
export const CATS=["All","Basic & Preliminary Design","Stability","Resistance & Powering","Energy Efficiency & Statutory","Shipyard & Production"];
// Add genuine, cleared images to public/gallery/ and list them here. The section stays hidden while this list is empty.
// Example: {src:"/gallery/napa-model.png",cat:"Stability Modelling (NAPA)",title:"...",alt:"...",software:"NAPA",note:"What this image shows"}
export const GALLERY=[];
// img:"/projects/file.jpg" can be added to any project once you have a cleared image.
export const PROJECTS=[
 {slug:"kamsarmax-82k",cat:"Basic & Preliminary Design",title:"82,000 DWT Kamsarmax Bulk Carrier",tag:"82,000 DWT",
  summary:"Basic and preliminary design of a Kamsarmax bulk carrier.",involvement:"Team project. I contribute to hull generation, general arrangement and EEDI calculations.",
  particulars:{"Vessel type":"Bulk carrier","Size":"82,000 DWT","Stage":"Basic and preliminary design"},
  scope:["Hull generation","General arrangement development","EEDI calculations"],tools:["NAPA","Rhino","Excel"],ongoing:true},
 {slug:"mpp-12k-subdivision",cat:"Stability",title:"12,000 DWT MPP: Subdivision and Damage Stability",tag:"12,000 DWT",
  summary:"Subdivision and damage stability iterations under SOLAS Chapter II-1.",involvement:"Carried out independently within the design team.",
  particulars:{"Vessel type":"Multi-purpose vessel","Rules":"SOLAS Chapter II-1"},
  scope:["Arranged zones and bulkheads","Generated damage cases","Compared attained and required subdivision indices","Derived principal dimensions from parent-ship analysis and class register data"],tools:["NAPA","Excel"]},
 {slug:"mpp-7500-inclining",cat:"Stability",title:"7,500 DWT MPP: Inclining Experiment and NAPA Model",tag:"7,500 DWT",
  summary:"Inclining experiment and use of the results to validate the NAPA model.",involvement:"I conducted the experiment and used the results for model validation.",
  particulars:{"Vessel type":"Multi-purpose vessel","Task":"Inclining experiment"},
  scope:["Recorded pendulum deflection angles and heeling moments","Established experimental lightship particulars","Validated the NAPA model and developed loading conditions"],tools:["NAPA","Excel"]},
 {slug:"container-1700teu",cat:"Stability",title:"1,700 TEU Methanol-Ready Container Ship",tag:"1,700 TEU",
  summary:"NAPA stability model, container loading checks and methanol tank arrangement.",involvement:"Team project. I developed the NAPA model and carried out the checks listed.",
  particulars:{"Vessel type":"Container ship","Fuel":"Methanol-ready"},
  scope:["Developed the NAPA stability model","Checked container loading for stack weights, GM, draft, trim and bridge visibility","Determined methanol tank volume and checked its effect on GA, stability, loading conditions and EEDI"],tools:["NAPA","Rhino"]},
 {slug:"mr-tanker-55k",cat:"Resistance & Powering",title:"55,000 DWT MR Tanker: Resistance and Powering",tag:"55,000 DWT",
  summary:"NAPA stability model and NavCad resistance and powering study, also applied to a 12,000 DWT MPP.",involvement:"NavCad studies carried out independently. NAPA model developed as part of the design team.",
  particulars:{"Vessel type":"MR tanker","Software":"NavCad"},
  scope:["Generated hull forms in Rhino and NAPA and transferred geometry to NavCad","Selected resistance methods","Generated resistance and power curves","Selected main engines from NavCad results and engine data"],tools:["NavCad","Rhino","NAPA"]},
 {slug:"waps-eexi",cat:"Energy Efficiency & Statutory",title:"Wind-Assisted Propulsion: EEXI Feasibility",tag:"EEXI / WAPS",
  summary:"EEXI feasibility calculation for wind-assisted propulsion on an MR tanker and a 12,000 DWT MPP.",involvement:"Carried out independently, using manufacturer inputs and DNV guidance.",
  particulars:{"Vessels":"MR tanker, 12,000 DWT MPP","Guidance":"DNV"},
  scope:["Used inputs from the equipment manufacturer and DNV calculation guidance","Developed an Excel-based EEXI tool","Evaluated the effect of the proposed system on attained EEXI"],tools:["Excel","VBA"]},
 {slug:"tonnage-load-line",cat:"Energy Efficiency & Statutory",title:"GT/NT Tonnage and Load Line Calculations",tag:"GT / NT",
  summary:"Tonnage by hand calculation and Excel, and preliminary Load Line work.",involvement:"Part of statutory design work.",
  particulars:{"Convention":"ITC 1969","Also":"Load Line and freeboard"},
  scope:["GT and NT calculations by hand and in an Excel sheet","Preliminary Load Line and freeboard calculations"],tools:["Excel"]},
 {slug:"eexi-100m",cat:"Energy Efficiency & Statutory",title:"EEXI for 100 m+ Vessels",tag:"EEXI",
  summary:"EEXI calculations from shop-trial engine data for client vessels.",involvement:"Prepared at Navalt, with engine data obtained directly from Goltens Dubai.",
  particulars:{"Vessel size":"100 m+ LOA","Data":"Shop-trial engine performance"},
  scope:["Calculated EEXI using an Excel template","Obtained missing engine data from Goltens Dubai"],tools:["Excel"]},
 {slug:"cochin-shipyard",cat:"Shipyard & Production",title:"Ship Repair and Production, Cochin Shipyard",tag:"Shipyard",
  summary:"Repair and production coordination on naval vessels and new-build MPP blocks.",involvement:"Project Lead for the subcontractor. Vessel names are withheld pending confirmation that disclosure is permitted.",
  particulars:{"Role":"Project Lead","Employer":"V.J. Jacob (subcontractor)"},
  scope:["Planned daily work and allocated jobs among welders, fitters and helpers","Hull inspections, thickness measurement and corrosion reporting","Steel renewal and structural fabrication, with welding and dimensional checks","Supervised hot work with QC and Navy sign-off and accompanied class surveyors","Material take-offs and kitting from nesting plans for MPP block construction"],tools:["AutoCAD","Excel"]}];
export const CAPS=[
 ["Basic & preliminary ship design","Applied at SEDS",["Principal dimension development from parent ships","Hull generation and hull-form development","General arrangement","Preliminary design studies"]],
 ["Stability & hydrostatics","Daily use at SEDS",["NAPA hull, tank and compartment modelling","Loading conditions","Intact and damage stability, deterministic and probabilistic","Inclining experiment conducted on one vessel"]],
 ["Resistance & powering","Applied on two vessels",["NavCad resistance method selection","Resistance and power curves","Main engine selection from results"]],
 ["Energy efficiency & statutory","Applied at SEDS and Navalt",["EEDI and EEXI calculations","Wind-assisted propulsion feasibility","GT/NT tonnage","Load Line and freeboard"]],
 ["Shipyard & production","Five years at Cochin Shipyard",["Repair planning and execution coordination","Structural inspection, thickness and corrosion reporting","Steel renewal","Class surveyor coordination"]]];
export const SOFT=[
 ["NAPA","Ship design and modelling","Stability models: hull geometry, tanks, loading conditions, damage cases and subdivision.",["mpp-12k-subdivision","mpp-7500-inclining","container-1700teu"]],
 ["Rhino","Ship design and modelling","Hull generation, transferred to NAPA and NavCad.",["kamsarmax-82k","mr-tanker-55k"]],
 ["NavCad","Resistance and powering","Resistance methods, power curves and engine selection.",["mr-tanker-55k"]],
 ["AutoCAD","Drafting","Drawings and general arrangement work, and drawing interpretation in the yard.",["cochin-shipyard"]],
 ["Excel and VBA","Engineering calculations","EEXI tool, tonnage sheets and calculation templates.",["waps-eexi","tonnage-load-line","eexi-100m"]]];
export const EXP=[
 {role:"Design Engineer",org:"Smart Engineering and Design Solutions (SEDS)",when:"May 2025 to present",pts:["Basic and preliminary design of an 82,000 DWT Kamsarmax: hull generation, general arrangement, EEDI.","NAPA stability models for a 7,500 DWT MPP, a 1,700 TEU container ship, a 55,000 DWT MR tanker and a 12,000 DWT MPP.","Intact and damage stability, NavCad powering, EEXI feasibility, GT/NT tonnage and Load Line."]},
 {role:"Junior Naval Architect",org:"Navalt Solar and Electric Boats",when:"October 2024 to April 2025",pts:["EEXI calculations for 100 m+ vessels using shop-trial engine data.","FRP general arrangement checks and preliminary drawings for an 83 m bulk carrier.","Coordination with class representatives."]},
 {role:"Project Lead",org:"Cochin Shipyard (V.J. Jacob)",when:"December 2019 to October 2024",pts:["Ship repair and project coordination, daily planning, and coordination of welders, fitters and helpers.","Hull inspections, thickness and corrosion reporting, steel renewal and repair execution."]}];
