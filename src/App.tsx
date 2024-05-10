import { Button } from "@/components/ui/button";
import { Homepage } from "./pages/Homepage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="w-full bg-[#F9F9F9]">
      <Navbar />
      <Homepage />
    </div>
  );
}
