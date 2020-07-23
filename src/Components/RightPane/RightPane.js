import React from 'react';
import OperationCard from "./OperationCard/OperationCard";
import styles from './RightPane.module.css'

class RightPane extends React.Component {
    render() {
        return (
            <div className={`${styles['right-pane']} overflow-auto `}>
                {
                    this.props.operations.map((item, index) => {
                        return (
                            <>
                                <OperationCard
                                    key={index}
                                    msg={item}
                                />
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default RightPane
