import * as React from "react";
import {Card, Icon} from "semantic-ui-react";

import {IBox} from "../model/Vocabulary";

export interface IProps {
    box: IBox;
}

export class BoxView extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.box.name}</Card.Header>
                    <Card.Description>{this.props.box.description}</Card.Description>
                </Card.Content>
                <Card.Content extra={true} textAlign="right">
                    <Icon name="edit"/>
                    <Icon name="trash"/>
                </Card.Content>
            </Card>
        );
    }
}

export default BoxView;