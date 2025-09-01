'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
						    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:100%] animate-gradient">
                                Rishi Zarkar
                            </span>
                        </h1>
						<p className="text-gray-400 mb-2">Software Developer</p>
						<p className="text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">AWS</span>
                            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React & Next.js</span>
                            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Go</span>
                            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Docker</span>
                            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Kubernetes</span>
						</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">C/C++</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">OCaml</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">HTML/CSS</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">JavaScript</span>
                        </div>
					</div>
				</motion.div>
			</div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
			</div>
		</section>
	);
}
