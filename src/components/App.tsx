import { useState } from 'react';
import { Result } from './Result';
import './App.css';
import { Operations } from './Operations';
import React from 'react';

export const App: React.FC = () => {
    const [num, setNum] = useState<string>('');

    const [oper, setOper] = useState<string>('');

    const addNum = (item: string | null) => {
        setNum(prev => prev + item);
    };

    const clearNum = () => {
        setNum('');
        setOper('');
    };

    const result = (item: number) => {
        setNum(String(item));
        setOper('');
    };

    const addOper = (item: string) => {
        setOper(item);
    };

    const calcHandler = (item: string | null) => {
        if (item) {
            result(1 / Number(num));
        } else {
            if (oper) {
                const calc = num.split(oper);
                switch (oper) {
                    case '+':
                        result(Number(calc[0]) + Number(calc[1]));
                        break;
                    case '-':
                        result(Number(calc[0]) - Number(calc[1]));
                        break;
                    case '/':
                        result(Number(calc[0]) / Number(calc[1]));
                        break;
                    case 'x':
                        result(Number(calc[0]) * Number(calc[1]));
                        break;
                }
                setOper('');
            } else {
                alert('Error');
                clearNum();
            }
        }
    };

    return (
        <div className="window window_main">
            <Result num={num}></Result>
            <Operations
                addNum={addNum}
                addOper={addOper}
                calcHandler={calcHandler}
                clearNum={clearNum}
            ></Operations>
            <div>{num}</div>
            <div>{oper}</div>
        </div>
    );
};
