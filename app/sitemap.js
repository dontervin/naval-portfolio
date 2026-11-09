import { PROJECTS } from "@/lib/data";
const u="https://don-tervin-lindo.vercel.app";
export default function sitemap(){return[{url:u},...PROJECTS.map(p=>({url:`${u}/projects/${p.slug}`}))]}
