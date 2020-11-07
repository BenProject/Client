const config = {};
config.serverUrl = 'http://localhost:5000';
config.numberOfFieldsToSHow = 3;
config.OntologyToHtml = {
  category: { key: 'id', value: 'type' },
  entityTypeToInput: {
    number: 'number',
    text: 'text',
    date: 'date',
  },
  jsTypeToInput: { number: 'number', text: 'text', date: 'date' },
};
config.maxNumberOfHopsAllowed = 10;
config.entitiesPerPage = 12;
config.maxNumberOfSuggestions = 5;

export default config;
