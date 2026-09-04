describe('Fluxo de Agendamento de Consultas - MedSchedule', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';

  beforeEach(() => {
    // Garante visibilidade da página inicial do sistema testado
    cy.visit('https://example.cypress.io');
  });

  it('Deve validar disponibilidade da API antes da interação via UI', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/ping`
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('Deve criar um agendamento direto pela API para validar pré-condição no teste Web', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/booking`,
      body: {
        firstname: "Marina",
        lastname: "Lima",
        totalprice: 300,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-11-01",
          checkout: "2026-11-05"
        },
        additionalneeds: "Consulta Dermatologia"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
      expect(response.body.booking.firstname).to.eq('Marina');
    });
  });

  it('Deve interagir com a interface web simulando a navegação do usuário', () => {
    cy.get('h1').should('be.visible');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });
});
