import * as React from "react";
import WordView from './WordView';
import {WordView2} from './WordView2';


export interface IProps {
    source: string;
    translation: string;
}

export interface IState {
    isOpen: boolean;
}

class WordViewEdit extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { isOpen: false};
    }

    public toggleState = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    public speak = (text: string) => {
        const speaker = new SpeechSynthesisUtterance();
        speaker.lang = "es";
        speaker.text = text;
        speechSynthesis.speak(speaker);
    }

    public render() {
        if (this.state.isOpen) {
            return (
                <WordView2 source={this.props.source} translation={this.props.translation} toggleState={this.toggleState} speak={this.speak}/>
            );
        } else {
            return (
                <WordView source={this.props.source} translation={this.props.translation} toggleState={this.toggleState} />
            );
        }
    }
}




export default WordViewEdit;