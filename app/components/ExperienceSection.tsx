const ExperienceSection = () => {
	const highlightNumbers = (text: string) => {
		if (!text) return '';
		return text.replace(/(\$?\d+(?:[.,]\d+)*(?:%|x|\+)?(?:\s*(?:million|billion|k|K))?)/g, '<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold drop-shadow-[0_0_4px_rgba(96,165,250,0.3)] animate-[pulse_3s_ease-in-out_infinite]">$1</span>');
	};
	const experiences = [
		{
			role: 'Software Development Engineer Intern',
			company: 'Amazon',
			period: 'Jun 2025 - Aug 2025',
            highlights: ' Drove measurable impact: surfaced disputes to sellers (full fund/fault states), avoiding an estimated $6 million annually in concessions, reducing cycle time by 8% and improving queue efficiency by 17%.',
		},
		{
			role: 'Junior Developer',
			company: 'ESPX - Start Up',
			period: 'May 2022 - Present',
			highlights: 'Developed pipeline from ERCOT energy data to distributed, multi-tiered relational databases on Athena for fast querying and used AWS Lambda, GraphML, and QuickSight to create dashboards displaying cost, geolocation, storage and pricing for large-scale data analytics.',
        },
		{
			role: 'Research Assistant',
			company: 'UMIACS',
			period: 'Aug 2024 - May 2025',
			highlights: 'Collaborated with Dr. Haizhao Yang to develop and test a multi-modal foundation deep learning model for fast and accurate simulation of dynamic systems. Leveraging a dataset of 40,000 ODEs, FMint integrates numerical and textual modalities to achieve 10-100x accuracy improvements and 5x speedups over traditional solvers.',
        },
		/*{
			role: 'Siemens Energy',
			company: 'Machine Learning Intern',
			period: 'Jun 2024 - Aug 2024',
			highlights: 'Engineered an AutoML system using sci-kit learn and NumPy to automate data preprocessing, model selection, and hyperparameter optimization through nonlinear optimization, improving predictive model accuracy by 20%',
            highlights2: 'Implemented and evaluated multiple ML algorithms and optimized their workflows using Grid Search, ensuring robust model performance, ultimately achieving a cross-validated accuracy of 79% for binary classification',
		},*/
        {
			role: 'AI Developer',
			company: 'CSS Federal',
			period: 'May 2023 - Aug 2023',
			highlights: 'Optimized InsightsAI(a tool that models topics and sorts comments) for the federal e-Rule Program through natural language processing and developed an algorithm that determined situationally where to employ keyword analysis or InsightsAI, improving accuracy of the tool from 88% to 93%',
        },
	];

	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto pl-2 md:pl-4 pr-6 md:pr-8 z-10">
				<div className="text-center mb-8">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Experience
					</h2>
				</div>

				<div className="max-w-2xl mx-auto space-y-6">
					{experiences.map((exp, index) => (
						<div
							key={exp.company}
							className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
						>
							<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div className="relative z-10">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
									<h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
										{exp.role}
									</h3>
									<span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{exp.period}</span>
								</div>
								<p className="text-lg text-gray-300 mb-3 group-hover:text-gray-200 transition-colors duration-300">{exp.company}</p>
								<p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: highlightNumbers(exp.highlights) }}></p>
							</div>

							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>

							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
