import { BrowserRouter  } from "react-router-dom";
import './App.css'
import { Suspense } from "react";
import { Router } from "./routes/Router";
import Loader from "./component/Loader";

function App() {

  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Router/>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
