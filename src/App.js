import { Routes, Route } from "react-router-dom";
import Farming from "./pages/farming";
import Finance from "./pages/finance";
import Firesale from "./pages/firesale";
import Leadership from "./pages/leadership";
import News from "./pages/News";
import Property from "./pages/property";
import Sheet from "./pages/sheet";
import Startup from "./pages/Startup";
import Tech from "./pages/tech";
import Topic from "./pages/topicPR";
import Main from "./pages/Main";
import Exhibition from "./pages/exhibition";
import Searching from "./pages/search";

function App() {
    return (
        <div className="app">
            <Routes >
                <Route path="/ParzivalProjectCB/">
                    <Route index element={<Main />}></Route>
                    <Route path="News" element={<News />} />
                    <Route path="farming" element={<Farming />} />
                    <Route path="finance" element={<Finance />} />
                    <Route path="firesale" element={<Firesale />} />
                    <Route path="leadership" element={<Leadership />} />
                    <Route path="property" element={<Property />} />
                    <Route path="sheet" element={<Sheet />} />
                    <Route path="startup" element={<Startup />} />
                    <Route path="tech" element={<Tech />} />
                    <Route path="topic" element={<Topic />} />
                    <Route path="exhibition" element={<Exhibition />}></Route>
                    <Route path="search" element={<Searching />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
