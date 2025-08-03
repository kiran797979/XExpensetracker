import React, { useState } from 'react';
//styles
import "./AppHead.css"

//components
import Card from '../Card/Card';
import PieChartComp from '../PieChart/PieChart';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const AppHead = props => {
    //props
    const { balance, expenses } = props;
    const [showModal, setShowModal] = useState(false);

    return (
        <header className='AppHead'>
            <Card text="Wallet balance" value={balance}/>
            <Card text="Expenses" value={expenses}/>
            <PieChartComp />
            <Button
                text="Add Income"
                background="primary"
                buttonSize="large"
                clickFunction={() => setShowModal(true)}
            />
            {showModal && (
                <Modal
                    toggleModal={() => setShowModal(false)}
                    text="Add Balance"
                />
            )}
        </header>
    );
};

export default AppHead;