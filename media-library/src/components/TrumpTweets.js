import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

// Home page component. This serves as the welcome page with link to the library
class TrumpTweets extends Component {
    render() {
        return (

            <div className="container-fluid">
                {
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'realdonaldtrump'
                        }}
                        options={{
                            username: 'realDonaldTrump',
                            height: '600'
                        }}
                        onLoad={() => console.log('Timeline is loaded!', Timeline)}
                    />
                }
            </div>
        )
    }
};

export default TrumpTweets;