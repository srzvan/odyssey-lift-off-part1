import React from "react";
import styled from "@emotion/styled";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

import { colors } from "../styles";

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <ErrorMessage>ERROR: {error.message}</ErrorMessage>;
  }

  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }

  if (!data) {
    return <ErrorMessage>Nothing to show...</ErrorMessage>;
  }

  if (data) {
    return children;
  }
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

const ErrorMessage = styled.p({
  padding: "1em 1.75em",
  backgroundColor: colors.red.base,
  color: colors.white,
  alignSelf: "flex-start",
  fontSize: "1.25rem",
  borderRadius: ".25em",
  textShadow: `-1px 2px 3px ${colors.black.base}`,
});
