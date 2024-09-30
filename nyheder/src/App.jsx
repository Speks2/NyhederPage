import {Header} from './components/Header/Header';
import {Wrapper} from './components/Wrapper/Wrapper';
import {Footer} from './components/Footer/Footer';

function App() {
 

  return (
    <>
     <Wrapper />
     <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/alle" element={<Alle />} />
      <Route path="/indland" element={<Indland />} />
      <Route path="/udland" element={<Udland />} />
      <Route path="/teknologi" element={<Teknologi />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/politik" element={<Politik />} />
      <Route path="/samfund" element={<Samfund/>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
