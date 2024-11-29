# Gerenciador de Produtos

## 📖 Descrição do projeto

O **Gerenciador de Produtos** é uma aplicação web desenvolvida em **React** utilizando **Vite** como base. O objetivo é permitir o gerenciamento completo de produtos, incluindo funcionalidades de cadastro, edição, exclusão e visualização detalhada, com integração a uma API simulada por meio do **json-server**.

Este projeto foi desenvolvido como parte da avaliação da disciplina de **Desenvolvimento de Sistemas Web**, destacando boas práticas de organização de código, uso de ferramentas modernas e uma interface funcional e atrativa.

---

## ✔️ Funcionalidades

- **Página HOME**:
  - Exibe uma introdução ao sistema e links para navegar para as demais páginas.
  
- **Página PRODUTO**:
  - Listar todos os produtos cadastrados.
  - Adicionar novos produtos com validação de formulário.
  - Editar informações de produtos existentes.
  - Excluir produtos.

- **Página DETALHE DO PRODUTO**:
  - Exibe informações detalhadas de um produto selecionado.

---

## 🖥 Aplicação

- A aplicação conta com navegação entre as páginas **HOME**, **PRODUTO** e **DETALHE DO PRODUTO**.
- Integra-se a uma API simulada utilizando **json-server**.
- Validação de formulário para garantir a entrada de dados consistentes.
- Interface responsiva e amigável ao usuário.

---

## 🛠 Ferramentas utilizadas

- **React** (Vite) para construção da interface.
- **React Router DOM** para navegação entre páginas.
- **json-server** para simulação da API de produtos.
- **HTML** para estruturação da aplicação.
- **JavaScript** para lógica e interatividade. 
- **CSS** para estilização.

---

## 🔗 Acesso ao projeto

Você pode acessar o código-fonte deste projeto diretamente [clicando aqui](https://github.com/igorborgeS812/Project-AS).

---

## 📦 Abrir e rodar o projeto

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior);
- **npm** ou **yarn**.

### Passo a passo

1. Clone o repositório:

git clone https://github.com/igorborgeS812/Project-AS

2. Acesse a pasta do projeto:
cd gerenciador-de-produtos

3. Instale as dependências:


npm install

4. Inicie o servidor da API simulada:

	npx json-server --watch db.json --port 3001

5. Em outro terminal, inicie a aplicação React:

	npm run dev

Abra o navegador e acesse:
Aplicação: http://localhost:5173
API simulada: http://localhost:3001
