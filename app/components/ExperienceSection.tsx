type Experience = {
	role: string;
	company: string;
	period: string;
	highlights: string;
	highlights2?: string; // optional
  };
  
  const ExperienceSection = () => {
	// accept undefined safely
	const highlightNumbers = (text?: string): string => {
	  if (!text) return "";
	  return text.replace(
		/(\$?\d+(?:[.,]\d+)*(?:%|x|\+)?(?:\s*(?:million|billion|k|K))?)/g,
		'<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold drop-shadow-[0_0_4px_rgba(96,165,250,0.3)] animate-[pulse_3s_ease-in-out_infinite]">$1</span>'
	  );
	};
  
	const experiences: Experience[] = [
	  {
		role: "Software Development Engineer Intern",
		company: "Amazon",
		period: "Jun 2025 - Aug 2025",
		highlights: " ",
		highlights2:
		  " Drove measurable impact: surfaced disputes to sellers (full fund/fault states), avoiding an estimated $6 million annually in concessions, reducing cycle time by 8% and improving queue efficiency by 17%."
	  },
	  {
		role: "Junior Developer",
		company: "ESPX - Start Up",
		period: "May 2022 - Present",
		highlights:
		  "Developed pipeline from ERCOT energy data to distributed, multi-tiered relational databases on Athena for fast querying and used AWS Lambda, GraphML, and QuickSight to create dashboards displaying cost, geolocation, storage and pricing for large-scale data analytics.",
		highlights2: " "
	  },
	  {
		role: "Research Assistant",
		company: "UMIACS",
		period: "Aug 2024 - May 2025",
		highlights:
		  "Collaborated with Dr. Haizhao Yang to develop and test a multi-modal foundation deep learning model for fast and accurate simulation of dynamic systems. Leveraging a dataset of 40,000 ODEs, FMint integrates numerical and textual modalities to achieve 10-100x accuracy improvements and 5x speedups over traditional solvers."
	  },
	  {
		role: "AI Developer",
		company: "CSS Federal",
		period: "May 2023 - Aug 2023",
		highlights:
		  "Optimized InsightsAI(a tool that models topics and sorts comments) for the federal e-Rule Program through natural language processing and developed an algorithm that determined situationally where to employ keyword analysis or InsightsAI, improving accuracy of the tool from 88% to 93%"
	  }
	];
  
	return (
	  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
		{/* …top/background & header unchanged… */}
		<div className="max-w-2xl mx-auto space-y-6">
		  {experiences.map((exp) => (
			<div key={exp.company} className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
			  <div className="relative z-10">
				{/* …role/company/period… */}
				<p
				  className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
				  dangerouslySetInnerHTML={{ __html: highlightNumbers(exp.highlights) }}
				/>
				{exp.highlights2?.trim() && (
				  <p
					className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
					dangerouslySetInnerHTML={{ __html: highlightNumbers(exp.highlights2) }}
				  />
				)}
			  </div>
			  {/* …corner borders & glow… */}
			</div>
		  ))}
		</div>
	  </section>
	);
  };
  
  export default ExperienceSection;
  