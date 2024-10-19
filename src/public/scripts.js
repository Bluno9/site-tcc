// Alternar o submenu ao clicar em "Tools"
document.getElementById('tools-link').addEventListener('click', function (event) {
    event.preventDefault(); // Impedir o comportamento padrão do link

    // Pegar o submenu e alternar a visibilidade
    var submenu = document.getElementById('tools-submenu');
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
});

// Lidar com a troca de idioma
document.getElementById('language-select').addEventListener('change', function () {
    var language = this.value;
    
    // Tradução para o português
    if (language === 'pt') {
        document.getElementById('home-link').textContent = 'Início';
        document.getElementById('workouts-link').textContent = 'Treinos';
        document.getElementById('tools-link').textContent = 'Ferramentas';
        document.getElementById('calorie-link').textContent = 'Calculadora de Calorias';
        document.getElementById('macro-link').textContent = 'Calculadora de Macronutrientes';
        document.getElementById('one-rep-link').textContent = 'Calculadora de 1RM';
        document.getElementById('login-link').textContent = 'Entrar';
        document.getElementById('register-link').textContent = 'Registrar';
        document.getElementById('equipment-title').textContent = 'Equipamentos';

        var filterLabels = document.querySelectorAll('#filter-group label span');
        var translations = ['Destaques', 'Halteres', 'Máquina', 'Kettlebells', 'Cabos', 'Placa', 'Yoga', 'Vitruviano', 
                            'Máquina Smith', 'Barra', 'Peso Corporal', 'Bola Medicinal', 'Alongamentos', 'Faixa', 
                            'TRX', 'Bosu Ball', 'Cardio', 'Recuperação'];

        filterLabels.forEach(function(label, index) {
            label.textContent = translations[index];
        });

    // Tradução para o inglês
    } else if (language === 'en') {
        document.getElementById('home-link').textContent = 'Home';
        document.getElementById('workouts-link').textContent = 'Workouts';
        document.getElementById('tools-link').textContent = 'Tools';
        document.getElementById('calorie-link').textContent = 'Calorie Calculator';
        document.getElementById('macro-link').textContent = 'Macro Calculator';
        document.getElementById('one-rep-link').textContent = 'One Rep Max Calculator';
        document.getElementById('login-link').textContent = 'Login';
        document.getElementById('register-link').textContent = 'Register';
        document.getElementById('equipment-title').textContent = 'Equipment';

        var filterLabels = document.querySelectorAll('#filter-group label span');
        var translations = ['Featured', 'Dumbbells', 'Machine', 'Kettlebells', 'Cables', 'Plate', 'Yoga', 'Vitruvian', 
                            'Smith Machine', 'Barbell', 'Bodyweight', 'Medicine Ball', 'Stretches', 'Band', 
                            'TRX', 'Bosu Ball', 'Cardio', 'Recovery'];

        filterLabels.forEach(function(label, index) {
            label.textContent = translations[index];
        });
    }
});
