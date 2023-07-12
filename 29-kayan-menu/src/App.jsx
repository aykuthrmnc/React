import Menu from "./menu";

const App = () => {
  return (
    <>
      <Menu onChange={index => console.log(index)} current={2}>
        <Menu.Item>Hakkımda</Menu.Item>
        <Menu.Item>İletişim</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Makaleler</Menu.Item>
        <Menu.Item>Dersler</Menu.Item>
      </Menu>

      <Menu variant="horizontal-menu">
        <Menu.Item>Hakkımda</Menu.Item>
        <Menu.Item>İletişim</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Makaleler</Menu.Item>
        <Menu.Item>Dersler</Menu.Item>
      </Menu>

      <Menu variant="vertical-menu">
        <Menu.Item>Hakkımda</Menu.Item>
        <Menu.Item>İletişim</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Makaleler</Menu.Item>
        <Menu.Item>Dersler</Menu.Item>
      </Menu>
    </>
  );
};
export default App;
