// Script pour améliorer l'expérience utilisateur
console.log('Page des plateformes IA chargée');

// Animation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé, initialisation des animations');
    
    const cards = document.querySelectorAll('.platform-card');
    console.log(`Nombre de cartes trouvées: ${cards.length}`);
    
    // Animation d'apparition progressive
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            console.log(`Carte ${index + 1} animée`);
        }, index * 100);
    });
    
    // Log des clics sur les cartes
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const platformName = this.querySelector('h2').textContent;
            console.log(`Clic sur la plateforme: ${platformName}`);
        });
    });
    
    console.log('Initialisation terminée');
});


