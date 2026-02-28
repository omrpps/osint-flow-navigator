import React, { useState } from 'react';
import { Search, Menu, Bot, AlertTriangle } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import useAppStore from '../../stores/useStore';
import { detectInputType } from '../../lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';

export function Header({ onMenuClick }) {
    const { inputData, inputType, setInputData } = useAppStore();
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);

    // Enlace a tu Gem
    const GEM_URL = "https://gemini.google.com/gem/1QN42XXNFFlY3A52TNT6rho_h0vAqv9k7?usp=sharing";

    const handleInputChange = (e) => {
        const value = e.target.value;
        const type = detectInputType(value);
        setInputData(value, value ? type : null);
    };

    const handleOpenGem = () => {
        setIsAssistantOpen(false);
        window.open(GEM_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <header className="flex h-14 items-center justify-between border-b bg-background px-4 md:px-6">
            <div className="flex flex-1 items-center gap-2 md:gap-4">
                <Button variant="ghost" size="icon" className="md:hidden shrink-0" onClick={onMenuClick}>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle mobile menu</span>
                </Button>
                <div className="relative w-full max-w-xl">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Introduce un dato (email, IP, username, teléfono)..."
                        className="w-full pl-9 bg-muted/50 focus:bg-background transition-colors"
                        value={inputData}
                        onChange={handleInputChange}
                    />
                    {inputType && inputData && (
                        <div className="absolute right-2.5 top-2.5 text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                            DETECTADO: {inputType.toUpperCase()}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    onClick={() => setIsAssistantOpen(true)}
                    variant="outline"
                    className="gap-2 border-primary/20 hover:border-primary/50 text-primary hover:text-primary transition-colors"
                >
                    <Bot className="h-4 w-4" />
                    <span className="hidden sm:inline">IA Asistente</span>
                </Button>
            </div>

            <Dialog open={isAssistantOpen} onOpenChange={setIsAssistantOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-destructive">
                            <AlertTriangle className="h-5 w-5" />
                            Advertencia de Seguridad (OPSEC)
                        </DialogTitle>
                        <DialogDescription className="pt-3 pb-2 text-base">
                            Vas a ser redirigido a una IA Externa (Gemini). Por favor, mantén una estricta <strong>Seguridad Operacional</strong>.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                            <li>No subas datos personales (PII) reales sin censurar.</li>
                            <li>Sustituye nombres reales por alias (ej. "Sujeto A") al consultar casos.</li>
                            <li>No expongas información crítica de investigaciones en curso.</li>
                        </ul>
                    </div>

                    <DialogFooter className="mt-6 flex gap-2 sm:gap-0">
                        <Button variant="outline" onClick={() => setIsAssistantOpen(false)}>
                            Cancelar
                        </Button>
                        <Button onClick={handleOpenGem} className="gap-2">
                            <Bot className="h-4 w-4" />
                            Entendido, abrir Asistente
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </header>
    );
}
