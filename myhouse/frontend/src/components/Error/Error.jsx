import React from 'react';
import './Error.css';

const Error = (props) => {
    return (
        <div className="error-page-content innerWidth paddings">
            <div className="error-wrapper">
                <h1 className="error-primary-text">Oops!</h1>
                {
                    props.error.status === 404
                        ? <span>It looks like this page doesn't exist. You can return to the main page.</span>
                        : <p className="error-secondary-text">Sorry, an unexpected error has occurred.</p>
                }
                <p>
                    <i>
                        {
                            props.error.status + " " +
                            props.error.statusText || props.error.message
                        }
                    </i>
                </p>
            </div>
        </div>
    )
}

export default Error;