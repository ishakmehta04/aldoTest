import React from 'react';
//import { Link } from 'react-router';
import { Timeline } from 'react-twitter-widgets';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
    <div className="container-fluid">
        {
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'realdonaldtrump'
                }}
                options={{
                    username: 'realDonaldTrump',
                    height: '400'
                }}
                onLoad={() => console.log('Timeline is loaded!', Timeline)}
            />
        }
    </div>
);

export default HomePage;