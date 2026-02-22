// Decision tree for the Verification Guide
export const guideData = {
    questions: {
        start: {
            text: "¿Qué tipo de evidencia necesitas verificar?",
            options: [
                { label: "Imagen / Foto", nextId: "image_type" },
                { label: "Vídeo", nextId: "video_type" },
                { label: "Noticia / Enlace Web", nextId: "news_type" },
                { label: "Perfil de Red Social", nextId: "social_type" }
            ]
        },
        // --- IMAGES ---
        image_type: {
            text: "¿Qué buscas descubrir sobre esta imagen?",
            options: [
                { label: "Saber si fue manipulada o generada artificialmente (IA)", nextId: "image_fake" },
                { label: "Encontrar dónde más se publicó (Búsqueda Inversa)", nextId: "image_reverse" },
                { label: "Extraer detalles ocultos (Metadatos/EXIF)", nextId: "image_metadata" },
                { label: "Saber dónde se tomó (Geolocalización)", nextId: "image_geo" }
            ]
        },
        // --- VIDEOS ---
        video_type: {
            text: "¿Qué información intentas sacar del vídeo?",
            options: [
                { label: "Buscar si el vídeo es antiguo o reciclado de otro contexto", nextId: "video_reverse" },
                { label: "Verificar si es un Deepfake o IA", nextId: "video_fake" },
                { label: "Descargarlo para analizarlo frame a frame", nextId: "video_download" }
            ]
        },
        // --- NEWS / WEB ---
        news_type: {
            text: "¿Qué situación presenta esta noticia o enlace?",
            options: [
                { label: "Quiero comprobar si ya ha sido desmentida por fact-checkers", nextId: "news_factcheck" },
                { label: "La página web fue borrada o modificada y quiero ver el original", nextId: "news_archive" },
                { label: "Es un enlace sospechoso y quiero ver si es seguro o captura su IP", nextId: "news_infra" }
            ]
        },
        // --- SOCIAL ---
        social_type: {
            text: "¿De qué plataforma es el perfil que estás investigando?",
            options: [
                { label: "X (Twitter)", nextId: "social_twitter" },
                { label: "Facebook / Instagram", nextId: "social_meta" },
                { label: "Telegram", nextId: "social_telegram" },
                { label: "Cualquiera (Búsqueda de Alias universal)", nextId: "social_username" }
            ]
        }
    },

    results: {
        // IMAGE RESULTS
        image_fake: {
            title: "Detección de Manipulación e IA en Imágenes",
            description: "Utiliza estas herramientas para analizar el nivel de error y probabilidades de IA generativa.",
            tools: ['hive_ai', 'aiornot', 'fotoforensics_fc', 'izitru']
        },
        image_reverse: {
            title: "Búsqueda Inversa de Imágenes",
            description: "Sube tu foto a estos buscadores para ver en qué sitios web ha aparecido previamente.",
            tools: ['google_lens', 'yandex_images', 'tineye', 'reveye']
        },
        image_metadata: {
            title: "Análisis de Metadatos (EXIF)",
            description: "Recuerda usar la *imagen original* (las redes sociales como WhatsApp o X borran los metadatos al subir).",
            tools: ['metapicz', 'jeffreys_exif', 'metadata2go', 'exiftool']
        },
        image_geo: {
            title: "Geolocalización por Imagen",
            description: "Además de la búsqueda inversa con Yandex, puedes analizar sombras térmicas y mapas 3D.",
            tools: ['yandex_images', 'google_earth', 'suncalc', 'pic2map']
        },

        // VIDEO RESULTS
        video_reverse: {
            title: "Búsqueda Inversa de Vídeo",
            description: "La mejor técnica es fragmentar el vídeo en imágenes estáticas (keyframes) y buscar esas fotos.",
            tools: ['invid', 'youtube_dataviewer']
        },
        video_fake: {
            title: "Detección de Deepfakes",
            description: "Analiza posibles manipulaciones de rostros o de clonación de voz.",
            tools: ['deepware', 'elevenlabs_classifier']
        },
        video_download: {
            title: "Descarga y Análisis Frame a Frame",
            description: "Herramientas para bajar el contenido offline y pasarlo por lupas forenses cuadro por cuadro.",
            tools: ['deturl', 'watch_frame_by_frame', 'dl_twitter_videos']
        },

        // NEWS RESULTS
        news_factcheck: {
            title: "Agencias de Verificación (Fact-checkers)",
            description: "Antes de investigar por tu cuenta, comprueba las bases de datos de bulos ya desmentidos.",
            tools: ['maldita', 'newtral', 'verificat', 'efeverifica']
        },
        news_archive: {
            title: "Archivos y Preservación Web",
            description: "Busca copias en caché o congela el enlace actual para que no se pierda la evidencia.",
            tools: ['archive_today', 'wayback_machine', 'ghostarchive', 'singlefile']
        },
        news_infra: {
            title: "Análisis de Enlaces (Infraestructura)",
            description: "Verifica si el enlace es seguro, captura la pantalla sin entrar e investiga quién lo aloja.",
            tools: ['urlscan', 'scanurl', 'whois_domain']
        },

        // SOCIAL RESULTS
        social_twitter: {
            title: "Investigación en X (Twitter)",
            description: "Busca tuits antiguos geolocalizados o verifica si la cuenta se comporta como un Bot.",
            tools: ['twitter_advanced', 'botometer', 'tweetbeaver', 'twxplorer']
        },
        social_meta: {
            title: "Investigación en Meta (FB/IG)",
            description: "Visualiza de forma anónima, busca por ubicación o descarga perfiles enteros.",
            tools: ['fb_search_tool', 'peoplefindthor', 'imginn', 'instaloader']
        },
        social_telegram: {
            title: "Investigación en Telegram",
            description: "Busca alias previos, mapea IDs fijos y localiza mensajes dentro de grandes canales.",
            tools: ['sangmata', 'userinfobot', 'lyzem', 'tgstat']
        },
        social_username: {
            title: "Búsqueda Unificada de Alias (Username)",
            description: "Si tienes su nombre de usuario, verifica en qué otras plataformas de internet tiene cuenta.",
            tools: ['sherlock', 'whatsmyname', 'maigret']
        }
    }
};
