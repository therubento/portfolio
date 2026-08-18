const portfolioItems = [
    {
        id: "tv-1",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Skills Portugal 2024 — Reportagem TV",
        date: "Novembro 2024",
        duration: "Ouro Nacional 🏅",
        coverImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        description: "Medalha de Ouro no campeonato nacional de profissões na categoria de 'Reportagem de TV' (Worldskills Portugal).",
        link: "https://worldskillsportugal.iefp.pt"
    },
    {
        id: "tv-2",
        category: "tv",
        categoryLabel: "Televisão & Cinema",
        title: "Documentário '30 Anos de CC'",
        date: "2025",
        duration: "Realizador",
        coverImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
        description: "Realização do documentário comemorativo dos 30 anos do curso de Ciências da Comunicação da Universidade do Algarve.",
        link: "#"
    },
    {
        id: "tv-3",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Grande Reportagem 'E agora, Algarve?' — RTP",
        date: "2020",
        duration: "Nota 18/20",
        coverImg: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
        description: "Conceção, redação e edição de grande reportagem jornalística na RTP Faro durante o estágio curricular.",
        link: "https://www.rtp.pt"
    },
    {
        id: "radio-1",
        category: "radio",
        categoryLabel: "Rádio & On Air",
        title: "Locução & Emissão (RUA FM)",
        date: "2022 — Presente",
        duration: "102.7 FM",
        coverImg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        description: "Jornalista e Animador de Rádio. Gravação de emissões diárias, spots e cobertura direta dos maiores festivais do Sul.",
        link: "https://www.rua.pt"
    },
    {
        id: "digital-1",
        category: "digital",
        categoryLabel: "Digital & Docência",
        title: "Docência de Vídeo — UAlg",
        date: "2024 — Presente",
        duration: "Ensino Superior",
        coverImg: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
        description: "Assistente Convidado lecionando Produção e Edição de Vídeo aos alunos de Design e Cursos Livres.",
        link: "https://www.ualg.pt"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    setupEvents();
});

function renderCatalog() {
    const tvSlider = document.getElementById('slider-tv');
    const radioSlider = document.getElementById('slider-radio');
    const digitalSlider = document.getElementById('slider-digital');

    portfolioItems.forEach(item => {
        const cardHtml = `
            <div class="netflix-card" data-id="${item.id}">
                <img src="${item.coverImg}" class="netflix-card-cover" alt="${item.title}">
                <div class="netflix-card-body">
                    <p class="netflix-card-title">${item.title}</p>
                    <p class="netflix-card-sub">${item.date}</p>
                </div>
            </div>
        `;
        if (item.category === 'tv') tvSlider.insertAdjacentHTML('beforeend', cardHtml);
        if (item.category === 'radio') radioSlider.insertAdjacentHTML('beforeend', cardHtml);
        if (item.category === 'digital') digitalSlider.insertAdjacentHTML('beforeend', cardHtml);
    });

    document.querySelectorAll('.netflix-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const item = portfolioItems.find(i => i.id === id);
            openSidebar(item, e.currentTarget);
        });
    });
}

function openSidebar(item, cardEl) {
    const sidebar = document.getElementById('project-sidebar');
    const content = sidebar.querySelector('.sidebar-content');

    document.getElementById('side-cover-img').src = item.coverImg;
    document.getElementById('side-category').innerText = item.categoryLabel;
    document.getElementById('side-title').innerText = item.title;
    document.getElementById('side-date').innerText = item.date;
    document.getElementById('side-duration').innerText = item.duration;
    document.getElementById('side-description').innerText = item.description;

    if (window.innerWidth > 768 && cardEl) {
        const rect = cardEl.getBoundingClientRect();
        content.style.left = `${Math.min(rect.right + 15, window.innerWidth - 400)}px`;
        content.style.top = `${Math.max(20, rect.top - 50)}px`;
    }

    sidebar.classList.add('active');
}

function setupEvents() {
    document.getElementById('sidebar-close').addEventListener('click', () => {
        document.getElementById('project-sidebar').classList.remove('active');
    });
    document.getElementById('sidebar-overlay').addEventListener('click', () => {
        document.getElementById('project-sidebar').classList.remove('active');
    });
}
