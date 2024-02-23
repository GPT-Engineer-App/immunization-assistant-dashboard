import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="background.50" minH="100vh">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
