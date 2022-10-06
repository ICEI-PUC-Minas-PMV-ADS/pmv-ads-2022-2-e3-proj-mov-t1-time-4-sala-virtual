# Plano de Testes de Software

Os testes da plataforma serão realizados frente a lógica de caixa preta, o que quer dizer que serão avaliados se os aspectos externos estão condizentes ao que é esperado pelos requisitos. Conforme explicitado anteriormente, a plataforma terá duas jornadas destintas: um referente ao usuário especialista ou prestador de serviço e um referente ao usuário cliente ou solicitador do serviço, sendo o planejamento explicitado a seguir:

Os testes seguirão com status de avaliação conforme a seguir:

> Aprovado [AP]: Caso de teste aprovado e pronto para uso;
> 
> Aprovado com Restrição [APR]: Caso de teste aprovado, porém necessita de modificações pontuais para melhorar o desenpenho;
> 
> Reprovado [RE]: Caso de teste mostrou algum problema em sua execução sendo necessário a revisão da funcionalidade;

## Teste de Cadastro de novos usuários (CT - 01):

### Descrição do teste:

1 - Acessar a tela de cadastro de novo usuário no aplicativo;
2 - Realizar o preenchimento dos campos necessários;
3 - Observar se as validações dos campos estão de acordo com o esperado;
4 - Cadastrar novos usuários;
5 - Observar se o usuário consegue acessar a plataforma;

### Requisitos atendidos:

1 - RF-002 - O aplicativo deve fornecer um formulário de cadastro para clientes.
2 - RF-003 - O aplicativo deve fornecer um formulário de cadastro para especialistas.

## Teste de Login e logout (CT - 02):

### Descrição do teste:

1 - Acessar a tela de login;

2 - Realizar o preenchimento dos campos necessários;

3 - Observar se as validações dos campos estão de acordo com o esperado;

4 - Realizar o login de um usuário válido;

5 - Observar se o usuário consegue acessar a plataforma;

6 - Observar se as funcionalidades iniciais estão de acordo com o esperado;

7 - Realizar o logout do usuário;

8 - Observar se o logout do usuário foi realizado;

### Requisitos atendidos:

1 - RF-006 - O aplicativo deve oferecer uma barra de navegação entre as telas internas.

2 - RF-007 - O aplicativo deve permitir fazer logout.

## Teste de marcação de uma consulta (Jornada do Cliente) (CT - 03):

### Descrição do teste:

1 - Realizar o login de um usuário válido;

2 - Realizar uma busca de um especialista pelos filtros;

3 - Observar se o perfil do especialista está de acordo com o cadastrado;

4 - Observar se é possível ver a agenda do profissional e marcar uma consulta com o mesmo;

5 - Gerar a marcação da consulta;

6 - Observar se os créditos da wallet do cliente foram descontados e a marcação foi computada na agenda do mesmo;

### Requisitos atendidos:

1 - RF-008 - O aplicativo deve fornecer uma tela inicial para clientes, contendo suas próximas consultas.

2 - RF-009 - O aplicativo deve fornecer uma tela de listagem de categorias para filtrar especialidades.

3 - RF-010 - O aplicativo deve fornecer uma tela de listagem de especialidades para filtrar especialistas.

4 - RF-011 - O aplicativo deve permitir que o cliente veja o perfil profissional do especialista e sua agenda.

5 - RF-012 - O aplicativo deve permitir que o cliente agende uma consulta por meio de uma tela de checkout.

6 - RF-013 - O aplicativo deve permitir que o cliente gerencie seus créditos por meio de uma tela de wallet.

## Teste de gestão de configurações do especialista (Jornada do Especialista) (CT - 04):

### Descrição do teste:

1 - Realizar o login de um usuário válido;

2 - Observar se é possível acessar o dashboard do especialista;

3 - Observar se é possivel acompanhar a agenda de consultas e os ganhos que o especialista poderá sacar;

4 - Requisitar alterações nos dados cadastrados pelo usuário;

5 - Observar se essas foram realizadas;

### Requisitos atendidos:

1 - RF-014 - O aplicativo deve fornecer uma tela inicial para especialistas, contendo suas próximas consultas e sua agenda.

2 - RF-015 - O aplicativo deve fornecer uma tela de acompanhamento de ganhos do especialista.

3 - RF-016 - O aplicativo deve fornecer uma tela de gestão de horários do especialista.

4 - RF-017 - O aplicativo deve fornecer uma tela de personalização do seu perfil profissional.

5 - RF-018 - O aplicativo deve fornecer uma tela de gestão de contas de repasse para coletar os ganhos de um especialista.

## Teste de videochamada (CT - 05):

### Descrição do teste:

1 - Realizar o login de um usuário válido;

2 - Acessar a consulta marcada;

3 - Observar se é possivel realizar a videochamada;

4 - Ao final deve-se observar se foi encaminhado uma tela de avaliação da consulta;

### Requisitos atendidos:

1 - RF-019 - O aplicativo deve fornecer uma tela de videochamada para realização das consultas no horário agendado.

2 - RF-020 - O aplicativo deve fornecer uma tela de avaliação de especialistas e clientes após o fim da consulta.

3 - RF-021 - O aplicativo deve fornecer uma tela de espera enquanto a consulta programada não é iniciada.

4 - RF-022 - O aplicativo deve fornecer uma tela de aceite para ingressar na consulta.

Conforme a finalização da programação das funcionalidades, os testes serão aplicados e assim documentados posteriormente.


