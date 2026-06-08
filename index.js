/* ==========================================================================
   TR Fishing JS - Interactive Features
   ========================================================================== */

// 1. Data Store for Products
const productsData = {
    'ultra-line-8x': {
        title: 'Ultra Line 8X (Multifilamento)',
        category: 'Linhas de Pesca',
        desc: 'Desenvolvida com tecnologia japonesa de trançado simétrico de 8 fios de alta densidade, a Ultra Line 8X oferece um deslizar incomparável pelos passadores. Isso reduz o atrito acústico e mecânico, permitindo arremessos incrivelmente mais longos e precisos. Possui elasticidade próxima de zero, garantindo fisgadas imediatas.',
        image: 'assets/product_line.png',
        specs: {
            'Trançado': '8 Fios (8X)',
            'Libragens': '15lb, 20lb, 30lb, 40lb, 50lb, 80lb',
            'Diâmetros': '0.16mm a 0.45mm',
            'Carretel': '150 metros',
            'Cores': 'Verde Musgo, Cinza Chumbo',
            'Material': '100% PE de alta resistência'
        },
        waText: 'Olá! Tenho interesse na linha multifilamento Ultra Line 8X e gostaria de saber as opções de diâmetros disponíveis.'
    },
    'high-tech-4x': {
        title: 'High Tech 4X (Multifilamento)',
        category: 'Linhas de Pesca',
        desc: 'A High Tech 4X é a linha de batalha da TR Fishing. Seu trançado super apertado de 4 fios de PE proporciona resistência extraordinária à abrasão mecânica, sendo ideal para pescar em locais com alta concentração de pedras, galhadas e troncos submersos. Excelente custo-benefício com alta durabilidade.',
        image: 'assets/product_line.png',
        specs: {
            'Trançado': '4 Fios (4X)',
            'Libragens': '10lb, 15lb, 20lb, 30lb, 40lb, 60lb',
            'Diâmetros': '0.14mm a 0.40mm',
            'Carretel': '150 metros',
            'Cores': 'Multicolor (Muda a cada 10m), Verde',
            'Resistência': 'Extrema contra abrasão'
        },
        waText: 'Olá! Gostaria de saber mais sobre a linha multifilamento High Tech 4X e suas tabelas de libragem.'
    },
    'fluorcarbon-leader': {
        title: 'Fluorcarbon Shock Leader',
        category: 'Linhas de Pesca',
        desc: 'Produzido com 100% de fluorcarbono puro, este Shock Leader é projetado para atuar na zona de maior atrito. Possui índice de refração de luz muito próximo ao da água, tornando-o virtualmente invisível para os predadores mais ariscos. Altamente rígido e resistente a dentes afiados e atrito em pedras.',
        image: 'assets/product_line.png',
        specs: {
            'Material': '100% Fluorcarbono Japonês',
            'Libragens': '20lb, 25lb, 30lb, 40lb, 50lb',
            'Diâmetros': '0.35mm a 0.60mm',
            'Carretel': '50 metros',
            'Visibilidade': 'Invisível sob a água',
            'Elasticidade': 'Baixa (maior sensibilidade)'
        },
        waText: 'Olá! Tenho interesse no Fluorcarbon Shock Leader da TR Fishing e gostaria de consultar a disponibilidade técnica.'
    },
    'pro-chompers': {
        title: 'Pro Chompers IM7 Series',
        category: 'Varas de Carbono',
        desc: 'A série Pro Chompers é o carro-chefe da TR Fishing em varas. Fabricada com um blank super leve de fibra de Carbono IM7, oferece sensibilidade incrível para sentir até os toques mais sutis da isca e uma ação rápida perfeita para garantir fisgadas sólidas em tucunarés, robalos e black bass.',
        image: 'assets/product_rod.png',
        specs: {
            'Blank': 'Fibra de Carbono IM7',
            'Comprimento': '5\'8" (1.73m) e 6\'3" (1.90m)',
            'Ação': 'Rápida (Fast)',
            'Libragem': '8-17lb / 10-20lb',
            'Estrutura': 'Inteiriça (1 Parte)',
            'Passadores': 'Óxido de Alumínio reforçados (aptos para multifilamento)',
            'Modelos': 'Carretilha e Molinete'
        },
        waText: 'Olá! Gostaria de falar sobre a vara Pro Chompers IM7. Qual modelo vocês recomendam para pesca de Tucunaré?'
    },
    'rendali': {
        title: 'Vara Rendali',
        category: 'Varas de Carbono',
        desc: 'A Rendali é uma vara projetada para quem busca o máximo de conforto em pescarias prolongadas. Seu cabo em cortiça premium bipartido distribui o peso de forma equilibrada. O blank de carbono composto oferece excelente flexibilidade para arremessos a longa distância, mantendo a força na briga.',
        image: 'assets/product_rod.png',
        specs: {
            'Blank': 'Carbono Composto de alta modulação',
            'Comprimento': '6\'0" (1.83m)',
            'Ação': 'Média-Rápida',
            'Libragem': '8-14lb',
            'Cabo': 'Cortiça Premium Bipartida',
            'Uso indicado': 'Iscas artificiais de superfície e meia-água'
        },
        waText: 'Olá! Gostaria de consultar os preços e prazos de entrega da Vara Rendali.'
    },
    'starlure': {
        title: 'Vara Starlure',
        category: 'Varas de Carbono',
        desc: 'Uma obra-prima para a pesca de precisão (Finesse). A Starlure possui blank de carbono maciço flexível, tornando-a extremamente resistente a quebras, mas com ponta sensível para o trabalho correto de iscas artificiais leves. Indicada para tucunarés amarelos, robalos peva e tilápias.',
        image: 'assets/product_rod.png',
        specs: {
            'Blank': 'Carbono Sólido Flexível',
            'Comprimento': '5\'6" (1.68m)',
            'Ação': 'Moderada',
            'Libragem': '6-12lb',
            'Peso da Isca': '3g a 12g',
            'Peso da Vara': 'Super leve (finesse)'
        },
        waText: 'Olá! Gostaria de mais especificações técnicas sobre a Vara Starlure para pesca ultra light.'
    },
    'top-shad': {
        title: 'TR Top Shad',
        category: 'Iscas Soft',
        desc: 'O TR Top Shad é fabricado com silicone super macio de alta flutuabilidade e flexibilidade. O formato da cauda (paddle) gera vibrações intensas na água a qualquer velocidade de recolhimento. O grande diferencial está na fórmula química: sal ativo incorporado e essência concentrada de alho que faz o peixe reter a isca por mais tempo na boca.',
        image: 'assets/product_bait.png',
        specs: {
            'Tipo': 'Soft Bait (Shad)',
            'Atrativo': 'Sal + Essência Concentrada de Alho',
            'Comprimentos': '9cm e 11cm',
            'Pesos': '7g e 12g',
            'Embalagem': 'Blister com 5 unidades',
            'Peixes Alvo': 'Tucunaré, Robalo, Traíra, Black Bass'
        },
        waText: 'Olá! Tenho interesse nas iscas soft TR Top Shad. Quais as cores disponíveis no estoque?'
    },
    'crazy-shad': {
        title: 'Crazy Shad',
        category: 'Iscas Soft',
        desc: 'Desenvolvido para apresentações dinâmicas na meia-água. A hidrodinâmica do Crazy Shad permite nados erráticos muito chamativos quando trabalhada com toques de ponta de vara. Impregnação de sal e alho em toda a massa de silicone, reduzindo a chance de o predador cuspir a isca após o ataque.',
        image: 'assets/product_bait.png',
        specs: {
            'Tipo': 'Soft Bait (Nado Errático)',
            'Atrativo': 'Essência de Alho e Sal',
            'Comprimento': '8.5cm',
            'Peso': '6.5g',
            'Montagem indicada': 'Anzol Offset EWG (Antienrosco) ou Jig Head',
            'Peixes Alvo': 'Traíra, Tucunaré, Black Bass'
        },
        waText: 'Olá! Gostaria de comprar algumas iscas Crazy Shad para pesca de Traíra. Quais cores vocês indicam?'
    },
    'craw-creature': {
        title: 'Craw (Creature)',
        category: 'Iscas Soft',
        desc: 'Uma criatura realista que imita um pequeno lagostim de água doce, alimento favorito de predadores como Black Bass e grandes Traíras. Suas garras flutuantes se movimentam de forma natural ao menor sinal de correnteza ou vibração. Essência de alho de longa duração embutida no silicone.',
        image: 'assets/product_bait.png',
        specs: {
            'Tipo': 'Creature (Imitação de Lagostim)',
            'Atrativo': 'Essência de Alho e Sal Ativo',
            'Comprimento': '10cm',
            'Peso': '9g',
            'Montagens': 'Texas Rig, Carolina Rig, Jig Trailer',
            'Peixes Alvo': 'Black Bass, Traíra, Jacundá'
        },
        waText: 'Olá! Quero saber as cores disponíveis e o preço do pacote da isca Craw (Creature).'
    }
};

// 2. Scroll Interactions & Active Nav Links
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Scroll Header Style & Active Section Link toggle
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // Toggle icon visual states if needed
    });

    // Close menu when clicking a link (mobile design)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('open');
        }
    });

    // 4. Scroll Animation Observer (Intersection Observer)
    const animateElements = document.querySelectorAll('[data-animate]');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => animateObserver.observe(el));

    // 5. Catalog Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                // Apply a quick scale down transition
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });

    // 6. Contact Form Submission logic (Functional redirection to WhatsApp)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subjectSelect = document.getElementById('subject');
            const subject = subjectSelect.options[subjectSelect.selectedIndex].text;
            const message = document.getElementById('message').value;

            // Disable button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'Redirecionando...';
            formStatus.className = 'form-status';
            formStatus.innerText = '';

            // Format WhatsApp Message
            const waText = `Olá TR Fishing! Gostaria de entrar em contato.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*WhatsApp/Telefone:* ${phone}\n*Assunto:* ${subject}\n\n*Mensagem:* ${message}`;
            const waBaseUrl = 'https://wa.me/5542991211496';
            const encodedText = encodeURIComponent(waText);

            // Open WhatsApp in a new tab after a brief delay
            setTimeout(() => {
                window.open(`${waBaseUrl}?text=${encodedText}`, '_blank');

                // Reset form fields
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;

                // Show success status
                formStatus.classList.add('success');
                formStatus.innerText = 'Mensagem estruturada com sucesso! Redirecionando para o WhatsApp comercial...';

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.innerText = '';
                }, 6000);
            }, 1000);
        });
    }
});

// 7. Modal Control Functions (Globally Accessible)
function openProductDetail(productId) {
    const product = productsData[productId];
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDesc = document.getElementById('modalDesc');
    const modalSpecsTable = document.getElementById('modalSpecsTable');
    const modalWaBtn = document.getElementById('modalWaBtn');

    // Populate values
    modalImg.src = product.image;
    modalImg.alt = product.title;
    modalTitle.innerText = product.title;
    modalCategory.innerText = product.category;
    modalDesc.innerText = product.desc;

    // Build specs table
    modalSpecsTable.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        const specRow = document.createElement('div');
        specRow.className = 'spec-row';
        specRow.innerHTML = `
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        `;
        modalSpecsTable.appendChild(specRow);
    }

    // Configure WhatsApp Link
    const waBaseUrl = 'https://wa.me/5542991211496';
    const encodedText = encodeURIComponent(product.waText);
    modalWaBtn.href = `${waBaseUrl}?text=${encodedText}`;

    // Open Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
}

// Close modal when clicking outside the card
document.getElementById('productModal').addEventListener('click', (e) => {
    const modalOverlay = document.getElementById('productModal');
    if (e.target === modalOverlay) {
        closeProductModal();
    }
});

// Add ESC key listener to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});
