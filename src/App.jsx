import "./App.scss";
import NavBar from "./components/navigation/NavBar";
import ItemListContainer from "./components/main/ItemListContainer";

function App() {
  return (<>
        <NavBar/>
        <ItemListContainer greeting="Sitio web en construcción"/>
      </>
  );
}

export default App;
