// DADOS DOS PROJETOS COM CATEGORIZAÇÃO E DADOS INTEGRADOS
const projetos = [
    {
        id: 1,
        categoria: "RÁDIO & ÁUDIO",
        destaque: true,
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "Rádio Universitária do Algarve / Universidade do Algarve",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        links: [
            { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH?si=58fbe642bf604167", icone: "headphones" }
            { texto: "Ver no Youtube", url: "https://www.youtube.com/playlist?list=PLysOGAXKuGrC_rRX-zF5B62f1aauseKbn", icone: "video" }

        ],
        galeria: [
            "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY"
        ]
    },
    {
        id: 2,
        categoria: "AUDIOVISUAL",
        destaque: true,
        hashtag: "#documentario",
        titulo: "Sala 31 / 30 Anos de CC",
        mesAno: "Fevereiro 2025 — Atualidade",
        cargo: "Realizador",
        local: "Universidade do Algarve",
        capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        resumo: "Documentário comemorativo das três décadas do curso de Ciências da Comunicação da Universidade do Algarve, integrando testemunhos históricos e arquivo audiovisual.",
        links: [
            { texto: "Ver no Behance", url: "https://behance.net/rmdaqb243", icone: "palette" }
        ],
        galeria: []
    },
    {
        id: 4,
        categoria: "JORNALISMO & MEDIA",
        destaque: true,
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV, realizado sob condições de elevada exigência técnica.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        galeria: []
    },
    {
        id: 3,
        categoria: "JORNALISMO & MEDIA",
        destaque: false,
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
        galeria: []
    },
    {
        id: 5,
        categoria: "DIGITAL & COMUNICAÇÃO",
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
        galeria: []
    },
    {
        id: 6,
        categoria: "RÁDIO & ÁUDIO",
        destaque: false,
        hashtag: "#radio",
        titulo: "Coberturas de Festivais — RUA FM",
        mesAno: "2022 — 2025",
        cargo: "Jornalista / Animador",
        local: "RUA - Rádio Universitária do Algarve",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Locução, gravação de marcadores/spots e cobertura integral em direto de grandes eventos culturais: SA do Algarve, Festival F, Festival MED.",
        links: [
            { texto: "Ouvir na RUA FM", url: "https://www.rua.pt", icone: "radio" }
        ],
        galeria: []
    },
    {
        id: 7,
        categoria: "AUDIOVISUAL",
        destaque: false,
        hashtag: "#cinema",
        titulo: "Segunda Opção (Curta-Metragem)",
        mesAno: "Março 2018 — Junho 2019",
        cargo: "Realizador, Editor",
        local: "Tavira / Faro",
        capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        resumo: "Curta-metragem académica independente onde assumi a direção de fotografia, captação de imagem, realização e montagem final.",
        links: [
            { texto: "Ver no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        galeria: []
    },
    {
        id: 8,
        categoria: "OUTROS",
        destaque: false,
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "Escola Superior de Comunicação Social",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho de investigação final do Mestrado em Jornalismo: 'Nos Bastidores do Jornalismo Televisivo'.",
        links: [],
        galeria: []
    },
    {
        id: 9,
        categoria: "JORNALISMO & MEDIA",
        destaque: false,
        hashtag: "#imprensa",
        titulo: "Reportagens e Peças Multimédia — Sul Informação",
        mesAno: "Abril 2021 — Fevereiro 2022",
        cargo: "Jornalista (Estágio Profissional)",
        local: "Sul Informação (Faro)",
        capa: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        resumo: "Escrita diária de notícias, breves e entrevistas, acompanhada pela produção integral de peças jornalísticas em vídeo.",
        links: [
            { texto: "Visitar Sul Informação", url: "https://www.sulinformacao.pt", icone: "globe" }
        ],
        galeria: []
    }
];

let scrollPositionBeforeExpand = 0;
let currentActiveCard = null;

// FUNÇÃO DE ROLAGEM DOS CARROSSEIS
window.scrollCarousel = function(sliderId, distance) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        slider.scrollBy({ left: distance, behavior: 'smooth' });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. REVEAL ANIMAÇÃO
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

    // 2. SCROLL LOGO
    document.getElementById("brand-logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. NÍVEIS DE SOFTWARE
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 4. PREENCHIMENTO AUTOMÁTICO DE SETAS EM ORGANIZAÇÕES & VOLUNTARIADO
    document.querySelectorAll('[data-link]').forEach(item => {
        const link = item.getAttribute('data-link');
        if (link && link.trim() !== "") {
            const arrow = document.createElement('a');
            arrow.href = link;
            arrow.target = "_blank";
            arrow.className = "course-link-arrow";
            arrow.title = "Visitar Website";
            arrow.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
            item.appendChild(arrow);
        }
    });

    // 5. RENDERIZAR "EM DESTAQUE" (3 CARTÕES HORIZONTAIS)
    const destaques = projetos.filter(p => p.destaque).slice(0, 3);
    const containerDestaques = document.getElementById("grid-destaques");
    const drawerDestaques = document.getElementById("destaque-expand-slot");

    if (containerDestaques) {
        destaques.forEach(proj => {
            const card = document.createElement("div");
            card.className = "destaque-card-horizontal";
            card.setAttribute("data-id", proj.id);
            card.innerHTML = `
                <div class="destaque-img-wrapper">
                    <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-card-img">
                    <div class="img-gradient-overlay"></div>
                </div>
                <div class="destaque-card-body">
                    <div>
                        <span class="card-category">${proj.hashtag}</span>
                        <h3 class="card-title">${proj.titulo}</h3>
                        <p class="card-company">${proj.resumo}</p>
                    </div>
                    <div class="destaque-card-footer">
                        <span class="card-date">${proj.mesAno}</span>
                        <button class="corner-arrow-btn" title="Ver Detalhes">
                            <i data-lucide="arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            `;
            card.addEventListener("click", () => toggleExpand(drawerDestaques, proj, card));
            containerDestaques.appendChild(card);
        });
    }

    // 6. RENDERIZAR CATEGORIAS 16:9
    const categoryMapping = {
        "JORNALISMO & MEDIA": "slider-jornalismo",
        "AUDIOVISUAL": "slider-audiovisual",
        "RÁDIO & ÁUDIO": "slider-radio",
        "DIGITAL & COMUNICAÇÃO": "slider-digital",
        "OUTROS": "slider-outros"
    };

    const expandMapping = {
        "JORNALISMO & MEDIA": "expand-jornalismo",
        "AUDIOVISUAL": "expand-audiovisual",
        "RÁDIO & ÁUDIO": "expand-radio",
        "DIGITAL & COMUNICAÇÃO": "expand-digital",
        "OUTROS": "expand-outros"
    };

    projetos.forEach(proj => {
        const sliderId = categoryMapping[proj.categoria] || "slider-outros";
        const expandId = expandMapping[proj.categoria] || "expand-outros";
        const slider = document.getElementById(sliderId);
        const drawer = document.getElementById(expandId);

        if (slider && drawer) {
            const card = document.createElement("div");
            card.className = "netflix-card-16-9";
            card.setAttribute("data-id", proj.id);
            card.style.backgroundImage = `url('${proj.capa}')`;

            card.innerHTML = `
                <div class="card-16-9-overlay">
                    <span class="card-category">${proj.hashtag}</span>
                    <h4 class="card-title">${proj.titulo}</h4>
                </div>
            `;

            card.addEventListener("click", () => toggleExpand(drawer, proj, card));
            slider.appendChild(card);
        }
    });

    // 7. PROJETOS ASSOCIADOS ÀS TIMELINES (EXPERIÊNCIA / FORMAÇÃO)
    document.querySelectorAll('.associated-projects-container').forEach(container => {
        const ids = container.getAttribute('data-project-ids')?.split(',').map(id => parseInt(id.trim())) || [];
        const itemParent = container.closest('.timeline-item');
        const drawer = itemParent ? itemParent.querySelector('.timeline-expand-slot') : null;

        ids.forEach(id => {
            const proj = projetos.find(p => p.id === id);
            if (proj) {
                const miniCard = document.createElement('div');
                miniCard.className = 'associated-mini-card';
                miniCard.title = proj.titulo;
                miniCard.innerHTML = `<img src="${proj.capa}" alt="${proj.titulo}">`;
                miniCard.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (drawer) toggleExpand(drawer, proj, miniCard);
                });
                container.appendChild(miniCard);
            }
        });
    });

    // 8. FUNÇÃO EXPANSORA (ESTILO NETFLIX / PRIME VIDEO)
    function toggleExpand(drawer, proj, element) {
        if (!drawer) return;

        const isCurrentlyOpen = drawer.classList.contains("active") && drawer.getAttribute("data-active-id") == proj.id;

        // FECHAR TODOS OS OUTROS DRAWERS ABERTOS
        document.querySelectorAll('.netflix-expand-drawer.active, .timeline-expand-slot.active').forEach(d => {
            d.classList.remove('active');
            d.innerHTML = '';
        });

        if (currentActiveCard) {
            currentActiveCard.classList.remove('active-card');
        }

        if (isCurrentlyOpen) {
            // REGRESSAR AO SÍTIO ANTERIOR
            window.scrollTo({ top: scrollPositionBeforeExpand, behavior: "smooth" });
            currentActiveCard = null;
            return;
        }

        // GUARDAR POSIÇÃO ANTERIOR
        scrollPositionBeforeExpand = window.scrollY;
        currentActiveCard = element;
        currentActiveCard.classList.add('active-card');

        // MONTAGEM DO CONTEÚDO DO EXPAND
        const linksHTML = proj.links && proj.links.length > 0 
            ? proj.links.map(l => `<a href="${l.url}" target="_blank" class="pop-action-btn"><i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}</a>`).join('')
            : '';

        // GALERIA (EXCLUI FOTO DE CAPA)
        const galleryItems = (proj.galeria || []).filter(img => img !== proj.capa);
        const galleryHTML = galleryItems.length > 0
            ? `<div class="expand-gallery">
                ${galleryItems.map(img => `<img src="${img}" class="gallery-mini-thumb" alt="Mídia">`).join('')}
               </div>`
            : '';

        drawer.setAttribute("data-active-id", proj.id);
        drawer.innerHTML = `
            <div class="expand-container">
                <button class="expand-close-btn" aria-label="Fechar">&times;</button>
                <div class="expand-content-grid">
                    <div class="expand-left-media">
                        <img src="${proj.capa}" alt="${proj.titulo}">
                        <div class="expand-img-overlay"></div>
                    </div>
                    <div class="expand-right-details">
                        <span class="card-category">${proj.hashtag}</span>
                        <h3>${proj.titulo}</h3>
                        <p class="expand-meta"><strong>${proj.mesAno || ''}</strong> • ${proj.cargo || ''} • ${proj.local || ''}</p>
                        <p class="expand-description">${proj.resumo || ''}</p>
                        
                        ${linksHTML ? `<div class="expand-actions">${linksHTML}</div>` : ''}
                        ${galleryHTML}
                    </div>
                </div>
            </div>
        `;

        drawer.classList.add('active');

        // RE-INICIALIZAR ÍCONES
        if (window.lucide) window.lucide.createIcons();

        // SCROLL SUAVE PARA O PAINEL ABERTO
        setTimeout(() => {
            drawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);

        // BOTÃO FECHAR
        drawer.querySelector('.expand-close-btn')?.addEventListener('click', () => {
            drawer.classList.remove('active');
            drawer.innerHTML = '';
            if (currentActiveCard) {
                currentActiveCard.classList.remove('active-card');
                currentActiveCard = null;
            }
            window.scrollTo({ top: scrollPositionBeforeExpand, behavior: "smooth" });
        });
    }

});
