import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import RightPane from "./Components/RightPane/RightPane";
import LeftPane from "./Components/LeftPane/LeftPane";
import styles from './App.module.css'

function App() {
    const [operations, setOperations] = useState([]);


    return (
        <div className={`${styles['app-container']} container-fluid`}>
            <div className='row'>
                <div className='col-lg-9 col-md-9 col-sm-9 col-xs-12'>
                    <LeftPane
                        onDelete={(index) => setOperations([...operations, `Delete card: ${index}`])}
                        onAdd={(index) => setOperations([...operations, `Add card: ${index}`])}
                        onSort={() => setOperations([...operations, `Sort cards`])}
                    />
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 d-none d-sm-block border border-secondary'>
                    <RightPane
                        operations={operations}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

