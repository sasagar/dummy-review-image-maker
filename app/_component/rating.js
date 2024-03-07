'use client';
import React, { useState } from "react";

const Rating = ({
    star,
    size = 24,
    color = "#f9ce20",
    withLabel = false,
}) => {
    const arr = [1, 2, 3, 4, 5];

    const calcRes = (amount, event) => {
        const target = event.target;
        const rect = target.getBoundingClientRect();
        const clickX = event.pageX;
        const positionX = rect.left + window.pageXOffset;
        const x = clickX - positionX;
        const half = rect.width / 2;
        let res = amount;
        if (x < half) {
            res = amount - 0.5;
        }
        return res;
    };

    return (
        <div className="flex items-center gap-2">
            <div
                className="relative inline-block select-none items-center mt-[-10px]"
            >
                <div
                    className="flex overflow-hidden whitespace-nowrap text-[#e6e6e6] items-start"
                    style={{
                        fontSize: `${size}px`,
                    }}
                >
                    {arr.map((num) => {
                        return (
                            <span
                                key={`star-${num}`}
                                // className="p-0.5"
                                style={{ WebkitTextStrokeWidth: `${1}px`, WebkitTextStrokeColor: 'rgb(180, 83, 9)', lineHeight: `${size * 2}px` }}
                            >
                                ★
                            </span>
                        );
                    })}
                </div>
                <div
                    className="absolute left-0 top-0 z-10 flex overflow-hidden whitespace-nowrap"
                    style={{
                        color: color,
                        fontSize: `${size}px`,
                        width: `${star * 2 * 10}%`,
                        pointerEvents: "none",
                    }}
                >
                    {arr.map((num) => {
                        return (
                            <span
                                key={`star-active-${num}`}
                                // className="p-0.5"
                                style={{ WebkitTextStrokeWidth: `${1}px`, WebkitTextStrokeColor: 'rgb(180, 83, 9)', lineHeight: `${size * 2}px` }}
                            >
                                ★
                            </span>
                        );
                    })}
                </div>
            </div>
            {
                withLabel ? (
                    <span className="font-bold" style={{ fontSize: `${size * 0.65}px` }}>
                        {star}
                    </span>
                ) : null
            }
        </div >
    );
};

export default Rating;