# Informações do Projeto
`TÍTULO DO PROJETO`  

**FINNY**

`CURSO` 

**ENGENHARIA DE SOFTWARE**

## Participantes

Membros:
* Sol Quaresma Crisóstomo
* Gabriel Azeredo Ramos Souza
* Henrique Moreira Gomes de Carvalho
* Marcos Henrique Aguiar França
* Matheus Ruas Gazire Xavier
* Nícolas Araújo Fonseca Pimenta

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
|RF-005| Controle de pagamentos pendentes | MÉDIA | 
|RF-006| Sugestão de investimentos | MÉDIA | 
|RF-007| Sugerir conteúdos sobre finanças para o site | BAIXA | 
|RF-008| Definir Entradas e saídas recorrentes | MÉDIA | 
|RF-009| Informes financeiros mensais | MÉDIA | 
|RF-010| Categorizar despesas | MÉDIA | 
|RF-011| Controle de Metas Financeiras | MÉDIA | 
|RF-012| Visualizar Gráficos Ilustrativos | ALTA | 


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

Aqui segue o projeto de interfaces. Usamos templates de gestão financeira como base para a nossa organização, e os protótipos foram feitos na plataforma Figma.
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

Nossa divisão de papéis é a seguinte

* Tech Lead e Scrum Master: Sol Quaresma Crisóstomo
* Desenvolvedores: Gabriel Azeredo Ramos Souza, Henrique Moreira Gomes de Carvalho, Marcos Henrique Aguiar França, Matheus Ruas Gazire Xavier, Nícolas Araújo Fonseca Pimenta.

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinking  | Miro |  https://miro.com/app/board/uXjVNiWnpHo=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g9-gestao-financeira | 
|Protótipo Interativo | Figma | https://www.figma.com/file/IhMlhluGKRTQhptgQpF5GZ/Project-G9?type=design&node-id=0%3A1&mode=design&t=2sgymf9iEOgLq3IT-1 | 

As ferramentas empregadas no projeto são:
- VS Code (Editor de código).
- Discord (Comunicador).
- Figma (Diagramador).
- Heroku (Hospedagem).
- Git (Versionamento).
- Github (Repositório de código).
 
O editor de código foi escolhido porque ele possui uma integração com o sistema de versão (Git).
As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas.
Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

## Controle de Versão


 A ferramenta de controle de versão adotada no projeto foi o
 [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
 foi utilizado para hospedagem do repositório `upstream`.
 
 O projeto segue a seguinte convenção para o nome de branchs:
 
 - `master`: versão estável já testada do software
 - `unstable`: versão já testada do software, porém instável
 - `testing`: versão em testes do software
 - `dev`: versão de desenvolvimento do software
 
 Quanto à gerência de issues, o projeto adota a seguinte convenção para
 etiquetas:
 
 - `bugfix`: uma funcionalidade encontra-se com problemas
 - `enhancement`: uma funcionalidade precisa ser melhorada
 - `feature`: uma nova funcionalidade precisa ser introduzida



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

Abaixo estão descritos os cenários de testes das interfaces da aplicação.

Cada cenário de teste segue o seguinte modelo: 

* Nome do Cenário de Teste
* Descrição
* Premissas
* Casos de Teste
* Passos dos casos de teste


# Cenário de Teste: Cadastro de usuário com sucesso

Descrição:

* Esse cenário almeja realizar o cadastro com sucesso de um novo usuário na aplicação.

Premissas:

* Acesso ao aplicativo
* Dados: Nome, E-mail e Senha

CT 01 - Acessar o site

* Acessar o site atráves do Url do site.

CT 02 - Acessar opção "Cadastre-se" na tela inicial

* Após carregas a página inicial, selecionar a opção "Cadastre-se"

CT 03 - Preencher o formulário de cadastro

* Preencher o campo "Usuário"
* Preencher o campo "Nome completo"
* Preencher o campo "Email"
* Preencher o campo "Senha"
* Preencher o campo "Confirmar senha"

CT 04 - Clicar no botão "Salvar" e validar retorno

* Clicar no botão "Salvar"
* Validar mensagem de "Cadastro realizado com sucesso"

# Cenário de Teste: Cadastro de usuário sem sucesso

Descrição:

* Esse cenário almeja realizar o cadastro sem sucesso de um usuário na aplicação, ou seja, o formulário deverá recusar a tentativa do cadastro.

Premissas:

* Acesso ao Site
* Dados: Nome, E-mail e Senha

CT 01 - Abrir o Site

* Acessar o site atráves da Url

CT 02 - Acessar a opção "Cadastre-se" na tela inicial

* Após carregar a página inicial, selecionar a opção "Cadastre-se"

CT 03 - Preencher apenas dois campos do formulário

* Preencher o campo "Nome"
* Preencher o campo "E-mail"

CT 04 - Clicar no botão "Cadastrar" e validar retorno

* Clicar no botão "Cadastrar"
* Validar mensagem de "todos os campos precisam ser preenchidos para se cadastrar"

# Cenário de Teste: Login de usuário com sucesso

Descrição:

* Esse cenário almeja realizar o login com sucesso de um usuário.

Premissas:

* Acesso ao Site
* Um usuário já cadastrado na aplicação
* Dados do usuário cadastrado: E-mail e Senha

CT 01 - Abrir o site

* Acessar o site através da Url

CT 02 - Acessar a opção "Faça Login" na tela inicial

* Após carregar a página inicial, selecionar a opção "Fazer Login"

CT 03 - Preencher os campos de e-mail e senha

* Preencher o campo "E-mail"
* Preencher o campo "Senha"

CT 04 - Clicar no botão "Fazer Login" e validar retorno

* Clicar no botão "Fazer Login"
* Validar mensagem de "Logado com sucesso"

# Cenário de Teste: Login de usuário sem sucesso

Descrição:

* Esse cenário almeja realizar o login sem sucesso de um usuário, ou seja, recusar o login do usuário por dados errados inseridos.

Premissas:

* Acesso ao site
* Dados: E-mail e Senha

CT 01 - Abrir o site

* Acessar o site através da url

CT 02 - Acessar a opção "Faça Login" na tela inicial

* Após carregar a página inicial, selecionar a opção "Fazer Login"

CT 03 - Preencher os campos de e-mail e senha com dados errados

* Preencher o campo "E-mail" com e-mail não cadastrado
* Preencher o campo "Senha" com senha incorreta

CT 04 - Clicar no botão "Fazer Login" e validar retorno

* Clicar no botão "Fazer Login"
* Validar mensagem de "Login falhou! Confira os dados inseridos e tente novamente".

# Cenário de Teste: Cadastro de Movimentação Financeira

Descrição:

* Esse cenário almeja realizar o cadastro de uma movimentação financeira a partir dos dados fornecidos pelo usuário.

Premissas:

* Acesso ao site
* Usuário já logado no site
* Dados: data, valor, titulo da movimentação

CT 01 - Acessar a funcionalidade "Movimentações"

* Acessar o campo "Movimentações" na tela incial após login

CT 02 - Acessar a opção "Cadastrar Nova Movimentação" na tela inicial

* Após carregar a tela inicial da pagina de movimentações acessar a opção "Cadastrar Nova Movimentação"

CT 03 - Preencher os campos de data, despera ou receita, valor, título, definir recorrência e descrição

* Preencher o campo "Data" com a data desejada
* Preencher o campo "Despesa ou receita" de acordo com o tipo da movimentação
* Preencher o campo "Valor" com o valor da movimentação
* Preencher o campo "Título" com o título da movimentação
* Selecionar o campo "Definir recorrência" sendo ativado como recorrente. 
* Preencher o campo "Descrição" com o detalhamento sobre aquela movimentação

CT 04 - Clicar no botão "Criar" e validar retorno

* Clicar no botão "Criar"
* Validar mensagem de "Nova movimentação cadastrada com sucesso!".

# Cenário de Teste: Cadastro de Movimentação Financeira sem sucesso

Descrição:

* Esse cenário almeja realizar o cadastro de movimentação sem sucesso

Premissas:

* Acesso ao site
* Usuário já logado no site

CT 01 - Acessar a funcionalidade "Movimentações"

* Acessar o campo "Movimentações" na tela incial após login

CT 02 - Acessar a opção "Cadastrar Nova Movimentação" na tela inicial

* Após carregar a tela inicial da pagina de movimentações acessar a opção "Cadastrar Nova Movimentação"

CT 03 - Não preencher os campos de data, despera ou receita, valor, título, definir recorrência e descrição

* Não Preencher o campo "Data" com a data desejada
* Não Preencher o campo "Despesa ou receita" de acordo com o tipo da movimentação
* Não Preencher o campo "Valor" com o valor da movimentação
* Não Preencher o campo "Título" com o título da movimentação
* Não Selecionar o campo "Definir recorrência" sendo ativado como recorrente. 
* Não Preencher o campo "Descrição" com o detalhamento sobre aquela movimentação

CT 04 - Clicar no botão "Criar" e validar retorno

* Clicar no botão "Criar"
* Validar mensagem de "Dados inválidos".

# Cenário de Teste: Cadastro de Categoria de Pagamento

Descrição:

* Esse cenário almeja realizar o cadastro de uma categoria de pagamento.

Premissas:

* Acesso ao site
* Usuário já logado no site

CT 01 - Acessar a funcionalidade "Pagamentos"

* Acessar o campo "Pagamentos" na tela incial após login

CT 02 - Acessar a opção "Cadastrar" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Cadastrar"

CT 03 - Preencher os campos Nome e Categoria

* Preencher o campo "Nome" com o titulo do pagamento
* Preencher o campo "Categoria" com a categoria desejada

CT 04 - Clicar no botão "Cadastrar Categoria" e validar retorno

* Clicar no botão "Cadastrar categoria"
* Validar lista na tela inicial mostrando a categoria inserida

# Cenário de Teste: Edição de Categoria de Pagamento 

Descrição:

* Esse cenário almeja realizar o cadastro de uma categoria de pagamento sem sucesso

Premissas:

* Acesso ao site
* Usuário já logado no site
* Ter uma categoria já cadastrada

CT 01 - Acessar a funcionalidade "Pagamentos"

* Acessar o campo "Pagamentos" na tela incial após login

CT 02 - Acessar a opção "Editar" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Editar"

CT 03 - Preencher os campos Nome e Categoria

* Preencher o campo "Nome" com o nome alternativo
* Preencher o campo "Categoria" com a nova categoria 

CT 04 - Clicar no botão "Atualizar" e validar retorno

* Clicar no botão "Atualizar"
* Validar lista na tela inicial mostrando a categoria com os novos dados

# Cenário de Teste: Exclusão de Categoria de Pagamento 

Descrição:

* Esse cenário almeja realizar a exclusão de uma categoria cadastrada

Premissas:

* Acesso ao site
* Usuário já logado no site
* Ter uma categoria já cadastrada

CT 01 - Acessar a funcionalidade "Pagamentos"

* Acessar o campo "Pagamentos" na tela incial após login

CT 02 - Acessar a opção "Excluir" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Excluir"

CT 03 - Confirmar a exlusão

* Selecionar o campo "OK"
* Validar mensagem de "Deseja excluir um pagamento pendente?".

CT 04 - Clicar no botão "OK" e validar retorno

* Clicar no botão "OK"
* Validar a exclusão daquala categoria

# Cenário de Teste: Cadastro de Pagamento Pendente

Descrição:

* Esse cenário almeja realizar o cadastro de um pagamento pendente

Premissas:

* Acesso ao site
* Usuário já logado no site

CT 01 - Acessar a funcionalidade "Pagamentos"

* Acessar o campo "Pagamentos" na tela incial após login

CT 02 - Acessar a opção "Cadastrar" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Cadastrar"

CT 03 - Preencher os campos Nome e Valor

* Preencher o campo "Nome" com o titulo do pagamento
* Preencher o campo "Valor" com o valor relacionado

CT 04 - Clicar no botão "Cadastrar Pagamento" e validar retorno

* Clicar no botão "Cadastrar pagamento"
* Validar lista na tela inicial mostrando o pagamento inserido

# Cenário de Teste: Edição de Pagamento Pendente

Descrição:

* Esse cenário almeja realizar a edição um pagamento pendente

Premissas:

* Acesso ao site
* Usuário já logado no site
* Ter um pagamento já cadastrado

CT 01 - Acessar a funcionalidade "Pagamentos"

* Acessar o campo "Pagamentos" na tela incial após login

CT 02 - Acessar a opção "Editar" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Editar"

CT 03 - Preencher os campos Nome e Valor

* Preencher o campo "Nome" com o nome alternativo
* Preencher o campo "Valor" com o novo valor

CT 04 - Clicar no botão "Atualizar" e validar retorno

* Clicar no botão "Atualizar"
* Validar lista na tela inicial mostrando a categoria com os novos dados

# Cenário de Teste: Exclusão de Pagamento Pendente

Descrição:

* Esse cenário almeja realizar a exclusão de um pagamento cadastrado

Premissas:

* Acesso ao site
* Usuário já logado no site
* Ter um pagamento já cadastrado

CT 01 - Acessar a funcionalidade "Pagamentos"

* Acessar o campo "Pagamentos" na tela incial após login

CT 02 - Acessar a opção "Excluir" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Excluir"

CT 03 - Confirmar a exclusão

* Selecionar o campo "OK"
* Validar mensagem de "Deseja excluir um pagamento pendente?".

CT 04 - Clicar no botão "OK" e validar retorno

* Clicar no botão "OK"
* Validar a exclusão daquala categoria

# Cenário de Teste: Cadastro de Metas Financeiras

Descrição:

* Esse cenário almeja realizar o cadastro de uma meta financeira

Premissas:

* Acesso ao site
* Usuário já logado no site

CT 01 - Acessar a funcionalidade "Metas"

* Acessar o campo "Metas" na tela incial após login

CT 02 - Acessar a opção "Cadastrar" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Cadastrar"

CT 03 - Preencher os campos Nome, objetivo, valor

* Preencher o campo "Nome da Meta" com o titulo da meta
* Preencher o campo "Objetivo" com o objetivo relacionado
* Preencher o campo "Valor inicial" com o valor relacionado

CT 04 - Clicar no botão "Cadastrar" e validar retorno

* Clicar no botão "Cadastrar"
* Validar mensagem de "Meta salva com sucesso!"

# Cenário de Teste: Edição de metas financeiras

Descrição:

* Esse cenário almeja realizar a edição de metas já cadastradas

Premissas:

* Acesso ao site
* Usuário já logado no site
* Possuir uma meta já cadastrada

CT 01 - Acessar a funcionalidade "Metas"

* Acessar o campo "Metas" na tela incial após login

CT 02 - Acessar a opção "Editar(icone de lápis)" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Editar(icone de lápis)"

CT 03 - Preencher os campos Nome e objetivo

* Preencher o campo "Nome da Meta" com o titulo da meta
* Preencher o campo "Objetivo" com o objetivo relacionado

CT 04 - Clicar no botão "Editar" e validar retorno

* Clicar no botão "Editar"
* Validar mensagem de "Meta atualizada com sucesso!"

# Cenário de Teste: Acrescimo e Decrescimo no valor insirido nas metas cadastradas

Descrição:

* Esse cenário almeja realizar a adição ou redução dos valores nas metas cadastradas

Premissas:

* Acesso ao site
* Usuário já logado no site
* Possuir uma meta já cadastrada

CT 01 - Acessar a funcionalidade "Metas"

* Acessar o campo "Metas" na tela incial após login

CT 02 - Acessar a opção "(+) ou (-)" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "(+) ou (-)"

CT 03 - Preencher o campo de valor

* Preencher o campo "Decréscimo Monetario/Acréscimo Monetario" com o valor relacionado

CT 04 - Clicar no botão "Atualizar" e validar retorno

* Clicar no botão "Atualizar"
* Validar mensagem de "Valor atualizado com sucesso!"

# Cenário de Teste: Exclusão de Meta Financeira

Descrição:

* Esse cenário almeja realizar a exclusão de uma meta financeira cadastrada

Premissas:

* Acesso ao site
* Usuário já logado no site
* Ter um pagamento já cadastrado

CT 01 - Acessar a funcionalidade "Metas"

* Acessar o campo "Metas" na tela incial após login

CT 02 - Acessar a opção "Excluir(simbolo de lixeira)" na tela inicial 

* Após carregar a tela inicial da pagina de Pagamentos acessar a opção "Excluir(simbolo de lixeira)"

CT 03 - Validar retorno

* Validar a exclusão daquala categoria ausente

# Cenário de Teste: Sugestão Financeira

Descrição:

* Esse cenário almeja sugerir uma direção finaceira a pártir de um objetivo cadastrado

Premissas:

* Acesso ao site
* Usuário já logado no site

CT 01 - Acessar a funcionalidade "investimentos"

* Acessar o campo "Investimentos" na tela incial após login

CT 02 - Preencher os campos Objetivo, tempo, risco e valor

* Preencher o campo "Objetivo Financeiro" com o valor objetivo
* Preencher o campo "Meses Disponiveis para o investimento" com os meses de prazo
* Preencher o campo "Escolhar o risco de investimento" com o grau de risco 
* Preencher o campo "Valor dos aportes" com o valor relacionado

CT 03 - Clicar no botão "Sugerir" e validar retorno

* Clicar no botão "Sugerir"
* Validar mensagem de sugestão apresentada.

# Cenário de Teste: Simular Investimento

Descrição:

* Esse cenário almeja realizar simulação de um investimento baseado em algumas metricas fincanceiras

Premissas:

* Acesso ao site
* Usuário já logado no site

CT 01 - Acessar a funcionalidade "Simulação"

* Acessar o campo "Simulação" na tela incial após login

CT 02 - Preencher os campos valores, tipo de aplicação e tempo

* Preencher o campo "Valor aplicado Inicialmente" com o valor inicial
* Preencher o campo "Valor dos aportes mensais" com o valor dos aportes
* Preencher o campo "Tipos de aplicação" com o tipo de métrica
* Preencher o campo "Tempo de aplicação" com o tempo de aplicação

CT 04 - Clicar no botão "Calcular" e validar retorno

* Clicar no botão "Calcular"
* Validar resultado apresentado baseado nos dados inseridos


## Registros de Testes

Registro de Testes de Usabilidade - Finny 

Participante 1

Feedback:

Acesso ao aplicativo foi fácil e rápido.
Adicionar uma movimentação financeira foi bem intuitivo, o botão "Cadastrar" estava bem visível.
Editar uma movimentação foi simples, o botão "Atualizar" está bem destacado.
Remover uma nota foi direto, o campo de "Excluir" era claro com cores relacionais.
No geral, a funcionalidade é bastante útil para organizar minhas movimentações fincanceiras.

Participante 2

Feedback:

Encontrei dificuldades para fazer login no aplicativo, não encontrei como eu poderia recuperar minha senha.
Uma vez logado, a navegação foi tranquila.
Adicionar um pagamento foi simples e direto, sem complicações.
Editar um pagamento temabém foi tranquilo, o botão "Atualizar" cumpre seu papel.
Remover um pagamento foi fácil e rápido.
Acho que com um pouco de prática, o aplicativo seria muito útil para organizar finanças.

Participante 3

Feedback:

O processo de login foi suave, sem problemas.
A interface para adicionar metas era clara e fácil de entender.
Edição de metas foi simples, e o botão "Cadastrar" estava bem evidente.
Remoção de metas foi direta e intuitiva.
Achei a linha de progressão de objetivo muito importante e recompensadora.
No geral, gostei da experiência e consideraria usar o aplicativo para minha organização pessoal.

Participante 4

Feedback:

Acesso ao aplicativo foi fácil.
Registrar uma categoria foi fácil e intuitivo, o campo "Insira o valor" e o botão "Adicionar categoria" estavam bem visíveis.
Editar uma categoria foi simples e eficiente, com a opção de edição acessível diretamente na lista de categorias.
Excluir uma categoria foi rápido e eficiente, gostei da segunda confirmação, evita uma exclusão errada.
A experiência geral de usar a funcionalidade de cadastro de categorias é positiva, contribuindo para um melhor controle financeiro.

Participante 5

Feedback:

O processo de login foi eficaz.
Simular um investimento foi simple e eficaz.
A escolha do tipo de aplicação é bem clara, mas poderia haver mais opções de métricas.
Gostei que o resultado é exibido na prórpia página, mas gostaria de explorar mais as possíbilidades de váriação.
O aplicativo permite adicionar descrição às despesas, o que ajuda a contextualizar cada gasto.
A experiência geral de usar a funcionalidade de simulação de invesitimentos é positiva e consideraria usar para meu controle pessoal.



# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
