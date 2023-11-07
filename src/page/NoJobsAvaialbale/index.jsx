import React from 'react';

const NoJobsAvailable = () => {
    const containerStyle = {
        display: 'flex',
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#FF5733',
    };

    const messageStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white', // Text color
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#E71D36', // Message background color
    };

    return (
        <div style={containerStyle}>
            <div style={messageStyle}>
                <p>No jobs available at the moment</p>
            </div>
        </div>
    );
};

export default NoJobsAvailable;
