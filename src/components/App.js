import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdits from './StreamEdits';
import StreamList from './StreamList';
import StreamShow from './StreamShow';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={StreamList} /> 
                <Route path="/create" exact component={StreamCreate} />
                <Route path="/delete" exact component={StreamDelete} />
                <Route path="/edits" exact component={StreamEdits} />              
                <Route path="/show" exact component={StreamShow} />
            </div>
            <div>Hello</div>
        </BrowserRouter>
        
    );
};

export default App;