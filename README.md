# Desafio Técnico - Angular CNI

**Sistema de Gestão de Chamados**

Sistema desenvolvido para gerenciamento de chamados de suporte técnico, permitindo criação, visualização, filtragem e acompanhamento de tickets por categoria.

## Sumário

- [Desktop](#desktop)
- [Mobile](#mobile)
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas e Justificativas](#tecnologias-utilizadas-e-justificativas)
- [Instalação e Execução](#instalação-e-execução)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API](#api)
- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Comunicação entre Componentes](#comunicação-entre-componentes)
- [Otimizações Implementadas](#otimizações-implementadas)
- [Validações de Formulário](#validações-de-formulário)
- [Design e Responsividade](#design-e-responsividade)
- [Componentes PrimeNG Utilizados](#componentes-primeng-utilizados)
- [Uso de IA](#uso-de-ia)
- [Autor](#autor)

## Desktop

![Lista de Chamados](https://github.com/EmanuelBitenc/ImagesProject/blob/main/sistemadechamados/Sistema_de_Chamados1.png?raw=true)

![Novo Chamado](https://github.com/EmanuelBitenc/ImagesProject/blob/main/sistemadechamados/Sistema_de_Chamados2.png?raw=true)

## Mobile

<p align="center">
  <img src="https://github.com/EmanuelBitenc/ImagesProject/blob/main/sistemadechamados/Sistema_de_Chamados_mobile2.png?raw=true" width="300" style="margin: 0 10px;" />
  <img src="https://github.com/EmanuelBitenc/ImagesProject/blob/main/sistemadechamados/Sistema_de_Chamados_mobile1.png?raw=true" width="300" />
</p>

## Sobre o Projeto

Plataforma completa para gestão de chamados de TI que permite aos usuários criar novos tickets, visualizar chamados existentes com filtros, e acompanhar métricas através de cards resumidos por categoria. O sistema oferece persistência local de dados e uma interface moderna e responsiva.

## Tecnologias Utilizadas e Justificativas

- **Angular** (v21.0.2) - Framework principal, resolvi utilizar a versão mais recente, mesmo utilizando de estruturas mais classicas como o Constructor.

- **TypeScript** - Linguagem de programação com tipagem.

- **TailwindCSS** - Escolhido por domínio pessoal da tecnologia e principalmente pelo suporte a responsividade através de breakpoints (`sm:`, `md:`, `lg:`), permitindo criar layouts adaptativos de forma mais rápida e eficiente.

- **PrimeNG** - Biblioteca de componentes UI especificada como requisito do desafio, a versão mais recente não tinha compatibilidade com a vversão mais recente do Angular, foi necessario usar uma especifica.

- **RxJS** - Gerenciamento de operações assíncronas (chamadas HTTP), permitindo programação reativa com Observables.

- **Angular Reactive Forms** - Utilizado pela validação de formulários com controle sobre o estado. Permite implementar validações síncronas e assíncronas facilmente.

- **LocalStorage API** - Implementado para simular persistência real de chamados criados pelo usuário. Permite que os dados permaneçam mesmo após recarregar a página, proporcionando uma experiência mais próxima de um sistema real com backend.

- **Angular Router com Preloading** - Configurado com `PreloadAllModules` para otimizar a navegação. Resolve o problema de delay na primeira vez que acessamos a tela de "Novo Chamado", carregando todas as rotas em background após a inicialização, resultando em navegação instantânea.

- **ChangeDetectorRef** - Utilizado para controle fino da detecção de mudanças do Angular. Necessário para evitar o erro NG0100 (ExpressionChangedAfterItHasBeenCheckedError) ao atualizar dados assíncronos e garantir que a UI seja atualizada corretamente após operações como criação e conclusão de chamados.

## Instalação e Execução

### Pré-requisitos

- Node.js (v18+)
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/EmanuelBitenc/Gerenciamento-Chamados

# Entre na pasta do projeto
cd Gerenciamento-Chamados

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
 npm start
 ou
 ng serve
```

Acesse `http://localhost:4200/` no navegador. A aplicação recarrega automaticamente ao modificar os arquivos.

### Build de Produção

```bash
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`.

## Funcionalidades Implementadas

### 1. Lista de Chamados

- Cards resumo por categoria (Performance, Acesso, Funcionalidade, Infraestrutura)
- Listagem paginada de chamados (6 por página)
- Ordenação automática por ID decrescente (mais recentes primeiro)
- Sistema de filtros em tempo real:
  - Busca por título ou ID
  - Filtro por categoria
- Mensagem informativa quando nenhum resultado é encontrado

### 2. Criação de Chamados

- Formulário validado com Reactive Forms
- Validações:
  - Título: obrigatório, mínimo 3 caracteres
  - Descrição: obrigatória, mínimo 10 caracteres
  - Categoria: obrigatória (seleção entre 4 opções)
- Toast de confirmação em azul após criação
- Navegação automática para lista (com delay para visualizar toast)
- Persistência automática no LocalStorage

### 3. Sistema de Filtros

- Filtro de pesquisa por texto (título ou ID)
- Filtro por categoria dropdown
- Combinação de múltiplos filtros
- Reset automático de paginação ao filtrar
- Atualização instantânea dos resultados

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/                    # Componentes reutilizáveis
│   │   ├── cards-chamados/            # Cards de exibição de chamados
│   │   ├── chamados-cards-resume/     # Cards de resumo por categoria
│   │   ├── filter-lista-chamados/     # Sistema de filtros
│   │   ├── headerpages/               # Cabeçalho das páginas
│   │   └── sidebar-itens/             # Itens da navegação lateral
│   ├── core/
│   │   ├── model/                     # Interfaces e tipos TypeScript
│   │   │   ├── chamado.ts             # Interface Chamado
│   │   │   └── filtrosChamado.ts      # Interface de filtros
│   │   │   └── categoria.ts           # Interface de categorias
│   │   └── services/                  # Serviços da aplicação
│   │       └── chamado-service/       # Service de gerenciamento de chamados
│   ├── layout/
│   │   └── sidebar/                   # Layout da barra lateral
│   ├── pages/                         # Páginas da aplicação
│   │   ├── lista-chamados/            # Página de listagem
│   │   └── novo-chamado/              # Página de criação
│   └── shared/                        # Recursos compartilhados
└── styles.css                         # Estilos globais com Tailwind
```

## API

A aplicação consome dados de uma API mockada hospedada no GitHub:

**Base URL**: `https://emanuelbitenc.github.io/ImagesProject/`

**Endpoint principal**:

- `/datamock.json` - Lista de chamados mockados

Os dados retornados da API são combinados com os chamados criados localmente (armazenados no LocalStorage) para exibição completa.

## Gerenciamento de Estado

### LocalStorage

**Chave**: `'chamados-locais'`

**Formato**: Array de objetos Chamado

**Operações**:

- Salvamento automático ao criar novo chamado
- Geração automática de IDs únicos
- Merge com dados da API no carregamento

### ChangeDetectorRef

Utilizado estrategicamente para:

- Garantir atualização da UI após operações assíncronas
- Evitar erro NG0100 (ExpressionChangedAfterItHasBeenCheckedError)
- Sincronizar estado dos componentes filho e pai
- Atualizar contadores de categoria em tempo real

## Comunicação entre Componentes

### Padrão @Input / @Output

```typescript
// Componente filho recebe dados do pai
@Input() chamadosFiltrados: Chamado[] = [];

// Componente filho notifica o pai de eventos
@Output() concluirChamado = new EventEmitter<number>();
```

### Fluxo de Dados

```
lista-chamados (componente pai)
    ↓ [chamadosFiltrados] - passa dados filtrados
cards-chamados (componente filho)
    ↑ (concluirChamado) - emite evento de conclusão
lista-chamados (componente pai)
```

## Otimizações Implementadas

### 1. Preload de Módulos

```typescript
provideRouter(routes, withPreloading(PreloadAllModules));
```

- Carrega todas as rotas em background após inicialização
- Navegação instantânea entre páginas
- Elimina delay ao acessar "Novo Chamado" pela primeira vez

### 2. Ordenação Automática

```typescript
chamados.sort((a, b) => b.id - a.id);
```

- Chamados mais recentes aparecem primeiro
- Facilita localização de tickets criados recentemente

### 3. Detecção de Mudanças Otimizada

- Uso estratégico de `ChangeDetectorRef.detectChanges()`
- Evita renderizações desnecessárias
- Garante consistência da UI

## Validações de Formulário

### Novo Chamado

```typescript
chamadoForm = this.fb.group({
  titulo: ['', [Validators.required, Validators.minLength(3)]],
  descricao: ['', [Validators.required, Validators.minLength(10)]],
  categoria: [null, [Validators.required]],
});
```

**Mensagens de erro**:

- Exibidas apenas após campo ser tocado (touched)
- Feedback visual em vermelho
- Botão de submit desabilitado enquanto formulário inválido

## Design e Responsividade

### TailwindCSS

- Utilitários para layouts responsivos
- Grid system adaptativo
- Dark mode support
- Customização de cores e temas

### PrimeNG Theme

Customização do tema Aura com cores primárias azuis:

```typescript
const CustomAuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50-950: '{blue.50-950}'
    }
  }
});
```

## Componentes PrimeNG Utilizados

- **p-card** - Cards e containers
- **p-button** - Botões de ação
- **p-select** - Dropdown de categorias
- **p-paginator** - Paginação
- **p-toast** - Notificações toast
- **p-divider** - Separadores visuais
- **p-tag** - Tags de categoria
- **p-floatlabel** - Labels flutuantes em inputs
- **p-textarea** - Área de texto

## Uso de IA

Durante o desenvolvimento, foram utilizadas ferramentas de IA como apoio:

### Ferramentas utilizadas:

**GitHub Copilot**:

- Autocompletar código e sugestões de implementação
- Esclarecimento de conceitos do Angular
- Geração de interfaces TypeScript
- Revisão de código e boas práticas

**Claude Sonnet**:

- Solução de problemas complexos (NG0100, ciclo de vida)
- Implementação de padrões de comunicação entre componentes
- Otimizações de performance
- Apoio na documentação PrimeNG

### Exemplos de uso:

- Estruturação inicial de layout
- Apoio com mensagens de erro de melhorias de código
- Configuração do PrimeNG e Tailwind
- Validações com Reactive Forms
- Gerenciamento de estado com ChangeDetectorRef
- Sistema de EventEmitter para comunicação entre componentes
- Persistência com LocalStorage
- Apoio na escrita do README

### Decisões baseadas em IA:

- Uso de `PreloadAllModules` para navegação instantânea
- Implementação de `ChangeDetectorRef` para evitar erro NG0100
- Estrutura de pastas por feature (components, pages, core)
- Ordenação automática por ID decrescente

**Nota**: Todo código gerado por IA foi cuidadosamente revisado, validado e adaptado para o contexto do projeto. A IA foi utilizada como ferramenta de apoio e aprendizado, não como substituta do desenvolvimento.

### Percentual de Desenvolvimento

**Código desenvolvido pelo desenvolvedor: ~75%**

- Implementação completa da lógica de negócio
- Estruturação de componentes e serviços
- Integração entre componentes (Input/Output)
- Implementação de filtros e paginação
- Persistência em LocalStorage
- Configuração de rotas e navegação
- Estilização personalizada com Tailwind
- Resolução de problemas e debugging

**Código auxiliado por IA: ~25%**

- Sugestões de autocompletar (GitHub Copilot)
- Estruturas iniciais de formulários
- Configurações do PrimeNG
- Solução de erros específicos (NG0100)
- Otimizações pontuais (PreloadAllModules, ChangeDetectorRef)
- Escrita da documentação (README)

**Observação**: A IA foi utilizada principalmente como ferramenta de produtividade para acelerar tarefas repetitivas e esclarecer conceitos, mas toda a arquitetura, lógica e decisões de design foram realizadas pelo desenvolvedor.

## Autor

**Emanuel Bitencourt**

- GitHub: [@EmanuelBitenc](https://github.com/EmanuelBitenc)
- LinkedIn: [Emanuel Bitencourt](https://www.linkedin.com/in/emanuelbitencourt/)

