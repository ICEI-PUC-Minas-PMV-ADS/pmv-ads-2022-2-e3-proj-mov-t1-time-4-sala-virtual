# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

Os ambientes para desenvolvimento dos artefatos do projeto são apontados no quadro a seguir. Eles foram definidos tendo em vista sua finalidade e a capacidade em atendimento às necessidades do projeto.

| Ambiente                          | Plataforma | Link de acesso                                                                                  |
| --------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| Repositório de código fonte       | GitHub     | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time-4-sala-virtual.git |
| Projeto de Interface e Wireframes | Figma      | https://www.figma.com/file/0gs7DZ1i4bLD0QE49Opp4d/App-de-salas?node-id=0%3A1                    |
| Gerenciamento do Projeto          | Trello     | https://trello.com/b/HvtwNSDp/sala-virtual                                                      |

## Controle de Versão

Para assegurar a qualidade da aplicação, em função de suas modificações, é necessária a implementação de um sistema de controle de versões. Optou-se pelo fluxo de trabalho Gitflow, vinculado ao Git, que permite a edição colaborativa e compartilhamento de dados, além da melhor coordenação do trabalho simultâneo do time de desenvolvimento. 

Será possível definir uma sequência de padrões para construir o conteúdo do repositório que será descrita a seguir.

O padrão de versionamento do aplicativo será a utilização de 2 conjuntos de números. O primeiro conjunto representa a versão e o segundo, a modificação. O registro da versão de iniciará em 01.00.

As baselines, que são o conjunto de itens de configurações, serão identificadas com tags, seguindo os exemplos que se seguem:

•	Documentos: DOC-V-versão

•	Código Fonte: FONTE-V-versão

•	Releases: RELEASE-V-versão

O campo “versão” na regra acima é substituído pelo número da versão correspondente.

No fluxo de criação de branchs, teremos duas principais: a main e a develop. Na main estará a o código final do projeto e na develop serão armazenados os registros estáveis mergeados com as branchs secundárias.

As branchs secundárias seguirão a seguinte nomenclatura:

•	Feature: para criar novos registros. Pode ser mergeada à develop.

•	Hotfix: utilizada para alterações emergenciais e pontuais do projeto. Pode ser mergeada com a develop e a master.

•	Release: branch de lançamento, ou seja, é unido todo o código pronto que será mergeado à main.


> **Links Úteis**:
>
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Os membros da equipe serão separados nos papéis, conforme abaixo:
Apresente a divisão de papéis entre os membros do grupo.

- Scrum Master: Mateus Cunha Melo;
- Product Owner: Brunna Alves Lage Silva;

- Equipe de Desenvolvimento Front-end (Jornada Clientes): ;
- Equipe de Desenvolvimento Front-end (Jornada Especialistas): ;
- Equipe de Desenvolvimento Back-end: Davison Cavalcante Barros, Mateus Cunha Melo, Paloma Chaves Silva, Sabrina Chaves Silva;
- Equipe de Design: Brunna Alves Lage Silva, Pedro Thiago Rodrigues Santos.

> **Links Úteis**:
>
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Com as equipes de desenvolvimento, serão realizadas entregas de artefatos do projeto por parte dos membros em reuniões informais, em aplicativos de reunião, tendo uma reunião semanal com os stakeholders para verificação do andamento do projeto e elucidar qualquer dificuldade no encaminhamento do projeto.

Os artefatos de entrega, são as documentações pertinentes as principais etapas do projeto,assim como as telas do aplicativo, tanto por parte do usuário como por parte do especialista. Tendo em cada etapa subentregas de parte do projeto que cada membro será responsável, todo o backlog dessa parte está disponível no aplicativo Trello.

Coloque informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

> **Links Úteis**:
>
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

Nessa etapa do processo podemos dividir as ferramentas utilizadas para o desenvolvimento do projeto em:

Ferramentas de Gestão e Auxiliares:

- Trello: Utilizado para a gestão dos quadros do Kanbam;
- Figma: Utilizado para o desenvolvimento do design das telas do aplicativo, wireframes e modelos de relacionamento;

Ferramentas de desenvolvimento:

- IDE: As ide's ficaram a cargo dos membros da equipe, podendo ser o Visual Code Studio, Rider ou outra plataforma qual o desenvolvedor se sinta familiarizado;
- Github: Gestão de versionamento do código;
- Docker: Criação de containers para o desenvolvimento da API;
- Postman/Swagger: Teste de requisições da API;
- Azure: Hospedagem do serviço da API;

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.

> **Possíveis Ferramentas que auxiliarão no gerenciamento**:
>
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
