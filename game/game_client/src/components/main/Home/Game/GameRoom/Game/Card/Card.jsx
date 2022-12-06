import React from "react";
import Symbols from "./Symbol/Symbol";

class Card extends React.Component {
  render() {
    var cards = this.props.cards;
    return (
      <div className="cards__container card-group" id="cards_container">
        {cards.list.map((card, index) => {
          return (
            <div className="card_container card_content">
              <h2>{this.props.playerName[index]?.name}</h2>;
              <div className="card">
                {cards.list[index].map((symbol, listIndex) => (
                  <Symbols
                    actualPlayerId={this.props.actualPlayerId}
                    cardId={cards.list[index].id}
                    onClickSrc={this.props.handleClick}
                    symbolSrc={cards.symbolsSrc[symbol - 1]}
                    symbolValue={cards.symbols[symbol - 1]}
                    key={symbol}
                    disabled={this.props.disabled}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
