import {palette} from '../palette';
import hexToAlpha from "../../helpers/hexToAlpha";

export const dark = {
    dark: true,
    colors: {
        primary: palette.blue,
        background: hexToAlpha(palette.lightBlue, 0.1),
        text: palette.blue,
        border: palette.blue,
    },
};
