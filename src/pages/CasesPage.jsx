import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Trash2, FolderOpen, Clock } from 'lucide-react';
import useAppStore from '../stores/useStore';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../components/ui/badge';

export default function CasesPage() {
    const { cases, loadCase, deleteCase } = useAppStore();
    const navigate = useNavigate();

    const handleLoad = (caseId) => {
        loadCase(caseId);
        const caseData = cases.find(c => c.id === caseId);
        if (caseData) {
            navigate(`/investigation/${caseData.flowId}`);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Casos Guardados</h2>
                <p className="text-muted-foreground">Historial de tus investigaciones activas y archivadas.</p>
            </div>

            {cases.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed rounded-lg">
                    <FolderOpen className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No hay casos guardados</h3>
                    <p className="text-muted-foreground">Inicia una investigación y pulsa "Guardar" para verla aquí.</p>
                    <Button className="mt-4" onClick={() => navigate('/flows')}>
                        Iniciar Nuevo Caso
                    </Button>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {cases.map((c) => (
                        <Card key={c.id}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{c.name}</CardTitle>
                                        <CardDescription className="flex items-center gap-1 mt-1">
                                            <Clock className="h-3 w-3" />
                                            {new Date(c.date).toLocaleDateString()}
                                        </CardDescription>
                                    </div>
                                    <Badge variant="outline">{c.inputType || 'Manual'}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {c.notes || "Sin notas registradas..."}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="destructive" size="icon" onClick={() => deleteCase(c.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                                <Button onClick={() => handleLoad(c.id)}>
                                    Continuar
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
