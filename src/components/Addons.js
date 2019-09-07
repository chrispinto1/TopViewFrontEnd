import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts, addonSelected } from '../redux-files/actions'
import { Link } from 'react-router-dom'

class Addons extends React.Component{

    state = {
        addons: [],
        insurance: false
    }

    componentDidMount(){
        if(this.props.products.length === 0){
            this.props.fetchProducts(this.setAddons)
        }else{
            this.setAddons()
        }
    }

    setAddons = () => {
        let filteredProducts = this.props.products.filter(product => product.product_type === "addon")
        this.setState({
            addons: filteredProducts
        })
    }

    selectInsurance = () => {
        this.setState({
            insurance: !this.state.insurance
        }, () => {
            if(this.state.insurance){
                localStorage.addon = "Insurance"
            }else{
                localStorage.removeItem("addon")
            }
        })
        
    }

    render(){
        if(this.state.addons.length > 0){
            return(
                <div className="addons" onClick={() => this.props.addonSelected(this.state.addons[0].name)}>
                    <h1>Would you Like Insurance? {this.state.insurance ? 'Yes' : 'No'}</h1>
                    <div className="addon-container">
                        <div className="card" onClick={this.selectInsurance}>
                            <div className="image">
                                <img src={this.state.addons[0].image} alt="insurance"/>
                            </div>
                            <div className="content">
                                <div className="header">Product Name: {this.state.addons[0].name}</div>
                                <div className="description">Price: {this.state.addons[0].price}$</div>
                            </div>
                        </div>
                    </div>
                   
                    <Link to="/checkout"><button className="ui black button">Done</button></Link>
                 
                </div>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
}


function msp(state){
    return{
        products: state.products
    }
}

export default connect(msp,{
    fetchProducts,
    addonSelected
})(Addons)