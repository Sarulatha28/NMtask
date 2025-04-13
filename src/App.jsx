import {createBrowserRouter, RouterProvider, createRoutesFromElements,Route,
} from "react-router-dom";
import Task from "./Task";
import Saree from "./saree";
import RootLayout from "./layout/RootLayout";
import Ethnic from "./Ethnic";
import Mentop from "./Mentop";
import Menbottom from "./menbottom";
import Kidswear from "./kidswear";
import Western from "./Western";
import Womenfoot from "./Womenfoot";
import Menfoot from "./Menfoot";
import Winter from "./Winter";
import Watch from "./Watch";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>=        <Route index element={<Task />} />
        <Route path="/saree" element={<Saree />} />
        <Route path="/ethnic" element={<Ethnic />} />
        <Route path="/mentop" element={<Mentop />} />
        <Route path="/menbottom" element={<Menbottom />} />
        <Route path="/kidswear" element={<Kidswear />} />
        <Route path="/western" element={<Western />} />
        <Route path="/womenfoot" element={<Womenfoot/>} />
        <Route path="/menfoot" element={<Menfoot/>} />
        <Route path="/watch" element={<Watch/>} />
        <Route path="/winter" element={<Winter/>} />
        
        
        
        {/* You can add more routes here like kidswear, etc */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
