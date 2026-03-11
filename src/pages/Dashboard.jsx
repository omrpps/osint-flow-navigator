import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import {
    Mail, Smartphone, User, Globe, Image, Users, Building,
    Bitcoin, Shield, FileText, Search, ArrowRight, Plane,
    Ship, Lock, Eye, Ghost, MapPin, BookOpen
} from 'lucide-react';
import useAppStore from '../stores/useStore';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const QUICK_ACCESS_CONFIG = [
    // Identity
    { icon: Mail, label: 'Email', categoryId: 'email', color: 'text-blue-500', flowId: 'flow_email_master', desc: 'Verificar & Fugas' },
    { icon: Smartphone, label: 'Teléfono', categoryId: 'phone', color: 'text-green-500', flowId: 'flow_phone_master', desc: 'Identificar Propietario' },
    { icon: User, label: 'Username', categoryId: 'username', color: 'text-purple-500', flowId: 'flow_username_master', desc: 'Rastreo Social' },

    // Infrastructure
    { icon: Globe, label: 'IP / Dominio', categoryId: 'ip_domain', color: 'text-cyan-500', flowId: 'flow_ip_domain', desc: 'Whois & DNS' },

    // Social Specific
    { icon: Ghost, label: 'Telegram', categoryId: 'social', color: 'text-blue-400', flowId: 'flow_telegram', desc: 'Canales & Usuarios' },
    { icon: Image, label: 'Instagram', categoryId: 'social', color: 'text-pink-500', flowId: 'flow_instagram', desc: 'Perfiles & Ubicación' },
    { icon: Users, label: 'X (Twitter)', categoryId: 'social', color: 'text-sky-500', flowId: 'flow_twitter', desc: 'Tweets & Bots' },

    // Assets & Physical
    { icon: Bitcoin, label: 'Cripto', categoryId: 'assets', color: 'text-yellow-500', flowId: 'flow_crypto', desc: 'Rastreo Blockchain' },
    { icon: Building, label: 'Empresas', categoryId: 'physical', color: 'text-orange-500', flowId: 'flow_business', desc: 'Registros Oficiales' },
    { icon: Plane, label: 'Transporte', categoryId: 'physical', color: 'text-indigo-500', flowId: 'flow_transport', desc: 'Vuelos & Barcos' },
    { icon: MapPin, label: 'Geolocalización', categoryId: 'physical', color: 'text-green-500', flowId: 'flow_geolocation', desc: 'Mapas & Sombras' },
    { icon: Image, label: 'Imágenes', categoryId: 'image_video', color: 'text-rose-500', flowId: 'flow_images', desc: 'Búsqueda Inversa' },

    // Training & Resources
    { icon: BookOpen, label: 'Formación', categoryId: 'training', color: 'text-emerald-500', flowId: 'flow_training', desc: 'Casos Reales & Guías' },

    // Security
    { icon: Shield, label: 'OPSEC', categoryId: 'opsec', color: 'text-red-500', flowId: 'flow_opsec', desc: 'Entorno Seguro' },
];

export default function Dashboard() {
    const { setInputData, tools, flows } = useAppStore();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [stats, setStats] = useState({ tools: 0, flows: 0 });
    const [quickAccess, setQuickAccess] = useState(QUICK_ACCESS_CONFIG);

    useEffect(() => {
        const currentTools = useAppStore.getState().tools || [];
        setStats({
            tools: currentTools.length,
            flows: useAppStore.getState().flows?.length || 0
        });

        // Calculate dynamic counts for each category
        const updatedQuickAccess = QUICK_ACCESS_CONFIG.map(item => {
            // Some flowIds map directly to categories, others are specific flows.
            // A more generalized way is counting tools in the category
            const count = currentTools.filter(t => t.category === item.categoryId).length;
            // Provide a fallback if category mapping is imperfect
            return { ...item, count: count > 0 ? count : 5 };
        });

        setQuickAccess(updatedQuickAccess);
    }, []);

    const handleAnalyze = () => {
        if (!inputValue.trim()) return;

        let detectedType = 'username';
        const input = inputValue.trim();

        // Intelligent Detection Heuristics
        if (input.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            detectedType = 'email';
        } else if (input.match(/^(\+|00)?[1-9][0-9 \-\(\)]{7,32}$/)) {
            detectedType = 'phone';
        } else if (input.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
            detectedType = 'ip_domain'; // IP
        } else if (input.includes('.') && !input.includes(' ') && !input.startsWith('@')) {
            detectedType = 'ip_domain'; // Domain
        } else if (input.match(/^(bc1|[13])[a-zA-Z0-9]{25,39}$/)) {
            detectedType = 'crypto'; // BTC
        } else if (input.match(/^0x[a-fA-F0-9]{40}$/)) {
            detectedType = 'crypto'; // ETH
        } else if (input.match(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/)) {
            detectedType = 'geolocation'; // Coordinates (Basic regex)
        }

        setInputData(input, detectedType);

        const routeMap = {
            'email': '/investigation/flow_email_master',
            'phone': '/investigation/flow_phone_master',
            'username': '/investigation/flow_username_master',
            'ip_domain': '/investigation/flow_ip_domain',
            'crypto': '/investigation/flow_crypto',
            'geolocation': '/investigation/flow_geolocation'
        };

        navigate(routeMap[detectedType] || '/investigation/flow_username_master');
    };

    const handleCardClick = (item) => {
        // Direct navigation to specific flows
        const flowId = item.flowId;
        navigate(`/investigation/${flowId}`);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAnalyze();
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm text-popover-foreground shadow-sm">
                <div className="flex flex-col space-y-8 p-10 items-center text-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                            v2.0 System Online
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            OSINT Flow Navigator
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                            Inteligencia de Fuentes Abiertas Simplificada. Ingresa un dato y el sistema elegirá el mejor flujo de investigación.
                        </p>
                        <div className="text-xs font-mono text-muted-foreground/70">
                            Base de Datos: {stats.tools} Herramientas | {stats.flows} Flujos Activos
                        </div>
                    </div>

                    <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 relative group">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                aria-label="Buscar vector de ataque u objetivo"
                                placeholder="Ej: target@email.com, +34600..., 192.168.1.1, 0xWallet..."
                                className="pl-10 h-14 text-lg shadow-lg border-muted-foreground/20 focus-visible:ring-primary/50 w-full"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        <Button size="lg" aria-label="Ejecutar análisis del dato ingresado" className="h-14 w-full sm:w-auto px-8 shadow-lg text-lg font-semibold" onClick={handleAnalyze}>
                            Analizar <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Quick Access Grid */}
            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-primary" />
                        Explorar por Vector de Ataque
                    </h3>
                    <div className="flex items-center gap-2 p-3 bg-blue-500/10 text-blue-400 rounded-md text-sm border border-blue-500/20 max-w-fit">
                        <span className="font-semibold">Tip:</span>
                        Selecciona el vector que mejor se ajuste a tu caso para ver herramientas y flujos específicos.
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {quickAccess.map((item) => (
                        <Card
                            key={item.label}
                            role="button"
                            tabIndex={0}
                            className="group hover:bg-accent/50 transition-all cursor-pointer border-muted/40 shadow-sm hover:shadow-md hover:border-primary/50"
                            onClick={() => handleCardClick(item)}
                            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(item)}
                        >
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors">
                                    {item.label}
                                </CardTitle>
                                <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{item.count}</div>
                                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Special Section: OPSEC & Dark Web */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-gradient-to-br from-background to-red-950/10 border-red-900/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-red-500" />
                            Zona de Riesgo (OPSEC)
                        </CardTitle>
                        <CardDescription>Antes de investigar, asegura tu anonimato.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="destructive" className="w-full" onClick={() => navigate('/investigation/flow_opsec')}>
                            <Lock className="mr-2 h-4 w-4" /> Iniciar Protocolo Seguro
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-background to-purple-950/10 border-purple-900/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Eye className="h-5 w-5 text-purple-500" />
                            Verificación (Fact-Check)
                        </CardTitle>
                        <CardDescription>Desmontando Fake News y Deepfakes.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/10" onClick={() => navigate('/investigation/flow_factcheck')}>
                            <Search className="mr-2 h-4 w-4" /> Herramientas de Verificación
                        </Button>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-background to-slate-950/10 border-slate-900/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Ghost className="h-5 w-5 text-slate-500" />
                            Dark Web
                        </CardTitle>
                        <CardDescription>Búsqueda en Tor y directorios Onion.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full border-slate-500/50 hover:bg-slate-500/10" onClick={() => navigate('/investigation/flow_darkweb')}>
                            <Search className="mr-2 h-4 w-4" /> Investigar Dark Web
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
