import React from "react";

class Symbol extends React.Component {
  render() {
    var actualPlayerId = this.props.actualPlayerId;
    var cardId = this.props.cardId;
    var disabledState = false;
    if (actualPlayerId === cardId) {
      disabledState = true;
    } else {
      if (this.props.disabled[0] !== null) {
        let clickedId = this.props.disabled[0].playerId;
        if (cardId === clickedId) {
          disabledState = true;
        }
        if (this.props.disabled[1] !== null) {
          if (cardId === this.props.disabled[1].playerId) {
            disabledState = true;
          }
        }
      }
    }
    return (
      <>
        <button
          disabled={disabledState}
          className="symbol__container"
          onClick={this.props.onClickSrc}
          value={this.props.symbolValue}
          data-card_id={cardId}
        >
          <img src={this.props.symbolSrc} alt="Symbol" />
        </button>
      </>
    );
  }
}

export default Symbol;
