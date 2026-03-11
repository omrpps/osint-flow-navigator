export const training = {
    id: 'training',
    name: 'Formación y Casos de Estudio',
    icon: 'GraduationCap', // Also uses BookOpen depending on icon set. Ensure GraduationCap is supported. Let's use 'BookOpen' to be safer.
    description: 'Recursos formativos, casos reales y metodologías',
    tools: [
        { id: 'osint_industries_cases', name: 'OSINT Industries – Case Studies', url: 'https://osint.industries/', description: 'Casos completos con metodología y outcome (Nivel de detalle en resolución: Alto). Idioma: Inglés.', category: 'training', free: true },
        { id: 'syk_research_cases', name: 'SYK Research Labs – Case Studies', url: 'https://www.sykresearch.com/', description: 'Historias de investigación OSINT criminal (Nivel de detalle en resolución: Alto). Idioma: Inglés.', category: 'training', free: true },
        { id: 'linkedin_osint_cases', name: 'LinkedIn – Successful OSINT Investigations', url: 'https://www.linkedin.com/search/results/all/?keywords=Successful%20OSINT%20Investigations', description: 'Ejemplos resumidos de investigaciones (Nivel de detalle en resolución: Medio). Idioma: Inglés.', category: 'training', free: true },
        { id: 'altia_intel_cases', name: 'Altia Intel – Investigation Examples', url: 'https://altiaintel.com/', description: 'Casos de uso corporativos / gobierno (Nivel de detalle en resolución: Medio). Idioma: Inglés.', category: 'training', free: true },
        { id: 'lisa_institute_osint', name: 'LISA Institute (OSINT)', url: 'https://www.lisainstitute.com/blogs/blog', description: 'Artículos formativos, ejemplos de aplicación (Nivel de detalle en resolución: Medio). Idioma: Español.', category: 'training', free: true },
        { id: 'campus_ciberseguridad_osint', name: 'Campus Ciberseguridad (OSINT)', url: 'https://www.campusciberseguridad.com/blog', description: 'Blog con usos en policía, empresa, periodismo (Nivel de detalle en resolución: Medio). Idioma: Español.', category: 'training', free: true },
        { id: 'osint_forums', name: 'Foros / comunidades OSINT', url: 'https://www.reddit.com/r/OSINT/', description: 'Listas y debates sobre casos e informes (Nivel de detalle en resolución: Variable). Idioma: Mixto.', category: 'training', free: true }
    ],
    flows: [
        {
            id: 'flow_training',
            name: 'Formación y Casos Prácticos',
            trigger_type: 'training',
            steps: [
                {
                    step_id: 1,
                    title: 'Casos de Estudio Avanzados',
                    description: 'Revisión de investigaciones detalladas y metodologías completas (Nivel de detalle alto).',
                    tools: ['osint_industries_cases', 'syk_research_cases']
                },
                {
                    step_id: 2,
                    title: 'Artículos Formativos y Corporativos',
                    description: 'Lectura de casos de uso corporativos e institucionales (Nivel de detalle medio).',
                    tools: ['altia_intel_cases', 'lisa_institute_osint', 'campus_ciberseguridad_osint']
                },
                {
                    step_id: 3,
                    title: 'Ejemplos y Comunidad',
                    description: 'Investigaciones resumidas, debates y foros comunitarios.',
                    tools: ['linkedin_osint_cases', 'osint_forums']
                }
            ]
        }
    ]
};
