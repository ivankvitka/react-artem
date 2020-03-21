import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getPlaceholders} from "./actions";
import {Link, Route, Switch} from "react-router-dom";
import Post from "./components/Post";

const App = ({isLoading, hasError, data, errorMessage, getPlaceholders}) => {
    useEffect(() => {
        getPlaceholders()
    }, []);

    console.log(hasError);
    if (hasError) {
        return <div>Error message: {errorMessage}</div>;
    }

    return (
        <Switch>
            <Route exact path='/' render={() => {

                return (
                    isLoading
                        ? 'Loading'
                        : data.map((item) => {
                            return (
                                <h2>
                                    <Link key={item.id} to={`posts/${item.id}`}>{item.title}</Link>
                                </h2>
                            )
                        })

                );
            }}/>
            <Route path='/posts/:id' component={Post}/>

        </Switch>
    );
};

const mapStateToProps = ({isLoading, hasError, data, errorMessage}) => ({
    isLoading, hasError, data, errorMessage
});

const mapDispatchToProps = (dispatch) => ({
    getPlaceholders: () => dispatch(getPlaceholders())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);