import * as React from 'react';
import { createRoot } from 'react-dom/client';

const container: Element | null = document.querySelector('#root');
if(container === null) {
    throw new Error('container is null');
}
const root = createRoot(container);

const App = () => {
    console.log("wefa")
    return <div>
        <h1>Hello React! </h1>
    </div>
}

root.render(<App/>)