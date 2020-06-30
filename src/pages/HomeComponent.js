import React from 'react';
import {Helmet} from 'react-helmet';

class Home extends React.Component {
    head(){
        return(
            <Helmet>
                <title>Hacker News</title>
            </Helmet>
        )
    }

    handleClick(){
        console.log("hiiii");
    }
    render() {
        return (
            <div>
                {this.head()}
                <h1>
                    My home page
                </h1>
            <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}

export default Home;