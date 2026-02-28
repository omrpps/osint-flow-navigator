export const factcheck = {
    id: 'factcheck',
    name: 'Verificación (Fact-Check)',
    icon: 'Eye',
    description: 'Detección de Fake News y Deepfakes',
    tools: [
        // Platforms ES
        { id: 'maldita', name: 'Maldita.es', url: 'https://maldita.es/', description: 'Referente en España: Bulo, Ciencia y Tecnología.', usage: 'Busca el titular de la noticia sospechosa.', category: 'factcheck', free: true },
        { id: 'newtral', name: 'Newtral', url: 'https://www.newtral.es/', description: 'Verificación política y social (Ana Pastor).', usage: 'Consulta su hemeroteca de desmentidos.', category: 'factcheck', free: true },
        { id: 'verificat', name: 'Verificat', url: 'https://www.verificat.cat/', description: 'Plataforma de verificación de Cataluña.', usage: 'Especializada en desinformación regional.', category: 'factcheck', free: true },
        { id: 'efeverifica', name: 'EFE Verifica', url: 'https://verifica.efe.com/', description: 'Servicio de verificación de la Agencia EFE.', usage: 'Confirma con fuentes oficiales internacionales.', category: 'factcheck', free: true },

        // Image Verification
        { id: 'google_lens', name: 'Google Lens', url: 'https://lens.google.com/', description: 'Búsqueda visual avanzada.', usage: 'Sube la foto para ver dónde más aparece.', category: 'factcheck', free: true },
        { id: 'reveye', name: 'RevEye (Extension)', url: 'https://chrome.google.com/webstore/detail/reveye-reverse-image-sear/keaaclcjhehbbapnphnmpiklalfhelgf', description: 'Busca en Google, Bing, Yandex y TinEye a la vez.', usage: 'Click derecho en cualquier imagen -> Search all.', category: 'factcheck', free: true },
        { id: 'fotoforensics_fc', name: 'FotoForensics', url: 'http://fotoforensics.com/', description: 'Análisis de nivel de error (ELA) para detectar edición.', usage: 'Busca zonas brillantes en el análisis ELA (editadas).', category: 'factcheck', free: true },
        { id: 'hive_ai', name: 'Hive AI Detector', url: 'https://hivemoderation.com/ai-generated-content-detection', description: 'Detecta imágenes generadas por IA (Midjourney, DALL-E).', usage: 'Sube la imagen para ver % de probabilidad IA.', category: 'factcheck', free: true },
        { id: 'aiornot', name: 'AI or Not', url: 'https://www.aiornot.com/', description: 'Detector rápido de imágenes sintéticas.', usage: 'Arrastra la imagen para un veredicto rápido.', category: 'factcheck', free: true },

        // Video & Audio
        { id: 'invid', name: 'InVID-WeVerify', url: 'https://chrome.google.com/webstore/detail/invid-weverify/lmbegcmkonokdjbhbamhpmkihpachdbk', description: 'Navaja suiza para verificación de vídeo (Keyframes).', usage: 'Extrae keyframes del vídeo y búscalos en Google.', category: 'factcheck', free: true },
        { id: 'deepware', name: 'Deepware Scanner', url: 'https://scanner.deepware.ai/', description: 'Escáner de vídeos para detectar Deepfakes.', usage: 'Pega la URL del vídeo sospechoso.', category: 'factcheck', free: true },
        { id: 'elevenlabs_classifier', name: 'AI Speech Classifier', url: 'https://elevenlabs.io/ai-speech-classifier', description: 'Intenta detectar voces clonadas por IA.', usage: 'Sube un clip de audio de al menos 1 minuto.', category: 'factcheck', free: true },
        { id: 'youtube_dataviewer', name: 'YouTube DataViewer', url: 'https://citizenevidence.amnestyusa.org/', description: 'Extrae metadatos y miniaturas de videos de YouTube.', usage: 'Pega la URL del video para ver hora exacta de subida.', category: 'factcheck', free: true },
        { id: 'diffchecker', name: 'Diffchecker', url: 'https://www.diffchecker.com/image-diff/', description: 'Compara dos imágenes para ver diferencias sutiles.', usage: 'Sube la imagen original y la sospechosa.', category: 'factcheck', free: true },

        // Metadata
        { id: 'metadata2go', name: 'Metadata2Go', url: 'https://www.metadata2go.com/', description: 'Visor y editor de metadatos online.', usage: 'Sube el archivo original (no de WhatsApp/redes).', category: 'factcheck', free: true },
        { id: 'exiftool', name: 'ExifTool', url: 'https://exiftool.org/', description: 'La herramienta más potente para metadatos (CLI).', usage: 'Comando: exiftool imagen.jpg', category: 'factcheck', payment_tier: 'free' },
        { id: 'findexif', name: 'FindExif.com', url: 'https://findexif.com/', description: 'Comprueba el origen de fotos por metadatos EXIF.', usage: 'Sube imagen o usa URL para GPS y fechas.', category: 'factcheck', payment_tier: 'free' },

        // Preservation / Archiving
        { id: 'archive_today', name: 'Archive.today', url: 'https://archive.today/', description: 'Guarda una copia exacta de una web.', usage: 'Eterniza la evidencia antes de que la borren.', category: 'factcheck', free: true },
        { id: 'wayback_machine', name: 'Wayback Machine', url: 'https://web.archive.org/', description: 'La biblioteca digital de internet.', usage: 'Busca versiones antiguas o guarda la actual.', category: 'factcheck', free: true },
        { id: 'ghostarchive', name: 'Ghost Archive', url: 'https://ghostarchive.org/', description: 'Alternativa robusta para archivar.', usage: 'Guarda instantáneas de sitios sin ejecutar scripts.', category: 'factcheck', free: true },
        { id: 'singlefile', name: 'SingleFile (Extension)', url: 'https://github.com/gildas-lormeau/SingleFile', description: 'Guarda una página completa como un solo archivo HTML.', usage: 'Ideal para guardar evidencia localmente con alta fidelidad.', category: 'factcheck', free: true },

        // Preservación cubierta en la tab principal

        // Global Factchecking
        { id: 'snopes', name: 'Snopes', url: 'https://www.snopes.com/', description: 'Referente global en desmentir leyendas y fake news.', usage: 'Busca mitos o noticias virales.', category: 'factcheck', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'politifact', name: 'PolitiFact', url: 'https://www.politifact.com/', description: 'Califica afirmaciones políticas estilo Truth-O-Meter.', usage: 'Verificación política EE.UU.', category: 'factcheck', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'factcheck_org', name: 'FactCheck.org', url: 'https://www.factcheck.org/', description: 'Proyecto de Annenberg de comprobación factual.', usage: 'Filtra declaraciones de EE.UU.', category: 'factcheck', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'google_factcheck', name: 'Google Fact Check Tools', url: 'https://toolbox.google.com/factcheck/explorer', description: 'Buscador de verificaciones de hechos por editores IFCN.', usage: 'Escribe la noticia y mira quién la ha verificado.', category: 'factcheck', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'duke_reporters', name: "Duke Reporters' Lab", url: 'https://reporterslab.org/fact-checking/', description: 'Base de datos mundial de sitios fact-checkers.', usage: 'Filtra por país/región en el mapamundi.', category: 'factcheck', payment_tier: 'free', opsec_level: 'Safe (Investigación)' }
    ],
    flows: [
        {
            id: 'flow_factcheck',
            name: 'Verificación de Fake News',
            trigger_type: 'factcheck',
            steps: [
                {
                    step_id: 1,
                    title: 'Consulta a Verificadores',
                    description: 'Busca si el bulo ya ha sido desmentido global o localmente.',
                    tools: ['google_factcheck', 'maldita', 'newtral', 'verificat', 'efeverifica', 'snopes', 'politifact', 'factcheck_org', 'duke_reporters']
                },
                {
                    step_id: 2,
                    title: 'Análisis de Imágenes',
                    description: 'Búsqueda inversa y detección de IA.',
                    tools: ['google_lens', 'reveye', 'hive_ai', 'aiornot', 'fotoforensics_fc']
                },
                {
                    step_id: 3,
                    title: 'Verificación de Vídeo',
                    description: 'Extrae fotogramas clave y analiza manipulación.',
                    tools: ['invid', 'deepware', 'youtube_dataviewer', 'diffchecker']
                },
                {
                    step_id: 4,
                    title: 'Metadatos',
                    description: 'Revisa cuándo y dónde se creó el archivo original.',
                    tools: ['metadata2go', 'exiftool', 'findexif']
                },
                {
                    step_id: 5,
                    title: 'Preservación de Evidencia',
                    description: 'Archiva la URL original para evitar su eliminación.',
                    tools: ['archive_today', 'wayback_machine', 'ghostarchive', 'singlefile']
                }
            ]
        }
    ]
};
