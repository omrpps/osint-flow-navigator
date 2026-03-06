import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { AlertCircle, Home } from 'lucide-react';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in fade-in duration-500">
            <div className="p-4 bg-destructive/10 rounded-full">
                <AlertCircle className="w-16 h-16 text-destructive" />
            </div>
            <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">404</h1>
                <h2 className="text-2xl font-semibold tracking-tight">Página o Flujo no encontrado</h2>
                <p className="text-muted-foreground max-w-[500px]">
                    El recurso que estás buscando no existe, ha sido movido, o el ID del flujo de investigación es incorrecto.
                </p>
            </div>
            <Button size="lg" className="mt-4 gap-2" onClick={() => navigate('/')}>
                <Home className="w-4 h-4" />
                Volver al Dashboard
            </Button>
        </div>
    );
}
