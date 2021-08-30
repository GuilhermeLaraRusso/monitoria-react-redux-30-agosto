import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import thunkAPI from './redux/actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textoDePesquisa: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    const { saveCoins } = this.props;
    saveCoins('https://cdn.jsdelivr.net/gh/fawazahmed0/curren-api@1/latest/currencies.json');
  }
  handleChange(event){
    const { name, value} = event.target;
    this.setState({ [name]: value })
  }
  render(){
    const { textoDePesquisa } = this.state;
    const { currencies } = this.props;
    return(
      <>
        <label htmlFor="textoDePesquisa">
          <input
            name="textoDePesquisa"
            type="text"
            aria-label="text"
            onChange={ this.handleChange }
            value={ textoDePesquisa }
          />
        </label>
        <ul>
          {
            Object
            .values(currencies)
            .filter((moeda) => (moeda.includes(textoDePesquisa)))
            .map((moeda) => <li key={moeda}>{moeda}</li>)
          }
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const { currencyReducer: {loading, errorMessage, currencies} } = state;
  return { loading, errorMessage, currencies };
}
const mapDispatchToProps = (dispatch) => {
  return { saveCoins: (url) => dispatch(thunkAPI(url)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
