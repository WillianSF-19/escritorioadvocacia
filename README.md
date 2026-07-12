# Site Escritório de Advocacia

Landing page fictícia de um escritório jurídico, desenvolvida exclusivamente para fins de estudo e portfólio. O projeto apresenta uma interface institucional voltada ao Direito de Família, com conteúdo demonstrativo e integração técnica com o WhatsApp.

> **Aviso:** este é um projeto fictício. O nome profissional, a OAB, os depoimentos, o telefone, o endereço, o e-mail, as redes sociais e as demais informações comerciais são fictícios e utilizados somente para demonstração.

## Objetivos

- Apresentar uma interface institucional jurídica.
- Demonstrar áreas de atuação.
- Apresentar um fluxo de atendimento.
- Demonstrar contato por WhatsApp.
- Praticar HTML, CSS, JavaScript, responsividade, acessibilidade e SEO.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro

## Funcionalidades

- Navegação interna entre as seções da página.
- Menu responsivo com controle de abertura e fechamento.
- Apresentação das áreas de atuação em Direito de Família.
- Exibição do processo demonstrativo de atendimento.
- Depoimentos demonstrativos.
- Perguntas frequentes com os elementos nativos `details` e `summary`.
- CTAs demonstrativos que montam links para o WhatsApp.
- Botão flutuante de acesso ao WhatsApp.
- Atualização automática do ano no rodapé.
- Suporte à navegação por teclado, com foco visível e link para pular ao conteúdo.
- Fechamento do menu móvel por link, clique externo ou tecla `Escape`.
- Retorno do foco ao botão do menu após o fechamento por teclado.
- Suporte à preferência de redução de movimento do sistema operacional.

## Estrutura do projeto

```text
escritorioadvocacia/
├── css/
│   └── style.css
├── img/
│   ├── servicos/
│   │   ├── servico-divorcio.jpg
│   │   ├── servico-guarda.jpg
│   │   ├── servico-mediacao.jpg
│   │   ├── servico-partilha.jpg
│   │   ├── servico-pensao.jpg
│   │   └── servico-uniao.jpg
│   ├── adv.001.jpg
│   ├── adv.002.jpg
│   └── favicon.svg
├── js/
│   └── main.js
├── .gitignore
├── index.html
└── README.md
```

## Execução local

Clone o repositório utilizando a URL correspondente:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd escritorioadvocacia
```

No Visual Studio Code, instale a extensão **Live Server**, abra o arquivo `index.html` e selecione **Open with Live Server**.

O uso de um servidor local é recomendado para evitar possíveis restrições do protocolo `file://` na navegação interna e no carregamento dos recursos.

## Acessibilidade

O projeto inclui:

- HTML semântico e hierarquia de títulos.
- Link para pular diretamente ao conteúdo principal.
- Indicadores visíveis de foco.
- Textos alternativos nas imagens.
- Nome acessível nos controles e indicação de links que abrem em nova aba.
- Estado expandido sincronizado no menu móvel.
- Fechamento do menu com `Escape` e retorno de foco ao controle.
- Componentes nativos `details` e `summary` na FAQ.
- Texto acessível para a avaliação representada por estrelas.
- Suporte a `prefers-reduced-motion`.

## SEO

A página possui fundamentos básicos de SEO, incluindo idioma `pt-BR`, codificação UTF-8, viewport responsiva, título, meta description, hierarquia de títulos e conteúdo principal identificado semanticamente.

Canonical, metadados sociais e dados estruturados de negócio devem ser configurados somente quando houver um domínio definitivo e dados profissionais reais e verificáveis.

## Responsividade

O layout utiliza grades flexíveis e media queries para se adaptar a computadores, tablets e celulares. A navegação passa a utilizar um menu móvel em telas menores, e os blocos de conteúdo são reorganizados conforme o espaço disponível.

## WhatsApp demonstrativo

O número `5599999999999` é somente um placeholder demonstrativo usado para apresentar tecnicamente a montagem dos links `wa.me`. Ele deve ser substituído por um contato autorizado antes de qualquer uso real. Não envie mensagens para o número placeholder.

## Melhorias futuras

Os itens abaixo são sugestões e ainda não fazem parte do projeto:

- Adicionar testes automatizados de acessibilidade e regressão visual.
- Otimizar imagens e oferecer formatos modernos quando houver ativos definitivos.
- Autohospedar as fontes para reduzir dependências externas.
- Configurar canonical e metadados sociais após a definição de um domínio real.
- Adicionar dados estruturados somente após a existência de uma entidade profissional real e verificável.
- Avaliar um formulário de contato com validação, privacidade e processamento seguro.

## Autoria

Willian da Silva Figueiredo
