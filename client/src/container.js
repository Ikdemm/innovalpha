import { connect } from 'react-redux';
import "./App.css";
import HomeComponent from "./components/HomeComponent";


const mapStateToProps = state => {
    return {
      lang: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
      setFrenchLanguage: () => dispatch({ type: 'fr' }),
      setGermanLanguage: () => dispatch({ type: 'de' }),
      setItalienLanguage: () => dispatch({ type: 'it' })
    }
  };
  
export const Container = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);