import React, { useState } from 'react';
import { guideData } from '../data/guide_data';
import {
    CheckCircle2,
    ChevronRight,
    RefreshCcw,
    ArrowLeft,
    ExternalLink,
    HelpCircle
} from 'lucide-react';
import { social } from '../data/categories/social';
import { physical } from '../data/categories/physical';
import { factcheck } from '../data/categories/factcheck';
import { ip_domain } from '../data/categories/ip_domain';
import { opsec } from '../data/categories/opsec';
import { email } from '../data/categories/email';
import { phone } from '../data/categories/phone';
import { username } from '../data/categories/username';

// Combine all tools to search full DB
const allCategories = [social, physical, factcheck, ip_domain, opsec, email, phone, username];
const allTools = allCategories.flatMap(cat => cat.tools || []);

export default function VerificationGuidePage() {
    const [history, setHistory] = useState(['start']);
    const [currentStepId, setCurrentStepId] = useState('start');

    // Check if the current id is a question or a final result
    const isResult = !!guideData.results[currentStepId];
    const currentNode = isResult
        ? guideData.results[currentStepId]
        : guideData.questions[currentStepId];

    const handleOptionSelect = (nextId) => {
        setHistory(prev => [...prev, nextId]);
        setCurrentStepId(nextId);
    };

    const handleBack = () => {
        if (history.length > 1) {
            const newHistory = [...history];
            newHistory.pop(); // remove current
            setHistory(newHistory);
            setCurrentStepId(newHistory[newHistory.length - 1]);
        }
    };

    const handleReset = () => {
        setHistory(['start']);
        setCurrentStepId('start');
    };

    // Helper to fetch full tool data from ID
    const getToolDetails = (toolId) => {
        return allTools.find(t => t.id === toolId) || null;
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <header className="flex h-14 items-center justify-between border-b bg-muted/40 px-6 shrink-0">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h1 className="text-lg font-semibold">Asistente de Verificación</h1>
                </div>
                {history.length > 1 && (
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <RefreshCcw className="h-4 w-4" />
                        Reiniciar
                    </button>
                )}
            </header>

            <main className="flex-1 overflow-auto p-6 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-2xl mx-auto">

                    {/* Visual Progress/Header */}
                    <div className="mb-6 text-center space-y-3 relative">
                        {/* Step Badge */}
                        <div className="flex justify-center mb-4">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                                Paso {history.length}
                            </span>
                        </div>

                        {!isResult ? (
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-2">
                                <HelpCircle className="h-8 w-8 text-primary" />
                            </div>
                        ) : (
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-2">
                                <CheckCircle2 className="h-8 w-8 text-green-500" />
                            </div>
                        )}
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                            {isResult ? currentNode.title : currentNode.text}
                        </h2>
                        {isResult && (
                            <p className="text-muted-foreground max-w-lg mx-auto">
                                {currentNode.description}
                            </p>
                        )}
                    </div>

                    <div className="bg-card border rounded-xl shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* QUESTIONS PATH */}
                        {!isResult && (
                            <div className="divide-y">
                                {currentNode.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(option.nextId)}
                                        className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors text-left group"
                                    >
                                        <span className="font-medium">{option.label}</span>
                                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* RESULTS PATH */}
                        {isResult && (
                            <div className="p-2">
                                <ul className="divide-y bg-background rounded-lg border m-4">
                                    {currentNode.tools.map((toolId) => {
                                        const tool = getToolDetails(toolId);
                                        if (!tool) return null;

                                        return (
                                            <li key={tool.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                                                <div>
                                                    <h4 className="font-semibold text-base flex items-center gap-2">
                                                        {tool.name}
                                                        {!tool.free && (
                                                            <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded-sm">Premium</span>
                                                        )}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                                                    {tool.usage && (
                                                        <p className="text-xs text-primary/80 mt-2 bg-primary/5 p-2 rounded inline-block border border-primary/10">
                                                            💡 Tip: {tool.usage}
                                                        </p>
                                                    )}
                                                </div>
                                                <a
                                                    href={tool.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="shrink-0 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                                                >
                                                    Abrir <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Footer Nav */}
                    <div className="mt-6 flex justify-between items-center px-2">
                        {history.length > 1 ? (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Atrás
                            </button>
                        ) : <div></div>}

                        <div className="text-xs text-muted-foreground hidden sm:block">
                            {/* Empty space to keep flex alignment */}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
