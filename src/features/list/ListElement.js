import React from "react";
import styled from "styled-components/macro";

export default function ListElement({ value }) {
  return <ListItem>{value}</ListItem>;
}

const ListItem = styled.li`
  list-style: none;
  margin: 12px;
`;
