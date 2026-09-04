# 🏥 MedSchedule - Quality Engineering & Automated CI/CD Pipeline

![CI/CD Pipeline](https://github.com/Pendragon711/qa-healthtech-pipeline/actions/workflows/main.yml/badge.svg)
![Stack](https://img.shields.io/badge/Stack-Bruno%20%7C%20Cypress%20%7C%20GitHub%20Actions-blue)

Projeto completo de **Quality Engineering** com foco em testes automatizados de **API REST** e **Interface Web (E2E)** integrados a uma pipeline de **Integração Contínua (CI/CD)** no GitHub Actions.

---

## 📌 Estratégia de Testes

A estratégia segue a abordagem de testes em camadas para feedback rápido:

1. **Camada de API (Bruno CLI):** Testes de contrato, códigos de status e validação de autenticação/agendamentos executados via CLI na esteira de CI.
2. **Camada E2E (Cypress):** Validação do fluxo do usuário na interface web para o processo de agendamento de consultas.

---

## 🛠️ Tecnologias Utilizadas

- **Testes de API:** [Bruno](https://www.usebruno.com/) & `@usebruno/cli`
- **Testes E2E (Web):** [Cypress](https://www.cypress.io/)
- **Linguagem:** JavaScript / Node.js
- **CI/CD:** GitHub Actions

---

## 📂 Arquitetura do Projeto

```text
qa-healthtech-pipeline/
├── .github/
│   └── workflows/
│       └── main.yml               # Pipeline de Regressão Automática (CI/CD)
├── bruno/                         # Coleção de testes de API
│   ├── environments/              # Ambientes (Production)
│   ├── 01_Auth.bru                # Autenticação e geração de token
│   ├── 02_CreateBooking.bru       # Criação de agendamento
│   └── 03_GetBooking.bru          # Consulta de agendamento
└── cypress/                       # Testes de Interface E2E
    └── e2e/
        └── agendamento.cy.js      # Validação da interface web

        🚀 Execução dos Testes Localmente
        Pré-requisitos
        Node.js: v18 ou superior
        
        Bruno CLI: npm install -g @usebruno/cli
        
        Testes de API (Bruno CLI)
        # Executa a suíte de testes de API no ambiente Production
        bru run bruno --env Production

        Testes E2E (Cypress)
        # Executa os testes de interface em modo headless
        npx cypress run
