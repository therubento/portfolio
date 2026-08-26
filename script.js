const projetos = [
  {
    id: 1,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival MED (RUA FM)",
    mesAno: "Junho 2026",
    cargo: "Radialista",
    local: "Loulé",
    capa: "https://i.imgur.com/T4sJbZn.jpeg",
    resumo: "Cobertura radiofónica e acompanhamento dos concertos, entrevistas e bastidores do Festival MED na zona histórica de Loulé para a RUA FM.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: []
  },
  {
    id: 2,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival F (RUA FM)",
    mesAno: "Setembro 2026",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://i.imgur.com/mrTePbs.jpeg",
    resumo: "Emissão em direto, entrevistas a artistas e acompanhamento contínuo no Vila Adentro da cidade de Faro para a RUA FM.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: []
  },
  {
    id: 3,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve (2026)",
    mesAno: "Maio 2026",
    cargo: "Radialista / Repórter",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    resumo: "Cobertura integral do recinto da Semana Académica do Algarve com entrevistas a artistas, reação do público e resumos diários para a rádio.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: []
  },
  {
    id: 4,
    destaque: true,
    categoria: "AUDIOVISUAL",
    hashtag: "#documentario",
    titulo: "Sala 31",
    mesAno: "Fevereiro 2025 - Atualmente",
    cargo: "Realizador",
    local: "Universidade do Algarve",
    capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    resumo: "Documentário de investigação e memória visual sobre os bastidores da criação e expansão das Ciências da Comunicação.",
    links: [
      { texto: "Ver no IMDB", url: "https://www.imdb.com/title/tt42718524", icone: "palette" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", titulo: "Rodagem da Entrevista" }
    ]
  },
  {
    id: 5,
    destaque: true,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#digital #radio",
    titulo: "Confissões de Um Universitário",
    mesAno: "Março 2026 - Atualidade",
    cargo: "Realizador / Pós-Produção",
    local: "RUA (UAlg)",
    capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
    resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
    links: [
      { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "radio" },
      { texto: "Ver no Youtube", url: "https://youtube.com/playlist?list=PLysOGAXKuGrC_rRX-zF5B62f1aauseKbn&si=JC5Qt6ZthPNCATCF", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", titulo: "Estúdio" },
      { tipo: "foto", url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80", titulo: "Emissão" }
    ]
  },
  {
    id: 6,
    destaque: false,
    categoria: "CINEMA & AUDIOVISUAL",
    hashtag: "#documentario",
    titulo: "30 Anos de CC (Documentário)",
    mesAno: "Fevereiro 2025 – Atualmente",
    cargo: "Realizador",
    local: "Universidade do Algarve",
    capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    resumo: "Projeto documental comemorativo das três décadas de existência do curso de Ciências da Comunicação na Universidade do Algarve.",
    links: [],
    media: []
  },
  {
    id: 7,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Albufeira Sounds (2025)",
    mesAno: "2025",
    cargo: "Radialista",
    local: "Albufeira",
    capa: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    resumo: "Cobertura informativa e gravação de peças de áudio durante o evento Albufeira Sounds, focando no panorama musical da região.",
    links: [],
    media: []
  },
  {
    id: 8,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Albufeira Sea Fest (2025)",
    mesAno: "2025",
    cargo: "Radialista",
    local: "Albufeira",
    capa: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    resumo: "Acompanhamento do festival juvenil à beira-mar, articulando entrevistas com desportistas, artistas urbanos e o público jovem.",
    links: [],
    media: []
  },
  {
    id: 9,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival MED (2025)",
    mesAno: "2025",
    cargo: "Radialista / Repórter",
    local: "Loulé",
    capa: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    resumo: "Edição de 2025 da cobertura em direto do Festival MED para a RUA FM, realçando a world music e a intervenção cultural em Loulé.",
    links: [],
    media: []
  },
  {
    id: 10,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival F (2025)",
    mesAno: "Setembro 2025",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://i.imgur.com/Kvhm093.jpeg",
    resumo: "Cobertura do Festival F de 2025, realizando emissões ao vivo e reportagens de palco para a RUA FM na cidade de Faro.",
    links: [],
    media: []
  },
  {
    id: 11,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve (2025)",
    mesAno: "2025",
    cargo: "Radialista / Repórter",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    resumo: "Transmissão da energia da festa académica do Algarve em 2025, com trabalho de locução em direto e entrevistas na 'País das Maravilhas'.",
    links: [],
    media: []
  },
  {
    id: 12,
    destaque: true,
    categoria: "OUTROS",
    hashtag: "#worldskillsportugal",
    titulo: "Medalha de Ouro — Skills Portugal 2024",
    mesAno: "Novembro 2024",
    cargo: "Jornalista / Repórter TV",
    local: "Santa Maria da Feira",
    capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
    resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV.",
    links: [
      { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: [
      { tipo: "video", url: "https://youtu.be/Z6IfZJwJBfI", titulo: "Reportagem Skills Portugal 2024 — Santa Maria da Feira" }
    ]  },
  {
    id: 13,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    hashtag: "#digital",
    titulo: "Projeto ENTR PT — RTP",
    mesAno: "Maio — Agosto 2024",
    cargo: "Criador de Conteúdos (Freelancer)",
    local: "RTP — Lisboa",
    capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    resumo: "Criação, captação e edição de formatos curtos de vídeo dinâmicos orientados para o público jovem no âmbito do projeto europeu ENTR PT.",
    links: [
      { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
    ],
    media: []
  },
  {
    id: 14,
    destaque: false,
    categoria: "COMUNICAÇÃO & CREATIVIDADE",
    hashtag: "#freelance",
    titulo: "Criador de Conteúdos (Freelancer)",
    mesAno: "Maio 2024 – Agosto 2024",
    cargo: "Criador de Conteúdos Multimédia/Audiovisuais",
    local: "Lisboa",
    capa: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    resumo: "Criação de conteúdos multimédia/audiovisuais em regime freelancer para marcas, plataformas digitais e campanhas de comunicação.",
    links: [],
    media: []
  },
  {
    id: 15,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival MED (2024)",
    mesAno: "2024",
    cargo: "Radialista",
    local: "Loulé",
    capa: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    resumo: "Edição de 2024 da cobertura do Festival MED na RUA FM, valorizando a diversidade cultural e o ambiente único das ruas de Loulé.",
    links: [],
    media: []
  },
  {
    id: 16,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival F (2024)",
    mesAno: "2024",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    resumo: "Desenvolvimento de diretos rádio e reportagens relativas à edição de 2024 do Festival F na cidade antiga de Faro.",
    links: [],
    media: []
  },
  {
    id: 17,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve (2024)",
    mesAno: "2024",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=600&q=80",
    resumo: "Acompanhamento informativo e emissão em direto a partir do recinto da Semana Académica do Algarve de 2024.",
    links: [],
    media: []
  },
  {
    id: 18,
    destaque: false,
    categoria: "OUTROS",
    hashtag: "#congressojornalistas",
    titulo: "5º Congresso dos Jornalistas",
    mesAno: "Janeiro 2024",
    cargo: "Jornalista Redator (Redação)",
    local: "ESCS / Lisboa",
    capa: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80",
    resumo: "Integração na equipa de redação responsável pela cobertura jornalística do 5º Congresso dos Jornalistas Portugueses.",
    links: [],
    media: []
  },
  {
    id: 19,
    destaque: false,
    categoria: "OUTROS",
    hashtag: "#investigacao",
    titulo: "Dissertação de Mestrado (ESCS)",
    mesAno: "2022 — 2024",
    cargo: "Investigador",
    local: "Escola Superior de Comunicação Social",
    capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo (o caso da RTP, SIC e TVI)'.",
    links: [],
    media: []
  },
  {
    id: 20,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#radio",
    titulo: "Coberturas de Festivais — RUA FM",
    mesAno: "2022 — 2025",
    cargo: "Jornalista / Animador",
    local: "RUA - Rádio Universitária do Algarve",
    capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    resumo: "Locução, gravação de marcadores/spots e cobertura integral em direto de grandes eventos culturais.",
    links: [
      { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
    ],
    media: []
  },
  {
    id: 21,
    destaque: false,
    categoria: "OUTROS",
    hashtag: "#worldskillsportugal",
    titulo: "Medalha de Excelência — Skills Portugal 2023",
    mesAno: "Março 2023",
    cargo: "Editor de Vídeo",
    local: "Portimão",
    capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023, desempenhando as funções de Editor de Vídeo na produção de Reportagem de Televisão.",
    links: [
      { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: [
      { tipo: "foto", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", titulo: "..." }
    ]
  },
  {
    id: 22,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival F (2023)",
    mesAno: "2023",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=600&q=80",
    resumo: "Participação na cobertura radiofónica do Festival F em 2023, acompanhando os concertos e entrevistando diversos projetos musicais portugueses.",
    links: [],
    media: []
  },
  {
    id: 23,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve (2023)",
    mesAno: "2023",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    resumo: "Trabalho de campo e apresentação de programas especiais no recinto da Semana Académica de 2023 para a RUA FM.",
    links: [],
    media: []
  },
  {
    id: 24,
    destaque: false,
    categoria: "OUTROS",
    hashtag: "#worldskillsportugal",
    titulo: "Núcleo de Ciências da Comunicação (NECICom) – UAlg",
    mesAno: "Fevereiro 2022 – Fevereiro 2023",
    cargo: "Coordenador do Mercado de Trabalho",
    local: "Universidade do Algarve",
    capa: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    resumo: "Coordenação das pontes entre os estudantes de Ciências da Comunicação da UAlg e o mercado laboral, promovendo redes de contacto e parcerias.",
    links: [],
    media: []
  },
  {
    id: 25,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#radio",
    titulo: "RUA - Rádio Universitária do Algarve",
    mesAno: "Março 2022 – Atualmente",
    cargo: "Jornalista e Animador de rádio",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    resumo: "Conceção, apresentação e produção técnica de conteúdos radiofónicos, informação diária e rubricas temáticas na rádio universitária regional.",
    links: [],
    media: []
  },
  {
    id: 26,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#festival #radio",
    titulo: "Festival F (2022)",
    mesAno: "2022",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    resumo: "Estreia na cobertura do Festival F, assegurando diretos rádio e acolhendo os artistas na zona de imprensa.",
    links: [],
    media: []
  },
  {
    id: 27,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#semanaacademica #radio",
    titulo: "Semana Académica do Algarve (2022)",
    mesAno: "2022",
    cargo: "Radialista",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    resumo: "Acompanhamento da regresso das festividades académicas em Faro, com entrevistas e apontamentos de reportagem em direto.",
    links: [],
    media: []
  },
  {
    id: 28,
    destaque: false,
    categoria: "DIGITAL & COMUNICAÇÃO",
    hashtag: "#comunicacao",
    titulo: "Projeto \"Política (NÃO) Importa\"",
    mesAno: "Setembro 2020 — Novembro 2022",
    cargo: "Coordenador de Comunicação",
    local: "Projeto Independente",
    capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
    resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
    links: [],
    media: []
  },
  {
    id: 29,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    hashtag: "#imprensa",
    titulo: "Sul Informação",
    mesAno: "Abril 2021 — Fevereiro 2022",
    cargo: "Jornalista (Estágio Profissional)",
    local: "Sul Informação (Faro)",
    capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
    links: [
      { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
    ],
    media: []
  },
  {
    id: 30,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
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
    id: 31,
    destaque: false,
    categoria: "JORNALISMO & MEDIA",
    hashtag: "#televisao",
    titulo: "Rádio e Televisão de Portugal (RTP)",
    mesAno: "Março 2020 – Julho 2020",
    cargo: "Jornalista (Estágio Curricular)",
    local: "Faro",
    capa: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    resumo: "Escrita e edição de reportagens jornalísticas sobre variados temas. Acompanhamento do trabalho de vários jornalistas. Colaboração na edição de peças jornalísticas. Escrita e edição da Grande Reportagem \"E agora, Algarve?\"",
    links: [],
    media: []
  },
  {
    id: 32,
    destaque: false,
    categoria: "AUDIOVISUAL",
    hashtag: "#cinema",
    titulo: "Segunda Opção (Curta-Metragem)",
    mesAno: "Março 2018 — Junho 2019",
    cargo: "Realizador, Editor, Cameraman",
    local: "Tavira / Faro",
    capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
    resumo: "Curta-metragem académica independente onde assumi a direção de fotografia, captação de imagem e montagem final.",
    links: [
      { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
    ],
    media: []
  },
  {
    id: 33,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#radio",
    titulo: "+Jovem - Rádio Gilão",
    mesAno: "Junho a Setembro 2019",
    cargo: "Locutor (Colaborador)",
    local: "Tavira",
    capa: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    resumo: "Apresentação e animação do programa jovem de verão na Rádio Gilão em Tavira, articulando música, agenda local e entrevistas.",
    links: [],
    media: []
  },
  {
    id: 34,
    destaque: false,
    categoria: "RÁDIO & ÁUDIO",
    hashtag: "#radio",
    titulo: "Rádio Gilão",
    mesAno: "Junho a Setembro 2018",
    cargo: "Locutor (Colaborador)",
    local: "Tavira",
    capa: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=600&q=80",
    resumo: "Primeira experiência de emissão e locução radiofónica em rádio local, colaborando na grelha estival e na seleção musical.",
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

    // 6. POP-UP / DRAWER TOTALMENTE REMODELADO E SUAVE
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

        // Galeria posicionada exatamente abaixo da imagem de capa, sem descrições
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
                    <!-- ESQUERDA: CAPA + GALERIA EMBAIXO -->
                    <div class="drawer-left-media">
                        <div class="drawer-cover-wrapper">
                            <img src="${proj.capa}" alt="${proj.titulo}" class="drawer-cover-img popup-main-img">
                            <div class="drawer-img-gradient-bottom"></div>
                        </div>
                        ${mediaHTML}
                    </div>

                    <!-- DIREITA: INFORMAÇÕES DO PROJECTO -->
                    <div class="drawer-right-details">
                        <span class="card-category">${proj.hashtag}</span>
                        <h2>${proj.titulo}</h2>
                        
                        <!-- TRÊS CAIXAS DE INFORMAÇÃO SEPARADAS, LADO A LADO -->
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

        // Ativação da troca suave de imagem de capa ao clicar na galeria
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

    // 8. MINICARDS DE CONTEÚDOS NAS EXPERIÊNCIAS E FORMAÇÕES
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
