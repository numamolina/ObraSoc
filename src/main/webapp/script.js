document.addEventListener('DOMContentLoaded', function() {
    // Datos de los enlaces a mostrar
    const data = [
        { title: "Prevención de la Gripe", link: "https://www.cdc.gov/flu/prevent/index.html" },
        { title: "Información sobre el COVID-19", link: "https://www.cdc.gov/coronavirus/2019-ncov/index.html" },
        { title: "PAMI Vademecum", link: "https://servicios.pami.org.ar/vademecum/views/consultaPublica/listado.zul" }
    ];

    // Contenedor de novedades
    const novedadesSection1 = document.getElementById('contenido-iframe-1');
    const iframe1 = document.createElement('iframe');
    iframe1.src = data[0].link;
    iframe1.width = "100%";
    iframe1.height = "600px";
    iframe1.style.border = "none";
    novedadesSection1.appendChild(iframe1);

    const novedadesSection2 = document.getElementById('contenido-iframe-2');
    const iframe2 = document.createElement('iframe');
    iframe2.src = data[2].link;
    iframe2.width = "100%";
    iframe2.height = "600px";
    iframe2.style.border = "none";
    novedadesSection2.appendChild(iframe2);
});
