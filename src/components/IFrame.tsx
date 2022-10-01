import styled from "styled-components";

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export interface IframeType {
  id: string;
  url: string;
}

interface Props {
  iframe: IframeType;
}

const Iframe = ({ iframe }: Props) => {
  return <StyledIframe src={iframe.url} scrolling="no" />;
};

export default Iframe;
