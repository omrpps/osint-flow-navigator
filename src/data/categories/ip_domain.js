export const ip_domain = {
    id: 'ip_domain',
    name: 'Infraestructura',
    icon: 'Globe',
    description: 'Dominios, IPs y Seguridad',
    tools: [
        { id: 'shodan', name: 'Shodan', url: 'https://www.shodan.io/', description: 'Motor de búsqueda para dispositivos conectados.', usage: 'Busca IPs, puertos abiertos o tecnologías (ej: "apache").', category: 'ip_domain', free: false },
        { id: 'censys', name: 'Censys', url: 'https://search.censys.io/', description: 'Búsqueda de hosts y certificados.', usage: 'Alternativa a Shodan, ideal para certificados SSL.', category: 'ip_domain', free: true },
        { id: 'dnsdumpster', name: 'DNSDumpster', url: 'https://dnsdumpster.com/', description: 'Mapa y reconocimiento de DNS.', usage: 'Genera un mapa visual de subdominios y servidores.', category: 'ip_domain', free: true },
        { id: 'viewdns_infra', name: 'ViewDNS', url: 'https://viewdns.info/', description: 'Herramientas DNS todo en uno.', usage: 'Reverse IP para ver qué más aloja ese servidor.', category: 'ip_domain', free: true },
        { id: 'securitytrails_infra', name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'Historial de DNS y subdominios.', usage: 'Mira la historia de registros A y MX.', category: 'ip_domain', free: true },
        { id: 'archive_org_web', name: 'Wayback Machine', url: 'https://web.archive.org/', description: 'Historial de versiones de páginas web.', usage: 'Busca versiones antiguas o borradas de la web.', category: 'ip_domain', free: true },
        { id: 'scanurl', name: 'ScanURL', url: 'https://scanurl.io/', description: 'Verifica si una URL es segura o maliciosa.', usage: 'Analiza enlaces sospechosos antes de abrir.', category: 'ip_domain', free: true },
        { id: 'urlscan', name: 'urlscan.io', url: 'https://urlscan.io/', description: 'Escanea y analiza sitios web (captura, tecnologías).', usage: 'Obtén una captura de pantalla sin visitar el sitio.', category: 'ip_domain', free: true },
        { id: 'builtwith', name: 'BuiltWith', url: 'https://builtwith.com/', description: 'Identifica las tecnologías que usa una web.', usage: 'Descubre CMS, analytics y plugins instalados.', category: 'ip_domain', free: true },
        { id: 'whois_domain', name: 'Who.is', url: 'https://who.is/', description: 'Consulta de registro de dominios.', usage: 'Verifica fecha de creación y registrador.', category: 'ip_domain', free: true },

        // Start.me Tools
        { id: 'wolfram_alpha', name: 'Wolfram Alpha', url: 'http://wolframalpha.com', description: 'Motor de conocimiento computacional.', category: 'ip_domain', free: true },
        { id: 'whois_startme', name: 'WhoIs', url: 'http://whois.com', description: 'Consulta WhoIs de dominios.', category: 'ip_domain', free: true }
    ],
    flows: [
        {
            id: 'flow_ip_domain',
            name: 'Investigación IP / Dominio',
            trigger_type: 'ip_domain',
            steps: [
                { step_id: 1, title: 'Identificación Básica', description: 'Propiedad del dominio y tecnologías.', tools: ['whois_domain', 'builtwith'] },
                { step_id: 2, title: 'Seguridad y Reputación', description: 'Verifica si es malicioso o phishing.', tools: ['scanurl', 'urlscan'] },
                { step_id: 3, title: 'Infraestructura', description: 'Puertos, subdominios y servidores.', tools: ['shodan', 'censys', 'dnsdumpster'] },
                { step_id: 4, title: 'Historial', description: 'Cómo era el sitio en el pasado.', tools: ['archive_org_web', 'securitytrails_infra'] }
            ]
        }
    ]
};
