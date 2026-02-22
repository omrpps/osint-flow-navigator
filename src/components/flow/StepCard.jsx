import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';
import useAppStore from '../../stores/useStore';

export function StepCard({ step, onNext, onPrev, isLast, currentStepIndex, totalSteps }) {
    return (
        <Card className="w-full max-w-3xl mx-auto border-2 border-primary/10 shadow-lg">
            <CardHeader className="bg-muted/30 pb-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-2xl text-primary flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
                                {(currentStepIndex || 0) + 1}
                            </span>
                            {step.title}
                        </CardTitle>
                        <CardDescription className="text-base ml-10">
                            {step.description}
                        </CardDescription>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                        Paso {(currentStepIndex || 0) + 1} de {totalSteps}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    {step.tools.map((toolId) => {
                        const tool = useAppStore.getState().tools.find(t => t.id === toolId);

                        if (!tool) return null;

                        return (
                            <div key={toolId} className="flex flex-col p-4 rounded-md border bg-card hover:border-primary/50 transition-colors group h-full">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-medium flex items-center gap-2 text-lg">
                                        {tool.name}
                                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    </h4>
                                    <Button size="sm" variant="secondary" className="h-8" onClick={() => window.open(tool.url, '_blank')}>
                                        Abrir
                                    </Button>
                                </div>

                                <p className="text-sm text-muted-foreground flex-grow">
                                    {tool.description}
                                </p>

                                {tool.usage && (
                                    <div className="mt-3 p-2 bg-muted/50 rounded text-xs font-mono text-muted-foreground border border-dashed border-muted-foreground/30">
                                        <strong>Uso:</strong> {tool.usage}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 p-3 bg-yellow-500/10 text-yellow-600 rounded-md text-sm border border-yellow-500/20">
                    <AlertTriangle className="h-4 w-4" />
                    <span><strong>Tip:</strong> Documenta cada hallazgo antes de continuar al siguiente paso.</span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-muted/10 p-6">
                <Button variant="secondary" onClick={onPrev} disabled={currentStepIndex === 0}>
                    Anterior
                </Button>
                <div className="flex gap-2">

                    <Button onClick={onNext} className="gap-2">
                        {isLast ? (
                            <>
                                <CheckCircle className="h-4 w-4" /> Finalizar Caso
                            </>
                        ) : (
                            "Siguiente Paso"
                        )}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
