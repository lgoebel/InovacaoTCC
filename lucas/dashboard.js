document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do Mapa de Calor
    //initHeatmap();
    
    // Inicialização dos Gráficos
    initBarChart();
    initLineChart();
    
    // Configuração dos Filtros
    setupFilters();
    
    // Configuração do Simulador
    setupSimulator();
    
    // Configuração da Votação de Prioridades
    setupPriorityVoting();
});

// Mapa de Calor
function initHeatmap() {
    // Coordenadas aproximadas do Brasil (centralizado)
    const map = L.map('heatmap').setView([-14.2350, -51.9253], 4);
    
    // Adiciona o mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Dados de exemplo para o mapa de calor
    const heatData = {
        max: 100,
        data: [
            {lat: -22.9068, lng: -43.1729, count: 85},  // Rio de Janeiro
            {lat: -23.5505, lng: -46.6333, count: 78},  // São Paulo
            {lat: -12.9714, lng: -38.5014, count: 65},  // Salvador
            {lat: -15.8267, lng: -47.9218, count: 72},  // Brasília
            {lat: -3.7327, lng: -38.5270, count: 58},   // Fortaleza
            {lat: -8.0476, lng: -34.8770, count: 62},    // Recife
            {lat: -1.4558, lng: -48.4902, count: 45},    // Belém
            {lat: -30.0346, lng: -51.2177, count: 50},   // Porto Alegre
            {lat: -5.7950, lng: -35.2094, count: 40},     // Natal
            {lat: -19.9167, lng: -43.9345, count: 55}   // Belo Horizonte
        ]
    };
    
    // Configuração do mapa de calor
    const heatmapLayer = new HeatmapOverlay({
        radius: 25,
        maxOpacity: 0.8,
        scaleRadius: true,
        useLocalExtrema: false,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count',
        gradient: {
            '0.1': '#89B850',
            '0.3': '#F9D423',
            '0.5': '#FC913A',
            '0.7': '#FF4E50',
            '1.0': '#E50000'
        }
    });
    
    map.addLayer(heatmapLayer);
    heatmapLayer.setData(heatData);
    
    // Adiciona marcadores para pontos críticos
    heatData.data.forEach(point => {
        if (point.count > 70) {
            const marker = L.marker([point.lat, point.lng]).addTo(map);
            marker.bindPopup(`<b>Área Crítica</b><br>Intensidade: ${point.count}/100<br>Problemas: Falta de água, saneamento básico`);
        }
    });
}

// Gráfico de Barras
function initBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Água/Saneamento', 'Saúde', 'Educação', 'Segurança', 'Transporte', 'Meio Ambiente'],
            datasets: [{
                label: 'Problemas Reportados',
                data: [125, 87, 64, 93, 56, 42],
                backgroundColor: [
                    'rgba(75, 66, 120, 0.7)',
                    'rgba(174, 36, 75, 0.7)',
                    'rgba(142, 172, 48, 0.7)',
                    'rgba(231, 111, 36, 0.7)',
                    'rgba(8, 20, 29, 0.7)',
                    'rgba(100, 149, 237, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 66, 120, 1)',
                    'rgba(174, 36, 75, 1)',
                    'rgba(142, 172, 48, 1)',
                    'rgba(231, 111, 36, 1)',
                    'rgba(8, 20, 29, 1)',
                    'rgba(100, 149, 237, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            return 'Clique para detalhes';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Problemas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Categorias'
                    }
                }
            },
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const label = barChart.data.labels[index];
                    alert(`Você clicou na categoria: ${label}\nTotal de problemas: ${barChart.data.datasets[0].data[index]}`);
                }
            }
        }
    });
}

// Gráfico de Linha
function initLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [
                {
                    label: 'Água/Saneamento',
                    data: [45, 52, 48, 55, 60, 65, 70, 68, 72, 75, 80, 85],
                    borderColor: 'rgba(75, 66, 120, 1)',
                    backgroundColor: 'rgba(75, 66, 120, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Saúde',
                    data: [30, 35, 40, 42, 45, 50, 55, 60, 65, 70, 75, 80],
                    borderColor: 'rgba(174, 36, 75, 1)',
                    backgroundColor: 'rgba(174, 36, 75, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Educação',
                    data: [20, 25, 28, 30, 32, 35, 38, 40, 45, 50, 55, 60],
                    borderColor: 'rgba(142, 172, 48, 1)',
                    backgroundColor: 'rgba(142, 172, 48, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Problemas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Meses'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Configuração dos Filtros
function setupFilters() {
    const aplicarFiltrosBtn = document.getElementById('aplicar-filtros');
    
    aplicarFiltrosBtn.addEventListener('click', function() {
        const tema = document.getElementById('tema').value;
        const periodo = document.getElementById('periodo').value;
        const regiao = document.getElementById('regiao').value;
        
        // Aqui você implementaria a lógica para filtrar os dados
        // Por enquanto, apenas mostra um alerta com os filtros selecionados
        alert(`Filtros aplicados:\nTema: ${tema}\nPeríodo: ${periodo}\nRegião: ${regiao}`);
        
        // Simulação de atualização dos gráficos com novos dados filtrados
        // Na implementação real, você faria uma requisição AJAX para obter os dados filtrados
        console.log('Atualizando gráficos com os novos filtros...');
    });
}

// Configuração do Simulador
function setupSimulator() {
    const runSimulationBtn = document.getElementById('run-simulation');
    const simulationResults = document.getElementById('simulation-results');
    
    runSimulationBtn.addEventListener('click', function() {
        const scenario = document.getElementById('simulator-scenario').value;
        const region = document.getElementById('simulator-region').value;
        const duration = document.getElementById('simulator-duration').value;
        
        // Mostra os resultados da simulação
        simulationResults.classList.remove('d-none');
        
        // Rola a página até os resultados
        simulationResults.scrollIntoView({ behavior: 'smooth' });
        
        // Atualiza os resultados com base nos parâmetros da simulação
        updateSimulationResults(scenario, region, duration);
    });
}

function updateSimulationResults(scenario, region, duration) {
    // Esta função atualizaria os resultados com base nos parâmetros
    // Aqui está uma implementação simulada
    
    const progressBars = document.querySelectorAll('#simulation-results .progress-bar');
    const alertBox = document.querySelector('#simulation-results .alert');
    
    // Valores base para a simulação
    let healthImpact = 20 + Math.random() * 10;
    let employmentImpact = 10 + Math.random() * 10;
    let safetyImpact = 5 + Math.random() * 10;
    
    // Ajusta com base no cenário
    if (scenario === 'investimento-educacao') {
        employmentImpact += 5;
        healthImpact += 2;
    } else if (scenario === 'melhoria-saneamento') {
        healthImpact += 10;
    } else if (scenario === 'seguranca-publica') {
        safetyImpact += 15;
    } else if (scenario === 'programa-emprego') {
        employmentImpact += 15;
    }
    
    // Ajusta com base na duração
    const durationFactor = duration / 12;
    healthImpact *= durationFactor;
    employmentImpact *= durationFactor;
    safetyImpact *= durationFactor;
    
    // Atualiza as barras de progresso
    progressBars[0].style.width = `${healthImpact}%`;
    progressBars[0].textContent = `Redução de ${Math.round(healthImpact)}% em problemas de saúde`;
    
    progressBars[1].style.width = `${employmentImpact}%`;
    progressBars[1].textContent = `Aumento de ${Math.round(employmentImpact)}% na empregabilidade`;
    
    progressBars[2].style.width = `${safetyImpact}%`;
    progressBars[2].textContent = `Redução de ${Math.round(safetyImpact)}% na violência`;
    
    // Atualiza a mensagem de alerta
    let alertMessage = '';
    if (healthImpact > 25 || employmentImpact > 20 || safetyImpact > 15) {
        alertMessage = '<i class="bi bi-lightbulb me-2"></i> Esta simulação sugere que o investimento terá um impacto positivo significativo na comunidade.';
        alertBox.className = 'alert alert-success mt-3';
    } else {
        alertMessage = '<i class="bi bi-exclamation-triangle me-2"></i> Esta simulação sugere que o investimento terá um impacto moderado. Considere ajustar os parâmetros.';
        alertBox.className = 'alert alert-warning mt-3';
    }
    
    alertBox.innerHTML = alertMessage;
}

// Configuração da Votação de Prioridades
function setupPriorityVoting() {
    const voteBtn = document.querySelector('.priority-voting button');
    
    voteBtn.addEventListener('click', function() {
        const selectedPriorities = [];
        document.querySelectorAll('.priority-voting input:checked').forEach(checkbox => {
            selectedPriorities.push(checkbox.nextElementSibling.textContent);
        });
        
        if (selectedPriorities.length === 0) {
            alert('Por favor, selecione pelo menos uma prioridade para votar.');
            return;
        }
        
        // Simulação de envio dos votos
        alert(`Obrigado por votar!\nPrioridades selecionadas:\n- ${selectedPriorities.join('\n- ')}`);
        
        // Aqui você implementaria o envio real dos votos para o servidor
        console.log('Prioridades votadas:', selectedPriorities);
    });
}