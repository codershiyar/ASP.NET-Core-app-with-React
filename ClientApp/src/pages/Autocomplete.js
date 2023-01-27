import React, { Component, Fragment } from "react";
// import "/Custom.css";

//voorbeeld voor in het programma voor autocomplete <Autocomplete suggestions={"Oranges", "Apples", "Banana", "Kiwi", "Mango"]}/>

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
        actievesuggesties: 0,
        gefilterdeSuggesties: [],
        zichtbareSuggesties: false,
        userInput: ""
        };
    }
    // wanneer de gebruiker de input field veranderd
    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const gefilterdeSuggesties = suggestions.filter(
        suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
        actievesuggesties: 0,
        gefilterdeSuggesties,
        zichtbareSuggesties: true,
        userInput: e.currentTarget.value
        });
    };
    // wanneer de gebruiker op een suggestie klikt 
    onClick = e => {
        this.setState({
        actievesuggesties: 0,
        gefilterdeSuggesties: [],
        zichtbareSuggesties: false,
        userInput: e.currentTarget.innerText
        });
    };
    // wanneer de gebruiker pijltje naar beneden doet 
    // de condities van e.keycode kunnen veranderd worden
    // 13 is de enter key, 38 de upp key en 40 de down key
    onKeyDown = e => {
        const { actievesuggesties, gefilterdeSuggesties } = this.state;
    
        if (e.keyCode === 13) {
          this.setState({
            actievesuggesties: 0,
            zichtbareSuggesties: false,
            userInput: gefilterdeSuggesties[actievesuggesties]
          });
        } else if (e.keyCode === 38) {
          if (actievesuggesties === 0) {
            return;
          }
          this.setState({ actievesuggesties: actievesuggesties - 1 });
        }
        // gebruiker drukt de pijl naar beneden, verhoog de index dan 
        else if (e.keyCode === 40) {
          if (actievesuggesties - 1 === gefilterdeSuggesties.length) {
            return;
          }
          this.setState({ actievesuggesties: actievesuggesties + 1 });
        }
      };
    render() {
        // we voegen bij de state alle 4 de opties toe omdat we ze alle 4 weer gaan gebruiken
        const {
          onChange,
          onClick,
          onKeyDown,
          state: {
            actievesuggesties,
            gefilterdeSuggesties,
            zichtbareSuggesties,
            userInput
          }
        } = this;
    
        let suggestionsListComponent;
        if (zichtbareSuggesties && userInput) {
            if (gefilterdeSuggesties.length) {
              suggestionsListComponent = (
                <ul className="suggestions">
                  {gefilterdeSuggesties.map((suggestion, index) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === actievesuggesties) {
                      className = "suggestion-active";
                    }
                    return (
                      <li className={className} key={suggestion} onClick={onClick}>
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className="no-suggestions">
                  <em>geen Autocomplete opties beschikbaar.</em>
                </div>
              );
            }
          }
          return (
            <Fragment>
              <input
              className="form-control"
              style={{maxWidth:"320px"}}
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                id="GenreVoorstellingen"
                placeholder="Voer hier de genre die u wilt"
              />
              {suggestionsListComponent}
            </Fragment>
          );
        }
      }
      export default Autocomplete;  
