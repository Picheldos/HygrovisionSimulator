import breakpoints, { Breakpoints } from './breakpoints';
import variables, { Offset } from './variables';
import colors, { Colors } from './colors';
import typography, { Typography } from './typography';
import { FlattenSimpleInterpolation } from 'styled-components';
import { rgba } from 'polished';

export const mediaBreakpointUp: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(min-width: ${parseInt(breakpoints[breakpoint]) - 1}px)`;
};

export const vw: (value: number, screenWidth?: Breakpoints | number) => string = (value, screenWidth: Breakpoints | number = 1920) => {
    const widthInPx = typeof screenWidth === 'number' ? screenWidth : parseInt(breakpoints[screenWidth]);
    return `${(value / widthInPx) * 100}vw`;
};

export const color: (value: Colors, opacity?: number) => string = (value, opacity = 1) => {
    return rgba(colors[value], opacity);
};

export const offset: (type: Offset) => string = (type) => {
    const size = {
        mobile: 375,
        tablet: 768,
        desktop: 1920
    };
    return vw(variables.offset[type], size[type]);
};

export const font: (name: Typography) => FlattenSimpleInterpolation = (name) => {
    return typography[name];
};
