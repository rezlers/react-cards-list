import React from 'react';
import OperationCard from "./OperationCard/OperationCard";
import styles from './RightPane.module.css'

function RightPane(props) {
    const {operations} = props;

    return (
        <div className={`${styles['right-pane']} overflow-auto `}>
            {
                operations.map((item, index) => {
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

export default RightPane
