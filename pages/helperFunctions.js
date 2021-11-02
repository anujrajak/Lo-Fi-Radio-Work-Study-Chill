import { useEffect, useRef } from "react";

/**
 * It fetches the quotes from an public api and returns
 * one random quote from the fetched list of quote.
 * @returns {Object}
 */
const fetchQuote = async () => {
    const request = await fetch("https://type.fit/api/quotes");
    const quotes = await request.json();
    return quotes[Math.floor(Math.random() * quotes.length - 1) + 1];
}

/**
 * I have used Yates-shuffle algo for suffling the list.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param {Array} list
 * @returns {Array} Suffled-array
 */
const suffleList = (list) => {
    let i = list.length;

    while (i !== 0) {
        let rand = Math.floor(Math.random() * (i - 1)) + 1;
        let swap = list[i - 1];
        list[i - 1] = list[rand];
        list[rand] = swap;
        --i;
    };

    return list;
}


/**
 * I'll explain later why i'm using this custom hook.
 * @param {function} callback
 * @param {in milliseconds} delay
 */
const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export {
    fetchQuote,
    suffleList,
    useInterval
}