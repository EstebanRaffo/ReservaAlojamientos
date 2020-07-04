import React, {Component} from "react";
import ReactDOM from "react-dom";
import './styles/App.css';
import Hero from "./components/Hero";
import Filters from "./components/Filters";
// import Hoteles from "./components/Hoteles";
import Moment from "moment";
import 'bulma/css/bulma.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      filters: {
        dateFrom: Moment(today).format("YYYY-MM-DD"),
        dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
        country: "",
        price: 0,
        room: 0
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false
    };
  }

  handleFilterChange = (payload) => {
    this.setState({
      filters: payload
    });
  }

  // https://es.reactjs.org/docs/faq-state.html

  // incrementCount() {
  //   this.setState((state) => {
  //     // Importante: lee `state` en vez de `this.state` al actualizar.
  //     return {count: state.count + 1}
  //   });
  // }

  // this.setState((state, props) => ({
  //   counter: state.counter + props.increment
  // }));


  render(){
    return(
      <div>
        <h1>App</h1>
       {/* <Hero filters={this.state.filters} />
       <Filters filters={this.state.filters} onFilterChange={this.handleFilterChange} /> */}
       {/* <Hoteles />  */}
      </div>
    );  
  }
}


ReactDOM.render(<App />, document.getElementById("app"));