export const dataModel = {
    "categories": [
        {
            "id": "opsec",
            "name": "Investigación Segura (OPSEC)",
            "icon": "Shield",
            "description": "Anonimato, VPN, VMs y Cifrado"
        },
        {
            "id": "email",
            "name": "Email",
            "icon": "Mail",
            "description": "Verificación, fugas y perfiles vinculados"
        },
        {
            "id": "phone",
            "name": "Teléfono",
            "icon": "Phone",
            "description": "Identificación de propietario y operador"
        },
        {
            "id": "username",
            "name": "Username",
            "icon": "User",
            "description": "Rastreo de alias en múltiples plataformas"
        },
        {
            "id": "ip_domain",
            "name": "IP / Dominio",
            "icon": "Globe",
            "description": "Infraestructura y redes"
        },
        {
            "id": "images",
            "name": "Imágenes",
            "icon": "Image",
            "description": "Análisis forense y búsqueda inversa"
        },
        {
            "id": "social",
            "name": "Redes Sociales",
            "icon": "Users",
            "description": "Facebook, Twitter, Instagram, etc."
        },
        {
            "id": "business",
            "name": "Empresas",
            "icon": "Building",
            "description": "Información corporativa"
        },
        {
            "id": "crypto",
            "name": "Criptomonedas",
            "icon": "Bitcoin",
            "description": "Rastreo de transacciones"
        }
    ],
    "tools": [
        // --- BLOQUE 0: OPSEC ---
        { "id": "tails", "name": "Tails", "url": "https://tails.boum.org/", "description": "Sistema operativo amnésico que enruta todo por Tor.", "category": "opsec", "opsec_level": "Intermedio", "free": true },
        { "id": "whonix", "name": "Whonix", "url": "https://www.whonix.org/", "description": "Sistema operativo con aislamiento por VM y Tor forzado.", "category": "opsec", "opsec_level": "Avanzado", "free": true },
        { "id": "qubes", "name": "Qubes OS", "url": "https://www.qubes-os.org/", "description": "Sistema operativo con compartimentación por VMs.", "category": "opsec", "opsec_level": "Avanzado", "free": true },
        { "id": "kali", "name": "Kali Linux", "url": "https://www.kali.org/", "description": "Distribución para pentesting con herramientas OSINT.", "category": "opsec", "opsec_level": "Intermedio", "free": true },
        { "id": "parrot", "name": "Parrot Security", "url": "https://www.parrotsec.org/", "description": "Distribución orientada a seguridad y anonimato.", "category": "opsec", "opsec_level": "Intermedio", "free": true },
        { "id": "virtualbox", "name": "VirtualBox", "url": "https://www.virtualbox.org/", "description": "Software de virtualización gratuito.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "vmware", "name": "VMware Workstation Player", "url": "https://www.vmware.com/", "description": "Virtualizador profesional.", "category": "opsec", "opsec_level": "Intermedio", "free": false },
        { "id": "qemu", "name": "QEMU/KVM", "url": "https://www.qemu.org/", "description": "Virtualización de código abierto para Linux.", "category": "opsec", "opsec_level": "Avanzado", "free": true },
        { "id": "torbrowser", "name": "Tor Browser", "url": "https://www.torproject.org/", "description": "Navegador que enruta tráfico por la red Tor.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "protonvpn", "name": "ProtonVPN", "url": "https://protonvpn.com/", "description": "VPN con sede en Suiza, plan gratuito disponible.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "mullvad", "name": "Mullvad VPN", "url": "https://mullvad.net/", "description": "VPN enfocada en privacidad, acepta crypto.", "category": "opsec", "opsec_level": "Intermedio", "free": false },
        { "id": "i2p", "name": "I2P", "url": "https://geti2p.net/", "description": "Red anónima descentralizada alternativa a Tor.", "category": "opsec", "opsec_level": "Avanzado", "free": true },
        { "id": "tempmail", "name": "Temp-Mail", "url": "https://temp-mail.org/", "description": "Emails desechables temporales.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "guerrillamail", "name": "Guerrilla Mail", "url": "https://www.guerrillamail.com/", "description": "Email temporal con control.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "protonmail", "name": "ProtonMail", "url": "https://proton.me/mail", "description": "Email cifrado de extremo a extremo.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "simplelogin", "name": "SimpleLogin", "url": "https://simplelogin.io/", "description": "Gestor de alias de email.", "category": "opsec", "opsec_level": "Intermedio", "free": true },
        { "id": "fakename", "name": "Fake Name Generator", "url": "https://www.fakenamegenerator.com/", "description": "Genera identidades ficticias completas.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "thisperson", "name": "This Person Does Not Exist", "url": "https://thispersondoesnotexist.com/", "description": "Genera fotos de personas inexistentes con IA.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "veracrypt", "name": "VeraCrypt", "url": "https://www.veracrypt.fr/", "description": "Cifrado de discos y contenedores.", "category": "opsec", "opsec_level": "Intermedio", "free": true },
        { "id": "cryptomator", "name": "Cryptomator", "url": "https://cryptomator.org/", "description": "Cifrado de archivos en la nube.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "gpg", "name": "GPG/GnuPG", "url": "https://gnupg.org/", "description": "Cifrado de correo y archivos.", "category": "opsec", "opsec_level": "Avanzado", "free": true },
        { "id": "signal", "name": "Signal", "url": "https://signal.org/", "description": "Mensajería cifrada de extremo a extremo.", "category": "opsec", "opsec_level": "Principiante", "free": true },
        { "id": "onionshare", "name": "OnionShare", "url": "https://onionshare.org/", "description": "Compartir archivos anónimamente vía Tor.", "category": "opsec", "opsec_level": "Intermedio", "free": true },

        // --- BLOQUE 1: EMAIL ---
        { "id": "emailhippo", "name": "EmailHippo", "url": "https://tools.emailhippo.com/", "description": "Verificación gratuita de direcciones de email.", "category": "email", "free": true },
        { "id": "emailchecker", "name": "Email-checker.net", "url": "https://email-checker.net/", "description": "Verifica si una dirección de correo es válida.", "category": "email", "free": true },
        { "id": "kickbox", "name": "Kickbox", "url": "https://kickbox.com/", "description": "Servicio de verificación de email con API.", "category": "email", "free": false },
        { "id": "holehe", "name": "Holehe (GitHub)", "url": "https://github.com/megadose/holehe", "description": "Comprueba en qué servicios está registrado un email.", "category": "email", "free": true },
        { "id": "ghunt", "name": "GHunt (GitHub)", "url": "https://github.com/mxrch/GHunt", "description": "Extrae información de cuentas de Google/Gmail.", "category": "email", "free": true },
        { "id": "predictasearch", "name": "Predicta Search", "url": "https://predictasearch.com/", "description": "Motor de búsqueda de personas por email.", "category": "email", "free": false },
        { "id": "dehashed", "name": "DeHashed", "url": "https://dehashed.com/", "description": "Buscador de filtraciones con datos detallados.", "category": "email", "free": false },
        { "id": "intelx", "name": "IntelX", "url": "https://intelx.io/", "description": "Motor de búsqueda con datos de filtraciones.", "category": "email", "free": true },
        { "id": "leakcheck", "name": "LeakCheck", "url": "https://leakcheck.io/", "description": "Busca emails en bases de datos filtradas.", "category": "email", "free": true },
        { "id": "google_dork", "name": "Google Dork", "url": "https://www.google.com/", "description": "Busca el email entre comillas en Google.", "category": "email", "free": true },
        { "id": "spokeo", "name": "Spokeo", "url": "https://www.spokeo.com/", "description": "Buscador de personas por email o teléfono.", "category": "email", "free": false },
        { "id": "thatsthem", "name": "That'sThem", "url": "https://thatsthem.com/", "description": "Información pública asociada a un email.", "category": "email", "free": true },
        { "id": "whois", "name": "Whois", "url": "https://who.is/", "description": "Datos de registro de un dominio.", "category": "email", "free": true },
        { "id": "viewdns", "name": "ViewDNS", "url": "https://viewdns.info/", "description": "Herramientas DNS: reverse IP, historial, whois.", "category": "email", "free": true },
        { "id": "securitytrails", "name": "SecurityTrails", "url": "https://securitytrails.com/", "description": "Datos históricos de DNS y subdominios.", "category": "email", "free": true },

        // --- BLOQUE 2: PHONE ---
        { "id": "numlookup", "name": "NumLookup", "url": "https://www.numlookup.com/", "description": "Búsqueda inversa de números.", "category": "phone", "free": true },
        { "id": "infobel", "name": "Infobel", "url": "https://www.infobel.com/", "description": "Directorio telefónico internacional.", "category": "phone", "free": true },
        { "id": "phoneinfoga", "name": "PhoneInfoga (GitHub)", "url": "https://github.com/sundowndev/phoneinfoga", "description": "Framework OSINT para teléfonos.", "category": "phone", "free": true },
        { "id": "whatsapp_web", "name": "WhatsApp Web", "url": "https://web.whatsapp.com/", "description": "Verifica foto de perfil y estado.", "category": "phone", "free": true },
        { "id": "telegram_web", "name": "Telegram Web", "url": "https://web.telegram.org/", "description": "Busca el número para ver el perfil.", "category": "phone", "free": true },
        { "id": "yandex", "name": "Yandex", "url": "https://www.yandex.com/", "description": "Buenos resultados para teléfonos.", "category": "phone", "free": true },
        { "id": "facebook_identify", "name": "Facebook Identify", "url": "https://www.facebook.com/login/identify", "description": "Verifica si está asociado a Facebook.", "category": "phone", "free": true },
        { "id": "phonenum_info", "name": "PhoneNum.info", "url": "https://phonenum.info/", "description": "Identifica país y operador.", "category": "phone", "free": true },
        { "id": "hlrlookup", "name": "HLR Lookup", "url": "https://www.hlrlookup.com/", "description": "Consulta HLR para verificar estado.", "category": "phone", "free": false },
        { "id": "twilio_lookup", "name": "Twilio Lookup", "url": "https://www.twilio.com/lookup", "description": "API de información de números.", "category": "phone", "free": false },

        // --- BLOQUE 3: USERNAME ---
        { "id": "maigret", "name": "Maigret (GitHub)", "url": "https://github.com/soxoj/maigret", "description": "Busca en 3000+ sitios con informe.", "category": "username", "free": true },
        { "id": "instantusername", "name": "InstantUsername", "url": "https://instantusername.com/", "description": "Búsqueda rápida de username.", "category": "username", "free": true },
        { "id": "reddit_analyser", "name": "Reddit User Analyzer", "url": "https://reddit-user-analyser.netlify.app/", "description": "Analiza actividad de un usuario de Reddit.", "category": "username", "free": true },
        { "id": "redective", "name": "Redective", "url": "https://www.redective.com/", "description": "Busca y analiza usuarios de Reddit.", "category": "username", "free": true },
        { "id": "socialblade", "name": "SocialBlade", "url": "https://socialblade.com/", "description": "Estadísticas de YouTube, Twitch, Instagram.", "category": "username", "free": true },

        // --- OTROS (Mantener los existentes que no colisionen o sean útiles) ---
        { "id": "haveibeenpwned", "name": "Have I Been Pwned", "url": "https://haveibeenpwned.com/", "description": "Verifica si un correo ha sido comprometido.", "category": "email", "free": true },
        { "id": "epieos", "name": "Epieos", "url": "https://epieos.com/", "description": "Busca cuentas de Google asociadas.", "category": "email", "free": true },
        { "id": "hunter", "name": "Hunter.io", "url": "https://hunter.io/", "description": "Encuentra emails profesionales.", "category": "email", "free": false },
        { "id": "whatsmyname", "name": "WhatsMyName", "url": "https://whatsmyname.app/", "description": "Busca nombres de usuario.", "category": "username", "free": true },
        { "id": "namechk", "name": "Namechk", "url": "https://namechk.com/", "description": "Comprueba disponibilidad de username.", "category": "username", "free": true },
        { "id": "sherlock", "name": "Sherlock", "url": "https://github.com/sherlock-project/sherlock", "description": "Busca usuarios en redes sociales.", "category": "username", "free": true },
        { "id": "truecaller", "name": "Truecaller", "url": "https://www.truecaller.com/", "description": "Identificación de llamadas.", "category": "phone", "free": true },
        { "id": "syncme", "name": "Sync.me", "url": "https://sync.me/", "description": "Identifica llamadas y busca números.", "category": "phone", "free": true }
    ],
    "flows": [
        {
            "id": "flow_opsec",
            "name": "Investigación Segura (OPSEC)",
            "trigger_type": "opsec",
            "steps": [
                {
                    "step_id": 1,
                    "title": "Sistemas Operativos para Anonimato",
                    "description": "Configura un entorno seguro y aislado.",
                    "tools": ["tails", "whonix", "qubes", "kali", "parrot"]
                },
                {
                    "step_id": 2,
                    "title": "Virtualización",
                    "description": "Aísla tu entorno de trabajo del sistema principal.",
                    "tools": ["virtualbox", "vmware", "qemu"]
                },
                {
                    "step_id": 3,
                    "title": "VPN y Redes Anónimas",
                    "description": "Oculta tu dirección IP y cifra tu tráfico.",
                    "tools": ["torbrowser", "protonvpn", "mullvad", "i2p"]
                },
                {
                    "step_id": 4,
                    "title": "Identidades y Emails",
                    "description": "Crea identidades falsas y cuentas de correo temporales.",
                    "tools": ["tempmail", "guerrillamail", "protonmail", "simplelogin", "fakename", "thisperson"]
                },
                {
                    "step_id": 5,
                    "title": "Cifrado y Almacenamiento",
                    "description": "Protege tus archivos y comunicaciones.",
                    "tools": ["veracrypt", "cryptomator", "gpg", "signal", "onionshare"]
                }
            ]
        },
        {
            "id": "flow_email_master",
            "name": "Investigación Maestra de Email",
            "trigger_type": "email",
            "steps": [
                {
                    "step_id": 1,
                    "title": "Verificar Existencia",
                    "description": "Confirma si la dirección de correo es válida y real.",
                    "tools": ["hunter", "emailhippo", "emailchecker", "kickbox"]
                },
                {
                    "step_id": 2,
                    "title": "Cuentas Vinculadas",
                    "description": "Descubre en qué servicios está registrado el email.",
                    "tools": ["holehe", "epieos", "whatsmyname", "ghunt", "predictasearch"]
                },
                {
                    "step_id": 3,
                    "title": "Filtraciones de Datos",
                    "description": "Busca el email en bases de datos hackeadas.",
                    "tools": ["haveibeenpwned", "dehashed", "intelx", "leakcheck"]
                },
                {
                    "step_id": 4,
                    "title": "Presencia Online",
                    "description": "Búsqueda en redes sociales y motores de búsqueda.",
                    "tools": ["google_dork", "epieos", "spokeo", "thatsthem"]
                },
                {
                    "step_id": 5,
                    "title": "Investigación de Dominio",
                    "description": "Analiza el dominio del correo si es corporativo o propio.",
                    "tools": ["hunter", "whois", "viewdns", "securitytrails"]
                }
            ]
        },
        {
            "id": "flow_phone_master",
            "name": "Investigación Maestra de Teléfono",
            "trigger_type": "phone",
            "steps": [
                {
                    "step_id": 1,
                    "title": "Identificar Propietario",
                    "description": "Bases de datos de Caller ID y directorios.",
                    "tools": ["truecaller", "syncme", "numlookup", "infobel", "phoneinfoga"]
                },
                {
                    "step_id": 2,
                    "title": "Apps de Mensajería",
                    "description": "Verifica si el número está en WhatsApp, Telegram o Signal.",
                    "tools": ["whatsapp_web", "telegram_web", "signal"]
                },
                {
                    "step_id": 3,
                    "title": "Huella Digital Web",
                    "description": "Dorks y búsquedas en redes sociales.",
                    "tools": ["google_dork", "yandex", "facebook_identify"]
                },
                {
                    "step_id": 4,
                    "title": "Operador y Red",
                    "description": "Datos técnicos del número (HLR, CNAM).",
                    "tools": ["phonenum_info", "hlrlookup", "twilio_lookup"]
                }
            ]
        },
        {
            "id": "flow_username_master",
            "name": "Investigación Maestra de Username",
            "trigger_type": "username",
            "steps": [
                {
                    "step_id": 1,
                    "title": "Búsqueda Multi-Plataforma",
                    "description": "Rastrea el alias en cientos de sitios web.",
                    "tools": ["sherlock", "whatsmyname", "namechk", "maigret", "instantusername"]
                },
                {
                    "step_id": 2,
                    "title": "Análisis de Actividad",
                    "description": "Estadísticas y patrones de uso en redes específicas.",
                    "tools": ["google_dork", "reddit_analyser", "redective", "socialblade"]
                }
            ]
        }
    ]
};
