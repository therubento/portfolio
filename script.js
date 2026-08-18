// DADOS DOS PROJETOS ATUALIZADOS INTEGRALMENTE COM O CURRÍCULO 2026
const projetos = [
    // ---------------- DESTAQUES (APENAS 4 ITENS) ----------------
    {
        id: 1,
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
    {
        id: 2,
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
        id: 3,
        destaque: true,
        hashtag: "#televisao",
        titulo: "E agora, Algarve?",
        mesAno: "Março — Julho 2020",
        cargo: "Jornalista (Estagiário)",
        local: "RTP Algarve — Faro",
        capa: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
        resumo: "Grande Reportagem televisiva concebida e editada durante o estágio na RTP Algarve (classificado com 18 valores), abordando as dinâmicas sociais e económicas da região.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 4,
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

    // ---------------- CONTEÚDOS / PROJETOS ----------------
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

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL SUAVE NO LOGÓTIPO
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
        brandLogo.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 2. ELEMENTOS DO POPOVER
    const popover = document.getElementById("inline-popover");
    let activeCard = null;

    function closePopover() {
        if (popover) {
            popover.classList.remove("visible");
            popover.style.display = "none";
        }
        if (activeCard) {
            activeCard.classList.remove("active-card");
            activeCard = null;
        }
    }

    // 3. RENDERING DOS CARTÕES FECHADOS
    const containerDestaque = document.getElementById("slider-destaque");
    const containerOutros = document.getElementById("slider-outros");

    function renderCards() {
        if (containerDestaque) containerDestaque.innerHTML = "";
        if (containerOutros) containerOutros.innerHTML = "";

        projetos.forEach(proj => {
            const card = document.createElement("div");
            card.className = "netflix-card";
            card.setAttribute("data-id", proj.id);

            card.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover">
                <div class="netflix-card-body">
                    <div>
                        <span class="card-category">${proj.hashtag || ''}</span>
                        <h4 class="card-title">${proj.titulo || ''}</h4>
                        ${proj.local ? `<p class="card-company">${proj.local}</p>` : ''}
                    </div>
                    ${proj.mesAno ? `<p class="card-date">${proj.mesAno}</p>` : ''}
                </div>
            `;

            card.addEventListener("click", (e) => openPopover(e, proj, card));

            if (proj.destaque && containerDestaque) {
                containerDestaque.appendChild(card);
            } else if (containerOutros) {
                containerOutros.appendChild(card);
            }
        });

        setupCarouselNavigation("slider-destaque", "btn-left-destaque", "btn-right-destaque");
        setupCarouselNavigation("slider-outros", "btn-left-outros", "btn-right-outros");
    }

    // 4. LÓGICA DE ABERTURA DO POPOVER
    function openPopover(event, proj, card) {
        event.stopPropagation();

        if (activeCard === card && popover.classList.contains("visible")) {
            closePopover();
            return;
        }

        if (activeCard) activeCard.classList.remove("active-card");
        activeCard = card;
        activeCard.classList.add("active-card");

        let metaHTML = '';
        if (proj.mesAno) metaHTML += `<p><strong>Mês / Ano:</strong> ${proj.mesAno}</p>`;
        if (proj.cargo) metaHTML += `<p><strong>Cargo / Função:</strong> ${proj.cargo}</p>`;
        if (proj.local) metaHTML += `<p><strong>Local / Organização:</strong> ${proj.local}</p>`;

        let popoverHTML = `
            <button id="popover-close" class="popover-close-btn" aria-label="Fechar">&times;</button>
            <div class="popover-inner">
                ${proj.hashtag ? `<span class="pop-hashtag-small">${proj.hashtag}</span>` : ''}
                <h3 class="pop-title-highlight">${proj.titulo}</h3>
                
                ${metaHTML ? `<div class="pop-meta">${metaHTML}</div>` : ''}
                ${proj.resumo ? `<p class="pop-description-text">${proj.resumo}</p>` : ''}
                
                <div id="pop-actions" class="pop-actions-container"></div>
            </div>
        `;

        popover.innerHTML = popoverHTML;

        document.getElementById("popover-close").addEventListener("click", (e) => {
            e.stopPropagation();
            closePopover();
        });

        const actionsContainer = document.getElementById("pop-actions");
        if (proj.links && proj.links.length > 0) {
            proj.links.forEach(l => {
                const btn = document.createElement("a");
                btn.href = l.url;
                btn.target = "_blank";
                btn.className = "pop-action-btn";
                btn.innerHTML = `<i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}`;
                actionsContainer.appendChild(btn);
            });
        } else {
            actionsContainer.style.display = "none";
        }

        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }

        popover.style.display = "block";
        popover.classList.add("visible");

        if (window.innerWidth > 850) {
            const cardRect = card.getBoundingClientRect();
            const gap = 14;
            const popoverWidth = 500;
            const windowWidth = window.innerWidth;

            const spaceRight = windowWidth - cardRect.right;
            let leftPos;

            if (spaceRight >= popoverWidth + gap) {
                leftPos = cardRect.right + gap + window.scrollX;
            } else {
                leftPos = cardRect.left - popoverWidth - gap + window.scrollX;
            }

            const topPos = cardRect.top + window.scrollY;

            popover.style.top = `${topPos}px`;
            popover.style.left = `${leftPos}px`;
        }
    }

    // 5. LÓGICA DE CONTROLO DAS SETAS DOS CARROSSEIS
    function setupCarouselNavigation(sliderId, btnLeftId, btnRightId) {
        const slider = document.getElementById(sliderId);
        const btnLeft = document.getElementById(btnLeftId);
        const btnRight = document.getElementById(btnRightId);

        if (!slider || !btnLeft || !btnRight) return;

        function updateButtons() {
            const scrollLeft = slider.scrollLeft;
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

            if (scrollLeft > 10) {
                btnLeft.classList.add("visible");
            } else {
                btnLeft.classList.remove("visible");
            }

            if (maxScrollLeft - scrollLeft > 10) {
                btnRight.classList.add("visible");
            } else {
                btnRight.classList.remove("visible");
            }
        }

        btnLeft.addEventListener("click", () => {
            closePopover();
            slider.scrollBy({ left: -320, behavior: "smooth" });
        });

        btnRight.addEventListener("click", () => {
            closePopover();
            slider.scrollBy({ left: 320, behavior: "smooth" });
        });

        slider.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        
        setTimeout(updateButtons, 100);
    }

    // Inicialização
    renderCards();

    // 6. MENU HAMBÚRGUER MOBILE
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 7. EVENTOS PARA FECHAR POPOVER
    document.addEventListener("click", (e) => {
        if (popover && popover.classList.contains("visible") && !popover.contains(e.target)) {
            closePopover();
        }
    });

    window.addEventListener("resize", closePopover);
});
