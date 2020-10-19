import React, { Component } from 'react';

/* 
    react에서 DOM에 직접적인 접근이 필요한 경우는 다음과 같은 경우가 있다.
        1. 특정 DOM의 크기를 가져와야 할 때
        2. 특정 DOM에서 스크롤 위치를 가져오거나 설정을 해야할 때
        3. input/textarea 등에 포커스를 해야 할 때
        4. 외부 라이브러리 (플레이어, 차트, 캐로절 등)을 사용할 때
    
    이러한 경우 document.getELelemet~~ 와 같은 실제 DOM의 요소를 가져오면 안되며,
    ref를 사용해야 한다. 사용 방법은 아래와 같다.

    <div ref={ref => {this.mydiv = ref} }></div>
*/

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
