// DADOS DOS PROJETOS (TODAS AS INFORMAÇÕES MANTIDAS E VINCULADAS)
const projetos = [
    {
        id: 1,
        destaque: true,
        categoria: "RÁDIO & ÁUDIO",
        expId: "rua-fm",
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "Rádio Universitária do Algarve / Universidade do Algarve",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        links: [
            { texto: "Ver Episódios no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "video" }
        ],
        miniGaleria: [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 2,
        destaque: true,
        categoria: "AUDIOVISUAL",
        expId: "ualg-docente",
        hashtag: "#documentario",
        titulo: "Sala 31",
        mesAno: "2026",
        cargo: "Realizador",
        local: "Universidade do Algarve",
        capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        resumo: "Documentário independente que explora os processos criativos e bastidores na Universidade do Algarve.",
        links: [
            { texto: "Ver Trailer", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        miniGaleria: []
    },
    {
        id: 3,
        destaque: true,
        categoria: "JORNALISMO & MEDIA",
        expId: "rtp-entr",
        hashtag: "#televisao",
        titulo: "Medalha de Excelência — Skills Portugal 2023",
        mesAno: "Março 2023",
        cargo: "Editor de Vídeo",
        local: "Portimão",
        capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023, desempenhando as funções de Editor de Vídeo na produção de Reportagem de Televisão.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        miniGaleria: []
    },
    {
        id: 4,
        destaque: false,
        categoria: "JORNALISMO & MEDIA",
        expId: null,
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV, realizado sob condições de elevada exigência técnica.",
        links: [
            { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        miniGaleria: []
    },
    {
        id: 5,
        destaque: false,
        categoria: "DIGITAL & COMUNICAÇÃO",
        expId: "rtp-entr",
        hashtag: "#digital",
        titulo: "Projeto ENTR PT — RTP",
        mesAno: "Maio — Agosto 2024",
        cargo: "Criador de Conteúdos (Freelancer)",
        local: "RTP — Lisboa",
        capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        resumo: "Criação, captação e edição de formatos curtos de vídeo dinâmicos orientados para o público jovem no âmbito do projeto europeu ENTR PT transmitido pela RTP.",
        links: [
            { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
        ],
        miniGaleria: []
    },
    {
        id: 6,
        destaque: false,
        categoria: "RÁDIO & ÁUDIO",
        expId: "rua-fm",
        hashtag: "#radio",
        titulo: "Coberturas de Festivais — RUA FM",
        mesAno: "2022 — 2025",
        cargo: "Jornalista / Animador",
        local: "RUA - Rádio Universitária do Algarve",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Locução, gravação de marcadores/spots e cobertura integral em direto de grandes eventos culturais: SA do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds.",
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ],
        miniGaleria: []
    },
    {
        id: 7,
        destaque: false,
        categoria: "AUDIOVISUAL",
        expId: "licenciatura-ualg",
        hashtag: "#cinema",
        titulo: "Segunda Opção (Curta-Metragem)",
        mesAno: "Março 2018 — Junho 2019",
        cargo: "Realizador, Editor, Cameraman",
        local: "Tavira / Faro",
        capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        resumo: "Curta-metragem académica independente onde assumi a direção de fotografia, captação de imagem, realização e montagem final.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        miniGaleria: []
    },
    {
        id: 8,
        destaque: false,
        categoria: "OUTROS",
        expId: "mestrado-escs",
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "Escola Superior de Comunicação Social",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo (concluído com 17 valores): 'Nos Bastidores do Jornalismo Televisivo: quando o essencial pode ser invisível aos olhos dos telespectadores (o caso da RTP, SIC e TVI)'.",
        links: [],
        miniGaleria: []
    },
    {
        id: 9,
        destaque: false,
        categoria: "JORNALISMO & MEDIA",
        expId: "sul-informacao",
        hashtag: "#imprensa",
        titulo: "Reportagens e Peças Multimédia — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista (Estágio Profissional)",
        local: "Sul Informação (Faro)",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo (gravação, voz off e edição).",
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ],
        miniGaleria: []
    },
    {
        id: 10,
        destaque: false,
        categoria: "DIGITAL & COMUNICAÇÃO",
        expId: null,
        hashtag: "#comunicacao",
        titulo: "Política (NÃO) Importa",
        mesAno: "Setembro 2020 — Novembro 2022",
        cargo: "Coordenador de Comunicação",
        local: "Projeto Independente",
        capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
        resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
        links: [],
        miniGaleria: []
    },
    {
        id: 11,
        destaque: false,
        categoria: "JORNALISMO & MEDIA",
        expId: "mestrado-escs",
        hashtag: "#imprensa",
        titulo: "Redação no 5º Congresso dos Jornalistas",
        mesAno: "Janeiro 2024",
        cargo: "Jornalista Redator",
        local: "ESCS / Lisboa",
        capa: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80",
        resumo: "Integração na equipa de redação da ESCS responsável pela cobertura jornalística em tempo real do 5º Congresso dos Jornalistas Portugueses.",
        links: [],
        miniGaleria: []
    }
];

// DADOS DE EXPERIÊNCIA PROFISSIONAL
const experiencias = [
    {
        id: "ualg-docente",
        logo: "https://upload.wikimedia.org/wikipedia/pt/4/43/UAlg_Logo_Simbolo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        data: "Outubro 2024 — Atualidade",
        titulo: "Assistente Convidado",
        instituicao: "Universidade do Algarve (Faro)",
        desc: ["Docente da Unidade Curricular 'Produção e Edição de Vídeo' (3º ano da Licenciatura em Design de Comunicação).", "Docente responsável pelo Curso Livre em Pré-Produção Audiovisual e pelo Curso Livre em Produção Audiovisual (Impulso Mais Digital).", "Colaboração no Dia Aberto 2025 e noutras iniciativas universitárias."],
        link: "https://www.ualg.pt"
    },
    {
        id: "rtp-entr",
        logo: "https://media.rtp.pt/entr/wp-content/themes/entr/includes/img/logo-white.png",
        data: "Maio 2024 — Agosto 2024",
        titulo: "Criador de Conteúdos (Freelancer)",
        instituicao: "ENTR PT — RTP (Lisboa)",
        desc: ["Criação, produção e edição de conteúdos digitais e formatos de vídeo curtos para a plataforma europeia ENTR PT no ecossistema RTP."],
        link: "https://media.rtp.pt/entr/"
    },
    {
        id: "rua-fm",
        logo: "https://rua.pt/wp-content/uploads/2021/10/Rua2.svg",
        data: "Março 2022 — Atualidade",
        titulo: "Jornalista / Animador",
        instituicao: "RUA - Rádio Universitária do Algarve (Faro)",
        desc: ["Animador de rádio: gravação de spots, marcadores e anúncios comerciais.", "Condução de entrevistas a artistas regionais e nacionais.", "Cobertura de grandes eventos: SA do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds."],
        link: "https://www.rua.pt"
    },
    {
        id: "rotary-revista",
        logo: "https://revistarotaryportugal.pt/wp-content/uploads/2025/04/logo_nobg-e1746010110400.png",
        data: "Março 2021 — Atualidade",
        titulo: "Editor / Jornalista (Colaborador)",
        instituicao: "Revista Rotary Portugal (Híbrido)",
        desc: ["Colaboração na edição de peças jornalísticas e redação de conteúdos informativos."],
        link: null
    },
    {
        id: "sul-informacao",
        logo: "https://www.sulinformacao.pt/wp-content/uploads/2023/12/logo.png",
        data: "Abril 2021 — Fevereiro 2022",
        titulo: "Jornalista (Estágio Profissional)",
        instituicao: "Sul Informação (Faro)",
        desc: ["Escrita de notícias, breves, entrevistas e reportagens.", "Elaboração de várias reportagens jornalísticas em vídeo com gravação de imagem, narração de voz off e edição completa de peças."],
        link: "https://www.sulinformacao.pt"
    },
    {
        id: "rtp-estagio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/RTP_2026.svg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original",
        data: "Março 2020 — Julho 2020",
        titulo: "Jornalista (Estágio Curricular)",
        instituicao: "Rádio e Televisão de Portugal (Faro)",
        desc: ["Escrita e edição de reportagens jornalísticas sobre variados temas com acompanhamento aos vários jornalistas da redação.", "Escrita e edição da Grande Reportagem 'E agora, Algarve?'."],
        link: "https://www.rtp.pt"
    },
    {
        id: "radio-gilao",
        logo: "https://www.radiogilao.com/templates/radiogilao/images/blue/logo.png",
        data: "Junho — Setembro (2018 e 2019)",
        titulo: "Locutor (Colaborador)",
        instituicao: "Rádio Gilão (Tavira)",
        desc: ["Escrita e edição de reportagens jornalísticas e locução de emissão."],
        link: null
    }
];

// DADOS DE FORMAÇÃO ACADÉMICA
const educacao = [
    {
        id: "doutoramento-nova",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Log%C3%B3tipo_NOVA_FCSH.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        data: "2026 - Atualidade",
        titulo: "Ciências da Comunicação",
        instituicao: "Doutoramento - Faculdade de Ciências Sociais e Humanas (NOVA, Lisboa)",
        desc: ["Investigação avançada nos ecossistemas de média e novas linguagens comunicacionais."],
        link: null
    },
    {
        id: "mestrado-escs",
        logo: "https://www.escs.ipl.pt/sites/default/files/ESCS-Logo.png",
        data: "2022 — 2024",
        titulo: "Jornalismo",
        instituicao: "Mestrado - Escola Superior de Comunicação Social (IPL, Lisboa)",
        desc: ["O mestrado em Jornalismo conjuga componente de formação cultural e de investigação aplicada a uma componente de formação profissional e experimental.", "Dissertação: 'Nos Bastidores do Jornalismo Televisivo: quando o essencial pode ser invisível aos olhos dos telespectadores (o caso da RTP, SIC e TVI)'."],
        link: "https://www.escs.ipl.pt"
    },
    {
        id: "licenciatura-ualg",
        logo: "https://upload.wikimedia.org/wikipedia/pt/4/43/UAlg_Logo_Simbolo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        data: "2017 — 2020",
        titulo: "Ciências da Comunicação",
        instituicao: "Licenciatura - Escola Superior de Educação e Comunicação (UAlg, Faro)",
        desc: ["Média Final: 17 valores.", "Formação humanista e tecnológica nas facetas mais gerais da comunicação social, cultural e organizacional."],
        link: "https://www.ualg.pt"
    }
];

// ORGANIZAÇÕES & VOLUNTARIADO
const organizacoes = [
    { logo: "https://08e1925027.clvaw-cdnwnd.com/22ede87b6b01d2470b79e8c0fa9a4da6/200004970-8bb798bb7c/D1960-c%C3%B3pia.png?ph=08e1925027", titulo: "Rotary D.1960", cargo: "Presidente da Comissão de Imagem Pública", link: "https://rotary1960.org" },
    { logo: "https://ee96551bed.clvaw-cdnwnd.com/2027cd87e2b06b513f783c4b4826badc/200000001-a759da759f/Rotaract%20Logo%20Distrito%201960.webp?ph=ee96551bed", titulo: "Rotaract D.1960", cargo: "Representante Distrital D.1960 (AR 2025/2026)", link: "https://rotaract1960.org" },
    { logo: "", titulo: "Rotaract Club de Tavira (2018 — Atualidade)", cargo: "Diretor de Comunicação e Ex-Presidente", link: null },
    { logo: "", titulo: "Interact Club de Tavira (2016 — 2018)", cargo: "Membro Ativo", link: null },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/AEP_PT_2016_LOGO.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original", titulo: "Grupo 273 - Tavira (2018 — 2023)", cargo: "Membro do Grupo Escotista", link: null },
    { logo: "", titulo: "Núcleo de Ciências da Comunicação — UAlg", cargo: "Coordenador do Mercado de Trabalho (2022-2023)", link: null }
];

const voluntariado = [
    { logo: "https://re-food.org/wp-content/uploads/2020/02/RE-FOOD-logo-02.png", titulo: "Voluntário na Refood Tavira", cargo: null, link: "https://re-food.org" },
    { logo: "https://iconape.com/download/244649/png/", titulo: "Voluntário no Banco Alimentar", cargo: null, link: "https://bancoalimentar.pt" },
    { logo: "https://upload.wikimedia.org/wikipedia/pt/4/43/UAlg_Logo_Simbolo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original", titulo: "Colaborador no Dia Aberto UAlg", cargo: "Anos Letivos 2017/2018, 2018/2019 e 2025", link: "https://www.ualg.pt" }
];

// VARIÁVEIS DE ESTADO
let activeItemState = { sliderId: null, projId: null };

document.addEventListener("DOMContentLoaded", () => {

    // 1. RENDERIZAR CONTEÚDOS E CARROSSEIS (ESTILO NETFLIX COM POP-UP QUE ABRE PARA BAIXO)
    renderAllCarousels();

    // 2. RENDERIZAR TIMELINES COM MINI CARTÕES ASSOCIADOS
    renderTimeline("timeline-experiencia", experiencias);
    renderTimeline("timeline-educacao", educacao);

    // 3. RENDERIZAR ORGANIZAÇÕES E VOLUNTARIADO COM SETA CONDICIONAL
    renderListWithLinks("list-organizacoes", organizacoes);
    renderListWithLinks("list-voluntariado", voluntariado);

    // 4. ANIMAR BARRAS DE NÍVEL DOS SOFTWARES
    renderSoftwareLevels();

    // 5. SCROLL REVEAL E BOTÃO LOGO
    setupScrollEffects();
});

// FUNÇÃO DE CRIAÇÃO DO CARTÃO DO PROJETO (PROPORÇÃO 16:9)
function createProjectCard(proj, drawerId, sliderId) {
    const card = document.createElement("div");
    card.className = "netflix-card";
    card.setAttribute("data-id", proj.id);

    card.innerHTML = `
        <div class="netflix-card-cover-wrapper">
            <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover" loading="lazy">
            <div class="netflix-card-overlay">
                <span class="card-hashtag">${proj.hashtag || ''}</span>
                <h4 class="card-title">${proj.titulo || ''}</h4>
            </div>
            <div class="card-corner-arrow">
                <i data-lucide="chevron-down"></i>
            </div>
        </div>
    `;

    card.addEventListener("click", () => toggleNetflixDrawer(proj, drawerId, sliderId, card));
    return card;
}

// ABRIR E FECHAR O POP-UP ESTILO NETFLIX (ABRE PARA BAIXO DO CARROSSEL)
function toggleNetflixDrawer(proj, drawerId, sliderId, cardElement) {
    const drawer = document.getElementById(drawerId);
    if (!drawer) return;

    // Se clicar no cartão que já está aberto, fecha-o
    if (activeItemState.sliderId === sliderId && activeItemState.projId === proj.id) {
        closeDrawer(drawer);
        return;
    }

    // Limpar estados ativos anteriores
    document.querySelectorAll('.netflix-card').forEach(c => c.classList.remove('active-card'));
    document.querySelectorAll('.netflix-drawer').forEach(d => {
        d.classList.remove('active');
        d.style.display = 'none';
    });

    cardElement.classList.add('active-card');
    activeItemState = { sliderId: sliderId, projId: proj.id };

    // Scroll para centrar a secção
    const sectionElement = drawer.closest('.row-container') || drawer.closest('.category-block');

    // Construção dos Links e Mini Galeria
    let actionsHTML = '';
    if (proj.links && proj.links.length > 0) {
        actionsHTML = proj.links.map(l => `
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="drawer-action-btn">
                <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
            </a>
        `).join('');
    }

    let miniGalleryHTML = '';
    if (proj.miniGaleria && proj.miniGaleria.length > 0) {
        miniGalleryHTML = `
            <div class="drawer-mini-gallery">
                ${proj.miniGaleria.map(img => `<img src="${img}" alt="Fotografia" class="drawer-mini-photo">`).join('')}
            </div>
        `;
    }

    drawer.innerHTML = `
        <div class="drawer-inner">
            <button class="drawer-close-btn" onclick="closeActiveDrawer()">&times;</button>
            <div class="drawer-left">
                <img src="${proj.capa}" alt="${proj.titulo}" class="drawer-main-img">
                <div class="drawer-img-gradient"></div>
            </div>
            <div class="drawer-right">
                ${proj.hashtag ? `<span class="drawer-hashtag">${proj.hashtag}</span>` : ''}
                <h3 class="drawer-title">${proj.titulo}</h3>
                <div class="drawer-meta">
                    ${proj.mesAno ? `<span><i data-lucide="calendar"></i> ${proj.mesAno}</span>` : ''}
                    ${proj.cargo ? `<span><i data-lucide="user"></i> ${proj.cargo}</span>` : ''}
                    ${proj.local ? `<span><i data-lucide="map-pin"></i> ${proj.local}</span>` : ''}
                </div>
                <p class="drawer-description">${proj.resumo}</p>
                ${actionsHTML ? `<div class="drawer-actions">${actionsHTML}</div>` : ''}
                ${miniGalleryHTML}
            </div>
        </div>
    `;

    drawer.style.display = 'block';
    setTimeout(() => {
        drawer.classList.add('active');
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 10);

    if (window.lucide) window.lucide.createIcons();
}

function closeDrawer(drawer) {
    if (drawer) {
        drawer.classList.remove('active');
        setTimeout(() => { drawer.style.display = 'none'; }, 300);
    }
    document.querySelectorAll('.netflix-card').forEach(c => c.classList.remove('active-card'));
    activeItemState = { sliderId: null, projId: null };
}

window.closeActiveDrawer = function() {
    document.querySelectorAll('.netflix-drawer').forEach(d => closeDrawer(d));
};

// CRIAÇÃO DOS CARROSSEIS
function renderAllCarousels() {
    // 1. Em Destaque (3 Cartões)
    const destaques = projetos.filter(p => p.destaque).slice(0, 3);
    renderCarouselRow("slider-destaque", "drawer-destaque", destaques, "destaque");

    // 2. Categorias dos Projetos
    const categorias = [
        { id: "jornalismo", key: "JORNALISMO & MEDIA" },
        { id: "audiovisual", key: "AUDIOVISUAL" },
        { id: "radio", key: "RÁDIO & ÁUDIO" },
        { id: "digital", key: "DIGITAL & COMUNICAÇÃO" },
        { id: "outros", key: "OUTROS" }
    ];

    categorias.forEach(cat => {
        const list = projetos.filter(p => p.categoria === cat.key && !p.destaque);
        renderCarouselRow(`slider-${cat.id}`, `drawer-${cat.id}`, list, cat.id);
    });
}

function renderCarouselRow(sliderId, drawerId, items, categoryKey) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    slider.innerHTML = '';
    const fragment = document.createDocumentFragment();

    items.forEach(proj => {
        const card = createProjectCard(proj, drawerId, sliderId);
        fragment.appendChild(card);
    });

    slider.appendChild(fragment);
    setupCarouselNavigation(sliderId, `btn-left-${categoryKey}`, `btn-right-${categoryKey}`);
}

// NAVEGAÇÃO DOS CARROSSEIS COM SETAS
function setupCarouselNavigation(sliderId, btnLeftId, btnRightId) {
    const slider = document.getElementById(sliderId);
    const btnLeft = document.getElementById(btnLeftId);
    const btnRight = document.getElementById(btnRightId);

    if (!slider) return;

    function updateButtons() {
        const scrollLeft = slider.scrollLeft;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        if (btnLeft) btnLeft.classList.toggle("visible", scrollLeft > 10);
        if (btnRight) btnRight.classList.toggle("visible", (maxScrollLeft - scrollLeft) > 10);
    }

    btnLeft?.addEventListener("click", () => slider.scrollBy({ left: -320, behavior: "smooth" }));
    btnRight?.addEventListener("click", () => slider.scrollBy({ left: 320, behavior: "smooth" }));

    slider.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    setTimeout(updateButtons, 200);
}

// TIMELINES COM MINI CARTÕES DE CONTEÚDOS E POP-UP EXPANSÍVEL
function renderTimeline(containerId, itemsList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    itemsList.forEach(item => {
        // Encontrar conteúdos associados
        const projetosAssociados = projetos.filter(p => p.expId === item.id);

        let miniCardsHTML = '';
        if (projetosAssociados.length > 0) {
            miniCardsHTML = `
                <div class="associated-projects-row">
                    ${projetosAssociados.map(p => `
                        <div class="mini-project-card" onclick="openTimelinePopup(event, '${item.id}-${p.id}')">
                            <img src="${p.capa}" alt="${p.titulo}">
                            <div class="mini-card-overlay">
                                <span>${p.titulo}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        let linkArrowHTML = '';
        if (item.link) {
            linkArrowHTML = `
                <a href="${item.link}" target="_blank" class="corner-arrow-link" title="Visitar Website">
                    <i data-lucide="arrow-up-right"></i>
                </a>
            `;
        }

        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content hover-card">
                <div class="timeline-header">
                    <div class="timeline-logo-container">
                        ${item.logo ? `<img src="${item.logo}" alt="Logo" class="timeline-company-logo logo-white-bg">` : ''}
                    </div>
                    <span class="timeline-date">${item.data}</span>
                </div>
                <h3>${item.titulo}</h3>
                <p class="timeline-institution">${item.instituicao}</p>
                <div class="timeline-description">
                    <ul>
                        ${item.desc.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
                ${miniCardsHTML}
                ${linkArrowHTML}
                <div id="popup-${item.id}" class="timeline-drawer-popup"></div>
            </div>
        `;
        container.appendChild(timelineItem);
    });
}

// POP-UP ESTILO NETFLIX PARA MINI CARTÕES DAS EXPERIÊNCIAS
window.openTimelinePopup = function(event, key) {
    event.stopPropagation();
    const [expId, projIdStr] = key.split('-');
    const projId = parseInt(projIdStr, 10);
    const proj = projetos.find(p => p.id === projId);
    const popup = document.getElementById(`popup-${expId}`);

    if (!proj || !popup) return;

    if (popup.classList.contains('active')) {
        popup.classList.remove('active');
        setTimeout(() => { popup.style.display = 'none'; }, 300);
        return;
    }

    let actionsHTML = '';
    if (proj.links && proj.links.length > 0) {
        actionsHTML = proj.links.map(l => `
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="drawer-action-btn">
                <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
            </a>
        `).join('');
    }

    popup.innerHTML = `
        <div class="drawer-inner">
            <button class="drawer-close-btn" onclick="closeTimelinePopup('${expId}')">&times;</button>
            <div class="drawer-left">
                <img src="${proj.capa}" alt="${proj.titulo}" class="drawer-main-img">
                <div class="drawer-img-gradient"></div>
            </div>
            <div class="drawer-right">
                ${proj.hashtag ? `<span class="drawer-hashtag">${proj.hashtag}</span>` : ''}
                <h3 class="drawer-title">${proj.titulo}</h3>
                <p class="drawer-description">${proj.resumo}</p>
                ${actionsHTML ? `<div class="drawer-actions">${actionsHTML}</div>` : ''}
            </div>
        </div>
    `;

    popup.style.display = 'block';
    setTimeout(() => { popup.classList.add('active'); }, 10);
    if (window.lucide) window.lucide.createIcons();
};

window.closeTimelinePopup = function(expId) {
    const popup = document.getElementById(`popup-${expId}`);
    if (popup) {
        popup.classList.remove('active');
        setTimeout(() => { popup.style.display = 'none'; }, 300);
    }
};

// ORGANIZAÇÕES & VOLUNTARIADO COM SETA DE LINK APENAS SE HOUVER URL
function renderListWithLinks(containerId, dataList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    dataList.forEach(item => {
        const li = document.createElement("li");
        li.className = "card-item-with-logo";

        const hasLogo = item.logo && item.logo.trim() !== '';
        const logoHTML = hasLogo 
            ? `<div class="item-logo-wrapper"><img src="${item.logo}" alt="Logo" class="item-logo logo-white-bg"></div>`
            : `<div class="item-logo-wrapper item-logo-placeholder"><i data-lucide="shield"></i></div>`;

        const arrowHTML = item.link 
            ? `<a href="${item.link}" target="_blank" class="corner-arrow-link inline-arrow" title="Visitar Website"><i data-lucide="arrow-up-right"></i></a>` 
            : '';

        li.innerHTML = `
            ${logoHTML}
            <div class="item-info">
                <strong>${item.titulo}</strong><br>
                ${item.cargo ? `<span class="text-subtle">${item.cargo}</span>` : ''}
            </div>
            ${arrowHTML}
        `;
        container.appendChild(li);
    });
}

// BARRAS DE NÍVEL
function renderSoftwareLevels() {
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = '';
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`.trim();
            fragment.appendChild(dot);
        }
        bar.appendChild(fragment);
    });
}

// ANIMAÇÃO SCROLL
function setupScrollEffects() {
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

    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
