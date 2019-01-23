import React from 'react';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import GetStartedSection from './GetStartedSection';

const PetTemplate = () => {
    return (
        <div className="PetTemplate">
            <AboutSection />
            <FeaturesSection />
            <GetStartedSection />
        </div>
    );
};

export default PetTemplate;