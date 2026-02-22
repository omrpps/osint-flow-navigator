export const email = {
    id: 'email',
    name: 'Email',
    icon: 'Mail',
    description: 'Verificación, fugas y perfiles vinculados',
    tools: [
        { id: 'emailhippo', name: 'EmailHippo', url: 'https://tools.emailhippo.com/', description: 'Verificación gratuita de direcciones de email.', category: 'email', free: true },
        { id: 'emailchecker', name: 'Email-checker.net', url: 'https://email-checker.net/', description: 'Verifica si una dirección de correo es válida.', category: 'email', free: true },
        { id: 'kickbox', name: 'Kickbox', url: 'https://kickbox.com/', description: 'Servicio de verificación de email con API.', category: 'email', free: false },
        { id: 'holehe', name: 'Holehe (GitHub)', url: 'https://github.com/megadose/holehe', description: 'Comprueba en qué servicios está registrado un email.', category: 'email', free: true },
        { id: 'ghunt', name: 'GHunt (GitHub)', url: 'https://github.com/mxrch/GHunt', description: 'Extrae información de cuentas de Google/Gmail.', category: 'email', free: true },
        { id: 'predictasearch', name: 'Predicta Search', url: 'https://predictasearch.com/', description: 'Motor de búsqueda de personas por email.', category: 'email', free: false },
        { id: 'dehashed', name: 'DeHashed', url: 'https://dehashed.com/', description: 'Buscador de filtraciones con datos detallados.', category: 'email', free: false },
        { id: 'intelx', name: 'IntelX', url: 'https://intelx.io/', description: 'Motor de búsqueda con datos de filtraciones.', category: 'email', free: true },
        { id: 'leakcheck', name: 'LeakCheck', url: 'https://leakcheck.io/', description: 'Busca emails en bases de datos filtradas.', category: 'email', free: true },
        { id: 'google_dork', name: 'Google Dork', url: 'https://www.google.com/', description: 'Busca el email entre comillas en Google.', category: 'email', free: true },
        { id: 'spokeo', name: 'Spokeo', url: 'https://www.spokeo.com/', description: 'Buscador de personas por email o teléfono.', category: 'email', free: false },
        { id: 'thatsthem', name: 'That\'sThem', url: 'https://thatsthem.com/', description: 'Información pública asociada a un email.', category: 'email', free: true },
        { id: 'whois', name: 'Whois', url: 'https://who.is/', description: 'Datos de registro de un dominio.', category: 'email', free: true },
        { id: 'viewdns', name: 'ViewDNS', url: 'https://viewdns.info/', description: 'Herramientas DNS: reverse IP, historial, whois.', category: 'email', free: true },
        { id: 'securitytrails', name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'Datos históricos de DNS y subdominios.', category: 'email', free: true },
        { id: 'hunter', name: 'Hunter.io', url: 'https://hunter.io/', description: 'Encuentra todos los emails de un dominio.', category: 'email', free: false },
        { id: 'haveibeenpwned', name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Verifica si un correo ha sido comprometido en brechas de datos.', category: 'email', free: true },
        { id: 'epieos', name: 'Epieos', url: 'https://epieos.com/', description: 'Busca cuentas de Google asociadas al correo y reseñas en Maps.', category: 'email', free: true },
        { id: 'whatsmyname', name: 'WhatsMyName', url: 'https://whatsmyname.app/', description: 'Busca nombres de usuario en cientos de sitios web.', category: 'email', free: true }
    ],
    flows: [
        {
            id: 'flow_email_master',
            name: 'Investigación Maestra de Email',
            trigger_type: 'email',
            steps: [
                {
                    step_id: 1,
                    title: 'Verificar Existencia',
                    description: 'Confirma si la dirección de correo es válida y real.',
                    tools: ['hunter', 'emailhippo', 'emailchecker', 'kickbox']
                },
                {
                    step_id: 2,
                    title: 'Cuentas Vinculadas',
                    description: 'Descubre en qué servicios está registrado el email.',
                    tools: ['holehe', 'epieos', 'whatsmyname', 'ghunt', 'predictasearch']
                },
                {
                    step_id: 3,
                    title: 'Filtraciones de Datos',
                    description: 'Busca el email en bases de datos hackeadas.',
                    tools: ['haveibeenpwned', 'dehashed', 'intelx', 'leakcheck']
                },
                {
                    step_id: 4,
                    title: 'Presencia Online',
                    description: 'Búsqueda en redes sociales y motores de búsqueda.',
                    tools: ['google_dork', 'epieos', 'spokeo', 'thatsthem']
                },
                {
                    step_id: 5,
                    title: 'Investigación de Dominio',
                    description: 'Analiza el dominio del correo si es corporativo o propio.',
                    tools: ['hunter', 'whois', 'viewdns', 'securitytrails']
                }
            ]
        }
    ]
};
