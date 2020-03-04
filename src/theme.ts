import styled, { CreateStyled } from "@emotion/styled";

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: "#ff8a00",
    secondary: "#fabada"
  }
};

export default styled as CreateStyled<ITheme>;

