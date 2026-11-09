import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, CONTACT } from "@/lib/data";
export const generateStaticParams=()=>PROJECTS.map(p=>({slug:p.slug}));
export const generateMetadata=({params})=>{const p=PROJECTS.find(x=>x.slug===params.slug);return p?{title:p.title,description:p.summary,alternates:{canonical:`/projects/${p.slug}`}}:{}};
export default function Project({params}){
  const p=PROJECTS.find(x=>x.slug===params.slug);if(!p)notFound();
  return(<main><div className="bg-navy text-white"><div className="max-w-4xl mx-auto px-5 py-14"><Link href="/#projects" className="text-cyan text-sm">&larr; All projects</Link>
    <p className="font-mono text-xs text-cyan mt-6">{p.cat}</p><h1 className="font-head font-extrabold text-3xl md:text-4xl mt-2">{p.title}</h1><p className="mt-3 text-white/80">{p.summary}</p></div></div>
    <div className="max-w-4xl mx-auto px-5 py-12 space-y-10">
      {p.img&&<img src={p.img} alt={p.title} className="w-full"/>}
      <section><h2 className="font-head font-bold text-xl mb-3">Overview</h2><table className="w-full text-sm"><tbody>{Object.entries(p.particulars).map(([k,v])=><tr key={k} className="border-t border-steel/40"><td className="py-2 text-slate2">{k}</td><td className="text-right">{v}</td></tr>)}</tbody></table></section>
      <section><h2 className="font-head font-bold text-xl mb-3">My contribution</h2><p className="text-slate2 mb-3">{p.involvement}</p><ul className="list-disc pl-5 space-y-1">{p.scope.map(s=><li key={s}>{s}</li>)}</ul></section>
      <section><h2 className="font-head font-bold text-xl mb-3">Software</h2><div className="flex flex-wrap gap-2">{p.tools.map(t=><span key={t} className="font-mono text-sm bg-mist px-3 py-1">{t}</span>)}</div></section>
      <p className="text-sm text-slate2">Client drawings, results and proprietary details are not published. <a className="text-tealdk underline" href={`mailto:${CONTACT.email}`}>Ask me</a> about this project.</p></div></main>);
}
