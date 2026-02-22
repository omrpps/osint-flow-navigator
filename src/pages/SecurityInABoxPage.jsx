import React, { useState } from 'react';
import { Shield, Smartphone, Key, Wifi, Globe, FileKey, ChevronDown, ChevronUp, AlertCircle, EyeOff, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SecurityInABoxPage() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id);
    };

    const securityTopics = [
        {
            id: 'assess',
            title: 'Evaluar y Planificar',
            icon: Shield,
            color: 'text-orange-500',
            bg: 'bg-orange-500/10',
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>Antes de implementar herramientas, analiza tus riesgos específicos.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Protege tus dispositivos:</strong> Mantén el control físico de tus equipos. Usa cifrado de disco completo para evitar que accedan a tus datos si te roban el equipo.</li>
                        <li><strong>Separa tus identidades:</strong> No vincules tus perfiles de investigación con tus cuentas personales. Usa navegadores o máquinas virtuales diferentes.</li>
                        <li><strong>Viajes seguros:</strong> Si cruzas fronteras con dispositivos, minimiza la información que llevas. Usa dispositivos "limpios" o almacena la información cifrada en la nube temporalmente.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'passwords',
            title: 'Tus Contraseñas',
            icon: Key,
            color: 'text-amber-500',
            bg: 'bg-amber-500/10',
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>La primera línea de defensa contra accesos no autorizados.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Crea contraseñas fuertes:</strong> Usa frases de contraseña (diceware) largas y únicas para cada servicio importante.</li>
                        <li><strong>Gestores de contraseñas:</strong> Utiliza herramientas como KeePassXC o Bitwarden para almacenar tus contraseñas de forma segura.</li>
                        <li><strong>Autenticación de Dos Factores (2FA):</strong> Activa 2FA (preferiblemente con apps como Aegis o FreeOTP, evitando SMS si es posible) en todas las cuentas vitales.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'communications',
            title: 'Tus Comunicaciones',
            icon: EyeOff,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>Maneja de forma segura las conversaciones con fuentes y colegas.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Redes Sociales:</strong> Revisa exhaustivamente las opciones de privacidad. Cuidado con los metadatos de las fotos que publicas.</li>
                        <li><strong>Mensajería Segura:</strong> Prioriza Signal para mensajería instantánea debido a su cifrado de extremo a extremo y mínima recolección de metadatos.</li>
                        <li><strong>Emails Seguros:</strong> Si requieres correos cifrados, usa ProtonMail o Tuta, o aprende a usar GPG/PGP para tus correos actuales.</li>
                        <li><strong>Recuperación de cuentas:</strong> Ten siempre un plan si sospechas que una cuenta fue comprometida (revoca accesos, cambia contraseñas, avisa a tus contactos).</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'devices',
            title: 'Tus Equipos (Móviles y PCs)',
            icon: Smartphone,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>Configuraciones de "hardening" para tus herramientas de trabajo.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Actualizaciones:</strong> Mantén tu sistema operativo y aplicaciones siempre actualizados (Aplica parches de seguridad al instante).</li>
                        <li><strong>Software contra Malware:</strong> Utiliza herramientas antimalware reconocidas y evita descargar software pirata o de fuentes no confiables.</li>
                        <li><strong>Minimiza la superficie de ataque:</strong> Desinstala aplicaciones que no usas. Desactiva Bluetooth y Wi-Fi cuando no los necesites.</li>
                        <li><strong>Privacidad de pantalla:</strong> Configura el bloqueo automático de pantalla rápido (ej. 1 minuto de inactividad) y no uses desbloqueos biométricos débiles.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'internet',
            title: 'Tu Conexión a Internet',
            icon: Globe,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>Protege los datos mientras viajan por la red y evade la censura.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Uso de VPNs:</strong> Encripta tu tráfico en redes públicas usando una VPN confiable (ej. ProtonVPN, Mullvad) para evitar interceptaciones locales, o tu propia infraestructura (WireGuard).</li>
                        <li><strong>Navegadores Seguros:</strong> Utiliza navegadores orientados a la privacidad como Tor Browser (para anonimato máximo) o Firefox/Brave con extensiones como uBlock Origin.</li>
                        <li><strong>Evasión de Censura:</strong> Si tu conexión está bloqueada, aprende a utilizar "Bridges" (puentes) en Tor o proxies especializados para evadir los controles del ISP o gobierno.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'files',
            title: 'Tus Archivos',
            icon: FileKey,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>Gestión segura de reportes, pruebas e investigaciones.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Cifrado (Encryption):</strong> Utiliza herramientas como VeraCrypt para crear contenedores cifrados donde guardar archivos ultrasecretos o USBs enteros.</li>
                        <li><strong>Respaldos (Backups):</strong> Aplica la regla 3-2-1: Tres copias, en dos soportes distintos, una de ellas en otra ubicación o en la nube (cifrada con Cryptomator u otro método).</li>
                        <li><strong>Destrucción Segura:</strong> Cuando elimines archivos en discos duros tradicionales, no basta con la papelera; utiliza herramientas de borrado seguro (shredding) para sobreescribir los datos y evitar su recuperación forense. Limpia también los metadatos antes de publicarlos (EXIF).</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="flex h-full flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
                <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <h1 className="text-lg font-semibold">Security in a Box</h1>
                </div>
            </header>

            <main className="flex-1 overflow-auto p-6 md:p-8">
                <div className="mx-auto max-w-4xl space-y-8">

                    <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 transform opacity-10">
                            <Shield className="h-full w-full text-primary" />
                        </div>
                        <div className="relative">
                            <h2 className="text-2xl font-bold tracking-tight mb-2">Procedimientos de Seguridad Integral</h2>
                            <p className="text-muted-foreground flex items-center gap-2 max-w-2xl">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                Esta guía es una adaptación de <a href="https://securityinabox.org/en/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Security in a Box</a> de Tactical Tech y Front Line Defenders. Aplica estos principios para proteger tus equipos, comunicaciones e investigaciones.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {securityTopics.map((topic) => (
                            <div
                                key={topic.id}
                                className={cn(
                                    "rounded-lg border bg-card transition-all duration-200 overflow-hidden",
                                    openSection === topic.id ? "ring-1 ring-primary/50 shadow-md" : "hover:border-primary/50"
                                )}
                            >
                                <button
                                    onClick={() => toggleSection(topic.id)}
                                    className="flex w-full items-center justify-between p-4 px-6 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", topic.bg)}>
                                            <topic.icon className={cn("h-5 w-5", topic.color)} />
                                        </div>
                                        <span className="font-semibold text-base">{topic.title}</span>
                                    </div>
                                    <div className="text-muted-foreground mr-2">
                                        {openSection === topic.id ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </div>
                                </button>

                                {openSection === topic.id && (
                                    <div className="border-t px-6 py-5 bg-muted/20 animate-in slide-in-from-top-2 duration-200">
                                        {topic.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
