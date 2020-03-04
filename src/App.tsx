import React from "react";
import { ThemeProvider } from "emotion-theming";

import typeStyled, { theme } from "./theme";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const ThisDoesNotHasLabel = typeStyled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const ThisHasLabel = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;
export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1
          css={css`
            background-color: #fabada;
          `}
        >
          CSS prop has label
        </h1>
        <ThisHasLabel
          css={css`
            color: tomato;
          `}
        >
          Styled from @emotion/core with CSS prop has two labels
        </ThisHasLabel>
        <ThisDoesNotHasLabel>
          Styled from typed styled has no label. This makes me SAD!!!
        </ThisDoesNotHasLabel>
        <ThisHasLabel>Styled from @emotion/core has label</ThisHasLabel>
      </div>
    </ThemeProvider>
  );
};
