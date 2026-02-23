// Decision tree for the OPSEC Guide
export const opsecGuideData = {
    questions: {
        start: {
            text: "¿Qué nivel de riesgo o impacto tiene tu investigación?",
            options: [
                { label: "Bajo (Búsquedas en Google, periodismo básico, curiosidad)", nextId: "risk_low" },
                { label: "Medio (Seguimiento de estafas, personas no peligrosas, activismo local)", nextId: "risk_med" },
                { label: "Alto (Crimen organizado, actores estatales, Dark Web)", nextId: "risk_high" }
            ]
        },
        // --- LOW RISK ---
        risk_low: {
            text: "¿Desde dónde te vas a conectar principalmente?",
            options: [
                { label: "Desde mi casa o red segura", nextId: "low_home" },
                { label: "Desde redes públicas (Cafeterías, Aeropuertos)", nextId: "low_public" }
            ]
        },
        // --- MEDIUM RISK ---
        risk_med: {
            text: "¿Necesitas interactuar con los objetivos (crear cuentas, hablar)?",
            options: [
                { label: "No, solo mirar pasivamente (SOCMINT)", nextId: "med_passive" },
                { label: "Sí, necesito crear perfiles falsos e infiltrarme", nextId: "med_active" }
            ]
        },
        // --- HIGH RISK ---
        risk_high: {
            text: "¿Qué es lo más importante a proteger?",
            options: [
                { label: "Mi ubicación e identidad absoluta (Máximo anonimato)", nextId: "high_anon" },
                { label: "La información recolectada (Evitar confiscación de datos)", nextId: "high_data" }
            ]
        }
    },

    results: {
        // LOW RESULTS
        low_home: {
            title: "Higiene Digital Básica",
            description: "Para investigaciones sin impacto severo desde casa, basta con separar identidades y evitar publicidad rastreadora.",
            tools: ['protonvpn', 'tempmail', 'security_planner']
        },
        low_public: {
            title: "Protección en Redes Inseguras",
            description: "El mayor riesgo es que intercepten tu tráfico localmente. Es vital cifrar la conexión.",
            tools: ['protonvpn', 'torbrowser', 'protonmail']
        },

        // MEDIUM RESULTS
        med_passive: {
            title: "Aislamiento de Entorno (Recomendado)",
            description: "Como observar perfiles puede dejar rastros digitales (IP, User-Agent), aísla tu navegador o sistema.",
            tools: ['virtualbox', 'mullvad', 'simplelogin']
        },
        med_active: {
            title: "Creación de Identidades (Sockpuppets)",
            description: "Para interactuar, necesitas generar un alias creíble, correos aislados y mantener la historia.",
            tools: ['fakename', 'thisperson', 'guerrillamail']
        },

        // HIGH RESULTS
        high_anon: {
            title: "Amnesia y Compartimentación Total",
            description: "No confíes en tu sistema operativo habitual. Usa sistemas que se borran al apagar o aíslan cada proceso.",
            tools: ['tails', 'whonix', 'qubes', 'i2p']
        },
        high_data: {
            title: "Criptografía y Evasión Forense",
            description: "Asegura todos los discos, oculta volúmenes y establece comunicaciones con cifrado incorruptible.",
            tools: ['veracrypt', 'gpg', 'onionshare', 'signal']
        }
    }
};
