import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MermaidSetup from './MermaidSetup';
import RechartSetUp from './RechartSetUp';
import { downloadPdf } from '../services/api';

const markDownComponent = {
    h1: ({ children }) => (
        <h1 className="text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-xl font-semibold text-indigo-600 mt-5 mb-3">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            {children}
        </h3>
    ),
    p: ({ children }) => (
        <p className="text-gray-600 leading-relaxed mb-3">
            {children}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
            {children}
        </ul>
    ),
    li: ({ children }) => (
        <li className="marker:text-indigo-500">{children}</li>
    ),
}

function FinalResult({ result }) {
    const [quickRevision, setQuickRevision] = useState(false);

    if (!result || !result.subTopics || !result.questions || !result.revisionPoints) {
        return null;
    }

    return (
        <div className="mt-10 px-4 md:px-10 max-w-5xl mx-auto space-y-10">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    📘 Generated Notes
                </h2>

                <div className="flex gap-3 flex-wrap">
                    <button
                        onClick={() => setQuickRevision(!quickRevision)}
                        className={`
                        px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                        shadow-sm hover:shadow-md
                        ${quickRevision
                                ? "bg-green-600 text-white"
                                : "bg-green-100 text-green-700 hover:bg-green-200"}
                        `}
                    >
                        {quickRevision ? "Exit Revision Mode" : "Quick Revision"}
                    </button>

                    <button
                        onClick={() => downloadPdf(result)}
                        className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all"
                    >
                        ⬇️ Download PDF
                    </button>
                </div>
            </div>

            {/* SUBTOPICS */}
            {!quickRevision && (
                <Card>
                    <SectionHeader icon="⭐" title="Sub Topics" color="indigo" />

                    {Object.entries(result.subTopics).map(([star, topics]) => (
                        <div key={star} className="mb-4">
                            <p className="font-semibold text-indigo-600 mb-1">
                                {star} Priority
                            </p>
                            <ul className="list-disc ml-6 text-gray-600">
                                {topics.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Card>
            )}

            {/* NOTES */}
            {!quickRevision && (
                <Card>
                    <SectionHeader icon="📝" title="Detailed Notes" color="purple" />
                    <ReactMarkdown components={markDownComponent}>
                        {result.notes}
                    </ReactMarkdown>
                </Card>
            )}

            {/* QUICK REVISION */}
            {quickRevision && (
                <div className="rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 p-6 shadow-sm">
                    <h3 className="font-bold text-green-700 mb-3 text-lg">
                        ⚡ Quick Revision
                    </h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        {result.revisionPoints.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* DIAGRAM */}
            {result.diagram?.data && (
                <Card>
                    <SectionHeader icon="📊" title="Diagram" color="cyan" />
                    <MermaidSetup diagram={result.diagram?.data} />
                </Card>
            )}

            {/* CHARTS */}
            {result.charts?.length > 0 && (
                <Card>
                    <SectionHeader icon="📈" title="Visual Charts" color="indigo" />
                    <RechartSetUp charts={result.charts} />
                </Card>
            )}

            {/* QUESTIONS */}
            <Card>
                <SectionHeader icon="❓" title="Important Questions" color="rose" />

                <p className="font-semibold">Short Questions:</p>
                <ul className="list-disc ml-6 text-gray-600">
                    {result.questions.short.map((q, i) => (
                        <li key={i}>{q}</li>
                    ))}
                </ul>

                <p className="font-semibold mt-4">Long Questions:</p>
                <ul className="list-disc ml-6 text-gray-600">
                    {result.questions.long.map((q, i) => (
                        <li key={i}>{q}</li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}

function Card({ children }) {
    return (
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            {children}
        </div>
    )
}

function SectionHeader({ icon, title, color }) {
    const colors = {
        indigo: "from-indigo-100 to-indigo-50 text-indigo-700",
        purple: "from-purple-100 to-purple-50 text-purple-700",
        cyan: "from-cyan-100 to-cyan-50 text-cyan-700",
        rose: "from-rose-100 to-rose-50 text-rose-700",
    };

    return (
        <div className={`mb-5 px-4 py-2 rounded-lg bg-gradient-to-r ${colors[color]} font-semibold flex items-center gap-2`}>
            <span>{icon}</span>
            <span>{title}</span>
        </div>
    )
}

export default FinalResult