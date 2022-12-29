import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Route";
import "./App.css"
export const ThemContext = createContext(null)


function App() {
  const [theme, setTheme] = useState("light");
  const themToggel = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemContext.Provider value={{ theme, themToggel }}>
    <div className="App">
    <div className=" " id={theme}>
      <RouterProvider router={route}></RouterProvider>
    </div>
    </div>
    </ThemContext.Provider>
  );
}

export default App;
