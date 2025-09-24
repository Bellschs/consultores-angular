# 🧑‍💻 Consultores Angular

Aplicação Angular para gerenciamento de consultores, com **login e perfis de usuário** (admin e usuário comum).  
Este projeto foi desenvolvido como exercício prático para Angular, Reactive Forms, Guards e CRUD.

---

## 🚀 Funcionalidades

- **Sistema de autenticação**
  - Login com perfis pré-definidos
  - Controle de acesso via Guards
  - Logout

- **Consultores**
  - Listagem de consultores
  - Filtro por especialidade
  - Visualização de detalhes
  - Adicionar/editar/excluir (apenas Admin)

- **Navegação**
  - Tela de Login
  - Lista de Consultores
  - Detalhes do Consultor
  - Formulário de cadastro/edição
  - Página "Sobre"

---

## 👥 Perfis de Acesso

- **Administrador**
  - Login: `admin@empresa.com`
  - Senha: `admin123`
  - Pode adicionar, editar e excluir consultores.

- **Usuário Comum**
  - Login: `user@empresa.com`
  - Senha: `user123`
  - Pode apenas visualizar consultores.

---

## 🛠️ Tecnologias Utilizadas

- [Angular 17+](https://angular.dev/)
- TypeScript
- Reactive Forms
- Angular Router
- Guards (AuthGuard / AdminGuard)
- SCSS (estilização)

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Bellschs/consultores-angular.git
cd consultores-angular
