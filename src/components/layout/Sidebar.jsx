import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Zap, FolderOpen, Settings, Shield, CheckCircle, UserCheck, Archive, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Search, label: 'Herramientas', to: '/tools' },
    { icon: BookOpen, label: 'Casos de Estudio', to: '/investigation/flow_training' },
    { icon: FolderOpen, label: 'Casos Guardados', to: '/cases' },
    { icon: Zap, label: 'Flujos', to: '/flows' },
    { icon: CheckCircle, label: 'Asistente Check', to: '/verification-guide' },
    { icon: UserCheck, label: 'Asistente OPSEC', to: '/opsec-guide' },
    { icon: Archive, label: 'Evidencias', to: '/evidence' },
    { icon: Shield, label: 'Security in a Box', to: '/security' },
];

export function Sidebar({ className = "hidden md:flex", onNavigate }) {
    return (
        <div className={cn("flex h-screen w-64 flex-col border-r bg-card text-card-foreground", className)}>
            <div className="flex h-14 items-center border-b px-4 shrink-0">
                <span className="font-bold text-lg tracking-tight flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    OSINT <span className="text-primary">Navigator</span>
                </span>
            </div>
            <nav aria-label="Navegación principal" className="flex-1 space-y-1 p-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                            )
                        }
                    >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            <div className="border-t p-2">
                <NavLink
                    to="/settings"
                    onClick={onNavigate}
                    className={({ isActive }) =>
                        cn(
                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                            isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )
                    }
                >
                    <Settings className="h-4 w-4" />
                    Configuración
                </NavLink>
            </div>
        </div>
    );
}
