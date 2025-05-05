import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import MyRouter from './routes/MyRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <div className="">
                    <MyRouter />
                </div>
            </Router>
        </>
    );
}

export default App;
