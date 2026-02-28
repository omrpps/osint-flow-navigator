export const username = {
    id: 'username',
    name: 'Username',
    icon: 'User',
    description: 'Rastreo de alias en múltiples plataformas',
    tools: [
        { id: 'sherlock', name: 'Sherlock (GitHub)', url: 'https://github.com/sherlock-project/sherlock', description: 'Herramienta CLI para buscar usuarios en +300 sitios.', usage: 'Requiere CLI. Búsqueda rápida masiva.', category: 'username', payment_tier: 'free' },
        { id: 'whatsmyname', name: 'WhatsMyName', url: 'https://whatsmyname.app/', description: 'Motor de búsqueda de usernames rápido y efectivo.', usage: 'Opción web excelente para primer escaneo.', category: 'username', payment_tier: 'free' },
        { id: 'namechk', name: 'Namechk', url: 'https://namechk.com/', description: 'Verifica disponibilidad de usuario y dominio.', usage: 'Buen recurso visual de disponibilidades.', category: 'username', payment_tier: 'free' },
        { id: 'maigret', name: 'Maigret', url: 'https://github.com/soxoj/maigret', description: 'Búsqueda profunda en miles de sitios con generación de reporte.', usage: 'Genera árbol HTML y reportes detallados.', category: 'username', payment_tier: 'free' },
        { id: 'instantusername', name: 'InstantUsername', url: 'https://instantusername.com/', description: 'Búsqueda rápida en múltiples redes sociales.', usage: 'Busca el sufijo o apodo habitual del objetivo.', category: 'username', payment_tier: 'free' },
        { id: 'reddit_user_analyser', name: 'Reddit User Analyser', url: 'https://reddit-user-analyser.netlify.app/', description: 'Analiza la actividad y comportamiento de un usuario en Reddit.', usage: 'Extrae nube de palabras y horarios frecuentes.', category: 'username', payment_tier: 'free' },
        { id: 'redective', name: 'Redective', url: 'https://www.redective.com/', description: 'Explora el historial de búsqueda y actividad en Reddit.', usage: 'Lista cruda de comentarios y threads.', category: 'username', payment_tier: 'free' },
        { id: 'socialblade', name: 'SocialBlade', url: 'https://socialblade.com/', description: 'Estadísticas detalladas de YouTube, Twitch, Instagram, Twitter.', usage: 'Auditoría de borrado de tweets y likes.', category: 'username', payment_tier: 'freemium' },
        { id: 'google_dork_username', name: 'Google Dork (Username)', url: 'https://www.google.com/', description: 'Búsqueda manual del usuario entre comillas.', usage: 'Intext:"username" OR intitle:"username"', category: 'username', payment_tier: 'free' }
    ],
    flows: [
        {
            id: 'flow_username_master',
            name: 'Investigación Maestra de Username',
            trigger_type: 'username',
            steps: [
                {
                    step_id: 1,
                    title: 'Búsqueda Multi-Plataforma',
                    description: 'Rastrea el alias en cientos de sitios web para encontrar perfiles.',
                    tools: ['whatsmyname', 'namechk', 'sherlock', 'maigret', 'instantusername']
                },
                {
                    step_id: 2,
                    title: 'Análisis de Actividad',
                    description: 'Estadísticas y patrones de uso en redes específicas.',
                    tools: ['google_dork_username', 'reddit_user_analyser', 'redective', 'socialblade']
                }
            ]
        }
    ]
};
