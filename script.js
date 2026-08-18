/* ==========================================================================
   BASE DE DADOS INTEGRAL DE PROJETOS E HISTÓRICO
   ========================================================================== */
const portfolioItems = [
    // 📺 TELEVISÃO & CINEMA
    {
        id: "tv-1",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Skills Portugal 2024 — Reportagem TV",
        date: "Novembro 2024",
        duration: "Medalha de Ouro 🏅",
        coverImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        description: "Vencedor da Medalha de Ouro no campeonato nacional de profissões 'Skills Portugal 2024' (Worldskills) na categoria de Reportagem de TV, realizado em Santa Maria da Feira.",
        link: "https://worldskillsportugal.iefp.pt"
    },
    {
        id: "tv-2",
        category: "tv",
        categoryLabel: "Televisão & Cinema",
        title: "Documentário '30 Anos de CC'",
        date: "Fevereiro 2025 — Atualidade",
        duration: "Realização",
        coverImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
        description: "Realizador do documentário comemorativo dos 30 anos do curso de Ciências da Comunicação da Universidade do Algarve (UAlg).",
        link: "#"
    },
    {
        id: "tv-3",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Grande Reportagem 'E agora, Algarve?' — RTP",
        date: "Março — Julho 2020",
        duration: "Nota Final: 18/20",
        coverImg: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
        description: "Conceção, escrita e edição integral da Grande Reportagem Televisiva para a RTP Centro Regional do Algarve durante o estágio curricular.",
        link: "https://www.rtp.pt"
    },
    {
        id: "tv-4",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Skills Portugal 2023 — Edição de Vídeo",
        date: "Março 2023",
        duration: "Medalha de Excelência 🏅",
        coverImg: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
        description: "Medalha de Excelência no campeonato Worldskills Portugal 2023 (Portimão) na vertente de Editor de Vídeo em Reportagem de TV.",
        link: "#"
    },
    {
        id: "tv-5",
        category: "tv",
        categoryLabel: "Cinema Independente",
        title: "Curta-Metragem 'Segunda Opção'",
        date: "Março 2018 — Junho 2019",
        duration: "Ficção Curta",
        coverImg: "https://images.unsplash.com/photo-1518173946687-a4c8a383592e?auto=format&fit=crop&w=800&q=80",
        description: "Projeto de ficção cinematográfica assumindo as funções de Realizador, Editor de Vídeo e Cameraman.",
        link: "#"
    },

    // 🎙️ RÁDIO & AUDIO
    {
        id: "radio-1",
        category: "radio",
        categoryLabel: "Rádio & On Air",
        title: "Emissão & Locução (RUA FM)",
        date: "Março 2022 — Atualidade",
        duration: "102.7 FM",
        coverImg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        description: "Jornalista e Animador na RUA FM: gravação de spots, marcadores, voz publicitária e condução de emissões em direto.",
        link: "https://www.rua.pt"
    },
    {
        id: "radio-2",
        category: "radio",
        categoryLabel: "Rádio & Eventos",
        title: "Cobertura de Festivais de Música",
        date: "2022 — 2025",
        duration: "Emissões em Direto",
        coverImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        description: "Reportagem no terreno e entrevistas a artistas na Semana Académica do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds.",
        link: "https://www.rua.pt"
    },
    {
        id: "radio-3",
        category: "radio",
        categoryLabel: "Rádio Local",
        title: "Locução de Verão — Rádio Gilão",
        date: "2018 / 2019",
        duration: "Tavira",
        coverImg: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        description: "Apresentação e locução de programas de rádio de verão na Rádio Gilão em Tavira.",
        link: "#"
    },

    // 📰 DIGITAL, DOCÊNCIA & IMPRENSA
    {
        id: "digital-1",
        category: "digital",
        categoryLabel: "Ensino Superior",
        title: "Docência Audiovisual — UAlg",
        date: "Outubro 2024 — Atualidade",
        duration: "Assistente Convidado",
        coverImg: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
        description: "Docente de Produção e Edição de Vídeo (Licenciatura em Design) e Cursos Livres no âmbito do programa Impulso Mais Digital.",
        link: "https://www.ualg.pt"
    },
    {
        id: "digital-2",
        category: "digital",
        categoryLabel: "Média Digital",
        title: "ENTR PT — RTP Lisboa",
        date: "Maio — Agosto 2024",
        duration: "Conteúdos Jovens",
        coverImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        description: "Criador de Conteúdos Freelancer para o projeto europeu ENTR PT focado no público jovem em articulação com a RTP.",
        link: "#"
    },
    {
        id: "digital-3",
        category: "digital",
        categoryLabel: "Imprensa Digital",
        title: "Jornalismo de Vídeo — Sul Informação",
        date: "Abril 2021 — Fev 2022",
        duration: "Estágio Profissional",
        coverImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        description: "Reportagens em vídeo com gravação de imagem, narração e edição, a par da escrita diária de notícias e entrevistas.",
        link: "https://www.sulinformacao.pt"
    },
    {
        id: "digital-4",
        category: "digital",
        categoryLabel: "Imprensa / Cobertura",
        title: "Redação do 5.º Congresso dos Jornalistas",
        date: "Janeiro 2024",
        duration: "Lisboa",
        coverImg: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
        description: "Membro da equipa de redação e cobertura oficial do 5.º Congresso dos Jornalistas representando a ESCS.",
        link: "#"
    }
];

/* ==========================================================================
   INICIALIZAÇÃO & EVENTOS DO SITE
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    setupSidebarEvents();
    setupMobileNav();
});

function renderPortfolio() {
    const sliderTv = document.getElementById('slider-tv');
    const sliderRadio = document.getElementById('slider-radio');
    const sliderDigital = document.getElementById('slider-digital');

    if (!sliderTv || !sliderRadio || !sliderDigital) return;

    sliderTv.innerHTML = '';
    sliderRadio.innerHTML = '';
    sliderDigital.innerHTML = '';

    portfolioItems.forEach(item => {
        const cardHtml = `
            <div class="netflix-card" data-id="${item.id}">
                <img src="${item.coverImg}" alt="${item.title}" class="netflix-card-cover">
                <div class="netflix-card-body">
                    <p class="netflix-card-title">${item.title}</p>
                    <p class="netflix-card-sub">${item.date}</p>
                </div>
            </div>
        `;

        if (item.category === 'tv') sliderTv.insertAdjacentHTML('beforeend', cardHtml);
        if (item.category === 'radio') sliderRadio.insertAdjacentHTML('beforeend', cardHtml);
        if (item.category === 'digital') sliderDigital.insertAdjacentHTML('beforeend', cardHtml);
    });

    document.querySelectorAll('.netflix-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const cardElement = e.currentTarget;
            const itemId = cardElement.getAttribute('data-id');
            const selectedItem = portfolioItems.find(i => i.id === itemId);
            if (selectedItem) openSidebar(selectedItem, cardElement);
        });
    });
}

function openSidebar(item, cardElement) {
    const sidebar = document.getElementById('project-sidebar');
    const sidebarContent = sidebar.querySelector('.sidebar-content');

    if (!sidebar || !sidebarContent) return;

    document.getElementById('side-cover-img').src = item.coverImg;
    document.getElementById('side-category').innerText = item.categoryLabel;
    document.getElementById('side-title').innerText = item.title;
    document.getElementById('side-date').innerText = item.date;
    document.getElementById('side-duration').innerText = item.duration || 'N/A';
    document.getElementById('side-description').innerText = item.description;

    const sideLink = document.getElementById('side-link');
    if (item.link && item.link !== '#') {
        sideLink.href = item.link;
        sideLink.style.display = 'inline-flex';
    } else {
        sideLink.style.display = 'none';
    }

    if (window.innerWidth > 768 && cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const panelWidth = 380;
        const panelHeight = Math.min(window.innerHeight * 0.85, 600);
        const gap = 15;

        let leftPos = rect.right + gap;
        if (leftPos + panelWidth > window.innerWidth - 20) {
            leftPos = rect.left - panelWidth - gap;
        }
        if (leftPos < 20) leftPos = Math.max(20, (window.innerWidth - panelWidth) / 2);

        let topPos = rect.top;
        if (topPos + panelHeight > window.innerHeight - 20) {
            topPos = window.innerHeight - panelHeight - 20;
        }
        if (topPos < 20) topPos = 20;

        sidebarContent.style.left = `${leftPos}px`;
        sidebarContent.style.top = `${topPos}px`;
    } else {
        sidebarContent.style.left = '';
        sidebarContent.style.top = '';
    }

    sidebar.classList.add('active');
    if (window.lucide) lucide.createIcons();
}

function closeSidebar() {
    const sidebar = document.getElementById('project-sidebar');
    if (sidebar) sidebar.classList.remove('active');
}

function setupSidebarEvents() {
    const closeBtn = document.getElementById('sidebar-close');
    const overlay = document.getElementById('sidebar-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSidebar();
    });
}

function setupMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}
