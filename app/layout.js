import "./globals.css";
import { Archivo, Source_Sans_3 } from "next/font/google";
const head = Archivo({ subsets:["latin"], variable:"--f-head", axes:["wdth"] });
const body = Source_Sans_3({ subsets:["latin"], variable:"--f-body" });
export const metadata = { title:"Naval Architect & Marine Engineer", description:"Independent naval architecture and marine engineering consultancy." };
export default function RootLayout({ children }) {
  return <html lang="en" className={`${head.variable} ${body.variable}`}><body className="font-body antialiased">{children}</body></html>;
}
