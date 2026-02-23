import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export default function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-screen bg-background font-sans antialiased text-foreground">
            <Sidebar className="hidden md:flex" />

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    <div
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-sm border-r bg-card shadow-lg">
                        <Sidebar
                            className="flex w-full h-full"
                            onNavigate={() => setIsMobileMenuOpen(false)}
                        />
                    </div>
                </div>
            )}

            <div className="flex flex-1 flex-col overflow-hidden">
                <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
