export const languageReducer = function (state = 'fr', action) {
    switch (action.type) {
      case 'fr':
        return state = 'fr';
      case 'de': 
        return state = 'de';
      case 'it':
        return state = 'it';
      default:
        return state;
    }
}