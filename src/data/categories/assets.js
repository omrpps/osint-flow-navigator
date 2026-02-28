export const assets = {
    id: 'assets',
    name: 'Activos y Finanzas',
    icon: 'Briefcase',
    description: 'Empresas y Criptomonedas',
    tools: [
        // Business
        { id: 'opencorporates', name: 'OpenCorporates', url: 'https://opencorporates.com/', description: 'La mayor base de datos abierta de empresas.', usage: 'Busca por nombre de empresa o directivo.', category: 'business', payment_tier: 'free' },
        { id: 'linkedin_company', name: 'LinkedIn Company Search', url: 'https://www.linkedin.com/search/results/companies/', description: 'Búsqueda de empleados y estructura corporativa.', usage: 'Filtra por "Personas" para ver empleados actuales.', category: 'business', payment_tier: 'freemium' },
        { id: 'offshore_leaks', name: 'ICIJ Offshore Leaks', url: 'https://offshoreleaks.icij.org/', description: 'Base de datos de papeles de Panamá, Pandora, etc.', usage: 'Busca nombres de políticos o empresarios.', category: 'business', payment_tier: 'free' },

        // Crypto - Multi-Chain Explorers
        { id: 'blockchair', name: 'Blockchair', url: 'https://blockchair.com', description: 'Explorer multi-cadena universal y privacidad.', usage: 'Pega cualquier dirección o TXID para identificar la red.', category: 'crypto', payment_tier: 'free' },
        { id: 'tokenview', name: 'Tokenview', url: 'https://tokenview.io', description: 'Explorer con soporte para +120 blockchains.', usage: 'Útil para tokens exóticos y NFTs.', category: 'crypto', payment_tier: 'freemium' },

        // Crypto - Bitcoin
        { id: 'blockchain_com', name: 'Blockchain.com Explorer', url: 'https://www.blockchain.com/explorer', description: 'El explorer clásico de Bitcoin.', usage: 'Verifica balance y total recibido/enviado.', category: 'crypto', payment_tier: 'free' },
        { id: 'oxt_me', name: 'OXT.me', url: 'https://oxt.me', description: 'Análisis avanzado y clustering de Bitcoin.', usage: 'Detecta si varias direcciones pertenecen al mismo dueño.', category: 'crypto', payment_tier: 'free' },
        { id: 'bitcoin_abuse', name: 'BitcoinAbuse', url: 'https://www.bitcoinabuse.com/', description: 'Base de datos de direcciones reportadas.', usage: 'Comprueba si la wallet ha sido denunciada por scams.', category: 'crypto', payment_tier: 'free' },

        // Crypto - Ethereum/EVM
        { id: 'etherscan', name: 'Etherscan', url: 'https://etherscan.io/', description: 'Estándar de oro para investigar Ethereum.', usage: 'Revisa "Token Transfers" para ver activos ocultos.', category: 'crypto', payment_tier: 'freemium' },
        { id: 'ethplorer', name: 'Ethplorer', url: 'https://ethplorer.io', description: 'Enfocado en tokens ERC-20 y portfolio.', usage: 'Vista rápida de todos los tokens de una dirección.', category: 'crypto', payment_tier: 'free' },
        { id: 'bscscan', name: 'BscScan', url: 'https://bscscan.com', description: 'Explorer para Binance Smart Chain.', usage: 'Igual que Etherscan pero para la red BNB.', category: 'crypto', payment_tier: 'freemium' },
        { id: 'polygonscan', name: 'PolygonScan', url: 'https://polygonscan.com', description: 'Explorer para red Polygon (MATIC).', usage: 'Rastrea transacciones baratas y NFTs en Polygon.', category: 'crypto', payment_tier: 'freemium' },

        // Crypto - Analysis & Intelligence
        { id: 'arkham', name: 'Arkham Intelligence', url: 'https://platform.arkhamintelligence.com/', description: 'Inteligencia visual y deanonymization.', usage: 'Visualiza el flujo de fondos entre entidades y exchanges.', category: 'crypto', payment_tier: 'free' },
        { id: 'whale_alert', name: 'Whale Alert', url: 'https://whale-alert.io/', description: 'Rastreo de grandes movimientos ("Ballenas").', usage: 'Monitoriza transferencias masivas hacia exchanges.', category: 'crypto', payment_tier: 'freemium' },
        { id: 'solscan', name: 'Solscan', url: 'https://solscan.io', description: 'Explorer principal de Solana.', usage: 'Analiza transacciones rápidas en la red SOL.', category: 'crypto', payment_tier: 'freemium' }
    ],
    flows: [
        {
            id: 'flow_business',
            name: 'Investigación Corporativa',
            trigger_type: 'business',
            steps: [
                { step_id: 1, title: 'Registro Oficial', description: 'Datos legales y directivos.', tools: ['opencorporates', 'linkedin_company'] },
                { step_id: 2, title: 'Paraísos Fiscales', description: 'Busca en filtraciones offshore.', tools: ['offshore_leaks'] }
            ]
        },
        {
            id: 'flow_crypto',
            name: 'Investigación Criptomonedas',
            trigger_type: 'crypto',
            steps: [
                {
                    step_id: 1,
                    title: 'Exploración Básica',
                    description: 'Identifica la red y el balance actual.',
                    tools: ['blockchair', 'blockchain_com', 'etherscan', 'solscan']
                },
                {
                    step_id: 2,
                    title: 'Análisis de Tokens',
                    description: 'Descubre otros activos (ERC-20, NFTs) en la wallet.',
                    tools: ['ethplorer', 'tokenview', 'bscscan', 'polygonscan']
                },
                {
                    step_id: 3,
                    title: 'Clustering y Riesgo',
                    description: 'Agrupa direcciones y verifica reputación delictiva.',
                    tools: ['oxt_me', 'bitcoin_abuse', 'arkham']
                },
                {
                    step_id: 4,
                    title: 'Visualización de Flujos',
                    description: 'Grafica hacia dónde se mueve el dinero.',
                    tools: ['arkham', 'whale_alert']
                }
            ]
        }
    ]
};
