// DADOS DE TODOS OS PROJETOS / CONTEÚDOS COM ATRIBUIÇÃO ACADÉMICA / PROFISSIONAL
const projetos = [
    {
        id: 1,
        categoria: "RÁDIO & ÁUDIO",
        destaque: true,
        hashtag: "#digital #radio",
        titulo: "Confissões de Um Universitário",
        mesAno: "Março 2026 - Atualidade",
        cargo: "Realizador / Pós-Produção",
        local: "Rádio Universitária do Algarve / UAlg",
        capa: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY",
        resumo: "“Confissões de um Universitário” leva-te a conhecer, em cada episódio, um curso da Universidade do Algarve através dos próprios estudantes da UAlg.",
        experienciaId: "exp-rua",
        academicId: "",
        links: [
            { texto: "Ouvir no Spotify", url: "https://open.spotify.com/show/4bEgJLERqSEwgND78lAXAH", icone: "headphones" }
        ],
        media: [
            { tipo: "foto", url: "https://www.ualg.pt/sites/default/files/styles/redes_sociais_landscape/public/nodes/images/2026-03/confuni.jpg?itok=l427xszY" }
        ]
    },
    {
        id: 2,
        categoria: "AUDIOVISUAL",
        destaque: true,
        hashtag: "#documentario",
        titulo: "Sala 31",
        mesAno: "2026",
        cargo: "Realizador",
        local: "Universidade do Algarve",
        capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        resumo: "Documentário intimista e de arquivo audiovisual focado na memória coletiva e nos bastidores académicos da Universidade do Algarve.",
        experienciaId: "exp-ualg",
        academicId: "acad-licenciatura",
        links: [
            { texto: "Ver Trailer", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        media: []
    },
    {
        id: 3,
        categoria: "JORNALISMO & MEDIA",
        destaque: true,
        hashtag: "#televisao",
        titulo: "Medalha de Ouro — Skills Portugal 2024",
        mesAno: "Novembro 2024",
        cargo: "Jornalista / Repórter TV",
        local: "Santa Maria da Feira",
        capa: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho vencedor da Medalha de Ouro no Campeonato Nacional das Profissões (Skills Portugal 2024) na categoria de Reportagem de TV.",
        experienciaId: "exp-sul",
        academicId: "acad-mestrado",
        links: [
            { texto: "Ver Reportagem no Vimeo", url: "https://vimeo.com/rubenbento243", icone: "video" }
        ],
        media: []
    },
    {
        id: 4,
        categoria: "JORNALISMO & MEDIA",
        destaque: false,
        hashtag: "#televisao",
        titulo: "Medalha de Excelência — Skills Portugal 2023",
        mesAno: "Março 2023",
        cargo: "Editor de Vídeo",
        local: "Portimão",
        capa: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
        resumo: "Trabalho premiado com a Medalha de Excelência no Skills Portugal 2023 na função de Editor de Vídeo.",
        experienciaId: "exp-sul",
        academicId: "acad-mestrado",
        links: []
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
        resumo: "Criação e edição de formatos curtos de vídeo para a plataforma europeia ENTR PT transmitida pela RTP.",
        experienciaId: "exp-rtp-entr",
        academicId: "",
        links: [
            { texto: "Visitar ENTR PT", url: "https://media.rtp.pt/entr/", icone: "globe" }
        ]
    },
    {
        id: 6,
        categoria: "RÁDIO & ÁUDIO",
        destaque: false,
        hashtag: "#radio",
        titulo: "Coberturas de Festivais — RUA FM",
        mesAno: "2022 — 2025",
        cargo: "Jornalista / Animador",
        local: "RUA FM",
        capa: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        resumo: "Cobertura integral de grandes eventos culturais: Festival F, Festival MED e Albufeira Sounds.",
        experienciaId: "exp-rua",
        academicId: "",
        links: []
    },
    {
        id: 7,
        categoria: "AUDIOVISUAL",
        destaque: false,
        hashtag: "#cinema",
        titulo: "Segunda Opção (Curta-Metragem)",
        mesAno: "2018 — 2019",
        cargo: "Realizador / Editor",
        local: "Tavira / Faro",
        capa: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        resumo: "Curta-metragem académica independente assumindo direção de fotografia e montagem final.",
        experienciaId: "",
        academicId: "acad-licenciatura",
        links: []
    },
    {
        id: 8,
        categoria: "OUTROS",
        destaque: false,
        hashtag: "#investigacao",
        titulo: "Dissertação de Mestrado (ESCS)",
        mesAno: "2022 — 2024",
        cargo: "Investigador",
        local: "ESCS Lisboa",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        resumo: "Investigação final do Mestrado em Jornalismo concluída com 17 valores.",
        experienciaId: "",
        academicId: "acad-mestrado",
        links: []
    }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL REVEAL
    const reveals = document.querySelectorAll(".reveal");
    function handleScrollReveal() {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80) {
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

    // 3. BARRAS DE NÍVEL DE SOFTWARE
    document.querySelectorAll('.level-bar').forEach(bar => {
        const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
        bar.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = `level-dot ${i <= level ? 'active' : ''}`;
            bar.appendChild(dot);
        }
    });

    // 4. RENDERIZAÇÃO DOS CARTÕES EM DESTAQUE E SUB-CATEGORIAS
    renderDestaques();
    renderSubcategorias();

    // 5. ATRIBUIÇÃO DE MINI CARTÕES À EXPERIÊNCIA E FORMAÇÃO ACADÉMICA
    renderAssociatedProjects();

    // 6. ADICIONAR SETAS COM LINKS A ORGANIZAÇÕES E VOLUNTARIADO
    setupOrgLinks();

    // 7. MODAL NETFLIX CONTROLOS
    setupModalEvents();
});

// POP-UP NETFLIX / PRIME VIDEO
function openNetflixModal(proj) {
    const backdrop = document.getElementById("netflix-modal");
    
    document.getElementById("modal-cover-img").src = proj.capa;
    document.getElementById("modal-hashtag").textContent = proj.hashtag || '';
    document.getElementById("modal-title").textContent = proj.titulo || '';
    document.getElementById("modal-date").textContent = proj.mesAno || '';
    document.getElementById("modal-role").textContent = proj.cargo ? `Cargo: ${proj.cargo}` : '';
    document.getElementById("modal-location").textContent = proj.local ? `Local: ${proj.local}` : '';
    document.getElementById("modal-description").textContent = proj.resumo || '';

    // Links
    const linksContainer = document.getElementById("modal-links");
    linksContainer.innerHTML = '';
    if (proj.links && proj.links.length > 0) {
        proj.links.forEach(l => {
            const a = document.createElement("a");
            a.href = l.url;
            a.target = "_blank";
            a.className = "pop-action-btn";
            a.innerHTML = `<i data-lucide="${l.icone || 'external-link'}"></i> ${l.texto}`;
            linksContainer.appendChild(a);
        });
    }

    // Galeria de Média
    const mediaContainer = document.getElementById("modal-media-gallery");
    mediaContainer.innerHTML = '';
    if (proj.media && proj.media.length > 0) {
        proj.media.forEach(m => {
            const div = document.createElement("div");
            div.className = "modal-media-card";
            div.innerHTML = `<img src="${m.url}" alt="Média">`;
            mediaContainer.appendChild(div);
        });
    }

    if (window.lucide) window.lucide.createIcons();
    backdrop.classList.add("active");
}

function setupModalEvents() {
    const backdrop = document.getElementById("netflix-modal");
    const closeBtn = document.getElementById("modal-close-btn");

    closeBtn?.addEventListener("click", () => backdrop.classList.remove("active"));
    backdrop?.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.classList.remove("active");
    });
}

// RENDER DESTAQUES (3 CARTÕES)
function renderDestaques() {
    const container = document.getElementById("grid-destaques-container");
    if (!container) return;
    container.innerHTML = '';

    const destaques = projetos.filter(p => p.destaque).slice(0, 3);
    destaques.forEach(proj => {
        const card = document.createElement("div");
        card.className = "destaque-card-highlight";
        card.onclick = () => openNetflixModal(proj);

        card.innerHTML = `
            <div class="destaque-card-cover-wrap">
                <span class="destaque-badge">EM DESTAQUE</span>
                <img src="${proj.capa}" alt="${proj.titulo}" class="destaque-card-img">
            </div>
            <div class="destaque-card-body">
                <div>
                    <span class="card-category">${proj.hashtag}</span>
                    <h3 class="card-title">${proj.titulo}</h3>
                    <p class="card-company">${proj.resumo}</p>
                </div>
                <span class="card-date">${proj.mesAno}</span>
            </div>
            <div class="card-arrow-bottom-right">
                <i data-lucide="arrow-up-right"></i>
            </div>
        `;
        container.appendChild(card);
    });
}

// RENDER SUB-CATEGORIAS
function renderSubcategorias() {
    const map = {
        "JORNALISMO & MEDIA": "slider-jornalismo",
        "AUDIOVISUAL": "slider-audiovisual",
        "RÁDIO & ÁUDIO": "slider-radio",
        "DIGITAL & COMUNICAÇÃO": "slider-digital",
        "OUTROS": "slider-outros"
    };

    projetos.filter(p => !p.destaque).forEach(proj => {
        const sliderId = map[proj.categoria] || "slider-outros";
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        const card = document.createElement("div");
        card.className = "netflix-card";
        card.onclick = () => openNetflixModal(proj);

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
            <div class="card-arrow-bottom-right">
                <i data-lucide="arrow-up-right"></i>
            </div>
        `;
        slider.appendChild(card);
    });

    setupCarousels();
}

// CARROSSEIS
function setupCarousels() {
    const list = ["jornalismo", "audiovisual", "radio", "digital", "outros"];
    list.forEach(key => {
        const slider = document.getElementById(`slider-${key}`);
        const btnL = document.getElementById(`btn-left-${key}`);
        const btnR = document.getElementById(`btn-right-${key}`);

        if (!slider) return;

        const checkScroll = () => {
            if (btnL) btnL.classList.toggle("visible", slider.scrollLeft > 10);
            if (btnR) btnR.classList.toggle("visible", (slider.scrollWidth - slider.clientWidth - slider.scrollLeft) > 10);
        };

        btnL?.addEventListener("click", () => slider.scrollBy({ left: -260, behavior: "smooth" }));
        btnR?.addEventListener("click", () => slider.scrollBy({ left: 260, behavior: "smooth" }));
        slider.addEventListener("scroll", checkScroll);
        setTimeout(checkScroll, 300);
    });
}

// PROJETOS ASSOCIADOS (MINI CARTÕES NAS TIMELINES)
function renderAssociatedProjects() {
    document.querySelectorAll('[data-exp-id], [data-academic-id]').forEach(container => {
        const expId = container.getAttribute('data-exp-id');
        const acadId = container.getAttribute('data-academic-id');

        const matches = projetos.filter(p => 
            (expId && p.experienciaId === expId) || 
            (acadId && p.academicId === acadId)
        );

        container.innerHTML = '';
        matches.forEach(proj => {
            const mini = document.createElement("div");
            mini.className = "mini-project-card";
            mini.onclick = (e) => {
                e.stopPropagation();
                openNetflixModal(proj);
            };
            mini.innerHTML = `
                <img src="${proj.capa}" alt="${proj.titulo}" class="mini-project-img">
                <span class="mini-project-title">${proj.titulo}</span>
            `;
            container.appendChild(mini);
        });
    });
}

// SETAS PARA ORGANIZAÇÕES E VOLUNTARIADO
function setupOrgLinks() {
    document.querySelectorAll('.card-item-with-logo[data-link]').forEach(item => {
        const url = item.getAttribute('data-link');
        if (url && url.trim() !== "") {
            const arrow = document.createElement("a");
            arrow.href = url;
            arrow.target = "_blank";
            arrow.className = "course-link-arrow";
            arrow.innerHTML = `<i data-lucide="arrow-up-right"></i>`;
            item.appendChild(arrow);
        }
    });
}
