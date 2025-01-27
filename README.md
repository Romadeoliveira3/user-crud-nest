
# User CRUD API

## Descrição

Esta é uma API RESTful desenvolvida com **NestJS**, **Prisma** e **PostgreSQL** para gerenciar usuários. A aplicação implementa funcionalidades de CRUD (Create, Read, Update, Delete) e oferece suporte para documentação interativa com Swagger.

---

## Funcionalidades

- **Criar usuário:** Cria um novo registro de usuário fornecendo email, senha, nome e data de nascimento.
- **Listar usuários:** Retorna todos os usuários registrados no banco de dados.
- **Obter usuário por ID:** Retorna os dados de um usuário específico com base no ID fornecido.
- **Atualizar usuário:** Atualiza as informações de um usuário baseado no ID.
- **Remover usuário:** Remove um usuário do banco de dados pelo ID.

---

## Tecnologias Utilizadas

- **NestJS:** Framework para construção de aplicações server-side em Node.js.
- **Prisma:** ORM para gerenciamento e manipulação do banco de dados PostgreSQL.
- **PostgreSQL:** Banco de dados relacional.
- **Swagger:** Ferramenta para documentação e testes interativos da API.
- **Docker:** Utilizado para configurar o ambiente do banco de dados.

---

## Requisitos

1. **Node.js** (v16 ou superior)
2. **npm** ou **yarn**
3. **Docker** (opcional para executar o PostgreSQL)

---

## Configuração do Ambiente

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd user-crud-api
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar o Banco de Dados com Docker

Crie o arquivo `docker-compose.yml`:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:latest
    container_name: user-crud-postgres
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: user_crud_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

Suba o container do PostgreSQL:

```bash
docker-compose up -d
```

### 4. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e configure a URL de conexão com o banco de dados:

```env
DATABASE_URL="postgresql://admin:admin@localhost:5432/user_crud_db"
```

### 5. Configurar o Prisma

Gere as migrações e configure o esquema do banco de dados:

```bash
npx prisma migrate dev --name init
```

---

## Executando a Aplicação

### Modo de Desenvolvimento

```bash
npm run start:dev
```

Acesse a API em:

```
http://localhost:3000
```

### Documentação Swagger

Acesse o Swagger para testar a API interativamente:

```
http://localhost:3000/api
```

---

## Rotas Disponíveis

### **Users**

| Método | Rota         | Descrição                    |
| ------ | ------------ | ---------------------------- |
| POST   | `/users`     | Criar um novo usuário        |
| GET    | `/users`     | Listar todos os usuários     |
| GET    | `/users/:id` | Obter um usuário pelo ID     |
| PATCH  | `/users/:id` | Atualizar um usuário pelo ID |
| DELETE | `/users/:id` | Remover um usuário pelo ID   |

---

## Testando a API

### 1. Testar com Swagger

- Acesse `http://localhost:3000/api`
- Utilize a interface interativa para testar as rotas.

### 2. Testar com Postman

- Importe as rotas manualmente no Postman.
- Configure cada rota conforme descrito na tabela acima.

### Exemplo de Corpo para Criar Usuário:

**POST `/users`**

```json
{
  "email": "example@test.com",
  "password": "password123",
  "name": "John Doe",
  "birthDate": "2000-01-01"
}
```

---

## Verificando Dados no Banco de Dados

### 1. Acessar o Banco via Docker CLI

```bash
docker exec -it user-crud-postgres psql -U admin -d user_crud_db
```

### 2. Comandos SQL Básicos

- Listar todos os usuários:

  ```sql
  SELECT * FROM "User";
  ```

- Sair do terminal PostgreSQL:

  ```bash
  \q
  ```

---

## Estrutura do Projeto

```
src/
├── prisma/
│   ├── prisma.module.ts
│   ├── prisma.service.ts
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   ├── update-user.dto.ts
│   ├── entities/
│   │   ├── user.entity.ts
│   ├──  repositories
│   │   ├── users.repository.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   ├── users.service.ts
├── app.module.ts
```

---

## Melhorias Futuras

- Implementar autenticação JWT para proteger as rotas.
- Adicionar paginação na listagem de usuários.
- Criar testes unitários e de integração.

---

## Autor

Desenvolvido por Romário J. O. Veloso.
