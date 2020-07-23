import React from 'react';
import ReactDOM from 'react-dom';
import RightPane from "./Components/RightPane/RightPane";
import LeftPane from "./Components/LeftPane/LeftPane";
import styles from './App.module.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {operations: []}
    }

    render() {
        return (
            <div className={`${styles['app-container']} container-fluid`}>
                <div className='row'>
                    <div className='col-lg-9 col-md-9 col-sm-9 col-xs-12'>
                        <LeftPane
                            onDelete={(index) => this.setState({operations: [...this.state.operations, `Delete card: ${index}`]})}
                            onAdd={(index) => this.setState({operations: [...this.state.operations, `Add card: ${index}`]})}
                            onSort={() => this.setState({operations: [...this.state.operations, `Sort cards`]})}
                        />
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3 d-none d-sm-block border border-secondary'>
                        <RightPane
                            operations={this.state.operations}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

