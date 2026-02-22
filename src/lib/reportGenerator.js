export const generateReport = ({ flowName, step, notes }) => {
    const timestamp = new Date().toLocaleString();
    const content = `
# Reporte de Investigación OSINT
**Generado:** ${timestamp}
**Flujo:** ${flowName}

## Estado Actual
**Último Paso:** ${step}

## Notas del Analista
${notes || "No hay notas registradas."}

---
*Generado por OSINT Flow Navigator*
    `;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Reporte_OSINT_${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
