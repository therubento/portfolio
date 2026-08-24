// BASE DE DADOS DOS PROJETOS (TODOS OS SEUS DADOS PRESERVADOS E CATEGORIZADOS)
const projetos = [
    {
        id: 1,
        destaque: true,
        categoria: "radio", // "jornalismo", "audiovisual", "radio", "digital", "outros"
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "Rádio Universitária do Algarve / UAlg",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        links: [
            { texto: "Ver no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "video" }
        ]
    },
    {
        id: 2,
        destaque: true,
        categoria: "audiovisual",
        hashtag: "#documentario",
        titulo: "Sala 31 / 30 Anos de CC",
        mesAno: "Fevereiro 2025 — Atualidade",
        cargo: "Realizador",
        local: "Universidade do Algarve",
        capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        resumo: "Documentário comemorativo das três décadas do curso de Ciências da Comunicação da Universidade do Algarve, integrando testemunhos históricos e arquivo audiovisual.",
        links: [
            { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
        ]
    },
    {
        id: 4,
        destaque: true,
        categoria: "jornalismo",
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 3,
        destaque: false,
        categoria: "audiovisual",
        hashtag: "#televisao",
        titulo: "Medalha de Excelência — Skills Portugal 2023",
        mesAno: "Março 2023",
        cargo: "Editor de Vídeo",
        local: "Portimão",
        capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023, desempenhando as funções de Editor de Vídeo na produção de Reportagem de Televisão.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 5,
        destaque: false,
        categoria: "digital",
        hashtag: "#digital",
        titulo: "Projeto ENTR PT — RTP",
        mesAno: "Maio — Agosto 2024",
        cargo: "Criador de Conteúdos (Freelancer)",
        local: "RTP — Lisboa",
        capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        resumo: "Criação, captação e edição de formatos curtos de vídeo dinâmicos orientados para o público jovem no âmbito do projeto europeu ENTR PT transmitido pela RTP.",
        links: [
            { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
        ]
    },
    {
        id: 6,
        destaque: false,
        categoria: "radio",
        hashtag: "#radio",
        titulo: "Coberturas de Festivais — RUA FM",
        mesAno: "2022 — 2025",
        cargo: "Jornalista / Animador",
        local: "RUA - Rádio Universitária do Algarve",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Locução, gravação de marcadores/spots e cobertura integral em direto de grandes eventos culturais: SA do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds.",
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ]
    },
    {
        id: 7,
        destaque: false,
        categoria: "audiovisual",
        hashtag: "#cinema",
        titulo: "Segunda Opção (Curta-Metragem)",
        mesAno: "Março 2018 — Junho 2019",
        cargo: "Realizador, Editor, Cameraman",
        local: "Tavira / Faro",
        capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        resumo: "Curta-metragem académica independente onde assumi a direção de fotografia, captação de imagem, realização e montagem final.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 8,
        destaque: false,
        categoria: "outros",
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "Escola Superior de Comunicação Social",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo: quando o essencial pode ser invisível aos olhos dos telespectadores'.",
        links: []
    },
    {
        id: 9,
        destaque: false,
        categoria: "jornalismo",
        hashtag: "#imprensa",
        titulo: "Reportagens e Peças — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista (Estágio Profissional)",
        local: "Sul Informação (Faro)",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ]
    },
    {
        id: 10,
        destaque: false,
        categoria: "digital",
        hashtag: "#comunicacao",
        titulo: "Política (NÃO) Importa",
        mesAno: "Setembro 2020 — Novembro 2022",
        cargo: "Coordenador de Comunicação",
        local: "Projeto Independente",
        capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
        resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
        links: []
    },
    {
        id: 11,
        destaque: false,
        categoria: "jornalismo",
        hashtag: "#imprensa",
        titulo: "Redação no 5º Congresso dos Jornalistas",
        mesAno: "Janeiro 2024",
        cargo: "Jornalista Redator",
        local: "ESCS / Lisboa",
        capa: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80",
        resumo: "Integração na equipa de redação da ESCS responsável pela cobertura jornalística em tempo real do 5º Congresso dos Jornalistas Portugueses.",
        links: []
    }
];

let lastScrollPosition = 0;
let activeOpenedProjectCard = null;

document.addEventListener("DOMContentLoaded", () => {

    // 1. ANIMAÇÕES REVEAL NO SCROLL
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

    // 2. RENDERIZAÇÃO BARRAS DE SOFTWARE
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 3. ADICIONAR SETAS AUTOMÁTICAS EM ORGANIZAÇÕES, VOLUNTARIADO E CURSOS SE TIVER LINK
    document.querySelectorAll('.card-item-with-logo').forEach(item => {
        const link = item.getAttribute('data-link');
        if (link && link.trim() !== '') {
            const arrow = document.createElement('a');
            arrow.href = link;
            arrow.target = "_blank";
            arrow.className = "course-link-arrow";
            arrow.title = "Abrir Ligação";
            arrow.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
            item.appendChild(arrow);
        }
    });

    // 4. RENDERING DOS CARTÕES DE CONTEÚDO (PROPORÇÃO 16:9 E CATEGORIAS)
    renderAllContentCards();

    // 5. RENDERING DOS MINI CARTÕES NAS TIMELINES (EXPERIÊNCIAS E FORMAÇÃO)
    renderTimelineAssociatedProjects();

    // 6. LOGÓTIPO - SCROLL AO TOPO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    if (window.lucide) window.lucide.createIcons();
});

// FUNÇÃO PARA CRIAR CARTÕES DE CONTEÚDO (PROPORÇÃO 16:9 COM DEGRADÊ E TEXTO EMBUTIDO)
function createProjectCardElement(proj) {
    const card = document.createElement("div");
    card.className = "netflix-card 16-9-card";
    card.setAttribute("data-id", proj.id);

    card.innerHTML = `
        <div class="card-bg-img" style="background-image: url('${proj.capa}');"></div>
        <div class="card-overlay-gradient"></div>
        <div class="card-content-overlay">
            ${proj.hashtag ? `<span class="card-hashtag">${proj.hashtag}</span>` : ''}
            <h4 class="card-title">${proj.titulo}</h4>
        </div>
        <div class="card-corner-arrow">
            <i data-lucide="arrow-up-right"></i>
        </div>
    `;

    card.addEventListener("click", () => openNetflixDrawer(proj, card));
    return card;
}

// RENDERIZAÇÃO GERAL DOS CARTÕES NAS DIVERSAS SEÇÕES
function renderAllContentCards() {
    const destaquesGrid = document.getElementById("grid-destaques");
    const categories = {
        jornalismo: document.getElementById("slider-jornalismo"),
        audiovisual: document.getElementById("slider-audiovisual"),
        radio: document.getElementById("slider-radio"),
        digital: document.getElementById("slider-digital"),
        outros: document.getElementById("slider-outros")
    };

    // Filtra e adiciona os 3 destaques no topo
    const destaquesProjs = projetos.filter(p => p.destaque).slice(0, 3);
    destaquesGrid.innerHTML = "";
    destaquesProjs.forEach(proj => {
        const card = createProjectCardElement(proj);
        card.classList.add("destaque-card-prime");
        destaquesGrid.appendChild(card);
    });

    // Adiciona os restantes projetos nas respetivas categorias
    projetos.forEach(proj => {
        const card = createProjectCardElement(proj);
        const container = categories[proj.categoria] || categories["outros"];
        if (container) container.appendChild(card);
    });

    // Configura os botões dos carrosséis
    setupCarousel("slider-jornalismo", "btn-left-jornalismo", "btn-right-jornalismo");
    setupCarousel("slider-audiovisual", "btn-left-audiovisual", "btn-right-audiovisual");
    setupCarousel("slider-radio", "btn-left-radio", "btn-right-radio");
    setupCarousel("slider-digital", "btn-left-digital", "btn-right-digital");
    setupCarousel("slider-outros", "btn-left-outros", "btn-right-outros");
}

// ABA EXPANSÍVEL ESTILO NETFLIX/PRIME VIDEO (ABRE PARA BAIXO E CENTRADO)
function openNetflixDrawer(proj, originCard) {
    lastScrollPosition = window.scrollY; // Guarda scroll para retornar ao fechar
    activeOpenedProjectCard = originCard;

    const drawer = document.getElementById("netflix-expand-drawer");
    if (!drawer) return;

    const linksHTML = proj.links && proj.links.length > 0 ? proj.links.map(l => `
        <a href="${l.url}" target="_blank" class="drawer-btn-link">
            <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
        </a>
    `).join('') : '';

    drawer.innerHTML = `
        <div class="drawer-container-inner">
            <button class="drawer-close-btn" onclick="closeNetflixDrawer()">&times;</button>
            <div class="drawer-media-left" style="background-image: url('${proj.capa}');">
                <div class="drawer-media-overlay"></div>
            </div>
            <div class="drawer-details-right">
                ${proj.hashtag ? `<span class="drawer-hashtag">${proj.hashtag}</span>` : ''}
                <h2 class="drawer-title">${proj.titulo}</h2>
                <div class="drawer-meta-pills">
                    ${proj.mesAno ? `<span><i data-lucide="calendar"></i> ${proj.mesAno}</span>` : ''}
                    ${proj.cargo ? `<span><i data-lucide="briefcase"></i> ${proj.cargo}</span>` : ''}
                    ${proj.local ? `<span><i data-lucide="map-pin"></i> ${proj.local}</span>` : ''}
                </div>
                <p class="drawer-description">${proj.resumo}</p>
                ${linksHTML ? `<div class="drawer-actions">${linksHTML}</div>` : ''}
            </div>
        </div>
    `;

    drawer.classList.add("active");
    if (window.lucide) window.lucide.createIcons();

    // Scroll suave para focar o pop-up expandido centrado
    drawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeNetflixDrawer() {
    const drawer = document.getElementById("netflix-expand-drawer");
    if (drawer) drawer.classList.remove("active");

    // Retorna ao ponto em que estava antes de abrir o pop-up
    window.scrollTo({ top: lastScrollPosition, behavior: 'smooth' });
}

// RENDERIZAÇÃO DOS MINI CARTÕES ASSOCIADOS NA TIMELINE
function renderTimelineAssociatedProjects() {
    document.querySelectorAll('.associated-projects-row').forEach(row => {
        const idsStr = row.getAttribute('data-assoc-ids');
        if (!idsStr) return;

        const ids = idsStr.split(',').map(id => parseInt(id.trim(), 10));
        row.innerHTML = "";

        ids.forEach(id => {
            const proj = projetos.find(p => p.id === id);
            if (proj) {
                const miniCard = document.createElement("div");
                miniCard.className = "mini-assoc-card";
                miniCard.title = `Ver projeto: ${proj.titulo}`;
                miniCard.innerHTML = `
                    <img src="${proj.capa}" alt="${proj.titulo}">
                    <div class="mini-assoc-info">
                        <span class="mini-assoc-title">${proj.titulo}</span>
                    </div>
                `;
                
                miniCard.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const cardInSection = document.querySelector(`.netflix-card[data-id="${proj.id}"]`);
                    openNetflixDrawer(proj, cardInSection || miniCard);
                });

                row.appendChild(miniCard);
            }
        });
    });
}

// CONFIGURAÇÃO DOS CARROSSEIS
function setupCarousel(sliderId, btnLeftId, btnRightId) {
    const slider = document.getElementById(sliderId);
    const btnLeft = document.getElementById(btnLeftId);
    const btnRight = document.getElementById(btnRightId);

    if (!slider) return;

    function checkButtons() {
        const scrollLeft = slider.scrollLeft;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (btnLeft) btnLeft.classList.toggle("visible", scrollLeft > 5);
        if (btnRight) btnRight.classList.toggle("visible", (maxScroll - scrollLeft) > 5);
    }

    btnLeft?.addEventListener("click", () => {
        slider.scrollBy({ left: -320, behavior: "smooth" });
    });

    btnRight?.addEventListener("click", () => {
        slider.scrollBy({ left: 320, behavior: "smooth" });
    });

    slider.addEventListener("scroll", checkButtons);
    setTimeout(checkButtons, 300);
}
