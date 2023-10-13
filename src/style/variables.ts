const variables = {
    col: 100 / 24,
    offset: {
        mobile: 16,
        tablet: 20,
        desktop: 40
    },
    fonts: {
        default: 'Work Sans, sans-serif'
    }
};

export type Offset = keyof typeof variables.offset;

export default variables;
