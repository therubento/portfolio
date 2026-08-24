// DADOS COMPLETO DOS PROJETOS E RECURSOS
const projetos = [
    {
        id: 1,
        destaque: true,
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
        vinculo: { tipo: "experiencia", id: "exp-3" } // RUA FM
    },
    {
        id: 2,
        destaque: true,
        hashtag: "#documentario",
        titulo: "Sala 31",
        mesAno: "2026",
        cargo: "Realizador / Editor",
        local: "Universidade do Algarve",
        capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        resumo: "Documentário independente focado nas narrativas dos estúdios académicos da UAlg.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        vinculo: { tipo: "experiencia", id: "exp-1" } // UAlg
    },
    {
        id: 3,
        destaque: true,
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
        vinculo: { tipo: "educacao", id: "edu-2" } // ESCS
    },
    {
        id: 4,
        destaque: false,
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
        vinculo: { tipo: "educacao", id: "edu-2" }
    },
    {
        id: 5,
        destaque: false,
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
        vinculo: { tipo: "experiencia", id: "exp-2" } // ENTR PT
    },
    {
        id: 6,
        destaque: false,
        hashtag: "#radio",
        titulo: "Coberturas de Festivais — RUA FM",
        mesAno: "2022 — 2025",
        cargo: "Jornalista / Animador",
        local: "RUA - Rádio Universitária do Algarve",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Locução, gravação de marcadores/spots e cobertura integral em direto de grandes eventos culturais: SA do Algarve, Festival F e Festival MED.",
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ],
        vinculo: { tipo: "experiencia", id: "exp-3" }
    },
    {
        id: 7,
        destaque: false,
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
        vinculo: { tipo: "educacao", id: "edu-3" } // Licenciatura UAlg
    },
    {
        id: 8,
        destaque: false,
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "Escola Superior de Comunicação Social",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo'.",
        links: [],
        vinculo: { tipo: "educacao", id: "edu-2" }
    }
];

// DATA LISTAS: CURSOS, ORGANIZAÇÕES E VOLUNTARIADO
const cursosData = [
    { logo: "https://images.squarespace-cdn.com/content/v1/64d60527c01ae7106f2646e9/7e92df26-40a8-4a6b-b353-26c19f58a939/JAI-white%2Bfor%2Bwebsite.png", titulo: "JornalismoAI Discovery: Aprendendo os princípios-chave da IA no jornalismo", subtitulo: "Polis LSE (julho 2025)", link: "https://exemplo.com/diploma" },
    { logo: "https://worldskillsportugal.iefp.pt/wp-content/uploads/2020/03/WSPT_70anos_af3-10-copy.png", titulo: "Ateliê de Jornalismo Televisivo", subtitulo: "WorldSkills Portugal 2023 (setembro 2022)", link: "" },
    { logo: "https://5congresso.jornalistas.eu/wp-content/uploads/2023/10/congresso_parceiro_cenjor.png", titulo: "Introdução à Comunicação Digital: conceção, produção e publicação", subtitulo: "CENJOR / NAU (janeiro 2021)", link: "https://exemplo.com/diploma" },
    { logo: "https://5congresso.jornalistas.eu/wp-content/uploads/2023/10/congresso_parceiro_cenjor.png", titulo: "Fake News - Não se deixe enganar", subtitulo: "CENJOR (dezembro 2020)", link: "" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_LUSA.svg/3840px-Logo_LUSA.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail", titulo: "Cidadão Ciberinformado", subtitulo: "LUSA / NAU (outubro 2020)", link: "" }
];

const organizacoesData = [
    { logo: "https://08e1925027.clvaw-cdnwnd.com/22ede87b6b01d2470b79e8c0fa9a4da6/200004970-8bb798bb7c/D1960-c%C3%B3pia.png?ph=08e1925027", titulo: "Rotary D.1960", subtitulo: "Presidente da Comissão de Imagem Pública", link: "https://rotary1960.pt" },
    { logo: "https://ee96551bed.clvaw-cdnwnd.com/2027cd87e2b06b513f783c4b4826badc/200000001-a759da759f/Rotaract%20Logo%20Distrito%201960.webp?ph=ee96551bed", titulo: "Rotaract D.1960", subtitulo: "Representante Distrital D.1960 (AR 2025/2026)", link: "https://rotaract1960.pt" },
    { logo: "https://via.placeholder.com/40/transparent/ffffff?text=RTC", titulo: "Rotaract Club de Tavira (2018 — Atualidade)", subtitulo: "Diretor de Comunicação (AR 2024/2025 a 2026/2027), Presidente (AR 2020/2021 e 2023/2024).", link: "" },
    { logo: "https://via.placeholder.com/40/transparent/ffffff?text=INT", titulo: "Interact Club de Tavira (2016 — 2018)", subtitulo: "Membro Ativo", link: "" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/AEP_PT_2016_LOGO.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original", titulo: "Grupo 273 - Tavira (2018 — 2023)", subtitulo: "Membro do Grupo Escotista", link: "" }
];

const voluntariadoData = [
    { logo: "https://re-food.org/wp-content/uploads/2020/02/RE-FOOD-logo-02.png", titulo: "Voluntário na Refood Tavira", subtitulo: "", link: "https://re-food.org" },
    { logo: "https://iconape.com/download/244649/png/", titulo: "Voluntário no Banco Alimentar", subtitulo: "", link: "" },
    { logo: "https://upload.wikimedia.org/wikipedia/pt/4/43/UAlg_Logo_Simbolo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original", titulo: "Colaborador no Dia Aberto UAlg", subtitulo: "Anos Letivos 2017/2018, 2018/2019 e 2025", link: "" }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÕES NO SCROLL
    const reveals = document.querySelectorAll(".reveal");
    let isScrolling = false;

    function handleScrollReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 80) {
                el.classList.add("active");
            }
        });
        isScrolling = false;
    }

    window.addEventListener("scroll", () => {
        if (!isScrolling) {
            window.requestAnimationFrame(handleScrollReveal);
            isScrolling = true;
        }
    });
    handleScrollReveal();

    // 2. SCROLL SUAVE LOGO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. BARRAS DE NÍVEL SOFTWARE
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = ''; 
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            fragment.appendChild(dot);
        }
        bar.appendChild(fragment);
    });

    // 4. RENDERIZAR CARTÕES DE DESTAQUE (3 ITENS)
    const destaquesContainer = document.getElementById("destaques-container");
    const projetosDestaque = projetos.filter(p => p.destaque).slice(0, 3);

    if (destaquesContainer) {
        destaquesContainer.innerHTML = '';
        projetosDestaque.forEach(proj => {
            const card = document.createElement("div");
            card.className = "destaque-card-horizontal";
            card.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-card-img" loading="lazy">
                <div class="destaque-card-body">
                    <div>
                        <span class="card-category">${proj.hashtag}</span>
                        <h3 class="card-title">${proj.titulo}</h3>
                        <p class="card-company">${proj.resumo}</p>
                    </div>
                    <span class="card-date">${proj.mesAno}</span>
                </div>
                ${proj.links && proj.links.length > 0 ? `
                    <a href="${proj.links[0].url}" target="_blank" class="course-link-arrow" title="Ver Projeto">
                        <i data-lucide="arrow-up-right"></i>
                    </a>
                ` : ''}
            `;
            destaquesContainer.appendChild(card);
        });
    }

    // 5. RENDERIZAR CARTÕES DE PROJETOS E PAINEL NETFLIX EXPANDIDO À LARGURA DA PÁGINA
    const containerOutros = document.getElementById("slider-outros");
    const expandPanel = document.getElementById("netflix-expand-panel");
    let activeCardId = null;

    function renderOutrosProjetos() {
        if (!containerOutros) return;
        containerOutros.innerHTML = '';

        projetos.forEach(proj => {
            const card = document.createElement("div");
            card.className = "netflix-card";
            card.setAttribute("data-id", proj.id);

            card.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover" loading="lazy">
                <div class="netflix-card-body">
                    <div>
                        ${proj.hashtag ? `<span class="card-category">${proj.hashtag}</span>` : ''}
                        <h4 class="card-title">${proj.titulo}</h4>
                        ${proj.local ? `<p class="card-company">${proj.local}</p>` : ''}
                    </div>
                    ${proj.mesAno ? `<p class="card-date">${proj.mesAno}</p>` : ''}
                </div>
            `;

            card.addEventListener("click", () => openNetflixExpand(proj, card));
            containerOutros.appendChild(card);
        });

        setupCarouselNavigation("slider-outros", "btn-left-outros", "btn-right-outros");
    }

    function openNetflixExpand(proj, cardElement) {
        document.querySelectorAll('.netflix-card').forEach(c => c.classList.remove('active-card'));

        if (activeCardId === proj.id && expandPanel.classList.contains('active')) {
            expandPanel.classList.remove('active');
            activeCardId = null;
            return;
        }

        activeCardId = proj.id;
        cardElement.classList.add('active-card');

        const linksHTML = proj.links && proj.links.length > 0 
            ? proj.links.map(l => `
                <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="pop-action-btn">
                    <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
                </a>
            `).join('') 
            : '';

        expandPanel.innerHTML = `
            <button class="expand-close-btn" id="close-expand-btn">&times;</button>
            <div class="expand-content">
                <div class="expand-header">
                    <span class="card-category">${proj.hashtag || ''}</span>
                    <h3 class="expand-title">${proj.titulo}</h3>
                    <div class="expand-meta">
                        <span><strong>Data:</strong> ${proj.mesAno || 'N/A'}</span>
                        <span><strong>Função:</strong> ${proj.cargo || 'N/A'}</span>
                        <span><strong>Local:</strong> ${proj.local || 'N/A'}</span>
                    </div>
                </div>
                <p class="expand-description">${proj.resumo}</p>
                ${linksHTML ? `<div class="expand-actions">${linksHTML}</div>` : ''}
            </div>
        `;

        expandPanel.classList.add('active');

        document.getElementById("close-expand-btn")?.addEventListener("click", () => {
            expandPanel.classList.remove('active');
            cardElement.classList.remove('active-card');
            activeCardId = null;
        });

        if (window.lucide) window.lucide.createIcons();
    }

    // 6. ADICIONAR CARTÕES/BADGES VINCULADOS NAS TIMELINES (EXPERIÊNCIA / FORMAÇÃO)
    function attachLinkedProjects() {
        projetos.forEach(proj => {
            if (proj.vinculo) {
                const containerId = `linked-${proj.vinculo.tipo}-${proj.vinculo.id}`;
                const targetContainer = document.getElementById(containerId);

                if (targetContainer) {
                    const badge = document.createElement("div");
                    badge.className = "project-link-badge";
                    badge.innerHTML = `
                        <img src="${proj.capa}" alt="${proj.titulo}" class="badge-img">
                        <div class="badge-info">
                            <span class="badge-tag">Conteúdo Relacionado</span>
                            <span class="badge-title">${proj.titulo}</span>
                        </div>
                    `;

                    badge.addEventListener("click", () => {
                        const targetCard = document.querySelector(`.netflix-card[data-id="${proj.id}"]`);
                        if (targetCard) {
                            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            setTimeout(() => openNetflixExpand(proj, targetCard), 500);
                        }
                    });

                    targetContainer.appendChild(badge);
                }
            }
        });
    }

    // 7. RENDERIZAR LISTAS DE CURSOS, ORGANIZAÇÕES E VOLUNTARIADO (COM SETAS SE TIVEREM LINK)
    function renderListWithConditionalArrows(data, targetContainerId) {
        const container = document.getElementById(targetContainerId);
        if (!container) return;

        container.innerHTML = data.map(item => `
            <li class="card-item-with-logo">
                <div class="item-logo-wrapper">
                    <img src="${item.logo}" alt="Logo ${item.titulo}" class="item-logo logo-white-bg" onerror="this.style.display='none'">
                </div>
                <div class="item-info">
                    <strong>${item.titulo}</strong><br>
                    ${item.subtitulo ? `<span class="text-subtle">${item.subtitulo}</span>` : ''}
                </div>
                ${item.link && item.link.trim() !== '' ? `
                    <a href="${item.link}" target="_blank" class="course-link-arrow" title="Visitar Link">
                        <i data-lucide="arrow-up-right"></i>
                    </a>
                ` : ''}
            </li>
        `).join('');
    }

    // 8. CONTROLO DOS CARROSSEIS
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

        btnLeft?.addEventListener("click", () => slider.scrollBy({ left: -300, behavior: "smooth" }));
        btnRight?.addEventListener("click", () => slider.scrollBy({ left: 300, behavior: "smooth" }));

        slider.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        setTimeout(updateButtons, 200);
    }

    // INICIALIZAÇÃO
    renderOutrosProjetos();
    attachLinkedProjects();
    renderListWithConditionalArrows(cursosData, "cursos-list");
    renderListWithConditionalArrows(organizacoesData, "organizacoes-list");
    renderListWithConditionalArrows(voluntariadoData, "voluntariado-list");
    
    if (window.lucide) window.lucide.createIcons();
});
