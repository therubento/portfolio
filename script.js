// ESTRUTURA DE DADOS COMPLETA DOS CONTEÚDOS COM MÊS/ANO, CARGO, LOCAL, RESUMO E LINKS
const projetos = [
    {
        id: 1,
        categoria: "tv",
        categoriaNome: "Reportagem TV",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        data: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "IEFP / EuroSkills Portugal",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        descricao: "Trabalho de reportagem televisiva galardoado com a Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024), demonstrando excelência técnica em jornalismo de emissão.",
        links: [
            { texto: "Ver na Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" },
            { texto: "Notícia Oficial", url: "https://worldskillsportugal.iefp.pt", icone: "external-link" }
        ]
    },
    {
        id: 2,
        categoria: "tv",
        categoriaNome: "Grande Reportagem",
        titulo: "E Agora, Algarve?",
        data: "Julho 2020",
        cargo: "Jornalista (Estagiário)",
        local: "RTP Centro Regional do Algarve",
        capa: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
        descricao: "Grande reportagem de investigação e análise social e económica sobre os desafios futuros da região algarvia, concebida e produzida integralmente durante a experiência na RTP.",
        links: [
            { texto: "Assistir Vídeo Completo", url: "https://vimeo.com/rubenbento243", icone: "play-circle" }
        ]
    },
    {
        id: 3,
        categoria: "radio",
        categoriaNome: "Cobertura / Entrevista",
        titulo: "Especial Festival F — RUA FM",
        data: "Setembro 2023",
        cargo: "Animador & Repórter On-Air",
        local: "Vila Adentro, Faro",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        descricao: "Cobertura direta e condução de entrevistas de fundo com artistas do panorama musical português nos bastidores do Festival F em Faro para a rádio universitária.",
        links: [
            { texto: "Ouvir Emissão", url: "https://www.rua.pt", icone: "radio" }
        ]
    },
    {
        id: 4,
        categoria: "digital",
        categoriaNome: "Conteúdo Digital",
        titulo: "Projeto ENTR PT — RTP",
        data: "Maio — Agosto 2024",
        cargo: "Criador de Conteúdos (Freelancer)",
        local: "RTP Lisboa / Digital",
        capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        descricao: "Desenvolvimento, recolha e edição de formatos de vídeo adaptados às novas linguagens digitais e redes jovens para a plataforma europeia ENTR Portugal.",
        links: [
            { texto: "Visitar ENTR / RTP", url: "https://www.rtp.pt", icone: "globe" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL SUAVE AO CLICAR NO LOGÓTIPO
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
        brandLogo.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 2. RENDERING DOS SLIDERS DE CONTEÚDOS
    const containerTv = document.getElementById("slider-tv");
    const containerRadio = document.getElementById("slider-radio");
    const containerDigital = document.getElementById("slider-digital");

    projetos.forEach(proj => {
        const cardHtml = `
            <div class="netflix-card" data-id="${proj.id}" onclick="togglePopover(event, ${proj.id})">
                <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover">
                <div class="netflix-card-body">
                    <div>
                        <span class="card-category">${proj.categoriaNome}</span>
                        <h4 class="card-title">${proj.titulo}</h4>
                    </div>
                    <p class="card-date">${proj.data}</p>
                </div>
            </div>
        `;

        if (proj.categoria === "tv" && containerTv) containerTv.innerHTML += cardHtml;
        if (proj.categoria === "radio" && containerRadio) containerRadio.innerHTML += cardHtml;
        if (proj.categoria === "digital" && containerDigital) containerDigital.innerHTML += cardHtml;
    });

    // 3. MENU HAMBÚRGUER MOBILE
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 4. LÓGICA DO POPOVER ADJACENTE (MESMA ALTURA DO CARTÃO)
    const popover = document.getElementById("inline-popover");
    const closeBtn = document.getElementById("popover-close");
    let activeCard = null;

    window.togglePopover = function(event, id) {
        event.stopPropagation();
        const clickedCard = event.currentTarget;
        const item = projetos.find(p => p.id === id);
        if (!item) return;

        // Se clicar no cartão ativo, fecha o painel
        if (activeCard === clickedCard && popover.classList.contains("visible")) {
            closePopover();
            return;
        }

        // Destaque visual no cartão selecionado
        if (activeCard) activeCard.classList.remove("active-card");
        activeCard = clickedCard;
        activeCard.classList.add("active-card");

        // Preenchimento dos dados do projeto
        document.getElementById("pop-category").innerText = item.categoriaNome;
        document.getElementById("pop-title").innerText = item.titulo;
        document.getElementById("pop-date").innerText = item.data;
        document.getElementById("pop-role").innerText = item.cargo;
        document.getElementById("pop-location").innerText = item.local;
        document.getElementById("pop-description").innerText = item.descricao;

        // Gerar Múltiplos Botões/Links Dinâmicos
        const actionsContainer = document.getElementById("pop-actions");
        actionsContainer.innerHTML = "";
        
        if (item.links && item.links.length > 0) {
            item.links.forEach(l => {
                const btn = document.createElement("a");
                btn.href = l.url;
                btn.target = "_blank";
                btn.className = "pop-action-btn";
                btn.innerHTML = `<i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}`;
                actionsContainer.appendChild(btn);
            });
            if (window.lucide) lucide.createIcons();
        }

        // CÁLCULO DINÂMICO DE ESPAÇO NO ECRÃ (DIREITA OU ESQUERDA)
        if (window.innerWidth > 850) {
            const cardRect = clickedCard.getBoundingClientRect();
            const popoverWidth = 340; // Largura do pop-over
            const gap = 14; // Distância entre cartão e pop-over
            const windowWidth = window.innerWidth;

            const spaceRight = windowWidth - cardRect.right;
            let leftPos;

            // Se existir espaço livre à direita, abre à direita. Caso contrário, à esquerda.
            if (spaceRight >= popoverWidth + gap) {
                leftPos = cardRect.right + gap + window.scrollX;
            } else {
                leftPos = cardRect.left - popoverWidth - gap + window.scrollX;
            }

            const topPos = cardRect.top + window.scrollY;

            popover.style.top = `${topPos}px`;
            popover.style.left = `${leftPos}px`;
        }

        popover.classList.add("visible");
    };

    function closePopover() {
        popover.classList.remove("visible");
        if (activeCard) {
            activeCard.classList.remove("active-card");
            activeCard = null;
        }
    }

    if (closeBtn) closeBtn.addEventListener("click", closePopover);

    // Fechar se o utilizador clicar fora do painel pop-over
    document.addEventListener("click", (e) => {
        if (popover.classList.contains("visible") && !popover.contains(e.target)) {
            closePopover();
        }
    });

    // Fechar ao redimensionar a janela ou ao fazer scroll horizontal no slider
    window.addEventListener("resize", closePopover);
    document.querySelectorAll(".netflix-slider").forEach(slider => {
        slider.addEventListener("scroll", closePopover);
    });
});
