import './App.css';
import Header from "./components/Header/Header";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import ChoiceHoliday from "./components/ChoiceHoliday/ChoiceHoliday";
import Allinclusive from "./components/Allinclusive/Allinclusive";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <FirstBlock />
      <ChoiceHoliday />
      <Allinclusive />
      <Footer />
    </div>
  );
}

export default App;
