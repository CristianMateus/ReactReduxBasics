import React, { Component } from 'react';

// React Redux
import { connect } from 'react-redux'

// Components
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreaseCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Expects state stored in redux, and returns a js object with the state (the counter)
const mapStateToProps = state => {
    return{
        ctr: state.counter,
        storedResults: state.results
    }
}

// 
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
        onDecreaseCounter: () => dispatch({type: 'DECREASE'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubstractCounter: () => dispatch({type: 'SUBSTRACT', value:5}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);