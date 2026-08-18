// DADOS DOS PROJETOS COM SUPORTE A MÚLTIPLOS LINKS
const projetos = [
    {
        id: 1,
        categoria: "tv",
        categoriaNome: "Reportagem TV",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        data: "Novembro 2024",
        duracao: "Reportagem de Televisão",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        descricao: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) no formato de Reportagem de Televisão.",
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
        data: "2020",
        duracao: "20 minutos",
        capa: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
        descricao: "Grande reportagem desenvolvida no âmbito do estágio na RTP Centro Regional do Algarve, analisando os impactos económicos e sociais no ecossistema regional.",
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
        duracao: "Emissão On-Air",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        descricao: "Cobertura em direto e condução de entrevistas com artistas no Festival F em Faro para a RUA - Rádio Universitária do Algarve.",
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ]
    },
    {
        id: 4,
        categoria: "digital",
        categoriaNome: "Conteúdo Digital",
        titulo: "Projeto ENTR PT — RTP",
        data: "Maio — Agosto 2024",
        duracao: "Formatos Sociais / Vídeo Short",
        capa: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        descricao: "Criação de conteúdos inovadores e edições dinâmicas para a plataforma europeia ENTR PT no âmbito do ecossistema RTP.",
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

    // 2. RENDERING DOS SLIDERS DA SECÇÃO DE CONTEÚDOS
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

    // 4. LÓGICA DO POPOVER LATERAL FLUTUANTE (DIREITA OU ESQUERDA)
    const popover = document.getElementById("inline-popover");
    const closeBtn = document.getElementById("popover-close");
    let activeCard = null;

    window.togglePopover = function(event, id) {
        event.stopPropagation();
        const clickedCard = event.currentTarget;
        const item = projetos.find(p => p.id === id);
        if (!item) return;

        // Se clicar no mesmo cartão já aberto, fecha
        if (activeCard === clickedCard && popover.classList.contains("visible")) {
            closePopover();
            return;
        }

        // Remover destaque anterior
        if (activeCard) activeCard.classList.remove("active-card");
        activeCard = clickedCard;
        activeCard.classList.add("active-card");

        // Preencher dados do popover
        document.getElementById("pop-category").innerText = item.categoriaNome;
        document.getElementById("pop-title").innerText = item.titulo;
        document.getElementById("pop-date").innerText = item.data;
        document.getElementById("pop-duration").innerText = item.duracao;
        document.getElementById("pop-description").innerText = item.descricao;

        // Gerar Múltiplos Botões Dinamicamente
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

        // POSICIONAMENTO DINÂMICO (DIREITA OU ESQUERDA)
        if (window.innerWidth > 850) {
            const cardRect = clickedCard.getBoundingClientRect();
            const gap = 12; // Espaço entre o cartão e o popover
            const popoverWidth = 320;
            const windowWidth = window.innerWidth;

            // Verificar se há espaço suficiente à direita
            const spaceRight = windowWidth - cardRect.right;
            let leftPos;

            if (spaceRight >= popoverWidth + gap) {
                // Abre à DIREITA
                leftPos = cardRect.right + gap + window.scrollX;
            } else {
                // Abre à ESQUERDA
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

    // Fechar ao clicar fora
    document.addEventListener("click", (e) => {
        if (popover.classList.contains("visible") && !popover.contains(e.target)) {
            closePopover();
        }
    });

    // Recalcular ou fechar no scroll/resize do slider
    window.addEventListener("resize", closePopover);
    document.querySelectorAll(".netflix-slider").forEach(slider => {
        slider.addEventListener("scroll", closePopover);
    });
});
