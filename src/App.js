import React from 'react';

import ThemeProvider from "./providers/themes";
import AuthProvider from "./providers/auth";
import Navigation from "./routes/navigation";

const App = () => (
    <ThemeProvider>
        <AuthProvider>
            <Navigation/>
        </AuthProvider>
    </ThemeProvider>
);

export default App;
