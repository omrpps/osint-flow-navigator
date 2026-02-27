import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Archive, Shield, Hash, FileText, Download, Upload, ExternalLink, Network } from 'lucide-react';

export default function EvidencePage() {
    const [archiveUrl, setArchiveUrl] = useState('');

    // Hash state
    const [fileHash, setFileHash] = useState('');
    const [isHashing, setIsHashing] = useState(false);
    const [fileName, setFileName] = useState('');

    // Report state
    const [reportData, setReportData] = useState({
        objective: '',
        url: '',
        date: new Date().toISOString().split('T')[0],
        hash: '',
        notes: ''
    });

    const handleArchive = (service) => {
        if (!archiveUrl) return;
        let url = '';
        switch (service) {
            case 'wayback':
                url = `https://web.archive.org/save/${archiveUrl}`;
                break;
            case 'archiveToday':
                url = `https://archive.today/?run=1&url=${archiveUrl}`;
                break;
            case 'ghost':
                url = `https://ghostarchive.org/archive?url=${archiveUrl}`;
                break;
            default:
                break;
        }
        if (url) window.open(url, '_blank');
    };

    const calculateHash = async (file) => {
        setIsHashing(true);
        setFileName(file.name);
        setFileHash('');

        try {
            const buffer = await file.arrayBuffer();
            const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            setFileHash(hashHex);
            setReportData(prev => ({ ...prev, hash: hashHex }));
        } catch (error) {
            console.error('Error calculando hash:', error);
            setFileHash('Error al calcular el hash');
        } finally {
            setIsHashing(false);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            calculateHash(e.target.files[0]);
        }
    };

    const handleDownloadReport = () => {
        const reportContent = `
=========================================
REPORTE DE EVIDENCIA OSINT
=========================================
Fecha de Generación: ${new Date().toLocaleString()}

1. INFORMACIÓN DEL OBJETIVO
-----------------------------------------
Objetivo/Caso: ${reportData.objective}
URL Principal: ${reportData.url}
Fecha de Adquisición: ${reportData.date}

2. INTEGRIDAD DE LA EVIDENCIA (CADENA DE CUSTODIA)
-----------------------------------------
Hash SHA-256 del archivo capturado:
${reportData.hash || 'N/A'}

3. NOTAS DEL INVESTIGADOR
-----------------------------------------
${reportData.notes}
=========================================
Generado por: FlujoOsint (Procesamiento Local)
=========================================
        `.trim();

        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Reporte_Evidencia_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Preservación de Evidencias</h2>
                <p className="text-muted-foreground">Herramientas locales para la captura, hashing y documentación (OPSEC Friendly).</p>
            </div>
            <Card className="bg-muted/30 border-primary/20">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Guía de Recomendaciones para Captura Legal/Pericial
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2 text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Aislamiento (OPSEC):</strong> Utiliza siempre una máquina virtual (VM) o entorno aislado antes de interactuar con contenido sospechoso.</li>
                        <li><strong>Contexto Visual:</strong> Siempre que sea posible, captura la pantalla completa asegurándote de que la URL y la hora del sistema sean visibles.</li>
                        <li><strong>Preservación Pública:</strong> Archiva la URL original en Wayback Machine o Archive.today para tener una copia externa e inmutable respaldada por terceros.</li>
                        <li><strong>Cadena de Custodia:</strong> Descarga el archivo (como HTML con SingleFile o de vídeo con yt-dlp), genera aquí su <strong>Hash SHA-256</strong> y documenta en el reporte inferior. Nunca abras ni edites la muestra original.</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">

                {/* 1. Archivado Rápido */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Archive className="h-5 w-5 text-blue-500" />
                            Archivado Multipunto
                        </CardTitle>
                        <CardDescription>
                            Envía una URL a múltiples servicios de preservación pública simultáneamente.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">URL de la Evidencia</label>
                            <Input
                                placeholder="https://ejemplo.com/tweet-sospechoso"
                                value={archiveUrl}
                                onChange={(e) => setArchiveUrl(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <Button variant="outline" className="w-full text-xs" onClick={() => handleArchive('wayback')}>
                                <Network className="w-3 h-3 mr-1" /> Wayback
                            </Button>
                            <Button variant="outline" className="w-full text-xs" onClick={() => handleArchive('archiveToday')}>
                                <Archive className="w-3 h-3 mr-1" /> Archive.today
                            </Button>
                            <Button variant="outline" className="w-full text-xs" onClick={() => handleArchive('ghost')}>
                                <Shield className="w-3 h-3 mr-1" /> GhostArchive
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-muted/30 pt-4 text-xs text-muted-foreground border-t">
                        Se abrirán nuevas pestañas. Tu IP será visible para estos servicios.
                    </CardFooter>
                </Card>

                {/* 2. Calculadora de Hash Local */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Hash className="h-5 w-5 text-green-500" />
                            Calculadora de Hash SHA-256 Local
                        </CardTitle>
                        <CardDescription>
                            Calcula la huella digital del archivo. 100% privado en tu navegador. El archivo NO se sube a internet.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1">
                        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-accent/50 transition-colors relative">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                                {isHashing ? 'Calculando hash...' : 'Arrastra un archivo o haz clic aquí'}
                            </p>
                            {fileName && <p className="text-xs text-foreground mt-2 font-medium break-all">{fileName}</p>}
                        </div>
                        {fileHash && (
                            <div className="p-3 bg-muted rounded-md border text-sm break-all font-mono">
                                <span className="font-semibold text-xs uppercase text-green-600 mb-1 block">SHA-256 Hash:</span>
                                {fileHash}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* 3. Generador de Reporte */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-500" />
                            Generador de Ficha de Evidencia
                        </CardTitle>
                        <CardDescription>
                            Documenta tu hallazgo para mantener la cadena de custodia. Genera un archivo local TXT.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Objetivo / Título</label>
                                <Input
                                    placeholder="Ej: Video protestas plaza central"
                                    value={reportData.objective}
                                    onChange={(e) => setReportData({ ...reportData, objective: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Fecha de Adquisición</label>
                                <Input
                                    type="date"
                                    value={reportData.date}
                                    onChange={(e) => setReportData({ ...reportData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">URL de Origen</label>
                                <Input
                                    placeholder="https://..."
                                    value={reportData.url}
                                    onChange={(e) => setReportData({ ...reportData, url: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Hash de la Descarga (Copiado automático)</label>
                                <Input
                                    placeholder="Hash SHA-256"
                                    className="font-mono text-xs"
                                    value={reportData.hash}
                                    onChange={(e) => setReportData({ ...reportData, hash: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Notas</label>
                                <textarea
                                    className="w-full min-h-[100px] p-3 rounded-md border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Detalles sobre quién publicó, contexto, o peculiaridades."
                                    value={reportData.notes}
                                    onChange={(e) => setReportData({ ...reportData, notes: e.target.value })}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-end">
                        <Button onClick={handleDownloadReport} className="gap-2">
                            <Download className="h-4 w-4" />
                            Descargar Reporte (TXT)
                        </Button>
                    </CardFooter>
                </Card>

            </div>

            {/* 4. Caja de Herramientas Recomendadas */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 pl-1">Extensiones de Captura Recomendadas</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex justify-between items-start">
                                SingleFile
                                <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2" onClick={() => window.open('https://github.com/gildas-lormeau/SingleFile', '_blank')}>
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Guarda una página web completa (con imágenes y estilos) en un solo archivo HTML local interactivo. Esencial.
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex justify-between items-start">
                                GoFullPage
                                <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2" onClick={() => window.open('https://gofullpage.com/', '_blank')}>
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Toma una captura de pantalla de la página entera (hace scroll automático) y la guarda como PNG o PDF.
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex justify-between items-start">
                                yt-dlp
                                <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2" onClick={() => window.open('https://github.com/yt-dlp/yt-dlp', '_blank')}>
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Herramienta de consola líder para descargar vídeos de casi cualquier plataforma sin pérdida de calidad.
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div>
    );
}
