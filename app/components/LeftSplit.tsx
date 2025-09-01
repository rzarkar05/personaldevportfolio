'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";


const LeftSplit = () => {
    const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto pl-6 md:pl-8 pr-2 md:pr-4 z-10">
				<div className="text-center mb-8">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						About Me
					</h2>
					<div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
						{/* Profile Picture */}
						<div className="flex-shrink-0">
							<div className="relative w-48 h-48 md:w-56 md:h-56">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg"></div>
								<div className="relative w-48 h-48 md:w-56 md:h-56">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg"></div>
									<Image
										src="/1689698872098.jpg"
										alt="Rishi Zarkar"
										fill
										priority
										sizes="(max-width: 768px) 12rem, 14rem"  // matches w-48 / w-56
										className="relative object-cover rounded-full border-4 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
									/>
									</div>
							</div>
						</div>
						{/* About Text */}
						<div className="flex-1 text-left">
						<p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
							Hi, I&apos;m Rishi. I&apos;m a curious developer drawn to AI and machine learning—how models learn, reason, and collaborate with people. I like connecting research ideas to simple mental models, tinkering with representations and interactions, and asking how small shifts can unlock new capabilities. I care about clarity, responsible use, and interfaces that make knowledge easier to reach. Big picture, I&apos;m excited to help shape the next wave of technology through tools that amplify creativity, invite curiosity, and revolutionize problem-solving.
						</p>
						</div>
					</div>
				</div>


                {/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 text-center">
										Skills
						</h2>
						<div className="flex justify-center">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
								{/* Frontend Layer */}
								<div
									className={`p-3 md:p-4 rounded-lg transition-colors border-2 ${
										selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
									onMouseEnter={() => setSelectedStack('frontend')}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-blue-400">Frontend Development</h3>
									<ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Modern React Architectures</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Performance Optimization</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Responsive & Interactive UIs</span>
										</li>
									</ul>
								</div>

								{/* Backend Layer */}
								<div
									className={`p-3 md:p-4 rounded-lg transition-colors border-2 ${
										selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
									onMouseEnter={() => setSelectedStack('backend')}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-purple-400">Backend Development</h3>
									<ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">API Design & Development</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Database Architecture</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Real-time Systems</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Distributed Systems</span>
										</li>
									</ul>
								</div>

								{/* DevOps Layer */}
								<div
									className={`p-3 md:p-4 rounded-lg transition-colors border-2 ${
										selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
									onMouseEnter={() => setSelectedStack('devops')}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-teal-400">DevOps & Cloud</h3>
									<ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">AWS & Azure Infrastructure</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">CI/CD Pipelines</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Scalable Architecture</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Security & Reliability</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1 flex-shrink-0" />
											<span className="leading-tight">Testing & Deployment Strategies</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 text-center">
							Certifications
						</h2>
						
						{/* App Store Stats */}
				<div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-12 px-2">
					{[
						{
							value: 'AWS Machine Learning Specialty',
							icon: (
								<svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" />
								</svg>
							),
						},
						{
							value: 'AWS Solutions Architect Associate',
							icon: (
								<svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
								</svg>
							),
						},
						{
							value: 'AWS Data Engineer Professional',
							icon: (
								<svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
								</svg>
							),
						},
					].map((stat, index) => (
						<div
							key={index}
							className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
						>
							{/* Decorative gradient background */}
							<div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							{/* Content */}
							<div className="relative z-10">
								<div className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
								<div className="space-y-0.5 sm:space-y-1">
									<div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 text-center leading-tight">
										{stat.value}
									</div>
								</div>
							</div>

							{/* Decorative corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>

							{/* Hover glow effect */}
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>
						</div>
					))}
				</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default LeftSplit;