export const email = {
    id: 'email',
    name: 'Email',
    icon: 'Mail',
    description: 'Verificación, fugas y perfiles vinculados',
    tools: [
        { id: 'emailrep', name: 'EmailRep (Bellingcat)', url: 'https://emailrep.io/', description: 'Comprueba la reputación de un correo electrónico y su actividad reciente.', usage: 'Introduce el email para evaluar su riesgo y ver si es de un dominio descartable, cuántas veces ha estado en filtraciones recientes o si ha sido visto antes de forma fiable.', category: 'email', payment_tier: 'free' },
        { id: 'emailhippo', name: 'EmailHippo', url: 'https://tools.emailhippo.com/', description: 'Verificación exhaustiva de direcciones de email (existencia y catch-all).', usage: 'Introduce el correo para ver si el servidor de recepción existe.', category: 'email', payment_tier: 'freemium' },
        { id: 'emailchecker', name: 'Email-checker.net', url: 'https://email-checker.net/', description: 'Verificación rápida por SMTP de la dirección de correo.', usage: 'Ideal para descartar emails falsos de manera inmediata.', category: 'email', payment_tier: 'free' },
        { id: 'kickbox', name: 'Kickbox', url: 'https://kickbox.com/', description: 'Servicio avanzado de comprobación de reputación de email.', usage: 'API de validación para entornos de producción.', category: 'email', payment_tier: 'paid' },
        { id: 'holehe', name: 'Holehe (GitHub)', url: 'https://github.com/megadose/holehe', description: 'Comprueba en qué servicios (Twitter, Github, etc) está registrado un email.', usage: 'Identifica cuentas sociales usando la recuperación de contraseña sin alertar.', category: 'email', payment_tier: 'free' },
        { id: 'ghunt', name: 'GHunt (GitHub)', url: 'https://github.com/mxrch/GHunt', description: 'Framework OSINT especializado para perfiles de Google y Gmail.', usage: 'Extrae nombres, reseñas, modelo de teléfono y servicios vinculados al Gmail.', category: 'email', payment_tier: 'free' },
        { id: 'dehashed', name: 'DeHashed', url: 'https://dehashed.com/', description: 'Motor de búsqueda forense de hashes y filtraciones.', usage: 'Introduce el email para ver en qué brechas de datos de terceros aparece.', category: 'email', payment_tier: 'paid' },
        { id: 'intelx_email', name: 'IntelX', url: 'https://intelx.io/', description: 'Poderoso motor de búsqueda con acceso profundo a datos de filtraciones web.', usage: 'Búsqueda de texto libre de direcciones email en repositorios subterráneos.', category: 'email', payment_tier: 'freemium' },
        { id: 'leakcheck', name: 'LeakCheck', url: 'https://leakcheck.io/', description: 'Busca cruces de emails en las bases de datos previamente expuestas.', usage: 'Comprueba fugas y si las contraseñas asociadas están comprometidas.', category: 'email', payment_tier: 'freemium' },
        { id: 'haveibeenpwned', name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Base de datos pública para verificar exposición de correos.', usage: 'El estándar de la industria para auditorías de compromisos.', category: 'email', payment_tier: 'free' },
        { id: 'epieos', name: 'Epieos', url: 'https://epieos.com/', description: 'Versión web para encontrar servicios y cuentas vinculadas, focus especial en Google.', usage: 'Encuentra servicios y reseñas del objetivo en Google Maps.', category: 'email', payment_tier: 'freemium' },
        { id: 'whatsmyname_email', name: 'WhatsMyName', url: 'https://whatsmyname.app/', description: 'Verificador de presencia online multifuente.', usage: 'Usa la primera parte del email para descubrir perfiles en +500 webs.', category: 'email', payment_tier: 'free' },
        { id: 'hunter', name: 'Hunter.io', url: 'https://hunter.io/', description: 'Mapea la estructura de correos de un dominio corporativo.', usage: 'Ideal para encontrar el formato de email (ej: nombre.apellido@empresa.com).', category: 'email', payment_tier: 'freemium' }
    ],
    flows: [
        {
            id: 'flow_email_master',
            name: 'Investigación Maestra de Email',
            trigger_type: 'email',
            steps: [
                {
                    step_id: 1,
                    title: 'Verificar Existencia y Formato',
                    description: 'Confirma si la dirección de correo es válida, real y cuál es el formato corporativo.',
                    tools: ['emailhippo', 'emailchecker', 'kickbox', 'hunter']
                },
                {
                    step_id: 2,
                    title: 'Perfiles e Identidades Vinculadas',
                    description: 'Descubre en qué plataformas está registrado el correo e investiga su perfil de Google.',
                    tools: ['holehe', 'epieos', 'whatsmyname_email', 'ghunt']
                },
                {
                    step_id: 3,
                    title: 'Búsqueda en Filtraciones (Breach Data)',
                    description: 'Localiza si la dirección aparece expuesta en grandes volcados de bases de datos.',
                    tools: ['haveibeenpwned', 'dehashed', 'intelx_email', 'leakcheck']
                }
            ]
        }
    ]
};
