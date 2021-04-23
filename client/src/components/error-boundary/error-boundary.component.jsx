import React from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component{
    constructor() {
        super();

        this.state= {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {

        return {hasErrored:true}

    //process the error
}
componentDidCatch(error, info){
    console.log(error);
}
render(){
    if(this.state.hasErrored) {
        return<ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/yw2w9sc.png'/>
            <ErrorImageText>
                Sorry this page is broken
            </ErrorImageText>
             </ErrorImageOverlay>;
    }

    return this.props.children;
}
};

export default ErrorBoundary;