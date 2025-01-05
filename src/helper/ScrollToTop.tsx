import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const DEFAULT_BTN_CLS =
    "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop: React.FC = () => {
    const [btnCls, setBtnCls] = useState<string>(DEFAULT_BTN_CLS);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
            } else {
                setBtnCls(DEFAULT_BTN_CLS + " hidden");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true } as AddEventListenerOptions);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onClickBtn = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;