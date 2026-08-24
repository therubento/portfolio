// DADOS DOS PROJETOS COM CATEGORIZAÇÃO E ITENS EM DESTAQUE
const projetos = [
    {
        id: 1,
        categoria: "radio",
        destaque: true,
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "RUA FM / Universidade do Algarve",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        galeria: [
            "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY"
        ],
        links: [
            { texto: "Ver Episódios no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "radio" }
        ]
    },
    {
        id: 2,
        categoria: "audiovisual",
        destaque: true,
        hashtag: "#documentario",
        titulo: "Documentário: 30 Anos de CC",
        mesAno: "Fevereiro 2025 — Atualidade",
        cargo: "Realizador",
        local: "Universidade do Algarve",
        capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        resumo: "Documentário comemorativo das três décadas do curso de Ciências da Comunicação da Universidade do Algarve, integrando testemunhos históricos e arquivo audiovisual.",
        galeria: [
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
        ],
        links: [
            { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
        ]
    },
    {
        id: 4,
        categoria: "jornalismo",
        destaque: true,
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV, realizado sob condições de elevada exigência técnica e prazos de produção reais.",
        galeria: [
            "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80"
        ],
        links: [
            { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 3,
        categoria: "jornalismo",
        destaque: false,
        hashtag: "#televisao",
        titulo: "Medalha de Excelência — Skills 2023",
        mesAno: "Março 2023",
        cargo: "Editor de Vídeo",
        local: "Portimão",
        capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023, desempenhando as funções de Editor de Vídeo na produção de Reportagem de Televisão.",
        galeria: [],
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 5,
        categoria: "digital",
        destaque: false,
        hashtag: "#digital",
        titulo: "Projeto ENTR PT — RTP",
        mesAno: "Maio — Agosto 2024",
        cargo: "Criador de Conteúdos (Freelancer)",
        local: "RTP — Lisboa",
        capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        resumo: "Criação, captação e edição de formatos curtos de vídeo dinâmicos orientados para o público jovem no âmbito do projeto europeu ENTR PT transmitido pela RTP.",
        galeria: [],
        links: [
            { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
        ]
    },
    {
        id: 6,
        categoria: "radio",
        destaque: false,
        hashtag: "#radio",
        titulo: "Coberturas de Festivais — RUA FM",
        mesAno: "2022 — 2025",
        cargo: "Jornalista / Animador",
        local: "RUA - Rádio Universitária do Algarve",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Locução, gravação de marcadores/spots e cobertura integral em direto de grandes eventos culturais: SA do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds.",
        galeria: [],
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ]
    },
    {
        id: 7,
        categoria: "audiovisual",
        destaque: false,
        hashtag: "#cinema",
        titulo: "Segunda Opção (Curta-Metragem)",
        mesAno: "Março 2018 — Junho 2019",
        cargo: "Realizador, Editor, Cameraman",
        local: "Tavira / Faro",
        capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        resumo: "Curta-metragem académica independente onde assumi a direção de fotografia, captação de imagem, realização e montagem final.",
        galeria: [],
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 8,
        categoria: "jornalismo",
        destaque: false,
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "Escola Superior de Comunicação Social",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo (concluído com 17 valores): 'Nos Bastidores do Jornalismo Televisivo: quando o essencial pode ser invisível aos olhos dos telespectadores (o caso da RTP, SIC e TVI)'.",
        galeria: [],
        links: []
    },
    {
        id: 9,
        categoria: "jornalismo",
        destaque: false,
        hashtag: "#imprensa",
        titulo: "Peças Multimédia — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista (Estágio Profissional)",
        local: "Sul Informação (Faro)",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo (gravação, voz off e edição).",
        galeria: [],
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ]
    },
    {
        id: 10,
        categoria: "digital",
        destaque: false,
        hashtag: "#comunicacao",
        titulo: "Política (NÃO) Importa",
        mesAno: "Setembro 2020 — Novembro 2022",
        cargo: "Coordenador de Comunicação",
        local: "Projeto Independente",
        capa: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80",
        resumo: "Coordenação de comunicação e estratégias digitais de desmistificação do envolvimento político para a comunidade jovem.",
        galeria: [],
        links: []
    },
    {
        id: 11,
        categoria: "outros",
        destaque: false,
        hashtag: "#imprensa",
        titulo: "Redação no 5º Congresso dos Jornalistas",
        mesAno: "Janeiro 2024",
        cargo: "Jornalista Redator",
        local: "ESCS / Lisboa",
        capa: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80",
        resumo: "Integração na equipa de redação da ESCS responsável pela cobertura jornalística em tempo real do 5º Congresso dos Jornalistas Portugueses.",
        galeria: [],
        links: []
    }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÕES SCROLL REVEAL
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

    // 2. SCROLL SUAVE LOGO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. BARRAS DE SOFTWARE
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = ''; 
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 4. CRIAÇÃO DE CARTÕES NETFLIX (FULL BACKGROUND IMAGE)
    function createCardElement(proj, isSpecialDestaque = false) {
        const card = document.createElement("div");
        card.className = `netflix-card ${isSpecialDestaque ? 'card-destaque-special' : ''}`;
        card.setAttribute("data-id", proj.id);
        card.style.backgroundImage = `url('${proj.capa}')`;

        card.innerHTML = `
            <div class="netflix-card-overlay"></div>
            <div class="netflix-card-content">
                <span class="card-category-tag">${proj.hashtag}</span>
                <h4 class="card-title-text">${proj.titulo}</h4>
            </div>
            <div class="card-corner-arrow">
                <i data-lucide="arrow-up-right"></i>
            </div>
        `;

        card.addEventListener("click", () => handleCardClick(proj, card));
        return card;
    }

    // 5. GESTÃO DO EXPANDABLE DRAWER (STYLE NETFLIX/PRIME VIDEO)
    let currentActiveCard = null;

    function handleCardClick(proj, cardElement) {
        // Encontrar o contentor de gaveta correspondente na linha
        const parentRow = cardElement.closest('.row-container');
        if (!parentRow) return;
        
        const drawer = parentRow.querySelector('.netflix-expandable-drawer');
        if (!drawer) return;

        // Se clicar no mesmo cartão que já está aberto, fecha a gaveta
        if (currentActiveCard === cardElement && drawer.style.display === "block") {
            closeAllDrawers();
            return;
        }

        closeAllDrawers();

        currentActiveCard = cardElement;
        cardElement.classList.add("active-card");

        // Construir HTML interno da gaveta
        const linksHTML = proj.links.map(l => `
            <a href="${l.url}" target="_blank" class="drawer-action-btn">
                <i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}
            </a>
        `).join('');

        const galleryHTML = (proj.galeria && proj.galeria.length > 0) ? `
            <div class="drawer-media-section">
                <div class="drawer-media-title">Fotografias e Conteúdos</div>
                <div class="drawer-media-grid">
                    ${proj.galeria.map(imgUrl => `<img src="${imgUrl}" class="drawer-media-thumb" alt="Media">`).join('')}
                </div>
            </div>
        ` : '';

        drawer.innerHTML = `
            <div class="drawer-inner-grid">
                <button class="drawer-close-btn" aria-label="Fechar">&times;</button>
                <div class="drawer-image-wrap">
                    <img src="${proj.capa}" alt="${proj.titulo}">
                </div>
                <div class="drawer-details-wrap">
                    <div>
                        <div class="drawer-header">
                            <span class="drawer-hashtag">${proj.hashtag}</span>
                            <h3 class="drawer-title">${proj.titulo}</h3>
                        </div>
                        <div class="drawer-meta">
                            ${proj.mesAno ? `<span><strong>Data:</strong> ${proj.mesAno}</span>` : ''}
                            ${proj.cargo ? `<span><strong>Função:</strong> ${proj.cargo}</span>` : ''}
                            ${proj.local ? `<span><strong>Local:</strong> ${proj.local}</span>` : ''}
                        </div>
                        <p class="drawer-description">${proj.resumo}</p>
                        ${galleryHTML}
                    </div>
                    <div class="drawer-actions-row">
                        ${linksHTML}
                    </div>
                </div>
            </div>
        `;

        drawer.style.display = "block";
        if (window.lucide) window.lucide.createIcons();

        // Scroll centralizado suave até ao pop-up expansível
        setTimeout(() => {
            drawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        drawer.querySelector('.drawer-close-btn')?.addEventListener('click', closeAllDrawers);
    }

    function closeAllDrawers() {
        document.querySelectorAll('.netflix-expandable-drawer').forEach(d => {
            d.style.display = "none";
            d.innerHTML = "";
        });
        document.querySelectorAll('.netflix-card').forEach(c => c.classList.remove('active-card'));
        currentActiveCard = null;
    }

    // 6. RENDERIZAÇÃO DAS CATEGORIAS
    const destaquesContainer = document.getElementById("destaques-container");
    const sliders = {
        jornalismo: document.getElementById("slider-jornalismo"),
        audiovisual: document.getElementById("slider-audiovisual"),
        radio: document.getElementById("slider-radio"),
        digital: document.getElementById("slider-digital"),
        outros: document.getElementById("slider-outros")
    };

    projetos.forEach(proj => {
        // Em Destaque
        if (proj.destaque && destaquesContainer) {
            const destCard = createCardElement(proj, true);
            destaquesContainer.appendChild(destCard);
        }

        // Categorias Gerais
        const targetSlider = sliders[proj.categoria] || sliders.outros;
        if (targetSlider) {
            const card = createCardElement(proj, false);
            targetSlider.appendChild(card);
        }
    });

    // 7. CONFIGURAÇÃO DE SETAS NOS CARROSSEIS
    function setupCarouselNav(sliderId, btnLeftId, btnRightId) {
        const slider = document.getElementById(sliderId);
        const btnLeft = document.getElementById(btnLeftId);
        const btnRight = document.getElementById(btnRightId);
        if (!slider) return;

        function updateButtons() {
            const scrollLeft = slider.scrollLeft;
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (btnLeft) btnLeft.classList.toggle("visible", scrollLeft > 10);
            if (btnRight) btnRight.classList.toggle("visible", (maxScroll - scrollLeft) > 10);
        }

        btnLeft?.addEventListener("click", () => slider.scrollBy({ left: -280, behavior: "smooth" }));
        btnRight?.addEventListener("click", () => slider.scrollBy({ left: 280, behavior: "smooth" }));
        slider.addEventListener("scroll", updateButtons);
        setTimeout(updateButtons, 300);
    }

    setupCarouselNav("slider-jornalismo", "btn-left-jornalismo", "btn-right-jornalismo");
    setupCarouselNav("slider-audiovisual", "btn-left-audiovisual", "btn-right-audiovisual");
    setupCarouselNav("slider-radio", "btn-left-radio", "btn-right-radio");
    setupCarouselNav("slider-digital", "btn-left-digital", "btn-right-digital");
    setupCarouselNav("slider-outros", "btn-left-outros", "btn-right-outros");

    // 8. MAPEAMENTO DE PROJETOS NAS EXPERIÊNCIAS E FORMAÇÃO
    document.querySelectorAll('.associated-projects-container').forEach(container => {
        const ids = container.getAttribute('data-project-ids')?.split(',').map(Number) || [];
        ids.forEach(id => {
            const proj = projetos.find(p => p.id === id);
            if (proj) {
                const chip = document.createElement('div');
                chip.className = 'mini-project-chip';
                chip.innerHTML = `
                    <img src="${proj.capa}" class="mini-project-thumb" alt="${proj.titulo}">
                    <span class="mini-project-title">${proj.titulo}</span>
                `;
                chip.addEventListener('click', () => {
                    const cardOnPage = document.querySelector(`.netflix-card[data-id="${proj.id}"]`);
                    if (cardOnPage) {
                        cardOnPage.click();
                    }
                });
                container.appendChild(chip);
            }
        });
    });

    // 9. CONDICIONAMENTO DE SETAS EM CURSOS, ORGANIZAÇÕES E VOLUNTARIADO
    document.querySelectorAll('.card-item-with-logo').forEach(item => {
        const link = item.getAttribute('data-link');
        if (link && link.trim() !== "") {
            const arrow = document.createElement('a');
            arrow.href = link;
            arrow.target = "_blank";
            arrow.className = "item-link-arrow";
            arrow.title = "Visitar Website";
            arrow.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
            item.appendChild(arrow);
        }
    });

    if (window.lucide) window.lucide.createIcons();
});
