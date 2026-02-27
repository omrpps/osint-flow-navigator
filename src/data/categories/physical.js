export const physical = {
    id: 'physical',
    name: 'Físico y Multimedia',
    icon: 'MapPin',
    description: 'Imágenes, Vuelos y Transporte',
    tools: [
        // Image Verification Tools
        { id: 'tineye', name: 'TinEye', url: 'https://tineye.com/', description: 'Búsqueda inversa de imágenes exacta.', usage: 'Ordena por "Oldest" para ver el origen.', category: 'images', free: true },
        { id: 'google_images', name: 'Google Images', url: 'https://images.google.com/', description: 'Búsqueda inversa visual.', usage: 'Sube foto o pega URL para encontrar similares.', category: 'images', free: true },
        { id: 'yandex_images', name: 'Yandex Images', url: 'https://yandex.com/images/', description: 'La mejor búsqueda inversa para rostros y lugares.', usage: 'Muy eficaz para personas y ubicaciones en Europa/Rusia.', category: 'images', free: true },
        { id: 'bing_images', name: 'Bing Visual Search', url: 'https://www.bing.com/visualsearch', description: 'Búsqueda visual de Microsoft.', usage: 'Permite recortar partes de la imagen para buscar detalles.', category: 'images', free: true },
        { id: 'exif_info', name: 'Exif Info', url: 'https://exif.tools/', description: 'Visor de metadatos EXIF en línea.', usage: 'Sube la imagen original para ver cámara y GPS.', category: 'images', free: true },
        { id: 'fotoforensics', name: 'FotoForensics', url: 'http://fotoforensics.com/', description: 'Análisis forense de manipulación de imágenes.', usage: 'Revisa el ELA para ver discrepancias de compresión.', category: 'images', free: true },

        // Air Transport Tools
        { id: 'flightradar24', name: 'Flightradar24', url: 'https://www.flightradar24.com/', description: 'El rastreador de vuelos más popular del mundo.', usage: 'Ideal para vuelos comerciales. Filtra por aerolínea.', category: 'transport', free: true },
        { id: 'adsbexchange', name: 'ADS-B Exchange', url: 'https://globe.adsbexchange.com/', description: 'Rastreo de vuelos SIN censura ni bloqueos.', usage: 'Úsalo para ver jets privados, militares o policiales.', category: 'transport', free: true },
        { id: 'flightaware', name: 'FlightAware', url: 'https://flightaware.com/', description: 'Rastreador líder en EE.UU. con predicción IA.', usage: 'Excelente para verificar retrasos y rutas en América.', category: 'transport', free: true },
        { id: 'radarbox', name: 'RadarBox', url: 'https://www.radarbox.com/', description: 'Alternativa sólida con buena cobertura global.', usage: 'Usa su modo "Spotter" para fotos de aviones.', category: 'transport', free: true },
        { id: 'opensky', name: 'OpenSky Network', url: 'https://opensky-network.org/', description: 'Red académica con datos históricos en bruto.', usage: 'Para análisis técnico y datos históricos profundos.', category: 'transport', free: true },
        { id: 'planefinder', name: 'Plane Finder', url: 'https://planefinder.net/', description: 'Rastreador con excelente interfaz visual.', usage: 'Su modo AR (móvil) identifica aviones sobre ti.', category: 'transport', free: true },

        // Sea Transport Tools
        { id: 'marinetraffic', name: 'MarineTraffic', url: 'https://www.marinetraffic.com/', description: 'Líder mundial en rastreo de buques AIS.', usage: 'Busca por nombre, IMO o MMSI. Ver fotos del barco.', category: 'transport', free: true },
        { id: 'vesselfinder', name: 'VesselFinder', url: 'https://www.vesselfinder.com/', description: 'Alternativa potente a MarineTraffic.', usage: 'A veces actualiza la posición antes que otros.', category: 'transport', free: true },

        // Geolocation Tools
        { id: 'suncalc', name: 'SunCalc', url: 'https://suncalc.org/', description: 'Movimiento del sol y sombras para hora/lugar.', usage: 'Usa "Shadow length" para verificar la hora.', category: 'physical', free: true },
        { id: 'google_earth', name: 'Google Earth Web', url: 'https://earth.google.com/web/', description: 'Visualización 3D del terreno.', usage: 'Compara el horizonte y edificios 3D.', category: 'physical', free: true },
        { id: 'dualmaps', name: 'DualMaps', url: 'https://www.dualmaps.com/', description: 'Vista sincronizada Mapa/Aérea/StreetView.', usage: 'Compara múltiples vistas a la vez.', category: 'physical', free: true },
        { id: 'mapillary', name: 'Mapillary', url: 'https://www.mapillary.com/', description: 'Alternativa colaborativa a Street View.', usage: 'Fotos a pie de calle donde Google no llega.', category: 'physical', free: true },
        { id: 'google_maps', name: 'Google Maps', url: 'https://www.google.com/maps', description: 'Mapas estándar y Street View.', category: 'physical', free: true },
        { id: 'overpass_turbo', name: 'Overpass Turbo', url: 'https://overpass-turbo.eu/', description: 'Consultas avanzadas a OpenStreetMap.', usage: 'Ej: encuentra todas las farmacias en una zona.', category: 'physical', free: true },
        { id: 'f4map', name: 'F4 Map', url: 'https://demo.f4map.com/', description: 'Visualización 3D interactiva de OpenStreetMap.', usage: 'Ideal para ver alturas de edificios y sombras.', category: 'physical', free: true },
        { id: 'wikimapia', name: 'Wikimapia', url: 'https://wikimapia.org/', description: 'Mapa colaborativo con descripciones de lugares.', usage: 'Información local detallada sobre instalaciones.', category: 'physical', free: true },
        { id: 'pic2map', name: 'Pic2Map', url: 'https://www.pic2map.com/', description: 'Visualiza fotos en el mapa usando EXIF.', usage: 'Sube fotos para ver dónde fueron tomadas.', category: 'physical', free: true },
        { id: 'shadowcalculator', name: 'ShadowCalculator', url: 'https://www.shadowcalculator.eu/', description: 'Calculadora de sombras alternativa.', usage: 'Verifica la hora y fecha basada en sombras.', category: 'physical', free: true },

        // Extra Utilities
        { id: 'live_atc', name: 'Live ATC', url: 'https://www.liveatc.net/', description: 'Escucha control de tráfico aéreo en vivo.', usage: 'Útil contextualizando incidentes en aeropuertos.', category: 'transport', free: true },
        { id: 'what3words', name: 'What3words', url: 'https://what3words.com/', description: 'Georreferenciación hiperprecisa por 3 palabras.', usage: 'Para ubicar localizaciones exactas de difícil acceso.', category: 'physical', free: true }
    ],
    flows: [
        {
            id: 'flow_images',
            name: 'Análisis de Imágenes',
            trigger_type: 'images',
            steps: [
                { step_id: 1, title: 'Búsqueda Inversa', description: 'Descubre dónde más aparece la imagen.', tools: ['tineye', 'google_images', 'yandex_images', 'bing_images'] },
                { step_id: 2, title: 'Análisis Forense', description: 'Examina metadatos y posibles manipulaciones.', tools: ['exif_info', 'fotoforensics', 'pic2map'] }
            ]
        },
        {
            id: 'flow_transport',
            name: 'Rastreo de Transporte',
            trigger_type: 'transport',
            steps: [
                {
                    step_id: 1,
                    title: 'Tráfico Aéreo Comercial',
                    description: 'Rastreo de vuelos regulares y comerciales.',
                    tools: ['flightradar24', 'flightaware', 'radarbox']
                },
                {
                    step_id: 2,
                    title: 'Vuelos Privados / Militares',
                    description: 'Rastreo sin censura de objetivos sensibles.',
                    tools: ['adsbexchange', 'opensky']
                },
                {
                    step_id: 3,
                    title: 'Tráfico Marítimo',
                    description: 'Localización de buques mercantes y privados.',
                    tools: ['marinetraffic', 'vesselfinder']
                }
            ]
        },
        {
            id: 'flow_geolocation',
            name: 'Geolocalización',
            trigger_type: 'geolocation',
            steps: [
                { step_id: 1, title: 'Observación del Terreno', description: 'Reconocimiento visual 3D y a pie de calle.', tools: ['google_earth', 'mapillary', 'google_maps', 'f4map'] },
                { step_id: 2, title: 'Análisis de Sombras', description: 'Cronolocalización: Determina la hora por las sombras.', tools: ['suncalc', 'shadowcalculator'] },
                { step_id: 3, title: 'Comparación Sincronizada', description: 'Verifica la ubicación con múltiples vistas.', tools: ['dualmaps'] },
                { step_id: 4, title: 'Contextualización', description: 'Información local y búsqueda de infraestructura.', tools: ['overpass_turbo', 'wikimapia'] }
            ]
        }
    ]
};
