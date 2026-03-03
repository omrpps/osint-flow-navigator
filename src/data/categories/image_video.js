export const image_video = {
    id: 'image_video',
    name: 'Imagen / Vídeo',
    icon: 'Image',
    description: 'Búsqueda inversa de imágenes, vídeos y análisis forense',
    tools: [
        { id: 'yandex_images', name: 'Yandex Images', url: 'https://yandex.com/images/', description: 'Motor de búsqueda ruso con excelente reconocimiento facial.', usage: 'Sube una imagen, especialmente útil para encontrar rostros o ubicaciones en Europa del Este y Rusia.', category: 'image_video', payment_tier: 'free' },
        { id: 'google_images', name: 'Google Images', url: 'https://images.google.com/', description: 'Búsqueda inversa de imágenes de Google (Google Lens).', usage: 'Sube una imagen o introduce su URL para encontrar similitudes visuales o lugares.', category: 'image_video', payment_tier: 'free' },
        { id: 'tineye', name: 'TinEye', url: 'https://tineye.com/', description: 'Buscador de imágenes inverso enfocado en coincidencias exactas.', usage: 'Ideal para encontrar la fuente original de una foto o ver sus primeras apariciones.', category: 'image_video', payment_tier: 'freemium' },
        { id: 'invid', name: 'InVID / WeVerify', url: 'https://www.invid-project.eu/tools-and-services/invid-verification-plugin/', description: 'Extensión y suite para verificar vídeos e imágenes de redes sociales.', usage: 'Fragmenta vídeos en keyframes para hacer búsqueda inversa o aplica lupa forense en imágenes.', category: 'image_video', payment_tier: 'free' },
        { id: 'youtube_dataviewer', name: 'YouTube DataViewer', url: 'https://citizenevidence.amnestyusa.org/', description: 'Herramienta de Amnistía Internacional para investigar vídeos de YouTube.', usage: 'Extrae miniaturas (thumbnails) para su búsqueda inversa y averigua la hora exacta de subida.', category: 'image_video', payment_tier: 'free' },
        { id: 'exifdata', name: "Jeffrey's Image Metadata Viewer", url: 'http://exif.regex.info/exif.cgi', description: 'Visor extremadamente detallado de metadatos EXIF.', usage: 'Sube tu archivo original para extraer información del dispositivo, fecha y posiblemente GPS.', category: 'image_video', payment_tier: 'free' }
    ],
    flows: [
        {
            id: 'flow_image_reverse',
            name: 'Análisis Inverso y Metadatos Visuales',
            trigger_type: 'image_video',
            steps: [
                {
                    step_id: 1,
                    title: 'Búsqueda Inversa',
                    description: 'Compara la imagen en diversos motores de búsqueda visual para hallar la fuente u otras apariciones.',
                    tools: ['yandex_images', 'google_images', 'tineye']
                },
                {
                    step_id: 2,
                    title: 'Verificación y Metadatos',
                    description: 'Fragmenta vídeos o estudia los metadatos ocultos del archivo original.',
                    tools: ['invid', 'youtube_dataviewer', 'exifdata']
                }
            ]
        }
    ]
};
