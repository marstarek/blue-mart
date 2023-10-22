import { useRouteError } from "react-router-dom";
import styled from 'styled-components'
const Span = styled.span`
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color:red;
background: white;
  `

const RootBoundary = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <Span>{error.statusText || error.message}</Span>
            </p>
        </div>
    );

}

export default RootBoundary