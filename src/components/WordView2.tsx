import * as React from "react";
import {Card, Flag, Icon} from "semantic-ui-react";

type ToggleStateFunc = () => void;
type SpeakFunc = (text: string) => void;

export interface IWordEditProps {
    source: string;
    translation: string;
    toggleState: ToggleStateFunc;
    speak: SpeakFunc;
}

export class WordView2 extends React.Component<IWordEditProps, any> {

    constructor(props:IWordEditProps) {
        super(props);
    }
    
    public handleSpeak = () => {
        this.props.speak(this.props.translation);
    }

    public render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header><Flag name="es"/> {this.props.translation}</Card.Header>
                    <Card.Description><Flag name="de"/> {this.props.source} <Icon name="volume up"/></Card.Description>
                </Card.Content>
                <Card.Content extra={true} textAlign="right">
                    <span onClick={this.props.toggleState}><Icon name="edit"/></span>
                    <span onClick={this.handleSpeak}><Icon name="trash"/></span>
                </Card.Content>
            </Card>
        );
        }
}

export default WordView2;