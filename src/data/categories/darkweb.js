export const darkweb = {
    id: 'darkweb',
    name: 'Dark Web Investigation',
    icon: 'Ghost',
    description: 'Búsqueda en redes Tor y I2P',
    tools: [
        // Surface Tools (Safe to use without Tor)
        { id: 'darksearch', name: 'DarkSearch.io', url: 'https://darksearch.io', description: 'Buscador de Dark Web accesible desde navegador normal.', usage: 'Usa operadores booleanos (AND, OR).', category: 'darkweb', free: true },
        { id: 'onionland', name: 'OnionLand Search', url: 'https://onionlandsearchengine.com', description: 'Buscador de .onion desde surface web.', usage: 'Busca dominios onion sin abrir Tor.', category: 'darkweb', free: true },
        { id: 'ahmia_surface', name: 'Ahmia (Surface)', url: 'https://ahmia.fi', description: 'Versión accesible de Ahmia para buscar onions.', usage: 'Copia los enlaces .onion y ábrelos en Tor.', category: 'darkweb', free: true },
        { id: 'intelx_dw', name: 'Intelligence X', url: 'https://intelx.io', description: 'Motor de búsqueda forense (Dark Web, Pastebin).', usage: 'Busca emails o dominios filtrados.', category: 'darkweb', free: false },

        // Onion Search Engines (Require Tor)
        { id: 'ahmia_onion', name: 'Ahmia (Onion)', url: 'http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion/', description: 'Buscador ético y limpio para Tor.', usage: 'Requiere Tor Browser.', category: 'darkweb', free: true },
        { id: 'torch', name: 'Torch', url: 'http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/', description: 'Uno de los buscadores más antiguos y masivos.', usage: 'Resultados sin filtros (cuidado).', category: 'darkweb', free: true },
        { id: 'haystak', name: 'Haystak', url: 'http://haystak5njsmn2hqkewecpaxetahtwhsbsa64jom2k22z5afxhnpxfid.onion/', description: 'Buscador con indexación profunda.', usage: 'Versión free limitada, buena base de datos.', category: 'darkweb', free: false },
        { id: 'duckduckgo_onion', name: 'DuckDuckGo (Onion)', url: 'https://3g2upl4pq6kufc4m.onion', description: 'Búsqueda privada dentro de la red Tor.', usage: 'El más seguro para privacidad básica.', category: 'darkweb', free: true },

        // Analysis & Directories
        { id: 'hunchly', name: 'Hunchly', url: 'https://www.hunch.ly/', description: 'Herramienta de captura de evidencias web.', usage: 'Extensión que guarda automáticamente lo que visitas.', category: 'darkweb', free: false },
        { id: 'tor_taxi', name: 'Tor.taxi', url: 'https://tor.taxi', description: 'Directorio de enlaces .onion verificados.', usage: 'Evita phishing usando estos enlaces oficiales.', category: 'darkweb', free: true }
    ],
    flows: [
        {
            id: 'flow_darkweb',
            name: 'Investigación Dark Web',
            trigger_type: 'darkweb',
            steps: [
                {
                    step_id: 1,
                    title: 'Preparación OPSEC',
                    description: '⚠️ NO continúes sin Tor Browser + VPN o Tails OS.',
                    tools: ['tails', 'torbrowser'] // Refers to OPSEC tools
                },
                {
                    step_id: 2,
                    title: 'Reconocimiento Superficial',
                    description: 'Busca enlaces .onion desde la web normal (Surface).',
                    tools: ['darksearch', 'onionland', 'ahmia_surface', 'intelx_dw']
                },
                {
                    step_id: 3,
                    title: 'Búsqueda Profunda (.onion)',
                    description: 'Navega en la red Tor usando buscadores específicos.',
                    tools: ['ahmia_onion', 'torch', 'haystak', 'duckduckgo_onion']
                },
                {
                    step_id: 4,
                    title: 'Verificación de Enlaces',
                    description: 'Confirma que los sitios sean legítimos.',
                    tools: ['tor_taxi']
                }
            ]
        }
    ]
};
