import Tools from "@/components/Tools";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { NAV, id, MEDIA, SOFTWARE } from "@/lib/data";
const S=({n,title,children})=><section id={id(n)} className="max-w-6xl mx-auto px-5 py-20"><h2 className="font-head text-3xl md:text-4xl mb-8">{title}</h2>{children}</section>;
export default function Page(){
  return(<>
    <header className="sticky top-0 z-40 bg-navy/90 backdrop-blur border-b border-steel"><nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4 overflow-x-auto text-sm">
      {NAV.map(n=><a key={n} href={`#${id(n)}`} className="whitespace-nowrap text-slate-300 hover:text-ice">{n}</a>)}</nav></header>
    <section id="home" className="relative overflow-hidden min-h-[88vh] flex items-center">
      <svg aria-hidden className="absolute bottom-0 left-0 w-[200%] h-40 wave" viewBox="0 0 1600 160" preserveAspectRatio="none">
        <path d="M0 80 Q100 40 200 80 T400 80 T600 80 T800 80 T1000 80 T1200 80 T1400 80 T1600 80 V160 H0Z" fill="#4FACFE" opacity=".12"/>
        <path d="M0 100 Q100 70 200 100 T400 100 T600 100 T800 100 T1000 100 T1200 100 T1400 100 T1600 100 V160 H0Z" fill="#00F2FE" opacity=".1"/></svg>
      <div className="relative max-w-6xl mx-auto px-5"><h1 className="font-head font-bold text-5xl md:text-7xl max-w-3xl leading-[1.05]">Hulls that perform, structures that pass class.</h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300">Independent naval architecture and marine engineering for commercial vessels, yachts, offshore structures and conversions.</p>
        <div className="mt-8 flex gap-4"><a href="#portfolio" className="bg-ice text-navy px-6 py-3 font-semibold">View projects</a><a href="#contact" className="border border-sky px-6 py-3">Start an inquiry</a></div></div></section>
    <S n="Portfolio" title="Engineering portfolio"><Portfolio/></S>
    <S n="Interactive Tools" title="Quick design checks"><p className="text-slate-300 mb-6 max-w-2xl">Enter principal particulars for an early-stage check. Calculations run securely on the server.</p><Tools/></S>
    <S n="Media & Animations" title="Simulations and animations"><div className="grid md:grid-cols-3 gap-6">{MEDIA.map(m=>
      <figure key={m.t} className="bg-deck border border-steel"><div className="relative aspect-video"><iframe loading="lazy" src={m.vid} title={m.t} allowFullScreen className="absolute inset-0 w-full h-full"/>
        <span className="absolute top-2 left-2 bg-navy/90 text-ice text-xs px-2 py-1 pointer-events-none">{m.badge}</span></div><figcaption className="p-3">{m.t}</figcaption></figure>)}</div></S>
    <S n="About" title="About"><div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4 text-slate-200"><p>Chartered engineer (CEng) and member of RINA and SNAME. [Add degree, university and years of experience.]</p>
        <p>Engagement options: remote design consulting, site and yard supervision, and global project availability.</p></div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 content-start">{SOFTWARE.map(s=><li key={s} className="bg-steel text-center py-3 text-sm">{s}</li>)}</ul></div></S>
    <S n="Contact" title="Discuss your project"><Contact/></S>
    <footer className="border-t border-steel py-8 text-center text-slate-400 text-sm">&copy; {new Date().getFullYear()} Naval Architecture &amp; Marine Engineering</footer>
  </>);
}
