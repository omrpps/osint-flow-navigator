export const phone = {
    id: 'phone',
    name: 'Teléfono',
    icon: 'Phone',
    description: 'Identificación de propietario y operador',
    tools: [
        { id: 'numlookup', name: 'NumLookup', url: 'https://www.numlookup.com/', description: 'Búsqueda inversa de números.', usage: 'Efectivo para números de EE.UU y algunos internacionales.', category: 'phone', free: true },
        { id: 'infobel', name: 'Infobel', url: 'https://www.infobel.com/', description: 'Directorio telefónico internacional.', usage: 'Páginas blancas internacionales.', category: 'phone', free: true },
        { id: 'phoneinfoga', name: 'PhoneInfoga (GitHub)', url: 'https://github.com/sundowndev/phoneinfoga', description: 'Framework OSINT avanzado para teléfonos.', usage: 'Requiere CLI. Escanea en diversas fuentes públicas.', category: 'phone', free: true },
        { id: 'whatsapp_web', name: 'WhatsApp Web', url: 'https://web.whatsapp.com/', description: 'Verifica foto de perfil y estado.', usage: 'Abre un chat con el número sin añadirlo a tu agenda principal.', category: 'phone', free: true },
        { id: 'telegram_web', name: 'Telegram Web', url: 'https://web.telegram.org/', description: 'Busca el número para ver el perfil asociado.', usage: 'Encuentra usuarios que no ocultaron su número telefónico.', category: 'phone', free: true },
        { id: 'yandex', name: 'Yandex', url: 'https://www.yandex.com/', description: 'Buenos resultados para directorios telefónicos.', usage: 'Busca el número con prefijo internacional incluido (+XX...)', category: 'phone', free: true },
        { id: 'facebook_identify', name: 'Facebook Identify', url: 'https://www.facebook.com/login/identify', description: 'Verifica si el número está asociado a Facebook.', usage: 'Utiliza el inicio de recuperación de contraseña.', category: 'phone', free: true },
        { id: 'phonenum_info', name: 'PhoneNum.info', url: 'https://phonenum.info/', description: 'Identifica país y operador telefónico.', usage: 'Conoce la operadora original al momento de emisión.', category: 'phone', free: true },
        { id: 'hlrlookup', name: 'HLR Lookup', url: 'https://www.hlrlookup.com/', description: 'Consulta HLR para verificar estado real.', usage: 'Determina si la línea está encendida pagando tarifa interconexión.', category: 'phone', free: false },
        { id: 'twilio_lookup', name: 'Twilio Lookup', url: 'https://www.twilio.com/lookup', description: 'API de información de números.', usage: 'Proporciona Caller ID Name en EE.UU.', category: 'phone', free: false },
        { id: 'truecaller', name: 'Truecaller', url: 'https://www.truecaller.com/', description: 'Identifica el propietario de un número.', usage: 'Busca filtraciones de agendas de contactos globales.', category: 'phone', free: true },
        { id: 'syncme', name: 'Sync.me', url: 'https://sync.me/', description: 'Identifica llamadas y busca números.', usage: 'Buena alternativa o complemento a Truecaller y similares.', category: 'phone', free: true },
        { id: 'google_dork', name: 'Google Dork', url: 'https://www.google.com/', description: 'Búsqueda avanzada en Google.', usage: 'Usa comillas o asteriscos (ej. "+34 600 * 00")', category: 'phone', free: true },
        { id: 'signal', name: 'Signal', url: 'https://signal.org/', description: 'Verifica si está registrado en Signal.', usage: 'Mira la lista de contactos en Signal (requiere dispositivo).', category: 'phone', free: true }
    ],
    flows: [
        {
            id: 'flow_phone_master',
            name: 'Investigación Maestra de Teléfono',
            trigger_type: 'phone',
            steps: [
                {
                    step_id: 1,
                    title: 'Identificar Propietario',
                    description: 'Bases de datos de Caller ID y directorios.',
                    tools: ['truecaller', 'syncme', 'numlookup', 'infobel', 'phoneinfoga']
                },
                {
                    step_id: 2,
                    title: 'Apps de Mensajería',
                    description: 'Verifica si el número está en WhatsApp, Telegram o Signal.',
                    tools: ['whatsapp_web', 'telegram_web', 'signal']
                },
                {
                    step_id: 3,
                    title: 'Huella Digital Web',
                    description: 'Dorks y búsquedas en redes sociales.',
                    tools: ['google_dork', 'yandex', 'facebook_identify']
                },
                {
                    step_id: 4,
                    title: 'Operador y Red',
                    description: 'Datos técnicos del número (HLR, CNAM).',
                    tools: ['phonenum_info', 'hlrlookup', 'twilio_lookup']
                }
            ]
        }
    ]
};
