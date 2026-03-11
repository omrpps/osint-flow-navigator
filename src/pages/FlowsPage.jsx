
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../stores/useStore';
import { Mail, Smartphone, User, Globe, Image, Users, Building, Bitcoin, Shield, Phone, ArrowRight, Plane, Ship, Map, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { Badge } from '../components/ui/badge';

// Helper to map icon names to components
const IconMap = {
    Mail, Smartphone, Phone, User, Globe, Image, Users, Building, Bitcoin, Shield, Plane, Ship, Map, BookOpen
};

export default function FlowsPage() {
    const { flows, startFlow } = useAppStore();
    const navigate = useNavigate();

    const handleStartFlow = (flowId) => {
        startFlow(flowId);
        navigate(`/investigation/${flowId}`);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Galería de Flujos</h2>
                <p className="text-muted-foreground">Selecciona un flujo de investigación guiado para comenzar.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {flows.map((flow) => {
                    const IconComponent = IconMap[flow.icon] || Shield;

                    return (
                        <Card key={flow.id} className="flex flex-col hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className={cn(
                                        "p-2 rounded-lg bg-primary/10 text-primary",
                                        "w-fit"
                                    )}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                        {flow.steps.length} Pasos
                                    </span>
                                </div>
                                <CardTitle className="mt-4">{flow.name}</CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {flow.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">Herramientas clave:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {flow.steps.flatMap(s => s.tools).slice(0, 4).map(toolId => (
                                            <span key={toolId} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                                                {toolId}
                                            </span>
                                        ))}
                                        {flow.steps.flatMap(s => s.tools).length > 4 && (
                                            <span className="text-xs text-muted-foreground px-1 py-0.5">
                                                +{flow.steps.flatMap(s => s.tools).length - 4} más
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full gap-2" onClick={() => handleStartFlow(flow.id)}>
                                    Iniciar Investigación <ArrowRight className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
