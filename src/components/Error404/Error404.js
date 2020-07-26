import React, { Component } from 'react';

export default class Error404 extends Component {
    render() {
        const styles = {
            center: {
                textAlign: "center"
            },
            paddingLeft: {
                paddingLeft: "10px"
            },
            left: {
                textAlign: "left"
            },
            right: {
                textAlign: "right"
            }
        }
        return (
            <div style={{ 'width': '100%', ...styles.center, 'color': 'red', 'padding': '15%' }}>
                <h1>ERROR 404</h1>
                <h3>PAGE NOT FOUND</h3>
            </div>
        )
    }
}
