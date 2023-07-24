import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@splidejs/react-splide/css";
import "./styles/main.css";
import "./styles/main.res.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
