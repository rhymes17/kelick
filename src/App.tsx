import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/index.tsx';
import Home from './pages/home';
import { Sidebar } from './components/sidebar/index.tsx';
import Employees from './pages/employees/index.tsx';

function App() {
  return (
    <div className="flex text-black">
      <Sidebar />

      <div className='w-10/12'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
