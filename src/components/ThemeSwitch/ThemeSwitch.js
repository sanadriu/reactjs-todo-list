import { Component } from "react";
import { ThemeSwitchStyled, Icon } from "./ThemeSwitch.styled";
import moonSVG from "../../img/moon-svgrepo-com.svg";
import sunSVG from "../../img/sun-svgrepo-com.svg";

export default class ThemeSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick, isDarkMode } = this.props;

    const image = isDarkMode ? moonSVG : sunSVG;

    return (
      <ThemeSwitchStyled onClick={onClick}>
        <Icon src={image}/>
      </ThemeSwitchStyled>
    );
  }
}
