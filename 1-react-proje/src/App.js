import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "./components/Button";
import Tab from "./components/Tab";

function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Tab>
          <Tab.Panel title="Profil">1. tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
      </div>

      <h1>Aykut</h1>
      <Button>Buton ornegi</Button>
      <Button variant="success">Buton ornegi</Button>
      <Button variant="danger">Buton ornegi</Button>
      <Button variant="warning">Buton ornegi</Button>
    </>
  );
}

export default App;
