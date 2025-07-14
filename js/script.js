// Script para garantir que apenas um formulário esteja aberto por vez
const collapseElements = document.querySelectorAll('.collapse');

document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-bs-target');
        
        // Fechar todos os outros formulários
        collapseElements.forEach(element => {
            if (element.id !== target.substring(1)) {
                const bsCollapse = new bootstrap.Collapse(element, {toggle: false});
                bsCollapse.hide();
            }
        });
    });
});

// Animação de seta para voltar ao topo da tela
const arrowUp = document.querySelector('.arrow-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            arrowUp.style.scale = '0';
        } else {
            arrowUp.style.scale = '1';
        }
    });
}, {
    threshold: 0.1
});

const alvo = document.querySelector('.top-section');
observer.observe(alvo);

// Função pra preview de entrada de dados em relatos de baixa prioridade.
function modalBaixaPreview() {
    const cpf = document.getElementById('cpf-baixa').value;
    const comunity = document.getElementById('comun-baixa').value;
    const date = document.getElementById('data-baixa').value;
    const tel = document.getElementById('tel-baixa').value;
    const coords = document.getElementById('coords-bai').value;
    const problemType = document.getElementById('tipo-baixa').value;
    const problemDesc = document.getElementById('desc-baixa').value;
    const attachments = document.getElementById('anexo-baixa').files;
    const modalContent = document.querySelector('#modalPreviewBaixa .modal-content');
    const modal = new bootstrap.Modal(document.getElementById('modalPreviewBaixa'));

    let anexosHtml = '';
    for (let i = 0; i < attachments.length; i++) {
        anexosHtml += `<span class="badge bg-secondary">${attachments[i].name}</span>`;
    }

    const content = `
        <div class="modal-header bg-success text-white">
            <h5 class="modal-title" id="modalPreviewBaixaLabel">
                <i class="bi bi-eye-fill me-2"></i>Confirme seu Relato
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
            <div class="alert alert-success">
                <i class="bi bi-info-circle-fill me-2"></i>
                Por favor, confira todas as informações antes de enviar seu relato
            </div>

            <div class="preview-section mb-4">
                <h6 class="fw-bold text-success border-bottom pb-2 mb-3">
                    <i class="bi bi-person-badge me-2"></i>Dados Pessoais
                </h6>
                <div class="row">
                    <div class="col-md-6 mb-2">
                        <span class="text-muted">CPF:</span>
                        <span class="d-block fw-medium">${cpf}</span>
                    </div>
                    <div class="col-md-6 mb-2">
                        <span class="text-muted">Telefone:</span>
                        <span class="d-block fw-medium">${tel}</span>
                    </div>
                </div>
            </div>

            <div class="preview-section mb-4">
                <h6 class="fw-bold text-success border-bottom pb-2 mb-3">
                    <i class="bi bi-geo-alt me-2"></i>Localização
                </h6>
                <div class="row">
                    <div class="col-md-6 mb-2">
                        <span class="text-muted">Comunidade:</span>
                        <span class="d-block fw-medium">${comunity}</span>
                    </div>
                    <div class="col-md-6 mb-2">
                        <span class="text-muted">Data:</span>
                        <span class="d-block fw-medium">${date}</span>
                    </div>
                    <div class="col-md-12 mb-2">
                        <span class="text-muted">Coordenadas:</span>
                        <span class="d-block fw-medium">${coords}</span>
                    </div>
                </div>
            </div>

            <div class="preview-section mb-4">
                <h6 class="fw-bold text-success border-bottom pb-2 mb-3">
                    <i class="bi bi-exclamation-triangle me-2"></i>Detalhes do Problema
                </h6>
                <div class="row">
                    <div class="col-md-6 mb-2">
                        <span class="text-muted">Tipo:</span>
                        <span class="d-block fw-medium">${problemType}</span>
                    </div>
                    <div class="col-md-12 mb-2">
                        <span class="text-muted">Descrição:</span>
                        <p class="bg-light p-3 rounded mt-2">${problemDesc}</p>
                    </div>
                </div>
            </div>

            <div class="preview-section">
                <h6 class="fw-bold text-success border-bottom pb-2 mb-3">
                    <i class="bi bi-paperclip me-2"></i>Anexos
                </h6>
                <div class="d-flex flex-wrap gap-2">
                    ${anexosHtml || '<span class="text-muted">Nenhum anexo</span>'}
                </div>
            </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                <i class="bi bi-pencil me-2"></i>Corrigir Dados
            </button>
            <button type="button" class="btn btn-success" id="btn-confirmar-envio" data-bs-dismiss="modal" onclick="mostrarAlerta()">
                <i class="bi bi-send-check me-2"></i>Confirmar Envio
            </button>
        </div>
    `;

    modalContent.innerHTML = content;
    modal.show();
}

function mostrarAlerta() {
    const alerta = `
        <div class="alert alert-success alert-dismissible fade show" role="alert" style="position: fixed; left: 2%; top: 2%; z-index: 10; ">
            <p class="fw-bold">Seu formulário foi enviado com sucesso!</p>
            <span>Acompanhe o andamento em seu perfil.</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>
    `;
    document.getElementById('alertPlaceholder').innerHTML = alerta;
}