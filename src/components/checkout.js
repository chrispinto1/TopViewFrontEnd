import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Checkout extends React.Component{

    clearLocalStorage = () => {
        this.props.routerProps.history.push("/")
        localStorage.removeItem("bike")
        localStorage.removeItem("accessory")
        localStorage.removeItem("addon")
    }

    render(){
        return(
            <div className="rental">
                <h1>Congratulations! You've rented the following:</h1>
                <ul className="order">
                    <h3>Bike: {localStorage.bike === "" ? 'none' : localStorage.bike}</h3>
                    <h3>Accessory: {localStorage.accessory === "" ? 'none': localStorage.accessory}</h3>
                    <h3>Addons: {localStorage.addon === "" ? 'none' : localStorage.addon}</h3>
                </ul>
                <button className="ui black button" onClick={this.clearLocalStorage}>Return Home</button>
            </div>

        )
    }
}

function msp(state){
    return{
        bike: state.bikeSelected,
        accessories: state.accessories,
        addon: state.addons
    }
}

export default connect(msp)(Checkout)