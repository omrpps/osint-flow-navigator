import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import useAppStore from '../../stores/useStore';
import { detectInputType } from '../../lib/utils';

export function Header({ onMenuClick }) {
    const { inputData, inputType, setInputData } = useAppStore();

    const handleInputChange = (e) => {
        const value = e.target.value;
        const type = detectInputType(value);
        setInputData(value, value ? type : null);
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

        </header>
    );
}
