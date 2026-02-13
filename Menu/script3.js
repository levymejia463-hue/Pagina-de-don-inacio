let currentPage = 1;
        const totalPages = 7;

        // Base de datos de información adicional de los platos
        const dishDatabase = {
            'CARPACIO DE PULPO': {
                fullDescription: 'Finas láminas de pulpo fresco, marinadas y servidas con una deliciosa vinagreta de miel que realza su sabor. Acompañado de nueces crujientes que aportan textura y tostadas artesanales. Un plato ligero y sofisticado que combina la tradición portuguesa con toques contemporáneos.',
                origin: 'Tradición Costera Portuguesa',
                servingSize: '1 porción',
                tags: ['Mariscos', 'Entrada Fría', 'Bajo en Calorías', 'Proteína'],
                chefNote: 'Recomendamos este plato para comenzar una comida especial. El pulpo se cocina lentamente para garantizar su ternura perfecta.'
            },
            'CROQUETAS DE BACALAU': {
                fullDescription: 'Las croquetas de bacalao son un clásico imprescindible de la cocina portuguesa. Elaboradas con bacalao desalado de la mejor calidad, mezclado con puré de papa cremoso, perejil fresco y especias secretas. Rebozadas en pan rallado fino y fritas hasta alcanzar un dorado perfecto.',
                origin: 'Clásico Portugués',
                servingSize: '2 unidades',
                tags: ['Bacalao', 'Frito', 'Tradicional', 'Popular'],
                chefNote: 'Perfectas como aperitivo o para compartir. El secreto está en el punto exacto de fritura que mantiene el interior cremoso.'
            },
            'BACALHAU A LAGAREIRO': {
                fullDescription: 'Uno de los platos más emblemáticos de Portugal. Bacalao entero asado al horno con generosas cantidades de aceite de oliva virgen extra, ajo confitado y hierbas aromáticas. Acompañado de papitas portuguesas asadas que absorben todo el sabor del aceite perfumado.',
                origin: 'Norte de Portugal',
                servingSize: '1 persona',
                preparationTime: '45 minutos',
                tags: ['Bacalao', 'Al Horno', 'Aceite de Oliva', 'Plato Principal'],
                chefNote: 'El bacalao debe estar perfectamente desalado durante 48 horas. El aceite de oliva debe ser de la más alta calidad para realzar todos los sabores.'
            },
            'CATAPLANA DE PEIXE E MARISCOS': {
                fullDescription: 'Espectacular guiso de pescado y mariscos cocinado en cataplana tradicional portuguesa. Incluye una selección de pescados frescos del día, almejas, mejillones, calamares y langostinos, todo cocido con tomate, pimientos, cebolla, vino blanco y cilantro fresco.',
                origin: 'Algarve, Portugal',
                servingSize: '2 personas',
                preparationTime: '35 minutos',
                tags: ['Mariscos', 'Guiso', 'Para Compartir', 'Tradicional'],
                chefNote: 'La cataplana es tanto el nombre del utensilio como del plato. Este método de cocción concentra todos los sabores marinos de forma extraordinaria.'
            },
            'ARROZ DE MARISCOS A DON IÑACIO': {
                fullDescription: 'Nuestro arroz más exclusivo, una creación especial del chef Don Iñacio. Este majestuoso plato combina langosta fresca, camarones jumbo, camarones medianos, navajas, almejas blancas importadas, caracoles de mar y aros de calamar tierno. Todo cocinado en un caldo elaborado con las cabezas de los mariscos.',
                origin: 'Creación del Chef',
                servingSize: '2 personas',
                preparationTime: '50 minutos',
                tags: ['Arroz', 'Mariscos Premium', 'Langosta', 'Plato Especial'],
                chefNote: 'Este es nuestro plato estrella. El arroz se cocina en el punto exacto de caldosidad tradicional portuguesa. Recomendamos reservar con anticipación.'
            },
            'POLVO A LAGAREIRO': {
                fullDescription: 'Pulpo entero cocido a la perfección y después asado al horno con abundante aceite de oliva virgen extra, ajo laminado y pimentón dulce. Servido con papitas portuguesas asadas que se impregnan del delicioso aceite aromático.',
                origin: 'Costa Portuguesa',
                servingSize: '1 persona',
                preparationTime: '1 hora',
                tags: ['Pulpo', 'Al Horno', 'Aceite de Oliva', 'Tradicional'],
                chefNote: 'El pulpo se cuece primero para ablandarlo y luego se asa para crear una textura perfecta: tierno por dentro y ligeramente crujiente por fuera.'
            },
            'BORREGO ASSADO NO FORNO': {
                fullDescription: 'Cordero lechal entero asado lentamente al horno tradicional portugués, marinado con ajo, romero, tomillo y vino blanco. La cocción lenta garantiza una carne tierna que se deshace en el boca, con una piel crujiente y aromática.',
                origin: 'Beira Interior, Portugal',
                servingSize: '4-6 personas',
                preparationTime: '3-4 horas',
                tags: ['Cordero', 'Al Horno', 'Para Compartir', 'Únicamente por Reserva'],
                chefNote: 'Este plato requiere reserva con 48 horas de anticipación. Es perfecto para celebraciones familiares y ocasiones especiales.'
            },
            'PASTEL DE NATA': {
                fullDescription: 'El postre más icónico de Portugal. Tartaleta de hojaldre crujiente rellena de crema de huevo suave y sedosa, horneada hasta que la superficie se carameliza ligeramente. Se sirve tibia con un toque de canela y azúcar glass.',
                origin: 'Lisboa, Portugal',
                servingSize: '1 unidad',
                tags: ['Postre', 'Tradicional', 'Icónico', 'Crema de Huevo'],
                chefNote: 'Nuestra receta sigue la tradición centenaria de los pasteles de Belém. El secreto está en la temperatura exacta del horno y el punto de la crema.'
            },
            'CARNE DE PORCO A ALENTEJANA': {
                fullDescription: 'Plato tradicional de la región del Alentejo que combina magistralmente carne y marisco. Cubos de cerdo marinados en pasta de pimentón y vino, salteados con almejas blancas frescas, papas fritas en dados pequeños y cilantro. Un matrimonio perfecto de tierra y mar.',
                origin: 'Alentejo, Portugal',
                servingSize: '1 persona',
                tags: ['Cerdo', 'Almejas', 'Regional', 'Tradicional'],
                chefNote: 'Este plato representa la creatividad de la cocina alentejana. La combinación de cerdo y almejas puede parecer inusual pero es absolutamente deliciosa.'
            }
            ,
            'PASTEIS DE BACALHAU': {
                fullDescription: 'Bocaditos crujientes de bacalao desalado mezclado con puré de patata y perejil, fritos hasta dorar. Tradicionales y perfectos como aperitivo.',
                origin: 'Portugal',
                servingSize: '4 unidades',
                tags: ['Bacalao', 'Frito', 'Aperitivo'],
                chefNote: 'Servir calientes para disfrutar su textura cremosa interior.'
            },
            'PÃO CASEIRO DE MASSA MADRE': {
                fullDescription: 'Pan casero elaborado con masa madre, miga aireada y corteza crujiente. Ideal para acompañar tapas y platos principales.',
                origin: 'Madeira, Portugal',
                servingSize: '1 unidad',
                tags: ['Pan', 'Masa Madre', 'Acompañamiento'],
                chefNote: 'Recomendamos tostar ligeramente antes de servir.'
            },
            'PICA PAU': {
                fullDescription: 'Trozos de carne marinada en especias y vinagre, salteados y servidos con encurtidos; sabor intenso y tradicional.',
                origin: 'Portugal',
                servingSize: '1 porción',
                tags: ['Carne', 'Marinada', 'Tapa'],
                chefNote: 'Plato ideal para compartir con pan o patatas.'
            },
            'PATANISCAS DE CAMARAO': {
                fullDescription: 'Buñuelos ligeros de camarón, crujientes por fuera y jugosos por dentro, sazonados con perejil y ajo.',
                origin: 'Portugal',
                servingSize: '4-5 unidades',
                tags: ['Camarón', 'Frito', 'Aperitivo'],
                chefNote: 'Mejor consumir recién fritas.'
            },
            'TABLA DE TAPAS Y QUESOS (GRANDE)': {
                fullDescription: 'Selección generosa de embutidos curados, quesos artesanos, mermeladas y encurtidos. Perfecta para compartir.',
                origin: 'Selección del Chef',
                servingSize: '3-4 personas',
                tags: ['Quesos', 'Embutidos', 'Compartir'],
                chefNote: 'Consulte por combinaciones sin gluten o adaptaciones.'
            },
            'FEIJOADA DE PEIXE E MARISCOS DON INACIO': {
                fullDescription: 'Estofado de legumbres y mariscos, con caldo concentrado y trozos de marisco variados; reconfortante y sabroso.',
                origin: 'Creación del Chef',
                servingSize: '2 personas',
                tags: ['Guiso', 'Mariscos', 'Tradicional'],
                chefNote: 'Este plato tiene un punto de sazón particular; preguntad al camarero si deseáis más picante.'
            }
        };

        // Emojis para cada tipo de plato
        const foodEmojis = {
            'default': '🍽️',
            'pescado': '🐟',
            'pulpo': '🐙',
            'camaron': '🦐',
            'almeja': '🦪',
            'calamar': '🦑',
            'bacalau': '🐟',
            'pan': '🍞',
            'ensalada': '🥗',
            'carne': '🥩',
            'cerdo': '🐷',
            'cordero': '🐑',
            'ternera': '🥩',
            'pato': '🦆',
            'postre': '🍰',
            'tarte': '🥧',
            'queso': '🧀',
            'chocolate': '🍫'
        };

        function getEmojiForItem(itemName) {
            const name = itemName.toLowerCase();
            if (name.includes('pulpo') || name.includes('polvo')) return foodEmojis.pulpo;
            if (name.includes('camaron') || name.includes('camarão')) return foodEmojis.camaron;
            if (name.includes('almeja')) return foodEmojis.almeja;
            if (name.includes('calamar')) return foodEmojis.calamar;
            if (name.includes('bacalau') || name.includes('bacalhau')) return foodEmojis.bacalau;
            if (name.includes('pan') || name.includes('pão')) return foodEmojis.pan;
            if (name.includes('ensalada')) return foodEmojis.ensalada;
            if (name.includes('cerdo') || name.includes('porco')) return foodEmojis.cerdo;
            if (name.includes('cordero') || name.includes('borrego')) return foodEmojis.cordero;
            if (name.includes('ternera') || name.includes('vitela') || name.includes('vaca')) return foodEmojis.ternera;
            if (name.includes('pato')) return foodEmojis.pato;
            if (name.includes('pastel') || name.includes('nata')) return foodEmojis.postre;
            if (name.includes('tarte')) return foodEmojis.tarte;
            if (name.includes('queso') || name.includes('quijada')) return foodEmojis.queso;
            if (name.includes('chocolate')) return foodEmojis.chocolate;
            if (name.includes('pescado') || name.includes('peixe') || name.includes('atum')) return foodEmojis.pescado;
            if (name.includes('marisco')) return '🦞';
            return foodEmojis.default;
        }

        function getCategoryFromPage(pageNumber) {
            const categories = {
                1: 'Entradas',
                2: 'Entradas',
                3: 'Pescado y Mariscos',
                4: 'Pescado y Mariscos',
                5: 'Carnes',
                6: 'Carnes',
                7: 'Postres'
            };
            return categories[pageNumber] || 'Especialidades';
        }

        // Mapeo de imágenes para cada plato (rutas relativas dentro del proyecto)
        const dishImages = {
            'CROQUETAS DE BACALAU': '../extern-arch/MENUv2/3.jpg',
            'CARPACIO DE PULPO': '../extern-arch/MENUv2/5.jpg',
            'ENSALADA DE EMBUTIDOS Y QUESOS CURADOS': '../extern-arch/MENUv2/6.jpg',
            'PASTEIS DE BACALHAU': '../extern-arch/MENUv2/6.jpg',
            'CAMARÃO JUMBO A CHEF': '../extern-arch/MENUv2/4.jpg',
            'PÃO CASEIRO DE MASSA MADRE': '../extern-arch/MENUv2/8.jpg',
            'PICA PAU': '../extern-arch/MENUv2/7.jpg',
            'PATANISCAS DE CAMARAO': '../extern-arch/MENUv2/9.jpg',
            'CARPACIO DE BOCA COLORADO CURADO / AHUMADO': '../extern-arch/MENUv2/10.jpg',
            'ALMEJA BLANCA IMPORTADA A LA MODA DEL CHEF': '../extern-arch/MENUv2/11.jpg',
            'TABLA DE TAPAS Y QUESOS (GRANDE)': '../extern-arch/MENUv2/12.jpg',
            'TABLA DE TAPAS Y QUESOS (MEDIANA)': '../extern-arch/MENUv2/13.jpg',
            'CATAPLANA DE PEIXE E MARISCOS': '../extern-arch/MENUv2/15.jpg',
            'ARROZ DE MARISCOS A DON IÑACIO': '../extern-arch/MENUv2/16.jpg',
            'FEIJOADA DE PEIXE E MARISCOS DON INACIO': '../extern-arch/MENUv2/17.png',
            'BACALHAU A LAGAREIRO': '../extern-arch/MENUv2/18.jpg',
            'POLVO A LAGAREIRO': '../extern-arch/MENUv2/19.png',
            'LINGUINI PEIXE E FRUTOS DO MAR': '../extern-arch/MENUv2/20.png',
            'ARROZ DE POLVO': '../extern-arch/MENUv2/21.png',
            'ARROZ DE TAMBORIL': '../extern-arch/MENUv2/22.png',
            'ARROZ DE CAMARÃO': '../extern-arch/MENUv2/23.png',
            'BIFE DE ATUM SALSA VINHO DO PORTO': '../extern-arch/MENUv2/24.png',
            'CARNE DE VACA A AÇORIANA': '../extern-arch/MENUv2/25.png',
            'COSTELA DE PORCO FUMADA': '../extern-arch/MENUv2/26.png',
            'ENSOPADO DE BORREGO': '../extern-arch/MENUv2/27.png',
            'BORREGO ASSADO NO FORNO': '../extern-arch/MENUv2/28.png',
            'CARNE DE PORCO A ALENTEJANA': '../extern-arch/MENUv2/29.png',
            'ARROZ DE PATO NO FORNO': '../extern-arch/MENUv2/30.png',
            'POSTA A MODA DO CHEF': '../extern-arch/MENUv2/31.png',
            'MEDALHÕES DE VITELA': '../extern-arch/MENUv2/32.png',
            'MASSA A LAVRADOR': '../extern-arch/MENUv2/33.png',
            'FEIJOADA TRANSMONTANA': '../extern-arch/MENUv2/34.png',
            'PASTEL DE NATA': '../extern-arch/MENUv2/35.png',
            'QUIJADA DA MADEIRA': '../extern-arch/MENUv2/36.png',
            'TARTE DE AMENDOA': '../extern-arch/MENUv2/37.png',
            'SEDUÇÃO DE CAFÉ Y CHOCOLATE NEGRO': '../extern-arch/MENUv2/38.png',
            'SEMIFRIO COM MARMELADA DE VEGETAIS': '../extern-arch/MENUv2/39.png'
        };

        function openDishModal(dishName, description, price, imageUrl, emoji) {
            const modal = document.getElementById('dishModal');
            const dishInfo = dishDatabase[dishName] || {};
            
            // Título
            document.getElementById('dishModalTitle').textContent = dishName;
            
            // Precio
            const priceText = price === '-' || price === 'Consultar' ? price : price;
            document.getElementById('dishModalPrice').textContent = priceText;
            
            // Categoría
            document.getElementById('dishModalCategory').textContent = getCategoryFromPage(currentPage);
            
            // Imagen
            const imageContainer = document.getElementById('dishModalImageContainer');
            if (imageUrl && imageUrl !== '') {
                imageContainer.innerHTML = `<img src="${imageUrl}" alt="${dishName}" class="dish-modal-image">`;
            } else {
                imageContainer.innerHTML = `<div class="dish-modal-placeholder">${emoji}</div>`;
            }
            
            // Descripción
            const descriptionSection = document.getElementById('dishDescriptionSection');
            const descriptionText = dishInfo.fullDescription || description || 'Delicioso plato tradicional portugués preparado con ingredientes frescos y receta auténtica.';
            document.getElementById('dishModalDescription').textContent = descriptionText;
            descriptionSection.style.display = descriptionText ? 'block' : 'none';
            
            // Información adicional
            const infoSection = document.getElementById('dishInfoSection');
            const infoGrid = document.getElementById('dishModalInfo');
            infoGrid.innerHTML = '';
            
            if (dishInfo.origin || dishInfo.servingSize || dishInfo.preparationTime) {
                let hasInfo = false;
                
                if (dishInfo.origin) {
                    infoGrid.innerHTML += `
                        <div class="dish-modal-info-item">
                            <div class="dish-modal-info-label">Origen</div>
                            <div class="dish-modal-info-value">${dishInfo.origin}</div>
                        </div>
                    `;
                    hasInfo = true;
                }
                
                if (dishInfo.servingSize) {
                    infoGrid.innerHTML += `
                        <div class="dish-modal-info-item">
                            <div class="dish-modal-info-label">Porción</div>
                            <div class="dish-modal-info-value">${dishInfo.servingSize}</div>
                        </div>
                    `;
                    hasInfo = true;
                }
                
                if (dishInfo.preparationTime) {
                    infoGrid.innerHTML += `
                        <div class="dish-modal-info-item">
                            <div class="dish-modal-info-label">Tiempo de Preparación</div>
                            <div class="dish-modal-info-value">${dishInfo.preparationTime}</div>
                        </div>
                    `;
                    hasInfo = true;
                }
                
                infoSection.style.display = hasInfo ? 'block' : 'none';
            } else {
                infoSection.style.display = 'none';
            }
            
            // Nota del Chef
            const notesSection = document.getElementById('dishNotesSection');
            if (dishInfo.chefNote) {
                document.getElementById('dishModalNotes').textContent = dishInfo.chefNote;
                notesSection.style.display = 'block';
            } else {
                notesSection.style.display = 'none';
            }
            
            // Tags
            const tagsSection = document.getElementById('dishTagsSection');
            const tagsContainer = document.getElementById('dishModalTags');
            if (dishInfo.tags && dishInfo.tags.length > 0) {
                tagsContainer.innerHTML = dishInfo.tags.map(tag => 
                    `<span class="dish-modal-tag">${tag}</span>`
                ).join('');
                tagsSection.style.display = 'block';
            } else {
                tagsSection.style.display = 'none';
            }
            
            // Mostrar modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeDishModal() {
            const modal = document.getElementById('dishModal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function closeDishModalOnBackdrop(event) {
            if (event.target === document.getElementById('dishModal')) {
                closeDishModal();
            }
        }

        function addImageContainersToAllItems() {
            // Obtener todos los items del menú que no tienen imagen
            const menuItems = document.querySelectorAll('.menu-item');
            
            menuItems.forEach(item => {
                // Si ya tiene contenedor de imagen, asegurarse de cargar imagen mapeada y evento click
                const existingContainer = item.querySelector('.item-image-container');
                const nameElem = item.querySelector('.item-name');
                const nameText = nameElem ? nameElem.textContent.trim() : '';
                const mappedImage = dishImages[nameText];

                if (existingContainer) {
                    const img = existingContainer.querySelector('.item-image');
                    const placeholder = existingContainer.querySelector('.item-image-placeholder');
                    if (img && mappedImage) {
                        img.src = mappedImage;
                        img.style.display = 'block';
                        if (placeholder) placeholder.style.display = 'none';
                    } else if (placeholder && (!placeholder.innerHTML || placeholder.innerHTML.trim() === '')) {
                        placeholder.innerHTML = `<img src="extern-arch/chef.jpeg" alt="${nameText}">`;
                    }

                    if (!item.hasAttribute('data-click-attached')) {
                        item.addEventListener('click', function() {
                            const itemName = this.querySelector('.item-name').textContent;
                            const itemDescription = this.querySelector('.item-description')?.textContent || '';
                            const itemPrice = this.querySelector('.item-price').textContent;
                            const itemImage = this.querySelector('.item-image');
                            const itemImageUrl = itemImage && itemImage.style.display !== 'none' ? itemImage.src : '';
                            const emoji = this.querySelector('.item-image-placeholder')?.textContent || '🍽️';
                            openDishModal(itemName, itemDescription, itemPrice, itemImageUrl, emoji);
                        });
                        item.setAttribute('data-click-attached', 'true');
                    }
                    return;
                }
                
                // Obtener el nombre del item
                const itemName = item.querySelector('.item-name');
                if (!itemName) return;
                
                const nameTextNew = itemName.textContent.trim();
                const mapped = dishImages[nameTextNew];
                
                // Crear el contenedor de imagen
                const imageContainer = document.createElement('div');
                imageContainer.className = 'item-image-container';
                imageContainer.innerHTML = `
                    <img src="${mapped || ''}" alt="${itemName.textContent}" class="item-image" style="display: ${mapped ? 'block' : 'none'};">
                    <div class="item-image-placeholder">${mapped ? '' : `<img src="extern-arch/chef.jpeg" alt="${itemName.textContent}">`}</div>
                `;
                
                // Crear el contenedor de contenido si no existe
                let contentContainer = item.querySelector('.item-content');
                if (!contentContainer) {
                    contentContainer = document.createElement('div');
                    contentContainer.className = 'item-content';
                    
                    // Mover item-info y item-price al nuevo contenedor
                    const itemInfo = item.querySelector('.item-info');
                    const itemPrice = item.querySelector('.item-price');
                    
                    if (itemInfo) contentContainer.appendChild(itemInfo);
                    if (itemPrice) contentContainer.appendChild(itemPrice);
                }
                
                // Insertar el contenedor de imagen al inicio
                item.insertBefore(imageContainer, item.firstChild);
                
                // Asegurar que el contenedor de contenido esté después de la imagen
                if (!item.querySelector('.item-content')) {
                    item.appendChild(contentContainer);
                }
                
                // Agregar evento click
                item.addEventListener('click', function() {
                    const itemName = this.querySelector('.item-name').textContent;
                    const itemDescription = this.querySelector('.item-description')?.textContent || '';
                    const itemPrice = this.querySelector('.item-price').textContent;
                    const itemImage = this.querySelector('.item-image');
                    const itemImageUrl = itemImage && itemImage.style.display !== 'none' ? itemImage.src : '';
                    const emoji = this.querySelector('.item-image-placeholder')?.textContent || '🍽️';
                    
                    openDishModal(itemName, itemDescription, itemPrice, itemImageUrl, emoji);
                });
                item.setAttribute('data-click-attached', 'true');
            });
        }

        // Función para cargar imagen cuando se proporciona URL
        function loadImage(itemName, imageUrl) {
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                const nameElement = item.querySelector('.item-name');
                if (nameElement && nameElement.textContent.includes(itemName)) {
                    const img = item.querySelector('.item-image');
                    const placeholder = item.querySelector('.item-image-placeholder');
                    if (img && imageUrl) {
                        img.src = imageUrl;
                        img.style.display = 'block';
                        img.onload = () => {
                            if (placeholder) placeholder.style.display = 'none';
                        };
                        img.onerror = () => {
                            img.style.display = 'none';
                            if (placeholder) placeholder.style.display = 'flex';
                        };
                    }
                }
            });
        }

        function showPage(pageNumber) {
            // Ocultar todas las páginas
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            // Mostrar la página actual
            const pageToShow = document.querySelector(`[data-page="${pageNumber}"]`);
            if (pageToShow) {
                pageToShow.classList.add('active');
                currentPage = pageNumber;
                document.getElementById('currentPage').textContent = currentPage;

                // Actualizar estado de botones
                updateButtons();

                // Scroll al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function changePage(direction) {
            const newPage = currentPage + direction;
            if (newPage >= 1 && newPage <= totalPages) {
                showPage(newPage);
            }
        }

        function goToPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= totalPages) {
                showPage(pageNumber);
            }
        }

        function updateButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === totalPages;
        }

        function toggleIndex() {
            const modal = document.getElementById('indexModal');
            modal.classList.toggle('active');
        }

        function closeIndexOnBackdrop(event) {
            if (event.target === document.getElementById('indexModal')) {
                toggleIndex();
            }
        }

        // Navegación con teclado
        document.addEventListener('keydown', function(event) {
            const dishModal = document.getElementById('dishModal');
            const indexModal = document.getElementById('indexModal');
            
            if (event.key === 'Escape') {
                if (dishModal.classList.contains('active')) {
                    closeDishModal();
                } else if (indexModal.classList.contains('active')) {
                    toggleIndex();
                }
            } else if (!dishModal.classList.contains('active') && !indexModal.classList.contains('active')) {
                if (event.key === 'ArrowLeft') {
                    changePage(-1);
                } else if (event.key === 'ArrowRight') {
                    changePage(1);
                }
            }
        });

        // Inicializar al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            addImageContainersToAllItems();
            document.getElementById('totalPages').textContent = totalPages;
            updateButtons();
        });

        // También ejecutar inmediatamente por si DOMContentLoaded ya pasó
        if (document.readyState === 'loading') {
            // Todavía cargando, el evento se disparará
        } else {
            // DOM ya está listo
            addImageContainersToAllItems();
        }

        function volver() {
    window.location.href="../index.html"
}