//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"eolica",
        titulo:"1. ¿Qué es la energía eólica y cómo se genera?",
        opcionA:"Es la energía producida por paneles solares que capturan la luz del sol.",
        opcionB:"Es la energía generada por la corriente de agua en los ríos y mares.",
        opcionC:"Es la energía obtenida del viento mediante aerogeneradores. ",
        opcionD:"Es la energía obtenida de la combustión de combustibles fósiles.",
        correcta:"c"
    },
    {
        id:2,
        categoria:"eolica",
        titulo:"¿Cuáles son las principales ventajas y desventajas de la energía eólica?",
        opcionA:"Es una fuente de energía limpia y renovable, sin emisiones contaminantes. ",
        opcionB:"Solo se puede utilizar en áreas muy cálidas.",
        opcionC:"Depende de combustibles fósiles para generar energía.",
        opcionD:"Produce altos niveles de contaminación y ruido.",
        correcta:"a"
    },
    {
        id:3,
        categoria:"eolica",
        titulo:"¿Cómo funcionan las turbinas eólicas y qué partes las componen?",
        opcionA:"Funcionan al convertir la energía del viento en electricidad y están compuestas por aspas, generador y torre.",
        opcionB:"Funcionan con energía solar y están compuestas por paneles solares.",
        opcionC:"Funcionan mediante el uso de agua y están compuestas por turbinas hidráulicas.",
        opcionD:"Funcionan con energía geotérmica y están compuestas por tuberías subterráneas.",
        correcta:"a"
    },
    {
        id:4,
        categoria:"eolica",
        titulo:"¿Cuáles son los tipos de aerogeneradores más comunes?",
        opcionA:"Aerogeneradores solares y de combustión.",
        opcionB:"Aerogeneradores de agua y de biomasa.",
        opcionC:"Aerogeneradores de carbón y de gas natural.",
        opcionD:"Aerogeneradores de eje horizontal y de eje vertical. ",
        correcta:"d"
    },
    {
        id:4,
        categoria:"eolica",
        titulo:"¿Qué impacto ambiental tiene la energía eólica en el entorno?",
        opcionA:"Genera altos niveles de emisiones de dióxido de carbono",
        opcionB:"Libera sustancias tóxicas al aire durante su funcionamiento.",
        opcionC:"Contamina el agua y el suelo con residuos químicos.",
        opcionD:"Tiene un bajo impacto ambiental, aunque puede afectar a aves y producir ruido. ",
        correcta:"d"
    },
    {
        id: 6,
        categoria: "hidroelectrica",
        titulo: "¿Qué es la energía hidroeléctrica y cómo se produce?",
        opcionA: "Es la energia obtenida del viento y se produce mediante turbinas",
        opcionB: "Es la energia obtenida del movimiento del agua que pasa por turbinas",
        opcionC: "Es la energia obtenida por paneles solares que capturan la luz",
        opcionD: "Es la energia obtenida a partir de combustiones quimicas en combustibles fociles",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "hidroelectrica",
        titulo: "¿Cuáles son las principales partes de una central hidroeléctrica?",
        opcionA: "Molinos de viento, aspas y generador",
        opcionB: "Paneles solare, inversor y baterias",
        opcionC: "reactor nuclear, turbina y condensador",
        opcionD: "prensa, turbina, generador, embalse ",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "hidroelectrica",
        titulo: "¿Còmo afecta el cambio climatico a la generacion de energia hidroelectrica?",
        opcionA: "Reduce la disponibilidad de agua en los rios disminuyendo la capacidad de generar",
        opcionB: "Aumenta la cantidad de aguas en los rios, facilitando la generacion de energia",
        opcionC: "No tiene ningun efecto en la generacion de energia hidroelectrica",
        opcionD: "Genera energia ilimitada debido a la lluvia constante",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "hidroelectrica",
        titulo: "¿Qué tipos de centrales hidroeléctricas existen y en qué se diferencian?",
        opcionA: "Solo existe un tipo que utiliza energia solar",
        opcionB: "Existen dos tipos: pequeñas y grandes,y se diferencian por el tamaño de las turbinas",
        opcionC: "Existen tres tipos: centrales de almacenamiento,de pesada y de bombeo",
        opcionD: "Solo hay un tipo que produce electricidad sin utilizar agua",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "hidroelectrica",
        titulo: "¿Que medidas de seguridad se implementas en las centrales hidroelectricas para evitar el efecto invernadero?",
        opcionA: "Uso de combustibles fósiles para generar electricidad.",
        opcionB: "Instalación de paneles solares en la central.",
        opcionC: "Implementación de sistemas de gestión de agua y monitoreo de emisiones.",
        opcionD: "Destrucción de los ecosistemas acuáticos cercanos.",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "geotermica",
        titulo: "¿Qué es la energía geotérmica y cuál es su origen?",
        opcionA: "Es la energía obtenida del calor almacenado en el interior de la Tierra.",
        opcionB: "Es la asociada a los cuerpos en movimiento.",
        opcionC: "Es aquella que se obtiene a partir de la fuerza del viento.",
        opcionD: "Es un tipo de energía que aprovecha el movimiento del agua",
        correcta: "a"
    },
    {
        id: 12,
        categoria: "geotermica",
        titulo: "¿Cuáles son las principales ventajas y desventajas de la energía geotérmica?",
        opcionA: "Produce energía limpia;Es limitada por la ubicación geográfica.",
        opcionB: "Fuente renovable y constante.;Puede causar desechos radiactivos.",
        opcionC: "No depende de combustibles fósiles;Depende de la cantidad de viento.",
        opcionD: "Baja emisión de CO₂.;Necesira rios o mares",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "geotermica",
        titulo: "¿Cómo funciona una planta de energía geotérmica y qué tecnologías utiliza?",
        opcionA: "Emplea grandes ventiladores para aprovechar el viento y mover turbinas",
        opcionB: "Utiliza grandes paneles para captar luz solar y generar electricidad.",
        opcionC: "Utiliza el calor subterráneo para calentar agua, que genera vapor y mueve una turbina.",
        opcionD: "Emplea grandes hélices en los océanos para aprovechar el movimiento de las olas.",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "geotermica",
        titulo: "¿En qué regiones del mundo es más viable utilizar energía geotérmica?",
        opcionA: "En áreas urbanas con alta densidad de población.",
        opcionB: "En áreas de desiertos con abundante luz solar, como el Sahara.",
        opcionC: "En áreas cercanas a ríos grandes, como el Amazonas.",
        opcionD: "En áreas con alta actividad geotérmica, como Islandia y Nueva Zelanda.",
        correcta: "d"
    },
    {
        id: 15,
        categoria: "geotermica",
        titulo: "¿Qué impacto ambiental y económico tiene la energía geotérmica?",
        opcionA: "Emite grandes cantidades de residuos radiactivos y tiene altos costos de mantenimiento",
        opcionB: "Tiene bajo impacto ambiental y puede ser económica a largo plazo.",
        opcionC: "Genera altos niveles de dióxido de carbono y es extremadamente cara.",
        opcionD: "Tiene alto impacto ambiental debido a la deforestación y contaminación del agua",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "biocombustibles",
        titulo: "¿Qué son los biocombustibles?",
        opcionA: "Producto químico sintéticos utilizados en las industrias.",
        opcionB: "Son combustibles fósiles extraídos del suelo.",
        opcionC: "Son combustibles líquidos o gaseosos producidos a partir de materiales biológicos",
        opcionD: "Son materiales reciclados utilizados para crear electricidad ",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "biocombustibles",
        titulo: "¿Qué materias primas se utilizan comúnmente para la producción del etanol?",
        opcionA: "Caña de azúcar y maíz ",
        opcionB: "Petróleo y gas natural ",
        opcionC: "Carbón y minerales",
        opcionD: "Plásticos y resina ",
        correcta: "a"
    },
    {
        id: 18,
        categoria: "biocombustibles",
        titulo: "Cómo contribuyen los combustibles a la reducción de emisiones de gases de efecto invernadero",
        opcionA: "Aumentan la quema de combustibles fósiles.",
        opcionB: "Sustituyen combustibles fósiles por fuentes renovables ",
        opcionC: "Incrementan la emisión de CO2.",
        opcionD: "Fomentan la deforestación.",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "biocombustibles",
        titulo: "¿Cuáles son las ventajas de los biocombustibles en comparación con los combustibles convencionales?",
        opcionA: "Mayor generación de residuos tóxicos ",
        opcionB: "Mayor emisión de gases de efecto invernadero ",
        opcionC: "Dependencia de fuentes no renovables ",
        opcionD: "Menor emisión de gases de efecto invernadero",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "biocombustibles",
        titulo: "Cuál es el impacto ambiental de la producción de biocombustibles en el uso de tierras y recursos hídricos",
        opcionA: "No tiene impacto significativo.",
        opcionB: "Reduce la demanda de agua y tierras.   ",
        opcionC: "Aumenta la deforestación Y consumo de agua",
        opcionD: "Fomenta la reforestación.",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "biomasa",
        titulo: "¿Qué es la biomasa?",
        opcionA: "La biomasa es la materia que utiliza las plantas como fuente de energía ",
        opcionB: "La biomasa utiliza a los animales como fuente de energía ",
        opcionC: "La biomasa es materia orgánica que se utiliza como fuente de energía.",
        opcionD: "Ninguna es correcta",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "biomasa",
        titulo: "¿Cuáles son las fuentes más comunes de biomasa?",
        opcionA: "Residuos agrícolas,  químicos,  orgánicos ",
        opcionB: "Residuos Agrícolas,  forestales , orgánicos",
        opcionC: "Rediduos químicos , orgánicos,  fósiles",
        opcionD: "Gas natural,Metales reciclados,Roca sedimentaria",
        correcta: "b"
    },
    {
        id: 23,
        categoria: "biomasa",
        titulo: "¿Cómo se convierte la biomasa en energía utilizable?",
        opcionA: "Electrólisis, Fotosíntesis, Fermentación",
        opcionB: "Electrificación , Fotosíntesis,  Gasificación ",
        opcionC: "Fotosíntesis,  Gasificación,  Combustión ",
        opcionD: "Combustión , Gasificación,  Pirólisis ",
        correcta: "d"
    },
    {
        id: 24,
        categoria: "biomasa",
        titulo: "Como se relaciona la biomasa con el cambio climático?",
        opcionA: "Por la liberación del Dióxido de carbono (CO2) ",
        opcionB: "La liberación de gas ",
        opcionC: "La liberación de toxinas en el ambiente ",
        opcionD: "Por la liberación de el oxigeno de las plantas ",
        correcta: "a"
    },
    {
        id: 25,
        categoria: "biomasa",
        titulo: "¿Qué tipos de residuos pueden ser utilizados como biomasa?",
        opcionA: "Desechos orgánicos , industriales",
        opcionB: "Desechos orgánicos,  forestales ",
        opcionC: "Desechos Químicos,  orgánicos ",
        opcionD: "Desechos forestales, minerales",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "mareo",
        titulo: "¿Cómo afecta la energía mareomotriz al medio ambiente marino? ",
        opcionA: "Alteración de los hábitats",
        opcionB: "Efectos en la fauna marina ",
        opcionC: "Ruido y vibraciones ",
        opcionD: "cambios en la circulación oceánica ",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "mareo",
        titulo: "¿Cuáles son las principales fuentes de energía mareomotriz?",
        opcionA: "Lluvias  , Vientos ,Tornados ",
        opcionB: "Mareas , Corrientes Oceánicas ,Olas  ",
        opcionC: "Rayos del sol , vientos , Olas ",
        opcionD: "Otros",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "mareo",
        titulo: "¿Cuáles son los principales sistemas de generación de energía mareomotriz?",
        opcionA: "Sistemas de energía eólicas ",
        opcionB: "Otros",
        opcionC: "Panel solar ",
        opcionD: "Centrales mareomotrices",
        correcta: "d"
    },
    {
        id: 29,
        categoria: "mareo",
        titulo: "¿Qué diferencias existen entre la energía mareomotriz y la energía undimotriz?",
        opcionA: "La energía mareomotriz se genera a partir del movimiento de las mareas y la E. Undimotriz a partir del movimiento de las olas ",
        opcionB: "La energía mareomotriz proviene de las olas del mar y la undimotriz del movimiento de las mareas.",
        opcionC: "La energía mareomotriz y undimotriz provienen de las olas del mar ",
        opcionD: "La energía mareomotriz y undimotriz provienen de las mareas",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "mareo",
        titulo: "¿En qué lugares del mundo se aprovecha la energía mareomotriz de forma significativa?",
        opcionA: "Oceanía ",
        opcionB: "America del Norte ",
        opcionC: "Europa ",
        opcionD: "America del Sur ",
        correcta: "c"
    }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})