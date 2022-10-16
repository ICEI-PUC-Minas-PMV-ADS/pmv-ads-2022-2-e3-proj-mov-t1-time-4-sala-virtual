import React from 'react';

import ThemeProvider from "./providers/themes";
import AuthProvider from "./providers/auth";
import Navigation from "./routes/navigation";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => (
    <ThemeProvider>
        <AuthProvider>
            <Navigation/>
        </AuthProvider>
    </ThemeProvider>
);

export default App;
