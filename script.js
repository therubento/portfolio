// DADOS DOS PROJETOS COM ESTRUTURA REORGANIZADA
const projetos = [
    {
        id: 1,
        destaque: true,
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Reporter TV",
        local: "Europarque, Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) no formato de Reportagem de Televisão, cobrindo provas de elevada exigência técnica em ambiente real de produção.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com", icone: "video" },
            { texto: "Notícia Oficial", url: "https://worldskillsportugal.iefp.pt", icone: "external-link" }
        ]
    },
    {
        id: 2,
        destaque: true,
        hashtag: "#televisao",
        titulo: "E Agora, Algarve?",
        mesAno: "Julho 2020",
        cargo: "Jornalista Estagiário",
        local: "RTP Algarve — Faro",
        capa: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
        resumo: "Grande reportagem de televisão desenvolvida para a RTP Algarve, abordando os desafios socioeconómicos do ecossistema regional e o impacto nas comunidades locais.",
        links: [
            { texto: "Assistir no Vimeo", url: "https://vimeo.com", icone: "play-circle" }
        ]
    },
    {
        id: 3,
        destaque: true,
        hashtag: "#radio",
        titulo: "Especial Festival F — RUA FM",
        mesAno: "Setembro 2023",
        cargo: "Locutor / Entrevistador",
        local: "Vila Adentro — Faro",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Cobertura integral em direto e condução de entrevistas com diversos artistas do cartaz do Festival F para a emissão especial da RUA - Rádio Universitária do Algarve.",
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ]
    },
    {
        id: 4,
        destaque: true,
        hashtag: "#digital",
        titulo: "Projeto ENTR PT — RTP",
        mesAno: "Maio — Agosto 2024",
        cargo: "Criador de Conteúdos",
        local: "RTP — Lisboa",
        capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        resumo: "Criação, produção e edição de formatos curtos de vídeo adaptados ao público jovem para o projeto europeu ENTR PT no ecossistema digital da RTP.",
        links: [
            { texto: "Ver no Behance", url: "https://behance.net", icone: "palette" }
        ]
    },
    {
        id: 5,
        destaque: false,
        hashtag: "#imprensa",
        titulo: "Reportagens Regionais — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista Redator",
        local: "Faro / Região do Algarve",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Cobertura diária de atualidade, redação de notícias, entrevistas de fundo e peças multimédia para o jornal regional Sul Informação.",
        links: [
            { texto: "Ler Peças", url: "https://www.sulinformacao.pt", icone: "globe" }
        ]
    },
    {
        id: 6,
        destaque: false,
        hashtag: "#outros",
        titulo: "Investigação Académica Mestrado",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "ESCS — Lisboa",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Dissertação de Mestrado em Jornalismo focada nas rotinas de produção de televisão e na visibilidade técnica das redações nacionais.",
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

    // 2. POPOVER ELEMENTOS
    const popover = document.getElementById("inline-popover");
    const closeBtn = document.getElementById("popover-close");
    let activeCard = null;

    // 3. POPOVER FECHAR
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

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closePopover();
        });
    }

    // 4. RENDERING DOS SLIDERS ("Em Destaque" vs "Todos os Conteúdos")
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
                        <span class="card-category">${proj.hashtag}</span>
                        <h4 class="card-title">${proj.titulo}</h4>
                    </div>
                    <p class="card-date">${proj.mesAno}</p>
                </div>
            `;

            // Evento de clique para abrir popover
            card.addEventListener("click", (e) => openPopover(e, proj, card));

            if (proj.destaque && containerDestaque) {
                containerDestaque.appendChild(card);
            } else if (containerOutros) {
                containerOutros.appendChild(card);
            }
        });
    }

    // 5. LÓGICA DE ABERTURA E POSICIONAMENTO DO POPOVER (DIREITA OU ESQUERDA)
    function openPopover(event, proj, card) {
        event.stopPropagation();

        if (activeCard === card && popover.classList.contains("visible")) {
            closePopover();
            return;
        }

        if (activeCard) activeCard.classList.remove("active-card");
        activeCard = card;
        activeCard.classList.add("active-card");

        // Preencher informações
        document.getElementById("pop-category").innerText = proj.hashtag;
        document.getElementById("pop-title").innerText = proj.titulo;
        document.getElementById("pop-date").innerText = proj.mesAno;
        document.getElementById("pop-role").innerText = proj.cargo || "N/A";
        document.getElementById("pop-location").innerText = proj.local || "N/A";
        document.getElementById("pop-description").innerText = proj.resumo;

        // Renderizar Links
        const actionsContainer = document.getElementById("pop-actions");
        actionsContainer.innerHTML = "";

        if (proj.links && proj.links.length > 0) {
            proj.links.forEach(l => {
                const btn = document.createElement("a");
                btn.href = l.url;
                btn.target = "_blank";
                btn.className = "pop-action-btn";
                btn.innerHTML = `<i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}`;
                actionsContainer.appendChild(btn);
            });
            if (window.lucide) lucide.createIcons();
        }

        popover.style.display = "block";
        popover.classList.add("visible");

        // POSICIONAMENTO DINÂMICO
        if (window.innerWidth > 850) {
            const cardRect = card.getBoundingClientRect();
            const gap = 12;
            const popoverWidth = 340;
            const windowWidth = window.innerWidth;

            const spaceRight = windowWidth - cardRect.right;
            let leftPos;

            // Se couber à direita, abre à direita. Senão, abre à esquerda.
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

    // Inicializar cartões
    renderCards();

    // 6. MENU HAMBÚRGUER MOBILE
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 7. EVENTOS PARA FECHAR POPOVER NO CLIQUE FORA OU NO SCROLL
    document.addEventListener("click", (e) => {
        if (popover && popover.classList.contains("visible") && !popover.contains(e.target)) {
            closePopover();
        }
    });

    window.addEventListener("resize", closePopover);
    document.querySelectorAll(".netflix-slider").forEach(slider => {
        slider.addEventListener("scroll", closePopover);
    });
});
