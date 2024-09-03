class SuperFretePage {
  visit() {
    cy.visit('https://web.superfrete.com/');
    cy.get('body').should('be.visible');
    cy.wait(10000); // Esperar 10 segundos para garantir o carregamento completo da página
  }

  selectFormat(format) {
    cy.get('span.MuiSelect-icon').first().click(); // Clica no botão de seleção de formato
    cy.get(`li[data-value="${format}"]`).click(); // Seleciona o formato especificado na lista
  }

  selectWeightOption() {
    cy.get('span.MuiSelect-icon').eq(1).click(); // Clica no botão de seleção de peso
    cy.get('li[data-value="userWrite"]').click(); // Seleciona a opção "digitar peso"
  }

  setWeight(weight) {
    this.selectWeightOption(); // Seleciona a opção de digitar peso
    cy.get('input[data-test="weight"]', { timeout: 10000 })
      .should('be.visible')
      .type(weight);
  }

  setOriginCep(cep) {
    cy.get('input[data-test="cep-origin"]').should('be.visible').type(cep);
  }

  setDestinationCep(cep) {
    cy.get('input[data-test="cep-destination"]').should('be.visible').type(cep);
  }

  setDimensions(height, width, length) {
    cy.get('input[data-test="height"]').should('be.visible').type(height);
    cy.get('input[data-test="width"]').should('be.visible').type(width);
    cy.get('input[data-test="length"]').should('be.visible').type(length);
  }

  calculate() {
    cy.get('button[data-test="calculate"]').should('be.visible').click();
  }

  verifyResult() {
    cy.get('div[data-test="result"]').should('be.visible').and('contain', 'R$');
  }

  verifyErrorMessage(message) {
    cy.get('div[data-test="error"]').should('be.visible').and('contain', message);
  }
}

export default SuperFretePage;
