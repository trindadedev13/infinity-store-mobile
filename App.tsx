import { Home } from "./src/app/home";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/app/colors";
import "@styles/global.css"
import Routes from "@/routes";
export default function App() {
	return (
		<Routes />
	);
}
