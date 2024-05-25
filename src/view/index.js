import { BrowserRouter } from 'react-router-dom';
import RouterNav from './router/index'
import '../view/style/style.css'
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <BrowserRouter>
            <RouterNav />
            <Footer/>
           
        </BrowserRouter>
    )
}

export default App;