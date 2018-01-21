import React, { Component } from 'react';
import '../styles/style.css';
import { Timeline } from 'react-twitter-widgets';

// ClintonTweets Component
class ClintonTweets extends Component {

    render() {
        return (
            <div className="container-fluid">
                {

                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'hillaryclinton'
                        }}
                        options={{
                            username: 'HillaryClinton',
                            height: '400'
                        }}
                        onLoad={() => console.log('Timeline is loaded!', Timeline)}
                    />
                }
            </div>

        );
    }
}

// connect method from react-router connects the component with redux store
export default ClintonTweets;