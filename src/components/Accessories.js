import React from 'react'
import { connect } from 'react-redux'
import { chosenAccessories } from '../redux-files/actions'

class Accessories extends React.Component{

    render(){
        return(
                <div className="card" onClick={() => this.props.chosenAccessories(this.props.name)}>
                    <div className="image">
                        <img src={this.props.image}/>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.name}</div>
                        <div className="description">Price: {this.props.price}$</div>
                    </div>
                </div>
            
        )
    }
}

export default connect(null,{
    chosenAccessories
})(Accessories)