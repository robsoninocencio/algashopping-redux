import React from "react";
import { connect } from "react-redux";

function Calculator({ result }) {
  return (
    <>
      <input type="text" placeholder="a" />
      <input type="text" placeholder="b" />

      <button>somar</button>
      <button>subtrair</button>

      <div>{result}</div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    result: state.calculator,
  };
}

export default connect(mapStateToProps)(Calculator);
