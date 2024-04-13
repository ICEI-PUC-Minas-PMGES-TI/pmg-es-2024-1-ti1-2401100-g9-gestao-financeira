# Informações do Projeto
`TÍTULO DO PROJETO`  

**FINNY**

`CURSO` 

**ENGENHARIA DE SOFTWARE**

## Participantes

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua a lista dos membros da equipe com seus nomes completos.
>
> Os membros do grupo são: 
> - Fulano da Silva
> - Ciclano Albuquerque

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A gestão financeira é uma questão muito ampla, que contém dentro de si diversos problemas. Seja gerir entradas e saídas de dinheiro, acompanhar o balanço financeiro mês a mês, planejar investimentos e tantos outros desafios. Esse problema pode ser abordado de diversas formas, e há diversas formas de colocar as finanças em dia, mas como estamos em um contexto de engenharia de software, optamos por uma abordagem tecnológica, para uso doméstico ou em pequenas empresas.

## Objetivos

Nossa finalidade é descomplicar a gestão financeira, e o faremos através de uma solução de software.

Para atingir esse objetivo nós vamos:
* Facilitar acompanhamento de entradas e saídas de dinheiro.
* Orientar com investimentos.
* Disponibilizar informes e conteúdos educativos sobre finanças.

## Justificativa

Nosso sistema vem da necessidade por maior controle e ciência das finanças, assim como a falta de direcionamento com relação a investimentos. Esses pontos foram identificados por meio da entrevistas e pesquisas (usando o google forms) que colocaram em evidência alguns pontos importantes:

* A maioria dos entrevistados não são versados em questões fiscais, investimentos e juros.
* A maioria dos entrevistados não investe.
* A maioria dos entrevistados tem dificuldade em gerenciar gastos e definir orçamentos.

Esses dados coletados colocam em evidência a necessidade de uma solução que consiga educar os usuários sobre assuntos relacionados às finanças, facilitar investimentos, e prover uma forma de gerenciar gastos e orçamentos.

## Público-Alvo

O público alvo do nosso sistema é definido por algumas questões-chave:

* Abertura para usar uma nova ferramenta totalmente digital para controle das finanças
* Familiaridade com tecnologia e a web
* Necessidade de controlar seu dinheiro (ou seja, não ter dinheiro em abundância)
* Falta de estabilidade e/ou necessidade de mais segurança

Tendo isso em vista, colocamos nosso principal público alvo como:
* Jovens
* Estudantes
* Pequenos Empreendedores (MEI especialmente)
* Investidores iniciantes
* Profissionais CLT
* Profissionais Liberais

# Especificações do Projeto

Nessa seção se encontra a especificação do projeto. Para chegar nos dados apresentados, utilizamos o processo de Design Thinking e conceitos do framework Scrum.
## Personas e Mapas de Empatia

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/f5e7f838-4897-45aa-9566-82ab90a54bf8)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/9db30b50-712e-4f31-8069-e17fc80791db)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/7198f5ee-6446-4f78-be18-1e7812860a7d)



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`               |PARA ... `MOTIVO/VALOR`                                              |
|--------------------|--------------------------------------------------|---------------------------------------------------------------------|
|Usuário típico      | Cadastrar minhas movimentações financeiras       | Saber pra onde vai meu dinheiro                                     |
|Usuário típico      | Acompanhar meu saldo X minhas despesas           | Poder planejar meus gastos futuros                                  |
|Usuário típico      | Ver gráficos que ilustrem meus gastos            | Entender a relação gastos x saldo                                   |
|Usuário típico      | Simular investimentos                            | Prever meus rendimentos e me planejar                               |
|Usuário típico      | Me instruir sobre finanças                       | Entender os processos e termos técnicos                             |
|Usuário típico      | Sugerir conteúdos sobre finanças para a aplicação| Auxiliar o aprendizado de outros usuários                           |
|Usuário típico      | Definir entradas e saídas recorrentes            | Não cadastrar a mesma movimentação todo mês                         |
|Usuário típico      | Saber o melhor investimento para mim             | Não escolher investimentos ruins                                    |
|Usuário típico      | Gerar informes financeiros de cada mês           | Manter arquivos para consultas futuras                              |
|Usuário típico      | Consultar resumos das finanças na aplicação      | Ter acesso às informações em grande volume e de forma rápida        |
|Usuário típico      | Receber alertas de pagamentos pendentes          | Não me esquecer de pagar despesas importantes                       |
|Usuário típico      | Categorizar meus gastos                          | Definir e organizar o que posso ou não retirar do orçamento         |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de movimentações financeiras | ALTA | 
|RF-002| Tela de acompanhamento de saldo X despesas | ALTA | 
|RF-003| Simnular investimentos | ALTA | 
|RF-004| Aba de educação sobre finanças | MÉDIA | 
|RF-005| Receber alertas de pagamentos pendentes | MÉDIA | 
|RF-006| Sugestão de investimentos | MÉDIA | 
|RF-006| Visualizar Gráficos Ilustrativos | ALTA | 
|RF-007| Sugerir conteúdos sobre finaças para o site | BAIXA | 
|RF-008| Definir Entradas e saídas recorrentes | MÉDIA | 
|RF-009| Informes financeiros mensais | MÉDIA | 
|RF-010| Categorizar despesas | MÉDIA | 
|RF-011| Resumos financeiros mensais | MÉDIA | 
|RF-012| Alertas de pagamentos pendentes | BAIXA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| As interfaces devem seguir os protótipos |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O sistema não consegue interagir diretamente com sistemas de bancos |
|04| As informações do usuário serão persistentes somente para o mesmo |

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/d3fb94cc-3e1e-46d1-9059-35e1f242e2bf)

## Wireframes
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/a7c4ade6-e37f-46b7-9939-67220760f44f)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/b9bad3a6-d6e9-42bc-b772-4beba6ea466b)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/0ec28b15-52be-4e32-bc9d-1a600e98bfbd)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/883acdcd-2ce1-4c4b-9014-d47352f31a40)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/6c9efff1-8fd7-4558-94df-f270c3c85609)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/63a40168-00f7-4dd0-acb5-eb437ceb6992)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira/assets/72227382/024ce3f3-2c8f-45b4-84c3-e91495a4a030)

# Metodologia

Para o desenvolvimento do projeto utilizamos o framework de Design Thinking, e para a gestão de projetos usamos o SCRUM.

No processo de Design Thinking cumprimos as etapas de Entendimento e Exploração. 
Na etapa de Entendimento conseguimos explorar possibilidades relacionadas à Gestão Financeira, expandimos nosso conhecimento sobre o tema, realizamos pesquisas e entrevistas e montamos personas.
Na etapa de Exploração definimos ideias e possíveis soluções para nossos clientes, e conseguimos mapear quais seriam mais ou menos proveitosas, com base em uma razão de Custo X Impacto.

Para a gestão de projetos, vamos utilizar o SCRUM, com reuniões de planejamento semanais, e acompanhamento diário feito de forma assíncrona. O controle das histórias de usuários e backlog será feito pelo Github.

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
