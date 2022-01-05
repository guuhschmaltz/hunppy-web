import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      
        <Route path="/eae" element={<Landing />} />
    </ReactRouterRoutes>
  )
}