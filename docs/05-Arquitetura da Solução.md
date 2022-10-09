# Arquitetura da Solução

## Diagrama de Classes

A estrutura da aplicação, as classes, os atributos e as relações entre as entidades, em termos de associações e multiplicidades, para produzir as funcionalidades do sistema podem ser vistos no diagrama abaixo: 

![Diagrama de Classes](img/DiagramaDeClasses.jpeg)

## Modelo ER

![Esquema-Relacional](img/ER.png)

## Modelo Físico

O arquivo banco.sql com os scripts de criação das tabelas do banco de dados está localizado dentro da pasta docs\bd.

## Tecnologias Utilizadas

Para esse projeto foi escolhido um conjunto de tecnologias para todas as etapas do ciclo de desenvolvimento da aplicação.
Pode-se ver na figura a seguir o relacionamento entre as etapas e as tecnologias.

![Tecnologias Utilizadas](img/tecnologias-utilizadas.png)

Para o planejamento fez-se uso do Visual Studio Code como editor de texto a fim de elaborar a documentação do projeto. É ainda nessa etapa que se inicia a utilização do Trello, ferramenta que permite que a equipe visualize as tarefas, gerencie prazos, atividades concluídas.

Com o planejamento adequado e já tendo examinado os requisitos, parte-se para a etapa de concepção do design, pois já é possível considerar as configurações necessárias para atender às necessidades da aplicação. Para isso, a ferramenta Figma foi empregue. Trata-se de um editor online para criação de protótipos e design de experiência do usuário. Neste momento são criados os templates da aplicação de forma colaborativa, uma vez que a ferramenta permite o trabalho em conjunto.

Na fase de Desenvolvimento a equipe constrói o código e realiza revisão para garantir confiabilidade em todos os aspectos da solução. O código foi desenvolvido utilizando ferramenta Expo, que já traz consigo muitos recursos de forma nativa e integrada do React Native que tem como linguagem o JavaScript. O back-end da aplicação foi criado com a linguagem C#. Para armazenar e controlar versões a equipe aderiu o uso do sistema GitHub.

A utilização da ferramenta Docker se faz necessária para obter um ambiente em que os sistemas e versões diferentes conversem entre si.

Por fim, para o deploy, a equipe determinou o uso da ferramenta Microsoft Azure para publicar o aplicativo e dados.

## Hospedagem

A equipe optou pela plataforma Microsoft Azure para a hospedagem do aplicativo.

## Qualidade de Software

Para a qualidade de software a equipe será orientada pela norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126. Dessa forma, serão analisadas as seguintes características e sub-características:

### Funcionalidade
Conjunto de atributos que evidenciam a existência de um grupo de funções. As subcaracterísticas da Funcionalidade determinadas pelo time são: Adequação, Interoperabilidade e Segurança de Acesso.

### Usabilidade
Conjunto de atributos que evidenciam o esforço do usuário para utilizar a aplicação. As sub-características da Usabilidade estabelecidas pela equipe são:
Inteligibilidade e Apreensibilidade. 

### Manutenibilidade 
Atributos do software que evidenciam o esforço necessário para alterá-lo. As subcaracterísticas escolhidas pelo time são: Modificabilidade e Testabilidade.

As características e sub-características selecionadas pela equipe se deram a partir do reconhecimento que de que se trata de um projeto voltado para o desenvolvimento front-end. Dessa forma foram escolhidos os critérios com maior potencial de avaliação da qualidade do software pela equipe nesse tipo de aplicação. 

### Métricas
Nos planos de teste de software e usabilidade foram pré-determinadas em alguns casos métricas subjetivas e em outros métricas objetivas. Contudo, fica estabelecido como métrica padrão para análise da qualidade a métrica de adequação:
1- Aprovado (caso de teste aprovado e pronto para uso)
2- Aprovado com restrição (caso de teste aprovado, porém necessita de alterações pontuais para melhorar o desempenho)
3- Reprovado (caso de teste mostrou algum problema em sua execução sendo necessário a revisão).

