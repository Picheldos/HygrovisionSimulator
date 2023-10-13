import styled from "styled-components";
import {font, color, vw, mediaBreakpointUp} from "../../style/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${vw(20, 'xs')};
    background-color: ${color('darkGray')};
    color: ${color('white')};

    ${mediaBreakpointUp('md')} {
        padding: ${vw(60, 'md')} ${vw(20, 'md')} ${vw(40, 'md')};
    }

    ${mediaBreakpointUp('lg')} {
    background-color: ${color('white')};
    color: ${color('darkGray')};
        width: ${vw(1220)};
        padding: ${vw(50)} ${vw(80)} ${vw(30)} ${vw(80)};
    }
  
  h3 {
    ${font('title')};
    margin-bottom: 20px;
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    ${font('font1')};
    margin-bottom: 10px;
  }
`;