const config = {};
config.serverUrl = 'http://localhost:4000';
config.OntologyToHtml = {
  category: { key: 'id', value: 'type' },
  entityTypeToInput: { number: 'number', text: 'text', date: 'date' },
};

export default config;
