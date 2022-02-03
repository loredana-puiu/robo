import React, { Children, Component } from "react";
import { render } from "react-dom";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }


componentDidCatch( error, info ) {
    this.setState({ hasError: true })
}
 

render() {
    if (this.state.hasError) {
        return <h1>SORRY</h1>
    }else {
        return this.props.children;
    }
}
}
export default ErrorBoundry;