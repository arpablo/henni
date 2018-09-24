import * as React from "react";
import BoxList from "./BoxList";
import WordList from "./WordList";

import {IBox} from "../model/Vocabulary";


interface IState {
    boxes: IBox[];
}

class VocabularyDashboard extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            boxes: [
                {
                    name: "Verben",
                    words: [
                        {
                            source: "machen",
                            translation: "hacer"
                        },
                        {
                            source: "wünschen",
                            translation: "desear"
                        },
                        {
                            source: "wollen",
                            translation: "querer"
                        },
                        {
                            source: "kommen",
                            translation: "venir"
                        },
                        {
                            source: "suchen",
                            translation: "buscar"
                        }
                    ]
                }, 
                {
                    name: "Adjektive",
                    words: [
                        {
                            source: "jung",
                            translation: "joven"
                        },
                        {
                            source: "alt",
                            translation: "viejo"
                        },
                        {
                            source: "klein",
                            translation: "pequeño"
                        },
                        {
                            source: "groß",
                            translation: "alto"
                        },

                    ]
                }
            ]
        }
    }

    public render() {
        return (
            <div className="vocabulary-dashboard">
                <BoxList boxes={this.state.boxes}/>
                <WordList/>
            </div>
        );
        }
}

export default VocabularyDashboard;