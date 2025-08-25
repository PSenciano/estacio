# Catálogo de Livros — Exercício Angular

Este pacote contém os arquivos de **código-fonte** para você colar em um projeto criado com o Angular CLI,
seguindo as instruções das imagens.

## Como usar

1) Crie o projeto base com o Angular CLI (escolha **Yes** para routing e **CSS**):
```bash
ng new livros-angular
# Angular routing: Yes
# Styles: CSS
cd livros-angular
```

2) Substitua/adicione os arquivos deste pacote dentro da pasta `src/` do seu projeto.
   - Você pode simplesmente copiar a pasta `src` deste pacote para dentro do seu projeto e aceitar sobrescrever.

3) Instale o Bootstrap (via CDN já referenciado no `src/index.html`, não precisa instalar pacote).

4) Rode a aplicação:
```bash
ng serve -o
```
Acesse http://localhost:4200 e use o menu para navegar.

## O que está incluído
- **Modelos**: `Editora` e `Livro` (`src/app/models/...`)
- **Serviços**: `ControleEditoraService` e `ControleLivrosService` com dados de exemplo e métodos
- **Componentes**: `LivroListaComponent` (lista e exclusão) e `LivroDadosComponent` (formulário de inclusão)
- **Roteamento**: duas rotas — `lista` e `dados` — com redirecionamento padrão para `lista`
- **Templates**: HTML com classes do Bootstrap
- **index.html**: inclui Bootstrap via CDN

> Observação: o serviço de livros usa o campo `codigo` como identificador do livro.
