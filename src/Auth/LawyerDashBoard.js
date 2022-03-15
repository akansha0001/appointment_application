import React from 'react';

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

const LawyerDashBoard = () => {
    return (
        <>
            <h1>Lawyer dashboard</h1>
        </>
    )
}

export default LawyerDashBoard
