import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/sidebar/index.tsx';
import { Employees } from './pages/employees/index.tsx';
import Home from './pages/home';

function App() {
  return (
    <div className="flex text-black">
      <Sidebar />

      <div className="h-screen w-10/12 overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
