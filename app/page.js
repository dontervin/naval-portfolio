import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import Calculators from "@/components/Calculators";
import Contact from "@/components/Contact";
import Link from "next/link";
import { CONTACT, CAPS, SOFT, EXP, GALLERY, PROJECTS } from "@/lib/data";
const nav=[["home","Home"],["about","About"],["capabilities","Capabilities"],["projects","Projects"],...(GALLERY.length?[["technical-work","Technical Work"]]:[]),["tools","Engineering Tools"],["experience","Experience"],["contact","Contact"]];
const Sec=({id,t,dark,children})=><section id={id} className={dark?"bg-navy text-white":id==="capabilities"||id==="tools"?"bg-mist":""}><div className="max-w-6xl mx-auto px-5 py-20"><h2 className="font-head font-bold text-3xl mb-10">{t}</h2>{children}</div></section>;
const pn=s=>PROJECTS.find(p=>p.slug===s)?.title;
export default function Page(){
  return(<>
    <Nav items={nav}/>
    <section id="home" className="bg-navy text-white"><div className="max-w-6xl mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div className="rise"><p className="font-mono text-cyan text-sm mb-4">Naval Architect | Basic & Preliminary Design | Stability | Resistance & Powering</p>
        <h1 className="font-head font-extrabold text-4xl md:text-5xl leading-tight">Engineering ships, from concept to calculations.</h1>
        <p className="mt-5 text-white/80 max-w-xl">I combine naval architecture design with practical shipyard experience, working across hull generation, NAPA stability modelling, resistance and powering studies, and statutory calculations.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#projects" className="bg-teal text-navy font-semibold px-6 py-3 hover:bg-cyan">Explore my projects</a><a href="#contact" className="border border-white/50 px-6 py-3 hover:border-cyan">Contact</a></div></div>
      <svg viewBox="0 0 520 260" role="img" aria-label="Illustrative hull lines drawing" className="w-full text-cyan"><g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 120 L60 120 Q90 60 150 60 L420 60 Q480 70 500 120 L440 190 Q420 200 380 200 L120 200 Q60 190 20 120Z" opacity=".9"/>
        <path d="M10 140 H510" strokeDasharray="6 5" opacity=".6"/>
        {[110,170,230,290,350,410].map(x=><path key={x} d={`M${x} 62 V198`} opacity=".25"/>)}
        <path d="M60 120 Q250 100 500 120M70 160 Q250 140 470 160" opacity=".4"/></g>
        <text x="14" y="236" fill="#8494A4" fontSize="11" fontFamily="monospace">Illustrative hull lines. Not a project drawing.</text></svg></div>
      <div className="border-t border-white/10"><ul className="max-w-6xl mx-auto px-5 py-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-white/80">
        <li>B.Tech Naval Architecture and Shipbuilding, CUSAT</li><li>82,000 DWT Kamsarmax design involvement</li><li>NAPA stability modelling</li><li>Shipyard repair and production experience</li></ul></div></section>
    <Sec id="about" t="About">
      <div className="grid md:grid-cols-3 gap-10"><div><p className="font-head font-bold text-xl">Don Tervin Lindo</p><p className="text-slate2">Naval Architect</p>
        <p className="mt-4 text-sm">B.Tech Naval Architecture and Shipbuilding<br/>Cochin University of Science and Technology (CUSAT), 2015 to 2019</p><p className="mt-4 text-sm text-slate2">{CONTACT.location}</p></div>
        <div className="md:col-span-2 space-y-4 text-lg text-slate2"><p>I am a Naval Architect with professional experience in ship design, stability analysis, resistance and powering, and statutory calculations, complemented by practical experience in shipyard repair and production.</p>
          <p>My design experience includes basic and preliminary design, hull generation, general arrangement development, NAPA stability modelling and EEDI/EEXI assessments, across bulk carriers, container ships, tankers and multi-purpose vessels.</p>
          <p>Before focusing on design, I coordinated repair and production work, structural inspections and steel renewal at Cochin Shipyard.</p>
          <p>I am interested in contributing to ship design and marine engineering projects where practical engineering knowledge and sound design principles come together.</p></div></div></Sec>
    <Sec id="capabilities" t="Technical capabilities"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{CAPS.map(([t,b,l])=><div key={t} className="bg-white border border-steel/40 p-6 hover:border-teal transition-colors">
      <h3 className="font-head font-semibold text-lg">{t}</h3><p className="font-mono text-xs text-tealdk mt-1">{b}</p><ul className="mt-4 text-sm text-slate2 space-y-2 list-disc pl-4">{l.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div></Sec>
    <Sec id="projects" t="Engineering projects"><Portfolio/></Sec>
    {GALLERY.length>0&&<Sec id="technical-work" t="Engineering visualisation"><Gallery items={GALLERY}/></Sec>}
    <Sec id="tools" t="Naval architecture engineering tools"><Calculators/></Sec>
    <Sec id="software" t="Software and how I use it"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{SOFT.map(([n,g,d,ps])=><div key={n} className="border border-steel/40 p-6">
      <p className="font-mono text-xs text-tealdk">{g}</p><h3 className="font-head font-semibold text-lg">{n}</h3><p className="text-sm text-slate2 mt-2">{d}</p>
      <p className="text-xs mt-3">{ps.map(s=><Link key={s} href={`/projects/${s}`} className="block text-tealdk underline py-0.5">{pn(s)}</Link>)}</p></div>)}</div></Sec>
    <Sec id="experience" t="Experience and education"><div className="max-w-3xl border-l-2 border-teal pl-6 space-y-10">{EXP.map(e=><div key={e.role+e.when}>
      <p className="font-mono text-xs text-tealdk">{e.when}</p><h3 className="font-head font-semibold text-xl">{e.role}</h3><p className="text-slate2">{e.org}</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate2 space-y-1">{e.pts.map(x=><li key={x}>{x}</li>)}</ul></div>)}
      <div><p className="font-mono text-xs text-tealdk">2015 to 2019</p><h3 className="font-head font-semibold text-xl">B.Tech Naval Architecture and Shipbuilding</h3><p className="text-slate2">Cochin University of Science and Technology (CUSAT)</p></div></div></Sec>
    <Sec id="contact" t="Contact" dark><div className="grid md:grid-cols-2 gap-10">
      <div><h3 className="font-head font-bold text-xl">Looking for a naval architect?</h3><p className="mt-3 text-white/80">I welcome opportunities in naval architecture, ship design, marine engineering and shipyard projects.</p>
        <div className="mt-6 flex flex-wrap gap-4"><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="bg-teal text-navy font-semibold px-6 py-3 hover:bg-cyan">Connect on LinkedIn</a><a href={`mailto:${CONTACT.email}`} className="border border-white/50 px-6 py-3 hover:border-cyan">Send an email</a></div></div>
      <div className="text-navy"><h3 className="font-head font-bold text-xl text-white mb-3">Have a marine engineering project?</h3><Contact/></div></div></Sec>
    <footer className="bg-ocean text-white/60 py-6 text-center text-sm">&copy; {new Date().getFullYear()} Don Tervin Lindo</footer></>);
}
