import styles from './App.css';
import React from 'react';
import Cards from './components/Cards';
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker';
import {fetchData} from './components/Index'

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={coronaImage} alt="COVID-19" /> */}
        <br />
        <div style={{textAlign: 'center', fontSize: '25px', color: 'red'}}>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </div>
        <br />
        <div style={{textAlign: 'center', fontSize: '20px'}}>
          <i>(For a particular select a Country from below)</i>
        </div>
        <br />
        <br />
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
