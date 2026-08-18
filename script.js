/* ==========================================================================
   1. BASE DE DADOS COMPLETA DOS PROJETOS DO PORTFÓLIO
   ========================================================================== */
const portfolioItems = [
    // ----------------------------------------------------------------------
    // 📺 TELEVISÃO & BROADCAST
    // ----------------------------------------------------------------------
    {
        id: "tv-1",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Skills Portugal 2024 — Reportagem TV",
        date: "Novembro 2024",
        duration: "Peça de TV (3 min)",
        coverImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        description: "Vencedor da Medalha de Ouro no campeonato nacional de profissões 'Skills Portugal 2024' (Worldskills) na categoria de 'Reportagem de TV', realizado em Santa Maria da Feira. Trabalho em equipa focado na recolha de imagens, entrevistas e edição final sob pressão de tempo.",
        mediaType: "none",
        link: "https://worldskillsportugal.iefp.pt"
    },
    {
        id: "tv-2",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Documentário '30 Anos de CC'",
        date: "Fevereiro 2025 — Atualidade",
        duration: "Documentário Curto",
        coverImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
        description: "Realizador do documentário comemorativo dos 30 anos da licenciatura em Ciências da Comunicação da Universidade do Algarve (UAlg). Entrevistas com fundadores, docentes e alumni de referência do curso.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "tv-3",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Grande Reportagem 'E agora, Algarve?' — RTP",
        date: "Março — Julho 2020",
        duration: "Grande Reportagem TV",
        coverImg: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
        description: "Desenvolvimento, escrita, captação e edição da Grande Reportagem 'E agora, Algarve?' na Rádio e Televisão de Portugal (RTP Faro). Estágio curricular concluído com a nota final de 18 valores.",
        mediaType: "none",
        link: "https://www.rtp.pt"
    },
    {
        id: "tv-4",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Skills Portugal 2023 — Edição de Vídeo",
        date: "Março 2023",
        duration: "Competição Nacional",
        coverImg: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
        description: "Vencedor da Medalha de Excelência no campeonato Worldskills Portugal 2023 (Portimão) na vertente de 'Editor de Vídeo' em Reportagem de TV.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "tv-5",
        category: "tv",
        categoryLabel: "Televisão & Broadcast",
        title: "Curta-Metragem 'Segunda Opção'",
        date: "Março 2018 — Junho 2019",
        duration: "Ficção Curta",
        coverImg: "https://images.unsplash.com/photo-1518173946687-a4c8a383592e?auto=format&fit=crop&w=800&q=80",
        description: "Trabalho audiovisual e de ficção independente assumindo os papéis de Realizador, Editor e Cameraman.",
        mediaType: "none",
        link: "#"
    },

    // ----------------------------------------------------------------------
    // 🎙️ RÁDIO & ON AIR
    // ----------------------------------------------------------------------
    {
        id: "radio-1",
        category: "radio",
        categoryLabel: "Rádio & On Air",
        title: "Locução & Emissão em Direto (RUA FM)",
        date: "Março 2022 — Atualidade",
        duration: "Emissão Diária (102.7 FM)",
        coverImg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        description: "Jornalista e Animador de Rádio na RUA - Rádio Universitária do Algarve: produção e gravação diária de spots, marcadores, anúncios e apresentação de conteúdos em direto.",
        mediaType: "none",
        link: "https://www.rua.pt"
    },
    {
        id: "radio-2",
        category: "radio",
        categoryLabel: "Rádio & On Air",
        title: "Cobertura de Grandes Festivais",
        date: "2022 — 2025",
        duration: "Entrevistas em Direto",
        coverImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        description: "Envio para o terreno e realização de entrevistas com artistas regionais e nacionais na Semana Académica do Algarve (2022-2025), Festival F (2022-2025), Festival MED (2024-2025) e Albufeira Sea Fest.",
        mediaType: "none",
        link: "https://www.rua.pt"
    },
    {
        id: "radio-3",
        category: "radio",
        categoryLabel: "Rádio & On Air",
        title: "Locução de Verão — Rádio Gilão",
        date: "Verões de 2018 e 2019",
        duration: "Animação de Verão",
        coverImg: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        description: "Locutor colaborador na emissora local Rádio Gilão (Tavira) durante as épocas estivais.",
        mediaType: "none",
        link: "#"
    },

    // ----------------------------------------------------------------------
    // 📰 DIGITAL & IMPRENSA
    // ----------------------------------------------------------------------
    {
        id: "digital-1",
        category: "digital",
        categoryLabel: "Digital & Imprensa",
        title: "ENTR PT — RTP Lisboa",
        date: "Maio — Agosto 2024",
        duration: "Formatos Curtos / Social",
        coverImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        description: "Criador de Conteúdos Freelancer para o projeto jovem europeu ENTR PT em articulação com a RTP em Lisboa.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "digital-2",
        category: "digital",
        categoryLabel: "Digital & Imprensa",
        title: "Jornalismo de Vídeo — Sul Informação",
        date: "Abril 2021 — Fevereiro 2022",
        duration: "Peças & Notícias Online",
        coverImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        description: "Redação de notícias, breves e entrevistas. Produção e edição autónoma de peças e reportagens jornalísticas em vídeo (imagem, voz-off e montagem final).",
        mediaType: "none",
        link: "https://www.sulinformacao.pt"
    },
    {
        id: "digital-3",
        category: "digital",
        categoryLabel: "Digital & Imprensa",
        title: "Revista Rotary Portugal",
        date: "Março 2021 — Atualidade",
        duration: "Artigos de Imprensa",
        coverImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        description: "Editor e Jornalista colaborador na redação e preparação de conteúdos para a publicação impressa e digital da Revista Rotary Portugal.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "digital-4",
        category: "digital",
        categoryLabel: "Digital & Imprensa",
        title: "Redação ESCS — 5º Congresso dos Jornalistas",
        date: "Janeiro 2024",
        duration: "Cobertura de Evento",
        coverImg: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
        description: "Redator e elemento da equipa de cobertura jornalística oficial do 5.º Congresso dos Jornalistas em Lisboa, em representação da ESCS.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "digital-5",
        category: "digital",
        categoryLabel: "Digital & Imprensa",
        title: "Projeto 'Política (NÃO) Importa'",
        date: "Setembro 2020 — Novembro 2022",
        duration: "Gestão de Comunicação",
        coverImg: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
        description: "Coordenador de Comunicação responsável pela estratégia, conteúdos e divulgação digital do projeto de literacia política.",
        mediaType: "none",
        link: "#"
    }
];

/* ==========================================================================
   2. INICIALIZAÇÃO E EVENTOS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    setupSidebarEvents();
    setupMobileNav();
});

/* ==========================================================================
   3. RENDERIZAÇÃO DOS CARROSSÉIS ESTILO NETFLIX
   ========================================================================== */
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

    // Evento de clique para abrir o painel informativo
    document.querySelectorAll('.netflix-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const cardElement = e.currentTarget;
            const itemId = cardElement.getAttribute('data-id');
            const selectedItem = portfolioItems.find(i => i.id === itemId);
            if (selectedItem) openSidebar(selectedItem, cardElement);
        });
    });
}

/* ==========================================================================
   4. ABRIR PAINEL LATERAL (POSICIONAMENTO DINÂMICO & BOTTOM-SHEET)
   ========================================================================== */
function openSidebar(item, cardElement) {
    const sidebar = document.getElementById('project-sidebar');
    const sidebarContent = sidebar.querySelector('.sidebar-content');

    if (!sidebar || !sidebarContent) return;

    // Preencher dados no painel
    document.getElementById('side-cover-img').src = item.coverImg;
    document.getElementById('side-category').innerText = item.categoryLabel;
    document.getElementById('side-title').innerText = item.title;
    document.getElementById('side-date').innerText = item.date;
    document.getElementById('side-duration').innerText = item.duration || 'N/A';
    document.getElementById('side-description').innerText = item.description;

    // Leitor de Mídia Incorporada (se existir vídeo ou áudio)
    const mediaContainer = document.getElementById('side-media-container');
    mediaContainer.innerHTML = '';

    if (item.mediaType === 'video' && item.videoEmbedUrl) {
        mediaContainer.innerHTML = `
            <div style="position:relative;padding-top:56.25%;margin-top:15px;border-radius:8px;overflow:hidden;">
                <iframe src="${item.videoEmbedUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe>
            </div>`;
    } else if (item.mediaType === 'audio' && item.audioSrcUrl) {
        mediaContainer.innerHTML = `
            <audio controls style="width: 100%; margin-top: 15px;">
                <source src="${item.audioSrcUrl}" type="audio/mpeg">
            </audio>`;
    }

    // Botão de Link Externo
    const sideLink = document.getElementById('side-link');
    if (item.link && item.link !== '#') {
        sideLink.href = item.link;
        sideLink.style.display = 'inline-flex';
    } else {
        sideLink.style.display = 'none';
    }

    /* ----------------------------------------------------------------------
       CÁLCULO DA POSIÇÃO (LADO ESQUERDO / DIREITO EM DESKTOP)
       ---------------------------------------------------------------------- */
    if (window.innerWidth > 768 && cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const panelWidth = 380;
        const panelHeight = Math.min(window.innerHeight * 0.85, 600);
        const gap = 15;

        // Tentar colocar à direita do cartão
        let leftPos = rect.right + gap;

        // Se não houver espaço suficiente à direita, coloca à esquerda do cartão
        if (leftPos + panelWidth > window.innerWidth - 20) {
            leftPos = rect.left - panelWidth - gap;
        }

        // Se mesmo assim não couber (ecrã muito estreito), centraliza no ecrã
        if (leftPos < 20) {
            leftPos = Math.max(20, (window.innerWidth - panelWidth) / 2);
        }

        // Alinhamento vertical com o cartão
        let topPos = rect.top;
        if (topPos + panelHeight > window.innerHeight - 20) {
            topPos = window.innerHeight - panelHeight - 20;
        }
        if (topPos < 20) topPos = 20;

        // Aplicar coordenadas dinâmicas
        sidebarContent.style.left = `${leftPos}px`;
        sidebarContent.style.top = `${topPos}px`;
    } else {
        // Em Smartphones / Tablets pequenos, limpa estilos e deixa o CSS atuar (Bottom Sheet)
        sidebarContent.style.left = '';
        sidebarContent.style.top = '';
    }

    sidebar.classList.add('active');
    
    // Atualizar ícones da biblioteca Lucide se estiverem carregados
    if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   5. FECHAR PAINEL & EVENTOS DE SUPORTE
   ========================================================================== */
function closeSidebar() {
    const sidebar = document.getElementById('project-sidebar');
    if (sidebar) sidebar.classList.remove('active');
}

function setupSidebarEvents() {
    const closeBtn = document.getElementById('sidebar-close');
    const overlay = document.getElementById('sidebar-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Fechar ao premir a tecla ESC
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
