/* ==========================================================================
   PORTFOLIO DATA SYSTEM
   ========================================================================== */
const projects = [
    {
        id: 1,
        title: "Reportagem de TV — Skills Portugal 2024",
        category: "tv",
        categoryLabel: "TELEVISÃO",
        date: "Novembro 2024",
        description: "Trabalho de reportagem televisiva vencedor da Medalha de Ouro no campeonato nacional.",
        imagePh: "[IMAGEM DA REPORTAGEM]",
        details: "Trabalho prático desenvolvido no contexto da competição nacional Skills Portugal 2024 em Santa Maria da Feira."
    },
    {
        id: 2,
        title: "Emissão & Animação RUA FM",
        category: "radio",
        categoryLabel: "RÁDIO",
        date: "2022 — Atualidade",
        description: "Exercício contínuo de locução, jornalismo e animação na Rádio Universitária do Algarve.",
        imagePh: "[FOTO ESTÚDIO RÁDIO]",
        details: "Acompanhamento da atualidade local e académica em 102.7 FM."
    },
    {
        id: 3,
        title: "Conteúdos Digitais ENTR PT — RTP",
        category: "video",
        categoryLabel: "CRIAÇÃO DE CONTEÚDOS",
        date: "Maio 2024 — Agosto 2024",
        description: "Produção de conteúdos audiovisuais em formato digital e redes sociais para a RTP.",
        imagePh: "[IMAGEM ENTR PT]",
        details: "Criação, edição e adaptação de linguagem jornalística para novos públicos."
    },
    {
        id: 4,
        title: "Cobertura Jornalística Sul Informação",
        category: "journalism",
        categoryLabel: "IMPRENSA / ONLINE",
        date: "2021 — 2022",
        description: "Reportagens e artigos de investigação no jornal regional online líder no Algarve.",
        imagePh: "[IMAGEM SUL INFORMAÇÃO]",
        details: "Estágio profissional com cobertura de temas regionais, cultura e sociedade."
    }
];

/* ==========================================================================
   DOM INITIALIZATION & RENDER
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    initNavigation();
    initFilters();
    initModal();
});

/* ==========================================================================
   RENDER PROJECTS
   ========================================================================== */
function renderProjects(items) {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-category', item.category);
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div class="card-img-ph">${item.imagePh}</div>
            <div class="card-content">
                <span class="card-tag">${item.categoryLabel}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================================================
   FILTERS
   ========================================================================== */
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderProjects(projects);
            } else {
                const filtered = projects.filter(p => p.category === filterValue);
                renderProjects(filtered);
            }
        });
    });
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

/* ==========================================================================
   MODAL SYSTEM
   ========================================================================== */
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');

    closeBtn.onclick = () => {
        modal.classList.remove('active');
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <span class="card-tag">${project.categoryLabel} — ${project.date}</span>
        <h2 style="margin: 10px 0; font-family: var(--font-head);">${project.title}</h2>
        <p style="margin-bottom: 20px; color: var(--text-sub);">${project.details}</p>
        <div class="card-img-ph" style="height: 200px; margin-bottom: 20px;">${project.imagePh}</div>
        <p>[ADICIONAR MAIS INFORMAÇÃO, GALERIA OU VÍDEO COMPLETO PARA ESTE PROJETO]</p>
    `;

    modal.classList.add('active');
}