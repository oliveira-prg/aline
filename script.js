
    <script>
        // Mapeia os planetas para seus overlays
        const planets = {
            'qualidades': 'qualidades-overlay',
            'musicas': 'musicas-overlay',
            'sonhos': 'sonhos-overlay'
        };

        // Adiciona evento de clique a cada planeta
        Object.keys(planets).forEach(planetId => {
            document.getElementById(planetId).addEventListener('click', () => {
                document.getElementById(planets[planetId]).style.display = 'flex';
            });
        });

        // Adiciona evento de clique ao planeta principal
        document.getElementById('main-planet').addEventListener('click', () => {
            document.getElementById('final-message').style.display = 'flex';
        });

        // Adiciona evento de fechar a todos os botões de fechar
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.overlay').style.display = 'none';
            });
        });

        // Fecha o overlay clicando fora do conteúdo
        document.querySelectorAll('.overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        });

        // Botão para reiniciar a jornada
        document.getElementById('restart-journey').addEventListener('click', () => {
            document.getElementById('final-message').style.display = 'none';
        });

        // Adiciona estrelas cintilantes ao fundo dinamicamente
        function createStars() {
            const universe = document.getElementById('universe');
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.style.position = 'absolute';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.backgroundColor = 'white';
                star.style.borderRadius = '50%';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.opacity = Math.random();
                star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
                universe.appendChild(star);
            }
        }

        // Adiciona animação de cintilação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.2; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        createStars();
    </script>
