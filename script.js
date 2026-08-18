// BASE DE DADOS DOS PROJETOS DE CONTEÚDO
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
        link: "https://vimeo.com/rubenbento243"
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
        link: "https://vimeo.com/rubenbento243"
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
        link: "https://www.rua.pt"
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
        link: "https://www.rtp.pt"
    }
];

// FUNÇÃO GLOBAL DE ABERTURA DO PAINEL (Acessível pelos cliques)
window.openSidebar = function(id) {
    const item = projetos.find(p => p.id === id);
    if (!item) return;

    const sidebar = document.getElementById("project-sidebar");
    
    document.getElementById("side-cover-img").src = item.capa;
    document.getElementById("side-category").innerText = item.categoriaNome;
    document.getElementById("side-title").innerText = item.titulo;
    document.getElementById("side-date").innerText = item.data;
    document.getElementById("side-duration").innerText = item.duracao;
    document.getElementById("side-description").innerText = item.descricao;
    document.getElementById("side-link").href = item.link;

    sidebar.classList.add("active");
    document.body.style.overflow = "hidden"; // Impede scroll do fundo enquanto o painel está aberto

    if (window.lucide) {
        window.lucide.createIcons();
    }
};

// FUNÇÃO GLOBAL DE FECHO DO PAINEL
window.closeSidebar = function() {
    const sidebar = document.getElementById("project-sidebar");
    if (sidebar) {
        sidebar.classList.remove("active");
        document.body.style.overflow = ""; // Restaura scroll da página
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL SUAVE AO CLICAR NO LOGÓTIPO
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
        brandLogo.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 2. INJEÇÃO DOS CARTÕES DE CONTEÚDO NOS RESPECTIVOS SLIDERS
    const containerTv = document.getElementById("slider-tv");
    const containerRadio = document.getElementById("slider-radio");
    const containerDigital = document.getElementById("slider-digital");

    projetos.forEach(proj => {
        const cardHtml = `
            <div class="netflix-card" onclick="window.openSidebar(${proj.id})">
                <img src="${proj.capa}" alt="${proj.titulo}" class="netflix-card-cover">
                <div class="netflix-card-body">
                    <span class="card-category">${proj.categoriaNome}</span>
                    <h4 class="card-title">${proj.titulo}</h4>
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

    // 4. EVENTOS DE FECHO DO PAINEL LATERAL
    const closeBtn = document.getElementById("sidebar-close");
    const overlay = document.getElementById("sidebar-overlay");

    if (closeBtn) closeBtn.addEventListener("click", window.closeSidebar);
    if (overlay) overlay.addEventListener("click", window.closeSidebar);

    // Fechar painel ao pressionar a tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") window.closeSidebar();
    });
});
