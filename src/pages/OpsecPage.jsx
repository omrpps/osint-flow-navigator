import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Shield, Lock, Eye, CheckCircle, Smartphone, Wifi, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function OpsecPage() {
    const [checklist, setChecklist] = useState({
        vpn: false,
        vm: false,
        sockpuppet: false,
        browser: false,
        isolation: false
    });

    const toggleCheck = (key) => {
        setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const allChecked = Object.values(checklist).every(Boolean);

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <Shield className="h-10 w-10" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Guía de OPSEC</h1>
                <p className="text-xl text-muted-foreground">
                    Protocolos de seguridad operacional para investigaciones OSINT.
                </p>
            </div>

            {/* Checklist Interactiva */}
            <Card className={cn("border-2 transition-colors", allChecked ? "border-green-500/50 bg-green-500/5" : "border-primary/20")}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" /> Checklist Pre-Investigación
                    </CardTitle>
                    <CardDescription>Marca estos puntos antes de iniciar cualquier operación sensible.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <CheckItem
                        checked={checklist.vpn}
                        onChange={() => toggleCheck('vpn')}
                        icon={Wifi}
                        title="VPN Activa"
                        desc="Tu IP real debe estar oculta y tu tráfico encriptado."
                    />
                    <CheckItem
                        checked={checklist.vm}
                        onChange={() => toggleCheck('vm')}
                        icon={Lock}
                        title="Máquina Virtual"
                        desc="Aísla tu sistema operativo principal de malware potencial."
                    />
                    <CheckItem
                        checked={checklist.sockpuppet}
                        onChange={() => toggleCheck('sockpuppet')}
                        icon={Eye}
                        title="Cuenta Sock Puppet"
                        desc="Nunca uses tus cuentas personales para investigar objetivos."
                    />
                    <CheckItem
                        checked={checklist.browser}
                        onChange={() => toggleCheck('browser')}
                        icon={Globe}
                        title="Navegador Seguro"
                        desc="Usa Firefox endurecido o Tor Browser para minimizar huella."
                    />
                </CardContent>
            </Card>

            {/* Guía Detallada */}
            <div className="grid gap-6 md:grid-cols-3">
                <OpsecCard
                    title="Niveles de Identidad"
                    icon={Eye}
                    content="Define qué nivel de exposición es aceptable. Para reconocimiento pasivo, una VPN puede bastar. Para interacción activa, necesitas una identidad falsa (Sock Puppet) con meses de antigüedad."
                />
                <OpsecCard
                    title="Higiene Digital"
                    icon={Smartphone}
                    content="Borra metadatos de archivos antes de compartirlos. No mezcles contextos (ej: no revises tu Facebook personal en la misma sesión de navegador donde investigas)."
                />
                <OpsecCard
                    title="Contramedidas"
                    icon={Lock}
                    content="Asume que el objetivo te está vigilando. Si tocas una infraestructura (haces ping, escaneas puertos), dejas logs. Usa proxies rotativos si es necesario."
                />
            </div>
        </div>
    );
}

function CheckItem({ checked, onChange, icon: Icon, title, desc }) {
    return (
        <div
            className={cn(
                "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50",
                checked ? "border-green-500/30 bg-green-500/10" : "bg-card"
            )}
            onClick={onChange}
        >
            <div className={cn("mt-1 p-1 rounded-full border", checked ? "bg-green-500 border-green-500 text-white" : "border-muted-foreground")}>
                <Icon className="h-3 w-3 opacity-0" /> {/* Just placeholder size if unchecked, or use Check icon */}
                {checked && <CheckCircle className="h-3 w-3 absolute -m-1" style={{ opacity: 1 }} />}
            </div>
            <div>
                <h4 className={cn("font-medium text-sm", checked && "text-green-600 dark:text-green-400")}>{title}</h4>
                <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}

function OpsecCard({ title, icon: Icon, content }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {content}
                </p>
            </CardContent>
        </Card>
    )
}
