import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  // add imported funtions here


export default function NavBar() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path = "/">

                    </Route>
                </Switch>
            </div>
        </Router>
    ) // return
} //NavBar
// add funtions down here to render