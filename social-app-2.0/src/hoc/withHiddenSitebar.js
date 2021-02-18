import React from 'react';
import { connect } from 'react-redux';
import { toggleLeftSiteBar } from '../redux/reducers/viewReducer';

export const withHiddenSiteBar = (Component) => {
    class HidderSiteBarContainer extends React.Component {
        componentWillUnmount() {
            if (this.props.isView)
                this.props.toggleView()
        }

        render() {
            let { isView, ...passThroughProps } = this.props
            return <Component {...passThroughProps} />
        }
    }

    let mapStateToProps = (state) => ({ isView: state.viewModule.isView.leftSiteBar })
    return connect(mapStateToProps, { toggleView: toggleLeftSiteBar })(HidderSiteBarContainer)
}