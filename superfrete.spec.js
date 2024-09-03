import SuperFretePage from '../../support/pages/SuperFretePage';

describe('Testes da Página SuperFrete', () => {
  const page = new SuperFretePage();

  beforeEach(() => {
    page.visit();
  });

  it('Deve calcular o frete corretamente com dados válidos', () => {
    page.selectFormat('1'); // Seleciona "caixa/pacote"
    page.selectWeightOption(); // Seleciona "digitar peso"
    page.setWeight('300'); // Define o peso como 300g
    page.setOriginCep('08090-284');
    page.setDestinationCep('05407-002');
    page.setDimensions('2', '11', '16');
    page.calculate();
    page.verifyResult();
  });

  it('Deve mostrar erro para peso inválido (200g)', () => {
    page.selectFormat('1'); // Seleciona "caixa/pacote"
    page.selectWeightOption(); // Seleciona "digitar peso"
    page.setWeight('200'); // Define o peso como 200g
    page.setOriginCep('08090-284');
    page.setDestinationCep('05407-002');
    page.setDimensions('2', '11', '16');
    page.calculate();
    page.verifyErrorMessage('Peso inválido');
  });

  it('Deve mostrar erro quando a altura for menor que 0.4 cm', () => {
    page.selectFormat('1'); // Seleciona "caixa/pacote"
    page.selectWeightOption(); // Seleciona "digitar peso"
    page.setWeight('300');
    page.setOriginCep('08090-284');
    page.setDestinationCep('05407-002');
    page.setDimensions('0.3', '11', '16');
    page.calculate();
    page.verifyErrorMessage('Altura inválida');
  });

  // Outros casos de teste aqui...
});
