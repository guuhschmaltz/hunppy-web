import { Routes as ReactRouterRoutes, Route } from "react-router-dom";

import AddPlayers from "./pages/AddPlayers";
import AllYouCanEat from "./pages/AllYouCanEat";
import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <ReactRouterRoutes>
        <Route path="/" element={<Landing />} />
        <Route path="/add-players" element={<AddPlayers />} />
        <Route path="/all-you-can-eat" element={<AllYouCanEat />} />
    </ReactRouterRoutes>
  )
} 