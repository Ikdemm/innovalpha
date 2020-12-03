export const languageReducer = function (state = 'en', action) {
    switch (action.type) {
      case 'en':
        return state = 'en';
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