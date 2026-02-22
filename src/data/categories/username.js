export const username = {
    id: 'username',
    name: 'Username',
    icon: 'User',
    description: 'Rastreo de alias en múltiples plataformas',
    tools: [
        { id: 'sherlock', name: 'Sherlock (GitHub)', url: 'https://github.com/sherlock-project/sherlock', description: 'Herramienta CLI para buscar usuarios en +300 sitios.', category: 'username', free: true },
        { id: 'whatsmyname', name: 'WhatsMyName', url: 'https://whatsmyname.app/', description: 'Motor de búsqueda de usernames muy rápido y efectivo.', category: 'username', free: true },
        { id: 'namechk', name: 'Namechk', url: 'https://namechk.com/', description: 'Verifica disponibilidad de usuario y dominio.', category: 'username', free: true },
        { id: 'maigret', name: 'Maigret', url: 'https://github.com/soxoj/maigret', description: 'Búsqueda profunda en miles de sitios con generación de reporte.', category: 'username', free: true },
        { id: 'instantusername', name: 'InstantUsername', url: 'https://instantusername.com/', description: 'Búsqueda rápida en múltiples redes sociales.', category: 'username', free: true },
        { id: 'reddit_user_analyser', name: 'Reddit User Analyser', url: 'https://reddit-user-analyser.netlify.app/', description: 'Analiza la actividad y comportamiento de un usuario en Reddit.', category: 'username', free: true },
        { id: 'redective', name: 'Redective', url: 'https://www.redective.com/', description: 'Explora el historial de búsqueda y actividad en Reddit.', category: 'username', free: true },
        { id: 'socialblade', name: 'SocialBlade', url: 'https://socialblade.com/', description: 'Estadísticas detalladas de YouTube, Twitch, Instagram, Twitter.', category: 'username', free: true },
        { id: 'google_dork_username', name: 'Google Dork (Username)', url: 'https://www.google.com/', description: 'Búsqueda manual del usuario entre comillas.', category: 'username', free: true }
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
