import { Fragment } from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

// TODO <a href="https://www.flaticon.com/free-icons/kebab" title="kebab icons">Kebab icons created by Freepik - Flaticon</a>

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
