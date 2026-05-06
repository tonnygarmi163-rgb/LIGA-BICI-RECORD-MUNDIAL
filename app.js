// ============================================================
// app.js — Liga Bici (Temporadas 1, 2, 3)
// ============================================================

// ── DATOS ────────────────────────────────────────────────────

const BICIS = {
  matei: {
    id: 'matei',
    nombre: 'Giant Revel B26',
    tipo: 'MTB 26"',
    imagen: 'https://www.giant-bicycles.com/medias/2100000033-Giant-2022-Revel-26-Black-RD-min.png',
    precio: '~350 €',
    specs: [
      { label: 'Cuadro', valor: 'Aluminio Giant ALUXX 26"' },
      { label: 'Cambio', valor: 'Shimano Tourney 21v' },
      { label: 'Frenos', valor: 'V-Brake mecánicos' },
      { label: 'Suspensión', valor: 'Horquilla delantera SR Suntour 63mm' },
      { label: 'Neumáticos', valor: 'Giant 26x2.1' }
    ]
  },
  hugo: {
    id: 'hugo',
    nombre: "B'Twin Rockrider 520",
    tipo: 'MTB 27.5"',
    imagen: 'https://contents.mediadecathlon.com/p1540408/k$7b0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e/sq/bicicleta-de-montana-rockrider-520-negro.jpg',
    precio: '~400 €',
    specs: [
      { label: 'Cuadro', valor: "Aluminio B'Twin 27.5\"" },
      { label: 'Cambio', valor: 'Shimano Altus 3x8v' },
      { label: 'Frenos', valor: 'Disco mecánico Tektro 160mm' },
      { label: 'Suspensión', valor: 'Horquilla SR Suntour 100mm' },
      { label: 'Neumáticos', valor: "Kenda 27.5x2.1" }
    ]
  },
  ruben: {
    id: 'ruben',
    nombre: 'Giant Talon 3',
    tipo: 'MTB 29"',
    imagen: 'https://www.giant-bicycles.com/medias/2200000052-Giant-2022-Talon-3-Black-RD-min.png',
    precio: '~550 €',
    specs: [
      { label: 'Cuadro', valor: 'Aluminio Giant ALUXX 29"' },
      { label: 'Cambio', valor: 'Shimano Acera 3x8v' },
      { label: 'Frenos', valor: 'Disco hidráulico Tektro 180mm' },
      { label: 'Suspensión', valor: 'SR Suntour XCT 100mm' },
      { label: 'Neumáticos', valor: 'Giant 29x2.2' }
    ]
  },
  toni: {
    id: 'toni',
    nombre: 'BH Spike 2.5',
    tipo: 'MTB 29"',
    imagen: 'https://www.bhbikes.com/img/cms/Spike29_2.5_color_negro.jpg',
    precio: '~650 €',
    specs: [
      { label: 'Cuadro', valor: 'Aluminio BH Spike 29"' },
      { label: 'Cambio', valor: 'Shimano Deore 10v' },
      { label: 'Frenos', valor: 'Disco hidráulico 180mm' },
      { label: 'Suspensión', valor: 'SR Suntour XCM 100mm' },
      { label: 'Neumáticos', valor: 'Mitas 29x2.2' }
    ]
  },
  julian_t3: {
    id: 'julian_t3',
    nombre: 'BH Spike 29" (Temporada 3)',
    tipo: 'MTB 29"',
    imagen: 'https://www.bhbikes.com/img/cms/Spike29_color_negro.jpg',
    precio: '~799 €',
    specs: [
      { label: 'Cuadro', valor: 'Aluminio Spike 29", dirección rodamientos sellados' },
      { label: 'Cambio', valor: 'Shimano Deore 5120 10v' },
      { label: 'Frenos', valor: 'Shimano MT200 disco 180mm' },
      { label: 'Suspensión', valor: 'SR Suntour XCM RLR bloqueo remoto 100mm' },
      { label: 'Neumáticos', valor: 'Mitas Ocelot 2.35' }
    ]
  }
};

const CIRCUITOS = [
  {
    id: 'san-jose',
    nombre: 'San José',
    record: "1'54.25\"",
    descripcion: 'Circuito principal del centro sur de la Pobla. Carrera de apertura y referencia para comparar temporadas.',
    info_extra: 'Zona con muchos peatones. Circuito muy transitado en horas punta.',
    terreno: 'peatones',
    dificultad: 'Media',
    riesgo: 'Bajo',
    ubicacion: 'Carrer de la Fundació, La Pobla de Vallbona',
    mapa: 'https://www.google.com/maps/d/embed?mid=1san-jose',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T1', año: 2024 },
      { piloto: 'Toni García', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: [
      { piloto: 'Rubén Asensi', tiempo: "1'54.25\"", año: 2025 },
      { piloto: 'Toni García', tiempo: "2'09.96\"", año: 2025 },
      { piloto: 'Julian Matei', tiempo: "2'12.08\"", año: 2025 }
    ]
  },
  {
    id: 'andromeda',
    nombre: 'Andrómeda',
    record: "1'55.56\"",
    descripcion: 'Trazado técnico en Maravisa con margen pequeño entre los mejores. Ideal para medir ritmo y trazada.',
    info_extra: 'Zona con coches. Requiere atención al tráfico en ciertas zonas del trazado.',
    terreno: 'coches',
    dificultad: 'Media',
    riesgo: 'Medio',
    ubicacion: 'Maravisa',
    ganadores: [
      { piloto: 'Hugo Castro', temporada: 'T1', año: 2024 },
      { piloto: 'Julian Matei', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'maracana',
    nombre: 'Maracaná',
    record: "1'02.17\"",
    descripcion: 'Circuito corto y explosivo, con tiempos muy juntos. Requiere salida limpia y aceleración constante.',
    info_extra: 'Circuito tranquilo. Zona con poca circulación. Con parte baja descendiente con dos caminos.',
    terreno: 'tranquilo',
    dificultad: 'Alta',
    riesgo: 'Bajo',
    ubicacion: 'Velódromo Mas de Tous',
    ganadores: [
      { piloto: 'Rubén Asensi', temporada: 'T1', año: 2024 },
      { piloto: 'Hugo Castro', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'benissano',
    nombre: 'Benissanó',
    record: "1'35.30\"",
    descripcion: 'Tiene una cuesta abajo que al finalizar hay una curva cerrada seguido con muchas piedras, muy fácil caerse.',
    info_extra: 'Zona con coches. Curva final peligrosa tras bajada rápida con piedras.',
    terreno: 'coches',
    dificultad: 'Media',
    riesgo: 'Alto',
    ubicacion: 'Redondo norte de Ferrero, Benissanó',
    ganadores: [
      { piloto: 'Rubén Asensi', temporada: 'T1', año: 2024 },
      { piloto: 'Rubén Asensi', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'pobla-nova',
    nombre: 'Pobla Nova',
    record: "1'44.26\"",
    descripcion: 'Circuito condicionado por lluvia y aplazamientos. La primera curva decide gran parte de la carrera.',
    info_extra: 'Zona con muchos peatones. Primera curva muy determinante.',
    terreno: 'peatones',
    dificultad: 'Media',
    riesgo: 'Medio',
    ubicacion: 'La Pobla de Vallbona',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'cementerio',
    nombre: 'Cementerio',
    record: "1'22.96\"",
    descripcion: 'Circuito rápido con buenas oportunidades de adelantamiento. Cuesta descendiente a final con curva muy cerrada.',
    info_extra: 'Zona con muchos peatones. Ideal para prácticas de temporada 3.',
    terreno: 'peatones',
    dificultad: 'Alta',
    riesgo: 'Alto',
    ubicacion: 'La Pobla de Vallbona',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T1', año: 2024 },
      { piloto: 'Hugo Castro', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'benaguacil',
    nombre: 'Benaguacil',
    record: "1'33.00\"",
    descripcion: 'Entrada a Benaguacil con trazada de velocidad y pocas zonas de descanso.',
    info_extra: 'Circuito tranquilo. Con parte baja descendiente con dos caminos.',
    terreno: 'tranquilo',
    dificultad: 'Media',
    riesgo: 'Bajo',
    ubicacion: 'Benaguacil',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'lliria',
    nombre: 'Llíria',
    record: "1'27.63\"",
    descripcion: 'Carrera de capital de comarca, exigente por ritmo y resistencia.',
    info_extra: 'Circuito tranquilo. Con parte baja descendiente con dos caminos.',
    terreno: 'tranquilo',
    dificultad: 'Alta',
    riesgo: 'Bajo',
    ubicacion: 'Llíria',
    ganadores: [
      { piloto: 'Rubén Asensi', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'barranquet',
    nombre: 'Barranquet',
    record: "1'25.61\"",
    descripcion: 'Uno de los trazados más completos. Curvas cerradas donde tienes visión reducida y pasan personas, después cuesta descendiente a final con curva muy cerrada.',
    info_extra: 'Zona con coches. Velocidad, trazada, cambios y sangre fría en zonas estrechas.',
    terreno: 'coches',
    dificultad: 'Alta',
    riesgo: 'Alto',
    ubicacion: 'La Pobla de Vallbona',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T1', año: 2024 },
      { piloto: 'Julian Matei', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'sierra-espada',
    nombre: 'Sierra Espada',
    record: "1'49.00\"",
    descripcion: 'Maravisa norte. Circuito duro, con desgaste y opciones de remontada si se administra bien la resistencia.',
    info_extra: 'Zona con coches. Terreno exigente con mucho desnivel.',
    terreno: 'coches',
    dificultad: 'Alta',
    riesgo: 'Alto',
    ubicacion: 'Maravisa Norte',
    ganadores: [
      { piloto: 'Hugo Castro', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'vista-calderona',
    nombre: 'Vista Calderona',
    record: "1'22.43\"",
    descripcion: 'Última carrera de la temporada 2. Cierre ideal para decidir posiciones y premiar regularidad.',
    info_extra: 'Zona con coches. Circuito de cierre de temporada.',
    terreno: 'coches',
    dificultad: 'Media',
    riesgo: 'Medio',
    ubicacion: 'La Pobla de Vallbona',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T2', año: 2025 }
    ],
    mejoresTiempos: []
  },
  {
    id: 'rascanya',
    nombre: 'Rascanya',
    record: 'Por añadir',
    descripcion: 'Circuito histórico de temporada 1. Se mantiene como referencia en victorias totales.',
    info_extra: 'Zona con coches. Referencia histórica de la liga.',
    terreno: 'coches',
    dificultad: 'Media',
    riesgo: 'Medio',
    ubicacion: 'Valencia',
    ganadores: [
      { piloto: 'Julian Matei', temporada: 'T1', año: 2024 }
    ],
    mejoresTiempos: []
  }
];

const PARTICIPANTES = [
  {
    id: 'julian',
    nombre: 'Julian',
    apellido: 'Matei',
    dorsal: 1,
    color: '#2563eb',
    foto: null,
    bici_actual: 'julian_t3',
    bicis_historial: { 'T1': 'matei', 'T2': 'matei', 'T3': 'julian_t3' },
    peso: 'Por añadir',
    altura: 'Por añadir',
    ligas: 2,
    poles: 5,
    victorias_total: 9,
    puntos_total: 206,
    circuitos_ganados: [
      { circuito: 'San José', temporada: 'T1', año: 2024 },
      { circuito: 'Rascanya', temporada: 'T1', año: 2024 },
      { circuito: 'Cementerio', temporada: 'T1', año: 2024 },
      { circuito: 'Barranquet', temporada: 'T1', año: 2024 },
      { circuito: 'Andrómeda', temporada: 'T2', año: 2025 },
      { circuito: 'Pobla Nova', temporada: 'T2', año: 2025 },
      { circuito: 'Benaguacil', temporada: 'T2', año: 2025 },
      { circuito: 'Barranquet', temporada: 'T2', año: 2025 },
      { circuito: 'Vista Calderona', temporada: 'T2', año: 2025 }
    ],
    temporadas: {
      '2024': { puntos: 87, posicion: 1, campeon: true },
      '2025': { puntos: 119, posicion: 1, campeon: true },
      '2026': { puntos: 0, posicion: '-' }
    }
  },
  {
    id: 'hugo',
    nombre: 'Hugo',
    apellido: 'Castro',
    dorsal: 69,
    color: '#eab308',
    foto: null,
    bici_actual: 'hugo',
    bicis_historial: { 'T1': 'hugo', 'T2': 'hugo', 'T3': 'hugo' },
    peso: 'Por añadir',
    altura: 'Por añadir',
    ligas: 0,
    poles: 2,
    victorias_total: 4,
    puntos_total: 180,
    circuitos_ganados: [
      { circuito: 'Andrómeda', temporada: 'T1', año: 2024 },
      { circuito: 'Maracaná', temporada: 'T2', año: 2025 },
      { circuito: 'Cementerio', temporada: 'T2', año: 2025 },
      { circuito: 'Sierra Espada', temporada: 'T2', año: 2025 }
    ],
    temporadas: {
      '2024': { puntos: 75, posicion: 2 },
      '2025': { puntos: 105, posicion: 2 },
      '2026': { puntos: 0, posicion: '-' }
    }
  },
  {
    id: 'ruben',
    nombre: 'Rubén',
    apellido: 'Asensi',
    dorsal: 23,
    color: '#dc2626',
    foto: null,
    bici_actual: 'ruben',
    bicis_historial: { 'T1': 'ruben', 'T2': 'ruben', 'T3': 'ruben' },
    peso: 'Por añadir',
    altura: 'Por añadir',
    ligas: 0,
    poles: 12,
    victorias_total: 6,
    puntos_total: 181,
    circuitos_ganados: [
      { circuito: 'Benissanó', temporada: 'T1', año: 2024 },
      { circuito: 'Maracaná', temporada: 'T1', año: 2024 },
      { circuito: 'Benissanó', temporada: 'T2', año: 2025 },
      { circuito: 'Llíria', temporada: 'T2', año: 2025 }
    ],
    temporadas: {
      '2024': { puntos: 76, posicion: 3 },
      '2025': { puntos: 105, posicion: 3 },
      '2026': { puntos: 0, posicion: '-' }
    }
  },
  {
    id: 'toni',
    nombre: 'Toni',
    apellido: 'García',
    dorsal: 4,
    color: '#16a34a',
    foto: null,
    bici_actual: 'toni',
    bicis_historial: { 'T1': 'toni', 'T2': 'toni', 'T3': 'toni' },
    peso: 'Por añadir',
    altura: 'Por añadir',
    ligas: 0,
    poles: 1,
    victorias_total: 1,
    puntos_total: 75,
    circuitos_ganados: [
      { circuito: 'San José', temporada: 'T2', año: 2025 }
    ],
    temporadas: {
      '2024': { puntos: 0, posicion: '-', nota: 'No participó en T1' },
      '2025': { puntos: 75, posicion: 4 },
      '2026': { puntos: 0, posicion: '-' }
    }
  }
];

// Temporadas con datos completos
const TEMPORADAS = {
  '2026': {
    num: 3,
    label: 'Temporada 3',
    año: 2026,
    resumen: 'La nueva temporada abre con San José como primera señal. Las prácticas de Pascua ya registradas.',
    participantes: 4,
    carreras: 0,
    finalizadas: 0,
    eventos: [
      { id: 'practica-pascua-1', nombre: 'Práctica Pascua 1', fecha: '2026-04-07', circuito: 'San José', estado: 'finalizada', tipo: 'practica' },
      { id: 'practica-pascua-2', nombre: 'Práctica Pascua 2', fecha: '2026-04-07', circuito: 'Cementerio', estado: 'finalizada', tipo: 'practica' },
      { id: 'carrera-1-t3', nombre: 'Carrera 1 · San José', fecha: '2026-05-15', circuito: 'San José', estado: 'pendiente', tipo: 'carrera' }
    ],
    clasificacion: [
      { pilotoId: 'julian', puntos: 0 },
      { pilotoId: 'hugo', puntos: 0 },
      { pilotoId: 'ruben', puntos: 0 },
      { pilotoId: 'toni', puntos: 0 }
    ]
  },
  '2025': {
    num: 2,
    label: 'Temporada 2',
    año: 2025,
    resumen: 'Temporada intensa con 10 carreras disputadas. Matei se proclama campeón por segundo año consecutivo.',
    participantes: 4,
    carreras: 10,
    finalizadas: 10,
    eventos: [
      { id: 'sj-2025', nombre: 'San José', fecha: '2025-09-21', circuito: 'San José', estado: 'finalizada', tipo: 'carrera', ganador: 'Toni García' },
      { id: 'and-2025', nombre: 'Andrómeda', fecha: '2025-09-28', circuito: 'Andrómeda', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'mar-2025', nombre: 'Maracaná', fecha: '2025-10-02', circuito: 'Maracaná', estado: 'finalizada', tipo: 'carrera', ganador: 'Hugo Castro' },
      { id: 'ben-2025', nombre: 'Benissanó', fecha: '2025-10-05', circuito: 'Benissanó', estado: 'finalizada', tipo: 'carrera', ganador: 'Rubén Asensi' },
      { id: 'pn-2025', nombre: 'Pobla Nova', fecha: '2025-10-12', circuito: 'Pobla Nova', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'cem-2025', nombre: 'Cementerio', fecha: '2025-10-19', circuito: 'Cementerio', estado: 'finalizada', tipo: 'carrera', ganador: 'Hugo Castro' },
      { id: 'bena-2025', nombre: 'Benaguacil', fecha: '2025-10-26', circuito: 'Benaguacil', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'll-2025', nombre: 'Llíria', fecha: '2025-11-02', circuito: 'Llíria', estado: 'finalizada', tipo: 'carrera', ganador: 'Rubén Asensi' },
      { id: 'barr-2025', nombre: 'Barranquet', fecha: '2025-11-09', circuito: 'Barranquet', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'se-2025', nombre: 'Sierra Espada', fecha: '2025-11-16', circuito: 'Sierra Espada', estado: 'finalizada', tipo: 'carrera', ganador: 'Hugo Castro' },
      { id: 'vc-2025', nombre: 'Vista Calderona', fecha: '2025-11-23', circuito: 'Vista Calderona', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' }
    ],
    clasificacion: [
      { pilotoId: 'julian', puntos: 119, posicion: 1 },
      { pilotoId: 'hugo', puntos: 105, posicion: 2 },
      { pilotoId: 'ruben', puntos: 105, posicion: 3 },
      { pilotoId: 'toni', puntos: 75, posicion: 4 }
    ]
  },
  '2024': {
    num: 1,
    label: 'Temporada 1',
    año: 2024,
    resumen: 'Primera temporada de la Liga Bici. Matei se proclama primer campeón con victorias en San José, Rascanya, Cementerio y Barranquet.',
    participantes: 3,
    carreras: 6,
    finalizadas: 6,
    eventos: [
      { id: 'sj-2024', nombre: 'San José', fecha: '2024-09-21', circuito: 'San José', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'and-2024', nombre: 'Andrómeda', fecha: '2024-09-28', circuito: 'Andrómeda', estado: 'finalizada', tipo: 'carrera', ganador: 'Hugo Castro' },
      { id: 'mar-2024', nombre: 'Maracaná', fecha: '2024-10-05', circuito: 'Maracaná', estado: 'finalizada', tipo: 'carrera', ganador: 'Rubén Asensi' },
      { id: 'ben-2024', nombre: 'Benissanó', fecha: '2024-10-12', circuito: 'Benissanó', estado: 'finalizada', tipo: 'carrera', ganador: 'Rubén Asensi' },
      { id: 'rasc-2024', nombre: 'Rascanya', fecha: '2024-10-19', circuito: 'Rascanya', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'cem-2024', nombre: 'Cementerio', fecha: '2024-10-26', circuito: 'Cementerio', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' },
      { id: 'barr-2024', nombre: 'Barranquet', fecha: '2024-11-02', circuito: 'Barranquet', estado: 'finalizada', tipo: 'carrera', ganador: 'Julian Matei' }
    ],
    clasificacion: [
      { pilotoId: 'julian', puntos: 87, posicion: 1 },
      { pilotoId: 'hugo', puntos: 75, posicion: 2 },
      { pilotoId: 'ruben', puntos: 76, posicion: 3 }
    ]
  }
};

const NORMAS = `
<div class="normas-content">
  <h3>📋 Sistema de puntuación</h3>
  <p>Los puntos se otorgan según la posición en carrera:</p>
  <table class="normas-table">
    <tr><th>Posición</th><th>Puntos</th></tr>
    <tr><td>1º</td><td>25</td></tr>
    <tr><td>2º</td><td>18</td></tr>
    <tr><td>3º</td><td>15</td></tr>
    <tr><td>4º</td><td>12</td></tr>
    <tr><td>5º</td><td>10</td></tr>
    <tr><td>6º</td><td>8</td></tr>
    <tr><td>7º</td><td>6</td></tr>
    <tr><td>8º</td><td>4</td></tr>
    <tr><td>9º</td><td>2</td></tr>
    <tr><td>10º</td><td>1</td></tr>
  </table>

  <h3>🏠 Circuito de casa</h3>
  <p>Cada piloto tiene asignado un circuito de casa. En ese circuito, los puntos obtenidos se <strong>multiplican por 1,5</strong> según la posición final en la carrera.</p>
  <p>Ejemplo: Si quedas 1º en tu circuito de casa → 25 × 1,5 = <strong>37,5 puntos</strong>.</p>

  <h3>🏁 Pole Position</h3>
  <p>Una <strong>pole position</strong> se consigue cuando un piloto realiza el mejor tiempo en clasificación Y queda primero en la carrera de ese circuito.</p>
  <p>Las poles sirven como <strong>criterio de desempate</strong> en caso de igualdad de puntos en la clasificación general: gana quien más poles tenga.</p>

  <h3>⏱️ Tiempos</h3>
  <p>El mejor tiempo de cada circuito queda registrado como récord de vuelta. Los tiempos de clasificación se usan para determinar la pole position.</p>

  <h3>🔄 Circuitos repetidos</h3>
  <p>Varios circuitos se repiten entre temporadas. Cada edición cuenta como una victoria independiente, indicada con el año y temporada correspondiente.</p>

  <h3>🚴 Reglamento general</h3>
  <ul>
    <li>Cada piloto debe completar el trazado homologado sin atajos.</li>
    <li>El piloto debe respetar el código de circulación y a los peatones.</li>
    <li>En caso de caída, el piloto puede reincorporarse desde el punto de caída.</li>
    <li>Los tiempos son registrados manualmente y validados por todos los participantes.</li>
    <li>Cualquier reclamación debe realizarse antes de que comience la siguiente carrera.</li>
  </ul>
</div>
`;

const NOTICIAS = `
<div class="noticias-content">
  <div class="noticia-card">
    <span class="noticia-fecha">Mayo 2026</span>
    <h3>Temporada 3 en marcha</h3>
    <p>La Liga Bici arranca su tercera temporada con Julian Matei como doble campeón defensor. Las prácticas de Pascua en San José y Cementerio han dejado buenas sensaciones.</p>
  </div>
  <div class="noticia-card">
    <span class="noticia-fecha">Noviembre 2025</span>
    <h3>Matei bicampeón</h3>
    <p>Julian Matei se proclama campeón de la Temporada 2 con 119 puntos, seguido por Hugo Castro y Rubén Asensi con 105 puntos cada uno. El desempate se resolvió por poles a favor de Hugo.</p>
  </div>
  <div class="noticia-card">
    <span class="noticia-fecha">Noviembre 2024</span>
    <h3>Primer campeón de la Liga Bici</h3>
    <p>Julian Matei se convierte en el primer campeón de la historia de la Liga Bici tras imponerse en la Temporada 1 con victorias en San José, Rascanya, Cementerio y Barranquet.</p>
  </div>
</div>
`;

const ENTREVISTAS = `
<div class="entrevistas-content">
  <div class="entrevista-card">
    <div class="entrevista-header">
      <span class="entrevista-piloto">Julian Matei</span>
      <span class="entrevista-fecha">Temporada 3 · 2026</span>
    </div>
    <p class="entrevista-q">¿Cuál es tu objetivo esta temporada?</p>
    <p class="entrevista-a">"Defender el título es siempre complicado, pero con la bici nueva tengo más confianza en los circuitos técnicos."</p>
  </div>
  <div class="entrevista-card">
    <div class="entrevista-header">
      <span class="entrevista-piloto">Hugo Castro</span>
      <span class="entrevista-fecha">Temporada 3 · 2026</span>
    </div>
    <p class="entrevista-q">¿Crees que puedes ganar la liga este año?</p>
    <p class="entrevista-a">"Este año voy a por todas. La temporada pasada estuve muy cerca y sé que tengo el nivel para ganar."</p>
  </div>
  <div class="entrevista-card">
    <div class="entrevista-header">
      <span class="entrevista-piloto">Rubén Asensi</span>
      <span class="entrevista-fecha">Temporada 3 · 2026</span>
    </div>
    <p class="entrevista-q">¿Cuál es tu circuito favorito?</p>
    <p class="entrevista-a">"El Barranquet. Es el más completo y donde más disfrutas cuando todo sale bien."</p>
  </div>
</div>
`;

const EDITS = [
  {
    id: 'edit-1',
    titulo: 'Edit Temporada 2 · Resumen',
    temporada: 'T2 2025',
    url: null,
    thumbnail: null,
    descripcion: 'Resumen de la mejor temporada hasta la fecha.'
  },
  {
    id: 'edit-2',
    titulo: 'Edit Temporada 1 · Highlights',
    temporada: 'T1 2024',
    url: null,
    thumbnail: null,
    descripcion: 'Los mejores momentos de la primera temporada.'
  }
];

// ── ESTADO ───────────────────────────────────────────────────
let currentSeason = '2026';
let currentView = 'inicio';
let currentCircuitFilter = 'todos';
let currentInfoTab = 'normas';

// ── UTILIDADES ───────────────────────────────────────────────
function formatFecha(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
}

function formatFechaCorta(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    dia: d.getDate(),
    mes: d.toLocaleDateString('es-ES', { month: 'short' })
  };
}

function getPiloto(id) {
  return PARTICIPANTES.find(p => p.id === id);
}

function getCircuito(id) {
  return CIRCUITOS.find(c => c.id === id);
}

function getBici(id) {
  return BICIS[id];
}

function getTerremoIcono(terreno) {
  const iconos = {
    'tranquilo': '🌿',
    'peatones': '🚶',
    'coches': '🚗'
  };
  return iconos[terreno] || '🔵';
}

function getTerremoLabel(terreno) {
  const labels = {
    'tranquilo': 'TRANQUILO',
    'peatones': 'ZONA PEATONES',
    'coches': 'ZONA COCHES'
  };
  return labels[terreno] || terreno.toUpperCase();
}

function getRiesgoColor(riesgo) {
  return { 'Bajo': '#16a34a', 'Medio': '#d97706', 'Alto': '#dc2626' }[riesgo] || '#666';
}

// ── NAVEGACIÓN ───────────────────────────────────────────────
function navigateTo(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));
  const view = document.getElementById('view-' + viewId);
  if (view) view.classList.add('active');
  const btn = document.querySelector(`[data-view="${viewId}"]`);
  if (btn) btn.classList.add('active');
  currentView = viewId;
  renderView(viewId);
}

function renderView(viewId) {
  switch (viewId) {
    case 'inicio': renderInicio(); break;
    case 'participantes': renderParticipantes(); break;
    case 'puntos': renderPuntos(); break;
    case 'circuitos': renderCircuitos(); break;
    case 'horarios': renderHorarios(); break;
    case 'info': renderInfo(); break;
    case 'edits': renderEdits(); break;
  }
}

// ── INICIO ───────────────────────────────────────────────────
function renderInicio() {
  const temporada = TEMPORADAS[currentSeason];
  const añoLabel = currentSeason === '2026' ? '3' : currentSeason === '2025' ? '2' : '1';

  document.getElementById('season-label').textContent = `Temporada ${añoLabel}`;
  document.getElementById('inicio-title').textContent = `Liga Bici ${currentSeason}`;
  document.getElementById('season-summary').textContent = temporada.resumen;

  // Quick stats
  const qs = document.getElementById('quick-stats');
  qs.innerHTML = `
    <div class="stat-card"><span class="stat-num">${temporada.participantes}</span><span class="stat-label">Participantes</span></div>
    <div class="stat-card"><span class="stat-num">${temporada.carreras}</span><span class="stat-label">Carreras</span></div>
    <div class="stat-card"><span class="stat-num">${temporada.finalizadas}</span><span class="stat-label">Finalizadas</span></div>
  `;

  // Próximos eventos
  const eventos = temporada.eventos.slice(0, 3);
  const homeEvents = document.getElementById('home-events');
  if (eventos.length === 0) {
    homeEvents.innerHTML = '<p class="empty-msg">No hay eventos programados.</p>';
  } else {
    homeEvents.innerHTML = eventos.map(ev => {
      const f = formatFechaCorta(ev.fecha);
      const estadoClass = ev.estado === 'finalizada' ? 'estado-fin' : 'estado-pend';
      const estadoLabel = ev.estado === 'finalizada' ? 'FINALIZADA' : 'PRÓXIMAMENTE';
      return `
        <div class="event-card">
          <div class="event-date"><span class="event-day">${f.dia}</span><span class="event-month">${f.mes}</span></div>
          <div class="event-info">
            <strong>${ev.nombre}</strong>
            <span class="event-circuit">${ev.circuito}</span>
          </div>
          <span class="event-estado ${estadoClass}">${estadoLabel}</span>
        </div>
      `;
    }).join('');
  }

  // Clasificación rápida
  const clasi = [...temporada.clasificacion].sort((a, b) => b.puntos - a.puntos);
  const homeLeaders = document.getElementById('home-leaders');
  homeLeaders.innerHTML = clasi.map((c, i) => {
    const p = getPiloto(c.pilotoId);
    if (!p) return '';
    return `
      <div class="leader-row" style="border-left: 3px solid ${p.color}">
        <span class="leader-pos">${i + 1}</span>
        <span class="leader-name">${p.nombre} ${p.apellido}</span>
        <span class="leader-pts">${c.puntos} pts</span>
      </div>
    `;
  }).join('');
}

// ── PARTICIPANTES ─────────────────────────────────────────────
function renderParticipantes() {
  const container = document.getElementById('participant-list');
  container.innerHTML = PARTICIPANTES.map(p => {
    const temporada = TEMPORADAS[currentSeason];
    const clasi = temporada.clasificacion.find(c => c.pilotoId === p.id);
    const pts = clasi ? clasi.puntos : 0;
    const pos = clasi ? (clasi.posicion || '-') : '-';

    // Stats generales
    const victorias = p.circuitos_ganados.length;
    const poles = p.poles;

    return `
      <div class="participant-card" style="--pilot-color: ${p.color}" data-pilot="${p.id}">
        <div class="participant-header" style="background: ${p.color}">
          <div>
            <span class="participant-fname">${p.nombre}</span>
            <strong class="participant-lname">${p.apellido.toUpperCase()}</strong>
          </div>
          <span class="participant-dorsal">${p.dorsal}</span>
        </div>
        <div class="participant-stats">
          <div class="pstat"><span class="pstat-num">${pts}</span><span class="pstat-label">Puntos</span></div>
          <div class="pstat"><span class="pstat-num">${pos}</span><span class="pstat-label">Posición</span></div>
          <div class="pstat"><span class="pstat-num">${victorias}</span><span class="pstat-label">Victorias</span></div>
          <div class="pstat"><span class="pstat-num">${poles}</span><span class="pstat-label">Poles</span></div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.participant-card').forEach(card => {
    card.addEventListener('click', () => openPilotoDialog(card.dataset.pilot));
  });
}

function openPilotoDialog(pilotoId) {
  const p = getPiloto(pilotoId);
  if (!p) return;

  const biciId = p.bici_actual;
  const bici = getBici(biciId);

  // Circuitos ganados agrupados
  const circuitosHTML = p.circuitos_ganados.length > 0
    ? `<div class="circuitos-ganados-list">
        ${p.circuitos_ganados.map(cg => `
          <span class="circuito-tag">
            ${cg.circuito}
            <span class="circuito-tag-season">${cg.temporada} ${cg.año}</span>
          </span>
        `).join('')}
      </div>`
    : '<p class="empty-msg">Sin victorias registradas.</p>';

  // Historial por temporada
  const temporadasHTML = Object.entries(p.temporadas)
    .sort((a, b) => b[0] - a[0])
    .map(([año, data]) => {
      const t = Object.values(TEMPORADAS).find(t => t.año === parseInt(año));
      const tLabel = t ? t.label : `${año}`;
      const campeon = data.campeon ? '<span class="campeon-badge">🏆 CAMPEÓN</span>' : '';
      return `
        <div class="temporada-hist-row">
          <span class="th-label">${tLabel} · ${año}</span>
          <span class="th-pts">${data.puntos} pts</span>
          <span class="th-pos">${data.posicion !== '-' ? `P${data.posicion}` : '-'}</span>
          ${campeon}
        </div>
      `;
    }).join('');

  const dialogColor = p.color;

  document.getElementById('dialog-body').innerHTML = `
    <div class="pilot-dialog">
      <div class="pilot-dialog-header" style="background: ${dialogColor}">
        <p class="pilot-dialog-dorsal">DORSAL ${p.dorsal}</p>
        <h2 class="pilot-dialog-name">${p.nombre} ${p.apellido}</h2>
      </div>
      <div class="pilot-dialog-body">
        ${bici ? `
          <div class="bici-card" data-bici="${biciId}" style="cursor:pointer">
            <div class="bici-card-img">
              <svg viewBox="0 0 120 60" class="bici-svg">
                <g stroke="${dialogColor}" stroke-width="2.5" fill="none">
                  <circle cx="20" cy="40" r="14"/>
                  <circle cx="100" cy="40" r="14"/>
                  <circle cx="20" cy="40" r="4"/>
                  <circle cx="100" cy="40" r="4"/>
                  <polyline points="20,40 38,20 55,20 70,40"/>
                  <polyline points="38,20 55,40 20,40"/>
                  <polyline points="55,20 70,40 100,40"/>
                  <line x1="55" y1="20" x2="55" y2="12"/>
                  <line x1="50" y1="12" x2="60" y2="12"/>
                  <line x1="38" y1="20" x2="34" y2="14"/>
                  <line x1="30" y1="14" x2="38" y2="14"/>
                </g>
              </svg>
            </div>
            <div class="bici-card-info">
              <strong>${bici.nombre}</strong>
              <span class="bici-tipo">${bici.tipo} · ${bici.precio}</span>
              <span class="bici-hint">Toca para ver ficha</span>
            </div>
          </div>
        ` : ''}

        <div class="pilot-stats-grid">
          <div class="pilot-stat"><span>${p.puntos_total}</span><label>Total puntos</label></div>
          <div class="pilot-stat"><span>${p.ligas}</span><label>Ligas ganadas</label></div>
          <div class="pilot-stat"><span>${p.victorias_total}</span><label>Victorias</label></div>
          <div class="pilot-stat"><span>${p.poles}</span><label>Poles</label></div>
          <div class="pilot-stat"><span>${p.peso}</span><label>Peso</label></div>
          <div class="pilot-stat"><span>${p.altura}</span><label>Altura</label></div>
        </div>

        <h3 class="dialog-section-title">Historial por temporada</h3>
        <div class="temporadas-hist">${temporadasHTML}</div>

        <h3 class="dialog-section-title">Circuitos ganados</h3>
        ${circuitosHTML}
      </div>
    </div>
  `;

  // Evento bici
  const biciCardEl = document.getElementById('dialog-body').querySelector('.bici-card');
  if (biciCardEl) {
    biciCardEl.addEventListener('click', () => openBiciDialog(biciCardEl.dataset.bici));
  }

  openDialog();
}

function openBiciDialog(biciId) {
  const bici = getBici(biciId);
  if (!bici) return;

  document.getElementById('dialog-body').innerHTML = `
    <div class="bici-dialog">
      <div class="bici-dialog-header">
        <p class="bici-dialog-tipo">${bici.tipo}</p>
        <h2>${bici.nombre}</h2>
        <p class="bici-dialog-precio">Precio aproximado: <strong>${bici.precio}</strong></p>
      </div>
      <div class="bici-dialog-img-wrap">
        <svg viewBox="0 0 200 100" class="bici-svg-large">
          <g stroke="#2563eb" stroke-width="3" fill="none">
            <circle cx="35" cy="68" r="24"/>
            <circle cx="165" cy="68" r="24"/>
            <circle cx="35" cy="68" r="6"/>
            <circle cx="165" cy="68" r="6"/>
            <polyline points="35,68 65,32 95,32 120,68"/>
            <polyline points="65,32 95,68 35,68"/>
            <polyline points="95,32 120,68 165,68"/>
            <line x1="95" y1="32" x2="95" y2="18"/>
            <line x1="85" y1="18" x2="105" y2="18"/>
            <line x1="65" y1="32" x2="58" y2="22"/>
            <line x1="50" y1="22" x2="66" y2="22"/>
          </g>
        </svg>
      </div>
      <div class="bici-specs">
        <h3>Características principales</h3>
        ${bici.specs.map(s => `
          <div class="bici-spec-row">
            <span class="spec-label">${s.label}</span>
            <span class="spec-val">${s.valor}</span>
          </div>
        `).join('')}
      </div>
      <button class="btn-back" onclick="history.back()">← Volver al piloto</button>
    </div>
  `;
}

// ── PUNTOS ────────────────────────────────────────────────────
function renderPuntos() {
  const temporada = TEMPORADAS[currentSeason];
  const clasi = [...temporada.clasificacion].sort((a, b) => b.puntos - a.puntos);

  // Tabla general
  const standingsEl = document.getElementById('standings-table');
  standingsEl.innerHTML = clasi.map((c, i) => {
    const p = getPiloto(c.pilotoId);
    if (!p) return '';
    const diff = i === 0 ? '' : `<span class="diff">-${clasi[0].puntos - c.puntos}</span>`;
    const leader = i === 0 ? '<span class="campeon-inline">Campeón</span>' : diff;
    return `
      <div class="standing-row" style="border-left: 4px solid ${p.color}">
        <div class="standing-pos" style="background: ${i === 0 ? '#111' : '#333'}; color: white">${i + 1}</div>
        <div class="standing-info">
          <strong>${p.nombre} ${p.apellido}</strong>
          ${leader}
        </div>
        <div class="standing-pts">${c.puntos}</div>
      </div>
    `;
  }).join('');

  // Recuento por piloto
  const scoreGrid = document.getElementById('score-grid');
  scoreGrid.innerHTML = clasi.map(c => {
    const p = getPiloto(c.pilotoId);
    if (!p) return '';
    // Victorias en esta temporada
    const victorias = p.circuitos_ganados.filter(cg => {
      const tYear = parseInt(currentSeason);
      return cg.año === tYear;
    });

    return `
      <div class="score-pilot-card">
        <div class="score-pilot-header">
          <span>${p.nombre} ${p.apellido}</span>
          <strong>${c.puntos}</strong>
        </div>
        ${victorias.length > 0 ? victorias.map(v => `
          <div class="score-row">
            <span class="score-circuit">${v.circuito}</span>
            <span class="score-badge carrera">VICTORIA</span>
          </div>
        `).join('') : '<p class="empty-msg-small">Sin victorias esta temporada.</p>'}
      </div>
    `;
  }).join('');
}

// ── CIRCUITOS ─────────────────────────────────────────────────
function renderCircuitos() {
  const container = document.getElementById('circuit-list');
  let circuitos = CIRCUITOS;

  if (currentCircuitFilter !== 'todos') {
    circuitos = circuitos.filter(c => c.terreno === currentCircuitFilter);
  }

  container.innerHTML = circuitos.map(c => {
    const terrenoLabel = getTerremoLabel(c.terreno);
    const riesgoColor = getRiesgoColor(c.riesgo);
    const icono = getTerremoIcono(c.terreno);

    return `
      <div class="circuit-card" data-circuit="${c.id}">
        <div class="circuit-card-header">
          <span class="circuit-card-name">${c.nombre}</span>
          <span class="circuit-badge" style="background:${c.terreno === 'tranquilo' ? '#16a34a' : c.terreno === 'peatones' ? '#7c3aed' : '#d97706'}">${icono}</span>
        </div>
        <div class="circuit-svg-container">
          ${getCircuitSVG(c.id)}
        </div>
        <div class="circuit-card-info">
          <span class="circuit-name-sm">${c.nombre}</span>
          <span class="circuit-record">${c.record}</span>
        </div>
        <p class="circuit-desc">${c.descripcion}</p>
        <div class="circuit-tags">
          <span class="ctag" style="background: ${c.terreno === 'tranquilo' ? '#dcfce7' : c.terreno === 'peatones' ? '#ede9fe' : '#fef3c7'}; color: #333">${terrenoLabel}</span>
          <span class="ctag">DIFICULTAD ${c.dificultad.toUpperCase()}</span>
          <span class="ctag" style="color: ${riesgoColor}">RIESGO ${c.riesgo.toUpperCase()}</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.circuit-card').forEach(card => {
    card.addEventListener('click', () => openCircuitoDialog(card.dataset.circuit));
  });
}

function openCircuitoDialog(circuitoId) {
  const c = getCircuito(circuitoId);
  if (!c) return;

  const ganadoresHTML = c.ganadores.length > 0
    ? c.ganadores.map(g => `<span class="ganador-tag">${g.piloto.toUpperCase()} · ${g.temporada} ${g.año}</span>`).join('')
    : '<span class="empty-msg">Sin ganadores registrados.</span>';

  const mejoresTiemposHTML = c.mejoresTiempos.length > 0
    ? c.mejoresTiempos.map(mt => `<div class="tiempo-row">${mt.piloto} ${mt.tiempo} · ${mt.año}</div>`).join('')
    : '';

  document.getElementById('dialog-body').innerHTML = `
    <div class="circuit-dialog">
      <div class="circuit-dialog-svg">${getCircuitSVG(c.id, true)}</div>
      <div class="circuit-dialog-info">
        <span class="circuit-dialog-kicker">CIRCUITO</span>
        <h2>${c.nombre}</h2>
        <p>${c.descripcion}</p>
        ${c.info_extra ? `<p class="circuit-extra-info">ℹ️ ${c.info_extra}</p>` : ''}
        <div class="circuit-dialog-meta">
          <div class="meta-item"><span>${c.ubicacion}</span><label>Ubicación</label></div>
          <div class="meta-item"><span>${getTerremoLabel(c.terreno)}</span><label>Entorno</label></div>
          <div class="meta-item"><span>${c.dificultad}</span><label>Dificultad</label></div>
          <div class="meta-item"><span style="color:${getRiesgoColor(c.riesgo)}">${c.riesgo}</span><label>Riesgo</label></div>
          <div class="meta-item"><span>${c.record}</span><label>Récord</label></div>
        </div>
        <h3>Ganadores</h3>
        <div class="ganadores-list">${ganadoresHTML}</div>
        ${mejoresTiemposHTML ? `<h3>Mejores tiempos</h3><div class="tiempos-list">${mejoresTiemposHTML}</div>` : ''}
      </div>
    </div>
  `;

  openDialog();
}

function getCircuitSVG(id, large = false) {
  const size = large ? 300 : 200;
  const h = large ? 160 : 100;
  const svgs = {
    'san-jose': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} 30,${h*0.3} ${size*0.7},${h*0.3} ${size*0.7},${h*0.7} 30,${h*0.7}" stroke="#1d4ed8" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#1d4ed8"/></svg>`,
    'andromeda': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polygon points="${size*0.15},${h*0.5} ${size*0.3},${h*0.2} ${size*0.7},${h*0.2} ${size*0.85},${h*0.5} ${size*0.7},${h*0.8} ${size*0.3},${h*0.8}" stroke="#0891b2" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${size*0.85}" cy="${h*0.5}" r="4" fill="#0891b2"/></svg>`,
    'maracana': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polygon points="${size*0.15},${h*0.5} ${size*0.3},${h*0.15} ${size*0.7},${h*0.15} ${size*0.85},${h*0.5} ${size*0.7},${h*0.85} ${size*0.3},${h*0.85}" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${size*0.85}" cy="${h*0.5}" r="4" fill="#dc2626"/></svg>`,
    'benissano': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="40,${h*0.8} 40,${h*0.2} ${size*0.6},${h*0.2} ${size*0.6},${h*0.5} ${size*0.85},${h*0.5} ${size*0.85},${h*0.8} 40,${h*0.8}" stroke="#ea580c" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="40" cy="${h*0.8}" r="4" fill="#ea580c"/></svg>`,
    'pobla-nova': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} ${size*0.2},${h*0.25} ${size*0.5},${h*0.2} ${size*0.8},${h*0.3} ${size*0.85},${h*0.7} 30,${h*0.7}" stroke="#7c3aed" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#7c3aed"/></svg>`,
    'cementerio': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.75} ${size*0.15},${h*0.3} ${size*0.5},${h*0.2} ${size*0.85},${h*0.3} ${size*0.85},${h*0.75} 30,${h*0.75}" stroke="#6d28d9" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.75}" r="4" fill="#6d28d9"/></svg>`,
    'benaguacil': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} ${size*0.3},${h*0.25} ${size*0.7},${h*0.25} ${size*0.85},${h*0.5} ${size*0.7},${h*0.75} 30,${h*0.7}" stroke="#059669" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#059669"/></svg>`,
    'lliria': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} 30,${h*0.25} ${size*0.4},${h*0.2} ${size*0.85},${h*0.35} ${size*0.85},${h*0.7} ${size*0.5},${h*0.8} 30,${h*0.7}" stroke="#0369a1" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#0369a1"/></svg>`,
    'barranquet': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} ${size*0.15},${h*0.3} ${size*0.35},${h*0.15} ${size*0.65},${h*0.2} ${size*0.85},${h*0.4} ${size*0.8},${h*0.7} ${size*0.5},${h*0.85} 30,${h*0.7}" stroke="#b45309" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#b45309"/></svg>`,
    'sierra-espada': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.75} ${size*0.1},${h*0.4} ${size*0.25},${h*0.2} ${size*0.5},${h*0.15} ${size*0.75},${h*0.25} ${size*0.9},${h*0.5} ${size*0.8},${h*0.75} 30,${h*0.75}" stroke="#92400e" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.75}" r="4" fill="#92400e"/></svg>`,
    'vista-calderona': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} ${size*0.2},${h*0.25} ${size*0.6},${h*0.2} ${size*0.85},${h*0.45} ${size*0.75},${h*0.75} ${size*0.4},${h*0.8} 30,${h*0.7}" stroke="#be185d" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#be185d"/></svg>`,
    'rascanya': `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><polyline points="30,${h*0.7} 30,${h*0.3} ${size*0.5},${h*0.2} ${size*0.85},${h*0.35} ${size*0.85},${h*0.7} 30,${h*0.7}" stroke="#4f46e5" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="${h*0.7}" r="4" fill="#4f46e5"/></svg>`
  };
  return svgs[id] || `<svg viewBox="0 0 ${size} ${h}" class="circuit-svg"><text x="50%" y="50%" text-anchor="middle" fill="#999">Sin trazado</text></svg>`;
}

// ── HORARIOS ──────────────────────────────────────────────────
function renderHorarios() {
  const temporada = TEMPORADAS[currentSeason];
  const container = document.getElementById('schedule-list');

  container.innerHTML = temporada.eventos.map(ev => {
    const f = formatFechaCorta(ev.fecha);
    const estadoClass = ev.estado === 'finalizada' ? 'estado-fin' : 'estado-pend';
    const estadoLabel = ev.estado === 'finalizada' ? 'FINALIZADA' : 'PRÓXIMAMENTE';
    const ganadorStr = ev.ganador ? `<span class="ev-ganador">🏆 ${ev.ganador}</span>` : '';

    return `
      <div class="timeline-item">
        <div class="timeline-date">
          <span class="tl-day">${f.dia}</span>
          <span class="tl-month">${f.mes}</span>
        </div>
        <div class="timeline-content">
          <div class="tl-top">
            <strong>${ev.nombre}</strong>
            <span class="event-estado ${estadoClass}">${estadoLabel}</span>
          </div>
          ${ganadorStr}
          <div class="tl-actions">
            ${ev.tipo === 'carrera' ? `<button class="btn-carrera" onclick="openCircuitoDialog('${getCircuitoIdByName(ev.circuito)}')">Ver circuito</button>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getCircuitoIdByName(nombre) {
  const c = CIRCUITOS.find(c => c.nombre === nombre || c.nombre.toLowerCase() === nombre.toLowerCase());
  return c ? c.id : '';
}

// ── INFO ──────────────────────────────────────────────────────
function renderInfo() {
  const tabs = document.querySelectorAll('.info-tab');
  tabs.forEach(t => {
    t.classList.toggle('active', t.dataset.info === currentInfoTab);
  });

  const panel = document.getElementById('info-panel');
  switch (currentInfoTab) {
    case 'normas': panel.innerHTML = NORMAS; break;
    case 'noticias': panel.innerHTML = NOTICIAS; break;
    case 'entrevistas': panel.innerHTML = ENTREVISTAS; break;
  }
}

// ── EDITS ─────────────────────────────────────────────────────
function renderEdits() {
  const container = document.getElementById('edits-list');
  container.innerHTML = EDITS.map(e => `
    <div class="edit-card">
      <div class="edit-thumb">
        ${e.thumbnail
          ? `<img src="${e.thumbnail}" alt="${e.titulo}">`
          : `<div class="edit-placeholder">
              <svg viewBox="0 0 80 50" class="play-svg">
                <rect width="80" height="50" rx="8" fill="#1a1a2e"/>
                <polygon points="28,12 28,38 58,25" fill="white" opacity="0.8"/>
              </svg>
            </div>`
        }
      </div>
      <div class="edit-info">
        <strong>${e.titulo}</strong>
        <span class="edit-temp">${e.temporada}</span>
        <p class="edit-desc">${e.descripcion}</p>
        ${e.url
          ? `<a href="${e.url}" target="_blank" class="btn-edit-watch">▶ Ver vídeo</a>`
          : `<span class="edit-unavail">Vídeo no disponible — Sube el enlace para activarlo</span>`
        }
      </div>
    </div>
  `).join('');
}

// ── DIALOG ────────────────────────────────────────────────────
function openDialog() {
  const dialog = document.getElementById('detail-dialog');
  dialog.showModal();
}

function closeDialog() {
  const dialog = document.getElementById('detail-dialog');
  dialog.close();
}

// ── SEASON SWITCHER ───────────────────────────────────────────
function switchSeason(season) {
  currentSeason = season;
  document.querySelectorAll('.season-card').forEach(c => {
    c.classList.toggle('active', c.dataset.season === season);
  });
  renderView(currentView);
}

// ── FILTROS CIRCUITO ──────────────────────────────────────────
function setCircuitFilter(filter) {
  currentCircuitFilter = filter;
  document.querySelectorAll('.filter-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === filter);
  });
  renderCircuitos();
}

// ── EVENT LISTENERS ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Nav buttons
  document.querySelectorAll('.nav-button').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.view));
  });

  // Season switcher
  document.querySelectorAll('.season-card').forEach(card => {
    card.addEventListener('click', () => switchSeason(card.dataset.season));
  });

  // Circuit filters
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => setCircuitFilter(pill.dataset.filter));
  });

  // Info tabs
  document.querySelectorAll('.info-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentInfoTab = tab.dataset.info;
      renderInfo();
    });
  });

  // Dialog close
  document.getElementById('dialog-close').addEventListener('click', closeDialog);
  document.getElementById('detail-dialog').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detail-dialog')) closeDialog();
  });

  // "Ver horarios" / "Ver puntos" links
  document.addEventListener('click', (e) => {
    const go = e.target.dataset.go;
    if (go) navigateTo(go);
  });

  // Init
  renderInicio();

  // Actualizar filtros de circuitos con nuevas categorías
  const filterRow = document.querySelector('.filter-row');
  if (filterRow) {
    filterRow.innerHTML = `
      <button class="filter-pill active" type="button" data-filter="todos">Todos</button>
      <button class="filter-pill" type="button" data-filter="tranquilo">🌿 Tranquilo</button>
      <button class="filter-pill" type="button" data-filter="peatones">🚶 Peatones</button>
      <button class="filter-pill" type="button" data-filter="coches">🚗 Coches</button>
    `;
    filterRow.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => setCircuitFilter(pill.dataset.filter));
    });
  }
});
