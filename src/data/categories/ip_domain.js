export const ip_domain = {
    id: 'ip_domain',
    name: 'Infraestructura',
    icon: 'Globe',
    description: 'Dominios, IPs y Seguridad',
    tools: [
        { id: 'shodan', name: 'Shodan', url: 'https://www.shodan.io/', description: 'Motor de búsqueda para dispositivos conectados.', usage: 'Busca IPs, puertos abiertos o tecnologías (ej: "apache").', category: 'ip_domain', payment_tier: 'freemium', opsec_level: 'Safe (Investigación)' },
        { id: 'censys', name: 'Censys', url: 'https://search.censys.io/', description: 'Búsqueda de hosts y certificados.', usage: 'Alternativa a Shodan, ideal para certificados SSL.', category: 'ip_domain', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'dnsdumpster', name: 'DNSDumpster', url: 'https://dnsdumpster.com/', description: 'Mapa y reconocimiento de DNS.', usage: 'Genera un mapa visual de subdominios y servidores.', category: 'ip_domain', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'viewdns_infra', name: 'ViewDNS', url: 'https://viewdns.info/', description: 'Herramientas DNS todo en uno.', usage: 'Reverse IP para ver qué más aloja ese servidor.', category: 'ip_domain', payment_tier: 'free' },
        { id: 'securitytrails_infra', name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'Historial de DNS y subdominios.', usage: 'Mira la historia de registros A y MX.', category: 'ip_domain', payment_tier: 'freemium' },
        { id: 'archive_org_web', name: 'Wayback Machine', url: 'https://web.archive.org/', description: 'Historial de versiones de páginas web.', usage: 'Busca versiones antiguas o borradas de la web.', category: 'ip_domain', payment_tier: 'free' },
        { id: 'scanurl', name: 'ScanURL', url: 'https://scanurl.io/', description: 'Verifica si una URL es segura o maliciosa.', usage: 'Analiza enlaces sospechosos antes de abrir.', category: 'ip_domain', payment_tier: 'free' },
        { id: 'urlscan', name: 'urlscan.io', url: 'https://urlscan.io/', description: 'Escanea y analiza sitios web (captura, tecnologías).', usage: 'Obtén una captura de pantalla sin visitar el sitio.', category: 'ip_domain', payment_tier: 'free' },
        { id: 'builtwith', name: 'BuiltWith', url: 'https://builtwith.com/', description: 'Identifica las tecnologías que usa una web.', usage: 'Descubre CMS, analytics y plugins instalados.', category: 'ip_domain', payment_tier: 'freemium' },
        { id: 'whois_domain', name: 'Who.is', url: 'https://who.is/', description: 'Consulta de registro de dominios.', usage: 'Verifica fecha de creación y registrador.', category: 'ip_domain', payment_tier: 'free' },

        // Advanced specialized tools
        { id: 'theharvester', name: 'TheHarvester', url: 'https://github.com/laramies/theHarvester', description: 'Recopila subdominios y emails de una organización.', usage: 'Ideal en fase de reconocimiento inicial e inteligencia.', category: 'ip_domain', payment_tier: 'free', opsec_level: 'Safe (Investigación)' },
        { id: 'intelx_infra', name: 'Intelligence X', url: 'https://intelx.io/', description: 'Motor de búsqueda de la Dark Web y Deep Web.', usage: 'Busca credenciales, fugas o dominios ocultos.', category: 'ip_domain', payment_tier: 'freemium', opsec_level: 'Safe (Investigación)' },

        // Enterprise / Global OSINT Platforms
        { id: 'shadowdragon', name: 'ShadowDragon', url: 'https://shadowdragon.io/', description: 'Plataforma profesional con +600 fuentes de datos.', usage: 'Investigaciones complejas y análisis CTI en tiempo real.', category: 'ip_domain', payment_tier: 'paid', opsec_level: 'Safe (Enterprise)' },
        { id: 'videris', name: 'Videris', url: 'https://blackdotsolutions.com/', description: 'Solución OSINT de espectro completo (recolección y mapeo).', usage: 'Investigaciones AML, riesgo y seguridad nacional.', category: 'ip_domain', payment_tier: 'paid', opsec_level: 'Safe (Enterprise)' },
        { id: 'maltego', name: 'Maltego', url: 'https://maltego.com/', description: 'Análisis gráfico avanzado de enlaces y relaciones.', usage: 'Mapeo visual de infraestructuras y personas.', category: 'ip_domain', payment_tier: 'freemium', opsec_level: 'Safe (Investigación)' }


    ],
    flows: [
        {
            id: 'flow_ip_domain',
            name: 'Investigación IP / Dominio',
            trigger_type: 'ip_domain',
            steps: [
                { step_id: 1, title: 'Identificación Básica', description: 'Propiedad del dominio, subdominios y tecnologías.', tools: ['whois_domain', 'builtwith', 'theharvester'] },
                { step_id: 2, title: 'Seguridad y Reputación', description: 'Verifica si es malicioso o phishing.', tools: ['scanurl', 'urlscan'] },
                { step_id: 3, title: 'Infraestructura', description: 'Puertos, servicios y búsqueda de activos.', tools: ['shodan', 'censys', 'dnsdumpster', 'intelx_infra'] },
                { step_id: 4, title: 'Historial', description: 'Cómo era el sitio en el pasado.', tools: ['archive_org_web', 'securitytrails_infra'] },
                { step_id: 5, title: 'Plataformas Integrales (Enterprise)', description: 'Utiliza plataformas avanzadas para graficar o cruzar cientos de fuentes.', tools: ['maltego', 'videris', 'shadowdragon'] }
            ]
        }
    ]
};
