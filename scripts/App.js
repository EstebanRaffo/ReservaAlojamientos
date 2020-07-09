
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      filters: {
        dateFrom: moment(today).format("YYYY-MM-DD"),
        dateTo: moment().add(1, "month").format("YYYY-MM-DD"),
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


  render(){
    return(
      <React.Fragment>
        <Hero filters={this.state.filters} />
       {/* <Filters filters={this.state.filters} onFilterChange={this.handleFilterChange} /> */}
       {/* <Hoteles />  */}
      </React.Fragment>
    );  
  }
}

ReactDOM.render(<App />, document.getElementById("app"));


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