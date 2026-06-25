// src/App.tsx
import Header from "./components/Header";
import Biogerafi from "./components/Biogerafi";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50">
      <div className=" ml-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <Header />
        <Biogerafi />
        <SectionTwo />
      </div>
    </div>
  );
}

export default App;