import ReactDOM from 'react-dom';
import React from 'react';
export default class ModalPortal extends React.Component {
    constructor(props) {
        super(props);
        this.modalRoot = document.getElementById('modal-root');
        this.el = document.createElement('div')
    }
    componentDidMount() {
        this.modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        this.el.remove()
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}
