// DADOS DOS PROJETOS COM EXATAMENTE 4 ITENS EM DESTAQUE E TODOS OS RESTANTES EM CONTEÚDOS / PROJETOS
const projetos = [
    // 4 CONTEÚDOS EM DESTAQUE
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
        ]
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
        ]
    },
    {
        id: 2,
        destaque: true,
        hashtag: "#documentario",
        titulo: "30 Anos de CC",
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
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV, realizado sob condições de elevada exigência técnica e prazos de produção reais.",
        links: [
            { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },

    // OUTROS PROJETOS (CONTEÚDOS / PROJETOS)
    {
        id: 5,
        destaque: false,
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
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "Escola Superior de Comunicação Social",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo (concluído com 17 valores): 'Nos Bastidores do Jornalismo Televisivo: quando o essencial pode ser invisível aos olhos dos telespectadores (o caso da RTP, SIC e TVI)'.",
        links: []
    },
    {
        id: 9,
        destaque: false,
        hashtag: "#imprensa",
        titulo: "Reportagens e Peças Multimédia — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista (Estágio Profissional)",
        local: "Sul Informação (Faro)",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo (gravação, voz off e edição).",
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ]
    },
    {
        id: 10,
        destaque: false,
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

// --- FUNÇÕES GLOBAIS (SUPORTE AO HTML) ---

window.toggleMediaDrawer = function(btn) {
    btn.classList.toggle('open');
    const drawer = btn.nextElementSibling;
    if (drawer && drawer.classList.contains('media-drawer')) {
        const isHidden = drawer.style.display === 'none' || drawer.style.display === '';
        drawer.style.display = isHidden ? 'block' : 'none';
    }
};

window.togglePushCard = function(element) {
    const isExpanded = element.classList.contains('expanded');
    document.querySelectorAll('.destaque-card-full').forEach(card => card.classList.remove('expanded'));
    if (!isExpanded) {
        element.classList.add('expanded');
    }
};


document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÕES NO SCROLL (Otimizado com requestAnimationFrame)
    const reveals = document.querySelectorAll(".reveal");
    let isScrolling = false;

    function handleScrollReveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 80;
        
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
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
    handleScrollReveal(); // Check on load

    // 2. SCROLL SUAVE NO LOGÓTIPO
    const brandLogo = document.getElementById("brand-logo");
    brandLogo?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. RENDERIZAÇÃO DAS BARRAS DE NÍVEL (Uso de DocumentFragment para otimizar DOM)
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

    // 4. POPOVER FLUTUANTE
    const popover = document.getElementById("inline-popover");
    let activeCard = null;

    function closePopover() {
        if (popover) {
            popover.classList.remove("visible");
            // Dá tempo para a transição CSS (se existir) atuar antes de esconder
            setTimeout(() => { if (!popover.classList.contains("visible")) popover.style.display = "none"; }, 200);
        }
        if (activeCard) {
            activeCard.classList.remove("active-card");
            activeCard = null;
        }
    }

    // 5. RENDERING DOS CARTÕES FECHADOS
    const containerDestaque = document.getElementById("slider-destaque");
    const containerOutros = document.getElementById("slider-outros");

    function renderCards() {
        const fragmentDestaque = document.createDocumentFragment();
        const fragmentOutros = document.createDocumentFragment();

        projetos.forEach(proj => {
            const card = document.createElement("div");
            card.className = "netflix-card";
            card.setAttribute("data-id", proj.id);

            card.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover" loading="lazy">
                <div class="netflix-card-body">
                    <div>
                        ${proj.hashtag ? `<span class="card-category">${proj.hashtag}</span>` : ''}
                        <h4 class="card-title">${proj.titulo || ''}</h4>
                        ${proj.local ? `<p class="card-company">${proj.local}</p>` : ''}
                    </div>
                    ${proj.mesAno ? `<p class="card-date">${proj.mesAno}</p>` : ''}
                </div>
            `;

            card.addEventListener("click", (e) => openPopover(e, proj, card));

            if (proj.destaque) {
                fragmentDestaque.appendChild(card);
            } else {
                fragmentOutros.appendChild(card);
            }
        });

        if (containerDestaque) containerDestaque.appendChild(fragmentDestaque);
        if (containerOutros) containerOutros.appendChild(fragmentOutros);

        setupCarouselNavigation("slider-destaque", "btn-left-destaque", "btn-right-destaque");
        setupCarouselNavigation("slider-outros", "btn-left-outros", "btn-right-outros");
    }

    // 6. ABERTURA E CÁLCULO DO POPOVER
    function openPopover(event, proj, card) {
        event.stopPropagation();

        if (activeCard === card && popover && popover.classList.contains("visible")) {
            closePopover();
            return;
        }

        if (activeCard) activeCard.classList.remove("active-card");
        activeCard = card;
        activeCard.classList.add("active-card");

        const metaHTML = [
            proj.mesAno ? `<p><strong>Mês / Ano:</strong> ${proj.mesAno}</p>` : '',
            proj.cargo ? `<p><strong>Cargo / Função:</strong> ${proj.cargo}</p>` : '',
            proj.local ? `<p><strong>Local / Organização:</strong> ${proj.local}</p>` : ''
        ].join('');

        const popoverHTML = `
            <button id="popover-close" class="popover-close-btn" aria-label="Fechar">&times;</button>
            <div class="popover-inner">
                ${proj.hashtag ? `<span class="pop-hashtag-small">${proj.hashtag}</span>` : ''}
                <h3 class="pop-title-highlight">${proj.titulo}</h3>
                
                ${metaHTML ? `<div class="pop-meta">${metaHTML}</div>` : ''}
                ${proj.resumo ? `<p class="pop-description-text">${proj.resumo}</p>` : ''}
                
                <div id="pop-actions" class="pop-actions-container"></div>
            </div>
        `;

        if (popover) {
            popover.style.display = "block";
            popover.innerHTML = popoverHTML;

            document.getElementById("popover-close")?.addEventListener("click", (e) => {
                e.stopPropagation();
                closePopover();
            });

            const actionsContainer = document.getElementById("pop-actions");
            if (proj.links && proj.links.length > 0 && actionsContainer) {
                const linksFragment = document.createDocumentFragment();
                proj.links.forEach(l => {
                    const btn = document.createElement("a");
                    btn.href = l.url;
                    btn.target = "_blank";
                    btn.rel = "noopener noreferrer"; // Segurança para links externos
                    btn.className = "pop-action-btn";
                    btn.innerHTML = `<i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}`;
                    linksFragment.appendChild(btn);
                });
                actionsContainer.appendChild(linksFragment);
            } else if (actionsContainer) {
                actionsContainer.style.display = "none";
            }

            if (window.lucide && typeof window.lucide.createIcons === "function") {
                window.lucide.createIcons();
            }

            // Lógica ajustada de Posicionamento
            if (window.innerWidth > 850) {
                const cardRect = card.getBoundingClientRect();
                const gap = 12;
                const popoverWidth = 460;
                
                const spaceRight = window.innerWidth - cardRect.right;
                const leftPos = spaceRight >= (popoverWidth + gap) 
                    ? cardRect.right + gap + window.scrollX 
                    : cardRect.left - popoverWidth - gap + window.scrollX;

                popover.style.top = `${cardRect.top + window.scrollY}px`;
                popover.style.left = `${leftPos}px`;
                popover.style.bottom = "auto";
            } else {
                // Limpa estilos inline em mobile para não interferir com Media Queries no CSS
                popover.style.top = "";
                popover.style.left = "";
            }
            
            // Microtask para aplicar a animação de entrada com CSS
            setTimeout(() => popover.classList.add("visible"), 10);
        }
    }

    // 7. NAVEGAÇÃO DOS CARROSSEIS (Lógica de botões mais limpa)
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

        btnLeft?.addEventListener("click", () => {
            closePopover();
            slider.scrollBy({ left: -300, behavior: "smooth" });
        });

        btnRight?.addEventListener("click", () => {
            closePopover();
            slider.scrollBy({ left: 300, behavior: "smooth" });
        });

        slider.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        
        // Garante a verificação correta logo após o paint inicial do browser
        setTimeout(updateButtons, 200);
    }

    renderCards();

    // 8. MENU HAMBÚRGUER MOBILE
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    hamburger?.addEventListener("click", () => {
        navLinks?.classList.toggle("active");
    });

    // 9. EVENTOS DE JANELA E CLIQUES EXTERNOS
    document.addEventListener("click", (e) => {
        if (popover && popover.classList.contains("visible") && !popover.contains(e.target)) {
            closePopover();
        }
    });

    window.addEventListener("resize", () => {
        closePopover();
        // Reseta o posicionamento se a tela for redimensionada entre Desktop/Mobile
        if (popover) {
            popover.style.top = "";
            popover.style.left = "";
        }
    });
});
