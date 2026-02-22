import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Search, ExternalLink, Filter, Star } from 'lucide-react';
import useAppStore from '../stores/useStore';
import { cn } from '../lib/utils';

export default function ToolsPage() {
    const { tools, categories } = useAppStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredTools = tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Herramientas</h2>
                    <p className="text-muted-foreground">Catálogo completo de recursos OSINT clasificados.</p>
                </div>
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Buscar herramienta (ej: email, shodan, mapas)..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
                <Button
                    variant={activeCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory('all')}
                    className="whitespace-nowrap"
                >
                    Todas
                </Button>
                {categories.map(cat => (
                    <Button
                        key={cat.id}
                        variant={activeCategory === cat.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveCategory(cat.id)}
                        className="whitespace-nowrap gap-2"
                    >
                        {/* We could map icons here if we had the component map */}
                        {cat.name}
                    </Button>
                ))}
            </div>

            {/* Tools Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTools.map(tool => (
                    <Card key={tool.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg">{tool.name}</CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <Star className="h-4 w-4 text-muted-foreground hover:text-yellow-500" />
                                </Button>
                            </div>
                            <CardDescription className="line-clamp-2 min-h-[40px]">
                                {tool.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground font-medium">
                                    {categories.find(c => c.id === tool.category)?.name || tool.category}
                                </span>
                                {tool.opsec_level && (
                                    <span className={cn(
                                        "px-2 py-1 rounded-md font-medium border",
                                        tool.opsec_level.includes('Safe') ? "bg-green-500/10 text-green-600 border-green-200" :
                                            tool.opsec_level.includes('Risk') ? "bg-red-500/10 text-red-600 border-red-200" :
                                                "bg-yellow-500/10 text-yellow-600 border-yellow-200"
                                    )}>
                                        {tool.opsec_level}
                                    </span>
                                )}
                                {!tool.free && (
                                    <span className="bg-blue-500/10 text-blue-600 border border-blue-200 px-2 py-1 rounded-md">
                                        $ Pago
                                    </span>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                            <Button className="w-full gap-2" variant="outline" onClick={() => window.open(tool.url, '_blank')}>
                                Visitar <ExternalLink className="h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredTools.length === 0 && (
                <div className="text-center py-20 bg-muted/20 rounded-lg">
                    <Filter className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No se encontraron herramientas</h3>
                    <p className="text-muted-foreground">Prueba con otros términos de búsqueda o cambia la categoría.</p>
                    <Button variant="link" onClick={() => { setSearchQuery(''); setActiveCategory('all') }}>
                        Limpiar filtros
                    </Button>
                </div>
            )}
        </div>
    );
}
