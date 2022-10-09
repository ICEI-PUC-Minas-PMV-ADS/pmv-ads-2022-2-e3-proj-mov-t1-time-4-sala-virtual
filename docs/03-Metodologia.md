# Metodologia

A metodologia desse projeto contempla as definições de todas as ferramentas que serão utilizadas pela equipe para a manutenção dos códigos e demais artefatos assim como para realizar o controle de atividades e organização dos desenvolvedores na execução das tarefas do projeto.

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

## Gerenciamento de Projeto

### Divisão de Papéis

Os membros da equipe serão separados nos papéis, conforme abaixo:
Apresente a divisão de papéis entre os membros do grupo.

- Scrum Master: Mateus Cunha Melo;
- Product Owner: Brunna Alves Lage Silva;

- Equipe de Desenvolvimento: Arthur Alves Rocha de Souza, Brunna Alves Lage Silva, Davison Cavalcante Barros, Mateus Cunha Melo, Paloma Chaves Silva, Pedro Thiago Rodrigues Santos, Sabrina Chaves Silva
- Equipe de Desenvolvimento Back-end: Davison Cavalcante Barros, Mateus Cunha Melo, Paloma Chaves Silva, Sabrina Chaves Silva;
- Equipe de Design: Brunna Alves Lage Silva, Pedro Thiago Rodrigues Santos.

### Processo

Com as equipes de desenvolvimento, serão realizadas entregas de artefatos do projeto por parte dos membros em reuniões informais, em aplicativos de reunião, tendo uma reunião semanal com os stakeholders para verificação do andamento do projeto e elucidar qualquer dificuldade no encaminhamento do projeto.

Os artefatos de entrega, são as documentações pertinentes as principais etapas do projeto,assim como as telas do aplicativo, tanto por parte do usuário como por parte do especialista. Tendo em cada etapa subentregas de parte do projeto que cada membro será responsável, todo o backlog dessa parte está disponível no aplicativo Trello.

Coloque informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

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
