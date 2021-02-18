import React from 'react';

export const withErrorBoundary = (Component) => {
    return class ErrorBoundaryContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = { hasErr: false, error: null, errorInfo: null }
        }
        componentDidCatch(error, errorInfo) {
            this.setState({
                hasErr: true,
                error: error,
                errorInfo: errorInfo
            })
        }
        render() {
            if (this.state.hasErr)
                return (
                    <div style={{ "width": "500px", "margin": "auto" }}>
                        <p>Упс что-то пошло не так...</p>
                        <p>ОШИБКА {this.state.error.toString()}</p>
                        <p>ИНФО {this.state.errorInfo.componentStack}</p>
                    </div>
                )
            else
                return <Component {...this.props} />
        }
    }
}