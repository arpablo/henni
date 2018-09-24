import * as React from "react";
import BoxView from "./BoxView";

import {IBox} from "../model/Vocabulary";

export interface IProps {
    box: IBox;
}

export interface IState {
    isOpen: boolean;
}

export class BoxViewEdit extends React.Component<IProps, IState>  {

    constructor(props: IProps) {
        super(props);    
    }

    public render() {
        return (
            <BoxView box={this.props.box}/>
        );
        }
}

export default BoxViewEdit;