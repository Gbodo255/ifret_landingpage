import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e) => {
            if (e.target.closest('button, a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <div 
                className="fixed top-0 left-0 w-2 h-2 bg-brand-primary rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
                style={{ 
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovering ? 2.5 : 1})` 
                }}
            />
            {/* Outer Ring */}
            <div 
                className="fixed top-0 left-0 w-8 h-8 border border-brand-primary/30 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
                style={{ 
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
                    opacity: isHovering ? 0.5 : 1
                }}
            />
        </>
    );
};

export default CustomCursor;
