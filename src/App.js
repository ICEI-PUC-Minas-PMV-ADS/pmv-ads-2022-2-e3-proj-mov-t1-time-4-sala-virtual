import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {Home} from './screens/home';

const App = () => {
    useEffect(() => {
        RNBootSplash.hide({fade: true});
    }, []);

    return <Home/>;
};

export default App;
