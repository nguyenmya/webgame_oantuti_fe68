import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div className="computer">
                <div className="people mx-auto">
                    <img src={this.props.computer.hinhAnh} alt="" width="130px" height="130px"/>
                </div>
                <div className="speech-bubble"></div>
                <img src="./images/playerComputer.png" alt="computer" width="40%" height="40%" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    computer : state.GameOanXuXiReducer.computer
})

export default connect(mapStateToProps)(Computer)
