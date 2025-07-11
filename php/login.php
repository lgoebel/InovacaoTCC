<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- Definindo o conjunto de caracteres UTF-8 e a meta tag de visualização responsiva para dispositivos móveis -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <!-- Título da página que aparece na aba do navegador -->
        <title>Unity+ | Plataforma de Diagnóstico Socioeconômico Comunitário.</title>

        <!-- Link para os ícones do Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

        <!-- Meta tags para SEO -->
        <meta name="description" content="Unity Plus é uma plataforma de diagnóstico socioeconômico comunitário que conecta você e sua comunidade com a Petrobras.">
        <meta name="robots" content="index, follow">

        <!-- Meta tags adicionais -->
        <meta name="author" content="Integra's Team">
        <meta name="copyright" content="Integra's Team">
        <meta name="keywords" content="Unity, Plataforma, Diagnóstico, Socioeconômico, Comunitário, Petrobras">
        <meta name="theme-color" content="#ffffff">
        <meta name="application-name" content="Unity Plus">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="../image/favicon_io/mstile-150x150.png">
        <meta name="apple-mobile-web-app-title" content="Unity Plus">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <!-- Font Awesome Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

        <!-- Ícones do site -->
        <link rel="apple-touch-icon" sizes="180x180" href="../image/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../image/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../image/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="../image/favicon_io/site.webmanifest">

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
        
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        
        <!-- CSS -->
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <main class="row vh-100 g-0">
            <article class="col-12 col-lg-6 position-relative d-none d-lg-block">
                <a href="../index.html" class="bg-holder"><img src="../image/fundo_login.png" alt="Imagem de apresentação da plataforma"></a>
            </article>
            <article class="col-12 col-lg-6">
                <div class="container h-100 g-0 px-4 px-sm-0 align-items-center d-flex">
                        <div class="card shadow card-login mx-auto fade-up" style="max-width: 500px;">
                            <div class="card-header bg-unity text-white py-3">
                                <h4 class="mb-0 text-center">Entre na sua conta</h4>
                            </div>
                            <div class="card-body">
                                <div class="text-center mb-4">
                                    <p>Acesse pela sua conta no Gov.br</p>
                                    <button class="btn btn-unity w-100 mb-3 fw-bold" data-bs-toggle="modal" data-bs-target="#govbrModal">
                                        Gov.br
                                    </button>

                                    <p>Acesse sua conta Unity+ usando e-mail ou redes sociais</p>
                                </div>
                                
                                <!-- Login Social -->
                                <div class="social-login mb-3">
                                    <button class="btn btn-outline-danger w-100 mb-2 fw-bold">
                                        <i class="bi bi-google h5"></i> Entrar com Google
                                    </button>
                                    <button class="btn btn-outline-primary w-100 mb-2 fw-bold">
                                        <i class="bi bi-facebook h5"></i> Entrar com Facebook
                                    </button>
                                    <button class="btn btn-outline-dark w-100 fw-bold">
                                        <i class="bi bi-apple h5"></i> Entrar com Apple
                                    </button>
                                </div>
                                
                                <!-- Divisor -->
                                <div class="mb-3 text-center d-flex align-items-center">
                                    <hr class="flex-grow-1">
                                    <span class="mx-2 text-secondary">ou</span>
                                    <hr class="flex-grow-1">
                                </div>
                                
                                <!-- Form -->
                                <form action="#" method="post">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text">
                                            <i class="bi bi-person"></i>
                                        </span>
                                        <input type="text" class="form-control form-control-lg fs-6" placeholder="Usuário ou e-mail" required>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">
                                            <i class="bi bi-key"></i>
                                        </span>
                                        <input type="password" class="form-control form-control-lg fs-6" placeholder="Senha" required>
                                    </div>
                                    <div class="d-flex justify-content-between mb-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input">
                                            <label for="form-check" class="form-check-label text-dark small">Lembrar de mim</label>
                                        </div>
                                        <a href="#!" class="link-dark small">Esqueci minha senha</a>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-unity fw-bold" type="button">Entrar</button>
                                    </div>
                                </form>
                                
                                <div class="text-center mt-3">
                                    <small>Não tem uma conta? <a href="paginaCadastro.html" class="fw-bold link-dark">Criar conta</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
            </article>

            <!-- Modal -->
            <div class="modal fade" id="govbrModal" tabindex="-1" aria-labelledby="govbrModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header bg-unity">
                            <h5 class="modal-title" id="govbrModalLabel">Entrar com CPF</h5>
                            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Digite seu CPF para acessar sua conta gov.br</p>
                            <form action="#" method="post">
                                <input type="tel" class="form-control mb-3" placeholder="Digite seu CPF" required>
                                <button type="submit" class="btn btn-unity fw-bold">Acessar Gov.br</button>
                                <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        

        <!-- Bootstrap JS -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" 
        crossorigin="anonymous"></script>
    </body>
</html>
