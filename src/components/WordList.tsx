import * as React from "react";
import WordViewEdit from './WordViewEdit';

function WordList() {
    return (
        <div className="wordlist">
            <WordViewEdit source="jung" translation="joven"/>
            <WordViewEdit source="alt" translation="viejo"/>
            <WordViewEdit source="klein" translation="pequeño"/>
            <WordViewEdit source="groß" translation="alto"/>
        </div>
    );
}

export default WordList;