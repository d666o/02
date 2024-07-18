import './Result.css';
import React from 'react';

interface IResultProps {
    num: string;
}

export const Result: React.FC<IResultProps> = props => {
    return (
        <div className="window window_result">
            <span>{props.num}</span>
        </div>
    );
};
