import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Card from "./components/Card/Card";
import CardForm from "./components/CardForm/CardForm";

const App = () => {
  return (
    <div className="main">
      <Header />
      <MainContent />
      <Card />
      <CardForm />
    </div>
  );
};

export default App;
