import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdits from './StreamEdits';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList} /> 
                    <Route path="/create" exact component={StreamCreate} />
                    <Route path="/delete" exact component={StreamDelete} />
                    <Route path="/edits" exact component={StreamEdits} />              
                    <Route path="/show" exact component={StreamShow} />
                </div>
                
            </BrowserRouter>
        </div>
        
    );
};

export default App;