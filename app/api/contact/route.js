import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
export const runtime = "nodejs";
export async function POST(req){
  const b=await req.json().catch(()=>null);
  if(!b||b.website) return NextResponse.json({ok:true}); // honeypot
  const f=["name","email","company","vessel_type","scope","timeline"];
  const d=Object.fromEntries(f.map(k=>[k,String(b[k]||"").trim().slice(0,2000)]));
  if(!d.name||!/^\S+@\S+\.\S+$/.test(d.email)||!d.scope) return NextResponse.json({error:"Name, valid email and project scope are required."},{status:422});
  const sb=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY);
  const {error}=await sb.from("inquiries").insert(d);
  if(error) return NextResponse.json({error:"Could not save your inquiry. Please try again."},{status:500});
  try{ await new Resend(process.env.RESEND_API_KEY).emails.send({from:process.env.NOTIFY_FROM,to:process.env.NOTIFY_TO,replyTo:d.email,
    subject:`New inquiry: ${d.vessel_type||"project"} from ${d.name}`,text:Object.entries(d).map(([k,v])=>`${k}: ${v}`).join("\n")}) }catch(e){console.error("email failed",e)}
  return NextResponse.json({ok:true});
}
