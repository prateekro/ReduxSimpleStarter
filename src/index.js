import React from "react";
import ReactDOM from "react-dom";

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC3w8z3FwZKTbwekLM0xTl2K4hGo_1D644';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));