// DADOS DOS PROJETOS DIVIDIDOS NAS CATEGORIAS SOLICITADAS
const projetos = [
    {
        id: 1,
        destaque: true,
        categoria: "RÁDIO & ÁUDIO",
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "RUA FM / Universidade do Algarve",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        links: [
            { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "radio" },
            { texto: "Ver no Youtube", url: "https://youtube.com/playlist?list=PLysOGAXKuGrC_rRX-zF5B62f1aauseKbn&si=JC5Qt6ZthPNCATCF", icone: "video" }
        ],
        media: [
            { tipo: "foto", url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", titulo: "Gravação em Estúdio" }
        ]
    },
    {
        id: 2,
        destaque: true,
        categoria: "AUDIOVISUAL",
        hashtag: "#documentario",
        titulo: "Sala 31 / 30 Anos de CC",
        mesAno: "2026",
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
        id: 4,
        destaque: true,
        categoria: "JORNALISMO & MEDIA",
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV.",
        links: [
            { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        media: []
    },
    {
        id: 3,
        destaque: false,
        categoria: "JORNALISMO & MEDIA",
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
        media: []
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
        destaque: false,
        categoria: "JORNALISMO & MEDIA",
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
        id: 9,
        destaque: false,
        categoria: "JORNALISMO & MEDIA",
        hashtag: "#imprensa",
        titulo: "Reportagens Multimédia — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista (Estágio)",
        local: "Sul Informação (Faro)",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ],
        media: []
    },
    {
        id: 10,
        destaque: false,
        categoria: "DIGITAL & COMUNICAÇÃO",
        hashtag: "#comunicacao",
        titulo: "Política (NÃO) Importa",
        mesAno: "Setembro 2020 — Novembro 2022",
        cargo: "Coordenador de Comunicação",
        local: "Projeto Independente",
        capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
        resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
        links: [],
        media: []
    },
    {
        id: 11,
        destaque: false,
        categoria: "OUTROS",
        hashtag: "#imprensa",
        titulo: "Redação no 5º Congresso dos Jornalistas",
        mesAno: "Janeiro 2024",
        cargo: "Jornalista Redator",
        local: "ESCS / Lisboa",
        capa: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80",
        resumo: "Integração na equipa de redação responsável pela cobertura jornalística do 5º Congresso dos Jornalistas Portugueses.",
        links: [],
        media: []
    }
];

document.addEventListener("DOMContentLoaded", () => {
    let scrollStateBeforeDrawer = 0;

    // 1. SCROLL REVEAL
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

    // 2. LOGÓTIPO VOLTA AO TOPO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. NÍVEIS DE SOFTWARE (BARRAS VISUAIS)
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = ''; 
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 4. CONSTRUÇÃO E NAVEGAÇÃO DOS DESTAQUES (3 CARTÕES COM SETAS)
    const containerDestaque = document.getElementById("grid-destaques-trio");
    const drawerDestaque = document.getElementById("drawer-destaque");
    const itensDestaque = projetos.filter(p => p.destaque).slice(0, 3);

    function renderDestaques() {
        if (!containerDestaque) return;
        containerDestaque.innerHTML = "";
        
        itensDestaque.forEach(proj => {
            const card = document.createElement("div");
            card.className = "destaque-card-prime";
            card.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-prime-bg">
                <div class="destaque-prime-overlay">
                    <span class="card-category">${proj.hashtag}</span>
                    <h3 class="card-title">${proj.titulo}</h3>
                </div>
                <button class="destaque-arrow-btn" title="Expandir"><i data-lucide="chevron-down"></i></button>
            `;
            card.addEventListener("click", () => openNetflixDrawer(drawerDestaque, proj, card));
            containerDestaque.appendChild(card);
        });
    }

    // 5. CARROSSEIS POR CATEGORIA (PROPORÇÃO 16:9 COM FUNDO TOTAL)
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
                card.innerHTML = `
                    <img src="${proj.capa}" alt="${proj.titulo}" class="card-bg-img">
                    <div class="card-gradient-overlay">
                        <span class="card-category">${proj.hashtag}</span>
                        <h4 class="card-title">${proj.titulo}</h4>
                    </div>
                `;
                card.addEventListener("click", () => openNetflixDrawer(drawer, proj, card));
                slider.appendChild(card);
            });

            setupCarouselButtons(config.slider, config.btnL, config.btnR);
        });
    }

    // 6. ABA EXPANSÍVEL (NETFLIX/PRIME VIDEO DRAWER - CENTRADO E TOTAL LARGURA)
    function openNetflixDrawer(targetDrawer, proj, triggerElement) {
        scrollStateBeforeDrawer = window.scrollY;

        document.querySelectorAll('.netflix-drawer').forEach(d => {
            d.classList.remove('active');
            d.innerHTML = '';
        });

        document.querySelectorAll('.destaque-card-prime, .netflix-card-16-9').forEach(c => c.classList.remove('active-card'));
        triggerElement.classList.add('active-card');

        let linksHTML = "";
        if (proj.links && proj.links.length > 0) {
            linksHTML = proj.links.map(l => `
                <a href="${l.url}" target="_blank" class="drawer-action-btn">
                    <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
                </a>
            `).join('');
        }

        let mediaHTML = "";
        if (proj.media && proj.media.length > 0) {
            mediaHTML = `
                <div class="drawer-media-section">
                    <h5>Galeria & Conteúdos</h5>
                    <div class="drawer-media-grid">
                        ${proj.media.map(m => `
                            <div class="media-mini-card">
                                <img src="${m.url}" alt="${m.titulo}">
                                <span>${m.titulo}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        targetDrawer.innerHTML = `
            <div class="drawer-content-wrapper">
                <button class="drawer-close-btn" aria-label="Fechar">&times;</button>
                <div class="drawer-flex-container">
                    <div class="drawer-left-media">
                        <img src="${proj.capa}" alt="${proj.titulo}" class="drawer-cover-img">
                        <div class="drawer-img-gradient"></div>
                    </div>
                    <div class="drawer-right-details">
                        <span class="card-category">${proj.hashtag}</span>
                        <h2>${proj.titulo}</h2>
                        <div class="drawer-meta-info">
                            <p><strong>Período:</strong> ${proj.mesAno}</p>
                            <p><strong>Cargo:</strong> ${proj.cargo}</p>
                            <p><strong>Local:</strong> ${proj.local}</p>
                        </div>
                        <p class="drawer-description">${proj.resumo}</p>
                        
                        ${linksHTML ? `<div class="drawer-actions">${linksHTML}</div>` : ''}
                        ${mediaHTML}
                    </div>
                </div>
            </div>
        `;

        targetDrawer.classList.add('active');
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
            targetDrawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        targetDrawer.querySelector('.drawer-close-btn').addEventListener('click', () => {
            closeNetflixDrawer(targetDrawer, triggerElement);
        });
    }

    function closeNetflixDrawer(drawer, triggerElement) {
        drawer.classList.remove('active');
        drawer.innerHTML = '';
        if (triggerElement) triggerElement.classList.remove('active-card');
        window.scrollTo({ top: scrollStateBeforeDrawer, behavior: 'smooth' });
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

    // 8. VINCULAR PROJETOS ÀS EXPERIÊNCIAS E FORMAÇÃO (MINI-CARTÕES E DRAWERS)
    function setupAssociatedProjects() {
        document.querySelectorAll('.associated-project-wrapper').forEach(wrapper => {
            const projId = parseInt(wrapper.getAttribute('data-project-id'), 10);
            const proj = projetos.find(p => p.id === projId);
            if (!proj) return;

            wrapper.innerHTML = `
                <div class="mini-project-chip">
                    <img src="${proj.capa}" alt="${proj.titulo}" class="mini-project-img">
                    <div class="mini-project-info">
                        <span class="mini-tag">${proj.hashtag}</span>
                        <strong class="mini-title">${proj.titulo}</strong>
                    </div>
                    <i data-lucide="chevron-down" class="mini-chevron"></i>
                </div>
            `;

            const timelineItem = wrapper.closest('.timeline-content');
            const drawer = timelineItem ? timelineItem.querySelector('.timeline-drawer') : null;

            wrapper.querySelector('.mini-project-chip').addEventListener('click', (e) => {
                e.stopPropagation();
                if (!drawer) return;

                if (drawer.classList.contains('active')) {
                    drawer.classList.remove('active');
                    drawer.innerHTML = '';
                    window.scrollTo({ top: scrollStateBeforeDrawer, behavior: 'smooth' });
                } else {
                    scrollStateBeforeDrawer = window.scrollY;
                    document.querySelectorAll('.timeline-drawer').forEach(td => {
                        td.classList.remove('active');
                        td.innerHTML = '';
                    });

                    drawer.innerHTML = `
                        <div class="timeline-drawer-inner">
                            <button class="drawer-close-btn">&times;</button>
                            <div class="drawer-flex-container">
                                <div class="drawer-left-media">
                                    <img src="${proj.capa}" alt="${proj.titulo}" class="drawer-cover-img">
                                    <div class="drawer-img-gradient"></div>
                                </div>
                                <div class="drawer-right-details">
                                    <span class="card-category">${proj.hashtag}</span>
                                    <h3>${proj.titulo}</h3>
                                    <p class="drawer-description">${proj.resumo}</p>
                                    ${proj.links && proj.links.length ? `
                                        <div class="drawer-actions">
                                            ${proj.links.map(l => `<a href="${l.url}" target="_blank" class="drawer-action-btn"><i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}</a>`).join('')}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                    drawer.classList.add('active');
                    if (window.lucide) window.lucide.createIcons();

                    drawer.querySelector('.drawer-close-btn').addEventListener('click', () => {
                        drawer.classList.remove('active');
                        drawer.innerHTML = '';
                        window.scrollTo({ top: scrollStateBeforeDrawer, behavior: 'smooth' });
                    });
                }
            });
        });
    }

    // 9. SETAS DINÂMICAS PARA ORGANIZAÇÕES E VOLUNTARIADO (APENAS SE HOUVER LINK)
    function setupConditionalArrows() {
        document.querySelectorAll('.card-item-with-logo[data-link]').forEach(item => {
            const linkUrl = item.getAttribute('data-link');
            if (linkUrl && linkUrl.trim() !== "") {
                const arrowBtn = document.createElement("a");
                arrowBtn.href = linkUrl;
                arrowBtn.target = "_blank";
                arrowBtn.className = "course-link-arrow";
                arrowBtn.title = "Visitar";
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
