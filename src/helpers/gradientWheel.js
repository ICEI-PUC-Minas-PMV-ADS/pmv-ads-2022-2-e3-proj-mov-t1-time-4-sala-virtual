const gradientWheel = (colors) => {
    const palette = Array.isArray(colors) ? colors : [colors];
    const gradient = palette.slice(1, -1).reverse();
    const wheel = [...palette, ...gradient];
    const wheelSize = wheel.length;

    return (index) => {
        const wheelPosition = index % wheelSize;
        return wheel[(wheelPosition > 0 ? wheelPosition : wheelSize) - 1];
    };
};

export default gradientWheel;
