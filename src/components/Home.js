import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="welcome">
                    <h1>Rent a bike with us today!</h1>
                    <Link to="/bikes"><button className="ui black button">View Bikes!</button></Link>
                </div>
            </div>
        )
    }
}