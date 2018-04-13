import React from 'react';
// https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
const List = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default List;