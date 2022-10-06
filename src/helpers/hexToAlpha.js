export default function hexToAlpha(color, opacity) {
    color = color.replace(/#/g, '');
    const alpha = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return `#${color + alpha.toString(16).toUpperCase()}`;
}
