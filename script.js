/* =========================================================
   Guillermo te pregunta · lógica del juego
   ---------------------------------------------------------
   ¿Querés cambiar las preguntas? Editá solo EVALUACION.
   ========================================================= */

/* ---------------------------------------------------------
   PREGUNTAS DE LA EVALUACIÓN (biología)
   Cada partida toma «porGrupo» preguntas al azar de cada grupo
   (ADN y lo que sigue / los otros temas); las que sobran se usan
   para el comodín «Cambiar pregunta».
   Cada pregunta tiene:
     tema        → posición del tema en EVALUACION.temas
     pregunta    → el enunciado
     opciones    → exactamente 4 textos
     correcta    → posición de la opción correcta (0, 1, 2 o 3)
     pista       → lo que dice Guillermo al pedir pista
     explicacion → se muestra después de responder
   Las opciones se mezclan solas en cada partida.
   --------------------------------------------------------- */
const EVALUACION = {
  porGrupo: 6,
  // grupo "adn": del ADN en adelante · grupo "otros": el resto de los temas
  temas: [
    { titulo: "ADN", grupo: "adn" },
    { titulo: "Niveles, bioelementos y biomoléculas", grupo: "adn" },
    { titulo: "Fecundación y cromosomas", grupo: "adn" },
    { titulo: "Método científico y microscopio", grupo: "otros" },
    { titulo: "Origen de la vida", grupo: "otros" },
    { titulo: "La célula", grupo: "otros" },
    { titulo: "Membrana y transporte", grupo: "otros" },
    { titulo: "Seres vivos y clasificación", grupo: "otros" }
  ],
  preguntas: [
    // Tema 0: ADN
    {
      tema: 0,
      pregunta: "¿Qué significa la sigla ADN?",
      opciones: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Átomo de nitrógeno", "Ácido dinucleico"],
      correcta: 0,
      pista: "Es un ácido nucleico, y la palabra larga tiene «desoxi» adelante.",
      explicacion: "ADN = Ácido desoxirribonucleico. El ácido ribonucleico es el ARN, otro ácido nucleico."
    },
    {
      tema: 0,
      pregunta: "¿Por qué se dice que el ADN es un «manual de instrucciones»?",
      opciones: ["Porque guarda la información genética para que el organismo crezca y funcione", "Porque produce la energía que la célula usa para funcionar", "Porque forma la membrana que rodea y protege a la célula", "Porque digiere los desechos que quedan dentro de la célula"],
      correcta: 0,
      pista: "Pensá en qué guarda el ADN.",
      explicacion: "El ADN contiene la información genética: las «instrucciones» para que el organismo nazca, crezca, se desarrolle, se reproduzca y funcione."
    },
    {
      tema: 0,
      pregunta: "El ADN es un polímero. ¿Cómo se llaman las unidades que lo forman?",
      opciones: ["Nucleótidos", "Fosfolípidos", "Ribosomas", "Cromosomas"],
      correcta: 0,
      pista: "Su nombre se parece a «ácido nucleico».",
      explicacion: "El ADN es un polímero formado por muchas unidades llamadas nucleótidos."
    },
    {
      tema: 0,
      pregunta: "Según la complementariedad de las bases, ¿con cuál se une la Adenina (A)?",
      opciones: ["Timina (T)", "Citosina (C)", "Guanina (G)", "Con otra Adenina (A)"],
      correcta: 0,
      pista: "Las parejas son A con T y G con C.",
      explicacion: "Las bases son complementarias: la Adenina se une con la Timina y la Guanina con la Citosina."
    },
    {
      tema: 0,
      pregunta: "¿Con qué base se une la Guanina (G)?",
      opciones: ["Citosina (C)", "Timina (T)", "Adenina (A)", "Con otra Guanina (G)"],
      correcta: 0,
      pista: "Si A va con T, ¿qué le queda a la G?",
      explicacion: "Complementariedad: Guanina con Citosina, y Adenina con Timina."
    },
    {
      tema: 0,
      pregunta: "¿Dónde está el ADN en una célula eucariota?",
      opciones: ["Dentro del núcleo, y es lineal", "Libre en el citoplasma, y es circular", "En la pared de celulosa", "Afuera de la membrana plasmática"],
      correcta: 0,
      pista: "«Eucariota» quiere decir que tiene núcleo.",
      explicacion: "En las eucariotas el ADN es lineal y está dentro del núcleo. En las procariotas (sin núcleo) es circular y está libre en el citoplasma."
    },
    {
      tema: 0,
      pregunta: "¿Por qué los hijos de la reproducción sexual no son idénticos a sus progenitores?",
      opciones: ["Porque su ADN mezcla la información genética de los 2 progenitores", "Porque tienen el ADN de un solo progenitor", "Porque no tienen ADN", "Porque el ADN cambia según lo que comen"],
      correcta: 0,
      pista: "¿Cuántos progenitores hay en la reproducción sexual?",
      explicacion: "El ADN tiene que ver con la herencia: los hijos reciben información de los 2 progenitores y por eso no son idénticos."
    },
    {
      tema: 0,
      pregunta: "Si se estirara el ADN de una célula, ¿cuánto mediría aproximadamente?",
      opciones: ["Unos 2 metros", "Unos 2 milímetros", "Unos 2 centímetros", "Unos 2 kilómetros"],
      correcta: 0,
      pista: "Es mucho más largo de lo que uno pensaría: más o menos lo que mide una puerta.",
      explicacion: "Estirado, el ADN mediría unos 2 metros. Por eso tiene que estar muy plegado para entrar en la célula."
    },

    // Tema 1: Niveles, bioelementos y biomoléculas
    {
      tema: 1,
      pregunta: "¿Qué hay en el nivel subatómico?",
      opciones: ["Protones, neutrones y electrones", "Células y tejidos", "Proteínas y lípidos", "Bacterias y hongos"],
      correcta: 0,
      pista: "«Sub-atómico» es lo que está por debajo del átomo: sus partes.",
      explicacion: "El nivel subatómico son las partículas que forman los átomos: protones, neutrones y electrones."
    },
    {
      tema: 1,
      pregunta: "¿Cuáles son los bioelementos, los átomos específicos de la vida?",
      opciones: ["C, H, O, N, P y S", "A, T, C y G", "Na, K y Cl", "Fe, Cu y Zn"],
      correcta: 0,
      pista: "Son carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre.",
      explicacion: "Los bioelementos son C (carbono), H (hidrógeno), O (oxígeno), N (nitrógeno), P (fósforo) y S (azufre). A, T, C y G son las bases del ADN."
    },
    {
      tema: 1,
      pregunta: "¿Cuál de estas NO es una biomolécula?",
      opciones: ["Un electrón", "Una proteína", "Un lípido", "Un carbohidrato"],
      correcta: 0,
      pista: "Una de las opciones es una partícula, no una molécula.",
      explicacion: "Las biomoléculas son proteínas, carbohidratos, lípidos, ácidos nucleicos (ADN, ARN) y agua. El electrón es una partícula subatómica."
    },
    {
      tema: 1,
      pregunta: "¿Qué es el ADN?",
      opciones: ["Una biomolécula (una macromolécula, un ácido nucleico)", "Un bioelemento", "Una partícula subatómica", "Un organelo de la célula"],
      correcta: 0,
      pista: "Es una molécula de la vida, y bastante grande.",
      explicacion: "El ADN es una biomolécula, una macromolécula del grupo de los ácidos nucleicos (junto con el ARN)."
    },

    // Tema 2: Fecundación y cromosomas
    {
      tema: 2,
      pregunta: "En la fecundación se unen el óvulo (23 cromosomas) y el espermatozoide (23). ¿Cuántos tiene el cigoto?",
      opciones: ["46", "23", "92", "12"],
      correcta: 0,
      pista: "Sumá los dos.",
      explicacion: "23 + 23 = 46. El cigoto es la primera célula del nuevo organismo y tiene la carga cromosómica completa."
    },
    {
      tema: 2,
      pregunta: "¿Qué es una célula haploide?",
      opciones: ["Una con la mitad de la carga cromosómica", "Una con la carga cromosómica completa", "Una célula sin núcleo", "Una célula que no tiene ADN"],
      correcta: 0,
      pista: "Pensá en los gametos: tienen 23.",
      explicacion: "Haploide = mitad de la carga cromosómica (como los gametos, con 23). Diploide = carga completa (46)."
    },
    {
      tema: 2,
      pregunta: "¿Qué son las células somáticas?",
      opciones: ["Todas las células del cuerpo excepto los gametos", "Solo los óvulos y los espermatozoides", "Solo las células del cerebro", "Las células que no tienen cromosomas"],
      correcta: 0,
      pista: "Son casi todas… menos las reproductoras.",
      explicacion: "Las células somáticas son todas las del cuerpo menos los gametos (óvulos y espermatozoides). Son diploides."
    },

    // Tema 3: Método científico y microscopio
    {
      tema: 3,
      pregunta: "En el método científico, ¿qué paso viene después de plantear la hipótesis?",
      opciones: ["La experimentación", "La observación", "La conclusión", "Las preguntas"],
      correcta: 0,
      pista: "A la hipótesis hay que ponerla a prueba.",
      explicacion: "Orden: observación, preguntas, hipótesis, experimentación, resultado, análisis del resultado y conclusión."
    },
    {
      tema: 3,
      pregunta: "¿Qué es una hipótesis?",
      opciones: ["Una idea o posible causa que se pone a prueba", "El resultado final del experimento", "El instrumento para ver cosas chicas", "Una ley que ya está comprobada"],
      correcta: 0,
      pista: "Es lo que uno cree que pasa, antes de probarlo.",
      explicacion: "La hipótesis es una idea o posible causa del problema observado. Después se prueba con la experimentación."
    },
    {
      tema: 3,
      pregunta: "¿Hasta cuántos aumentos puede ampliar un microscopio óptico?",
      opciones: ["Hasta 1000x", "Hasta 10x", "Hasta 100 000x", "Hasta 1 000 000x"],
      correcta: 0,
      pista: "Usa lentes de vidrio y luz visible: llega a mil.",
      explicacion: "El microscopio óptico usa lentes de vidrio y luz visible para ampliar objetos que no se ven a simple vista, hasta 1000x."
    },
    {
      tema: 3,
      pregunta: "¿Qué parte del microscopio controla la apertura del haz de luz?",
      opciones: ["El diafragma", "La platina", "El ocular", "El brazo"],
      correcta: 0,
      pista: "Son unas láminas metálicas que abren y cierran el paso de la luz.",
      explicacion: "El diafragma (láminas metálicas) regula la luz. La platina sostiene la preparación, por el ocular se mira y el brazo une la base con el tubo."
    },

    // Tema 4: Origen de la vida
    {
      tema: 4,
      pregunta: "¿Qué teoría decía que los gusanos y las moscas nacen de la materia orgánica putrefacta?",
      opciones: ["La generación espontánea", "La panspermia", "La evolución química", "El creacionismo"],
      correcta: 0,
      pista: "Decía que la vida aparecía «sola», de golpe.",
      explicacion: "La generación espontánea decía que los gusanos y las moscas salían de la materia putrefacta. Redi la refutó."
    },
    {
      tema: 4,
      pregunta: "¿Quién refutó la generación espontánea con un frasco abierto y otro cerrado?",
      opciones: ["Redi", "Oparin", "Miller", "Nadie: nunca se refutó"],
      correcta: 0,
      pista: "Oparin y Miller tienen que ver con la evolución química.",
      explicacion: "Redi puso carne en un frasco abierto y en otro cerrado: solo aparecieron gusanos en el abierto, donde las moscas podían llegar."
    },
    {
      tema: 4,
      pregunta: "¿Cuál es la teoría del origen de la vida más aceptada?",
      opciones: ["La evolución química (Oparin, comprobada por Miller)", "La panspermia", "La generación espontánea", "Ninguna: todas se descartaron"],
      correcta: 0,
      pista: "Habla de gases, radiación UV y descargas eléctricas.",
      explicacion: "Evolución química: con la energía de la radiación UV y de las descargas eléctricas, los gases formaron moléculas orgánicas que se concentraron en charcos."
    },

    // Tema 5: La célula
    {
      tema: 5,
      pregunta: "¿Qué organelo produce energía por medio de la respiración celular?",
      opciones: ["La mitocondria", "El cloroplasto", "El ribosoma", "El lisosoma"],
      correcta: 0,
      pista: "No es el de la fotosíntesis.",
      explicacion: "Las mitocondrias producen energía por respiración celular. Los cloroplastos hacen la fotosíntesis, los ribosomas fabrican proteínas y los lisosomas digieren desechos."
    },
    {
      tema: 5,
      pregunta: "¿Qué tiene la célula vegetal que NO tiene la animal?",
      opciones: ["Pared de celulosa y cloroplastos", "Centríolos y lisosomas", "Núcleo", "ADN"],
      correcta: 0,
      pista: "Las plantas hacen fotosíntesis y son más rígidas.",
      explicacion: "La célula vegetal tiene pared de celulosa, cloroplastos y una vacuola central grande. Centríolos y lisosomas son de la animal; núcleo y ADN tienen las dos."
    },
    {
      tema: 5,
      pregunta: "¿Cómo es una célula procariota?",
      opciones: ["No tiene núcleo y su ADN es circular", "Tiene núcleo y su ADN es lineal", "Tiene pared de celulosa y cloroplastos", "No tiene ADN"],
      correcta: 0,
      pista: "«Pro-cariota»: antes del núcleo.",
      explicacion: "La procariota no tiene núcleo: su ADN es circular y está libre en el citoplasma. Tiene ribosomas 70S y pared de peptidoglicano."
    },

    // Tema 6: Membrana y transporte
    {
      tema: 6,
      pregunta: "¿De qué está formada la membrana plasmática?",
      opciones: ["De una bicapa lipídica de fosfolípidos", "De celulosa", "De nucleótidos", "De peptidoglicano"],
      correcta: 0,
      pista: "Son dos capas de lípidos con cabeza y cola.",
      explicacion: "La membrana plasmática es una bicapa de fosfolípidos (cabeza hidrofílica, cola hidrofóbica), semipermeable y selectiva."
    },
    {
      tema: 6,
      pregunta: "¿Qué es la ósmosis?",
      opciones: ["El paso de solo agua a través de una membrana semipermeable", "El paso de gases usando ATP", "Una bomba que saca sodio de la célula", "La digestión de desechos"],
      correcta: 0,
      pista: "Es un transporte pasivo de una sola sustancia.",
      explicacion: "La ósmosis es un transporte pasivo (sin ATP) en el que solo pasa agua a través de una membrana semipermeable."
    },
    {
      tema: 6,
      pregunta: "¿Cuál de estos es un transporte activo?",
      opciones: ["La bomba sodio-potasio", "La difusión simple", "La difusión facilitada", "La ósmosis"],
      correcta: 0,
      pista: "El activo gasta ATP y va en contra del gradiente.",
      explicacion: "La bomba sodio-potasio es transporte activo primario: usa ATP y va en contra del gradiente. Las otras tres son pasivas."
    },

    // Tema 7: Seres vivos y clasificación
    {
      tema: 7,
      pregunta: "¿Qué es la homeostasis?",
      opciones: ["Mantener un equilibrio interno estable", "Fabricar moléculas complejas a partir de simples", "Responder a un estímulo con un arco reflejo", "Reproducirse con un solo progenitor"],
      correcta: 0,
      pista: "«Homeo» = igual, «stasis» = quedarse quieto.",
      explicacion: "La homeostasis es mantener estable el medio interno, por ejemplo con retroalimentación negativa."
    },
    {
      tema: 7,
      pregunta: "Según su nutrición, ¿qué es un organismo autótrofo?",
      opciones: ["El que sintetiza sus propios nutrientes", "El que come a otros seres vivos", "El que tiene una sola célula", "El que no tiene núcleo"],
      correcta: 0,
      pista: "«Auto» = por sí mismo.",
      explicacion: "El autótrofo fabrica sus propios nutrientes (como las plantas); el heterótrofo los toma de otros seres vivos."
    }
  ]
};

/* ---------------------------------------------------------
   AJUSTES DEL JUEGO
   --------------------------------------------------------- */
const AJUSTES = {
  puntosAcierto: 100,
  bonusRacha: 10,        // extra por cada acierto seguido…
  bonusRachaMax: 50,     // …hasta este tope
  costoPista: 25
};


/* ---------------------------------------------------------
   FRASES DE GUILLERMO
   --------------------------------------------------------- */
const FRASES = {
  bienvenida: "Hola, vamos a ver cuanto aprendiste",
  arranque: ["Dale con la primera.", "No te sientas presionado eh, que esta es solo la primera."],
  pregunta: ["Dale que vos podes", "Esta es facil.", "Y esta que te parece.", "¿Qué decís?", "Dale con otra."],
  acierto: ["¡Bien ahí!", "Buena", "Sabés un montón.", "Seguimos.", "Impeca"],
  racha: ["Que aura que Tenes, Tenes una racha de {n}.", "{n} seguidas! No te para nadie."],
  error: ["¡Casi! Probá de nuevo en la que viene.", "No pasa nada, así se aprende.", "Uh, esa era difícil. ¡Vamos que la próxima sale!", "Tranqui, ahora ya te la sabés."],
  pistaUsada: "Ya te di la pista de esta: {p}",
  // el enojo va de 1 (molesto) a 3 (perdió la paciencia)
  enojo: {
    // antes de morder: cortitas, para leer mientras se prepara
    intencion: {
      1: ["Mmm… ese borde se ve crocante.", "Perdoname, pero tengo que hacerlo.", "Un mordisquito maas", "Ese rincón se ve como un flan."],
      2: ["¡Ahí voy, eh!", "Esa esquina es mía.", "Mira que te como.", "Agarrame que me lo como"],
      3: ["¡GRRR! ¡Ya fue!", "Se me salio un tornillo", "¡Sostené el monitor, que peso mucho!", "Te hago un mataleon"]
    },
    intencionFinal: ["¡SE ME ACABÓ LA PACIENCIA!", "¡AHORA ME LO COMO ENTERO!", "¡NO VA A QUEDAR NI EL MARCO!"],
    // después del mordisco, según cuánto se enojó
    reaccion: {
      1: ["ñam ñam, esa no era.", "Mmm… te equivocaste. Ojo con la próxima.", "Uh, esa no. El borde del panel esta rico."],
      2: ["¡Otra mal! Ya me estoy calentando…", "¡Grrr! Este panel está quedando como galletita.", "Gordo concentrate que me lo como todo."],
      // {elias}: el nombre configurado en ELIAS
      3: ["¡ESTOY QUE MUERDO!.", "¡Me sale humo de las orejas (como {elias})", "¡GRRR! Este panel ya parece un alfajor de maizena."]
    },
    ultimo: ["¡Un error más y me lo como entero!.", "Me tenes arto ya de todo lo que te equivocas.", "La próxima mal y no queda ni la pregunta, ¿eh?"],
    grito: { 1: ["¡Ñam!", "¡Crunch!"], 2: ["¡ÑAM!", "¡CRUNCH!"], 3: ["¡ÑAAAM!", "¡GRRR!"] },
    // una correcta lo calma un rato (lo mordido no vuelve)
    alivio: ["ta, ta ya me calmo.", "Ah, mirá vos. Así me gusta… respiro hondo.", "por fin acertas una, disxelico.", "Uy Casi me da un hibishibis."],
    comido: "¡ÑAAAM! Me comí todo el panel. Estaba rico, como un alfajor de maizena"
  },
  amenaza: ["Pensala bien o sino te como.", "Pensala bien, que todavía me queda lugar para otro mordisco.", "Esta sacala bien, ¿eh? Te estoy mirando."]
};

/* =========================================================
   A partir de acá está la lógica. No hace falta tocarla
   para cambiar preguntas.
   ========================================================= */

/* =========================================================
   PANTALLAS
   ========================================================= */
let current = "start";

/* =========================================================
   ENOJO DE GUILLERMO Y MORDISCOS AL PANEL
   ---------------------------------------------------------
   Cada error enoja a Guillermo
   y le arranca un pedazo al panel principal (#panel).
   · El panel se dibuja en un canvas aparte (#panel-skin) que va
     DEBAJO del contenido: los mordiscos le sacan pedazos de verdad
     a la silueta, pero nunca recortan textos ni botones.
   · Los mordiscos comunes solo comen el margen libre (--bite-room):
     bordes y esquinas. Se puede seguir respondiendo mientras muerde.
   · El mordisco final es el único que se come el panel entero.
   · Todas las capas de efectos tienen pointer-events: none.
   ========================================================= */
const ENOJO = {
  caras: ["espera", "molesto", "enojado", "furioso"],
  // dónde muerde, en orden: esquinas y bordes, alternando lados
  lugares: [["esq", "tr"], ["lado", "left", 0.58], ["esq", "bl"], ["lado", "top", 0.62], ["lado", "right", 0.68],
    ["esq", "tl"], ["lado", "bottom", 0.4], ["esq", "br"], ["lado", "right", 0.3], ["lado", "left", 0.24],
    ["lado", "top", 0.3], ["lado", "bottom", 0.76]],
  celda: 4,    // tamaño del «píxel» del daño (igual que --px)
  holgura: 6   // distancia mínima entre un mordisco común y el contenido
};

const enojo = { errores: 0, limite: 0, nivel: 0, final: false };
// con este error ya no se puede aprobar (menos de la mitad bien): ahí viene el mordisco final
const limitePara = (total) => total - Math.ceil(total / 2) + 1;
const nivelPorProgreso = (p) => (p <= 0 ? 0 : p >= 0.55 ? 3 : p >= 0.28 ? 2 : 1);
const caraBase = () => ENOJO.caras[enojo.nivel];

// la postura (inclinarse hacia el panel) y el color van con el nivel de enojo
function fijarPostura(n) {
  $(".host").dataset.enojo = n;
  if (n) document.body.dataset.rabia = n;
  else delete document.body.dataset.rabia;
}

function enojoIniciar(limite, unidad = "error") {
  Object.assign(enojo, { errores: 0, limite, nivel: 0, final: false });
  fijarPostura(0);
  paciencia.mostrar(limite, unidad);
}

function enojoApagar() {
  Object.assign(enojo, { errores: 0, limite: 0, nivel: 0, final: false });
  fijarPostura(0);
  paciencia.ocultar();
}

// suma un error y arma el mordisco que le toca (el que llega al límite es el final)
function nuevoError(reaccion) {
  enojo.errores++;
  enojo.final = enojo.errores >= enojo.limite;
  enojo.nivel = enojo.final ? 3 : nivelPorProgreso(enojo.errores / enojo.limite);
  const quedan = enojo.limite - enojo.errores;
  return {
    final: enojo.final,
    nivel: enojo.nivel,
    escala: Math.min(1, (enojo.errores - 1) / Math.max(1, enojo.limite - 2)),
    perdidos: enojo.errores,
    reaccion: reaccion || fill(pickSin(quedan === 1 ? FRASES.enojo.ultimo : FRASES.enojo.reaccion[enojo.nivel]), { elias: ELIAS.nombre })
  };
}

/* ---------- dientes de paciencia (al lado de Guillermo) ---------- */
const paciencia = {
  el: $("#paciencia"),
  box: $("#paciencia-dientes"),
  unidad: "error",
  mostrar(total, unidad) {
    this.unidad = unidad;
    this.box.innerHTML = "";
    for (let k = 0; k < total; k++) {
      const d = document.createElement("span");
      d.className = "diente" + (k === total - 1 ? " ultimo" : "");
      this.box.appendChild(d);
    }
    this.el.hidden = !total;
    this.marcar(0);
  },
  ocultar() {
    this.el.hidden = true;
    this.box.innerHTML = "";
  },
  marcar(perdidos, animar) {
    const ds = [...this.box.children];
    ds.forEach((d, k) => {
      const roto = k < perdidos;
      if (roto && !d.classList.contains("roto") && animar && !reduceMotion.matches) {
        d.classList.remove("rompe");
        void d.offsetWidth;
        d.classList.add("rompe");
      }
      d.classList.toggle("roto", roto);
    });
    const quedan = Math.max(0, ds.length - perdidos);
    const que = this.unidad === "error" ? (quedan === 1 ? "error" : "errores") : quedan === 1 ? "mordisco" : "mordiscos";
    this.el.setAttribute("aria-label", `Paciencia de Guillermo: ${quedan === 1 ? "le queda" : "le quedan"} ${quedan} ${que} antes de comerse el panel`);
  }
};

// corta cualquier actuación (mordisco o rescate) y sus efectos, pero deja lo que ya se mordió
function cortarActuacion() {
  mordida.gen++;
  mordida.timers.forEach(clearTimeout);
  mordida.timers.clear();
  mordida.anims.forEach((a) => a.cancel());
  mordida.anims.clear();
  mordida.nodos.forEach((n) => n.remove());
  mordida.nodos.clear();
  Object.assign(mordida, { cola: [], corriendo: false, actuando: false, diferido: null, alComido: null });
  cortarRescate();
  cortarDisparo();
  guillermo.el.style.visibility = "";
  document.body.classList.remove("estallido");
  document.querySelectorAll("[data-screen]").forEach((s) => { s.inert = false; });
  $("#eaten").hidden = true;
}

// deja todo como nuevo: corta temporizadores y animaciones, borra migas y daño, el panel vuelve a crecer
function limpiarMordidas() {
  cortarActuacion();
  Object.assign(mordida, { marcas: [], bocados: [], siguiente: 0 });
  piel.dibujar();
}

function morderPanel(b) {
  mordida.cola.push(b);
  if (!mordida.corriendo) procesarCola();
}

async function procesarCola() {
  mordida.corriendo = true;
  const gen = mordida.gen;
  while (mordida.cola.length && gen === mordida.gen) {
    const b = mordida.cola.shift();
    b.rapido = mordida.cola.length > 0; // si se juntaron varios, los hace más cortitos
    await (b.final ? actuacionFinal(b) : actuacionMordida(b));
  }
  if (gen === mordida.gen) mordida.corriendo = false;
  if (current === "quiz") renderLifelines(); // terminó el mordisco: se habilita lo que corresponda (p. ej. el cambio)
}

/* =========================================================
   LA PIEL DEL PANEL
   Un canvas dibuja el fondo, el borde y la sombra del panel
   (igual que el CSS) y le saca los pedazos mordidos en una
   cuadrícula de 4 px, con contorno oscuro y borde claro alrededor
   de cada mordida, como el borde del propio panel.
   Coordenadas: (0, 0) es la esquina de afuera del contorno negro.
   ========================================================= */
const piel = {
  panel: $("#panel"),
  canvas: $("#panel-skin"),
  ctx: null,
  capa: null,
  pedido: false,
  init() {
    const ctx = this.canvas.getContext && this.canvas.getContext("2d");
    if (!ctx) return; // sin canvas queda el panel del CSS (sin mordiscos visibles)
    this.ctx = ctx;
    this.capa = document.createElement("canvas");
    this.panel.classList.add("con-piel");
    if (window.ResizeObserver) new ResizeObserver(() => this.pedir()).observe(this.panel);
    window.addEventListener("resize", () => this.pedir());
    this.dibujar();
  },
  pedir() {
    if (this.pedido) return;
    this.pedido = true;
    requestAnimationFrame(() => { this.pedido = false; this.dibujar(); });
  },
  // margen libre para morder (desde el borde de afuera) sin tocar el contenido
  margen() {
    const cs = getComputedStyle(this.panel);
    return Math.min(parseFloat(cs.paddingTop), parseFloat(cs.paddingRight), parseFloat(cs.paddingBottom), parseFloat(cs.paddingLeft)) + 4;
  },
  dibujar(destello) {
    const ctx = this.ctx;
    if (!ctx) return;
    const w = this.panel.offsetWidth;
    const h = this.panel.offsetHeight;
    if (!w || !h) return;
    const W = w + 8, H = h + 8;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const pw = Math.round(W * dpr), ph = Math.round((H + 10) * dpr);
    [this.canvas, this.capa].forEach((c) => {
      if (c.width !== pw || c.height !== ph) { c.width = pw; c.height = ph; }
    });
    this.canvas.style.width = `${W}px`;
    this.canvas.style.height = `${H + 10}px`;
    const L = this.capa.getContext("2d");
    [ctx, L].forEach((c) => { c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H + 10); });

    // panel sano: contorno, fondo con degradé y borde interno (como el box-shadow del CSS)
    L.fillStyle = "#0a0d22";
    L.fillRect(0, 0, W, H);
    const grad = L.createLinearGradient(0, 4, 0, h + 4);
    grad.addColorStop(0, "#18225a");
    grad.addColorStop(1, "#121b45");
    L.fillStyle = "#2f3d8f";
    L.fillRect(4, 4, w, h);
    L.fillStyle = grad;
    L.fillRect(8, 8, w - 8, h - 8);

    const C = ENOJO.celda, cols = Math.ceil(W / C), rows = Math.ceil(H / C);
    const formas = mordida.marcas.concat(mordida.bocados).map((m) => formaMordida(m, W, H, this.margen()));
    let gone = null;
    if (formas.length) {
      // 1 = mordido; 2 = mordido recién (para el destello del impacto)
      gone = new Uint8Array(cols * rows);
      formas.forEach((f) => {
        const marca = f.m === destello ? 2 : 1;
        const c0 = Math.max(0, Math.floor(f.x0 / C)), c1 = Math.min(cols - 1, Math.floor(f.x1 / C));
        const r0 = Math.max(0, Math.floor(f.y0 / C)), r1 = Math.min(rows - 1, Math.floor(f.y1 / C));
        for (let r = r0; r <= r1; r++) {
          for (let c = c0; c <= c1; c++) {
            const i = r * cols + c;
            if (!gone[i] && f.dentro(c * C + C / 2, r * C + C / 2)) gone[i] = marca;
          }
        }
      });
      // anillos alrededor de lo mordido: 1 = contorno oscuro, 3 = contorno recién mordido, 2 = borde claro
      const ring = new Uint8Array(cols * rows);
      const vecino = (r, c, test) => {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const rr = r + dr, cc = c + dc;
            if ((dr || dc) && rr >= 0 && cc >= 0 && rr < rows && cc < cols && test(rr * cols + cc)) return true;
          }
        }
        return false;
      };
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          if (gone[i]) continue;
          if (vecino(r, c, (j) => gone[j] === 2)) ring[i] = 3;
          else if (vecino(r, c, (j) => gone[j])) ring[i] = 1;
        }
      }
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          if (!gone[i] && !ring[i] && vecino(r, c, (j) => ring[j] === 1 || ring[j] === 3)) ring[i] = 2;
        }
      }
      L.save();
      L.beginPath();
      L.rect(4, 4, w, h);
      L.clip(); // el borde claro va solo adentro del panel
      for (let i = 0; i < ring.length; i++) {
        if (ring[i] !== 2) continue;
        const r = Math.floor(i / cols), c = i % cols;
        // algunas migas más oscuras en el borde para que se vea mordido, no cortado
        L.fillStyle = ((c * 7 + r * 13) % 5 === 0) ? "#202c6e" : "#2f3d8f";
        L.fillRect(c * C, r * C, C, C);
      }
      L.restore();
      for (let i = 0; i < ring.length; i++) {
        if (ring[i] !== 1 && ring[i] !== 3) continue;
        L.fillStyle = ring[i] === 3 ? "#ffd23f" : "#0a0d22";
        L.fillRect((i % cols) * C, Math.floor(i / cols) * C, C, C);
      }
    }

    // sombra de abajo (con los mismos agujeros, corrida 10 px)
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(0, 10, W, H);
    if (gone) {
      const vaciar = (c2d, dy) => {
        for (let r = 0; r < rows; r++) {
          let c = 0;
          while (c < cols) {
            if (!gone[r * cols + c]) { c++; continue; }
            let run = 1;
            while (c + run < cols && gone[r * cols + c + run]) run++;
            c2d.clearRect(c * C, r * C + dy, run * C, C);
            c += run;
          }
        }
      };
      vaciar(ctx, 10);
      vaciar(L, 0);
    }
    ctx.drawImage(this.capa, 0, 0, W, H + 10);
  }
};

// geometría de una mordida: un círculo con el borde festoneado por los dientes
function formaMordida(m, W, H, R0) {
  const D = R0 - ENOJO.holgura; // profundidad máxima de un mordisco común
  let cx, cy, Rt, r;
  let nx = 0, ny = 0; // hacia adentro del panel
  if (m.tipo === "lado") {
    const d = D * (0.78 + 0.22 * m.escala);
    const hw = d * (1.6 + 2 * m.escala); // medio ancho sobre el borde: crece con el enojo
    Rt = (d + (hw * hw) / d) / 2;
    const afuera = Rt - d;
    if (m.donde === "top") { cx = m.t * W; cy = -afuera; ny = 1; }
    else if (m.donde === "bottom") { cx = m.t * W; cy = H + afuera; ny = -1; }
    else if (m.donde === "left") { cx = -afuera; cy = m.t * H; nx = 1; }
    else { cx = W + afuera; cy = m.t * H; nx = -1; }
    r = Math.min(13, Math.max(8, d * 0.32));
  } else if (m.tipo === "esq") {
    // centrado en la esquina: no llega al contenido mientras Rt < R0·√2
    Rt = (R0 * Math.SQRT2 - ENOJO.holgura) * (0.8 + 0.2 * m.escala);
    cx = m.donde[1] === "l" ? 0 : W;
    cy = m.donde[0] === "t" ? 0 : H;
    nx = cx ? -1 : 1;
    ny = cy ? -1 : 1;
    r = Math.min(13, Math.max(8, Rt * 0.24));
  } else {
    // bocado del mordisco final: puede comerse cualquier cosa
    cx = m.fx * W;
    cy = m.fy * H;
    Rt = m.fr * Math.hypot(W, H);
    nx = W / 2 - cx;
    ny = H / 2 - cy;
    if (!nx && !ny) ny = 1;
    r = Math.min(26, Math.max(10, Rt * 0.1));
  }
  if (m.cura) { Rt *= 1 - m.cura; r *= 1 - m.cura * 0.5; } // el Rescate SSJ lo va cerrando
  const Rc = Rt - r;
  if (Rc <= 0.5) return { m, x0: 0, x1: -1, y0: 0, y1: -1, dentro: () => false };
  const paso = (r * 2.05) / Rc;          // separación entre dientes (se ve cada diente)
  const base = Math.atan2(ny, nx);       // el diente del medio apunta hacia adentro
  const azar = (j) => { const s = Math.sin((j + m.semilla) * 12.9898) * 43758.5453; return s - Math.floor(s); };
  const Rmax = Rc + r * 1.15;
  return {
    m,
    x0: cx - Rmax, x1: cx + Rmax, y0: cy - Rmax, y1: cy + Rmax,
    dentro(x, y) {
      const dx = x - cx, dy = y - cy, dd = dx * dx + dy * dy;
      if (dd <= Rc * Rc) return true;
      if (dd > Rmax * Rmax) return false;
      let a = Math.atan2(dy, dx) - base;
      a = Math.atan2(Math.sin(a), Math.cos(a)); // entre −π y π: la «costura» queda del lado de afuera
      const k = Math.round(a / paso);
      for (let j = k - 1; j <= k + 1; j++) {
        const ang = base + j * paso;
        const rj = r * (0.85 + 0.3 * azar(j));
        const tx = cx + Math.cos(ang) * Rc, ty = cy + Math.sin(ang) * Rc;
        if ((x - tx) ** 2 + (y - ty) ** 2 <= rj * rj) return true;
      }
      return false;
    }
  };
}

/* ---------- dónde muerde (siempre en una parte que se vea) ---------- */
function panelCaja() {
  const r = piel.panel.getBoundingClientRect();
  return { left: r.left - 4, top: r.top - 4, W: r.width + 8, H: r.height + 8 };
}

// punto del borde donde muerde, en la pantalla; o = hacia afuera; ang = giro de la cabeza (la boca mira al panel)
function contacto(m, c) {
  if (m.tipo === "bocado") return { x: c.left + m.fx * c.W, y: c.top + m.fy * c.H, ox: m.ox, oy: m.oy, ang: m.ang };
  const L = {
    top: [m.t, 0, 0, -1, 0], bottom: [m.t, 1, 0, 1, 180], left: [0, m.t, -1, 0, -90], right: [1, m.t, 1, 0, 90],
    tl: [0, 0, -1, -1, -45], tr: [1, 0, 1, -1, 45], bl: [0, 1, -1, 1, -135], br: [1, 1, 1, 1, 135]
  }[m.donde];
  const n = Math.hypot(L[2], L[3]);
  return { x: c.left + L[0] * c.W, y: c.top + L[1] * c.H, ox: L[2] / n, oy: L[3] / n, ang: L[4] };
}

function elegirLugar(escala) {
  const c = panelCaja();
  const vw = window.innerWidth, vh = window.innerHeight, M = 28;
  const total = ENOJO.lugares.length;
  for (let k = 0; k < total; k++) {
    const idx = (mordida.siguiente + k) % total;
    const [tipo, donde, t0] = ENOJO.lugares[idx];
    const m = { tipo, donde, t: t0 || 0, escala, semilla: Math.random() * 100 };
    if (donde === "left" || donde === "right") {
      // en los costados busca una altura que esté a la vista
      const a = Math.max(0.14, (M + 40 - c.top) / c.H), b = Math.min(0.86, (vh - M - 40 - c.top) / c.H);
      if (a > b) continue;
      m.t = Math.min(b, Math.max(a, m.t));
    }
    const p = contacto(m, c);
    if (p.x < -4 || p.x > vw + 4 || p.y < M || p.y > vh - M) continue;
    mordida.siguiente = idx + 1;
    return m;
  }
  const mid = (vh / 2 - c.top) / c.H;
  return { tipo: "lado", donde: "right", t: Math.min(0.86, Math.max(0.14, mid)), escala, semilla: Math.random() * 100 };
}

/* ---------- la cabeza que sale volando ---------- */
const anchoCabeza = () => (window.innerWidth <= 560 ? 78 : 104); // 1,5 y 2 píxeles de pantalla por píxel del dibujo
const pose = (x, y, r = 0, s = 1, sx = 1, sy = 1) => ({ x, y, r, s, sx, sy });
const poseCSS = (p) => `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${p.r}deg) scale(${p.s * p.sx}, ${p.s * p.sy})`;

function mover(el, to, ms, easing = "ease-out") {
  const from = el._pose || to;
  if (el._anim) el._anim.cancel();
  el._pose = to;
  el.style.transform = poseCSS(to);
  el._anim = ms > 0 ? animar(el, [{ transform: poseCSS(from) }, { transform: poseCSS(to) }], { duration: ms, easing }) : null;
}

function crearCabeza(c) {
  const el = nodoFx("chomper");
  el._w = anchoCabeza();
  el.style.width = `${el._w}px`;
  caraCabeza(el, c);
  return el;
}
function caraCabeza(el, c) { pintarCara(el, c); }

// la boca de la cara (girada junto con la cabeza) queda justo sobre el punto de contacto
// y la cabeza afuera del panel; extra la aleja un poco más hacia afuera
function poseMordiendo(p, w, extra = 0, s = 1, boca = GUILLE.boca.mordida) {
  const k = (w * s) / GUILLE.w;
  const bx = (boca[0] - GUILLE.w / 2) * k, by = (boca[1] - GUILLE.cabeza / 2) * k;
  const a = (p.ang * Math.PI) / 180, cos = Math.cos(a), sen = Math.sin(a);
  const lejos = 2 + extra;
  return pose(p.x - (bx * cos - by * sen) + p.ox * lejos, p.y - (bx * sen + by * cos) + p.oy * lejos, p.ang, s);
}

// de dónde sale: de su lugar si se lo ve; si no, entra por arriba de la pantalla
function poseInicio(el, p) {
  const g = guillermo.el.getBoundingClientRect();
  if (estaVisible(guillermo.el)) return { desdeHost: true, p: pose(g.left + g.width / 2, g.top + g.height * (GUILLE.cabeza / 2 / GUILLE.h), 0, g.width / el._w) };
  return { desdeHost: false, p: pose(Math.min(window.innerWidth - 40, Math.max(40, p.x)), -el._w, 0, 1) };
}

/* ---------- efectos: migas, carteles, vapor, sacudida ---------- */
function vapor() {
  if (reduceMotion.matches || !estaVisible(guillermo.el)) return;
  const g = guillermo.el.getBoundingClientRect();
  [-1, 1].forEach((lado, k) => {
    const n = nodoFx("vapor");
    const x = g.left + g.width * (0.5 + lado * 0.38), y = g.top + g.height * 0.12;
    const anim = animar(n, [
      { transform: `translate(${x}px, ${y}px) scale(0.5)`, opacity: 0.9 },
      { transform: `translate(${x + lado * 10}px, ${y - 26}px) scale(1)`, opacity: 0.8, offset: 0.5 },
      { transform: `translate(${x + lado * 18}px, ${y - 48}px) scale(1.3)`, opacity: 0 }
    ], { duration: 900, delay: k * 120, easing: "steps(6)", fill: "both" });
    efimero(n, anim, 1100);
  });
}

function aliento() {
  if (reduceMotion.matches || !estaVisible(guillermo.el)) return;
  const g = guillermo.el.getBoundingClientRect();
  const x = g.left + g.width * (GUILLE.boca.alivio[0] / GUILLE.w), y = g.top + g.height * (GUILLE.boca.alivio[1] / GUILLE.h);
  for (let k = 0; k < 3; k++) {
    const n = nodoFx("aliento");
    const anim = animar(n, [
      { transform: `translate(${x}px, ${y}px)`, opacity: 0.9 },
      { transform: `translate(${x + 30 + k * 10}px, ${y + 6 - k * 10}px)`, opacity: 0 }
    ], { duration: 700, delay: k * 110, easing: "steps(5)", fill: "both" });
    efimero(n, anim, 1000);
  }
}

function sacudir(fuerza) {
  if (reduceMotion.matches) return;
  const f = fuerza;
  animar(piel.panel, [
    { transform: "none" },
    { transform: `translate(${-f}px, ${f / 2}px)` },
    { transform: `translate(${f}px, ${-f / 2}px)` },
    { transform: `translate(${-f / 2}px, ${f / 3}px)` },
    { transform: "none" }
  ], { duration: 240, easing: "steps(4)" });
}

// cuando termina de actuar: reacciona y después dice lo que quedó pendiente
function terminarActuacion(texto, mood, animate) {
  mordida.actuando = false;
  const d = mordida.diferido;
  mordida.diferido = null;
  if (d && d.importante) { d.hacer(); return; }
  if (texto) guillermo.decir(texto, mood, animate);
  else guillermo.set(mood, animate);
  if (d) tarea(() => { if (mordida.actuando) mordida.diferido = d; else d.hacer(); }, 1400);
}

// una respuesta correcta con Guillermo enojado: suspira y se relaja un momento (lo mordido no vuelve)
function aliviar(mensaje, nivelDespues = enojo.nivel) {
  const hacer = () => {
    fijarPostura(Math.max(0, nivelDespues));
    guillermo.decir(mensaje, "alivio");
    sound.play("relief");
    aliento();
    if (!reduceMotion.matches) {
      animar($(".mascot-wrap"), [
        { transform: "translate(0, 0)" },
        { transform: "translate(-8px, 2px) rotate(-4deg) scale(1.04, 0.96)", offset: 0.4 },
        { transform: "translate(0, 0)" }
      ], { duration: 900, easing: "steps(5)", composite: "add" });
    }
    tarea(() => { if (guillermo.mood === "alivio") guillermo.set(caraBase()); }, 1500);
  };
  if (mordida.actuando) mordida.diferido = { hacer };
  else hacer();
}

/* =========================================================
   LA ACTUACIÓN DE UN MORDISCO
   intención (mira el panel, se tensa, abre la boca) → se lanza →
   impacto (pedazo, destello, migas, sacudida, ñam) → mastica →
   vuelve → reacciona. Dura ~1,6 s y nunca bloquea las respuestas.
   ========================================================= */
async function actuacionMordida(b) {
  mordida.actuando = true;
  const reduce = reduceMotion.matches;
  const n = Math.max(1, b.nivel);
  const m = elegirLugar(b.escala);
  let p = contacto(m, panelCaja());
  const g = guillermo.el.getBoundingClientRect();
  const mirar = { dx: p.x > g.right ? 1 : p.x < g.left ? -1 : 0 }; // hacia dónde se echa para atrás
  const tenso = cara(["molesto", "molesto", "enojado", "furioso"][n], "Guillermo mira el panel con hambre y se prepara");
  const abierta = cara("mordida", "Guillermo abre la boca para morder el panel");
  const muerde = cara("mordida", "Guillermo muerde el panel");
  const mastica = cara("lleno", "Guillermo mastica un pedazo del panel");

  // 1) intención: mira el panel, se echa para atrás y gruñe
  fijarPostura(n);
  guillermo.set(tenso);
  guillermo.decir(pickSin(FRASES.enojo.intencion[n]));
  sound.play("windup");
  let cabeza = null, inicio = null;
  const tiempoAviso = b.rapido ? 160 : 420;
  if (!reduce) {
    if (estaVisible(guillermo.el)) {
      animar(guillermo.el, [{ transform: "none" }, { transform: `translate(${-6 * (mirar.dx || 1)}px, 5px) scale(1.06, 0.9)` }], { duration: tiempoAviso, easing: "steps(3)", fill: "forwards" });
    } else {
      // no se lo ve (celular con la página bajada): asoma por arriba, cerca del lugar donde va a morder
      cabeza = crearCabeza(tenso);
      inicio = poseInicio(cabeza, p);
      mover(cabeza, inicio.p, 0);
      mover(cabeza, poseMordiendo(p, cabeza._w, 46), tiempoAviso * 0.7, "ease-out");
      const t = poseMordiendo(p, cabeza._w, 46);
      tarea(() => cartel(pickSin(FRASES.enojo.grito[n]), t.x, t.y - cabeza._w * 0.7, "grito", 700), 60);
    }
  }
  if (!(await esperar(tiempoAviso))) return;
  guillermo.set(abierta);
  if (cabeza) caraCabeza(cabeza, abierta);
  if (!(await esperar(b.rapido ? 80 : 170))) return;

  // 2) se lanza (con menos movimiento se queda en su lugar)
  if (!reduce) {
    p = contacto(m, panelCaja()); // vuelve a medir: el panel pudo cambiar de alto
    if (!cabeza) {
      cabeza = crearCabeza(abierta);
      inicio = poseInicio(cabeza, p);
      mover(cabeza, inicio.p, 0);
      guillermo.el.style.visibility = "hidden";
    }
    const fin = poseMordiendo(p, cabeza._w);
    const medio = pose((cabeza._pose.x + fin.x) / 2, Math.min(cabeza._pose.y, fin.y) - 50, fin.ang / 2, (cabeza._pose.s + 1) / 2, 1.12, 0.9);
    mover(cabeza, medio, 110, "ease-in");
    if (!(await esperar(110))) return;
    mover(cabeza, pose(fin.x, fin.y, fin.r, 1, 1.1, 0.92), 110, "ease-in");
    if (!(await esperar(110))) return;
  }

  // 3) impacto: el pedazo sale de verdad del panel
  mordida.marcas.push(m);
  piel.dibujar(m);
  paciencia.marcar(b.perdidos, true);
  sound.play("nam");
  guillermo.set(muerde);
  if (cabeza) { caraCabeza(cabeza, muerde); mover(cabeza, poseMordiendo(p, cabeza._w), 0); }
  sacudir(2 + n * 1.5);
  migas(p.x, p.y, p.ox, p.oy, 8 + n * 4);
  cartel(pickSin(FRASES.enojo.grito[n]), p.x + p.ox * 40, p.y + p.oy * 40 - 10);
  if (!(await esperar(110))) return;
  piel.dibujar();

  // 4) tironea y mastica
  if (cabeza) {
    for (let k = 0; k < 2; k++) {
      mover(cabeza, poseMordiendo(p, cabeza._w, 10), 80, "ease-out");
      caraCabeza(cabeza, k ? muerde : mastica);
      if (!(await esperar(90))) return;
      mover(cabeza, poseMordiendo(p, cabeza._w, 2), 80, "ease-in");
      if (!(await esperar(90))) return;
    }
    // 5) vuelve a su lugar
    caraCabeza(cabeza, mastica);
    mover(cabeza, inicio.p, b.rapido ? 220 : 340, "ease-in");
    if (!(await esperar(b.rapido ? 220 : 340))) return;
    quitarNodo(cabeza);
  } else if (!(await esperar(320))) return;
  guillermo.el.getAnimations && guillermo.el.getAnimations().forEach((a) => { if (mordida.anims.has(a)) a.cancel(); });
  guillermo.el.style.visibility = "";

  // 6) reacciona según lo enojado que quedó
  terminarActuacion(b.reaccion, caraBase(), n >= 2 ? "shake" : null);
  if (n >= 2) vapor();
}

/* =========================================================
   EL MORDISCO FINAL: el punto máximo del enojo
   Una anticipación larga (tiembla, se pone rojo, abre la boca
   gigante) y tres bocados que se comen el panel entero.
   La respuesta que lo dispara ya quedó contada: el mordisco final
   es solo la reacción, y después quedan los resultados.
   ========================================================= */
async function actuacionFinal(b) {
  mordida.actuando = true;
  const reduce = reduceMotion.matches;
  const c0 = panelCaja();
  const g = guillermo.el.getBoundingClientRect();
  // entra por el lado más cercano a Guillermo que se vea
  const vh = window.innerHeight;
  const fy = Math.min(0.85, Math.max(0.15, (Math.min(vh, c0.top + c0.H) / 2 + Math.max(0, c0.top) / 2 - c0.top) / c0.H));
  const lado = g.right <= c0.left + 20
    ? { fx: 0, fy, ox: -1, oy: 0, ang: -90 }
    : { fx: Math.min(0.8, Math.max(0.2, (g.left + g.width / 2 - c0.left) / c0.W)), fy: 0, ox: 0, oy: -1, ang: 0 };
  if (lado.fy === 0 && c0.top < 30) Object.assign(lado, { fx: 0, fy, ox: -1, oy: 0, ang: -90 });
  const furia = cara("furioso", "Guillermo perdió la paciencia: temblando y apretando los dientes");
  const bocaza = cara("mordidaFinal", "Guillermo abre una boca gigante para comerse el panel");
  const muerde = cara("mordidaFinal", "Guillermo se come el panel");
  const BOCA = GUILLE.boca.mordidaFinal;

  // 1) pierde la paciencia: tiembla cada vez más fuerte
  fijarPostura(3);
  guillermo.set(furia);
  guillermo.decir(pickSin(FRASES.enojo.intencionFinal));
  sound.play("growl");
  if (!reduce) {
    document.body.classList.remove("estallido");
    void document.body.offsetWidth;
    document.body.classList.add("estallido");
    animar(guillermo.el, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((k) => ({
      transform: `translate(${(k % 2 ? 1 : -1) * (1 + k * 0.5)}px, ${k * 0.4}px) scale(${1 + k * 0.006}, ${1 - k * 0.008})`
    })), { duration: 900, easing: "steps(12)", fill: "forwards" });
  }
  if (!(await esperar(b.rapido ? 450 : 900))) return;
  guillermo.set(bocaza);
  if (!(await esperar(reduce ? 200 : 380))) return;

  // 2) se lanza con la boca gigante
  let cabeza = null, inicio = null;
  const p = () => contacto({ tipo: "bocado", ...lado }, panelCaja());
  if (!reduce) {
    cabeza = crearCabeza(bocaza);
    inicio = poseInicio(cabeza, p());
    mover(cabeza, inicio.p, 0);
    guillermo.el.style.visibility = "hidden";
    const fin = poseMordiendo(p(), cabeza._w, 0, 1.4, BOCA);
    mover(cabeza, pose((cabeza._pose.x + fin.x) / 2, Math.min(cabeza._pose.y, fin.y) - 70, fin.ang / 2, 1.2, 1.15, 0.88), 140, "ease-in");
    if (!(await esperar(140))) return;
    mover(cabeza, fin, 120, "ease-in");
    if (!(await esperar(120))) return;
  }

  // 3) tres bocados que se comen todo
  paciencia.marcar(Infinity, true);
  const pasos = [
    { tipo: "bocado", fx: lado.fx, fy: lado.fy, fr: 0.34, semilla: 3 },
    { tipo: "bocado", fx: 0.5 + (lado.fx - 0.5) * 0.3, fy: 0.5 + (lado.fy - 0.5) * 0.3, fr: 0.46, semilla: 7 },
    { tipo: "bocado", fx: 0.5, fy: 0.5, fr: 1.4, semilla: 11 }
  ];
  const pantalla = document.querySelector("[data-screen]:not([hidden])");
  for (let k = 0; k < pasos.length; k++) {
    const caja = panelCaja();
    const centro = { x: caja.left + pasos[k].fx * caja.W, y: caja.top + pasos[k].fy * caja.H };
    mordida.bocados.push(pasos[k]);
    piel.dibujar(pasos[k]);
    sound.play(k === 2 ? "namBig" : "nam");
    sacudir(8 + k * 3);
    migas(centro.x, centro.y, lado.ox, lado.oy - 0.5, 18 + k * 8);
    cartel(k === 2 ? "¡¡ÑAAAM!!" : "¡ÑAM!", centro.x, centro.y - 20, k === 2 ? "nam-pop grande" : "nam-pop", 800);
    if (cabeza) {
      caraCabeza(cabeza, muerde);
      // la boca va al centro del bocado (cada vez más grande)
      if (k) mover(cabeza, poseMordiendo({ ...centro, ox: 0, oy: 0, ang: 0 }, cabeza._w, 0, 1.4 + k * 0.4, BOCA), 0);
    }
    if (k === 1 && pantalla) {
      // el contenido se queda sin piso y se cae
      pantalla.inert = true;
      [...pantalla.children].forEach((el, j) => {
        const rot = (j % 2 ? 1 : -1) * (4 + j * 2);
        animar(el, reduce
          ? [{ opacity: 1 }, { opacity: 0 }]
          : [
            { transform: "none", opacity: 1 },
            { transform: `translate(${rot * 2}px, -12px) rotate(${rot / 2}deg)`, opacity: 1, offset: 0.25 },
            { transform: `translate(${rot * 4}px, ${window.innerHeight}px) rotate(${rot * 3}deg)`, opacity: 0 }
          ], { duration: reduce ? 300 : 800, delay: j * 50, easing: "ease-in", fill: "forwards" });
      });
    }
    if (!(await esperar(110))) return;
    piel.dibujar();
    if (cabeza) caraCabeza(cabeza, bocaza);
    if (!(await esperar(k === 2 ? 240 : 170))) return;
  }

  // 4) mastica satisfecho y se va
  guillermo.el.getAnimations && guillermo.el.getAnimations().forEach((a) => { if (mordida.anims.has(a)) a.cancel(); });
  if (cabeza) {
    caraCabeza(cabeza, "lleno");
    if (!(await esperar(420))) return;
    mover(cabeza, inicio.p, 360, "ease-in");
    if (!(await esperar(360))) return;
    quitarNodo(cabeza);
  } else if (!(await esperar(300))) return;
  guillermo.el.style.visibility = "";
  terminarActuacion(b.reaccion || FRASES.enojo.comido, "lleno");
  if (b.alTerminar) b.alTerminar();
}

// después del mordisco final de una partida: Guillermo se comió todo y quedan los resultados
function comioTodo(detalle, alVerResultados) {
  const o = $("#eaten");
  o.hidden = false;
  pintarCara($("#eaten-guillermo"), "lleno");
  $("#eaten-detail").textContent = detalle;
  mordida.alComido = alVerResultados;
  const r = piel.panel.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + Math.min(r.height, window.innerHeight) / 2;
  if (!reduceMotion.matches && o.animate) {
    o.animate([
      { clipPath: `circle(0px at ${cx}px ${cy}px)` },
      { clipPath: `circle(150vmax at ${cx}px ${cy}px)` }
    ], { duration: 700, easing: "ease-in" });
  }
  $("#eaten-btn").focus({ preventScroll: true });
}

// cambiar de pantalla siempre deja el panel sano: corta mordiscos, migas y temporizadores
function show(name, focusEl) {
  limpiarMordidas();
  enojoApagar();
  guillermo.set("espera"); // si se cortó una mordida, no queda con cara de ataque
  document.querySelectorAll("[data-screen]").forEach((s) => { s.hidden = true; s.classList.remove("enter"); });
  const screen = $("#screen-" + name);
  screen.hidden = false;
  if (!reduceMotion.matches) screen.classList.add("enter");
  current = name;
  (focusEl || $("#panel")).focus({ preventScroll: true });
  if (window.innerWidth <= 820) window.scrollTo({ top: 0, behavior: "auto" });
}

function updateRecords() {
  const notas = store.get("evaluaciones", []).map((e) => e.nota);
  $("#best-quiz").textContent = notas.length ? Math.max(...notas) : "–";
}

function bump(el, value) {
  el.textContent = value;
  if (reduceMotion.matches) return;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

function goHome() {
  updateRecords();
  renderEvalHistory();
  mostrarRanking();
  show("start");
  guillermo.say(FRASES.bienvenida, "espera");
}

/* =========================================================
   MODO PRINCIPAL: PREGUNTAS
   ========================================================= */
const quiz = { deck: [], index: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, answered: false, hintUsed: false, mistakes: [], lesson: null, porTema: {},
  reserve: [], comodines: {}, busy: false, alumno: "", personaje: null };

const prepareQuestion = (q) => ({ ...q, mezcla: shuffle(q.opciones.map((texto, i) => ({ texto, ok: i === q.correcta }))) });

// la evaluación: «porGrupo» preguntas al azar de cada grupo; las que sobran quedan de reserva para Elías
function startQuiz(lesson = "eval") {
  quiz.lesson = lesson;
  const elegidas = [];
  quiz.reserve = [];
  ["adn", "otros"].forEach((grupo) => {
    const mixed = shuffle(EVALUACION.preguntas.filter((p) => EVALUACION.temas[p.tema].grupo === grupo));
    elegidas.push(...mixed.slice(0, EVALUACION.porGrupo));
    quiz.reserve.push(...mixed.slice(EVALUACION.porGrupo));
  });
  quiz.deck = shuffle(elegidas).map(prepareQuestion);
  quiz.comodines = { rappi: true, cambio: true, ssj: true }; // el Rescate SSJ está en todos los modos con mordiscos
  clase.partida = lesson === "eval" && clase.sala ? nuevoId() : null;
  clase.mandar("unirse", { nombre: (quiz.alumno || "").replace(/\s+/g, " ").trim().slice(0, 24) || "Sin nombre", personaje: quiz.personaje || null, total: quiz.deck.length });
  rescate.estado = "disponible";
  Object.assign(quiz, { index: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, mistakes: [], porTema: {}, busy: false, terminado: false });
  $("#hint-btn").hidden = lesson === "eval";
  $("#life-help").hidden = lesson !== "eval";
  $("#q-score").textContent = "0";
  $("#q-streak").textContent = "0";
  sound.play("start");
  show("quiz", $("#q-text"));
  enojoIniciar(limitePara(quiz.deck.length));
  renderQuestion(lesson === "eval"
    ? `Arrancamos${quiz.alumno ? ", " + quiz.alumno : ""}! Tenés 3 comodines: Rappi, ${ELIAS.nombre} (cambia la pregunta) y Kamil. Usalos bien.`
    : pick(FRASES.arranque));
}

function renderQuestion(intro) {
  const q = quiz.deck[quiz.index];
  const total = quiz.deck.length;
  quiz.answered = false;
  quiz.hintUsed = false;

  $("#q-progress").textContent = `${quiz.index + 1}/${total}`;
  $("#q-bar").style.width = `${(quiz.index / total) * 100}%`;
  $("#q-category").textContent = q.categoria;
  $("#q-text").textContent = q.pregunta;
  $("#q-feedback").hidden = true;
  $("#next-btn").hidden = true;

  const hint = $("#hint-btn");
  hint.disabled = false;
  hint.textContent = `💡 Pista (−${AJUSTES.costoPista})`;

  const box = $("#q-options");
  box.innerHTML = "";
  q.mezcla.forEach((opt, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.dataset.index = i;
    b.innerHTML = `<span class="key" aria-hidden="true">${i + 1}</span><span class="label"></span><span class="mark"></span>`;
    b.querySelector(".label").textContent = opt.texto;
    b.addEventListener("click", () => answerQuestion(i));
    box.appendChild(b);
  });

  quiz.busy = false;
  $("#rappi-rider").hidden = true;
  renderLifelines();
  guillermo.say(intro || pickSin(enojo.nivel >= 2 ? FRASES.amenaza : FRASES.pregunta), caraBase());
  $("#q-text").focus({ preventScroll: true });
}

function answerQuestion(i) {
  if (quiz.answered || quiz.busy || current !== "quiz") return; // bloqueo: una sola respuesta por pregunta
  const opt = quiz.deck[quiz.index].mezcla[i];
  if (!opt || opt.eliminada) return; // las opciones que arrolló Rappi no se pueden elegir
  quiz.answered = true;

  const q = quiz.deck[quiz.index];
  const chosen = q.mezcla[i];
  const right = q.mezcla.find((o) => o.ok);
  const buttons = $("#q-options").querySelectorAll(".option");

  buttons.forEach((b, j) => {
    b.disabled = true;
    const opt = q.mezcla[j];
    if (opt.ok) { b.classList.add("correct"); b.querySelector(".mark").textContent = "✓ Correcta"; }
    else if (j === i) { b.classList.add("wrong"); b.querySelector(".mark").textContent = "✗ Tu respuesta"; }
    else b.classList.add("dim");
  });
  cerrarPregunta(chosen.ok, chosen.texto, right.texto);
}

// lo que pasa después de responder
// respuesta: texto propio para la línea de la respuesta (si no, se arma con «correcta»)
function cerrarPregunta(ok, elegida, correcta, respuesta) {
  const q = quiz.deck[quiz.index];
  if (quiz.lesson === "eval") clase.mandar("respuesta", { pregunta: quiz.index, ok });
  $("#hint-btn").disabled = true;
  renderLifelines();

  if (q.tema !== undefined) {
    const t = (quiz.porTema[q.tema] = quiz.porTema[q.tema] || { ok: 0, total: 0 });
    t.total++;
    if (ok) t.ok++;
  }

  const fb = $("#q-feedback");
  fb.hidden = false;
  if (ok) {
    quiz.streak++;
    quiz.correct++;
    quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak);
    const bonus = Math.min((quiz.streak - 1) * AJUSTES.bonusRacha, AJUSTES.bonusRachaMax);
    const cost = quiz.hintUsed ? AJUSTES.costoPista : 0;
    const earned = AJUSTES.puntosAcierto + bonus - cost;
    quiz.score += earned;
    const extras = [bonus && `+${bonus} de racha`, cost && `−${cost} por la pista`].filter(Boolean);
    fb.className = "feedback good";
    $("#q-feedback-title").textContent = `✔ ¡Correcto! +${earned}` + (extras.length ? ` (${extras.join(", ")})` : "");
    $("#q-feedback-answer").textContent = respuesta || `La respuesta es: ${correcta}`;
    sound.play("good");
    // si estaba enojado, una correcta lo calma un momento
    if (enojo.nivel >= 1) aliviar(pickSin(FRASES.enojo.alivio));
    else guillermo.say(quiz.streak >= 3 ? fill(pick(FRASES.racha), { n: quiz.streak }) : pickSin(FRASES.acierto), "alegria", "jump");
  } else {
    quiz.streak = 0;
    quiz.mistakes.push({ pregunta: q.pregunta, elegida, correcta, explicacion: q.explicacion });
    fb.className = "feedback bad";
    $("#q-feedback-title").textContent = "✘ Esta no era";
    $("#q-feedback-answer").textContent = respuesta || `La respuesta correcta es: ${correcta}`;
    sound.play("bad");
    // la respuesta ya quedó contada; el mordisco es solo la reacción y no frena el juego
    const b = nuevoError();
    renderRescate();
    if (b.final) {
      b.alTerminar = () => comioTodo(
        `Erraste ${enojo.errores} preguntas y en la ${quiz.index + 1} de ${quiz.deck.length} me comí el panel entero. Las que faltaban cuentan como no respondidas.`,
        showResults
      );
    }
    morderPanel(b);
  }
  $("#q-feedback-expl").textContent = q.explicacion;
  bump($("#q-score"), quiz.score);
  bump($("#q-streak"), quiz.streak);
  $("#q-bar").style.width = `${((quiz.index + 1) / quiz.deck.length) * 100}%`;

  const next = $("#next-btn");
  next.textContent = quiz.index + 1 < quiz.deck.length ? "Siguiente ▶" : "Ver resultados ▶";
  next.hidden = enojo.final;
  if (!enojo.final) next.focus({ preventScroll: true });
}

function useHint() {
  if (quiz.lesson === "eval") return; // en la evaluación no hay pista
  if (quiz.answered || quiz.hintUsed || quiz.busy || current !== "quiz") return;
  quiz.hintUsed = true; // el costo se descuenta de los puntos de esta pregunta si la acertás
  const hint = $("#hint-btn");
  hint.disabled = true;
  hint.textContent = "💡 Pista usada";
  sound.play("hint");
  guillermo.say("Pista: " + quiz.deck[quiz.index].pista, "pensando", null, true);
}

function nextQuestion() {
  if (!quiz.answered || quiz.busy || current !== "quiz" || enojo.final) return; // si se comió la página, solo quedan los resultados
  sound.play("click");
  quiz.index++;
  if (quiz.index < quiz.deck.length) renderQuestion();
  else showResults();
}

function showResults() {
  if (quiz.terminado) return; // una sola vez por partida
  quiz.terminado = true;
  const comido = enojo.final;
  const mordidas = enojo.errores;
  const nivel = enojo.nivel;
  const total = quiz.deck.length;
  const best = store.get("bestQuiz", 0);
  const isRecord = quiz.lesson === null && quiz.score > best; // el récord es solo de la partida normal
  if (isRecord) store.set("bestQuiz", quiz.score);
  updateRecords();

  $("#r-score").textContent = quiz.score;
  $("#r-correct").textContent = `${quiz.correct}/${total}`;
  $("#r-streak").textContent = quiz.bestStreak;
  $("#r-record").hidden = !isRecord;
  const ready = renderEval(total, comido);
  $("#r-ready").hidden = false;

  const list = $("#r-review");
  list.innerHTML = "";
  if (!quiz.mistakes.length) {
    const li = document.createElement("li");
    li.className = "review-empty";
    li.textContent = "★ ¡Perfecto! No hay nada para repasar.";
    list.appendChild(li);
  }
  quiz.mistakes.forEach((m) => {
    const li = document.createElement("li");
    li.innerHTML = `<p class="rq"></p><p class="ra"><span class="rx"></span><br>Correcta: <strong></strong></p><p class="re"></p>`;
    li.querySelector(".rq").textContent = m.pregunta;
    li.querySelector(".rx").textContent = `✘ Respondiste: ${m.elegida}`;
    li.querySelector("strong").textContent = `✔ ${m.correcta}`;
    li.querySelector(".re").textContent = m.explicacion;
    list.appendChild(li);
  });

  const ratio = quiz.correct / total;
  let msg = ready.mensaje;

  if (comido) msg += " ¡Y me comí el panel entero! Las que faltaban cuentan como no respondidas.";
  else if (mordidas >= 2) msg += ` Por cierto: le di ${mordidas} mordiscos al panel. Ya le volvió a crecer.`;
  sound.play("end");
  show("results"); // para leer los resultados, el panel vuelve a crecer
  guillermo.say(isRecord ? msg + " ¡Y es nuevo récord!" : msg, comido ? "lleno" : nivel >= 3 ? "molesto" : ratio >= 0.4 ? "alegria" : "animo", "jump");
}

/* =========================================================
   EVALUACIÓN PARA LOS ALUMNOS (con comodines)
   ========================================================= */
EVALUACION.preguntas.forEach((p) => { p.categoria = "Evaluación · " + EVALUACION.temas[p.tema].titulo; });

const COMODINES = {
  rappi: { label: "🛵 Llamar a Rappi" }
};

// el ranking del inicio
async function mostrarRanking() {
  const box = $("#ranking-inicio");
  box.hidden = !ranking.activo();
  if (box.hidden) return;
  const estado = $("#ranking-estado");
  estado.textContent = "Cargando…";
  try {
    const filas = await ranking.top();
    pintarRanking($("#ranking-lista"), filas);
    estado.textContent = filas.length ? "" : "Todavía no hay nadie. ¡Jugá y estrenalo!";
  } catch {
    estado.textContent = "No se pudo cargar el ranking. Revisá la conexión.";
  }
}

// al terminar la evaluación: anota el resultado (si hay nombre) y muestra el ranking
async function anotarEnRanking(fila) {
  const box = $("#r-ranking");
  box.hidden = !ranking.activo();
  if (box.hidden) return;
  const estado = $("#r-ranking-estado");
  const list = $("#r-ranking-lista");
  list.innerHTML = "";
  let propio = null;
  try {
    if (fila.nombre) {
      estado.textContent = "Anotándote en el ranking…";
      const r = await ranking.anotar(fila);
      propio = r.id;
      estado.textContent = r.puesto ? `Quedaste en el puesto ${r.puesto} de los que menos hicieron enojar a Guillermo.` : "Ya estás en el ranking.";
    } else estado.textContent = "Para entrar al ranking, poné tu nombre antes de empezar.";
    pintarRanking(list, await ranking.top(), propio);
  } catch {
    estado.textContent = "No se pudo guardar en el ranking. Revisá la conexión.";
  }
}

function renderEvalHistory() {
  const items = store.get("evaluaciones", []);
  const list = $("#eval-history");
  list.innerHTML = "";
  $("#eval-history-wrap").hidden = !items.length;
  const clear = $("#eval-clear");
  clear.dataset.confirm = "";
  clear.textContent = "Borrar historial";
  items.slice(-10).reverse().forEach((it) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="hn"></span><span class="hs"></span>`;
    li.querySelector(".hn").textContent = it.nombre || "Sin nombre";
    li.querySelector(".hs").textContent = `Nota ${it.nota} · ${it.correctas} de ${it.total} bien · ${it.fecha}`;
    li.className = it.nota >= 6 ? "good" : "bad";
    list.appendChild(li);
  });
}

function clearEvalHistory() {
  const btn = $("#eval-clear");
  if (!btn.dataset.confirm) { // paso de confirmación dentro de la página
    btn.dataset.confirm = "1";
    btn.textContent = "¿Seguro? Tocá de nuevo para borrar";
    return;
  }
  store.set("evaluaciones", []);
  renderEvalHistory();
  guillermo.say("Para que queres que borre el historial??? Bueno ya lo borre.", "espera");
}

/* ---------- pantalla de la clase (proyector.html): la evaluación le avisa qué pasa ---------- */
// Cada evento sale con un uid propio: si se reintenta, Supabase no lo duplica. Los que no salieron
// (sin conexión) quedan guardados en el dispositivo y se reintentan cada unos segundos.
const clase = {
  sala: null,     // código de la sala; null = se juega sin pantalla de la clase
  partida: null,  // cambia en cada evaluación que se empieza
  pendientes: store.get("clasePendientes", []),
  enviando: false,
  jugador() {
    let id = store.get("jugador", null);
    if (!id) { id = nuevoId(); store.set("jugador", id); }
    return id;
  },
  mandar(tipo, datos = {}) {
    if (!this.sala || !this.partida) return;
    this.pendientes.push({ uid: nuevoId(), sala: this.sala, jugador: this.jugador(), partida: this.partida, tipo, ...datos });
    store.set("clasePendientes", this.pendientes.slice(-300));
    this.enviar();
  },
  async enviar() {
    if (this.enviando || !ranking.activo()) return;
    this.enviando = true;
    while (this.pendientes.length) {
      let r = null;
      try {
        r = await supabase("eventos", "?on_conflict=uid", { method: "POST", headers: { Prefer: "resolution=ignore-duplicates,return=minimal" }, body: JSON.stringify(this.pendientes[0]) });
      } catch { r = null; }
      // sin conexión o falla del servidor: se reintenta más tarde (en orden)
      if (!r || r.status >= 500 || r.status === 429) {
        this.enviando = false;
        setTimeout(() => this.enviar(), 4000);
        return;
      }
      // salió, o se rechazó (sala vencida, repetido): en los dos casos no se vuelve a mandar
      this.pendientes.shift();
      store.set("clasePendientes", this.pendientes);
    }
    this.enviando = false;
  }
};

async function startEval() {
  quiz.alumno = ($("#eval-name").value || "").trim().slice(0, 40);
  quiz.personaje = personajeElegido();
  store.set("personaje", quiz.personaje);
  const codigo = normalizarSala($("#sala-codigo").value);
  $("#sala-codigo").value = codigo;
  if (codigo) {
    const abierta = salaValida(codigo) ? await salaAbierta(codigo) : false;
    if (abierta === false) {
      guillermo.say(`No encuentro la clase «${codigo}». Fijate el código en la pantalla del profe, o borralo para jugar sin la pantalla de la clase.`, "pensando");
      $("#sala-codigo").focus();
      return;
    }
    store.set("sala", codigo); // si no se pudo preguntar (sin conexión) se juega igual: los eventos esperan
  }
  clase.sala = codigo || null;
  startQuiz("eval");
}

function renderLifelines() {
  const box = $("#lifelines");
  const evaluacion = quiz.lesson === "eval";
  box.hidden = false;
  renderRescate();
  $(".elias-comodin").hidden = !evaluacion;
  $(".rappi-comodin").hidden = !evaluacion;
  if (!evaluacion) return;
  renderCambio();
  const b = $("#life-rappi");
  const used = !quiz.comodines.rappi;
  $("#rappi-usos").textContent = used ? "Usado" : "1 uso";
  b.classList.toggle("used", used);
  b.disabled = used || quiz.answered || quiz.busy || disparo.enEscena;
}

// Rappi siempre se anima (aunque el sistema pida menos movimiento): es el chiste del comodín.
function runOver(i, cruce = 0.4) {
  const q = quiz.deck[quiz.index];
  if (q.mezcla[i].eliminada) return;
  q.mezcla[i].eliminada = true;
  const b = $("#q-options").children[i];
  b.disabled = true;
  b.classList.add("run-over");
  b.querySelector(".mark").textContent = "🛵 Atropellada";
  b.setAttribute("aria-label", `${b.querySelector(".label").textContent}: atropellada por Rappi, descartada`);
  const skid = document.createElement("span");
  skid.className = "skid";
  skid.setAttribute("aria-hidden", "true");
  skid.style.setProperty("--skid-d", `${Math.max(0.15, cruce)}s`);
  b.appendChild(skid);
  sound.play("crash");
}

// Una pasada de izquierda a derecha por una fila de opciones: atropella las marcadas y salta las demás.
function rappiPass(row, targets, card, rider) {
  rider.style.transform = "translate(-9999px, 0)";
  rider.hidden = false; // visible antes de medirla
  const cardBox = card.getBoundingClientRect();
  const w = rider.offsetWidth;
  const h = rider.offsetHeight;
  const v = RAPPI.velocidad;
  const front = w * RAPPI.ruedaDelantera;
  const rear = w * RAPPI.ruedaTrasera;
  const boxes = row.map((i) => {
    const r = $("#q-options").children[i].getBoundingClientRect();
    return { i, left: r.left - cardBox.left, right: r.right - cardBox.left, top: r.top - cardBox.top, height: r.height };
  });
  const ground = Math.max(...boxes.map((o) => o.top + o.height * 0.78)) - h; // las ruedas van arriba de la opción
  const pts = [{ x: -w - 20, y: ground, r: 0 }];
  const hits = [];
  let landed = -Infinity; // no atropella mientras está en el aire
  boxes.forEach((o) => {
    if (targets.includes(o.i)) {
      hits.push({ i: o.i, x: Math.max(o.left - front, landed), cruce: (o.right - Math.max(o.left, landed + front)) / v });
      return;
    }
    // salto por arriba de la opción correcta para no tocarla
    const x0 = o.left - front - 14;
    const x1 = o.right - rear + 14;
    const lift = o.height + 18;
    pts.push({ x: x0, y: ground, r: 0 });
    for (let k = 1; k < 8; k++) {
      const t = k / 8;
      pts.push({ x: x0 + (x1 - x0) * t, y: ground - lift * 4 * t * (1 - t), r: t < 0.5 ? -12 : 10 });
    }
    pts.push({ x: x1, y: ground, r: 0 });
    landed = x1;
  });
  pts.push({ x: cardBox.width + 20, y: ground, r: 0 });

  const len = pts.slice(1).map((p, k) => Math.hypot(p.x - pts[k].x, p.y - pts[k].y));
  const total = len.reduce((a, b) => a + b, 0) || 1;
  const duration = (total / v) * 1000;
  let acc = 0;
  const frames = pts.map((p, k) => {
    if (k) acc += len[k - 1];
    return { transform: `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`, offset: acc / total };
  });
  // en qué momento la rueda delantera llega a cada opción (el camino es una función de x)
  const timeAt = (x) => {
    for (let k = 1; k < pts.length; k++) {
      if (x <= pts[k].x) {
        const f = (x - pts[k - 1].x) / (pts[k].x - pts[k - 1].x || 1);
        return (frames[k - 1].offset + (frames[k].offset - frames[k - 1].offset) * f) * duration;
      }
    }
    return duration;
  };

  return new Promise((resolve) => {
    rider.hidden = false;
    const timers = hits.map((t) => setTimeout(() => runOver(t.i, t.cruce), timeAt(t.x)));
    let done = false;
    const end = () => {
      if (done) return;
      done = true;
      timers.forEach(clearTimeout);
      hits.forEach((t) => runOver(t.i, 0.15));
      rider.hidden = true;
      resolve();
    };
    if (!rider.animate) { end(); return; }
    const anim = rider.animate(frames, { duration, easing: "linear", fill: "forwards" });
    anim.onfinish = () => { anim.cancel(); end(); };
    setTimeout(() => { anim.cancel(); end(); }, duration + 500); // por si la pestaña no anima (segundo plano)
  });
}

async function llamarRappi() {
  if (quiz.lesson !== "eval" || !quiz.comodines.rappi || quiz.answered || quiz.busy) return;
  quiz.comodines.rappi = false;
  clase.mandar("comodin", { comodin: "rappi" });
  quiz.busy = true;
  renderLifelines();

  const q = quiz.deck[quiz.index];
  const wrong = shuffle(q.mezcla.map((o, i) => (o.ok || o.eliminada ? -1 : i)).filter((i) => i >= 0)).slice(0, 2);
  const buttons = [...$("#q-options").children];
  // agrupa las opciones por fila (2 columnas en compu, 1 en celular)
  const rows = [];
  buttons.forEach((b, i) => {
    const top = Math.round(b.getBoundingClientRect().top);
    let row = rows.find((r) => Math.abs(r.top - top) < 8);
    if (!row) rows.push((row = { top, items: [] }));
    row.items.push({ i, left: b.getBoundingClientRect().left });
  });
  rows.sort((a, b) => a.top - b.top);
  const passes = rows
    .map((r) => r.items.sort((a, b) => a.left - b.left).map((o) => o.i))
    .filter((r) => r.some((i) => wrong.includes(i)));

  guillermo.say("¡Llamaste a Rappi! ¡Ahí viene a toda velocidad, cuidado!", "sorpresa");
  const card = $("#q-card");
  const rider = $("#rappi-rider");
  for (const row of passes) {
    if (current !== "quiz") break;
    sound.play("moto");
    await rappiPass(row, wrong, card, rider);
  }
  wrong.forEach((i) => runOver(i, 0.15));
  rider.hidden = true;
  quiz.busy = false;
  guillermo.say("¡Rappi atropelló dos opciones incorrectas! Quedan dos: elegí bien.", "alegria", "jump");
  renderLifelines();
}

function renderEval(total, comido) {
  const nota = Math.max(1, Math.round((quiz.correct / total) * 12));
  const aprobado = nota >= 6;
  const usados = Object.keys(COMODINES).filter((k) => !quiz.comodines[k]).map((k) => COMODINES[k].label.replace(/^\S+\s/, ""));
  if (!quiz.comodines.cambio) usados.push("Llamar a " + ELIAS.nombre);
  if (!quiz.comodines.ssj) usados.push("Llamar a Kamil");
  const fecha = new Date().toLocaleString("es-UY", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  const hist = store.get("evaluaciones", []);
  hist.push({ nombre: quiz.alumno, nota, correctas: quiz.correct, total, fecha });
  store.set("evaluaciones", hist.slice(-50));
  // errores: las respuestas incorrectas (Kamil calma a Guillermo, pero no las borra)
  clase.mandar("fin", { nota });
  anotarEnRanking({ nombre: (quiz.alumno || "").replace(/\s+/g, " ").trim().slice(0, 24), personaje: quiz.personaje || null, errores: quiz.mistakes.length, total, nota, comodines: usados.length, comido: !!comido });

  $("#r-ready").className = "ready " + (aprobado ? "ready-ok" : "ready-no");
  $("#r-ready-title").textContent = `${quiz.alumno ? quiz.alumno + " · " : ""}Nota orientativa: ${nota}/12 · ${aprobado ? "✔ Aprobado" : "✘ A reforzar"}`;
  const list = $("#r-ready-list");
  list.innerHTML = "";
  const rows = EVALUACION.temas.map((t, i) => {
    const r = quiz.porTema[i] || { ok: 0, total: 0 };
    return [t.titulo, r.total ? `${r.ok}/${r.total}` : "—", !r.total || r.ok / r.total >= 0.5];
  });
  rows.push(["Comodines usados", usados.length ? usados.join(", ") : "Ninguno", true]);
  rows.forEach(([a, b, good]) => {
    const li = document.createElement("li");
    li.className = good ? "good" : "bad";
    li.innerHTML = `<span class="rt"></span><span class="rs"></span>`;
    li.querySelector(".rt").textContent = a;
    li.querySelector(".rs").textContent = b;
    list.appendChild(li);
  });
  return {
    aprobado,
    mensaje: aprobado
      ? `¡Bien ahí${quiz.alumno ? ", " + quiz.alumno : ""}! Sacaste ${nota} de 12 en la evaluación.`
      : `Sacaste ${nota} de 12${quiz.alumno ? ", " + quiz.alumno : ""}. Mirá el repaso de abajo: con eso la próxima sale mejor.`
  };
}

/* =========================================================
   COMODÍN «RESCATE SSJ»
   Una vez por partida, en todos los modos con enojo y mordiscos,
   mientras la ronda sigue y antes del mordisco final. El rescatista
   entra, se transforma en Super Saiyajin, le tira un Kamehameha a
   Guillermo y:
   · el enojo baja al mínimo y la paciencia vuelve a estar llena
     (el próximo mordisco necesita otra vez todos los errores);
   · los mordiscos del panel se reconstruyen;
   · la pregunta, las opciones, el puntaje y el avance no cambian.
   Estados: disponible → entrada → transformacion → carga → disparo
   → impacto → recuperacion → usado.
   Durante la escena la pregunta queda en pausa (única excepción a
   «se sigue respondiendo mientras muerde»). Todo corre con
   esperar/tarea/animar/nodoFx y los sonidos van por su propio
   canal: salir o reiniciar corta la escena sin dejar nada.
   ========================================================= */
// hoja de poses ya preparada (assets/rescate-ssj/preparar-sprites.py): 8 cuadros de 396 × 486
// alineados por los pies. El dibujo mira a la derecha.
const rescate = { estado: "disponible", pausa: null };
const rescateEnEscena = () => !["disponible", "usado"].includes(rescate.estado);

function rescateDisponible() {
  return current === "quiz" && quiz.comodines.ssj && rescate.estado === "disponible" &&
    !quiz.busy && !quiz.terminado && !enojo.final;
}

function renderRescate() {
  const b = $("#life-ssj");
  const usado = !quiz.comodines.ssj;
  $("#ssj-usos").textContent = usado ? "Usado" : "1 uso";
  b.classList.toggle("used", usado);
  b.disabled = !rescateDisponible();
}

// pausa de la pregunta: solo queda activo «Salir» (y la barra de arriba)
function pausarPregunta(si) {
  ["#q-card", "#lifelines", "#hint-btn", "#next-btn", "#life-help"].forEach((s) => { $(s).inert = si; });
  if (si) document.body.dataset.rescate = rescate.estado;
  else delete document.body.dataset.rescate;
}

function faseRescate(estado) {
  rescate.estado = estado;
  document.body.dataset.rescate = estado;
  if (rescate.pausa) rescate.pausa.lastChild.textContent = FASES_SSJ[estado] || "";
}

// lo llama cortarActuacion: deja el comodín en un estado real y saca la pausa
function cortarRescate() {
  sound.callar();
  if (rescateEnEscena()) {
    rescate.estado = quiz.comodines.ssj ? "disponible" : "usado";
    quiz.busy = false;
  }
  rescate.pausa = null;
  pausarPregunta(false);
}

function activarRescate() {
  if (!rescateDisponible()) return;
  quiz.comodines.ssj = false; // se gasta en cuanto se acepta: no hay doble uso
  if (quiz.lesson === "eval") clase.mandar("comodin", { comodin: "ssj" });
  quiz.busy = true;           // pausa: no se responde ni se usan otros comodines
  escenaRescate();
}

// dónde va cada uno, medido con la pantalla de ahora (compu o celular)
function medirEscena() {
  const vw = window.innerWidth, vh = window.innerHeight;
  const g = guillermo.el.getBoundingClientRect();
  const blanco = { x: g.left + g.width * (GUILLE.cara[0] / GUILLE.w), y: g.top + g.height * (GUILLE.cara[1] / GUILLE.h) }; // la cara de Guillermo
  const dir = blanco.x < vw / 2 ? 1 : -1;  // de qué lado de Guillermo se planta
  const espejo = dir > 0;                  // el dibujo mira a la derecha: si queda a la derecha, se da vuelta
  const alto = Math.min(Math.max(g.width * 1.5, 150), 300, vh * 0.45);
  const s = alto / SSJ.h;
  const [ax, ay] = SSJ.ancla;
  const ext = (espejo ? [SSJ.w - ax, ax] : [ax, SSJ.w - ax]).map((l) => anchoSSJ(l) * s); // cuánto ocupa a cada lado del ancla, con el aura
  const borde = dir > 0 ? g.right : g.left;
  const x = Math.min(vw - 8 - ext[1], Math.max(8 + ext[0], borde + dir * (alto * 0.9 + 20)));
  let y = Math.min(vh - 6, Math.max(g.bottom, 6 + Math.max(ay, SSJ.aura.h * 1.08) * s)); // el aura crece un poco al transformarse
  // en celular el globo está al lado de Guillermo: se para más abajo para no taparlo
  const globo = guillermo.bubble.getBoundingClientRect();
  if (globo.right > x - ext[0] && globo.left < x + ext[1] && globo.bottom > y - alto) y = Math.min(vh - 6, globo.bottom + alto + 4);
  // un punto del cuadro (en píxeles de la hoja) llevado a la pantalla
  const punto = ([px, py]) => ({ x: x + (px - ax) * s * (espejo ? -1 : 1), y: y - (ay - py) * s });
  return { vw, vh, g, blanco, dir, espejo, s, x, y, ext, punto };
}

async function escenaRescate() {
  cortarActuacion(); // corta el mordisco en curso o en cola; lo mordido se repara en la escena
  const gen = mordida.gen;
  mordida.actuando = true; // Guillermo está ocupado: lo que tenga que decir espera
  const reduce = escenaCorta();
  const T = reduce ? TIEMPOS_SSJ.reducido : TIEMPOS_SSJ.normal;
  rescate.estado = "entrada";
  renderLifelines();
  pausarPregunta(true);
  $("#ssj-aviso").textContent = "Kamil está en camino: la pregunta queda en pausa unos segundos.";
  if (document.activeElement && document.activeElement.closest("[inert]")) $("#panel").focus({ preventScroll: true });

  const pausa = nodoFx("ssj-pausa");
  pausa.innerHTML = `<span>⏸ Llamaste a Kamil</span><span></span>`;
  pausa.style.visibility = "hidden"; // aparece cuando ya se sabe dónde va
  rescate.pausa = pausa;
  faseRescate("entrada");

  // en celular Guillermo queda arriba: se sube para ver la escena y después se vuelve a la pregunta
  const scrollAntes = window.scrollY;
  if (!estaVisible(guillermo.el)) {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    if (!(await esperar(reduce ? 60 : 450))) return;
  }
  await hojaSSJ();
  if (gen !== mordida.gen) return;

  const E = medirEscena();
  const { s, dir } = E;
  const cabeza = E.punto([SSJ.ancla[0], 30]); // arriba del pelo, para los gritos
  pausa.style.transform = `translate(${E.vw / 2}px, ${E.vh - 14}px) translate(-50%, -100%)`; // abajo: no tapa la escena
  pausa.style.visibility = "";

  // ---------- el actor: aura (capa propia) + sprite nítido ----------
  const actor = nodoFx("ssj-actor");
  actor.style.width = `${SSJ.w * s}px`;
  actor.style.height = `${SSJ.h * s}px`;
  actor.innerHTML = `<div class="ssj-cuerpo">${auraSSJ()}<div class="ssj-sprite"></div></div>`;
  const cuerpo = actor.firstChild;
  const aura = cuerpo.querySelector(".ssj-aura");
  const sprite = cuerpo.querySelector(".ssj-sprite");
  cuerpo.style.transformOrigin = sprite.style.transformOrigin = `${SSJ.ancla[0] * s}px 100%`;
  if (E.espejo) cuerpo.style.transform = "scaleX(-1)";
  sprite.style.backgroundImage = `url("${SSJ.src}")`;
  sprite.style.backgroundSize = `${SSJ.w * s * SSJ.poses.length}px ${SSJ.h * s}px`;
  const poner = (nombre) => { sprite.style.backgroundPosition = `${-SSJ.poses.indexOf(nombre) * SSJ.w * s}px 0`; };
  const lugar = (dx = 0, dy = 0) => `translate(${E.x - SSJ.ancla[0] * s + dx}px, ${E.y - SSJ.ancla[1] * s + dy}px)`;
  const fijar = (dx, dy) => animar(actor, [{ transform: lugar(dx, dy) }], { duration: 1, fill: "forwards" });
  const pisar = (sx, sy, ms) => !reduce && animar(sprite, [{ transform: `scale(${sx}, ${sy})` }, { transform: "none" }], { duration: ms, easing: "steps(3)" });
  actor.style.transform = lugar();

  // globo de diálogo del rescatista, al costado de la cabeza que mira a Guillermo
  const decir = (texto, ms) => {
    const globo = nodoFx("ssj-globo");
    globo.textContent = texto;
    const p = E.punto([SSJ.ancla[0], 120]);
    const en = (k) => `translate(${p.x + dir * 6}px, ${p.y}px) translate(${dir > 0 ? -100 : 0}%, -100%) scale(${k})`;
    efimero(globo, animar(globo, [
      { transform: en(0.7), opacity: 0 },
      { transform: en(1), opacity: 1, offset: 0.12 },
      { transform: en(1), opacity: 1, offset: 0.88 },
      { transform: en(1), opacity: 0 }
    ], { duration: ms, easing: "steps(4)", fill: "forwards" }), ms);
  };

  // 1) ENTRADA: llega corriendo desde su lado de la pantalla y se planta frente a Guillermo
  poner("entrada");
  sound.play("ssjEntra", true);
  guillermo.set(CARAS_RESCATE.mira);
  guillermo.decir("¿Eh? ¿Y este quién es?");
  if (reduce) animar(actor, [{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards" });
  else {
    const desde = dir > 0 ? E.vw + E.ext[0] + 20 - E.x : -(E.x + E.ext[1] + 20);
    animar(actor, [0, 1, 2, 3, 4, 5, 6].map((k) => ({ transform: lugar(desde * (1 - k / 6), k % 2 ? -16 * s : 0) })),
      { duration: T.entrada, easing: "linear", fill: "forwards" });
    if (!(await esperar(T.entrada))) return;
  }
  poner("reposo");
  pisar(1.05, 0.93, 200);
  decir("¡Tranqui, Guillermo! Yo me encargo.", reduce ? 900 : 1300);
  if (!(await esperar(T.plantado))) return;

  // 2) PREPARACIÓN Y TRANSFORMACIÓN: se agacha haciendo fuerza, el aura junta energía y el pelo se vuelve dorado
  faseRescate("transformacion");
  if (!reduce) {
    poner("preparacion");
    sound.play("ssjAura", true);
    aura.className = "ssj-aura junta";
    chispas(E, 14, T.prepara + 200);
    // tiembla de a poco, cada vez un poquito más (nada de parpadeos)
    animar(actor, [0, 1, 2, 3, 4, 5, 6, 7].map((k) => ({ transform: lugar((k % 2 ? 1 : -1) * (0.5 + k * 0.25), 0) })),
      { duration: T.prepara, easing: "steps(8)", fill: "forwards" });
    cartel("¡¡HHNNN…!!", cabeza.x, cabeza.y, "nam-pop ssj-grito", T.prepara + T.anticipa);
    if (!(await esperar(T.prepara))) return;
    // anticipación: se encoge un instante antes de estallar
    animar(sprite, [{ transform: "scale(1.04, 0.94)" }], { duration: T.anticipa, easing: "steps(2)", fill: "forwards" });
    if (!(await esperar(T.anticipa))) return;
    fijar(0, 0);
  }
  poner("ssj");
  sound.play("ssjTransforma", true);
  aura.className = "ssj-aura ssj";
  if (!reduce) animar(sprite, [{ transform: "scale(0.97, 1.06)" }, { transform: "none" }], { duration: 320, easing: "steps(3)", fill: "forwards" });
  brillo(E.punto([SSJ.ancla[0], 250]), SSJ.h * s * 1.05, "#fff1a0");
  chispas(E, 22, T.transforma + 600);
  guillermo.set(CARAS_RESCATE.nervioso);
  guillermo.decir("Pará, pará… ¿qué es ese pelo?");
  if (!(await esperar(T.transforma))) return;

  // 3) CARGA: junta las manos al costado y la esfera crece entre ellas
  const bola = nodoFx("kame-bola");
  const luz = nodoFx("kame-luz");
  const r0 = Math.max(10, 34 * s);
  [bola, luz].forEach((n) => { n.style.width = n.style.height = `${(n === luz ? 5 : 2) * r0}px`; });
  const enBola = (p, k) => `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) scale(${k})`;
  if (!reduce) {
    faseRescate("carga");
    poner("carga");
    sound.play("kame", true);
    const manos = E.punto(SSJ.manos.carga);
    animar(bola, [0.15, 0.3, 0.28, 0.5, 0.46, 0.7, 0.66, 0.9, 1].map((k) => ({ transform: enBola(manos, k) })), { duration: T.carga, easing: "steps(9)", fill: "forwards" });
    animar(luz, [{ transform: enBola(manos, 0.2), opacity: 0.2 }, { transform: enBola(manos, 1), opacity: 0.85 }], { duration: T.carga, easing: "steps(6)", fill: "forwards" });
    converger(manos, r0 * 3, 12, T.carga);
    // las sílabas salen de a una arriba del pelo, sin tapar la cara
    ["Ka…", "me…", "ha…", "me…"].forEach((txt, i) => tarea(() => cartel(txt, cabeza.x + (i - 1.5) * SSJ.w * s * 0.22, cabeza.y - 6, "nam-pop kame-txt", 560), i * (T.carga / 4)));
    if (!(await esperar(T.carga))) return;
  }

  // 4) DISPARO: estira los brazos y el rayo sale de las palmas hasta la cara de Guillermo
  faseRescate("disparo");
  poner("disparo");
  sound.play("beam", true);
  const palmas = E.punto(SSJ.manos.disparo);
  const g = guillermo.el.getBoundingClientRect(); // se vuelve a medir: es a donde está ahora
  const blanco = { x: g.left + g.width * (GUILLE.cara[0] / GUILLE.w), y: g.top + g.height * (GUILLE.cara[1] / GUILLE.h) };
  // la esfera pasa a las palmas (con animación: la de la carga quedó fija con fill «forwards»)
  [[bola, 1], [luz, 1.1]].forEach(([n, k]) => animar(n, [{ transform: enBola(palmas, k) }], { duration: 1, fill: "forwards" }));
  // retroceso por el empuje: vuelve a su lugar para que las palmas queden en el nacimiento del rayo
  if (!reduce) animar(actor, [{ transform: lugar(dir * 12 * s, 0) }, { transform: lugar() }], { duration: 300, easing: "steps(3)", fill: "forwards" });
  cartel("¡¡HAAAA!!", cabeza.x, cabeza.y, "nam-pop ssj-grito grande", reduce ? 600 : 900);
  const dx = blanco.x - palmas.x, dy = blanco.y - palmas.y;
  const largo = Math.hypot(dx, dy);
  const grosor = Math.max(14, 44 * s);
  const rayo = nodoFx("rayo");
  rayo.style.height = `${grosor}px`;
  rayo.style.transform = `translate(${palmas.x}px, ${palmas.y - grosor / 2}px) rotate(${Math.atan2(dy, dx)}rad)`;
  rayo.innerHTML = `<div class="rayo-cuerpo"></div><div class="rayo-cabeza"></div>`;
  if (reduce) rayo.style.width = `${largo}px`;
  else {
    animar(rayo, [{ width: "0px" }, { width: `${largo}px` }], { duration: T.viaje, easing: "steps(7)", fill: "forwards" });
    animar(rayo.firstChild, [{ transform: "scaleY(1)" }, { transform: "scaleY(0.85)" }, { transform: "scaleY(1.08)" }, { transform: "scaleY(0.92)" }], { duration: 360, iterations: 3, delay: T.viaje, easing: "steps(4)" });
    if (!(await esperar(T.viaje))) return;
  }

  // 5) IMPACTO: Guillermo se sorprende, retrocede y queda mareado; el enojo baja y el panel se arma de nuevo
  faseRescate("impacto");
  sound.play("ssjImpacto", true);
  impacto(blanco, g.width);
  guillermo.set(CARAS_RESCATE.aturdido);
  guillermo.decir("¡¿Eeeh?! …¿Qué pasó? Veo estrellitas…");
  fijarPostura(0); // sin inclinarse, sin colorado, sin viñeta roja
  enojo.nivel = 0;
  bajaEnojo();
  if (!reduce) {
    animar($(".mascot-wrap"), [
      { transform: "none" },
      { transform: `translateX(${-dir * 22}px) rotate(${-dir * 12}deg)`, offset: 0.15 },
      { transform: `translateX(${-dir * 16}px) rotate(${dir * 6}deg)`, offset: 0.4 },
      { transform: `translateX(${-dir * 8}px) rotate(${-dir * 4}deg)`, offset: 0.65 },
      { transform: "none" }
    ], { duration: 1200, easing: "steps(10)" });
    estrellas(g, 1500);
  }
  if (!(await esperar(reduce ? 200 : 380))) return;
  [rayo, bola, luz].forEach((n) => animar(n, [{ opacity: 1 }, { opacity: 0 }], { duration: reduce ? 120 : 320, easing: "steps(3)", fill: "forwards" }));
  faseRescate("recuperacion");
  repararPanel(reduce ? 200 : 800);
  rellenarPaciencia(reduce ? 0 : 80);
  if (!(await esperar(T.impacto - (reduce ? 200 : 380)))) return;

  // 6) RECUPERACIÓN Y SALIDA: baja la guardia, se apaga el aura, festeja y se va
  if (!reduce) {
    poner("recuperacion");
    aura.className = "ssj-aura apaga";
    if (!(await esperar(T.recupera))) return;
  }
  aura.className = "ssj-aura";
  poner("victoria");
  pisar(0.96, 1.05, 240);
  sound.play("ssjVictoria", true);
  decir("¡Listo! Seguí vos.", reduce ? 700 : 1000);
  if (!(await esperar(T.victoria))) return;
  if (reduce) animar(actor, [{ opacity: 1 }, { opacity: 0 }], { duration: 150, fill: "forwards" });
  else {
    poner("entrada");
    cuerpo.style.transform = dir > 0 ? "none" : "scaleX(-1)"; // se da vuelta para irse por donde vino
    const hasta = dir > 0 ? E.vw + E.ext[1] + 20 - E.x : -(E.x + E.ext[0] + 20);
    animar(actor, [0, 1, 2, 3, 4].map((k) => ({ transform: lugar(hasta * (k / 4), k % 2 ? -16 * s : 0) })), { duration: T.salida, easing: "linear", fill: "forwards" });
  }
  if (!(await esperar(reduce ? 150 : T.salida))) return;
  terminarRescate(scrollAntes);
}

// cierre: todo como nuevo y la misma pregunta lista para seguir
function terminarRescate(scrollAntes) {
  cortarActuacion(); // saca los efectos que queden y cualquier mordisco que se haya colado
  Object.assign(enojo, { errores: 0, nivel: 0, final: false });
  Object.assign(mordida, { marcas: [], bocados: [], siguiente: 0 });
  piel.dibujar();
  paciencia.marcar(0);
  fijarPostura(0);
  rescate.estado = "usado";
  quiz.busy = false;
  guillermo.decir("Ta, ta… me calmo. ¿En qué estábamos?", "alivio");
  tarea(() => { if (guillermo.mood === "alivio") guillermo.set(caraBase()); }, 1500);
  renderLifelines(); // vuelve a habilitar solo lo que corresponde a cómo está la pregunta
  $("#ssj-aviso").textContent = "Listo: Guillermo se calmó y el panel quedó como nuevo. Seguís en la misma pregunta.";
  if (scrollAntes) window.scrollTo({ top: scrollAntes, behavior: "auto" });
  const next = $("#next-btn");
  (quiz.answered && !next.hidden ? next : $("#q-text")).focus({ preventScroll: true });
}

// caras de Guillermo durante el rescate
const CARAS_RESCATE = {
  mira: cara("sorpresa", "Guillermo, sorprendido, mira quién llegó"),
  nervioso: cara("nervioso", "Guillermo, nervioso y sudando, ve venir el ataque"),
  aturdido: cara("aturdido", "Guillermo, mareado, con los ojos en cruz")
};

/* =========================================================
   COMODÍN «CAMBIAR PREGUNTA» (LLAMAR A ELÍAS)
   Una vez por evaluación, con la pregunta todavía sin responder.
   Elías entra, apunta al panel de la pregunta y le dispara: la
   pregunta se rompe en píxeles y se arma otra en su lugar.
   · La reemplazada no cuenta: no cambian puntos, racha, enojo,
     número de pregunta ni el repaso del final.
   · El reemplazo se elige ANTES de gastar el uso: una pregunta de
     la reserva que no se mostró, del mismo tema si hay (si no, del
     mismo grupo: ADN en adelante u otros temas).
   · No repara el panel ni calma a Guillermo (eso es de Kamil).
   · No se superpone con un mordisco, Rappi ni Kamil. Todo corre con
     esperar/tarea/animar/nodoFx: salir o reiniciar corta la escena.
   ========================================================= */
// la pregunta que va a entrar, o null si no hay ninguna válida (entonces no se gasta el uso)
function elegirReemplazo() {
  const q = quiz.deck[quiz.index];
  if (!q) return null;
  const vistas = new Set(quiz.deck.map((x) => x.pregunta));
  const libres = quiz.reserve.filter((x) => !vistas.has(x.pregunta));
  const mismoTema = libres.filter((x) => x.tema === q.tema);
  const grupo = EVALUACION.temas[q.tema].grupo;
  const mismoGrupo = libres.filter((x) => EVALUACION.temas[x.tema].grupo === grupo); // así siguen siendo 6 y 6
  const elegida = pick(mismoTema.length ? mismoTema : mismoGrupo.length ? mismoGrupo : libres);
  return elegida ? { pregunta: elegida } : null;
}

function cambioDisponible() {
  return current === "quiz" && quiz.lesson === "eval" && quiz.comodines.cambio && !disparo.enEscena &&
    !quiz.answered && !quiz.busy && !quiz.terminado && !enojo.final &&
    !mordida.corriendo && !mordida.actuando && !rescateEnEscena() && !!elegirReemplazo();
}

function renderCambio() {
  const b = $("#life-cambio");
  const usado = !quiz.comodines.cambio;
  $("#cambio-usos").textContent = usado ? "Usado" : "1 uso";
  b.classList.toggle("used", usado);
  b.disabled = !cambioDisponible();
}

function activarCambio() {
  if (!cambioDisponible()) return;
  const reemplazo = elegirReemplazo();
  if (!reemplazo) return;
  quiz.comodines.cambio = false; // se gasta en cuanto se acepta: no hay doble uso
  clase.mandar("comodin", { comodin: "cambio" });
  quiz.busy = true;              // pausa: no se responde ni se usan otros comodines
  disparo.enEscena = true;
  disparo.reemplazo = reemplazo;
  if (reemplazo.pregunta) quiz.reserve.splice(quiz.reserve.indexOf(reemplazo.pregunta), 1);
  escenaDisparo();
}

// lo llama cortarActuacion (salir, reiniciar, cambiar de pantalla): no deja nada colgado
function cortarDisparo() {
  if (disparo.raf) cancelAnimationFrame(disparo.raf);
  disparo.raf = 0;
  if (disparo.enEscena) {
    disparo.enEscena = false;
    quiz.busy = false;
  }
  disparo.reemplazo = null;
  const card = $("#q-card");
  card.style.opacity = "";
  card.style.visibility = "";
}

// pone la pregunta nueva en el mazo (misma posición: el número de pregunta no cambia)
function ponerReemplazo() {
  const r = disparo.reemplazo;
  quiz.deck[quiz.index] = prepareQuestion(r.pregunta);
  disparo.reemplazo = null;
}

// dónde se para Elías y a dónde dispara, medido con la pantalla de ahora (compu o celular)
function medirDisparo(alto) {
  const vw = window.innerWidth, vh = window.innerHeight;
  const card = $("#q-card").getBoundingClientRect();
  const texto = $("#q-text").getBoundingClientRect();
  const s = alto / ELIAS.h;
  const atras = ELIAS.atras * s, adelante = ELIAS.adelante * s;
  const caño = (ELIAS.boca[0] - ELIAS.ancla[0]) * s;  // de los pies a la boca del caño, en x…
  const altura = (ELIAS.ancla[1] - ELIAS.boca[1]) * s; // …y en y
  const g = guillermo.el.getBoundingClientRect();
  const choca = (x0, x1, y0, y1) => g.right > x0 && g.left < x1 && g.bottom > y0 && g.top < y1;
  const yTexto = Math.min(card.bottom - 20, Math.max(card.top + 20, texto.top + texto.height / 2));
  let modo, x, y, dir, blanco;
  y = Math.min(vh - 6, Math.max(alto + 6, yTexto + altura));
  // 1) al costado del panel, si entra sin pisar a Guillermo (mira hacia la pregunta)
  const xDer = Math.min(vw - 8 - atras, card.right + adelante + 14);
  const xIzq = Math.max(8 + atras, card.left - adelante - 14);
  if (xDer - adelante >= card.right - 4 && !choca(xDer - adelante, xDer + atras, y - alto, y)) {
    modo = "costado"; x = xDer; dir = -1;
  } else if (xIzq + adelante <= card.left + 4 && !choca(xIzq - atras, xIzq + adelante, y - alto, y)) {
    modo = "costado"; x = xIzq; dir = 1;
  } else {
    // 2) celular: no hay lugar al costado; se para abajo a la izquierda, sobre la esquina del panel,
    //    y dispara de costado hacia el lado derecho de la pregunta (que no tapa)
    modo = "esquina"; dir = 1; x = 8 + atras;
    y = Math.min(vh - 6, card.bottom - 18 + altura);
  }
  const boca = { x: x + dir * caño, y: y - altura };
  blanco = modo === "costado"
    ? { x: card.left + card.width / 2, y: boca.y }
    : { x: Math.max(boca.x + 40, card.left + card.width * 0.72), y: boca.y };
  return { vw, vh, card, s, x, y, dir, espejo: dir < 0, boca, blanco, modo, atras, adelante };
}

async function escenaDisparo() {
  const gen = mordida.gen;
  const reduce = escenaCorta(); // siempre la escena completa (con la rotura en píxeles), como la de Kamil
  const T = reduce ? TIEMPOS_ELIAS.reducido : TIEMPOS_ELIAS.normal;
  const nombre = ELIAS.nombre;
  const card = $("#q-card");
  renderLifelines();
  pausarPregunta(true);
  delete document.body.dataset.rescate; // la pregunta no se oscurece: es el blanco y se tiene que ver
  $("#ssj-aviso").textContent = `${nombre} va a cambiar la pregunta: queda en pausa unos segundos. No cuenta como error.`;
  if (document.activeElement && document.activeElement.closest("[inert]")) $("#panel").focus({ preventScroll: true });

  // primero se ve el blanco: la pregunta entera en pantalla (en celular, con lugar abajo para Elías)
  const alto = Math.round(Math.min(210, Math.max(130, window.innerHeight * 0.26)));
  const scrollAntes = window.scrollY;
  const rc = card.getBoundingClientRect();
  const arriba = rc.height + alto * 0.55 + 24 <= window.innerHeight ? rc.top - 12 : rc.bottom - (window.innerHeight - alto * 0.55 - 12);
  if (Math.abs(arriba) > 4 && (rc.top < 8 || rc.bottom > window.innerHeight - 8 || window.innerWidth <= 820)) {
    window.scrollBy({ top: arriba, behavior: reduce ? "auto" : "smooth" });
    if (!(await esperar(reduce ? 60 : 420))) return;
  }
  await hojaElias();
  if (gen !== mordida.gen) return;

  const E = medirDisparo(alto);
  const { s, dir } = E;
  const actor = nodoFx("elias-actor");
  actor.style.width = `${ELIAS.w * s}px`;
  actor.style.height = `${ELIAS.h * s}px`;
  actor.innerHTML = `<div class="elias-sprite"></div>`;
  const sprite = actor.firstChild;
  sprite.style.transformOrigin = `${ELIAS.ancla[0] * s}px 100%`;
  sprite.style.backgroundImage = `url("${ELIAS.src}")`;
  sprite.style.backgroundSize = `${ELIAS.w * s * ELIAS.poses.length}px ${ELIAS.h * s}px`;
  const mirar = (d) => { sprite.style.transform = d < 0 ? "scaleX(-1)" : "none"; };
  const poner = (pose) => { sprite.style.backgroundPosition = `${-ELIAS.poses.indexOf(pose) * ELIAS.w * s}px 0`; };
  const lugar = (dx = 0, dy = 0) => `translate(${E.x - ELIAS.ancla[0] * s + dx}px, ${E.y - ELIAS.ancla[1] * s + dy}px)`;
  mirar(dir);
  actor.style.transform = lugar();

  // 1) ENTRADA: aparece junto al panel en reposo (entra a saltitos desde su borde de la pantalla)
  poner("reposo");
  sound.play("eliasEntra", true);
  if (reduce) animar(actor, [{ opacity: 0 }, { opacity: 1 }], { duration: T.entrada, fill: "forwards" });
  else {
    const desde = dir < 0 ? E.vw + ELIAS.atras * s + 10 - E.x : -(E.x + ELIAS.atras * s + 10);
    animar(actor, [0, 1, 2, 3, 4].map((k) => ({ transform: lugar(desde * (1 - k / 4), k % 2 ? -12 * s : 0) })),
      { duration: T.entrada, easing: "linear", fill: "forwards" });
  }
  if (!(await esperar(T.entrada + T.plantado))) return;

  // 2) PREPARACIÓN: saca el arma; un instante de anticipación para que se entienda qué va a hacer
  if (!reduce) {
    poner("preparacion");
    sound.play("eliasCarga", true);
    guillermo.set(CARAS_DISPARO.mira);
    guillermo.decir(`¿${nombre}? ¿Qué hacés con eso?`);
    animar(sprite, [{ transform: `${dir < 0 ? "scaleX(-1) " : ""}scale(1.03, 0.96)` }, { transform: dir < 0 ? "scaleX(-1)" : "none" }],
      { duration: T.prepara, easing: "steps(3)" });
    if (!(await esperar(T.prepara))) return;
  }

  // 3) APUNTADO: la pose queda quieta un momento bien visible
  poner("apuntando");
  guillermo.set(CARAS_DISPARO.asustado);
  if (reduce) guillermo.decir(`¿${nombre}? ¿Qué vas a hacer?`);
  if (!(await esperar(T.apunta))) return;

  // 4) DISPARO: pose con fogonazo (ya viene dibujado), retroceso corto y la bala hasta el panel
  const px = pixelesDe(card); // se muestrea antes de romperla
  poner("disparando");
  sound.play("eliasDisparo", true);
  if (!reduce) {
    animar(actor, [{ transform: lugar(-dir * 60 * s, 0) }, { transform: lugar() }], { duration: T.retroceso * 2, easing: "steps(2)", fill: "forwards" });
    const bala = nodoFx("elias-bala");
    const dx = E.blanco.x - E.boca.x, dy = E.blanco.y - E.boca.y;
    bala.style.transform = `translate(${E.boca.x}px, ${E.boca.y - 2}px) rotate(${Math.atan2(dy, dx)}rad)`;
    efimero(bala, animar(bala, [{ width: "0px", opacity: 1 }, { width: `${Math.hypot(dx, dy)}px`, opacity: 1, offset: 0.6 }, { width: `${Math.hypot(dx, dy)}px`, opacity: 0 }],
      { duration: T.bala * 2.5, easing: "steps(4)", fill: "forwards" }), T.bala * 2.5);
    if (!(await esperar(T.bala))) return;
  }

  // 5) CAMBIO: impacto → la pregunta se rompe en píxeles; se arma la nueva en el mismo lugar
  sound.play("eliasRompe", true);
  guillermo.set(CARAS_DISPARO.sorpresa);
  guillermo.decir("¡¿Le disparó a la pregunta?!");
  $("#ssj-aviso").textContent = "La pregunta se rompió. Ahora aparece otra.";
  if (reduce) {
    await animar(card, [{ opacity: 1 }, { opacity: 0 }], { duration: T.rompe, fill: "forwards" })?.finished.catch(() => {});
  } else {
    card.style.opacity = "0";
    tarea(() => poner("apuntando"), 240);
    if (!(await animarPixeles(px, E.blanco, "rompe", T.rompe))) return;
  }
  if (gen !== mordida.gen) return;
  card.getAnimations().forEach((a) => a.cancel());
  card.style.opacity = "0";
  ponerReemplazo();
  renderQuestion(`Bueno… ${nombre} cambió la pregunta. Vamos con esta.`);
  quiz.busy = true; // renderQuestion la deja lista para responder: sigue en pausa hasta que se vaya Elías
  renderLifelines();
  pausarPregunta(true);
  delete document.body.dataset.rescate;
  if (reduce) {
    card.style.opacity = "";
    animar(card, [{ opacity: 0 }, { opacity: 1 }], { duration: T.arma });
    if (!(await esperar(T.arma))) return;
  } else {
    const nueva = pixelesDe(card); // con opacidad 0 igual se puede muestrear
    if (!(await animarPixeles(nueva, E.blanco, "arma", T.arma))) return;
    card.style.opacity = "";
  }
  sound.play("eliasArma", true);

  // 6) SALIDA: baja el arma con las poses que hay y se va por donde vino
  if (!reduce) {
    poner("preparacion");
    if (!(await esperar(T.baja))) return;
    poner("reposo");
    mirar(-dir);
    const hasta = dir < 0 ? E.vw + ELIAS.atras * s + 10 - E.x : -(E.x + ELIAS.atras * s + 10);
    animar(actor, [0, 1, 2, 3, 4].map((k) => ({ transform: lugar(hasta * (k / 4), k % 2 ? -12 * s : 0) })), { duration: T.salida, easing: "linear", fill: "forwards" });
  } else {
    poner("reposo");
    animar(actor, [{ opacity: 1 }, { opacity: 0 }], { duration: T.salida, fill: "forwards" });
  }
  if (!(await esperar(T.salida))) return;
  terminarDisparo(actor, scrollAntes);
}

// cierre: la pregunta nueva queda lista; el daño del panel y el enojo siguen como estaban
function terminarDisparo(actor, scrollAntes) {
  quitarNodo(actor);
  disparo.enEscena = false;
  quiz.busy = false;
  pausarPregunta(false);
  $("#q-card").style.opacity = "";
  guillermo.set(caraBase());
  renderLifelines();
  $("#ssj-aviso").textContent = `Listo: ${ELIAS.nombre} cambió la pregunta. No cuenta como error y seguís en la misma pregunta número ${quiz.index + 1}.`;
  if (window.innerWidth > 820 && scrollAntes !== window.scrollY) window.scrollTo({ top: scrollAntes, behavior: "auto" });
  $("#q-text").focus({ preventScroll: true });
}

// caras de Guillermo mientras Elías dispara (no le apunta a él)
const CARAS_DISPARO = {
  mira: cara("sorpresa", "Guillermo, sorprendido, mira a quien llegó"),
  asustado: cara("asustado", "Guillermo, asustado, ve que apunta a la pregunta"),
  sorpresa: cara("sorpresa", "Guillermo, con la boca abierta, ve la pregunta hecha pedazos")
};

// los textos del comodín usan el nombre configurado
document.querySelectorAll("[data-nombre-elias]").forEach((n) => { n.textContent = ELIAS.nombre; });
hojaElias(); // precarga las poses

// el enojo baja: cartel al lado de la paciencia
function bajaEnojo() {
  const r = paciencia.el.getBoundingClientRect();
  if (!r.width) return;
  // sobre los primeros dientes (en celular la fila ocupa todo el ancho y el centro queda tapado por el rescatista)
  cartel("ENOJO ↓", r.left + Math.min(r.width / 2, 110), r.top - 8, "nam-pop ssj-calma", 1500);
}

// los pedazos vuelven a su lugar: cada mordisco se va cerrando y le llegan migas de vuelta
function repararPanel(ms) {
  const marcas = mordida.marcas.concat(mordida.bocados);
  if (!marcas.length) return;
  sound.play("restore", true);
  const caja = panelCaja();
  if (!escenaCorta()) {
    const colores = ["#2f3d8f", "#18225a", "#202c6e", "#0a0d22", "#ffd23f"];
    marcas.forEach((m, j) => {
      const p = contacto(m, caja);
      for (let i = 0; i < 7; i++) {
        const n = nodoFx("miga" + (i % 3 ? "" : " chica"));
        n.style.background = colores[(i + j) % colores.length];
        const a = Math.atan2(p.oy, p.ox) + (Math.random() - 0.5) * 1.6;
        const v = 60 + Math.random() * 80;
        efimero(n, animar(n, [
          { transform: `translate(${p.x + Math.cos(a) * v}px, ${p.y + Math.sin(a) * v}px) rotate(180deg)`, opacity: 0 },
          { transform: `translate(${p.x + Math.cos(a) * v * 0.5}px, ${p.y + Math.sin(a) * v * 0.5}px) rotate(90deg)`, opacity: 1, offset: 0.4 },
          { transform: `translate(${p.x}px, ${p.y}px)`, opacity: 1 }
        ], { duration: ms * 0.8, delay: j * 40 + i * 25, easing: "steps(6)", fill: "both" }), ms + 400);
      }
    });
  }
  const pasos = escenaCorta() ? 2 : 8;
  for (let i = 1; i <= pasos; i++) {
    tarea(() => {
      marcas.forEach((m) => { m.cura = i / pasos; });
      piel.dibujar();
    }, (ms / pasos) * i);
  }
}

// los dientes de la paciencia vuelven uno por uno
function rellenarPaciencia(ms) {
  const rotos = [...paciencia.box.children].filter((d) => d.classList.contains("roto"));
  rotos.reverse().forEach((d, i) => tarea(() => {
    d.classList.remove("roto", "rompe");
    if (!escenaCorta()) animar(d, [{ transform: "scale(1.6)" }, { transform: "scale(1)" }], { duration: 200, easing: "steps(3)" });
  }, ms * i));
  tarea(() => paciencia.marcar(0), ms * rotos.length + 10);
}

/* =========================================================
   CONTROLES
   ========================================================= */
const actions = {
  home: goHome,
  "start-quiz": startEval,
  "retry-quiz": () => startQuiz(quiz.lesson),
  "quit-quiz": goHome,
  "start-eval": startEval,
  "eval-clear": clearEvalHistory,
  "life-rappi": llamarRappi,
  "eaten-results": () => {
    const fn = mordida.alComido; // una sola vez
    mordida.alComido = null;
    $("#eaten").hidden = true;
    if (fn) fn();
  },
  "life-cambio": activarCambio,
  "life-ssj": activarRescate,
  hint: useHint,
  next: nextQuestion
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn || btn.disabled) return;
  const fn = actions[btn.dataset.action];
  if (!fn) return;
  if (!["hint", "next", "start-quiz", "retry-quiz", "start-eval", "life-rappi", "life-cambio", "life-ssj"].includes(btn.dataset.action)) sound.play("click");
  fn();
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const onButton = e.target.closest && e.target.closest("button, a");
  const key = e.key.toLowerCase();

  if (current === "quiz") {
    if (["1", "2", "3", "4"].includes(key)) {
      const b = $("#q-options").children[Number(key) - 1];
      if (b) { e.preventDefault(); answerQuestion(Number(key) - 1); }
    } else if (key === "p") {
      e.preventDefault(); useHint();
    } else if (key === "enter" && !onButton) {
      e.preventDefault();
      nextQuestion();
    }
  }
});

function renderSoundButton() {
  const btn = $("#sound-toggle");
  btn.setAttribute("aria-pressed", String(sound.on));
  btn.setAttribute("aria-label", sound.on ? "Sonido activado. Tocar para silenciar" : "Sonido silenciado. Tocar para activar");
  $("#sound-icon").textContent = sound.on ? "🔊" : "🔇";
  $("#sound-label").textContent = sound.on ? "Sonido: sí" : "Sonido: no";
}

$("#sound-toggle").addEventListener("click", () => {
  sound.on = !sound.on;
  store.set("sound", sound.on);
  if (!sound.on) sound.callar(); // silenciar corta también la escena del rescate que esté sonando
  renderSoundButton();
  sound.play("click");
});

/* ---------- arranque ---------- */
renderSoundButton();
updateRecords();
guillermo.set("espera");
guillermo.startBlinking();
mostrarRanking();
piel.init();
$("#rappi-rider").innerHTML = pixelSVG(RAPPI_SPRITE, RAPPI_PALETA);
// retrato del botón: la cabeza del mismo dibujo (filas 0 a 17, columnas 18 a 35)
$("#rappi-retrato").innerHTML = rappiCabeza();
// selector de personaje del inicio (se recuerda el último elegido)
document.querySelectorAll(".personaje .avatar").forEach((a) => { a.innerHTML = avatarHTML(a.dataset.avatar); });
{
  const guardado = store.get("personaje", null);
  const radio = document.querySelector(`input[name="personaje"][value="${PERSONAJES.includes(guardado) ? guardado : ""}"]`);
  if (radio) radio.checked = true;
}
hojaSSJ(); // precarga las poses del Rescate SSJ
{
  const deLaUrl = normalizarSala(new URLSearchParams(location.search).get("sala"));
  $("#sala-codigo").value = deLaUrl || normalizarSala(store.get("sala", ""));
}
clase.enviar();
