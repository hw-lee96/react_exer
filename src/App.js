import React, { Component } from 'react';

class App extends Component {
    state = {
        hello: 'Hello React App!',
        count:0
    };

    handleChange = () => {
        // this.setState({
        //     hello: 'Bye React App!'
        // });

        this.setState({
            count : this.state.count +1
        });
    };

    countUp = () => {
        this.setState({
            count : this.state.count +1
        });
    };

    render() {
        return (
            <div className="App">
                <div className="props">
                    {/* Props가 들어가는 부분입니다. */}                    
                    <span>{this.props.message}</span>
                </div>

                <div>{this.state.hello}</div>
                <button onClick={this.handleChange}>click Me!</button>
                
                <div>{this.state.count}</div>
                <button onClick={this.countUp}>count up!</button>

                <h3>App Props</h3>
                <div className="inside-app-props">
                    <InsideApp count={this.state.count} handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

/*
    상속 받은 props 역시 수정할 수 있지만 되도록이면 지양하는 편이다.
*/
class InsideApp extends Component{
    render() {
        return (
            <div>
                {this.props.count}
                <button onClick={this.props.handleChange}>click Me!</button>
            </div>
        )
    }
}

export default App;
