export const social = {
    id: 'social',
    name: 'Redes Sociales',
    icon: 'Users',
    description: 'Investigación profunda en Telegram, Instagram y X',
    tools: [
        // Telegram Search Engines
        { id: 'lyzem', name: 'Lyzem.com', url: 'https://lyzem.com/', description: 'Buscador de mensajes dentro de grupos/canales públicos.', usage: 'Busca keywords (ej: "filtracion") y filtra por mensajes.', category: 'social', payment_tier: 'free' },
        { id: 'tgstat', name: 'TGStat', url: 'https://tgstat.com/', description: 'Mayor catálogo de canales con analíticas detalladas.', usage: 'Analiza crecimiento y "engagement" de un canal.', category: 'social', payment_tier: 'free' },
        { id: 'telemetrio', name: 'Telemetr.io', url: 'https://telemetr.io/', description: 'Analíticas avanzadas y solapamiento de audiencias.', usage: 'Ideal para ver conexiones entre canales.', category: 'social', payment_tier: 'freemium' },
        { id: 'telegago', name: 'Telegago (Google)', url: 'https://cse.google.com/cse?cx=006368593537057042503:efxu7xprihg', description: 'Google Custom Search para Telegram.', usage: 'Búsqueda clásica tipo Google en Telegram.', category: 'social', payment_tier: 'free' },
        { id: 'xtea', name: 'Xtea.io', url: 'https://xtea.io/ts_en.html', description: 'Buscador simple y rápido de canales.', category: 'social', payment_tier: 'free' },

        // Telegram Bots
        { id: 'userinfobot', name: '@userinfobot', url: 'https://t.me/userinfobot', description: 'Obtiene el ID numérico permanente de un usuario.', usage: 'Reenvía un mensaje del objetivo al bot.', category: 'social', payment_tier: 'free' },
        { id: 'sangmata', name: '@SangMataInfo_bot', url: 'https://t.me/SangMataInfo_bot', description: 'Rastrea historial de cambios de nombre y username.', usage: 'Descubre alias antiguos reenviando un mensaje.', category: 'social', payment_tier: 'free' },
        { id: 'getidsbot', name: '@getidsbot', url: 'https://t.me/getidsbot', description: 'Obtiene IDs de usuarios, chats y canales.', category: 'social', payment_tier: 'free' },
        { id: 'archive_org_telegram', name: 'Archive.org (Telegram)', url: 'https://web.archive.org/', description: 'Búsqueda histórica de canales eliminados.', category: 'social', payment_tier: 'free' },

        // Instagram Tools
        { id: 'instagram_explorer', name: 'Instagram Location', url: 'https://www.instagram.com/explore/locations/', description: 'Búsqueda nativa por ubicación.', usage: 'Encuentra posts recientes en una zona.', category: 'social', payment_tier: 'free' },
        { id: 'solg', name: 'SolG', url: 'https://github.com/BullsEye0/solg', description: 'Herramienta para extraer información oculta.', category: 'social', payment_tier: 'free' },
        { id: 'instaloader', name: 'Instaloader', url: 'https://instaloader.github.io/', description: 'Descarga fotos y metadatos de perfiles.', usage: 'Script Python para backup completo.', category: 'social', payment_tier: 'free' },
        { id: 'imginn', name: 'IMGinn', url: 'https://imginn.org/', description: 'Visor anónimo de historias y posts.', usage: 'Ver stories sin dejar rastro.', category: 'social', payment_tier: 'free' },
        { id: 'pickuki', name: 'Pickuki', url: 'https://www.pickuki.com/', description: 'Editor y visor de Instagram sin cuenta.', category: 'social', payment_tier: 'free' },
        { id: 'snapinsta', name: 'SnapInsta', url: 'https://snapinsta.app/', description: 'Descargador de Reels, Stories y Fotos.', category: 'social', payment_tier: 'free' },

        // Twitter / X Tools
        { id: 'twitter_advanced', name: 'X Advanced Search', url: 'https://twitter.com/search-advanced', description: 'Búsqueda nativa con operadores booleanos.', usage: 'Usa filtros fecha: y lugar: para precisar.', category: 'social', payment_tier: 'free' },
        { id: 'hunintel', name: 'Hunintel', url: 'https://hunintel.io/', description: 'Búsqueda de tweets geolocalizados.', category: 'social', payment_tier: 'freemium' },
        { id: 'botometer', name: 'Botometer', url: 'https://botometer.osome.iu.edu/', description: 'Analiza si una cuenta es un bot.', usage: 'Chequea la probabilidad de automatización.', category: 'social', payment_tier: 'free' },
        { id: 'onemilliontweetmap', name: 'OneMillionTweetMap', url: 'https://onemilliontweetmap.com/', description: 'Mapa de calor de tweets en tiempo real.', category: 'social', payment_tier: 'freemium' },
        { id: 'socialblade_twitter', name: 'SocialBlade (X)', url: 'https://socialblade.com/twitter/', description: 'Estadísticas de crecimiento de seguidores.', category: 'social', payment_tier: 'freemium' },


    ],
    flows: [
        {
            id: 'flow_telegram',
            name: 'Investigación Telegram',
            trigger_type: 'telegram',
            steps: [
                {
                    step_id: 1,
                    title: 'Identificación de Usuario',
                    description: 'Obtén el ID permanente y rastrea cambios de nombre.',
                    tools: ['userinfobot', 'sangmata', 'getidsbot']
                },
                {
                    step_id: 2,
                    title: 'Búsqueda de Mensajes',
                    description: 'Busca contenido dentro de miles de grupos públicos.',
                    tools: ['lyzem', 'telegago', 'xtea']
                },
                {
                    step_id: 3,
                    title: 'Inteligencia de Canales',
                    description: 'Analiza la audiencia, crecimiento y relaciones.',
                    tools: ['tgstat', 'telemetrio']
                }
            ]
        },
        {
            id: 'flow_instagram',
            name: 'Investigación Instagram',
            trigger_type: 'instagram',
            steps: [
                { step_id: 1, title: 'Perfil Anónimo', description: 'Visualiza el perfil sin iniciar sesión (evita bloqueo).', tools: ['imginn', 'pickuki'] },
                { step_id: 2, title: 'Extracción de Datos', description: 'Descarga metadatos y contenido multimedia.', tools: ['instaloader', 'solg', 'snapinsta'] },
                { step_id: 3, title: 'Geolocalización', description: 'Busca fotos por ubicación cercana.', tools: ['instagram_explorer'] }
            ]
        },
        {
            id: 'flow_twitter',
            name: 'Investigación X (Twitter)',
            trigger_type: 'twitter',
            steps: [
                { step_id: 1, title: 'Búsqueda Avanzada', description: 'Utiliza operadores para filtrar tweets.', tools: ['twitter_advanced'] },
                { step_id: 2, title: 'Análisis de Cuenta', description: 'Detecta bots y revisa estadísticas.', tools: ['botometer', 'socialblade_twitter'] },
                { step_id: 3, title: 'Geolocalización', description: 'Ubica tweets en el mapa.', tools: ['hunintel', 'onemilliontweetmap'] }
            ]
        }
    ]
};
