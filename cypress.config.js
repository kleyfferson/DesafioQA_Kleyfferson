const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações do Node Events podem ser adicionadas aqui
    },
    baseUrl: 'https://web.superfrete.com/',
    viewportWidth: 1366,
    viewportHeight: 768,
    supportFile: false, // Desativa o arquivo de suporte
    specPattern: 'cypress/e2e/tests/**/*.spec.js', // Ajuste correto do padrão de especificação
  },
});