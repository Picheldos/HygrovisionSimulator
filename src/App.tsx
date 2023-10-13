import React from 'react';
import GlobalStyle from "./style/globalStyles";
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock";
import HygrovisionSimulator from "./components/HygrovisionSimulator/HygrovisionSimulator";

const App: React.FC = () => {
    return (
        <section>
            <GlobalStyle />
            <DescriptionBlock />
            <HygrovisionSimulator />
        </section>
    );
};

export default App;
