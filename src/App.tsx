import "./App.css";
import AddNewItemModal from "./components/AddNewItem/AddNewItemModal";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SavedItems from "./components/SavedItems/SavedItems";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SavedItems />
      <AddNewItemModal />
    </div>
  );
}

export default App;
