
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Plus, ArrowUpRight, ArrowRight, MousePointer2 } from 'lucide-react';
import HeroGallery from './components/HeroGallery';
import { logo } from "./assets/encodedImages";


const P_AUDIOVISUALES = [
  { title: "Diseño visual para una marca deportiva outdoor", desc: "Movimiento, territorio y rendimiento en una misma identidad.", tags: ["Video"], youtubeId: "UEUQVg-ppYI" },
  { title: "Nuevo Video- Ejercicio Para Marcas", desc: "Nuevo video agregado.", tags: ["Video"], youtubeId: "861SstK8q9U" },
  { title: "Temporales Teatrales Puerto Montt 2026", desc: "SPOT OFICIAL 2026 TEMPORALES INTERNACIONALES DE PUERTO MONTT / CASA DEL ARTE DIEGO RIVERA", tags: ["Video"], youtubeId: "8KjyPN_Kl-A" },
  { title: "SUNDERER - THE BEHOLDER", desc: "Este video acompaña The Beholder, intro del demo de Sunderer.\n\nSunderer nace de riffs que tenía guardados hace años y que finalmente tomaron forma en este demo.\nLas influencias vienen directo del death y doom sueco, cruzadas con los primeros discos de Metallica.\n\nEl video fue desarrollado como un experimento visual, combinando procesos en GPT, Gemini y Runway, usando IA como herramienta creativa para construir atmósfera, relato y textura, no como fin en sí mismo.", tags: ["Death/Doom Metal", "Corto IA", "IA Creativa"], youtubeId: "dsFWzaBwMJY" },
  { title: "THRESHOLDS", desc: "Pieza sci-fi creada como excusa para investigar con algunos sintetizadores de la suite Arturia y Labs de Spitfire Audio.\n-Arp 2600 V3\n-Korg MS-20 V\n-Opia: bass synth bend\n-Astral forms: Guitar bowed drone\nEl video fue creado en su totalidad con Runway, esta vez quise hacerlo por completo, sin la ayuda de nano banana, tomando influencias del sci-fi ochentero y noventero junto con el trabajo de Villeneuve.", tags: ["Sci-Fi", "Sintetizadores", "Runway"], youtubeId: "nbvHqg3BrSQ" },
  { title: "PANTERA", desc: "Otro ejercicio, esta vez con la suite Labs de Spitifire.\nShamanic ritual.", tags: ["Ritual", "Shamanic", "Labs"], youtubeId: "ib492Y2BVhk" },
  { title: "SUNN O)))", desc: "Monolithic Drone Cult.", tags: ["Drone", "Cult", "Short"], youtubeId: "hosjcMN-qxY" },
  { title: "Organic Vortex", desc: "Secuencia audiovisual narrativa subdividida en 7 partes. Combina texturas fungi, estética nine inch noize, private music y un viaje hacia dentro.\n\nContiene los volúmenes:\nPt.1 (Prólogo Fungi), Pt.2 (Nine Inch Noize), Pt.3 (Private Music part I), Pt.4 (Private Music part II), Pt.5 (Viajes 1), Pt.6 (Viajes 2), Pt.7 (Epílogo).", tags: ["Secuencia", "Fungi", "Viajes", "Noize"], youtubeId: ["MCN7atQeWpE", "UmXpLN38XaY", "KeJY2P_gpjw", "vUTaEQiIr5I", "ZbrYXOooG50", "CCCP-iVO-_0", "KLYAlzzvTeg"] },
  { title: "Ciclo: Descomposición", desc: "Ciclo de secuencias audiovisuales enfocado en la descomposición, texturas orgánicas y transformaciones.", tags: ["Ciclo", "Descomposición", "Secuencia"], youtubeId: ["DPv9NFzRaGw", "UcmEGqnRUjU", "HODUaBDX6tA", "oOCBXXfT2yo", "unp2msfquUg", "VZrkrC9SoOU", "tzNeGZ3O5iA", "HkJtlik4Yw0", "jERI_OolPIo", "azJxyV5-EbM", "lDB7xsMUDGk"] },
  { title: "The Grower", desc: "Corto experimental de sci-fi creado en Runway, diseño sonoro y síntesis análoga/digital.\n\nInspirado en la roca volcánica y el playón de las faldas del Volcán Villarrica, el mundo fungi, la synth music de los 80s, Alien, el trabajo de John Carpenter y el universo visual de Fred Stuhr y Adam Jones para Tool, todo eso a la licuadora.\n\nToda la música fue compuesta y producida con synths de la suite Arturia: MiniMoog, Korg MS-20, Jupiter-8 y LABS de Spitfire Audio, construyendo una atmósfera industrial, orgánica y densa para este universo biológico Fungi. Lo que pueden escuchar al final son bandurrias procesadas con octavador, delay y reverb.", tags: ["Micología", "Transformación", "Paisaje"], youtubeId: "ifKqvNUGfsU" },
  { title: "Festival Reino Fungi 2026", desc: "Serie de piezas audiovisuales creadas para el Festival Reino Fungi 2026.", tags: ["Festival", "Reino Fungi", "Audiovisual"], youtubeId: ["8c63J72L63k", "c6-evQzGNRc", "IYebp1-3ERg", "F_b_JvZUtIg"] },
  { title: "Jellyfied Forest", desc: "Secuencia audiovisual sobre un ecosistema de bosque gelatinificado.", tags: ["Bosque", "Gelatina", "Fluidez"], youtubeId: ["XgMbQbmBCfs", "tPjJn5GoZT8", "eaeokKjx2Yk"] },
  { title: "CRTQUIN", desc: "El video se desarrolló como una experiencia inmersiva en primera persona, articulando territorio y tecnología desde CRTIC Lab Pucón. 🗻\n\nEl proceso comenzó con la creación de prompts narrativos y visuales en ChatGPT 5.2, enfocados en el cruce entre el paisaje local (bosque y volcán) y capas digitales. Estos prompts fueron implementados en Runway (Image to Video), a partir de imágenes de referencia y un proceso reiterativo de ajustes para definir movimiento, ritmo y atmósfera.\n\nTodo el material visual fue generado mediante inteligencia artificial. La música es el único elemento no creado con IA, fue compuesta, grabada y mezclada íntegramente por @claudiolaragallardo, autor de toda la pieza.\n\nEl resultado es una obra que impregna territorialidad del sur de Chile en una experiencia tecnocreativa, integrando naturaleza, realidad virtual y experimentación de laboratorio.", tags: ["CRTIC", "Runway AI", "Inmersivo"], youtubeId: "IA5lCbnYhq8" },
];

const P_TOUCHDESIGNER = [
  { title: "Carpintero", desc: "Aves del Sur de Chile · pieza 2.\n\nUn tronco escaneado con Gaussian Splatting que responde en tiempo real al canto del carpintero negro (rere).\n\nVisuales en TouchDesigner, música original.", tags: ["TouchDesigner", "Gaussian Splatting", "Audiorreactivo", "Aves del Sur"], youtubeId: "T3FcsGlxQ18" },
  { title: "Chucao", desc: "Aves del Sur de Chile · pieza 1.\n\nUna tela de micelio y musgo que reacciona en tiempo real a mi tema Chucao Drone, donde se cruzan el canto del chucao, ave del bosque templado del sur de Chile, con sintetizadores.\n\nCada sonido deja su huella en la tela: el canto del chucao enciende hebras rojas, los bajos aceleran su flujo y la armonía aguda abre un anillo de luz por cada nota.\n\nMúsica y visuales: Claudio Lara. Hecho en TouchDesigner, GLSL y audio en tiempo real.", tags: ["TouchDesigner", "GLSL", "Audiorreactivo", "Aves del Sur"], youtubeId: "hqw-mtzuKpA" },
  { title: "Cromo Void 360", desc: "Versión VR.\n\nUna esfera de seda plateada con espinas que crece, te envuelve y te atraviesa, al ritmo de NG1, mi tema original.\n\nHecho en TouchDesigner con shaders GLSL, renderizado en 360° a 4K y 60 fps, y probado en Meta Quest.", tags: ["TouchDesigner", "GLSL", "VR 360°", "Meta Quest"], youtubeId: "s8czeGna9G4" },
  { title: "StreamDiffusion en tiempo real", desc: "De SDXL a SD1.5 + LCM: la migración necesaria para que ControlNet reconociera manos y dedos en tiempo real. Después de muchas horas de debugging —engines de TensorRT, step schedules, feedback loops y varios ajustes más— encontramos el equilibrio entre estabilidad y libertad creativa.\n\nLa cámara interpreta tu movimiento con MediaPipe y StreamDiffusion lo transforma en tiempo real. Acá, dos variantes del mismo sistema:\n\n-Biomecánico: cráneo alargado, manos venosas y una estética inspirada en H.R. Giger.", tags: ["TouchDesigner", "ControlNet", "StreamDiffusion", "MediaPipe"], youtubeId: "vcqQJSAD3Xc" },
];

const P_STOPMOTION = [
  { title: "Diorama Paul's Boutique", desc: "Proyecto inspirado en el álbum de Beastie Boys. Construcción de un universo visual miniaturizado utilizando dioramas digitales e IA generativa.", tags: ["Stop Motion", "Dioramas", "Cultura Hip Hop"], youtubeId: "Taj1IvvIfPM" },
];

const P_ANIMACION = [
  { title: "La Llamada De Las Araucarias", desc: "Otra pieza de animación creada bajo la excusa de grabar sintetizadores de la suite Arturia, con mucha influencia del trabajo de John Carpenter y también de Survive. Usé un Buchla, Juno 6, Minimoog y un Prophet5. 80s Sci-fi shit", tags: ["Animación", "Sci-Fi", "Sintetizadores"], youtubeId: "L5lRsdUDM6w" },
];

const P_INVESTIGACION = [
  { title: "Tecnología. Cuerpo. Presencia.", desc: "Un ejercicio visual desarrollado para CRTIC donde la moda, el movimiento y los nuevos medios se encuentran en un mismo espacio.\n\nUna exploración estética inspirada en el lenguaje editorial contemporáneo: formas arquitectónicas, texturas digitales y gestos mínimos que transforman el cuerpo en interfaz.\n\nPorque la innovación también puede ser una experiencia sensible.", tags: ["Moda", "CRTIC", "Short"], youtubeId: "uXs-vFxjfMw" },
];

const P_INTERACTIVO = [
  {
    title: "LO QUE QUEDA · 2036",
    desc: "¿Qué lugar estás dejando?\n\nInstalación interactiva en tiempo real. Te paras frente a un reflejo y tu cuerpo se vuelve un esqueleto de luz, rodeado de siete lugares de Pucón: el volcán Rukapillan, el lago Mallolafken, el río Trancura, el humedal, Huerquehue, Caburgua y Quelhue. Si sostienes la mano sobre uno, el año avanza a 2036 y el lugar llena la pantalla en relieve satelital, como podría estar si seguimos así. Con las dos manos arriba dibujas tus iniciales en el aire, y tu firma queda orbitando ese lugar para quien venga después.\n\nDesarrollada en TouchDesigner, con MediaPipe para leer el cuerpo sin sensores y datos abiertos: imágenes Sentinel-2, elevación real del terreno, especies amenazadas y alertas del volcán.\n\nNació de lo que vivió Pucón en 2026: un lago declarado zona saturada, ríos que obligaron a evacuar y un humedal bajo presión. Al salir, un QR entrega una guía con lo que podemos hacer hoy: lo-que-queda-2036.vercel.app",
    tags: ["TouchDesigner", "MediaPipe", "Instalación Interactiva", "Datos Satelitales", "Pucón"],
    url: "/assets/video/lo_que_queda_2036.mp4",
    thumb: "/assets/images/lo_que_queda_2036.jpg"
  },
  {
    title: "Mapa Micológico Araucanía", 
    desc: "Una visualización 3D interactiva de los hongos de la Región.\n\nCada hongo es una observación real georeferenciada, con datos en vivo de GBIF e iNaturalist. Desde el Digüeñe sagrado hasta el Loyo en peligro de extinción — 85 especies distribuidas sobre un mapa 3D de volcanes, lagos y bosques de La Araucanía.\n\nIncluye nombres en mapuzungún, temporadas de fructificación, fotos reales y referencias etnomicológicas del Pueblo Mapuche.", 
    tags: ["Visualización 3D", "Interactivo", "Región de La Araucanía", "Desarrollo Web"], 
    externalUrl: "https://claudiolaragallardo.github.io/reino-fungi-araucania/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnWyczvBQbAuICYaxkqIX8cfslm2NqxpYI6vD-EUN98htNpoNVR08BoeJnvvI_aem_IlzEM-WiXZTXJj9xvtyDrg" 
  }
];

const LINEAS_INV = [
  "Inteligencia Artificial Generativa", "Naturaleza y territorio", "Bosques templados lluviosos", "Cultura del sur de Chile", "Micología", "Misticismo y ciencia ficción", "Cine experimental", "Stop motion digital", "Producción virtual", "Narrativas inmersivas", "Música y audiovisual", "Memoria y paisaje", "Futurismo ecológico", "Arte tecnocreativo"
];

const DESTACADO = {
  ...P_INTERACTIVO[0],
  lead: "¿Qué lugar estás dejando? Instalación interactiva en tiempo real, hecha en TouchDesigner: tu cuerpo se vuelve luz entre siete lugares de Pucón y, al tocar uno, lo ves como podría estar en 2036."
};

const ALL_PROJECTS = [
  { section: 'Medios Interactivos', items: P_INTERACTIVO },
  { section: 'Touch­Designer', items: P_TOUCHDESIGNER },
  { section: 'Proyectos Audiovisuales', items: P_AUDIOVISUALES },
  { section: 'Stop Motion Digital', items: P_STOPMOTION },
  { section: 'Animación & Fantasía', items: P_ANIMACION },
  { section: 'Investigación CRTIC', items: P_INVESTIGACION }
];



export default function App() {
  const [projects, setProjects] = useState(ALL_PROJECTS);
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: "", desc: "", category: "Proyectos Audiovisuales", youtubeId: "" });

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    let videoId = newVideo.youtubeId;
    if (videoId.includes("v=")) videoId = videoId.split("v=")[1].split("&")[0];
    else if (videoId.includes("youtu.be/")) videoId = videoId.split("youtu.be/")[1].split("?")[0];
    
    const newProj = { title: newVideo.title, desc: newVideo.desc, tags: ["Nuevo"], youtubeId: videoId };
    setProjects(projects.map(p => p.section === newVideo.category ? { ...p, items: [newProj, ...p.items] } : p) as any);
    setIsAddingVideo(false);
    setNewVideo({ title: "", desc: "", category: "Proyectos Audiovisuales", youtubeId: "" });
  };

  const [activeVideo, setActiveVideo] = useState<{title: string, url?: string, youtubeId?: string | string[], externalUrl?: string} | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenVideo = (videoInfo: {title: string, url?: string, youtubeId?: string | string[], externalUrl?: string} | null) => {
    setActiveVideo(videoInfo);
    setActiveSubIndex(0);
  };

  return (
    <div className="min-h-screen bg-[#E2DFD8] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#E2DFD8] relative cursor-auto md:cursor-none">
      
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[200] hidden md:flex items-center justify-center"
        animate={{ 
          x: mousePos.x - 12, 
          y: mousePos.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        {/* Halo naranja difuminado */}
        <div className="absolute w-16 h-16 bg-[#FF5A00]/15 rounded-full blur-[16px]" />

        {/* Cursor central con blend */}
        <div className="relative w-full h-full rounded-full border border-[#111111] mix-blend-difference bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-1 h-1 bg-[#111111] rounded-full" />
        </div>
      </motion.div>

      <AnimatePresence>
      {activeVideo && (
        <motion.div 
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-12"
        >
          <button 
            onClick={() => handleOpenVideo(null)}
            className="absolute top-6 right-6 text-[#E2DFD8] hover:text-white hover:scale-105 transition-all font-mono text-xs tracking-widest uppercase z-10 flex items-center gap-2 group cursor-none"
          >
            <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">Cerrar</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/50 group-hover:bg-white group-hover:text-black transition-colors">
              <X size={16} />
            </div>
          </button>
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-6xl flex flex-col gap-6"
          >
            <div className="w-full aspect-video bg-black relative border border-white/10 shadow-2xl flex justify-center items-center overflow-hidden rounded-sm">
              {activeVideo.externalUrl ? (
                <iframe
                  src={activeVideo.externalUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-contain bg-white"
                />
              ) : activeVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${Array.isArray(activeVideo.youtubeId) ? activeVideo.youtubeId[activeSubIndex] : activeVideo.youtubeId}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-contain"
                />
              ) : activeVideo.url ? (
                <video 
                  src={activeVideo.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#111111]">
                  <span className="text-white/50 font-mono text-sm tracking-widest uppercase">
                    [ Elemento Multimedia ]
                  </span>
                  <span className="text-[#E2DFD8] font-serif text-3xl sm:text-4xl italic tracking-tighter uppercase text-center px-4 max-w-2xl">
                    {activeVideo.title}
                  </span>
                  <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase mt-4">
                    [ Conectando flujo ]
                  </span>
                </div>
              )}
            </div>
            
            {/* Playlist Thumbs for Multiple Videos */}
            {Array.isArray(activeVideo.youtubeId) && activeVideo.youtubeId.length > 1 && (
              <div className="w-full flex gap-3 overflow-x-auto pb-4 scrollbar-hide shrink-0 snap-x">
                 {activeVideo.youtubeId.map((id, index) => (
                    <button 
                      key={id}
                      onClick={() => setActiveSubIndex(index)}
                      className={`relative shrink-0 w-32 md:w-40 aspect-[16/9] overflow-hidden rounded-sm transition-all snap-start md:cursor-none ${activeSubIndex === index ? 'ring-2 ring-white scale-100' : 'ring-1 ring-white/20 hover:ring-white/50 scale-95 opacity-50 hover:opacity-100'}`}
                    >
                      <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt={`Part ${index + 1}`} className="w-full h-full object-cover grayscale transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white text-[10px] font-mono tracking-widest uppercase">
                        Part {index + 1}
                      </div>
                    </button>
                 ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      <AnimatePresence>
      {isAddingVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
        >
          <div className="w-full max-w-lg bg-[#111111] p-8 border border-white/20 shadow-2xl relative">
            <button 
              onClick={() => setIsAddingVideo(false)}
              className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            >
              <X size={20} />
            </button>
            <h2 className="text-white text-2xl font-serif italic mb-6">Subir Video Nuevo</h2>
            <form onSubmit={handleAddVideo} className="flex flex-col gap-4 text-[#E2DFD8]">
              <div>
                <label className="text-xs uppercase tracking-widest opacity-60 mb-1 block">Categoría</label>
                <select 
                  value={newVideo.category}
                  onChange={e => setNewVideo({...newVideo, category: e.target.value})}
                  className="w-full bg-black border border-white/20 p-2 text-sm focus:border-[#FF5A00] outline-none"
                >
                  {projects.map(p => <option key={p.section} value={p.section}>{p.section}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest opacity-60 mb-1 block">Título</label>
                <input 
                  type="text" 
                  required
                  value={newVideo.title}
                  onChange={e => setNewVideo({...newVideo, title: e.target.value})}
                  className="w-full bg-black border border-white/20 p-2 text-sm focus:border-[#FF5A00] outline-none"
                  placeholder="Ej: Nuevo Documental"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest opacity-60 mb-1 block">Link YouTube</label>
                <input 
                  type="text" 
                  required
                  value={newVideo.youtubeId}
                  onChange={e => setNewVideo({...newVideo, youtubeId: e.target.value})}
                  className="w-full bg-black border border-white/20 p-2 text-sm focus:border-[#FF5A00] outline-none"
                  placeholder="Ej: https://youtube.com/watch?v=..."
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest opacity-60 mb-1 block">Descripción</label>
                <textarea 
                  rows={3}
                  value={newVideo.desc}
                  onChange={e => setNewVideo({...newVideo, desc: e.target.value})}
                  className="w-full bg-black border border-white/20 p-2 text-sm focus:border-[#FF5A00] outline-none resize-none"
                  placeholder="Breve descripción..."
                />
              </div>
              <button 
                type="submit"
                className="mt-4 w-full bg-[#FF5A00] text-black font-bold uppercase tracking-widest text-sm p-3 hover:bg-[#E62E00] transition-colors"
              >
                Agregar Proyecto
              </button>
            </form>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Top Navbar */}
      <nav className="flex justify-between items-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4 py-3 border-b border-grid sticky top-0 bg-[#E2DFD8] z-50">
         <div className="flex gap-4 sm:gap-8 origin-left w-1/3">
          <a href="#" className="hover:opacity-60 transition-opacity md:cursor-none">Inicio</a>
          <a href="#proyectos" className="hover:opacity-60 transition-opacity hidden sm:block md:cursor-none">Archivo</a>
          <a href="#declaracion" className="hover:opacity-60 transition-opacity hidden md:block md:cursor-none">Declaración</a>
        </div>
        
        <div className="w-1/3 text-center font-display text-xl sm:text-2xl font-bold tracking-tighter whitespace-nowrap">
          CLAUDIO LARA <span className="font-serif italic font-normal text-xl sm:text-2xl opacity-80">- CLG LABS</span>
        </div>

        <div className="flex gap-4 sm:gap-8 origin-right w-1/3 justify-end items-center">
          <a href="#investigacion" className="hover:opacity-60 transition-opacity hidden sm:block md:cursor-none">Investigación</a>
          <a href="#contacto" className="hover:opacity-60 transition-opacity md:cursor-none">Contacto</a>
          <span className="border border-grid px-2 py-0.5 rounded-full ml-2 sm:ml-4 flex items-center gap-1 font-mono md:cursor-none">ES <ArrowRight size={10} className="rotate-90"/></span>
        </div>
      </nav>

      <main className="max-w-[1920px] mx-auto border-x border-grid relative flex flex-col selection:bg-[#111111] selection:text-[#E2DFD8]">
        
        {/* Info Bar 1 */}
        <div className="flex flex-col sm:flex-row justify-between text-[10px] font-mono font-medium uppercase tracking-widest px-4 py-2 border-b border-grid opacity-80 bg-[#E2DFD8]">
          <span>[ Experimental & Audiovisual ]</span>
          <span className="hidden sm:block">Sur de Chile / Global</span>
          <span className="hidden md:block">Index / Archive / About</span>
          <span>Studio ©{new Date().getFullYear()}</span>
        </div>

                        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] border-b border-grid overflow-hidden bg-[#E2DFD8]">
          {/* Main Hero Background Logo */}
          <div className="absolute inset-0 z-0">
               <img 
                 src={logo}
                 alt="CLG LABS"
                 className="w-full h-full object-cover pointer-events-none select-none"
               />
          </div>

          {/* Subtitle / Subheading */}
          <div className="absolute bottom-0 left-0 z-20 p-4 md:p-8 pointer-events-none">
             <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] leading-[0.9] tracking-tighter font-semibold font-display text-white drop-shadow-lg uppercase max-w-5xl"
              >
                Portafolio audiovisual<br className="md:hidden" /> & experimentación <span className="font-serif italic text-white/90">IA.</span>
             </motion.h2>
          </div>
        </section>
        
        <HeroGallery />

         {/* Introduction / About */}
        <section className="px-4 py-16 md:py-32 border-b border-grid bg-[#111111] text-[#E2DFD8]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-[10px] font-mono tracking-widest uppercase opacity-60 mb-6 border-b border-[#E2DFD8]/20 pb-2 flex justify-between items-center">
                <span>Sobre el creador</span>
                <span className="font-serif italic text-sm">(01)</span>
              </h3>
              <p className="font-mono text-xs sm:text-sm leading-[1.8] opacity-80 text-justify hyphens-auto mt-8">
                Práctica interdisciplinaria entre el cine experimental, la videocreación, los videoclips, la instalación audiovisual y la investigación tecnocreativa.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.1] tracking-tighter opacity-100 mb-12 uppercase text-white/90">
                Artista audiovisual, músico y tecnocreativo radicado en el sur de Chile. 
                Explorando la intersección entre <span className="font-serif italic font-light text-white">IA, narrativas experimentales, nuevos medios, naturaleza y memoria territorial.</span>
              </p>
              <p className="text-sm md:text-lg opacity-60 leading-relaxed font-sans max-w-3xl border-l pl-4 border-white/20">
                Desarrollo proyectos utilizando herramientas de IA generativa, animación, video experimental, stop motion digital, producción virtual, composición audiovisual y diseño de experiencias inmersivas.
              </p>
            </div>
          </div>
        </section>

        {/* High-Impact Gallery - Sunderer Highlight */}
        <section className="bg-black p-0 border-b border-grid w-full">
          <div className="w-full flex h-auto lg:h-[75vh]">
            
            <motion.div 
              className="flex-1 relative overflow-hidden group md:cursor-none bg-zinc-900 aspect-video lg:aspect-auto"
              onClick={() => handleOpenVideo({ title: DESTACADO.title, url: DESTACADO.url })}
            >
                <img src="/assets/images/lo_que_queda_2036_destacado.jpg" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" alt="LO QUE QUEDA · 2036: visitante convertido en esqueleto de luz frente al reflejo" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-end pointer-events-none text-[#E2DFD8]">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div className="flex flex-col gap-3 max-w-2xl">
                       <span className="font-mono text-xs md:text-sm tracking-widest text-[#E2DFD8]/60 uppercase">Único Destacado</span>
                       <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tighter leading-none">
                         {DESTACADO.title}
                       </h2>
                       <p className="text-[#E2DFD8]/80 text-sm md:text-base mt-2">
                         {DESTACADO.lead}
                       </p>
                     </div>
                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 hidden md:flex items-center justify-center backdrop-blur-md opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 bg-white/10">
                        <Play fill="white" className="ml-1" size={28} />
                     </div>
                   </div>
                </div>
            </motion.div>

          </div>
        </section>

         {/* Index / Projects Archive */}
        <section id="proyectos" className="bg-[#E2DFD8] border-b border-grid">
          
          <div className="px-4 py-16 md:p-32 border-b border-grid bg-[#111111] text-[#E2DFD8] flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
             <h2 className="text-[16vw] lg:text-[10vw] leading-[0.8] tracking-tighter font-display font-bold uppercase text-white">Archivo <br/><span className="font-serif italic font-normal text-white/50">Visual</span></h2>
             <p className="text-xs font-mono tracking-widest uppercase opacity-60 md:text-right max-w-sm">
                Índice completo de proyectos, investigaciones y piezas audiovisuales categorizadas por formato y dirección de arte.
             </p>
          </div>

          {ALL_PROJECTS.map((category, idx) => (
              <div key={idx} className="border-b border-grid last:border-b-0 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-grid group">
                 
                 {/* Left Side: Category Box */}
                 <div className="w-full lg:w-1/3 p-8 md:p-16 bg-[#E2DFD8] group-hover:bg-[#d5d2cb] transition-colors relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                    <span className="absolute -bottom-8 -right-8 text-[35vw] lg:text-[20vw] font-serif italic text-black/5 pointer-events-none select-none leading-none">
                       {(idx+1).toString().padStart(2,'0')}
                    </span>
                    <div className="flex justify-between items-center w-full z-10 border-b border-grid pb-4 mb-4 opacity-50">
                      <p className="text-[10px] font-mono tracking-widest uppercase font-semibold">Categoría / {(idx+1).toString().padStart(2,'0')}</p>
                      <ArrowRight size={14} className="" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tighter font-display font-bold uppercase relative z-10 text-[#111111]">{category.section}</h2>
                 </div>
                 
                 {/* Right Side: Projects list */}
                 <div className="w-full lg:w-2/3 flex flex-col divide-y divide-grid bg-[#E2DFD8]">
                    {category.items.map((item, itemIdx) => (
                        <div 
                          key={itemIdx} 
                          className="relative overflow-hidden p-6 md:px-16 md:py-12 transition-all duration-300 group/item md:cursor-none flex flex-col lg:flex-row gap-12 justify-between"
                          onClick={() => handleOpenVideo({ title: item.title, youtubeId: (item as any).youtubeId, url: (item as any).url, externalUrl: (item as any).externalUrl })}
                        >
                           {/* Acrylic Background Effect on Hover */}
                           <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 bg-black/5 -z-30 pointer-events-none" />
                           {/* Inner yellow/orange glows (liquid light effect) */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square md:w-[600px] bg-gradient-to-r from-[#FFCC00] via-[#FF5A00] to-[transparent] rounded-full blur-[60px] md:blur-[80px] animate-[spin_8s_linear_infinite] opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 -z-20 pointer-events-none" style={{ transformOrigin: 'calc(50% + 15%) calc(50% + 5%)' }} />
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square md:w-[500px] bg-gradient-to-l from-[#FF5A00] via-[#E62E00] to-[transparent] rounded-full blur-[50px] md:blur-[70px] animate-[spin_12s_linear_infinite_reverse] opacity-0 group-hover/item:opacity-90 transition-opacity duration-700 -z-20 pointer-events-none" style={{ transformOrigin: 'calc(50% - 10%) calc(50% - 15%)' }} />
                           {/* Acrylic Glass Surface */}
                           <div className="absolute inset-0 bg-[#FF5A00]/20 backdrop-blur-[30px] opacity-0 group-hover/item:opacity-100 transition-all duration-300 shadow-[inset_0_2px_12px_rgba(255,255,255,0.6),inset_0_0_30px_rgba(255,90,0,0.8)] border border-transparent group-hover/item:border-[#FF5A00]/60 -z-10 pointer-events-none" />

                           <div className="relative z-10 flex-1 flex flex-col justify-center">
                             <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                                 <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight uppercase leading-[0.9] group-hover/item:pl-4 transition-all duration-300 text-[#111111] group-hover/item:text-[#111111] flex items-center pr-4">
                                   {item.title}
                                 </h3>
                                 <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 shrink-0 lg:hidden flex gap-2 items-center">
                                   <span>P{(idx+1).toString().padStart(2,'0')}.{(itemIdx+1).toString().padStart(2,'0')}</span>
                                   <ArrowUpRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity"/>
                                 </div>
                             </div>
                             
                             <div className="opacity-0 max-h-0 group-hover/item:opacity-100 group-hover/item:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out group-hover/item:mb-8">
                               <p className="opacity-80 md:w-[90%] leading-relaxed text-sm font-sans whitespace-pre-wrap pl-4 border-l border-[#111111]/40 text-[#111111]">
                                 {item.desc}
                               </p>
                             </div>

                             <div className="flex flex-wrap gap-2 group-hover/item:pl-4 transition-all duration-300">
                               {item.tags.map((tag, tIdx) => (
                                   <span key={tIdx} className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 border border-[#111111]/20 group-hover/item:border-[#111111]/40 rounded-full opacity-60 group-hover/item:opacity-90 group-hover/item:bg-[#111111]/10 transition-all text-[#111111] group-hover/item:text-[#111111]">
                                     {tag}
                                   </span>
                               ))}
                             </div>
                           </div>
                           
                           {/* Thumbnail Side */}
                           <div className="flex flex-col items-start lg:items-end shrink-0 hidden sm:flex justify-center h-full">
                             <div className="text-[10px] font-mono uppercase tracking-widest opacity-30 whitespace-nowrap hidden lg:flex items-center gap-3 mb-6 mix-blend-difference group-hover/item:opacity-70 group-hover/item:text-[#E2DFD8] transition-all">
                               <span>P{(idx+1).toString().padStart(2,'0')}.{(itemIdx+1).toString().padStart(2,'0')}</span>
                               <span className="w-8 h-[1px] bg-current" />
                               <span className="flex items-center gap-1 group-hover/item:translate-x-1 transition-transform">Ver {((item as any).externalUrl) ? 'Web' : 'Video'} <ArrowUpRight size={10} /></span>
                             </div>
                             
                             {((item as any).youtubeId || (item as any).url || (item as any).externalUrl) && (
                               <div className="w-full sm:w-56 xl:w-72 aspect-[16/9] bg-[#111111] overflow-hidden relative rounded-sm shadow-sm group-hover/item:shadow-xl transition-all duration-500 ring-1 ring-black/5 group-hover/item:ring-[#111111]/20 group-hover/item:-translate-y-2 group-hover/item:-translate-x-2">
                                 <img 
                                   src={(item as any).thumb ? (item as any).thumb : (item as any).youtubeId ?`https://img.youtube.com/vi/${Array.isArray((item as any).youtubeId) ? (item as any).youtubeId[0] : (item as any).youtubeId}/hqdefault.jpg` : "https://images.unsplash.com/photo-1542289420-1a73cbde90cb?q=80&w=800&auto=format&fit=crop"} 
                                   alt={item.title}
                                   className="w-full h-full object-cover grayscale opacity-30 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 ease-out group-hover/item:scale-105"
                                 />
                                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5A00] to-[#E62E00] text-[#111111] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_12px_rgba(255,51,0,0.5)] flex items-center justify-center pl-1 scale-50 group-hover/item:scale-100 transition-transform duration-500 delay-100">
                                      <Play className="w-5 h-5" fill="currentColor" />
                                    </div>
                                 </div>
                                 {Array.isArray((item as any).youtubeId) && (
                                     <div className="absolute bottom-2 right-2 bg-gradient-to-br from-[#FF5A00] to-[#E62E00] backdrop-blur-md px-2 py-1 text-[#111111] font-bold font-mono text-[9px] uppercase tracking-widest rounded-sm opacity-0 group-hover/item:opacity-100 transition-opacity shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_8px_rgba(255,51,0,0.3)]">
                                       {(item as any).youtubeId.length} Partes
                                     </div>
                                 )}
                               </div>
                             )}
                           </div>
                        </div>
                    ))}
                 </div>
              </div>
          ))}
        </section>

         {/* Lines of Research Marquee */}
        <section id="investigacion" className="py-24 md:py-40 bg-[#111111] text-[#E2DFD8] border-b border-grid overflow-hidden relative flex flex-col justify-center">
            
            {/* Animación fluída (Requiere CSS) */}
            <div className="flex w-[200%] sm:w-max group mt-8 sm:mt-0 relative z-10">
               <div className="animate-marquee flex gap-8 md:gap-16 items-center px-4 md:px-8">
                  {[...LINEAS_INV, ...LINEAS_INV].map((line, idx) => (
                      <span key={idx} className="text-[10vw] sm:text-[6vw] lg:text-[4vw] font-display font-medium uppercase tracking-tighter opacity-70 whitespace-nowrap hover:opacity-100 hover:italic transition-all duration-300 md:cursor-none">
                          {line} <span className="opacity-20 mx-4 md:mx-8 font-serif">*</span>
                      </span>
                  ))}
               </div>
            </div>
        </section>

        {/* Declaration Statement */}
        <section id="declaracion" className="px-4 py-32 md:py-64 border-b border-grid bg-[#E2DFD8] flex flex-col lg:flex-row justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#E2DFD8]" />
            <div className="lg:w-1/4 flex justify-start lg:justify-center mb-16 lg:mb-0 w-full pl-0 lg:pl-0 relative z-10">
                <motion.span 
                  className="text-[30vw] lg:text-[25vw] font-serif font-bold opacity-10 leading-[0.5] select-none italic text-black"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  *
                </motion.span>
            </div>
            <div className="max-w-5xl lg:w-3/4 w-full relative z-10">
                <h3 className="text-[10px] font-mono tracking-widest uppercase opacity-50 mb-12 border-b border-grid inline-block pb-2">Declaración</h3>
                <p className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold leading-[0.9] tracking-tighter uppercase text-[#111111]">
                    Mi trabajo busca explorar nuevas formas de <span className="font-serif italic text-black/60 font-light">creación audiovisual</span> mediante la colaboración entre sensibilidad humana, tecnologías emergentes e <span className="block mt-4 italic font-serif">inteligencia artificial.</span>
                </p>
                <div className="mt-16 w-full max-w-2xl ml-auto border-t border-grid pt-8">
                  <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed font-sans text-justify hyphens-auto mt-2">
                      Me interesa especialmente cómo estas herramientas pueden amplificar imaginarios vinculados al territorio, la naturaleza, la memoria y la experimentación artística contemporánea.
                  </p>
                </div>
            </div>
        </section>

        {/* Brutalist Footer */}
        <footer id="contacto" className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-grid bg-[#E2DFD8]">
           <div className="px-6 py-16 md:p-16 md:col-span-5 flex flex-col justify-between">
              <div>
                 <p className="text-[10px] font-mono tracking-widest uppercase mb-12 opacity-50 border-b border-black/10 inline-block pb-2">
                   Contacto & Booking
                 </p>
                 <br />
                 <a href="mailto:laragallardoclaudio@gmail.com" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter hover:opacity-60 transition-opacity break-words inline-block md:cursor-none">
                   laragallardo<br/>claudio<br/>@gmail.com
                 </a>
              </div>
              <div className="flex gap-4 mt-24">
                 <a href="https://www.instagram.com/claudiolaragallardo/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111111] text-[#E2DFD8] flex items-center justify-center font-bold text-sm hover:scale-110 transition-transform uppercase font-mono hover:-rotate-12 md:cursor-none">ig</a>
                 <a href="#" className="w-12 h-12 rounded-full bg-[#111111] text-[#E2DFD8] flex items-center justify-center font-bold text-sm hover:scale-110 transition-transform uppercase font-mono hover:rotate-12 md:cursor-none">yt</a>
                 <a href="https://www.linkedin.com/in/claudio-lara-gallardo-6a728b248/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111111] text-[#E2DFD8] flex items-center justify-center font-bold text-sm hover:scale-110 transition-transform uppercase font-mono hover:-rotate-12 md:cursor-none">in</a>
              </div>
           </div>

           <div className="relative overflow-hidden px-6 py-16 md:p-16 md:col-span-7 flex flex-col justify-between items-start gap-12 text-[#111111]">
              {/* Fondo base */}
              <div className="absolute inset-0 bg-[#E2DFD8] -z-20" />
              {/* Halo naranja y amarillo intenso (Liquid look) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[800px] aspect-square bg-gradient-to-r from-[#FFCC00] via-[#FF5A00] to-[transparent] rounded-full blur-[80px] md:blur-[100px] animate-[spin_8s_linear_infinite] opacity-100 -z-10" style={{ transformOrigin: 'calc(50% + 10%) calc(50% + 10%)' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[600px] aspect-square bg-gradient-to-l from-[#FF5A00] via-[#E62E00] to-[transparent] rounded-full blur-[60px] md:blur-[80px] animate-[spin_12s_linear_infinite_reverse] opacity-90 -z-10" style={{ transformOrigin: 'calc(50% - 15%) calc(50% - 5%)' }} />
              {/* Cristal Acrílico Naranja (Neon Edge & Blur) */}
              <div className="absolute inset-0 bg-[#FF5A00]/10 backdrop-blur-[40px] shadow-[inset_0_2px_12px_rgba(255,255,255,0.8),inset_0_0_40px_rgba(255,90,0,0.8),0_0_40px_rgba(255,90,0,0.4)] border-t border-l border-white/60 -z-0 pointer-events-none" />
              <div className="absolute inset-0 border border-[#FF5A00]/50 -z-0 pointer-events-none" />
              <div className="relative z-10 font-display font-bold uppercase tracking-tighter w-full">
                <p className="text-[8vw] sm:text-[6vw] md:text-[5vw] leading-[0.9] text-[#111111]">
                   ¿Damos vida a<br/> tu <span className="font-serif italic text-[#111111]/70 font-medium">próxima idea?</span>
                </p>
              </div>
              <div className="relative z-10 w-full mt-auto">
                <div className="flex border-b border-[#111111]/30 bg-transparent h-16 w-full max-w-2xl group transition-colors focus-within:border-[#111111]">
                   <input type="email" placeholder="Ingresa tu E-mail" className="bg-transparent w-full px-4 text-sm font-mono tracking-widest placeholder:text-[#111111]/50 outline-none uppercase text-[#111111] md:cursor-none" />
                   <button className="text-[#111111] px-6 flex items-center justify-center hover:opacity-70 transition-opacity md:cursor-none">
                      <ArrowRight size={24} />
                   </button>
                </div>
              </div>
           </div>
        </footer>

        {/* Final Info Bar */}
        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest px-4 py-4 border-t border-grid opacity-60 bg-[#E2DFD8]">
          <span>© {new Date().getFullYear()} Claudio Lara</span>
          <span className="hidden md:block">Diseñado por IA</span>
          <a href="#" className="hover:opacity-100 font-bold md:cursor-none">Scroll ↑</a>
        </div>
      </main>
    </div>
  );
}

