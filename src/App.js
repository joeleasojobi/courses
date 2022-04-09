import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourses from './Components/AddCourses';
import Viewcourses from './Components/Viewcourses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<AddCourses/>}/>
          <Route path='/viewcourses' element={<Viewcourses/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
