// Datos de cada sección
const sectionData = {
    analisis: {
        title: "Análisis y Requisitos",
        items: [
            { text: 'Introducción', link: '../HTML/introduccion.html' },
            { text: 'Justificación del Proyecto', link: '../HTML/justificacion.html' },
            { text: 'Definición del Problema', link: '../HTML/Problema.html' },
            { text: 'Antecedentes y Estado del Arte', link: '../HTML/antecedentes.html' },
            { text: 'Objetivo General y Específicos', link: '../HTML/objetivo.html' },
            { text: 'Alcance del Sistema', link: '../HTML/alcance.html' },
            { 
              text: 'Requisitos', 
              link: '#requisitos',
              children: [
                  { text: 'Requisitos de Usuario', link: '#req-usuario' },
                  { text: 'Requisitos Funcionales', link: '#req-funcionales' },
                  { text: 'Requisitos No Funcionales (RNF)', link: '../HTML/Requisitos.html' },
                  { text: 'Historias de Usuario', link: '../HTML/Historiau.html' },
                  { text: 'Reglas del Negocio', link: '../HTML/ReglasNegocio.html' }
              ]
            }
        ]
    },
    modelado: {
        title: "Modelado y Diseño",
        items: [
            { 
              text: 'Modelado del Sistema', 
              link: '#modelosistema',
              children: [
                  { text: 'Diagrama de Casos de Uso', link: '#casosuso' },
                  { text: 'Escenarios de Casos de Uso', link: '#escenarios' },
                  { text: 'Diagrama de Clases', link: '#clases' },
                  { text: 'MER (Modelo Entidad-Relación)', link: '#mer' },
                  { text: 'Diccionario de Diagrama de Clases', link: '#diccionario' },
                  { text: 'Mapa de Navegación', link: '#mapanavegacion' }
              ]
            },
            { 
              text: 'Diseño del Sistema',
              link: '#diseñosistema',
              children: [
                  { text: 'Diseño de Interfaces / Prototipo de alta calidad', link: '#interfaces' },
                  { text: 'Recursos del Proyecto', link: '#recursos' }
              ]
            },
            { text: 'Gestión de Configuración de Software', link: '#gestionconfiguracion' },
            { text: 'Gestión del Cambio', link: '#gestioncambio' }
        ]
    },
    calidad: {
        title: "Calidad,Prubas y Gestion",
        items: [
            { text: 'Métricas de Software y Valoración del Proyecto', link: '#Metricas' },
            { text: 'Cronograma de Actividades', link: '#cronograma' },
            { 
              text: 'Análisis de Riesgos', 
              link: '#analisisR',
              children: [
                  { text: 'Riesgo Tecnológico', link: '#riesgo-tec' },
                  { text: 'Riesgo de Clientes', link: '#riesgo-clientes' },
                  { text: 'Riesgo de Producto', link: '#riesgo-producto' },
                  { text: 'Riesgos de Proceso', link: '#riesgo-proceso' }
              ]
            },
            { 
              text: 'Estándares y Modelos de Calidad de Software',
              link: '#EstandarCalidad',
              children: [
                  { text: 'ISO/IEC 25010', link: '#iso25010' },
                  { text: 'ISO/IEC 12207', link: '#iso12207' },
                  { text: 'ISO/IEC 90003', link: '#iso90003' },
                  { text: 'CMMI-DEV', link: '#cmmi' },
                  { text: 'SPICE', link: '#spice' },
                  { text: 'IEEE 730', link: '#ieee730' },
                  { text: 'Six Sigma', link: '#sixsigma' },
                  { text: 'FURPS', link: '../HTML/furps.html' },
                  { text: 'ITIL', link: '#itil' },
                  { text: 'COBIT 9001', link: '#cobit9001' },
                  { text: 'IEEE 1016 (documentación de diseño)', link: '#ieee1016' },
                  { text: 'SWEBOK (cuerpo de conocimiento)', link: '#swebok' }
              ]
            },
            { 
              text: 'Estándares y Modelos para Pruebas de Software',
              link: '#EstandarPrueba',
              children: [
                  { text: 'IEEE 829 / ISO/IEC/IEEE 29119-3', link: '#ieee829' },
                  { text: 'ISO/IEC/IEEE 29119', link: '#iso29119' }
              ]
            },
            { 
              text: 'Tipos de Pruebas de Software',
              link: '#Tipoprueba',
              children: [
                  { text: 'Según el objetivo o propósito', link: '#prueba-objetivo' },
                  { text: 'Según el nivel de prueba', link: '#prueba-nivel' },
                  { text: 'Según el acceso al código', link: '#prueba-acceso' }
              ]
            }
        ]
    }
};


// ---------------------------- //
// Funciones para mostrar sidebar
// ---------------------------- //
function toggleSidebar(section) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    const mainContent = document.getElementById('mainContent');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarList = document.getElementById('sidebar-list');

    // Remover clase active de todos los botones
    document.querySelectorAll('.main_menu a').forEach(btn => {
        btn.classList.remove('active');
    });

    // Agregar clase active al botón actual
    const currentBtn = document.getElementById(section + '-btn');
    if (currentBtn) currentBtn.classList.add('active');

    // Obtener datos
    const data = sectionData[section];
    if (!data) return;

    // Actualizar título
    sidebarTitle.textContent = data.title;

    // Limpiar y generar lista con soporte para submenús
    sidebarList.innerHTML = data.items.map(item => {
        if (item.children) {
            return `
                <li class="sidebar-item has-children">
                    <a href="${item.link}" class="sidebar-link">${item.text}</a>
                    <ul class="submenu">
                        ${item.children.map(child => `
                            <li><a href="${child.link}" class="sidebar-link">${child.text}</a></li>
                        `).join('')}
                    </ul>
                </li>
            `;
        } else {
            return `
                <li class="sidebar-item">
                    <a href="${item.link}" class="sidebar-link">${item.text}</a>
                </li>
            `;
        }
    }).join('');

    // Mostrar sidebar
    sidebar.classList.add('active');
    overlay.classList.add('active');
    mainContent.classList.add('shifted');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    const mainContent = document.getElementById('mainContent');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    mainContent.classList.remove('shifted');

    // Remover clase active de todos los botones
    document.querySelectorAll('.main_menu a').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Cerrar sidebar con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});
// Habilitar toggle de submenús
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("sidebar-link") && 
        e.target.parentElement.classList.contains("has-children")) {
        
        e.preventDefault(); // Evita que salte al enlace "#..."
        const parent = e.target.parentElement;
        
        // Alternar clase .open
        parent.classList.toggle("open");
    }
});


