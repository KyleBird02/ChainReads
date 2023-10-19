import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";

// secret key = "sWTZozLPIl7fHRebYjgWHl8frh71O5VDq2OXwOAPCz81nXXNkPUk2kU0Wt3cm9srDuahog041MSeAimlj2ufFA"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider
        activeChain={Sepolia}
        clientId={"20aa394f50a7237379d6e76ed8e041cb"}
    >
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);
