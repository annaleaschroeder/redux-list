import React from "react";
import ListElement from "./ListElement";
import { connect } from "react-redux";

export function List({ catfacts }) {
  return (
    <div>
      <ul>
        {catfacts.map(({ text }, index) => (
          <ListElement key={index} value={text} />
        ))}
      </ul>
    </div> 
  );
}

function mapStateToProps(state) {
  return {
    catfacts: state.catfacts,
  };
}

export const ConnectedList = connect(mapStateToProps)(List);
