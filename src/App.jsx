import "./App.scss";
import NavBar from "./components/navigation/NavBar";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";

function App() {
  return (<>
    <NavBar />
    <ItemDetailContainer/>
    <ItemListContainer greeting="Sitio web en construcción" />
  </>
  );
}

export default App;
