export const opsec = {
    id: 'opsec',
    name: 'Investigación Segura (OPSEC)',
    icon: 'Shield',
    description: 'Anonimato, VPN, VMs y Cifrado',
    tools: [
        { id: 'tails', name: 'Tails', url: 'https://tails.boum.org/', description: 'Sistema operativo amnésico que enruta todo por Tor.', category: 'opsec', opsec_level: 'Intermedio', free: true },
        { id: 'whonix', name: 'Whonix', url: 'https://www.whonix.org/', description: 'Sistema operativo con aislamiento por VM y Tor forzado.', category: 'opsec', opsec_level: 'Avanzado', free: true },
        { id: 'qubes', name: 'Qubes OS', url: 'https://www.qubes-os.org/', description: 'Sistema operativo con compartimentación por VMs.', category: 'opsec', opsec_level: 'Avanzado', free: true },
        { id: 'kali', name: 'Kali Linux', url: 'https://www.kali.org/', description: 'Distribución para pentesting con herramientas OSINT.', category: 'opsec', opsec_level: 'Intermedio', free: true },
        { id: 'parrot', name: 'Parrot Security', url: 'https://www.parrotsec.org/', description: 'Distribución orientada a seguridad y anonimato.', category: 'opsec', opsec_level: 'Intermedio', free: true },
        { id: 'virtualbox', name: 'VirtualBox', url: 'https://www.virtualbox.org/', description: 'Software de virtualización gratuito.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'vmware', name: 'VMware Workstation Player', url: 'https://www.vmware.com/', description: 'Virtualizador profesional.', category: 'opsec', opsec_level: 'Intermedio', free: false },
        { id: 'qemu', name: 'QEMU/KVM', url: 'https://www.qemu.org/', description: 'Virtualización de código abierto para Linux.', category: 'opsec', opsec_level: 'Avanzado', free: true },
        { id: 'torbrowser', name: 'Tor Browser', url: 'https://www.torproject.org/', description: 'Navegador que enruta tráfico por la red Tor.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'protonvpn', name: 'ProtonVPN', url: 'https://protonvpn.com/', description: 'VPN con sede en Suiza, plan gratuito disponible.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'mullvad', name: 'Mullvad VPN', url: 'https://mullvad.net/', description: 'VPN enfocada en privacidad, acepta crypto.', category: 'opsec', opsec_level: 'Intermedio', free: false },
        { id: 'i2p', name: 'I2P', url: 'https://geti2p.net/', description: 'Red anónima descentralizada alternativa a Tor.', category: 'opsec', opsec_level: 'Avanzado', free: true },
        { id: 'tempmail', name: 'Temp-Mail', url: 'https://temp-mail.org/', description: 'Emails desechables temporales.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'guerrillamail', name: 'Guerrilla Mail', url: 'https://www.guerrillamail.com/', description: 'Email temporal con control.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'protonmail', name: 'ProtonMail', url: 'https://proton.me/mail', description: 'Email cifrado de extremo a extremo.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'simplelogin', name: 'SimpleLogin', url: 'https://simplelogin.io/', description: 'Gestor de alias de email.', category: 'opsec', opsec_level: 'Intermedio', free: true },
        { id: 'fakename', name: 'Fake Name Generator', url: 'https://www.fakenamegenerator.com/', description: 'Genera identidades ficticias completas.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'thisperson', name: 'This Person Does Not Exist', url: 'https://thispersondoesnotexist.com/', description: 'Genera fotos de personas inexistentes con IA.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'veracrypt', name: 'VeraCrypt', url: 'https://www.veracrypt.fr/', description: 'Cifrado de discos y contenedores.', category: 'opsec', opsec_level: 'Intermedio', free: true },
        { id: 'cryptomator', name: 'Cryptomator', url: 'https://cryptomator.org/', description: 'Cifrado de archivos en la nube.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'gpg', name: 'GPG/GnuPG', url: 'https://gnupg.org/', description: 'Cifrado de correo y archivos.', category: 'opsec', opsec_level: 'Avanzado', free: true },
        { id: 'signal', name: 'Signal', url: 'https://signal.org/', description: 'Mensajería cifrada de extremo a extremo.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'onionshare', name: 'OnionShare', url: 'https://onionshare.org/', description: 'Compartir archivos anónimamente vía Tor.', category: 'opsec', opsec_level: 'Intermedio', free: true },

        // Start.me Tools
        { id: 'first_draft_trauma', name: 'First Draft: Guide for Working with Traumatic Imagery', url: 'https://firstdraftnews.com/wp-content/uploads/2017/04/vicarioustrauma.pdf?x40896', description: 'Guía para trabajar con imágenes traumáticas.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'dart_trauma_imagery', name: 'Dart Centre: Working with Traumatic Imagery', url: 'https://dartcenter.org/content/working-with-traumatic-imagery', description: 'Manejo de imágenes traumáticas.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'dart_op_procedures', name: 'Dart Centre: Operating Procedures for Traumatic Imagery', url: 'https://dartcenter.org/resources/handling-traumatic-imagery-developing-standard-operating-procedure', description: 'Procedimientos para imágenes traumáticas.', category: 'opsec', opsec_level: 'Principiante', free: true },
        { id: 'security_planner', name: 'Security Planner', url: 'https://securityplanner.org/', description: 'Planificador de seguridad online.', category: 'opsec', opsec_level: 'Principiante', free: true }
    ],
    flows: [
        {
            id: 'flow_opsec',
            name: 'Investigación Segura (OPSEC)',
            trigger_type: 'opsec',
            steps: [
                {
                    step_id: 1,
                    title: 'Sistemas Operativos para Anonimato',
                    description: 'Configura un entorno seguro y aislado.',
                    tools: ['tails', 'whonix', 'qubes', 'kali', 'parrot']
                },
                {
                    step_id: 2,
                    title: 'Virtualización',
                    description: 'Aísla tu entorno de trabajo del sistema principal.',
                    tools: ['virtualbox', 'vmware', 'qemu']
                },
                {
                    step_id: 3,
                    title: 'VPN y Redes Anónimas',
                    description: 'Oculta tu dirección IP y cifra tu tráfico.',
                    tools: ['torbrowser', 'protonvpn', 'mullvad', 'i2p']
                },
                {
                    step_id: 4,
                    title: 'Identidades y Emails',
                    description: 'Crea identidades falsas y cuentas de correo temporales.',
                    tools: ['tempmail', 'guerrillamail', 'protonmail', 'simplelogin', 'fakename', 'thisperson']
                },
                {
                    step_id: 5,
                    title: 'Cifrado y Almacenamiento',
                    description: 'Protege tus archivos y comunicaciones.',
                    tools: ['veracrypt', 'cryptomator', 'gpg', 'signal', 'onionshare']
                }
            ]
        }
    ]
};
