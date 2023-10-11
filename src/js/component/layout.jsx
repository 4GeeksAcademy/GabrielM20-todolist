import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-primary">Layout</h1>
      <BrowserRouter>
        <Navbar />
        <Title title={"Vistas"} subtitle={"React Router DOM"}>
          <Routes>
            {/* <Route element={<Members />} path="/" /> */}
            <Route element={<Card />} path="/card" />
            <Route element={<Counter />} path="/counter" />
            <Route element={<ExampleForm />} path="/form" />
            {/* <Route element={<Single />} path="/single/:id" /> */}
            <Route path="*" element={<h1>Page Not found!</h1>} />
          </Routes>
        </Title>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Layout;