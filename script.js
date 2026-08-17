/* ==========================================================================
   BASE DE DADOS DO PORTFÓLIO UNIFICADO (TELEVISÃO, RÁDIO, DIGITAL)
   ========================================================================== */
const portfolioItems = [
    // TELEVISÃO & BROADCAST
    {
        id: "tv-1",
        category: "tv",
        categoryLabel: "TELEVISÃO & BROADCAST",
        title: "Reportagem de TV — Skills Portugal 2024",
        date: "Novembro 2024",
        coverImg: "URL_CAPA_SKILLS_2024.jpg",
        description: "Trabalho de reportagem televisiva galardoado com a Medalha de Ouro no campeonato nacional das profissões em Santa Maria da Feira.",
        mediaType: "video",
        videoEmbedUrl: "https://www.youtube.com/embed/EXEMPLO_ID",
        link: "#"
    },
    {
        id: "tv-2",
        category: "tv",
        categoryLabel: "TELEVISÃO & BROADCAST",
        title: "Grande Reportagem 'E agora, Algarve?'",
        date: "Março — Julho 2020",
        coverImg: "URL_CAPA_RTP_REPORTAGEM.jpg",
        description: "Grande reportagem desenvolvida para a RTP sobre o impacto económico e social no Algarve durante a pandemia. Classificação final de estágio: 18 valores.",
        mediaType: "none",
        link: "#"
    },

    // RÁDIO & ON AIR
    {
        id: "radio-1",
        category: "radio",
        categoryLabel: "RÁDIO & ON AIR",
        title: "Emissões & Animação RUA FM (102.7 FM)",
        date: "2022 — Atualidade",
        coverImg: "URL_CAPA_RUA_FM.jpg",
        description: "Trabalho contínuo como Jornalista e Animador de Rádio: gravação de spots, marcadores, anúncios e apresentação de programas.",
        mediaType: "audio",
        audioSrcUrl: "URL_DO_FICHEIRO_AUDIO.mp3",
        link: "https://www.rua.pt"
    },
    {
        id: "radio-2",
        category: "radio",
        categoryLabel: "RÁDIO & ON AIR",
        title: "Cobertura de Festivais Nacionais",
        date: "2022 — 2025",
        coverImg: "URL_CAPA_FESTIVAIS.jpg",
        description: "Cobertura jornalística e entrevistas no terreno na SA do Algarve, Festival F, Festival MED, Albufeira Sea Fest e Albufeira Sounds.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "radio-3",
        category: "radio",
        categoryLabel: "RÁDIO & ON AIR",
        title: "Rádio Gilão — Locução & Programação",
        date: "2018 — 2019",
        coverImg: "URL_CAPA_RADIO_GILAO.jpg",
        description: "Experiência de locução e colaboração em estúdio de rádio local em Tavira durante as épocas de verão.",
        mediaType: "none",
        link: "#"
    },

    // IMPRENSA & DIGITAL
    {
        id: "digital-1",
        category: "digital",
        categoryLabel: "DIGITAL & IMPRENSA",
        title: "Sul Informação — Reportagens Digitais",
        date: "2021 — 2022",
        coverImg: "URL_CAPA_SUL_INFORMACAO.jpg",
        description: "Escrita de notícias, entrevistas e peças em vídeo no jornal regional líder do Algarve durante o estágio profissional.",
        mediaType: "none",
        link: "https://www.sulinformacao.pt"
    },
    {
        id: "digital-2",
        category: "digital",
        categoryLabel: "DIGITAL & IMPRENSA",
        title: "ENTR PT (RTP) — Criação de Conteúdos",
        date: "Maio — Agosto 2024",
        coverImg: "URL_CAPA_ENTR_RTP.jpg",
        description: "Criação de narrativas digitais e multimédia direcionadas para o público jovem no projeto europeu ENTR Portugal / RTP.",
        mediaType: "none",
        link: "#"
    },
    {
        id: "digital-3",
        category: "digital",
        categoryLabel: "DIGITAL & IMPRENSA",
        title: "Revista Rotary Portugal — Edição & Artigos",
        date: "2021 — Atualidade",
        coverImg: "URL_CAPA_ROTARY_REVISTA.jpg",
        description: "Colaboração editorial, redação de artigos e edição de conteúdos jornalísticos impressos e digitais.",
        mediaType: "none",
        link: "#"
    }
];

/* ==========================================================================
   INICIALIZAÇÃO & RENDER TIPO NETFLIX
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initNetflixCarouseis();
    initModal();
    initMobileNav();
});

function initNetflixCarouseis() {
    const sliderTv = document.getElementById('slider-tv');
    const sliderRadio = document.getElementById('slider-radio');
    const sliderDigital = document.getElementById('slider-digital');

    if (!sliderTv || !sliderRadio || !sliderDigital) return;

    portfolioItems.forEach(item => {
        const cardHtml = createNetflixCardHtml(item);
        
        if (item.category === 'tv') {
            sliderTv.insertAdjacentHTML('beforeend', cardHtml);
        } else if (item.category === 'radio') {
            sliderRadio.insertAdjacentHTML('beforeend', cardHtml);
        } else if (item.category === 'digital') {
            sliderDigital.insertAdjacentHTML('beforeend', cardHtml);
        }
    });

    // Adicionar escuta de clique a todos os cartões
    document.querySelectorAll('.netflix-card').forEach(card => {
        card.addEventListener('click', () => {
            const itemId = card.getAttribute('data-id');
            const selectedItem = portfolioItems.find(i => i.id === itemId);
            if (selectedItem) openModal(selectedItem);
        });
    });
}

function createNetflixCardHtml(item) {
    return `
        <div class="netflix-card" data-id="${item.id}">
            <img src="${item.coverImg}" alt="${item.title}" class="netflix-card-cover" onerror="this.src='https://via.placeholder.com/300x170/1C2028/FFFFFF?text=Ruben+Bento'">
            <div class="netflix-card-body">
                <span class="netflix-badge">${item.categoryLabel}</span>
                <h4 class="netflix-card-title">${item.title}</h4>
                <p class="netflix-card-sub">${item.date}</p>
            </div>
        </div>
    `;
}

/* ==========================================================================
   MODAL TIPO NETFLIX (ABERTURA COM CONTEÚDO EXPANDIDO)
   ========================================================================== */
function initModal() {
    const modal = document.getElementById('netflix-modal');
    const closeBtn = document.getElementById('netflix-modal-close');

    if (closeBtn && modal) {
        closeBtn.onclick = () => modal.classList.remove('active');
        window.onclick = (e) => {
            if (e.target === modal) modal.classList.remove('active');
        };
    }
}

function openModal(item) {
    const modal = document.getElementById('netflix-modal');
    const coverImg = document.getElementById('modal-cover-img');
    const title = document.getElementById('modal-title');
    const badge = document.getElementById('modal-category-badge');
    const date = document.getElementById('modal-date');
    const desc = document.getElementById('modal-description');
    const mediaContainer = document.getElementById('modal-media-container');
    const extLink = document.getElementById('modal-external-link');

    if (!modal) return;

    coverImg.src = item.coverImg;
    coverImg.onerror = () => { coverImg.src = 'https://via.placeholder.com/700x250/1C2028/FFFFFF?text=Ruben+Bento+Portfolio'; };
    title.innerText = item.title;
    badge.innerText = item.categoryLabel;
    date.innerText = item.date;
    desc.innerText = item.description;

    // Tratar Media (Vídeo / Áudio)
    mediaContainer.innerHTML = '';
    if (item.mediaType === 'video' && item.videoEmbedUrl) {
        mediaContainer.innerHTML = `
            <div style="position:relative;padding-top:56.25%;">
                <iframe src="${item.videoEmbedUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe>
            </div>
        `;
    } else if (item.mediaType === 'audio' && item.audioSrcUrl) {
        mediaContainer.innerHTML = `
            <audio controls style="width: 100%; margin-top: 10px;">
                <source src="${item.audioSrcUrl}" type="audio/mpeg">
                O teu navegador não suporta áudio.
            </audio>
        `;
    }

    // Tratar Link Externo
    if (item.link && item.link !== '#') {
        extLink.href = item.link;
        extLink.style.display = 'inline-block';
    } else {
        extLink.style.display = 'none';
    }

    modal.classList.add('active');
}

/* ==========================================================================
   NAVEGAÇÃO MOBILE
   ========================================================================== */
function initMobileNav() {
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
