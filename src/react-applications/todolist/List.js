import React, {Component} from 'react';

export class List extends Component {
    constructor(){
        super();
    }
}
    List = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}
                <button onClick={() => props.removeItem(item)}/>
            </li>)
        }
    </ul>
);

export default List;