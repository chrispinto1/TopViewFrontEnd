import React from 'react'
import Bike from '../components/Bike'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class BikeContainer extends React.Component{

    componentDidMount(){
        console.log(this.props.products)
    }
    
    renderBikes = () => {
        return this.props.products.map(product => {
          if(product.product_type === "bike"){
            return <Bike key={product.id} chosenProduct={this.chosenProduct} name={product.name} price={product.price} image={product.image} product_type={product.product_type} />
          }
        })
    }

    render(){
        return(
            <div className="bikes-container">
                <h1>Choose your bike!</h1>
                <h2>Bike Selected: {this.props.bikeSelected}</h2>
                  {this.renderBikes()}
                <div className="next">
                <Link to="/accessories"><button className="ui black button">Next</button></Link>
                </div>
           </div>
        )
    }
}

function msp(state){
    return{
      products: state.products,
      bikeSelected: state.bikeSelected
    }
  }

  export default connect(msp)(BikeContainer)