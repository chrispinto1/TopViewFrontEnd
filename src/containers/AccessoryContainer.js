import React from 'react'
import { connect } from 'react-redux'
import Accessory from '../components/Accessories'
import {Link} from 'react-router-dom'
import { fetchProducts } from '../redux-files/actions'


class AccessoryContainer extends React.Component{

    state = {
        accessories: []
    }

    componentDidMount(){
        if(this.props.products.length === 0){
            this.props.fetchProducts(this.setAccessories)
        }else{
            this.setAccessories()
        }
    }

    setAccessories = () => {
        let filteredProducts = this.props.products.filter(product => product.product_type === "accessory")
        this.setState({
            accessories: filteredProducts
        })
        
    }

    renderAccessories = () => {
        return this.state.accessories.map(accessory => {
            return <Accessory key={accessory.id} name={accessory.name} price={accessory.price} image={accessory.image} product_type={accessory.product_type}/>
        })
    }

    render(){
        return(
            <div className="accessory-container">
                <h1>Choose any accessories you would like to add!</h1>
                <h3>Accessories Selected: {this.props.selectedAccessories}</h3>
                <div className="accessories">
                    {this.renderAccessories()}
                </div>
                <Link to="/addons"><button className="ui black button">Add Ons</button></Link>
            </div>
        )
    }
}

function msp(state){
    return{
        products: state.products,
        selectedAccessories: state.accessories
    }
}

export default connect(msp,{
    fetchProducts
})(AccessoryContainer)