
# Projeto de Interface

Para o projeto de interface foram desenvolvidos um Diagrama de fluxo e wireframes que demonstram as interações possíveis de ser executadas pelo usuário através das telas do sistema.

## Diagrama de Fluxo

O diagrama apresenta o estudo do fluxo de interação do usuário com o sistema interativo e  muitas vezes sem a necessidade do desenho do design das telas da interface. Isso permite que o design das interações seja bem planejado e gere impacto na qualidade dos wireframes.

![Legenda](img/Diagrama%20de%20Fluxo%20-%20Legenda.JPG)

![Cadastro](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Cadastro.png)

![Autenticação](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Autentica%C3%A7%C3%A3o.png)

![Redefinir senha](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Redefini%C3%A7%C3%A3o%20de%20senha.png)

![Validação de Formulario](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Valida%C3%A7%C3%A3o%20de%20formul%C3%A1rios.png)

![Fluxo de Marcação](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Marca%C3%A7%C3%A3o.JPG)

![FLuxo de Chamada](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Chamada.png)

![FLuxo de Chamada especialista](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Chamada%20especialista.JPG)

![Gerenciamento de Horários](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Gerenciamento%20de%20hor%C3%A1rios.png)

![Fluxo de Pagamento](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Pagamento.png)

![Editar Perfil](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Editar%20perfil.png)

![Editar Perfil especialista](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20de%20Editar%20perfil%20especialista.JPG)

![Fluxo Geral](img/Diagrama%20de%20Fluxo%20-%20Fluxo%20Geral.png)

## Wireframes

Foram desenvolvidos wireframes de baixa fidelidade na ferramenta Figma, para auxiliar na definição da estrutura da solução e para facilitar a compreensão da equipe com relação as possíveis telas existentes no sistema. 

### RF-001 - Tela de Login
A Tela de Login é a primeira tela interativa do projeto. Ao abrir o aplicativo o usuário será direcionado para essa tela. Nela contém o logo do projeto seguido de um formulário para login e dois botões: um para recuperação da senha e outro de redirecionamento para tela de cadastro.

![Tela de Login](img/RF-001-Login.png)

### RF-002 - Tela de cadastro de Clientes
A Tela de cadastro de Clientes contém o logo da aplicação e um formulário com as informações necessárias do usuário que utilizará a aplicação como um cliente da ferramenta.

![Tela de Cadastro de Clientes](img/RF-002-CadastroClientes.png)

### RF-003 - Tela de cadastro de Especialistas
A Tela de cadastro de especialistas contém o logo da aplicação e um formulário com as informações necessárias do usuário que utilizará a aplicação como um especialista da plataforma.

![Tela de Cadastro de Especialistas](img/RF-003-CadastroEspecialista.png)

### RF-004 - Telas de Redefinição de Senha
Para redefinir a senha a proposta é que o usuário seja redirecionado para a tela de "esqueci minha senha" que apresenta o logo da aplicação, um texto explicativo sobre o processo de redefinição de senha e o formulário a ser preenchido. O usuário receberá um link por email que o redirecionará para a tela de redefinição de senha. Nessa, haverá o formulário para redefinição.

![Tela Esqueci Minha Senha](img/RF-004-EsqueciMinhaSenha.png)
![Tela de Redefinição de Senha](img/RF-004-RedefinirSenha.png)

### RF-005 - Tela de ajustes de Dados Cadastrais
O usuário poderá redefinir os dados cadastrados por meio da tela de ajustes de dados cadastrais. Nessa tela o usuário poderá trocar a imagem de perfil e os dados informados no formulário da tela de cadastro.

![Tela de Ajustes de Dados Cadastrais](img/RF-005-AjustesDeDados.png)

### RF-006 e RF-007 - Tela de Ajuste de Contas
Na tela de ajuste de contas o usuário terá acesso a um menu com opções de ajustes da conta, além de um botão de logout e a barra de navegação entre as telas do 
aplicativo. 

![Tela de Ajuse de Contas](img/RF-006-007-AjusteDeContas.png)

### RF-008 - Dashboard dos Clientes
Na tela de dashboard dos clientes haverá um card com as próximas consultas agendadas e em caso de não haver nenhuma marcação terá apenas um card de redirecionamento para a busca de especialistas. 

![Tela de Dashboard dos Clientes](img/RF-008-DashCliente.png)

### RF-009 - Tela de Listagem de Categorias
Na tela de listagem de categorias haverá vários cards com as categorias de especialidades e um campo de busca para que o usuário realize a pesquisa. 

![Tela de Listagem de Categorias](img/RF-009-BuscaCategorias.png)

### RF-010 - Tela de Listagem de Especialidades
Na tela de listagem de especialidades haverá um menu com as especialidades da categoria determinada pelo usuário e ao acessar a especialidade escolhida o cliente
será redirecionado para uma lista de profissionais da mesma. Na tela também há um campo de busca, um botão de retorno e a barra de navegação. 

![Tela de Listagem de Especialidades](img/RF-010-ListaEspecialidades.png)


### RF-011 - Tela de Perfil do Especialista e Tela de Listagem de Especialistas
Ao selecionar a especialidade na tela de listagem de especialidades o usuário é redirecionado para a tela de listagem de especialistas. A tela contém um botão de retorno, um campo de busca, um campo de filtros, a barra de navegação e os cards dos especialistas. Ao selecionar um especialista o cliente é redirecionado para a a tela de perfil do especialista onde há informações sobre o mesmo e sua agenda. 

![Tela de Listagem de Especialistas](img/RF-011-BuscaEspecialistas.png)

![Tela de Perfil do Especialista](img/RF-011-PerfilEspecialista.png)

### RF-012 - Tela de Checkout
Ao escolher agendar uma reunião na tela do especialista o usuário é encaminhado para a tela de checkout. Nela haverá um card com as informações selecionadas e a o formulário de pagamento. Também há o botão de retorno e a barra de navegação.

![Tela de Checkout](img/RF-012-Checkout.png)

### RF-013 - Tela de Carteira
Na tela de carteira haverá a informação do saldo do usuário, além das formas de pagamentos cadastradas e o histórico de transações. Também haverá o botão de retorno e o menu de navegação. 

![Tela de Carteira](img/RF-013-Carteira.png)

### RF-014 - Tela de Dashboard do Especialista
Na tela de dashboard dos especialistas haverá um card com as próximas consultas agendadas e a agenda do especialista, além do menu de navegação do aplicativo. 

![Tela de Dashboard do Especialista](img/RF-014-DashEspecialistas.png)

### RF-015 - Tela de Ganhos do Especialista
Na tela de ganhos do especialista haverá o saldo atual, gráficos com o demonstrativo dos ganhos mensais e o histórico de transações. 

![Tela de Ganhos](img/RF-015-Ganhos.png)

### RF-016 - Tela de Gestão de Horários
Na tela de gestão de horários contém os campos para definição das durações das chamadas.

![Tela de Gestão de Horários](img/RF-016-GestaoDeHorarios.png)

### RF-017 - Tela de Personalização do Perfil do Especialista
Na tela de personalização o especialista terá acesso as informações do cadastro e poderá alterá-las assim como a especialidade e a descrição do profissional.

![Tela de Personalização do Perfil](img/RF-017-PersonalizarPerfilProfissional.png)

### RF-018 - Tela de Gestão de Contas
Na tela de gestão de contas haverá campos para cadastrar as contas utilizadas para receber o repasse e cards com as contas cadastradas com a opção de edição.

![Tela de Gestão de Contas](img/RF-018-GestaoDeContasDeRepasse.png)

### RF-019 - Tela de Videochamada
Na tela de vídeochamada haverá um menu superior com os botões de compartilhamento de tela e encerramento da chamada e no menu inferior as configurações da chamada. No centro haverá a imagem do vídeo. 

![Tela de Videochamada](img/RF-019-ConsultaVideo.png)

### RF-020 - Tela de Avaliação
Na tela de avaliação há 5 estrelas para avaliação do especialista ou do cliente e um campo de texto caso o usuário desejar deixar um comentário. 

![Tela de Avaliação](img/RF-020-Avaliacao.png)

### RF-021 - Tela de Espera
Na tela de espera haverá uma ilustração e o texto explicativo sobre a chamada.

![Tela de Espera](img/RF-021-ConsultaEspera.png)

### RF-022 - Tela de Aceite
Na tela de aceite haverá uma ilustração, o texto com as  informações da reunião,
as opções de configuração de áudio e vídeo e o botão para entrar na videochamada.

![Tela de Aceite](img/RF-022-ConsultaEntrar.png)

### RF-023 - Tela de Reconexão
Na tela de reconexão haverá uma ilustração e o texto de aviso sobre a reconexão. No caso de falha haverá outra tela com o aviso de que o usuário está offline.

![Tela de Reconexão](img/RF-023-EfeitoColateralReconectando.png)

![Tela Offline](img/RF-023-EfeitoColateralSemInternet.png)

### RF-024 - Tela de Ajuda
Na tela de ajuda haverá campos com temas de perguntas frequentes para auxiliar o usuário. Contém também o botão de retorno e o menu de navegação. 

![Tela de Ajuda](img/RF-024-Ajuda.png)

### RF-025 - Tela de Carregamento (spinner)
Na tela de carregamento haverá um ilustração animada, indicando o carregamento.

![Tela de Carregamento](img/RF-025-Spinner.png)

### RF-026 - Tela de Inicialização (splash screen)
Na tela de inicialização haverá o logo do aplicativo e mensagens informativas sobre o mesmo.

![Tela de inicialização](img/RF-026-SplashScreen.png)
