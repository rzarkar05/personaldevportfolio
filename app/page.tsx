'use client';

import Head from './components/Head';
import LeftSplit from './components/LeftSplit';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<Head />
			<div className="flex-1 grid grid-cols-1 md:grid-cols-2">
				{/* Left Column - Profile */}
				<div className="flex flex-col md:justify-center">
					<LeftSplit />
				</div>

				{/* Right Column - Skills and Experience */}
				<div className="flex flex-col md:justify-center">
					{/* Experience Section */}
					<div>
						<ExperienceSection />
					</div>
				</div>
			</div>
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
