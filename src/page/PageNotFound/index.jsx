import React from 'react';

const pageNotFoundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width:"100%",
    backgroundColor: '#f5f5f5',
};

const headingStyle = {
    fontSize: '36px',
    color: '#e74c3c',
};

const paragraphStyle = {
    fontSize: '18px',
    color: '#333',
};

const PageNotFound = () => {
    return (
        <div style={pageNotFoundStyle}>
            <h1 style={headingStyle}>Page Not Found</h1>
            <p style={paragraphStyle}>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

export default PageNotFound;
