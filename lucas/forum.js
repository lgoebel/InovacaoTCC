        // Função para simular votação
        document.querySelectorAll('.vote-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const countElement = this.parentElement.querySelector('.vote-count');
                let count = parseInt(countElement.textContent);

                if (this.querySelector('.bi-arrow-up-circle')) {
                    countElement.textContent = count + 1;
                    this.classList.add('text-success');
                    this.disabled = true;
                    // Desativar o botão de downvote se estiver ativo
                    const downBtn = this.parentElement.querySelector('.bi-arrow-down-circle').parentElement;
                    downBtn.classList.remove('text-danger');
                } else if (this.querySelector('.bi-arrow-down-circle')) {
                    countElement.textContent = count - 1;
                    this.classList.add('text-danger');
                    this.disabled = true;
                    // Desativar o botão de upvote se estiver ativo
                    const upBtn = this.parentElement.querySelector('.bi-arrow-up-circle').parentElement;
                    upBtn.classList.remove('text-success');
                }
            });
        });

        // Simular envio de formulário
        document.querySelector('.btn-unity').addEventListener('click', function() {
            alert('Tópico criado com sucesso! Será revisado pela moderação antes de aparecer no fórum.');
            const modal = bootstrap.Modal.getInstance(document.getElementById('newTopicModal'));
            modal.hide();
        });