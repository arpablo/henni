import * as React from "react";
import BoxViewEdit from './BoxViewEdit';

import {IBox} from "../model/Vocabulary";

export interface IProps {
    boxes: IBox[];
}

export function BoxList({boxes}: IProps) {
    const b = boxes.map((box) => (
        <BoxViewEdit box={box}/>
    ));
    return (
        <div className="box-list">
            {b}
        </div>
    );

}

export default BoxList;