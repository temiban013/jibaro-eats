'use client'
interface JibaroCardProps {
  jibaroName: string;
}
export default function JibaroCard({jibaroName}: JibaroCardProps) {
    return (
        <div className="text-center bg-black text-white/80 sm:text-left sm:pl-12 pt-2 sm:pb-6">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{jibaroName}</h1>
            <p className="text-xl sm:text-2xl pt-3"><a href="tel:+17879328884" className="sm:inline-block">(787) 932-0884</a> </p>
            <p className="text-xl sm:text-2xl pt-3"><a href="mailto:jibaromg@gmail.com" className="text-blue-500 hover:text-blue-700 sm:inline-block">jibaromg@gmail.com</a></p>
        </div>        
    )
}