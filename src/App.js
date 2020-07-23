import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import RightPane from "./RightPane/RightPane";
import LeftPane from "./LeftPane/LeftPane";
import styles from './App.module.css'

function App() {
    const [operations, setOperations] = useState([]);


    return (
        <div className={`${styles['app-container']} container`}>
            <div className='row'>
                <div className='col-9'>
                    <LeftPane
                        onDelete={(index) => setOperations([...operations, `Delete card: ${index}`])}
                        onAdd={(index) => setOperations([...operations, `Add card: ${index}`])}
                        onSort={() => setOperations([...operations, `Sort cards`])}
                    />
                </div>
                <div className='col-3'>
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
