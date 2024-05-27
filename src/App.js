import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import Intro from "./components/Intro";

import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Section */}

       {/* Trending Section */}
      <div className="trending text-center">
        <Trending />
      </div>
      {/* End Section */}

      {/* Superhero Section */}
      <div className="superhero text-center"> 
      <Superhero />
      </div>
      {/* Superhero Section */}
    </div>
  );
}

export default App;
