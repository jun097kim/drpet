import React from 'react';
import './FeaturesSection.scss';

const FeaturesSection = () => {
    return (
        <div className="FeaturesSection">
            <div>
                <p className="title">Report</p>
                Record the state of puppy. If any abnormality, record it with picture
            </div>
            <div>
                <p className="title">Remote Diagnose</p>
                Through ongoing record, vet periodically their health remotely and diagnose them.
            </div>
            <div>
                <p className="title">Community</p>
                If you want to share information about your pet, use community
            </div>
        </div>
    );
};

export default FeaturesSection;