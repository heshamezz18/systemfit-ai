import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:{default:'SystemFit AI | Software Built Around Your Business',template:'%s | SystemFit AI'},description:'Custom software, intelligent automation and AI solutions designed to fit the way your business works.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
