import './Operations.css';
import React from 'react';

interface IOperationsProps {
    addNum: (item: string | null) => void;
    clearNum: () => void;
    addOper: (item: string) => void;
    calcHandler: (item: string | null) => void;
}

export const Operations: React.FC<IOperationsProps> = props => {
    const addOperationHandler = (e: string | null) => {
        props.addNum(e);
        if (e) props.addOper(e);
    };

    const addNumHandler = (e: string | null) => {
        props.addNum(e);
    };

    const submitHandler = (item: string | null) => {
        switch (item) {
            case '=':
                props.calcHandler('');
                break;
            case 'AC':
                props.clearNum();
                break;
            case '.':
                props.addNum(item);
                break;
            case '1/x':
                props.calcHandler('1/x');
                break;
        }
    };

    const btn = [
        {
            id: 'b1',
            value: 'AC',
            class: 'btn',
            handler: submitHandler
        },
        {
            id: 'b2',
            value: '1/x',
            class: 'btn',
            handler: submitHandler
        },
        {
            id: 'b3',
            value: '%',
            class: 'btn',
            handler: addOperationHandler
        },
        {
            id: 'b4',
            value: '/',
            class: 'btn',
            handler: addOperationHandler
        },
        {
            id: 'b5',
            value: '7',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b6',
            value: '8',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b7',
            value: '9',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b8',
            value: 'x',
            class: 'btn',
            handler: addOperationHandler
        },
        {
            id: 'b9',
            value: '4',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b10',
            value: '5',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b11',
            value: '6',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b12',
            value: '-',
            class: 'btn',
            handler: addOperationHandler
        },
        {
            id: 'b13',
            value: '1',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b14',
            value: '2',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b15',
            value: '3',
            class: 'btn',
            handler: addNumHandler
        },
        {
            id: 'b16',
            value: '+',
            class: 'btn',
            handler: addOperationHandler
        },
        {
            id: 'b17',
            value: '0',
            class: 'btn btn__zero',
            handler: addNumHandler
        },
        {
            id: 'b18',
            value: '.',
            class: 'btn',
            handler: submitHandler
        },
        {
            id: 'b19',
            value: '=',
            class: 'btn',
            handler: submitHandler
        }
    ];

    return (
        <div className="window window_operations">
            {btn.map(item => (
                <button
                    key={item.id}
                    className={item.class}
                    onClick={e => item.handler(e.currentTarget.textContent)}
                >
                    {item.value}
                </button>
            ))}
        </div>
    );
};
