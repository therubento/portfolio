// DADOS INTEGRUAIS DOS PROJETOS COM CATEGORIAS E DESTAQUES DEFINIDOS
const projetos = [
    {
        id: 1,
        destaque: true,
        categoria: "radio", // 🎙️ RÁDIO & ÁUDIO
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "RUA FM / Universidade do Algarve",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        links: [
            { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH", icone: "headphones" }
        ]
    },
    {
        id: 2,
        destaque: true,
        categoria: "audiovisual", // 🎬 AUDIOVISUAL
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
        id: 3,
        destaque: true,
        categoria: "jornalismo", // 📰 JORNALISMO & MEDIA
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
        id: 4,
        destaque: false,
        categoria: "jornalismo",
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões na categoria de Reportagem de TV.",
        links: [
            { texto: "Ver Portfólio no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ]
    },
    {
        id: 5,
        destaque: false,
        categoria: "digital", // 📱 DIGITAL & COMUNICAÇÃO
        hashtag: "#digital",
        titulo: "Projeto ENTR PT — RTP",
        mesAno: "Maio — Agosto 2024",
        cargo: "Criador de Conteúdos",
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
        local: "RUA FM",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Locução e cobertura integral em direto de grandes eventos culturais: SA do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds.",
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
        mesAno: "2018 — 2019",
        cargo: "Realizador / Editor",
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
        categoria: "outros", // OUTROS
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "ESCS",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo: quando o essencial pode ser invisível aos olhos dos telespectadores'.",
        links: []
    },
    {
        id: 9,
        destaque: false,
        categoria: "jornalismo",
        hashtag: "#imprensa",
        titulo: "Reportagens — Sul Informação",
        mesAno: "2021 — 2022",
        cargo: "Jornalista",
        local: "Sul Informação",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {

    // 1. ANIMAÇÕES NO SCROLL
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

    // 2. SCROLL NO LOGO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. RENDERIZAÇÃO DAS BARRAS DE NÍVEL
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseFloat(bar.getAttribute('data-level')) || 0;
        bar.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 4. LÓGICA DO MODAL POP-UP ESTILO NETFLIX
    const modalBackdrop = document.getElementById("netflix-modal");
    const modalClose = document.getElementById("modal-close");

    function openNetflixModal(proj) {
        document.getElementById("modal-cover").src = proj.capa;
        document.getElementById("modal-hashtag").innerText = proj.hashtag || '';
        document.getElementById("modal-title").innerText = proj.titulo || '';
        document.getElementById("modal-date").innerText = proj.mesAno ? `📅 ${proj.mesAno}` : '';
        document.getElementById("modal-cargo").innerText = proj.cargo ? `💼 ${proj.cargo}` : '';
        document.getElementById("modal-local").innerText = proj.local ? `📍 ${proj.local}` : '';
        document.getElementById("modal-resumo").innerText = proj.resumo || '';

        const actionsContainer = document.getElementById("modal-actions");
        actionsContainer.innerHTML = '';
        
        if (proj.links && proj.links.length > 0) {
            proj.links.forEach(l => {
                const btn = document.createElement("a");
                btn.href = l.url;
                btn.target = "_blank";
                btn.className = "pop-action-btn";
                btn.innerHTML = `<i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}`;
                actionsContainer.appendChild(btn);
            });
        }

        if (window.lucide) window.lucide.createIcons();
        modalBackdrop.classList.add("visible");
    }

    function closeNetflixModal() {
        modalBackdrop.classList.remove("visible");
    }

    modalClose?.addEventListener("click", closeNetflixModal);
    modalBackdrop?.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) closeNetflixModal();
    });

    // 5. RENDERIZAÇÃO DOS CARTÕES POR CATEGORIA & DESTAQUES
    function renderContent() {
        const gridDestaques = document.getElementById("grid-destaques");

        projetos.forEach(proj => {
            // Se for Destaque, adiciona à grelha superior (3 cartões)
            if (proj.destaque && gridDestaques) {
                const cardDestaque = document.createElement("div");
                cardDestaque.className = "destaque-card-horizontal";
                cardDestaque.innerHTML = `
                    <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-card-img">
                    <div class="destaque-card-body">
                        <div>
                            <span class="card-category">${proj.hashtag}</span>
                            <h3 class="card-title">${proj.titulo}</h3>
                            <p class="card-company">${proj.resumo}</p>
                        </div>
                        <span class="card-date">${proj.mesAno}</span>
                    </div>
                    <div class="corner-arrow-btn"><i data-lucide="arrow-up-right"></i></div>
                `;
                cardDestaque.addEventListener("click", () => openNetflixModal(proj));
                gridDestaques.appendChild(cardDestaque);
            }

            // Adiciona o cartão à respetiva categoria em Slider
            const targetSlider = document.getElementById(`slider-${proj.categoria}`) || document.getElementById("slider-outros");
            if (targetSlider) {
                const card = document.createElement("div");
                card.className = "netflix-card";
                card.innerHTML = `
                    <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover" loading="lazy">
                    <div class="netflix-card-body">
                        <div>
                            <span class="card-category">${proj.hashtag}</span>
                            <h4 class="card-title">${proj.titulo}</h4>
                            <p class="card-company">${proj.local}</p>
                        </div>
                        <p class="card-date">${proj.mesAno}</p>
                    </div>
                    <div class="corner-arrow-btn"><i data-lucide="arrow-up-right"></i></div>
                `;
                card.addEventListener("click", () => openNetflixModal(proj));
                targetSlider.appendChild(card);
            }
        });

        // Configuração dos Carrosseis de Navegação
        ["jornalismo", "audiovisual", "radio", "digital", "outros"].forEach(cat => {
            setupCarouselNavigation(`slider-${cat}`, `btn-left-${cat}`, `btn-right-${cat}`);
        });
    }

    // 6. VINCULAR CONTEÚDOS ÀS TIMELINES (EXPERIÊNCIA E FORMAÇÃO)
    function attachLinkedCards() {
        document.querySelectorAll(".linked-content-slot").forEach(slot => {
            const projId = parseInt(slot.getAttribute("data-project-id"), 10);
            const proj = projetos.find(p => p.id === projId);
            
            if (proj) {
                const miniCard = document.createElement("div");
                miniCard.className = "linked-content-card";
                miniCard.innerHTML = `
                    <img src="${proj.capa}" class="linked-card-thumb" alt="${proj.titulo}">
                    <div class="linked-card-info">
                        <span class="linked-card-tag">Projeto Associado</span>
                        <h5 class="linked-card-title">${proj.titulo}</h5>
                    </div>
                    <i data-lucide="chevron-right" style="color: var(--text-muted); width: 18px;"></i>
                `;
                miniCard.addEventListener("click", (e) => {
                    e.stopPropagation();
                    openNetflixModal(proj);
                });
                slot.appendChild(miniCard);
            }
        });
    }

    // 7. LINKS DINÂMICOS NAS ORGANIZAÇÕES E VOLUNTARIADO
    function setupDynamicArrows() {
        document.querySelectorAll(".card-item-with-logo").forEach(item => {
            const link = item.getAttribute("data-link");
            if (link && link.trim() !== "") {
                const arrow = document.createElement("a");
                arrow.href = link;
                arrow.target = "_blank";
                arrow.className = "corner-arrow-link";
                arrow.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
                item.appendChild(arrow);
            }
        });
    }

    // CARROSSEL SETUP
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
        setTimeout(updateButtons, 200);
    }

    renderContent();
    attachLinkedCards();
    setupDynamicArrows();
});
