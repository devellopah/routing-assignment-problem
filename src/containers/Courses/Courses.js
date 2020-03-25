import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        const { path, url } = this.props.match
        console.log({path, url})

        return (
            <Switch>
                <Route exact path={path}>
                    <div>
                        <h1>Amazing Udemy Courses</h1>
                        <section className="Courses">
                            {
                                this.state.courses.map( course =>
                                    <Link
                                        to={`${url}/${course.id}?title=${course.title}`}
                                        className="Course"
                                        key={course.id}>
                                            {course.title}
                                    </Link>
                                )
                            }
                        </section>
                    </div>
                </Route>
                <Route path={`${path}/:courseId`} component={Course} />
            </Switch>
        );
    }
}

export default Courses;