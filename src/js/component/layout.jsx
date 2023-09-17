import react from " react;
import { BrowserRouter, Routes, Route} from react "react-router-dom";
import Navbar from "./component/Navbar";
import {title} from "./component/Title";

import Footer from "./component/Footer";

import {Members} from "./views/Members";

import {card} from "./views/Card.jsx"; 
import {counter} from "./ciews/Counter.jsx";

import {ExampleForm} from "./views/ExampleForm";
import {TodoList} from "./views/TodoList.jsx"

import {TodoListRestApi} from "./views/TodoListRestApi";



const Layout = () => {
    return(
        <div className= "container-fluid">
            <h1 className= "text-primary">
                Layout
            </h1>
            <BrowserRouter>
            <navbar/>
            <Title title= {"vistas"} subtitle= {"React Router DOM"}
                <Routes>
                    <Route element={<Members />} path="/" />
                    <Route element={<card />} path="/card" />
                    <Route element={<counter/>} path="/counter" />
                    <Route element={<ExampleForm />} path="/form" />
                    {/* <Route element={<Single />} path="/single/:id" /> */}
                    <Route path="*" element={<h1>Page Not found!</h1>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}