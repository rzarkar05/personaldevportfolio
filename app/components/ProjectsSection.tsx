'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="space-y-16">
          {/* Redfin AI App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Redfin AI App</h3>
                    <p className="text-gray-400">
                      Web application that finds investment properties by scraping Redfin to gather critical information about the
                      property, estimating repair costs, and using natural language processing with VADER sentiment analysis to assess a
                      home’s value/potential and sort results for the user.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Next.js with Tailwind</li>
                        <li>• Dynamic property search &amp; filtering</li>
                        <li>• Mobile-friendly dashboard</li>
                        <li>• Interactive sentiment &amp; score visualizations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• ChromeDriver/Puppeteer scraping pipelines</li>
                        <li>• NLP &amp; VADER sentiment analysis (FastAPI service)</li>
                        <li>• PostgreSQL + Redis cache</li>
                        <li>• Repair-cost estimation (rules + ML)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Reduced manual search time significantly</li>
                      <li>• Under 3000ms average API response time</li>
                      <li>• Sentiment scoring aligned with expert analysis data 89%</li>
                    </ul>
                  </div>
                </div>

                {/* System Architecture with Data Flow (Redfin) */}
                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>

                  <div className="bg-black/50 rounded-lg p-4 relative">
                    {/* External source tag */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] text-gray-400 bg-white/5 border border-gray-600 rounded-md px-2 py-0.5">
                        External: Redfin
                      </span>
                    </div>

                    <svg className="w-full h-[380px]" viewBox="0 0 400 380">
                      {/* Frontend */}
                      <rect x="50" y="20" width="300" height="35" rx="4" className="fill-blue-500/20 stroke-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="42" textAnchor="middle" className="fill-gray-300 text-[11px] pointer-events-none">Next.js Frontend (SSR + Client) • Auth • Tailwind</text>

                      {/* API Layer */}
                      <rect x="20" y="80" width="110" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="75" y="102" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">API Gateway</text>

                      <rect x="145" y="80" width="110" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="102" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Orchestrator</text>

                      <rect x="270" y="80" width="110" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="325" y="102" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Rate Limit</text>

                      {/* Queue */}
                      <rect x="50" y="140" width="300" height="35" rx="4" className="fill-amber-500/20 stroke-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="162" textAnchor="middle" className="fill-gray-300 text-[11px] pointer-events-none">Task Queue (Redis Streams / RabbitMQ) • Retries</text>

                      {/* Worker Services */}
                      <rect x="20" y="200" width="110" height="35" rx="4" className="fill-emerald-500/20 stroke-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="75" y="222" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Scraper Service</text>

                      <rect x="145" y="200" width="110" height="35" rx="4" className="fill-emerald-500/20 stroke-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="222" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">NLP Service</text>

                      <rect x="270" y="200" width="110" height="35" rx="4" className="fill-emerald-500/20 stroke-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="325" y="222" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Repair Estimator</text>

                      {/* Cache */}
                      <rect x="50" y="260" width="300" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="282" textAnchor="middle" className="fill-gray-300 text-[11px] pointer-events-none">Redis Cache (searches, listings, features)</text>

                      {/* Storage */}
                      <rect x="20" y="320" width="110" height="35" rx="4" className="fill-blue-500/20 stroke-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="75" y="342" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Property DB</text>

                      <rect x="145" y="320" width="110" height="35" rx="4" className="fill-cyan-500/20 stroke-cyan-500 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="342" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Search Index</text>

                      <rect x="270" y="320" width="110" height="35" rx="4" className="fill-fuchsia-500/20 stroke-fuchsia-500 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="325" y="342" textAnchor="middle" className="fill-gray-300 text-[10px]">Object Storage</text>

                      {/* Data Flow Arrows */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" className="fill-gray-500" />
                        </marker>
                      </defs>

                      {/* Frontend to API */}
                      <line x1="200" y1="55" x2="200" y2="80" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />

                      {/* API to Queue */}
                      <line x1="200" y1="115" x2="200" y2="140" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />

                      {/* Queue to Workers */}
                      <line x1="150" y1="175" x2="75" y2="200" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <line x1="200" y1="175" x2="200" y2="200" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <line x1="250" y1="175" x2="325" y2="200" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />

                      {/* Workers to Cache */}
                      <line x1="75" y1="235" x2="150" y2="260" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <line x1="200" y1="235" x2="200" y2="260" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <line x1="325" y1="235" x2="250" y2="260" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />

                      {/* Cache to Storage */}
                      <line x1="150" y1="295" x2="75" y2="320" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <line x1="200" y1="295" x2="200" y2="320" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <line x1="250" y1="295" x2="325" y2="320" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deep Learning Pneumonia Detector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Deep Learning Pneumonia Detector</h3>
                    <p className="text-gray-400">
                      Built an end-to-end medical imaging pipeline using AWS SageMaker for training and tuning a CNN+GRU (RNN)
                      classifier, then deployed a real-time inference endpoint behind API Gateway and Lambda. The app accepts chest X-ray
                      uploads, returns a prediction with confidence and Grad-CAM overlay, and stores user/study metadata in MongoDB for a
                      React/Next.js frontend. Achieved 84% test accuracy.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• React/Next.js UI with Tailwind</li>
                        <li>• Drag-and-drop X-ray upload (PNG/DICOM)</li>
                        <li>• Prediction, confidence &amp; Grad-CAM heatmap</li>
                        <li>• Study history, auth, role-based access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• SageMaker training jobs + HPO</li>
                        <li>• CNN + GRU classifier (SageMaker endpoint)</li>
                        <li>• API Gateway → Lambda (pre/post) → Inference</li>
                        <li>• S3 datasets &amp; artifacts • CloudWatch logs</li>
                        <li>• MongoDB (users, studies, predictions)</li>
                        <li>• IAM-scoped roles; optional ECR containers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• 84% test-set accuracy after HPO on SageMaker</li>
                      <li>• Automated train→deploy via pipelines</li>
                      <li>• Real-time inference with autoscaling endpoint</li>
                      <li>• Explainability via Grad-CAM overlays</li>
                    </ul>
                  </div>
                </div>

                {/* System Architecture (Pneumonia) – mirrors Redfin layout */}
                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>

                  <div className="bg-black/50 rounded-lg p-4 relative">
                    

                    <svg className="w-full h-[380px]" viewBox="0 0 400 380">
                      {/* Frontend */}
                      <rect x="50" y="20" width="300" height="35" rx="4" className="fill-blue-500/20 stroke-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="42" textAnchor="middle" className="fill-gray-300 text-[11px] pointer-events-none">Next.js Frontend (Uploads + Auth)</text>

                      {/* API / Control */}
                      <rect x="20" y="80" width="110" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="75" y="102" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">API Gateway</text>

                      <rect x="145" y="80" width="110" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="102" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Lambda (pre/post)</text>

                      <rect x="270" y="80" width="110" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="325" y="102" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Auth / RBAC</text>

                      {/* Queue */}
                      <rect x="50" y="140" width="300" height="35" rx="4" className="fill-amber-500/20 stroke-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="162" textAnchor="middle" className="fill-gray-300 text-[11px] pointer-events-none">SQS Queue (async jobs • retries)</text>

                      {/* Worker Services */}
                      <rect x="20" y="200" width="110" height="35" rx="4" className="fill-emerald-500/20 stroke-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="75" y="222" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">SageMaker HPO/Train</text>

                      <rect x="145" y="200" width="110" height="35" rx="4" className="fill-emerald-500/20 stroke-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="222" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">SageMaker Endpoint</text>

                      <rect x="270" y="200" width="110" height="35" rx="4" className="fill-emerald-500/20 stroke-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="325" y="222" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">Grad-CAM Service</text>

                      {/* Cache */}
                      <rect x="50" y="260" width="300" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="282" textAnchor="middle" className="fill-gray-300 text-[11px] pointer-events-none">Redis Cache (sessions, recent preds)</text>

                      {/* Storage */}
                      <rect x="20" y="320" width="110" height="35" rx="4" className="fill-blue-500/20 stroke-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="75" y="342" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">S3 (data, models)</text>

                      <rect x="145" y="320" width="110" height="35" rx="4" className="fill-cyan-500/20 stroke-cyan-500 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="200" y="342" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">MongoDB (studies)</text>

                      <rect x="270" y="320" width="110" height="35" rx="4" className="fill-amber-500/20 stroke-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-pointer" strokeWidth="1" />
                      <text x="325" y="342" textAnchor="middle" className="fill-gray-300 text-[10px] pointer-events-none">CloudWatch Logs</text>

                      {/* Arrows */}
                      <defs>
                        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" className="fill-gray-500" />
                        </marker>
                      </defs>

                      {/* Frontend -> API */}
                      <line x1="200" y1="55" x2="200" y2="80" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      {/* API -> Queue */}
                      <line x1="200" y1="115" x2="200" y2="140" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      {/* Queue -> Workers */}
                      <line x1="150" y1="175" x2="75" y2="200" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      <line x1="200" y1="175" x2="200" y2="200" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      <line x1="250" y1="175" x2="325" y2="200" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      {/* Workers -> Cache */}
                      <line x1="75" y1="235" x2="150" y2="260" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      <line x1="200" y1="235" x2="200" y2="260" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      <line x1="325" y1="235" x2="250" y2="260" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      {/* Cache -> Storage */}
                      <line x1="150" y1="295" x2="75" y2="320" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      <line x1="200" y1="295" x2="200" y2="320" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                      <line x1="250" y1="295" x2="325" y2="320" className="stroke-gray-500" strokeWidth="1" markerEnd="url(#arrowhead2)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
