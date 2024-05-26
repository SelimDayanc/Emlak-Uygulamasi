import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ACTIONS} from './common/actions';
import SplashScene from './components/SplashScene';

function mapStateToProps(state) {
  return {
    message: state.appReducer.notifications.message,
    messageType: state.appReducer.notifications.messageType,
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({...ACTIONS}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScene);
