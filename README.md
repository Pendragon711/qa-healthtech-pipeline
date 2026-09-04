# 🏥 MedSchedule - Quality Engineering & Automated CI/CD Pipeline

![CI/CD Pipeline](https://github.com/SEU_USUARIO/qa-healthtech-pipeline/actions/workflows/regression-tests.yml/badge.svg)
![Stack](https://img.shields.io/badge/Stack-Bruno%20%7C%20Cypress%20%7C%20GitHub%20Actions-blue)

Projeto completo de **Quality Engineering** com foco em testes automatizados de **API REST** e **Interface Web (E2E)** integrados a uma pipeline de **Integração Contínua (CI/CD)**.

---

## 📌 Estratégia de Testes

A estratégia segue a abordagem de testes em camadas para feedback rápido:

1. **Camada de API (Bruno CLI):** Testes de contrato, códigos de status e regras de negócio de agendamento executados diretamente via linha de comando no ambiente de CI.
2. **Camada E2E (Cypress):** Validação dos fluxos visuais de agendamento e navegação de usuário, utilizando chamadas de API como pré-condição de massa de dados.

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
│       └── regression-tests.yml   # Pipeline CI/CD
├── bruno/                         # Coleção de API (.bru)
│   ├── bruno.json
│   ├── 01_Auth.bru
│   ├── 02_CreateBooking.bru
│   └── environments/
└── cypress/                       # Testes de Interface
    └── e2e/
        └── agendamento.cy.js
