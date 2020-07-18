
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      filters: {
        dateFrom: moment().format("YYYY-MM-DD"),
        dateTo: moment().add(1, "month").format("YYYY-MM-DD"),
        country: 0,
        price: 0,
        room: 0
      },
      hotels: hotelsData,
      filteredHotels: []
    };
  }

  componentDidMount(){
    const {filters, hotels} = this.state; 
    const filteredHotels = this.filterByDates(hotels, filters.dateFrom, filters.dateTo);
    this.setState({filteredHotels});
  }

  handleFilterChange = (event) => {
    const {name, value} = event.target;
    var {filters} = this.state;
    filters[name] = value;
    this.setState({filters}, this.filterHotels(this.state.filters, this.state.hotels)); 
  }

  // Ver de hacer encadenamiento
  filterHotels = (filters, hotels) => {
    var filteredHotels = this.filterByDates(hotels, filters.dateFrom, filters.dateTo);
    
    var size = filters.room;
    switch(size){
      case 'Hotel pequeño': 
        size = 15;
        break;
      case 'Hotel mediano':
        size = 30;
        break;
      case 'Hotel grande':
        size = 45;
        break;
      default:
        size = 0;
        break;
    }
    if(size){
      filteredHotels = this.filterByRoom(filteredHotels, size);
    }

    var price = filters.price;
    switch(price){
      case '$':
        price = 1;
        break;
      case '$$':
        price = 2;
        break;
      case '$$$':
        price = 3;
        break;
      case '$$$$':
        price = 4;
        break;
      default:
        price = 0;
        break;
    }
    if(price){
      filteredHotels = this.filterByPrice(filteredHotels, price);
    }

    if(filters.country !== "Todos los países"){
      filteredHotels = this.filterByCountry(filteredHotels, filters.country);
    }
    
    this.setState({filteredHotels});
  }

  filterByDates = (hotels, dateFrom, dateTo) => {
    return hotels.filter(hotel => {
      return moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom && moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
    })
  }

  filterByRoom = (hotels, size) => {
    return hotels.filter(hotel => {
      return hotel.rooms <= size && hotel.rooms > (size - 15);
    })
  } 
  
  filterByPrice = (hotels, price) => { 
    return hotels.filter(hotel => {
      return hotel.price === price;
    })
  }

  filterByCountry = (hotels, country) => {
    return hotels.filter(hotel => {
      return hotel.country === country;
    })
  }

  render(){
    const {filters, filteredHotels, hotels} = this.state;
    console.log(hotels)
    console.log(filters)
    console.log(filteredHotels.length)
    console.log(
      filteredHotels.map(hotel => {
        const availabilityFrom = moment(hotel.availabilityFrom).format("YYYY-MM-DD")
        const availabilityTo =  moment(hotel.availabilityTo).format("YYYY-MM-DD")
        return {"disponible desde: ": availabilityFrom, "disponible hasta: ": availabilityTo}
      })
    )
    return(
      <React.Fragment>
         <Hero filters={filters} />
         <Filters filters={filters} onFilterChange={this.handleFilterChange} />
         <Hoteles hotels={filteredHotels}/> 
      </React.Fragment>  
    );  
  }
}

ReactDOM.render(<App />, document.getElementById("app"));