/* ==========================================================================
   TR Fishing JS - Interactive Features & Product Carousels
   ========================================================================== */

// 1. Full Catalog Data Store (Directly from PDF Catalog 09-2025)
const productsData = {
    // === LINHAS ===
    'ultraline-8x': {
        title: 'Linha Ultraline 8X',
        category: 'Linhas de Pesca',
        desc: 'A linha multifilamento ULTRALINE 8X é fabricada em 100% PE (polietileno), unindo excelente sensibilidade e resposta imediata. Fabricada em 8 fios, possui um diâmetro super uniforme que reduz o atrito com os passadores, melhorando sensivelmente o arremesso e a sensibilidade da linha. Ideal para pescaria com iscas artificiais.',
        image: 'assets/product_ultraline_8x.webp',
        specs: {
            'Material': '100% PE (Polietileno)',
            'Trançado': '8 Fios (8X)',
            'Diâmetros': '0.16mm, 0.20mm, 0.24mm, 0.28mm, 0.30mm, 0.35mm, 0.40mm, 0.45mm',
            'Libragens': '15 LB, 20 LB, 25 LB, 30 LB, 40 LB, 50 LB, 60 LB, 70 LB',
            'Carretel': '100 metros (conectados em rolos de até 1.000m)',
            'Diferencial': 'Diâmetro uniforme para arremessos longos'
        },
        waText: 'Olá! Gostaria de consultar as libragens disponíveis da Linha Ultraline 8X.'
    },
    'ultraline-4x': {
        title: 'Linha Ultraline 4X',
        category: 'Linhas de Pesca',
        desc: 'A linha multifilamento ULTRALINE 4X é fabricada em 100% PE (polietileno), unindo alta qualidade com preço competitivo. Seu trançado firme de 4 fios de PE proporciona resistência extraordinária à abrasão mecânica, sendo ideal para pescar em locais com alta presença de pedras, troncos e estruturas.',
        image: 'assets/product_ultraline_4x.webp',
        specs: {
            'Material': '100% PE (Polietileno)',
            'Trançado': '4 Fios (4X)',
            'Diâmetros': '0.16mm, 0.20mm, 0.24mm, 0.28mm, 0.30mm, 0.35mm, 0.40mm, 0.45mm',
            'Libragens': '15 LB, 20 LB, 25 LB, 30 LB, 40 LB, 50 LB, 60 LB, 70 LB',
            'Carretel': '100 metros (conectados em rolos de até 1.000m)',
            'Diferencial': 'Resistência à abrasão superior à 8X'
        },
        waText: 'Olá! Tenho interesse na Linha Ultraline 4X. Quais libragens vocês têm em estoque?'
    },
    'high-tech-8x-multicolor': {
        title: 'Linha High Tech 8X Multicolor',
        category: 'Linhas de Pesca',
        desc: 'A linha multifilamento HIGH TECH LINE 8X é fabricada em 100% PE (polietileno). Possui um acabamento encerado especial que reduz o atrito e permite um deslizamento superior pelos passadores, proporcionando arremessos muito mais longos e precisos. Produzida em cinco cores para facilitar a visualização, mudando a cada 10 metros.',
        image: 'assets/product_hightech_8x_multicolor.webp',
        specs: {
            'Material': '100% PE (Polietileno)',
            'Trançado': '8 Fios (8X)',
            'Diâmetros': '0.20mm, 0.22mm, 0.26mm, 0.28mm, 0.33mm, 0.43mm',
            'Libragens': '32 LB, 42 LB, 45 LB, 48 LB, 55 LB, 65 LB',
            'Cores': 'Multicolor (Muda a cada 10 metros)',
            'Carretel': '135 metros'
        },
        waText: 'Olá! Gostaria de saber mais sobre as libragens da Linha High Tech 8X Multicolor.'
    },
    'high-tech-4x-multicolor': {
        title: 'Linha High Tech 4X Multicolor',
        category: 'Linhas de Pesca',
        desc: 'A linha multifilamento HIGH TECH LINE 4X é fabricada em 100% PE (polietileno). Uma escolha perfeita para pescadores que trabalham em áreas com muita estrutura. Oferece alta resistência à abrasão mecânica e é produzida em três cores vibrantes que mudam a cada 1 metro, facilitando o acompanhamento da isca.',
        image: 'assets/product_hightech_4x_multicolor.webp',
        specs: {
            'Material': '100% PE (Polietileno)',
            'Trançado': '4 Fios (4X)',
            'Diâmetros': '0.185mm, 0.205mm, 0.235mm, 0.260mm, 0.285mm, 0.330mm',
            'Libragens': '18 LB, 20 LB, 25 LB, 30 LB, 40 LB, 50 LB',
            'Cores': 'Multicolor (Muda a cada 1 metro)',
            'Carretel': '135 metros'
        },
        waText: 'Olá! Gostaria de consultar os preços da Linha High Tech 4X Multicolor.'
    },
    'high-tech-8x-green': {
        title: 'Linha High Tech 8X Green',
        category: 'Linhas de Pesca',
        desc: 'A linha multifilamento HIGH TECH LINE 8X Green é fabricada em 100% PE (polietileno) de alta tecnologia na cor verde musgo. Com acabamento encerado especial para arremessos silenciosos e de longo alcance, alia a alta resistência do trançado de 8 fios com ótima sensibilidade para o pescador esportivo.',
        image: 'assets/product_hightech_8x_green.webp',
        specs: {
            'Material': '100% PE (Polietileno)',
            'Trançado': '8 Fios (8X)',
            'Diâmetros': '0.20mm, 0.22mm, 0.26mm, 0.28mm, 0.33mm, 0.40mm, 0.43mm',
            'Libragens': '32 LB, 42 LB, 45 LB, 48 LB, 55 LB, 60 LB, 65 LB',
            'Cor': 'Verde (Green)',
            'Carretel': '135 metros'
        },
        waText: 'Olá! Tenho interesse na Linha High Tech 8X Green, gostaria de saber os diâmetros em estoque.'
    },
    'fluorcarbon': {
        title: 'Linha Fluorocarbon',
        category: 'Linhas de Pesca',
        desc: 'A linha FLUOROCARBON da TR FISHING é fabricada 100% em fluorocarbono PVDF (fluoreto de polivinilideno) com matéria-prima 100% japonesa de altíssima qualidade. Feita na cor transparente para total invisibilidade sob a água, oferece uma excelente resistência à abrasão, sendo perfeita para líderes em estruturas severas como rochas e pedras.',
        image: 'assets/product_fluorcarbon.webp',
        specs: {
            'Material': '100% PVDF (Matéria-prima Japonesa)',
            'Cor': 'Transparente (Invisível para os peixes)',
            'Diâmetros': '0.20mm a 0.95mm',
            'Libragens': '5 LB a 150 LB',
            'Carretel': '25 metros',
            'Resistência': 'Excelente resistência à abrasão'
        },
        waText: 'Olá! Gostaria de encomendar a Linha Fluorocarbon da TR Fishing.'
    },

    // === VARAS ===
    'pro-chompers': { // Combined card for highlights grid compatibility
        title: 'Vara Pro Chompers IM7 Series',
        category: 'Varas de Carbono',
        desc: 'A série Pro Chompers é o carro-chefe da TR Fishing em varas de alta performance. Fabricada com blank tubular de Carbono IM7 super leve e sensível, oferece ação extra rápida ideal para garantir fisgadas sólidas. Disponível nos modelos Cast (Carretilha) e Spin (Molinete).',
        image: 'assets/product_pro_chompers_spin.webp',
        specs: {
            'Blank': 'Fibra de Carbono IM7 Tubular',
            'Libragem': '10-20 LB',
            'Ação': 'Extra Rápida',
            'Tamanhos': '5\'8" (1.73m) a 6\'3" (1.91m)',
            'Modelos': 'Carretilha (Cast) e Molinete (Spin)',
            'Secções': '1 Parte (Inteiriça)',
            'Passadores': 'Óxido de Alumínio reforçados (aptos para multifilamento)'
        },
        waText: 'Olá! Gostaria de falar sobre a vara Pro Chompers IM7. Qual modelo vocês recomendam para pesca de Tucunaré?'
    },
    'pro-chompers-spin': {
        title: 'Vara Pro Chompers Spin (Molinete)',
        category: 'Varas de Carbono',
        desc: 'A vara de pesca PRO CHOMPERS SPIN é fabricada com blank de fibra de carbono IM7 tubular de alta performance. Oferece ação extra rápida com excelente custo-benefício, garantindo sensibilidade extrema e força nas fisgadas para molinete.',
        image: 'assets/product_pro_chompers_spin.webp',
        specs: {
            'Blank': 'Fibra de Carbono IM7 Tubular',
            'Libragem': '10-20 LB',
            'Secções': '1 Parte (Inteiriça)',
            'Ação': 'Extra Rápida',
            'Tamanhos': '5\'8" (1.73m) / 6\'0" (1.83m)',
            'Peso de Isca': '10g a 30g',
            'Passadores': '6+1 ou 7+1',
            'Uso': 'Para Molinete (Spinning)'
        },
        waText: 'Olá! Gostaria de consultar preços da Vara Pro Chompers Spin para Molinete.'
    },
    'pro-chompers-cast': {
        title: 'Vara Pro Chompers Cast (Carretilha)',
        category: 'Varas de Carbono',
        desc: 'A vara de pesca PRO CHOMPERS CAST é fabricada com blank de fibra de carbono IM7 tubular de alta performance. Oferece ação extra rápida com excelente custo-benefício, garantindo sensibilidade extrema e força nas fisgadas para carretilha.',
        image: 'assets/product_pro_chompers_cast.webp',
        specs: {
            'Blank': 'Fibra de Carbono IM7 Tubular',
            'Libragem': '10-20 LB',
            'Secções': '1 Parte (Inteiriça)',
            'Ação': 'Extra Rápida',
            'Tamanhos': '5\'8" (1.73m) / 6\'3" (1.91m)',
            'Peso de Isca': '10g a 30g',
            'Passadores': '7+1 ou 9+1',
            'Uso': 'Para Carretilha (Casting)'
        },
        waText: 'Olá! Gostaria de consultar preços da Vara Pro Chompers Cast para Carretilha.'
    },
    'starlure': {
        title: 'Vara Starlure',
        category: 'Varas de Carbono',
        desc: 'A vara de pesca STARLURE é fabricada em fibra de carbono IM7 tubular. Oferece ação média-rápida, ideal para pesca técnica de arremesso com iscas artificiais médias e leves, aliando extrema leveza com alta sensibilidade de blank.',
        image: 'assets/product_starlure.webp',
        specs: {
            'Blank': 'Fibra de Carbono IM7 Tubular',
            'Libragem': '8-17 LB',
            'Secções': '1 Parte (Inteiriça)',
            'Ação': 'Média Rápida',
            'Tamanhos': '5\'8" (1.73m) / 6\'0" (1.83m)',
            'Peso de Isca': '7g a 28g',
            'Passadores': '7+1 ou 8+1',
            'Uso': 'Excelente para iscas artificiais leves/médias'
        },
        waText: 'Olá! Gostaria de mais especificações técnicas sobre a Vara Starlure.'
    },
    'rendalli': {
        title: 'Vara Rendalli (Gomo Longo)',
        category: 'Varas de Carbono',
        desc: 'A vara RENDALLI da TR FISHING é fabricada em fibra de vidro, com a ponta da vara feita em fibra de vidro maciça para máxima durabilidade. Possui estrutura telescópica em gomo longo de 1 metro por seção, sendo ideal para pescar peixes em lagos, rios e mares com extrema resistência.',
        image: 'assets/product_rendalli.webp',
        specs: {
            'Blank': 'Fibra de Vidro (Ponta Maciça)',
            'Modelos': '3000 / 4000',
            'Comprimento': '3.00m (Modelo 3000) / 4.00m (Modelo 4000)',
            'Secções': '3 partes (Modelo 4000) / 4 partes (Modelo 3000)',
            'Gomo': 'Longo (Medindo 1 metro cada seção)',
            'Indicação': 'Lagos, rios e mares'
        },
        waText: 'Olá! Gostaria de consultar os preços e modelos da Vara Rendali telescópica.'
    },

    // === ISCAS SOFT ===
    'tr-top-shad': {
        title: 'Isca Soft TR Top Shad',
        category: 'Iscas Soft',
        desc: 'A isca TR TOP SHAD foi projetada para atender os pescadores de iscas soft que adoram pescar os grandes Tucunarés e Trairões. Tem o corpo maciço com uma cauda longa que permite um trabalho imitando um peixe pequeno. Pode ser usado em spinner bait ou com anzóis off-set.',
        image: 'assets/product_top_shad.webp',
        specs: {
            'Peso': '15 gramas',
            'Comprimento': '17 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 3 unidades',
            'Indicação': 'Trairão, Tucunaré e outros peixes predadores'
        },
        waText: 'Olá! Tenho interesse na isca soft TR Top Shad de 17cm.'
    },
    'tr-crazy-shad': {
        title: 'Isca Soft TR Crazy Shad',
        category: 'Iscas Soft',
        desc: 'A isca TR CRAZY SHAD tem o corpo maciço com uma cauda longa que permite um trabalho espetacular imitando um pequeno peixe. Pode ser montada no formato antienrosco com anzóis off-set, permitindo trabalhar a isca em situações de bastante estrutura.',
        image: 'assets/product_crazy_shad.webp',
        specs: {
            'Peso': '7 gramas',
            'Comprimento': '9,5 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 3 unidades',
            'Indicação': 'Traíra, Black Bass, Tucunaré e outros predadores'
        },
        waText: 'Olá! Gostaria de comprar a isca TR Crazy Shad. Quais as cores em estoque?'
    },
    'tr-up-grub': {
        title: 'Isca Soft TR Up Grub',
        category: 'Iscas Soft',
        desc: 'A isca TR UP GRUB tem o corpo maciço com uma cauda em foice longa que permite um trabalho espetacular e de alta vibração na água, fazendo os predadores atacarem. Pode ser usada montada com anzol off-set antienrosco em locais com estruturas.',
        image: 'assets/product_up_grub.webp',
        specs: {
            'Peso': '10 gramas',
            'Comprimento': '9 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 3 unidades',
            'Indicação': 'Traíra, Black Bass e outros peixes predadores'
        },
        waText: 'Olá! Gostaria de mais informações sobre as cores da isca TR Up Grub.'
    },
    'tr-big-foot': {
        title: 'Isca Soft TR Big Foot',
        category: 'Iscas Soft',
        desc: 'A isca TR BIG FOOT possui corpo oco com pernas volumosas que geram um trabalho espetacular de vibração na água, sendo irresistível para os peixes predadores ativos.',
        image: 'assets/product_big_foot.webp',
        specs: {
            'Peso': '9 gramas',
            'Comprimento': '10 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 5 unidades',
            'Indicação': 'Traíra, Black Bass e outros predadores'
        },
        waText: 'Olá! Tenho interesse na isca soft TR Big Foot.'
    },
    'tr-craw': {
        title: 'Isca Soft TR Craw',
        category: 'Iscas Soft',
        desc: 'A isca TR CRAW tem o corpo oco, sendo uma isca mais volumosa e com várias fissuras em seu corpo. Isso permite que a isca trabalhe emitindo vibrações embaixo da água, facilitando que o peixe a localize no fundo.',
        image: 'assets/product_craw.webp',
        specs: {
            'Peso': '14 gramas',
            'Comprimento': '10 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 5 unidades',
            'Indicação': 'Traíra, Black Bass, Jacundá e outros predadores'
        },
        waText: 'Olá! Quero saber as cores disponíveis do pacote da isca TR Craw.'
    },
    'tr-big-craw': {
        title: 'Isca Soft TR Big Craw',
        category: 'Iscas Soft',
        desc: 'A isca TR BIG CRAW tem o corpo oco e volumoso com várias fissuras em seu corpo, gerando vibrações fortes no fundo. Uma excelente criatura para selecionar os maiores peixes predadores em montagens como Texas Rig ou Carolina.',
        image: 'assets/product_big_craw.webp',
        specs: {
            'Peso': '10 gramas',
            'Comprimento': '10 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 5 unidades',
            'Indicação': 'Grandes Traíras, Black Bass e outros predadores'
        },
        waText: 'Olá! Gostaria de encomendar a isca TR Big Craw.'
    },
    'tr-big-boss': {
        title: 'Isca Soft TR Big Boss',
        category: 'Iscas Soft',
        desc: 'A isca TR BIG BOSS tem o corpo maciço com quatro pernas que permitem um trabalho excelente. Com as ranhuras que tem em seu corpo, ajuda a isca a fazer uma vibração na água despertando o instinto predador.',
        image: 'assets/product_big_boss.webp',
        specs: {
            'Peso': '8,5 gramas',
            'Comprimento': '10 cm',
            'Composição': 'Silicone especial com Essência de Alho e Sal',
            'Embalagem': 'Blister com 5 unidades',
            'Indicação': 'Traíra, Black Bass e outros peixes predadores'
        },
        waText: 'Olá! Gostaria de consultar as cores da isca TR Big Boss.'
    },
    'tr-big-frog': {
        title: 'Isca TR Big Frog',
        category: 'Iscas Soft',
        desc: 'A isca TR BIG FROG imita uma pequena rã nadando na superfície. É fabricada em látex premium, tendo excelente acabamento e altíssima resistência aos dentes das traíras. Seu trabalho na superfície é provocante e totalmente anti-enrosco.',
        image: 'assets/product_big_frog.webp',
        specs: {
            'Peso': '13 gramas',
            'Comprimento': '6,5 cm',
            'Material': 'Látex Premium de Alta Durabilidade',
            'Embalagem': 'Embalagem individual (1 unidade)',
            'Indicação': 'Traíra, Black Bass e outros predadores (Antienrosco)'
        },
        waText: 'Olá! Gostaria de encomendar a isca TR Big Frog de látex.'
    }
};

// 2. Initialize Page Actions
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
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });

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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => animateObserver.observe(el));

    // 5. Render Dynamic Carousels with all 18 catalog products
    renderProductCarousels();

    // 6. Catalog Filter Logic (Destaques vs Carousels)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const highlightsGrid = document.getElementById('products-grid');
    const wrapperLinhas = document.getElementById('linhas-carousel-wrapper');
    const wrapperVaras = document.getElementById('varas-carousel-wrapper');
    const wrapperIscas = document.getElementById('iscas-carousel-wrapper');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Hide everything with a smooth scale/opacity fade out
            const allViews = [highlightsGrid, wrapperLinhas, wrapperVaras, wrapperIscas];
            allViews.forEach(view => {
                if (!view) return;
                view.style.opacity = '0';
                view.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    view.style.display = 'none';
                }, 150);
            });

            // Show active view with fade-in
            setTimeout(() => {
                let targetView;
                if (filterValue === 'all') {
                    targetView = highlightsGrid;
                    if (highlightsGrid) highlightsGrid.style.display = 'grid';
                } else if (filterValue === 'linhas') {
                    targetView = wrapperLinhas;
                    if (wrapperLinhas) wrapperLinhas.style.display = 'block';
                } else if (filterValue === 'varas') {
                    targetView = wrapperVaras;
                    if (wrapperVaras) wrapperVaras.style.display = 'block';
                } else if (filterValue === 'iscas') {
                    targetView = wrapperIscas;
                    if (wrapperIscas) wrapperIscas.style.display = 'block';
                }

                setTimeout(() => {
                    if (targetView) {
                        targetView.style.opacity = '1';
                        targetView.style.transform = 'scale(1)';
                    }
                    // Re-bind mouse 3D tilt movement on new views
                    bind3DTiltEffects();
                }, 50);
            }, 160);
        });
    });

    // 7. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subjectSelect = document.getElementById('subject');
            const subject = subjectSelect.options[subjectSelect.selectedIndex].text;
            const message = document.getElementById('message').value;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'Redirecionando...';
            formStatus.className = 'form-status';
            formStatus.innerText = '';

            const waText = `Olá TR Fishing! Gostaria de entrar em contato.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*WhatsApp/Telefone:* ${phone}\n*Assunto:* ${subject}\n\n*Mensagem:* ${message}`;
            const waBaseUrl = 'https://wa.me/5542991211496';
            const encodedText = encodeURIComponent(waText);

            setTimeout(() => {
                window.open(`${waBaseUrl}?text=${encodedText}`, '_blank');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;

                formStatus.classList.add('success');
                formStatus.innerText = 'Mensagem estruturada com sucesso! Redirecionando para o WhatsApp...';

                setTimeout(() => {
                    formStatus.innerText = '';
                }, 5000);
            }, 1000);
        });
    }

    // Check if there's a category filter requested from another page (like policies pages)
    const pendingFilter = localStorage.getItem('filterCategory');
    if (pendingFilter) {
        localStorage.removeItem('filterCategory');
        setTimeout(() => {
            const btn = document.querySelector(`.filter-btn[data-filter="${pendingFilter}"]`);
            if (btn) btn.click();
        }, 300);
    }

    // Dynamic year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// 8. Dynamic Carousel Cards Render Builder
function renderProductCarousels() {
    const trackLinhas = document.getElementById('linhas-carousel');
    const trackVaras = document.getElementById('varas-carousel');
    const trackIscas = document.getElementById('iscas-carousel');

    if (trackLinhas) trackLinhas.innerHTML = '';
    if (trackVaras) trackVaras.innerHTML = '';
    if (trackIscas) trackIscas.innerHTML = '';

    for (const [id, product] of Object.entries(productsData)) {
        // Exclude the combined 'pro-chompers' card from the category carousels
        if (id === 'pro-chompers') continue;

        // Create Card DOM element
        const card = document.createElement('div');
        card.className = 'product-card carousel-card';
        
        // Resolve appropriate badge value
        let badgeText = '';
        let isAccentBadge = false;
        
        if (id.includes('8x')) { badgeText = 'Multifilamento 8X'; }
        else if (id.includes('4x')) { badgeText = 'Multifilamento 4X'; }
        else if (id.includes('fluorcarbon')) { badgeText = '100% PVDF'; }
        else if (id.includes('chompers')) { badgeText = 'Ação Extra Rápida'; isAccentBadge = true; }
        else if (id.includes('rendalli')) { badgeText = 'Gomo Longo'; isAccentBadge = true; }
        else if (id.includes('starlure')) { badgeText = 'Ação Média Rápida'; isAccentBadge = true; }
        else if (id.includes('top-shad')) { badgeText = 'Tamanho G'; }
        else if (id.includes('crazy-shad')) { badgeText = 'Essência + Sal'; }
        else if (id.includes('up-grub')) { badgeText = 'Cauda Foice'; }
        else if (id.includes('big-foot')) { badgeText = 'Corpo Oco'; }
        else if (id.includes('craw')) { badgeText = 'Crustáceo 3D'; }
        else if (id.includes('boss')) { badgeText = '4 Pernas'; }
        else if (id.includes('big-frog')) { badgeText = 'Látex Surface'; }

        const badgeHtml = badgeText ? `<span class="product-badge ${isAccentBadge ? 'accent' : ''}">${badgeText}</span>` : '';

        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <span class="product-category-tag">${product.category}</span>
                <h3 class="product-name">${product.title}</h3>
                <p class="product-short-desc">${product.desc}</p>
                <button class="btn-detail" onclick="openProductDetail('${id}')">
                    Ver Detalhes
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
            </div>
        `;

        // Append to correct track based on category
        if (product.category === 'Linhas de Pesca' && trackLinhas) {
            trackLinhas.appendChild(card);
        } else if (product.category === 'Varas de Carbono' && trackVaras) {
            trackVaras.appendChild(card);
        } else if (product.category === 'Iscas Soft' && trackIscas) {
            trackIscas.appendChild(card);
        }
    }
}

// 9. Premium 3D Tilt & Glare Effect Binder
function bind3DTiltEffects() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        // Clear previous event listeners to avoid duplicates
        card.onmousemove = null;
        card.onmouseleave = null;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            const dx = (x - xc) / xc; // from -1 to 1
            const dy = (y - yc) / yc; // from -1 to 1
            
            card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
            
            card.style.transform = `perspective(1000px) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.setProperty('--glare-x', '50%');
            card.style.setProperty('--glare-y', '50%');
        });
    });
}

// Run 3D bind initial
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(bind3DTiltEffects, 200);
});

// 10. Scroll Carousel helper (Slide tracks Left/Right)
window.scrollCarousel = function(carouselId, direction) {
    const track = document.getElementById(carouselId);
    if (!track) return;
    
    const firstCard = track.querySelector('.product-card');
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth;
    const gap = 32; // matches 2rem gap
    const scrollAmount = (cardWidth + gap) * direction * 2; // scroll 2 cards at a time
    
    track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
};

// 11. Modal Control Functions (Globally Accessible)
window.openProductDetail = function(productId) {
    // Legacy mapping aliases for compatibility with highlights grid hardcoded calls
    const aliases = {
        'ultra-line-8x': 'ultraline-8x',
        'high-tech-4x': 'high-tech-4x-multicolor',
        'fluorcarbon-leader': 'fluorcarbon',
        'rendali': 'rendalli',
        'top-shad': 'tr-top-shad',
        'crazy-shad': 'tr-crazy-shad',
        'craw-creature': 'tr-craw'
    };

    const targetId = aliases[productId] || productId;
    const product = productsData[targetId];
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDesc = document.getElementById('modalDesc');
    const modalSpecsTable = document.getElementById('modalSpecsTable');
    const modalWaBtn = document.getElementById('modalWaBtn');

    if (!modal || !modalImg || !modalTitle || !modalCategory || !modalDesc || !modalSpecsTable || !modalWaBtn) return;

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
};

window.closeProductModal = function() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }
};

// Close modal when clicking outside the card
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }
});

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// 12. Footer quick filter callback
window.filterCatalog = function(category) {
    const btn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (btn) {
        btn.click();
        
        // Scroll smoothly to section
        const targetSection = document.getElementById('produtos');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
