import React, { Component } from 'react';

function getUrlParams(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&')
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
        return hash
    })
    return params
}

class Course extends Component {
    render () {
        console.log(this.props);
        const params = getUrlParams(this.props.location.search)

        return (
            <div>
                <h1>{params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;