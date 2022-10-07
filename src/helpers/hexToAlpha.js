export default function hexToAlpha(color, opacity) {
    color = color.replace(/#/g, '');
    const alpha = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    console.log(`#${color + alpha.toString(16).toUpperCase()}`);
    return `#${color + alpha.toString(16).toUpperCase()}`;
}
