import './App.scss';
import NavBar from './components/navigation/NavBar';
import CartWidget from "./components/main/ItemListContainer";

function App() {
    return (<>
            <NavBar/>
            <CartWidget greeting="Sitio web en construcción"/>
        </>
    );
}

export default App;
