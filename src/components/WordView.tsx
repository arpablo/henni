import * as React from "react";
import {Card, Flag, Icon} from "semantic-ui-react";

type ToggleStateFunc = () => void;

export interface IProps {
    source: string;
    translation: string;
    toggleState: ToggleStateFunc;
}

function WordView({source, translation, toggleState}: IProps) {
    return (
        <Card>
            <Card.Content>
                <Card.Header><Flag name="de"/> {source}</Card.Header>
                <Card.Description><Flag name="es"/> {translation} <Icon name="volume up"/></Card.Description>
            </Card.Content>
            <Card.Content extra={true} textAlign="right">
                <span onClick={toggleState}><Icon name="edit"/></span>
                <Icon name="trash"/>
            </Card.Content>
        </Card>
    );
}

export default WordView;