import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navibar';
import store from '../store/store';
import {Provider} from 'react-redux';

class RootLayout extends Component {
    state = {  } 
    render() { 
        return (
            <Provider store={store}>
                <Navbar/>
                <main>
                    <Outlet />
                </main>
            </Provider>
        );
    }
}
 
export default RootLayout;