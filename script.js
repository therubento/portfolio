const projetos = [
  {
    id: 1,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/8xpNpEc.jpeg",
    hashtag: "#festival #radio",
    titulo: "Festival MED",
    mesAno: "Junho | 2023 - 2026",
    cargo: "Locutor de Rádio",
    local: "RUA (Loulé)",
    capa: "https://i.imgur.com/bR4M7gF.jpeg",
    resumo: "Cobertura radiofónica e acompanhamento dos concertos, entrevistas e bastidores do Festival MED na zona histórica de Loulé para a RUA FM.",
    links: [
      { texto: "Teresinha Landeiro (2024)", url: "https://soundcloud.com/ruafm/teresi", icone: "mic-vocal" },
      { texto: "Cristina Branco (2024)", url: "https://soundcloud.com/ruafm/crist", icone: "mic-vocal" },
      { texto: "Nomad (2024)", url: "https://soundcloud.com/ruafm/nomad", icone: "mic-vocal" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/uDRlpMH.jpeg", titulo: "20 Anos MED" }
    ]
  },
  {
    id: 2,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/a1LtIFl.png",
    hashtag: "#festival #radio",
    titulo: "Festival F",
    mesAno: "Setembro | 2022 - 2026",
    cargo: "Locutor de Rádio",
    local: "RUA (Faro)",
    capa: "https://i.imgur.com/GhEf8kI.jpeg",
    resumo: "Emissão em direto, entrevistas a artistas e acompanhamento contínuo no Vila Adentro da cidade de Faro para a RUA FM.",
    links: [
      { texto: "Peculiar (2026)", url: "https://www.youtube.com/watch?v=qOP9UpkacNE", icone: "square-play" },
      { texto: "ATOA (2026)", url: "https://www.youtube.com/shorts/RTYjugSwaPM", icone: "square-play" },
      { texto: "Vizinhos (2025)", url: "https://soundcloud.com/ruafm/entrevista-06set25-festival-f-2025-os-vizinhos?in=ruafm/sets/festival-f-2025-1", icone: "mic-vocal" },
      { texto: "Insert Coin (2025)", url: "https://www.youtube.com/watch?v=2gQ-qG08f7I", icone: "square-play" },
      { texto: "Dino D'Santiago (2025)", url: "https://www.youtube.com/watch?v=HqIGWQC8Bww", icone: "square-play" },
      { texto: "Buba Espinho (2025)", url: "https://www.youtube.com/watch?v=d9_Qm5aSNR4", icone: "square-play" },
      { texto: "Bandidos do Cante (2025)", url: "https://www.youtube.com/watch?v=8sYlFf5cwzs", icone: "square-play" },
      { texto: "Pedro Abrunhosa (2023)", url: "https://youtu.be/-051lfIEL6M", icone: "square-play" },
      { texto: "AGIR (2022)", url: "https://soundcloud.com/ruafm/entrevista-02set22-festival-f-agir", icone: "mic-vocal" },
      { texto: "Dino d'Santiago (2022)", url: "https://soundcloud.com/ruafm/entrevista-03set22-festival-f-dino-dsantiago", icone: "mic-vocal" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/HCQNTxD.jpeg", titulo: "Insert Coin" },
      { tipo: "foto", url: "https://i.imgur.com/awy632I.jpeg", titulo: "Dino d'Santiago (2025)" }
    ]
  },
  {
    id: 3,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/Zndw010.png",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve",
    mesAno: "Maio | 2022 - 2026",
    cargo: "Locutor de Rádio",
    local: "RUA (Faro)",
    capa: "https://i.imgur.com/oPtGLjv.jpeg",
    resumo: "Cobertura integral do recinto da Semana Académica do Algarve com entrevistas a artistas, reação do público e pontos de reportagem para a rádio.",
    links: [
      { texto: "American House Party (39ª SA)", url: "https://soundcloud.com/ruafm/american-house-party-mp3-1?in=ruafm/sets/semana-academica-do-algarve-2", icone: "mic-vocal" },
      { texto: "Bandidos do Cante (38ª SA)", url: "https://soundcloud.com/ruafm/entrevista-03mai25-bandidos-do-cante-semana-academica-do-algarve-2025", icone: "mic-vocal" },
      { texto: "Maninho (38ª SA)", url: "https://soundcloud.com/ruafm/entrevista-06mai25-maninho", icone: "mic-vocal" },
      { texto: "Toy (35ª SA)", url: "https://soundcloud.com/ruafm/entrevista-03mai22-35a-semana-academica-do-algarve-toy", icone: "square-play" }
    ],
    media: []
  },
  {
    id: 4,
    destaque: true,
    categoria: "AUDIOVISUAL",
    logo: "https://i.imgur.com/dcoOUig.jpeg",
    hashtag: "#documentario",
    titulo: "Sala 31",
    mesAno: "Fevereiro 2025 - Maio 2026",
    cargo: "Realizador / Pós-Produção",
    local: "ESEC (UAlg)",
    capa: "https://i.imgur.com/XUAyVxv.jpeg",
    resumo: "Documentário de investigação e memória visual sobre os bastidores da criação e expansão das Ciências da Comunicação.",
    links: [
      { texto: "Ver no IMDB", url: "https://www.imdb.com/title/tt42718524", icone: "palette" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/W8ckrH6.jpeg", titulo: "Mesa Redonda" },
      { tipo: "foto", url: "https://i.imgur.com/JLEdyLY.jpeg", titulo: "Docentes" }
    ]
  },
  {
    id: 5,
    destaque: true,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/pT4kMQC.jpeg",
    hashtag: "#digital #radio",
    titulo: "Confissões de Um Universitário",
    mesAno: "Março 2026 - Atualidade",
    cargo: "Realizador / Pós-Produção",
    local: "RUA (UAlg)",
    capa: "https://i.imgur.com/0XGPTpI.jpeg",
    resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
    links: [
      { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "book-headphones" },
      { texto: "Ver no Youtube", url: "https://youtube.com/playlist?list=PLysOGAXKuGrC_rRX-zF5B62f1aauseKbn&si=JC5Qt6ZthPNCATCF", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/s5jM1T7.jpeg", titulo: "Gravações" }
    ]
  },
  {
    id: 6,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/JKENVyG.png",
    hashtag: "#festival #radio",
    titulo: "Albufeira Sounds",
    mesAno: "2025",
    cargo: "Locutor de Rádio",
    local: "RUA (Albufeira)",
    capa: "https://i.imgur.com/uCwstAH.jpeg",
    resumo: "Cobertura informativa e gravação de peças de áudio durante o evento Albufeira Sounds, focando no panorama musical da região.",
    links: [
      { texto: "DJ Charlie Spot (2025)", url: "https://soundcloud.com/ruafm/entrevista-08jun25-charlie?in=ruafm/sets/albufeira-sounds-2025", icone: "mic-vocal" },
    ],
    media: []
  },
  {
    id: 7,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/eJTRoOs.png",
    hashtag: "#festival #radio",
    titulo: "Albufeira Sea Fest",
    mesAno: "2025",
    cargo: "Locutor de Rádio",
    local: "RUA (Albufeira)",
    capa: "https://i.imgur.com/eF2Loqb.png",
    resumo: "Acompanhamento do festival juvenil à beira-mar, articulando entrevistas com desportistas, artistas urbanos e o público jovem.",
    links: [],
    media: []
  },
  {
    id: 8,
    destaque: true,
    categoria: "OUTROS",
    logo: "https://i.imgur.com/kPNFUvm.png",
    hashtag: "#worldskillsportugal",
    titulo: "Medalha de Ouro",
    mesAno: "Novembro | 2024",
    cargo: "Jornalista / Repórter TV",
    local: "Skills Portugal",
    capa: "https://i.imgur.com/kPhWc3g.jpeg",
    resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV.",
    links: [
      { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://i.imgur.com/im5oPxA.jpeg", titulo: "Reportagem Skills Portugal 2024 — Santa Maria da Feira" }
    ]
  },
  {
    id: 9,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    logo: "https://i.imgur.com/8l9Tv3a.png",
    hashtag: "#digital",
    titulo: "Projeto ENTR PT",
    mesAno: "Maio — Agosto | 2024",
    cargo: "Criador de Conteúdos (Freelancer)",
    local: "RTP (Lisboa)",
    capa: "https://i.imgur.com/Ieai0JX.jpeg",
    resumo: "Criação, captação e edição de formatos curtos de vídeo dinâmicos orientados para o público jovem no âmbito do projeto europeu ENTR PT.",
    links: [
      { texto: "Instagram", url: "https://www.instagram.com/pt.entr/", icone: "graph-star" },
      { texto: "Facebook", url: "https://www.facebook.com/pt.entr", icone: "graph-star" },
      { texto: "Youtube", url: "https://www.youtube.com/@ptentr", icone: "graph-star" }
    ],
    media: []
  },
  {
    id: 10,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    logo: "https://i.imgur.com/9xhqCEW.png",
    hashtag: "#congressojornalistas",
    titulo: "5º Congresso dos Jornalistas",
    mesAno: "Janeiro | 2024",
    cargo: "Jornalista Redator (Redação)",
    local: "Lisboa",
    capa: "https://i.imgur.com/3YL18sR.jpeg",
    resumo: "Integração na equipa de redação responsável pela cobertura jornalística do 5º Congresso dos Jornalistas Portugueses.",
    links: [
      { texto: "ESCS no 5º Congresso dos Jornalistas", url: "https://www.escs.upl.pt/editoriais/a-escs-no-5-congresso-dos-jornalistas", icone: "newspaper" }
    ],
    media: []
  },
  {
    id: 11,
    destaque: false,
    categoria: "OUTROS",
    logo: "https://i.imgur.com/570sRhJ.png",
    hashtag: "#investigacao",
    titulo: "Dissertação de Mestrado",
    mesAno: "2022 — 2024",
    cargo: "Investigador",
    local: "ESCS (Lisboa)",
    capa: "https://i.imgur.com/MRuUXfT.jpeg",
    resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo (o caso da RTP, SIC e TVI)'.",
    links: [
      { texto: "Ler Dissertação de Mestrado", url: "https://repositorio.ipl.pt/entities/publication/42d8c137-fd09-4856-8628-650e289524b3", icone: "file-pen" }
    ],
    media: []
  },
  {
    id: 12,
    destaque: false,
    categoria: "OUTROS",
    logo: "https://i.imgur.com/kPNFUvm.png",
    hashtag: "#worldskillsportugal",
    titulo: "Medalha de Excelência",
    mesAno: "Março | 2023",
    cargo: "Editor de Vídeo",
    local: "Skills Portugal",
    capa: "https://i.imgur.com/D0n2Ekf.jpeg",
    resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023, desempenhando as funções de Editor de Vídeo na produção de Reportagem de Televisão.",
    links: [
      { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: []
  },
  {
    id: 13,
    destaque: false,
    categoria: "OUTROS",
    logo: "",
    hashtag: "#cienciasdacomunicacao #esec #ualg",
    titulo: "Núcleo de Ciências da Comunicação (NECICom)",
    mesAno: "Fevereiro 2022 – Fevereiro 2023",
    cargo: "Coordenador do Mercado de Trabalho",
    local: "UAlg",
    capa: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    resumo: "Coordenação das pontes entre os estudantes de Ciências da Comunicação da UAlg e o mercado laboral, promovendo redes de contacto e parcerias.",
    links: [],
    media: []
  },
  {
    id: 14,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "",
    hashtag: "#radio",
    titulo: "Locutor de Rádio",
    mesAno: "Março 2022 – Atualmente",
    cargo: "Locutor de Rádio",
    local: "RUA (Faro)",
    capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    resumo: "Conceção, apresentação e produção técnica de conteúdos radiofónicos, informação diária e rubricas temáticas na rádio universitária regional.",
    links: [],
    media: []
  },
  {
    id: 15,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    logo: "https://i.imgur.com/ItJhFOP.png",
    hashtag: "#comunicacao",
    titulo: "\"Política (NÃO) Importa\"",
    mesAno: "Setembro 2020 — Novembro 2022",
    cargo: "Coordenador de Comunicação",
    local: "Projeto",
    capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
    resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
    links: [],
    media: []
  },
  {
    id: 16,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    logo: "https://i.imgur.com/G7sAQby.png",
    hashtag: "#imprensa",
    titulo: "Sul Informação",
    mesAno: "Abril 2021 — Fevereiro 2022",
    cargo: "Jornalista (Estágio Profissional)",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
    links: [
      { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt/author/rubenbento/", icone: "globe" },
      { texto: "No Algarve, «ainda é o polvo quem mais ordena»", url: "https://www.sulinformacao.pt/2022/02/no-algarve-ainda-e-o-polvo-quem-mais-ordena/", icone: "newspaper" },
      { texto: "Mais que uma Escola Profissional, Alte tem uma família em que «ninguém fica para trás»", url: "https://www.sulinformacao.pt/2021/07/mais-que-uma-escola-profissional-alte-tem-uma-familia-em-que-ninguem-fica-para-tras/", icone: "newspaper" },
      { texto: "«Instinto» salvou gamos num Parque de Lazer devastado pelas chamas", url: "https://www.sulinformacao.pt/2021/08/gamos-sobrevivem-ao-incendio-no-parque-de-lazer-da-mata-da-conceicao-de-tavira/", icone: "newspaper" }
    ],
    media: []
  },
  {
    id: 17,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    logo: "https://i.imgur.com/uBsGYaS.png",
    hashtag: "#imprensa",
    titulo: "Revista Rotary Portugal",
    mesAno: "Março 2021 – Atualmente",
    cargo: "Editor e Jornalista (Colaborador)",
    local: "Portugal",
    capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    resumo: "Redação de artigos jornalísticos, entrevistas e revisão editorial de edições periódicas da publicação Rotary em Portugal.",
    links: [],
    media: []
  },
  {
    id: 18,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    logo: "https://i.imgur.com/DrJXJX6.png",
    hashtag: "#televisao",
    titulo: "RTP (Estágio Curricular)",
    mesAno: "Março a Julho | 2020",
    cargo: "Jornalista (Estágio Curricular)",
    local: "RTP (Faro)",
    capa: "https://i.imgur.com/uiUAw6p.jpeg",
    resumo: "Escrita e edição de reportagens jornalísticas sobre variados temas. Acompanhamento do trabalho de vários jornalistas. Colaboração na edição de peças jornalísticas. Escrita e edição da Grande Reportagem \"E agora, Algarve?\"",
    links: [
      { texto: "Grande Reportagem - \"E agora, Algarve?\"", url: "https://www.youtube.com/watch?v=-Mk3Pt2fUsk", icone: "virus" }
    ],
    media: []
  },
  {
    id: 19,
    destaque: false,
    categoria: "AUDIOVISUAL",
    logo: "https://i.imgur.com/VYQUGO8.png",
    hashtag: "#cinema",
    titulo: "Segunda Opção",
    mesAno: "Março 2018 — Junho 2019",
    cargo: "Realizador, Editor, Cameraman",
    local: "Projeto",
    capa: "https://i.imgur.com/4dEE85v.png",
    resumo: "Curta-metragem académica independente onde assumi a realização, captação de imagem e montagem final.",
    links: [
      { texto: "Teaser", url: "https://vimeo.com/rubenbento243", icone: "video" },
      { texto: "Genérico", url: "https://vimeo.com/381793776", icone: "video" }
    ],
    media: []
  },
  {
    id: 20,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    logo: "https://i.imgur.com/LXefyNx.png",
    hashtag: "#radio",
    titulo: "+Jovem",
    mesAno: "Junho a Setembro | 2019",
    cargo: "Locutor de Rádio (Colaborador)",
    local: "Rádio Gilão",
    capa: "https://i.imgur.com/PH2KqJd.jpeg",
    resumo: "Apresentação e animação do programa jovem de verão na Rádio Gilão em Tavira, articulando música, agenda local e entrevistas.",
    links: [],
    media: []
  }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. SCROLL REVEAL SUAVE
    const reveals = document.querySelectorAll(".reveal");
    function handleScrollReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 80) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", handleScrollReveal);
    handleScrollReveal();

    // 2. LOGÓTIPO VOLTA AO TOPO COM MOVIMENTO SUAVE
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. NÍVEIS DE SOFTWARE (BARRAS VISUAIS DE DENSIDADE)
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = ''; 
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // Renderizar logo do cartão (se existir)
    function renderCardLogo(logoUrl) {
        if (!logoUrl || logoUrl.trim() === "") return "";
        return `<div class="card-logo-badge"><img src="${logoUrl}" alt="Logo Conteúdo"></div>`;
    }

    // 4. CONSTRUÇÃO DOS DESTAQUES
    const containerDestaque = document.getElementById("grid-destaques-trio");
    const drawerDestaque = document.getElementById("drawer-destaque");
    const itensDestaque = projetos.filter(p => p.destaque).slice(0, 3);

    function renderDestaques() {
        if (!containerDestaque) return;
        containerDestaque.innerHTML = "";
        
        itensDestaque.forEach(proj => {
            const card = document.createElement("div");
            card.className = "destaque-card-prime";
            card.id = `card-proj-${proj.id}`;
            card.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-prime-bg">
                <div class="destaque-prime-overlay">
                    ${renderCardLogo(proj.logo)}
                    <span class="card-category">${proj.hashtag}</span>
                    <h3 class="card-title-highlight">${proj.titulo}</h3>
                    <div class="card-sub-info">${proj.local} • ${proj.mesAno}</div>
                </div>
                <button class="destaque-arrow-btn" title="Expandir"><i data-lucide="chevron-down"></i></button>
            `;
            card.addEventListener("click", () => openNetflixDrawer(drawerDestaque, proj, card));
            containerDestaque.appendChild(card);
        });
    }

    // 5. CARROSSEIS POR CATEGORIA
    const categoriasMap = {
        "JORNALISMO & MEDIA": { slider: "slider-jornalismo", drawer: "drawer-jornalismo", btnL: "btn-left-jornalismo", btnR: "btn-right-jornalismo" },
        "AUDIOVISUAL": { slider: "slider-audiovisual", drawer: "drawer-audiovisual", btnL: "btn-left-audiovisual", btnR: "btn-right-audiovisual" },
        "RÁDIO & ÁUDIO": { slider: "slider-radio", drawer: "drawer-radio", btnL: "btn-left-radio", btnR: "btn-right-radio" },
        "DIGITAL & COMUNICAÇÃO": { slider: "slider-digital", drawer: "drawer-digital", btnL: "btn-left-digital", btnR: "btn-right-digital" },
        "OUTROS": { slider: "slider-outros", drawer: "drawer-outros", btnL: "btn-left-outros", btnR: "btn-right-outros" }
    };

    function renderCategorias() {
        Object.keys(categoriasMap).forEach(catName => {
            const config = categoriasMap[catName];
            const slider = document.getElementById(config.slider);
            const drawer = document.getElementById(config.drawer);
            if (!slider) return;

            const items = projetos.filter(p => p.categoria === catName);
            slider.innerHTML = "";

            items.forEach(proj => {
                const card = document.createElement("div");
                card.className = "netflix-card-16-9";
                card.id = `card-proj-${proj.id}`;
                card.innerHTML = `
                    <img src="${proj.capa}" alt="${proj.titulo}" class="card-bg-img">
                    <div class="card-gradient-overlay">
                        ${renderCardLogo(proj.logo)}
                        <span class="card-category">${proj.hashtag}</span>
                        <h4 class="card-title">${proj.titulo}</h4>
                        <div class="card-sub-info">${proj.local} • ${proj.mesAno}</div>
                    </div>
                    <button class="destaque-arrow-btn" title="Expandir"><i data-lucide="chevron-down"></i></button>
                `;
                card.addEventListener("click", () => openNetflixDrawer(drawer, proj, card));
                slider.appendChild(card);
            });

            setupCarouselButtons(config.slider, config.btnL, config.btnR);
        });
    }

    // 6. POP-UP / DRAWER
    function openNetflixDrawer(targetDrawer, proj, triggerElement) {
        document.querySelectorAll('.netflix-drawer').forEach(d => {
            d.classList.remove('active');
            d.innerHTML = '';
        });

        document.querySelectorAll('.destaque-card-prime, .netflix-card-16-9').forEach(c => c.classList.remove('active-card'));
        if (triggerElement) triggerElement.classList.add('active-card');

        let linksHTML = "";
        if (proj.links && proj.links.length > 0) {
            linksHTML = proj.links.map(l => `
                <a href="${l.url}" target="_blank" class="drawer-action-btn">
                    <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
                </a>
            `).join('');
        }

        let mediaHTML = "";
        const allPhotos = [{ url: proj.capa, titulo: "" }, ...(proj.media || [])];
        
        if (allPhotos.length > 1) {
            mediaHTML = `
                <div class="drawer-media-section">
                    <div class="drawer-media-grid">
                        ${allPhotos.map((m, idx) => `
                            <div class="media-mini-card ${idx === 0 ? 'selected-thumb' : ''}" data-img-url="${m.url}">
                                <img src="${m.url}" alt="Fotografia">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        targetDrawer.innerHTML = `
            <div class="drawer-content-wrapper">
                <div class="drawer-flex-container">
                    <div class="drawer-left-media">
                        <div class="drawer-cover-wrapper">
                            <img src="${proj.capa}" alt="${proj.titulo}" class="drawer-cover-img popup-main-img">
                            <div class="drawer-img-gradient-bottom"></div>
                        </div>
                        ${mediaHTML}
                    </div>

                    <div class="drawer-right-details">
                        <span class="card-category">${proj.hashtag}</span>
                        <h2>${proj.titulo}</h2>
                        
                        <div class="drawer-meta-boxes">
                            <div class="meta-box">
                                <span class="meta-title">Duração</span>
                                <span class="meta-value">${proj.mesAno}</span>
                            </div>
                            <div class="meta-box">
                                <span class="meta-title">Cargo</span>
                                <span class="meta-value">${proj.cargo}</span>
                            </div>
                            <div class="meta-box">
                                <span class="meta-title">Local</span>
                                <span class="meta-value">${proj.local}</span>
                            </div>
                        </div>

                        <p class="drawer-description">${proj.resumo}</p>
                        ${linksHTML ? `<div class="drawer-actions">${linksHTML}</div>` : ''}
                    </div>
                </div>
            </div>
        `;

        targetDrawer.classList.add('active');
        if (window.lucide) window.lucide.createIcons();

        const mainImg = targetDrawer.querySelector('.popup-main-img');
        targetDrawer.querySelectorAll('.media-mini-card').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const newUrl = thumb.getAttribute('data-img-url');
                if (mainImg) {
                    mainImg.style.opacity = '0.4';
                    setTimeout(() => {
                        mainImg.src = newUrl;
                        mainImg.style.opacity = '1';
                    }, 150);
                }
                targetDrawer.querySelectorAll('.media-mini-card').forEach(t => t.classList.remove('selected-thumb'));
                thumb.classList.add('selected-thumb');
            });
        });

        setTimeout(() => {
            targetDrawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }

    // 7. BOTÕES DOS CARROSSEIS
    function setupCarouselButtons(sliderId, btnLeftId, btnRightId) {
        const slider = document.getElementById(sliderId);
        const btnL = document.getElementById(btnLeftId);
        const btnR = document.getElementById(btnRightId);

        if (!slider) return;

        const updateVisibility = () => {
            const scrollLeft = slider.scrollLeft;
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (btnL) btnL.classList.toggle('visible', scrollLeft > 10);
            if (btnR) btnR.classList.toggle('visible', maxScroll - scrollLeft > 10);
        };

        btnL?.addEventListener('click', () => slider.scrollBy({ left: -320, behavior: 'smooth' }));
        btnR?.addEventListener('click', () => slider.scrollBy({ left: 320, behavior: 'smooth' }));

        slider.addEventListener('scroll', updateVisibility);
        window.addEventListener('resize', updateVisibility);
        setTimeout(updateVisibility, 200);
    }

    // 8. MINICARDS NAS EXPERIÊNCIAS E FORMAÇÕES
    function setupAssociatedProjects() {
        document.querySelectorAll('.associated-project-wrapper').forEach(wrapper => {
            const projId = parseInt(wrapper.getAttribute('data-project-id'), 10);
            const proj = projetos.find(p => p.id === projId);
            if (!proj) return;

            wrapper.innerHTML = `
                <div class="mini-project-chip" title="Ver no carrossel de Conteúdos">
                    <img src="${proj.capa}" alt="${proj.titulo}" class="mini-project-img">
                    <span class="mini-project-title">${proj.titulo}</span>
                    <i data-lucide="arrow-right" class="mini-chevron"></i>
                </div>
            `;

            wrapper.querySelector('.mini-project-chip').addEventListener('click', (e) => {
                e.stopPropagation();
                
                const targetCard = document.getElementById(`card-proj-${proj.id}`);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    const catConfig = categoriasMap[proj.categoria];
                    if (catConfig) {
                        const drawer = document.getElementById(catConfig.drawer);
                        if (drawer) openNetflixDrawer(drawer, proj, targetCard);
                    } else if (proj.destaque) {
                        const drawer = document.getElementById("drawer-destaque");
                        if (drawer) openNetflixDrawer(drawer, proj, targetCard);
                    }
                }
            });
        });
    }

    // 9. SETAS DE HIPERLIGAÇÃO CONDICIONAIS
    function setupConditionalArrows() {
        document.querySelectorAll('.card-item-with-logo[data-link]').forEach(item => {
            const linkUrl = item.getAttribute('data-link');
            if (linkUrl && linkUrl.trim() !== "") {
                const arrowBtn = document.createElement("a");
                arrowBtn.href = linkUrl;
                arrowBtn.target = "_blank";
                arrowBtn.className = "course-link-arrow";
                arrowBtn.title = "Visitar Website";
                arrowBtn.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
                item.appendChild(arrowBtn);
            }
        });
    }

    renderDestaques();
    renderCategorias();
    setupAssociatedProjects();
    setupConditionalArrows();
    if (window.lucide) window.lucide.createIcons();
});
