import { Counter } from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout, Menu } from "antd";
// import routes from "./routes";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} items={[{ key: 1, label: `SignUp` }]} />
        </Header>
        <Content className="site-layout" style={{ padding: "50px", marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Expense Tracker ©2022</Footer>
      </Layout>
    </>
  );
}

export default App;
