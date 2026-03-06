import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAppStore from '../stores/useStore';
import { StepCard } from '../components/flow/StepCard';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function FlowViewer() {
    const { flowId } = useParams();
    const navigate = useNavigate();
    const { flows, activeFlow, startFlow, currentStepIndex, nextStep, prevStep } = useAppStore();

    useEffect(() => {
        if (flowId) {
            const flowExists = flows.some(f => f.id === flowId);
            if (!flowExists) {
                navigate('/404', { replace: true });
                return;
            }
            startFlow(flowId);
        }
    }, [flowId, startFlow, flows, navigate]);

    if (!activeFlow) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <p className="text-muted-foreground">Cargando flujo...</p>
                <Button onClick={() => navigate('/')}>Volver al Dashboard</Button>
            </div>
        );
    }

    const currentStep = activeFlow.steps[currentStepIndex];
    const isLast = currentStepIndex === activeFlow.steps.length - 1;

    const handleNext = () => {
        if (isLast) {
            navigate('/cases');
        } else {
            nextStep();
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{activeFlow.name}</h1>
                    <p className="text-muted-foreground">Seguimiento activo de investigación</p>
                </div>
            </div>

            <StepCard
                step={currentStep}
                onNext={handleNext}
                onPrev={prevStep}
                isLast={isLast}
                currentStepIndex={currentStepIndex}
                totalSteps={activeFlow.steps.length}
            />
        </div>
    );
}
