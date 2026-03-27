/* ============================================
   DON INACIO — MENÚ SCRIPT
   ============================================ */

// ── ALLERGEN DATA ──
const allergenData = {
    'Pasteis de Bacalhau': { gf: true, lf: true },
    'Pataniscas de Camarão': { gf: false, lf: true },
    'Camarão Jumbo a Chef': { gf: true, lf: true },
    'Camarão Cozido': { gf: true, lf: true },
    'Carpacho de Mero Curado y Defumado': { gf: true, lf: true },
    'Salada de Polvo': { gf: true, lf: true },
    'Ameijoa Branca Importada a Moda de Chef': { gf: true, lf: true },
    'Salada de Embutidos y Queso': { gf: false, lf: false },
    'Pica Pau': { gf: true, lf: true },
    'Pão Caseiro de Massa Madre': { gf: false, lf: true },
    'Cataplana de Peixe e Mariscos': { gf: true, lf: true },
    'Arroz de Mariscos Don Inacio': { gf: true, lf: true },
    'Feijoada de Peixe e Mariscos Don Inacio': { gf: true, lf: true },
    'Bacalhau a Lagareiro': { gf: true, lf: true },
    'Bacalhau a Braz': { gf: true, lf: true },
    'Polvo a Lagareiro': { gf: true, lf: true },
    'Linguini Peixe y Frutos do Mar': { gf: false, lf: true },
    'Arroz de Polvo': { gf: true, lf: true },
    'Bacalhau a Don Inacio': { gf: true, lf: true },
    'Arroz de Camarão': { gf: true, lf: true },
    'Bife de Atum Salsa Vinho do Porto': { gf: true, lf: true },
    'Carne de Vaca a Açoriana': { gf: true, lf: true },
    'Costela de Porco Fumada': { gf: true, lf: true },
    'Ensopado de Borrego': { gf: true, lf: true },
    'Borrego Assado no Forno': { gf: true, lf: true },
    'Carne de Porco a Alentejana': { gf: true, lf: true },
    'Arroz de Pato no Forno': { gf: true, lf: true },
    'Posta de Vitela a Moda do Chef (450 g)': { gf: true, lf: true },
    'Medalhões de Vitela': { gf: true, lf: true },
    'Massa a Lavrador': { gf: false, lf: true },
    'Feijoada Transmontana': { gf: true, lf: true },
    'Tabla de Embutidos y Quesos Grande': { gf: true, lf: false },
    'Tabla de Embutidos y Quesos': { gf: true, lf: false },
    'Pastel de Nata': { gf: false, lf: false },
    'Queijada da Madeira': { gf: false, lf: false },
    'Tarte de Amêndoa': { gf: true, lf: true },
    'Seducción de Café y Chocolate Negro': { gf: true, lf: false },
    'Semifrío con Compota de Vegetales': { gf: false, lf: false }
};

function buildAllergenHTML(dishName) {
    const data = allergenData[dishName];
    if (!data) return '';
    let html = [];
    if (data.gf === true) html.push('<span class="allergen-item"><img class="allergen-icon-lg" src="/extern-arch/sg.png" alt="Sin Gluten"><span class="allergen-text">Sin Gluten</span></span>');
    if (data.gf === false) html.push('<span class="allergen-item"><img class="allergen-icon-lg" src="/extern-arch/cg.png" alt="Con Gluten"><span class="allergen-text">Con Gluten</span></span>');
    if (data.lf === true) html.push('<span class="allergen-item"><img class="allergen-icon-lg" src="/extern-arch/sl.png" alt="Sin Lactosa"><span class="allergen-text">Sin Lactosa</span></span>');
    if (data.lf === false) html.push('<span class="allergen-item"><img class="allergen-icon-lg" src="/extern-arch/cl.png" alt="Con Lactosa"><span class="allergen-text">Con Lactosa</span></span>');
    return html.join(' · ');
}

function getAllergenInfo(dishName) {
    return buildAllergenHTML(dishName);
}

// ── HEADER SCROLL ──
const menuHeader = document.getElementById('menuHeader');
if (menuHeader) {
    window.addEventListener('scroll', () => {
        menuHeader.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ── FILTROS DE CATEGORÍA ──
const filterBtns = document.querySelectorAll('.filter-btn');
const menuSections = document.querySelectorAll('.menu-category');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const cat = btn.dataset.category;

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        menuSections.forEach(section => {
            if (cat === 'all' || section.dataset.category === cat) {
                section.classList.remove('hidden');
                section.style.animation = 'none';
                requestAnimationFrame(() => {
                    section.style.animation = 'filterReveal 0.4s ease forwards';
                });
            } else {
                section.classList.add('hidden');
            }
        });

        // Scroll al inicio de la sección filtrada
        if (cat !== 'all') {
            const target = document.getElementById('cat-' + cat);
            const filtersBar = document.querySelector('.menu-filters-section');
            if (target && filtersBar) {
                setTimeout(() => {
                    const top = target.getBoundingClientRect().top + window.scrollY
                        - filtersBar.offsetHeight
                        - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
                    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
                }, 40);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── REVEAL ANIMATIONS (Intersection Observer) ──
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll(
        '.dish-card, .category-label, .category-title, .category-desc, ' +
        '.reserva-band-text, .reserva-band-actions, .footer-brand'
    );

    targets.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.55s ease ${(i % 5) * 0.07}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${(i % 5) * 0.07}s`;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });

    targets.forEach(el => observer.observe(el));
});

// ── SISTEMA DE IDIOMAS (i18n) ──
const translations = {
    es: {
        // Header
        'back': 'Atrás',
        'back-aria': 'Volver',
        'reservar': 'Reservar',
        // Hero
        'hero-label': 'Restaurante Don Inacio',
        'hero-title': 'Nuestra<br><em>Cocina</em>',
        'hero-desc': 'Cocina portuguesa artesanal elaborada con pasión,<br>tradición y los mejores ingredientes del mundo.',
        'reservar-mesa': 'Reservar Mesa',
        // Filtros
        'filter-all': 'Todo',
        'filter-entradas': 'Entradas',
        'filter-mar': 'Pescado &amp; Mariscos',
        'filter-carnes': 'Carnes',
        'filter-postres': 'Postres',
        // Categorías
        'cat-entradas-label': 'Aperitivos',
        'cat-entradas-title': 'Entradas',
        'cat-entradas-desc': 'Aperitivos tradicionales portugueses para comenzar con el pie derecho',
        'cat-mar-label': 'Del Atlántico',
        'cat-mar-title': 'Pescado &amp; Mariscos',
        'cat-mar-desc': 'Los mejores tesoros del mar, cocinados a la manera tradicional portuguesa',
        'cat-carnes-label': 'De la Tierra',
        'cat-carnes-title': 'Carnes',
        'cat-carnes-desc': 'Platos fuertes con técnicas y recetas tradicionales portuguesas',
        'cat-tablas-label': 'Para Compartir',
        'cat-tablas-title': 'Tablas',
        'cat-tablas-desc': 'Embutidos y quesos curados, ideales para compartir en mesa',
        'cat-postres-label': 'Dulces Tradicionales',
        'cat-postres-title': 'Postres',
        'cat-postres-desc': 'El dulce final de una experiencia gastronómica inolvidable',
        'cat-bebidas-label': 'Nuestra Selección',
        'cat-bebidas-title': 'Bebidas',
        'cat-bebidas-desc': 'Cócteles portugueses, vinos y refrescos para acompañar su experiencia',
        'bebidas-aperitivos': 'Aperitivos',
        'bebidas-agua': 'Agua y Soda',
        'bebidas-vino': 'Vino y Sangría',
        'bebidas-copa': 'Vino Blanco / Tinto y Sangría &nbsp;&bull;&nbsp; Copa',
        'modal-precio': 'Precio',
        // Platos – Entradas
        'dish-pasteis-sub': 'Croquetas de Bacalao',
        'dish-pasteis-desc': 'Croquetas de bacalao (2 unidades)',
        'dish-camaro-sub': 'Camarón Jumbo al estilo chef',
        'dish-camaro-desc': 'Camarón jumbo salteado en aceite extra virgen, ajo, romero, cilantro, y flameado al cognac',
        'dish-camaro-cozido-desc': 'Camarón cocido con especias, hierbas aromáticas y salsa cóctel de camarón',
        'dish-carpacio-desc': 'Salsa agridulce, alcaparras y tostadas',
        'dish-salada-polvo-desc': 'Pulpo, encurtido de cebolla, chilli asado, tomate fresco, ajo confitado y aceite de oliva virgen extra',
        'dish-ensalada-desc': 'Nuca de cerdo, lomo de cerdo, tocineta, tomate fresco, pimentón asado, aceitunas, queso curado y trocitos de pan tostado',
        'dish-picapau-desc': 'Carne de cerdo marinada a base de pasta de chile rojo ahumada, especias y encurtido de vegetales',
        'dish-pao-sub': 'Pan casero de Madeira',
        'dish-pao-desc': 'Pan casero típico portugués, hecho de masa madre',
        'dish-pataniscas-desc': 'Buñuelos a base de camarón, cebolla, hierbas aromáticas y huevo (2 unidades)',
        'dish-boca-sub': 'Curado / Ahumado',
        'dish-boca-desc': 'Salsa agridulce, alcaparras y tostadas',
        'dish-almeja-desc': 'Almeja salteada en aceite de oliva extra virgen, ajo, especias y cilantro',
        'dish-tabla-grande-desc': 'Nuca curada, lomo curado, tocineta, jamón cocido ahumado, bresaola, salame al ajo, chorizo picante, magret de pato curado, bacon ahumado, chorizo portugués ahumado, queso curado, mermelada de vegetales, encurtidos y aceitunas',
        'dish-tabla-med-desc': 'Nuca curada, lomo curado, tocineta, jamón cocido, salame al ajo, chorizo picante, queso curado, mermelada de vegetales y encurtidos. Plato típico de todo Portugal',
        // Platos – Mar
        'dish-cataplana-desc': 'Pescado fresco, camarón mediano, camarón jumbo, langosta, almeja, mejillón, navajas, hierbas aromáticas, papa laminada y vegetales',
        'dish-arroz-mar-desc': 'Langosta, camarón jumbo, camarón 16/20, navajas, almeja blanca, caracol y aros de calamar',
        'dish-feijoada-peixe-desc': 'Frijol blanco, camarón, pescado, almeja blanca, aro de calamar, mejillones y caracol',
        'dish-bacalhau-desc': 'Bacalao al horno en aceite de oliva virgen extra, con cebolla confitada al vino tinto, aceitunas negras y papitas horneadas',
        'dish-bacalhau-braz-desc': 'Bacalao salteado en aceite de oliva extra virgen, con ajo fresco, cebolla caramelizada, aceitunas negras, huevo, perejil y tomate cherry',
        'dish-polvo-desc': 'Tentáculo de pulpo al horno en aceite de oliva virgen extra, ajo, cebolla caramelizada y papitas horneadas. Gluten Free / Lactose Free',
        'dish-linguini-desc': 'Pasta linguini, pescado, camarón, mejillón, almeja blanca y calamar. Contiene Gluten / Lactose Free',
        'dish-arroz-polvo-desc': 'Rico arroz con pulpo troceado y marinado a base de aceite de oliva, cilantro fresco y ajo confitado. Gluten Free / Lactose Free',
        'dish-bacalhau-don-inacio-desc': 'Bacalao en trocitos horneado, con papa frita, camote frito, cebolla caramelizada, jengibre, perejil y hierbas aromáticas, gratinado con queso. Gluten Free / Lactose Free',
        'dish-arroz-tamboril-desc': 'Rico arroz de pescado importado (RAPE)',
        'dish-arroz-camaro-desc': 'Arroz de camarones',
        'dish-atum-sub': 'Isla de Madeira',
        'dish-atum-desc': '400g — Steak de atún fresco importado, salsa al vino Porto y puré de papa',
        // Platos – Carnes
        'dish-vaca-sub': 'Azores, Portugal',
        'dish-vaca-desc': 'Rica carne de res marinada al vino tinto y especias, al horno, acompañada de papas horneadas',
        'dish-costela-desc': 'Costilla de cerdo ahumada naturalmente, acompañada de papa salteada con bacon',
        'dish-ensopado-desc': 'Estofado de cordero acompañado de papa al horno',
        'badge-reserva': 'Solo por Reserva',
        'dish-borrego-desc': 'Cordero al horno, acompañado de papitas horneadas. Requiere reserva con 48h de anticipación',
        'dish-porco-sub': 'Alentejo, Portugal',
        'dish-porco-desc': 'Carne de cerdo marinada en pasta de chili dulce ahumada, con papa frita en cubitos, almeja blanca importada y encurtidos',
        'dish-pato-desc': 'Arroz de pato al horno con bacon y chorizo',
        'dish-posta-desc': '500g — Lomo de ternera a la parrilla con papita asada, aceite de oliva, ajo y hierbas aromáticas',
        'dish-medalhoes-desc': 'Medallones de filet de ternera con salsa al vino Porto, pimienta negra, acompañados con papitas asadas',
        'dish-massa-desc': 'Coditos de pasta con carnes ahumadas, frijoles rojos y vegetales',
        'dish-feijoada-desc': 'Rica frijolada hecha a base de carnes ahumadas y chorizo ahumado',
        // Postres
        'dish-nata-desc': 'Pastel típico de Portugal a base de crema de huevos',
        'dish-quijada-desc': 'Tartaleta de quesadilla típica de Portugal hecha a base de queso fresco',
        'dish-tarte-desc': 'Tarta de almendras',
        'dish-seducao-desc': 'Postre a base de crema de leche, chocolate, café y cocoa',
        'dish-semifrio-desc': 'Semifrío a base de crema de leche, mermelada de vegetales, galleta y especias',
        // Reserva band
        'reserva-label': '¿Listo para vivir la experiencia?',
        'reserva-title': 'Reserve su mesa',
        'reserva-desc': 'Llámenos o escríbanos, estaremos encantados de recibirle',
        'reservar-ahora': 'Reservar Ahora',
        // Footer
        'footer-brand-desc': 'Cocina portuguesa artesanal<br>desde el corazón',
        'footer-nav-title': 'Navegación',
        'nav-inicio': 'Inicio',
        'nav-menu': 'Menú',
        'nav-productos': 'Productos',
        'nav-galeria': 'Galería',
        'nav-reservar': 'Reservar',
        'footer-contact-title': 'Contacto',
        'footer-location': 'Santa Ana, El Salvador',
        'footer-hours': 'Mar – Dom: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2025 Restaurante Don Inacio. Todos los derechos reservados.',
    },
    pt: {
        'back': 'Voltar',
        'back-aria': 'Voltar',
        'reservar': 'Reservar',
        'hero-label': 'Restaurante Don Inácio',
        'hero-title': 'Nossa<br><em>Cozinha</em>',
        'hero-desc': 'Cozinha portuguesa artesanal elaborada com paixão,<br>tradição e os melhores ingredientes do mundo.',
        'reservar-mesa': 'Reservar Mesa',
        'filter-all': 'Tudo',
        'filter-entradas': 'Entradas',
        'filter-mar': 'Peixe &amp; Mariscos',
        'filter-carnes': 'Carnes',
        'filter-postres': 'Sobremesas',
        'cat-entradas-label': 'Aperitivos',
        'cat-entradas-title': 'Entradas',
        'cat-entradas-desc': 'Aperitivos tradicionais portugueses para começar da melhor forma',
        'cat-mar-label': 'Do Atlântico',
        'cat-mar-title': 'Peixe &amp; Mariscos',
        'cat-mar-desc': 'Os melhores tesouros do mar, cozinhados à maneira tradicional portuguesa',
        'cat-carnes-label': 'Da Terra',
        'cat-carnes-title': 'Carnes',
        'cat-carnes-desc': 'Pratos principais com técnicas e receitas tradicionais portuguesas',
        'cat-tablas-label': 'Para Partilhar',
        'cat-tablas-title': 'Tábuas',
        'cat-tablas-desc': 'Enchidos e queijos curados, ideais para partilhar à mesa',
        'cat-postres-label': 'Doces Tradicionais',
        'cat-postres-title': 'Sobremesas',
        'cat-postres-desc': 'O final doce de uma experiência gastronómica inesquecível',
        'cat-bebidas-label': 'Nossa Seleção',
        'cat-bebidas-title': 'Bebidas',
        'cat-bebidas-desc': 'Cocktails portugueses, vinhos e refrigerantes para acompanhar a sua experiência',
        'bebidas-aperitivos': 'Aperitivos',
        'bebidas-agua': 'Água e Refrigerantes',
        'bebidas-vino': 'Vinho e Sangria',
        'bebidas-copa': 'Vinho Branco / Tinto e Sangria &nbsp;&bull;&nbsp; Copo',
        'modal-precio': 'Preço',
        'dish-pasteis-sub': 'Croquetes de Bacalhau',
        'dish-pasteis-desc': 'Croquetes de bacalhau (2 unidades)',
        'dish-camaro-sub': 'Camarão Jumbo ao estilo do chef',
        'dish-camaro-desc': 'Camarão jumbo salteado em azeite extra virgem, alho, alecrim, coentros e flamejado com conhaque',
        'dish-camaro-cozido-desc': 'Camarão cozido com especiarias, ervas aromáticas e molho cocktail',
        'dish-carpacio-desc': 'Molho agridoce, alcaparras e torradas',
        'dish-salada-polvo-desc': 'Polvo, picles de cebola, malagueta assada, tomate fresco, alho confitado e azeite virgem extra',
        'dish-ensalada-desc': 'Cachaço de porco, lombo de porco, bacon, tomate fresco, pimento assado, azeitonas, queijo curado e pedacinhos de pão torrado',
        'dish-picapau-desc': 'Carne de porco marinada com pasta de pimentão vermelho fumado, especiarias e legumes em conserva',
        'dish-pao-sub': 'Pão caseiro da Madeira',
        'dish-pao-desc': 'Pão caseiro típico português, feito com massa mãe',
        'dish-pataniscas-desc': 'Pataniscas à base de camarão, cebola, ervas aromáticas e ovo (2 unidades)',
        'dish-boca-sub': 'Curado / Fumado',
        'dish-boca-desc': 'Molho agridoce, alcaparras e torradas',
        'dish-almeja-desc': 'Amêijoa salteada em azeite extra virgem, alho, especiarias e coentros',
        'dish-tabla-grande-desc': 'Nuca curada, lombo curado, toucinho, fiambre fumado, bresaola, salame de alho, chouriço picante, magret de pato curado, bacon fumado, chouriço português fumado, queijo curado, doce de legumes, pickles e azeitonas',
        'dish-tabla-med-desc': 'Nuca curada, lombo curado, toucinho, fiambre, salame de alho, chouriço picante, queijo curado, doce de legumes e pickles. Prato típico de todo Portugal',
        'dish-cataplana-desc': 'Peixe fresco, camarão médio, camarão jumbo, lagosta, amêijoa, mexilhão, lingueirão, ervas aromáticas, batata laminada e legumes',
        'dish-arroz-mar-desc': 'Lagosta, camarão jumbo, camarão 16/20, lingueirão, amêijoa branca, búzio e anéis de lula',
        'dish-feijoada-peixe-desc': 'Feijão branco, camarão, peixe, amêijoa branca, anéis de lula, mexilhão e búzio',
        'dish-bacalhau-desc': 'Bacalhau assado em azeite virgem extra, com cebola confitada em vinho tinto, azeitonas pretas e batatinhas assadas',
        'dish-bacalhau-braz-desc': 'Bacalhau salteado em azeite extra virgem, com alho fresco, cebola caramelizada, azeitonas pretas, ovo, salsa e tomate cereja',
        'dish-polvo-desc': 'Tentáculo de polvo assado em azeite virgem extra, alho, cebola caramelizada e batatinhas assadas. Sem Glúten / Sem Lactose',
        'dish-linguini-desc': 'Massa linguini, peixe, camarão, mexilhão, amêijoa branca e lula. Contém Glúten / Sem Lactose',
        'dish-arroz-polvo-desc': 'Delicioso arroz com polvo em pedaços e marinado à base de azeite, coentros frescos e alho confitado. Sem Glúten / Sem Lactose',
        'dish-bacalhau-don-inacio-desc': 'Bacalhau em pedaços assado, com batata frita, batata-doce frita, cebola caramelizada, gengibre, salsa e ervas aromáticas, gratinado com queijo. Sem Glúten / Sem Lactose',
        'dish-arroz-tamboril-desc': 'Delicioso arroz de tamboril importado',
        'dish-arroz-camaro-desc': 'Arroz de camarão',
        'dish-atum-sub': 'Ilha da Madeira',
        'dish-atum-desc': '400g — Bife de atum fresco importado, molho ao vinho do Porto e puré de batata',
        'dish-vaca-sub': 'Açores, Portugal',
        'dish-vaca-desc': 'Deliciosa carne de vaca marinada em vinho tinto e especiarias, no forno, acompanhada de batatas assadas',
        'dish-costela-desc': 'Costela de porco fumada naturalmente, acompanhada de batata salteada com bacon',
        'dish-ensopado-desc': 'Ensopado de borrego acompanhado de batata assada',
        'badge-reserva': 'Apenas com Reserva',
        'dish-borrego-desc': 'Borrego assado no forno, acompanhado de batatinhas assadas',
        'dish-porco-sub': 'Alentejo, Portugal',
        'dish-porco-desc': 'Carne de porco marinada em pasta de malagueta doce fumada, com cubos de batata frita, amêijoa branca importada e pickles',
        'dish-pato-desc': 'Arroz de pato no forno com bacon e chouriço',
        'dish-posta-desc': '500g — Lombo de vitela grelhado com batatinha assada, azeite, alho e ervas aromáticas',
        'dish-medalhoes-desc': 'Medalhões de filete de vitela com molho ao vinho do Porto, pimenta preta, acompanhados com batatinhas assadas',
        'dish-massa-desc': 'Massa cotovelos com carnes fumadas, feijão vermelho e legumes',
        'dish-feijoada-desc': 'Deliciosa feijoada feita à base de carnes fumadas e chouriço fumado',
        'dish-nata-desc': 'Pastel típico de Portugal à base de creme de ovos',
        'dish-quijada-desc': 'Tartelete de queijada típica de Portugal feita à base de queijo fresco',
        'dish-tarte-desc': 'Tarte de amêndoa',
        'dish-seducao-desc': 'Sobremesa à base de creme de leite, chocolate, café e cacau',
        'dish-semifrio-desc': 'Semifrio à base de creme de leite, doce de legumes, bolacha e especiarias',
        'reserva-label': 'Pronto para viver a experiência?',
        'reserva-title': 'Reserve a sua mesa',
        'reserva-desc': 'Ligue-nos ou escreva-nos, teremos muito prazer em recebê-lo',
        'reservar-ahora': 'Reservar Agora',
        'footer-brand-desc': 'Cozinha portuguesa artesanal<br>desde o coração',
        'footer-nav-title': 'Navegação',
        'nav-inicio': 'Início',
        'nav-menu': 'Menu',
        'nav-productos': 'Produtos',
        'nav-galeria': 'Galeria',
        'nav-reservar': 'Reservar',
        'footer-contact-title': 'Contacto',
        'footer-location': 'Santa Ana, El Salvador',
        'footer-hours': 'Ter – Dom: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2025 Restaurante Don Inacio. Todos os direitos reservados.',
    },
    en: {
        'back': 'Back',
        'back-aria': 'Go back',
        'reservar': 'Reserve',
        'hero-label': 'Don Inacio Restaurant',
        'hero-title': 'Our<br><em>Cuisine</em>',
        'hero-desc': 'Artisan Portuguese cuisine crafted with passion,<br>tradition and the finest ingredients in the world.',
        'reservar-mesa': 'Reserve a Table',
        'filter-all': 'All',
        'filter-entradas': 'Starters',
        'filter-mar': 'Fish &amp; Seafood',
        'filter-carnes': 'Meats',
        'filter-postres': 'Desserts',
        'cat-entradas-label': 'Appetizers',
        'cat-entradas-title': 'Starters',
        'cat-entradas-desc': 'Traditional Portuguese appetizers to begin on the right foot',
        'cat-mar-label': 'From the Atlantic',
        'cat-mar-title': 'Fish &amp; Seafood',
        'cat-mar-desc': 'The finest treasures of the sea, cooked in the traditional Portuguese way',
        'cat-carnes-label': 'From the Land',
        'cat-carnes-title': 'Meats',
        'cat-carnes-desc': 'Hearty mains with traditional Portuguese techniques and recipes',
        'cat-tablas-label': 'To Share',
        'cat-tablas-title': 'Boards',
        'cat-tablas-desc': 'Cured meats and cheeses, ideal for sharing at the table',
        'cat-postres-label': 'Traditional Sweets',
        'cat-postres-title': 'Desserts',
        'cat-postres-desc': 'The sweet finale to an unforgettable gastronomic experience',
        'cat-bebidas-label': 'Our Selection',
        'cat-bebidas-title': 'Drinks',
        'cat-bebidas-desc': 'Portuguese cocktails, wines, and soft drinks to accompany your experience',
        'bebidas-aperitivos': 'Aperitifs',
        'bebidas-agua': 'Water and Soda',
        'bebidas-vino': 'Wine and Sangria',
        'bebidas-copa': 'White / Red Wine and Sangria &nbsp;&bull;&nbsp; Glass',
        'modal-precio': 'Price',
        'dish-pasteis-sub': 'Codfish Croquettes',
        'dish-pasteis-desc': 'Codfish croquettes (2 units)',
        'dish-camaro-sub': 'Jumbo Shrimp chef-style',
        'dish-camaro-desc': 'Jumbo shrimp sautéed in extra virgin olive oil, garlic, rosemary, coriander, and flambéed with cognac',
        'dish-camaro-cozido-desc': 'Boiled shrimp with spices, aromatic herbs, and shrimp cocktail sauce',
        'dish-carpacio-desc': 'Sweet and sour sauce, capers, and toast',
        'dish-salada-polvo-desc': 'Octopus, pickled onion, roasted chili, fresh tomato, confit garlic, and extra virgin olive oil',
        'dish-ensalada-desc': 'Pork neck, pork loin, bacon, fresh tomato, roasted bell pepper, olives, cured cheese, and toasted bread pieces',
        'dish-picapau-desc': 'Marinated pork with smoked red chili paste, spices, and pickled vegetables',
        'dish-pao-sub': 'Homemade Madeira bread',
        'dish-pao-desc': 'Traditional Portuguese homemade sourdough bread',
        'dish-pataniscas-desc': 'Shrimp fritters with onion, aromatic herbs, and egg (2 units)',
        'dish-boca-sub': 'Cured / Smoked',
        'dish-boca-desc': 'Sweet and sour sauce, capers, and toast',
        'dish-almeja-desc': 'Clams sautéed in extra virgin olive oil, garlic, spices, and coriander',
        'dish-tabla-grande-desc': 'Cured neck, cured loin, bacon, smoked cooked ham, bresaola, garlic salami, spicy chorizo, cured duck magret, smoked bacon, smoked Portuguese chouriço, cured cheese, vegetable jam, pickles, and olives',
        'dish-tabla-med-desc': 'Cured neck, cured loin, bacon, cooked ham, garlic salami, spicy chorizo, cured cheese, vegetable jam, and pickles. A typical dish from all over Portugal',
        'dish-cataplana-desc': 'Fresh fish, medium shrimp, jumbo shrimp, lobster, clams, mussels, razor clams, aromatic herbs, sliced potatoes, and vegetables',
        'dish-arroz-mar-desc': 'Lobster, jumbo shrimp, 16/20 shrimp, razor clams, white clams, sea snails, and squid rings',
        'dish-feijoada-peixe-desc': 'White beans, shrimp, fish, white clams, squid rings, mussels, and sea snails',
        'dish-bacalhau-desc': 'Oven-baked cod in extra virgin olive oil, with red wine confit onion, black olives, and roasted baby potatoes',
        'dish-bacalhau-braz-desc': 'Sautéed cod in extra virgin olive oil, with fresh garlic, caramelized onion, black olives, egg, parsley, and cherry tomatoes',
        'dish-polvo-desc': 'Oven-baked octopus tentacle in extra virgin olive oil, garlic, caramelized onion, and roasted baby potatoes. Gluten Free / Lactose Free',
        'dish-linguini-desc': 'Linguini pasta, fish, shrimp, mussels, white clams, and squid. Contains Gluten / Lactose Free',
        'dish-arroz-polvo-desc': 'Delicious rice with chopped octopus marinated in olive oil, fresh coriander, and confit garlic. Gluten Free / Lactose Free',
        'dish-bacalhau-don-inacio-desc': 'Oven-baked cod pieces with french fries, sweet potato fries, caramelized onion, ginger, parsley, aromatic herbs, and melted cheese on top. Gluten Free / Lactose Free',
        'dish-arroz-tamboril-desc': 'Delicious imported monkfish rice',
        'dish-arroz-camaro-desc': 'Shrimp rice',
        'dish-atum-sub': 'Madeira Island',
        'dish-atum-desc': '400g — Fresh imported tuna steak, Port wine sauce and mashed potato',
        'dish-vaca-sub': 'Azores, Portugal',
        'dish-vaca-desc': 'Rich beef marinated in red wine and spices, oven-roasted, served with baked potatoes',
        'dish-costela-desc': 'Naturally smoked pork rib, served with bacon-sautéed potatoes',
        'dish-ensopado-desc': 'Lamb stew served with baked potato',
        'badge-reserva': 'By Reservation Only',
        'dish-borrego-desc': 'Oven-roasted lamb, served with roasted baby potatoes',
        'dish-porco-sub': 'Alentejo, Portugal',
        'dish-porco-desc': 'Pork marinated in smoked sweet chili paste, with diced fries, imported white clams, and pickles',
        'dish-pato-desc': 'Oven-baked duck rice with bacon and chorizo',
        'dish-posta-desc': '500g — Grilled veal loin with roasted baby potato, olive oil, garlic and aromatic herbs',
        'dish-medalhoes-desc': 'Veal fillet medallions with Port wine sauce, black pepper, served with roasted baby potatoes',
        'dish-massa-desc': 'Elbow pasta with smoked meats, red beans, and vegetables',
        'dish-feijoada-desc': 'Rich bean stew made with smoked meats and smoked chorizo',
        'dish-nata-desc': 'Traditional Portuguese pastry made with egg custard',
        'dish-quijada-desc': 'Traditional Portuguese tartlet made with fresh cheese',
        'dish-tarte-desc': 'Almond tart',
        'dish-seducao-desc': 'Dessert made with cream, chocolate, coffee, and cocoa',
        'dish-semifrio-desc': 'Semifreddo made with cream, vegetable marmalade, biscuit, and spices',
        'reserva-label': 'Ready to experience it?',
        'reserva-title': 'Reserve your table',
        'reserva-desc': 'Call or write to us, we will be delighted to welcome you',
        'reservar-ahora': 'Reserve Now',
        'footer-brand-desc': 'Artisan Portuguese cuisine<br>from the heart',
        'footer-nav-title': 'Navigation',
        'nav-inicio': 'Home',
        'nav-menu': 'Menu',
        'nav-productos': 'Products',
        'nav-galeria': 'Gallery',
        'nav-reservar': 'Reserve',
        'footer-contact-title': 'Contact',
        'footer-location': 'Santa Ana, El Salvador',
        'footer-hours': 'Tue – Sun: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2025 Don Inacio Restaurant. All rights reserved.',
    }
};

const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

let currentLang = localStorage.getItem('doninacio_lang') || 'es';

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // data-i18n elements (innerHTML for those with <br>)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // aria-label via data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.dataset.i18nAria;
        if (t[key] !== undefined) {
            el.setAttribute('aria-label', t[key]);
        }
    });

    // html lang attribute
    document.documentElement.lang = langMeta[lang].htmlLang;

    // Update current button display
    const meta = langMeta[lang];
    const flagEl = document.querySelector('.lang-current .lang-flag');
    const codeEl = document.querySelector('.lang-current .lang-code');
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;

    // Update active option
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    currentLang = lang;
    localStorage.setItem('doninacio_lang', lang);
}

// Lang switcher toggle
const langSwitcher = document.getElementById('langSwitcher');
const langCurrent = document.getElementById('langCurrent');

if (langCurrent) {
    langCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
        langCurrent.setAttribute('aria-expanded', langSwitcher.classList.contains('open'));
    });

    document.addEventListener('click', () => {
        langSwitcher.classList.remove('open');
        langCurrent.setAttribute('aria-expanded', 'false');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            applyTranslations(btn.dataset.lang);
            langSwitcher.classList.remove('open');
            langCurrent.setAttribute('aria-expanded', 'false');
        });
    });
}

// Apply saved or default language on load
applyTranslations(currentLang);

// ── DISH DETAIL MODAL ──
(function () {
    const overlay = document.getElementById('dishModalOverlay');
    const closeBtn = document.getElementById('dishModalClose');
    const modalImg = document.getElementById('dishModalImg');
    const modalBadgeWrap = document.getElementById('dishModalBadgeWrap');
    const modalBadge = document.getElementById('dishModalBadge');
    const modalCategory = document.getElementById('dishModalCategory');
    const modalName = document.getElementById('dishModalName');
    const modalSubtitle = document.getElementById('dishModalSubtitle');
    const modalDesc = document.getElementById('dishModalDesc');
    const modalPrice = document.getElementById('dishModalPrice');
    const imagePanel = overlay ? overlay.querySelector('.dish-modal-image-panel') : null;

    if (!overlay) return;

    // Map section data-category → display label
    const categoryLabels = {
        entradas: 'Entradas',
        mar: 'Pescado & Mariscos',
        carnes: 'Carnes',
        tablas: 'Tablas',
        postres: 'Postres',
        bebidas: 'Bebidas',
    };

    function openModal(card) {
        // ── Gather data from the card DOM ──
        const imgEl = card.querySelector('.dish-card-image img');
        const imgSrc = imgEl ? imgEl.getAttribute('src') : '';
        const imgAlt = imgEl ? imgEl.getAttribute('alt') : '';
        const nameEl = card.querySelector('.dish-name');
        const subtitleEl = card.querySelector('.dish-name-pt');
        const descEl = card.querySelector('.dish-desc');
        const priceEl = card.querySelector('.dish-price');
        const badgeEl = card.querySelector('.dish-card-badge');

        // Section category
        const section = card.closest('.menu-category');
        const cat = section ? section.dataset.category : '';
        const catLabel = categoryLabels[cat] || '';

        // ── Populate modal ──
        // Image
        if (imgSrc) {
            imagePanel.classList.remove('no-image');
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
        } else {
            imagePanel.classList.add('no-image');
            modalImg.src = '';
            modalImg.alt = '';
        }

        // Badge
        if (badgeEl && badgeEl.textContent.trim()) {
            modalBadge.textContent = badgeEl.textContent.trim();
            modalBadgeWrap.style.display = '';
        } else {
            modalBadgeWrap.style.display = 'none';
        }

        // Text
        modalCategory.textContent = catLabel;
        modalName.textContent = nameEl ? nameEl.textContent.trim() : '';
        modalSubtitle.textContent = subtitleEl ? subtitleEl.textContent.trim() : '';
        modalDesc.textContent = descEl ? descEl.textContent.trim() : '';
        modalPrice.textContent = priceEl ? priceEl.textContent.trim() : '';

        // Allergen info in modal
        const dishName = nameEl ? nameEl.textContent.trim() : '';
        const modalAllergens = document.getElementById('dishModalAllergens');
        if (modalAllergens) {
            modalAllergens.innerHTML = buildAllergenHTML(dishName, 'large');
        }

        // ── Open ──
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        // Reset image zoom so next open feels fresh
        setTimeout(() => { modalImg.src = ''; }, 400);
    }

    // Click on any dish card → open modal
    document.querySelectorAll('.dish-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open if clicking a link inside card
            if (e.target.closest('a')) return;
            openModal(card);
        });
    });

    // Close via button
    closeBtn.addEventListener('click', closeModal);

    // Close via overlay backdrop click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Close via Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeModal();
        }
    });
})();