import "./globals.css";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
const head=Manrope({subsets:["latin"],variable:"--f-head"});
const body=Inter({subsets:["latin"],variable:"--f-body"});
const mono=IBM_Plex_Mono({subsets:["latin"],weight:["400","500"],variable:"--f-mono"});
const url="https://don-tervin-lindo.vercel.app";
const desc="Naval Architect specialising in basic and preliminary ship design, NAPA stability analysis, and resistance and powering, with practical shipyard experience.";
export const metadata={metadataBase:new URL(url),title:{default:"Don Tervin Lindo | Naval Architect",template:"%s | Don Tervin Lindo"},description:desc,alternates:{canonical:"/"},
  openGraph:{title:"Don Tervin Lindo | Naval Architect",description:desc,url,type:"website"}};
const ld={"@context":"https://schema.org","@type":"Person",name:"Don Tervin Lindo",jobTitle:"Naval Architect",url,sameAs:["https://linkedin.com/in/dontervinlindo"],alumniOf:"Cochin University of Science and Technology"};
export default function RootLayout({children}){
  return <html lang="en" className={`${head.variable} ${body.variable} ${mono.variable}`}><body className="font-body antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>{children}</body></html>;
}
