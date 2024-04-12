import "./style.css";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconsHeader from "../IconsHeader";

function Header() {
    return (
        <header className="App-header">
            <Logo/>
            <OpcoesHeader/>
            <IconsHeader/>
        </header>
    )
}

export default Header;