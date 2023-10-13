import styled from 'styled-components';
import { vw, font, color, mediaBreakpointUp } from '../../style/mixins';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: ${vw(694, 'xs')};
    padding: ${vw(20, 'xs')};
    background-color: ${color('darkGray')};
    color: ${color('white')};
    margin: auto;

    ${mediaBreakpointUp('md')} {
        min-height: ${vw(840, 'md')};
        padding: ${vw(60, 'md')} ${vw(20, 'md')} ${vw(40, 'md')};
    }

    ${mediaBreakpointUp('lg')} {
        flex-direction: row;
        min-height: ${vw(680)};
        width: ${vw(1220)};
        padding: ${vw(80)} ${vw(134)} ${vw(80)} ${vw(80)};
    }
`;

export const HygrovisionSimulatorVideo = styled.div`
    width: ${vw(250, 'xs')};
    height: ${vw(250, 'xs')};
    background-color: ${color('default')};
    border-radius: 50%;
    clip-path: border-box;
    align-self: center;
    overflow: hidden;

    ${mediaBreakpointUp('md')} {
        width: ${vw(440, 'md')};
        height: ${vw(440, 'md')};
    }

    ${mediaBreakpointUp('lg')} {
        width: ${vw(515)};
        height: ${vw(515)};
        align-self: unset;
    }
`;

export const HygrovisionSimulatorPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${vw(30, 'xs')};

    ${mediaBreakpointUp('md')} {
        flex-direction: row;
        margin-top: ${vw(60, 'md')};
    }

    ${mediaBreakpointUp('lg')} {
        flex-direction: column;
        width: ${vw(370)};
        margin-left: auto;
        margin-top: 0;
    }
`;

export const HygrovisionSimulatorPanelTemperature = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${vw(20, 'xs')};

    ${mediaBreakpointUp('md')} {
        margin-bottom: 0;
        width: ${vw(334, 'md')};
    }

    ${mediaBreakpointUp('lg')} {
        width: 100%;
        margin-bottom: ${vw(30)};
    }
`;

export const HygrovisionSimulatorPanelTitle = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid ${color('white', 0.2)};
    border-bottom: none;
    padding: ${vw(11, 'xs')} 0;

    ${mediaBreakpointUp('md')} {
        padding: ${vw(25, 'md')} 0;
    }

    ${mediaBreakpointUp('lg')} {
        padding: ${vw(25)} 0;
    }

    h3 {
        ${font('font1')};
        font-weight: 700;
    }
`;

interface HygrovisionSimulatorPanelTemperatureRangeProps {
    minus: boolean;
}

export const HygrovisionSimulatorPanelTemperatureRange = styled.div<HygrovisionSimulatorPanelTemperatureRangeProps>`
    display: flex;
    justify-content: center;
    flex: 0 1 100%;
    padding: ${vw(45, 'xs')} 0;
    border: 1px solid ${color('white', 0.2)};

    ${mediaBreakpointUp('md')} {
        padding: ${vw(75, 'md')} 0;
    }

    ${mediaBreakpointUp('lg')} {
        padding: ${vw(55)} 0;
    }

    .input-range {
        display: flex;
        border-radius: 100px;
        width: ${vw(275, 'xs')};

        ${mediaBreakpointUp('md')} {
            width: ${vw(290, 'md')};
        }

        ${mediaBreakpointUp('lg')} {
            width: ${vw(290)};
        }

        &__label {
        
            position: relative;
            &-container {
                ${font('font1')};
                font-family: 'Proxima Nova', sans-serif;
                color: ${color('white')};
            }

            &--min,
            &--max {
                top: ${vw(11, 'xs')};

                ${mediaBreakpointUp('md')} {
                    top: ${vw(20, 'md')};
                }

                ${mediaBreakpointUp('lg')} {
                    top: ${vw(20)};
                }
            }

            &--max {
                right: 5px;

                .input-range__label-container {
                    &:before {
                        content: '-';
                        ${font('font1')};
                    }
                }
            }
        }

        &__track--background {
            height: 5px;
            width: 100%;
            position: relative;
            background: #202226;
            box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.75), inset -2px -2px 2px #4e5154;
            z-index: 2;

            &::after {
                content: ' ';
                width: 100%;
                height: 7px;
                background-color: #202226;
                border-radius: 100px;
                box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.75), inset -2px -2px 2px #4e5154;
                display: block;
                position: absolute;
                top: 0;
                right: 0;

                ${mediaBreakpointUp('fhd')} {
                    height: ${vw(7)};
                }
            }

            .input-range__label-container {
                position: absolute;
                top: ${vw(-35, 'xs')};
                left: 3px;
                transform: translateX(25%);

                ${mediaBreakpointUp('md')} {
                    top: ${vw(-35, 'md')};
                    transform: translateX(-25%);
                }

                ${mediaBreakpointUp('lg')} {
                    top: ${vw(-40)};
                }

                &:before {
                    content: ${({ minus }) => (!minus ? "''" : "'-'")};
                }
            }

            .input-range__track--active {
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 48.67%, rgba(255, 255, 255, 0.04) 59.86%),
                    linear-gradient(89.97deg, #2f4ffc 2.65%, #0782db 46.81%, #0f9ceb 76.39%, #11a8fd 101.95%);
                    border-radius: 100px;
                box-shadow: none;
                z-index: 2;
                height: 5px;
                position: relative;
            }
        }

        &__slider {
            background: linear-gradient(320.66deg, #141515 14.75%, #2e3236 84.81%);
            border: 1px solid #282b2e;
            box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.35);
            border-radius: 30px;
            width: ${vw(30, 'xs')};
            height: ${vw(30, 'xs')};
            top: 0;
            margin-top: 0;
            transform: translateY(-50%);
            z-index: 2;
            
            &:hover {
              cursor: pointer;
            }

            ${mediaBreakpointUp('md')} {
                width: ${vw(28, 'md')};
                height: ${vw(28, 'md')};
            }

            ${mediaBreakpointUp('lg')} {
                width: ${vw(28)};
                height: ${vw(28)};
            }

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #69b6d5;
                z-index: 1;

                ${mediaBreakpointUp('fhd')} {
                    width: ${vw(4)};
                    height: ${vw(4)};
                }
            }
            
            &-container {
              z-index: 3;
            }
        }
    }
`;

export const HygrovisionSimulatorPanelLighting = styled.div`
    width: 100%;

    ${mediaBreakpointUp('md')} {
        width: ${vw(334, 'md')};
        margin-left: auto;
    }

    ${mediaBreakpointUp('lg')} {
        width: 100%;
        margin-left: 0;
    }
`;

export const HygrovisionSimulatorPanelLightingMode = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${color('white', 0.2)};

    span {
        border-radius: 50%;
        filter: blur(1px);
        box-shadow: 10px 15px 40px #000000, -10px -15px 40px #2f393d;
        width: ${vw(80, 'xs')};
        height: ${vw(80, 'xs')};

        ${mediaBreakpointUp('md')} {
            width: ${vw(60, 'md')};
            height: ${vw(60, 'md')};
        }

        ${mediaBreakpointUp('lg')} {
            width: ${vw(80)};
            height: ${vw(80)};
        }

        &:not(:last-child) {
            margin-bottom: ${vw(16, 'xs')};

            ${mediaBreakpointUp('md')} {
                margin-bottom: ${vw(20, 'md')};
            }

            ${mediaBreakpointUp('lg')} {
                margin-bottom: ${vw(16)};
            }
        }
    }

    label {
        ${font('font1')};
        margin-bottom: ${vw(8, 'xs')};

        ${mediaBreakpointUp('lg')} {
            margin-bottom: ${vw(10, 'md')};
        }

        ${mediaBreakpointUp('lg')} {
            margin-bottom: ${vw(11)};
        }
    }
`;

export const HygrovisionSimulatorPanelLightingModeLaser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: ${vw(19, 'xs')} 0;

    ${mediaBreakpointUp('md')} {
        padding: ${vw(20, 'md')} 0;
    }

    ${mediaBreakpointUp('lg')} {
        padding: ${vw(30)} 0 ${vw(22)};
    }

    span {
        background: linear-gradient(320.66deg, #fd8971 14.75%, #ff6c4e 84.81%);
        box-shadow: 10px 15px 40px #000000, -10px -15px 40px #2f393d;
    }
`;

export const HygrovisionSimulatorPanelLightingModeIllumination = styled.div<{ isIllumination: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    border-left: 1px solid ${color('white', 0.2)};
    padding: ${vw(19, 'xs')} 0;

    ${mediaBreakpointUp('md')} {
        padding: ${vw(20, 'md')} 0;
    }

    ${mediaBreakpointUp('lg')} {
        padding: ${vw(30)} 0 ${vw(22)};
    }

    span {
        position: relative;
        background: linear-gradient(320.66deg, #2f353a 14.75%, #1c1f22 84.81%);

        &:after {
            content: ' ';
            width: 100%;
            height: 100%;
            background: linear-gradient(320.66deg, #b4e8fa 14.75%, #c3edfb 84.81%);
            border-radius: 50%;
            display: block;
            position: absolute;
            opacity: ${({ isIllumination }) => (!isIllumination ? '0' : '1')};
            transition: opacity 0.3s ease;
        }
    }
`;

export const HygrovisionSimulatorPanelLightingModeSwitcher = styled.div`
    label {
        position: relative;
        display: flex;
        align-items: center;
        width: ${vw(50, 'xs')};
        height: ${vw(22, 'xs')};
        background: ${color('steelBlack')};
        box-shadow: inset -4px -4px 9px rgba(27, 29, 33, 0.6), inset 4px 4px 14px rgba(43, 48, 52, 0.6);
        border-radius: 100px;
        border: 1px solid ${color('white', 0.2)};
        cursor: pointer;
        transition: all 300ms ease;
        margin: 0;

        ${mediaBreakpointUp('md')} {
            width: ${vw(37, 'md')};
            height: ${vw(17, 'md')};
        }

        ${mediaBreakpointUp('lg')} {
            width: ${vw(37)};
            height: ${vw(17)};
        }

        &:after {
            position: absolute;
            display: block;
            left: 1px;
            width: ${vw(18, 'xs')};
            height: ${vw(18, 'xs')};
            border-radius: 50%;
            background: #181a1d;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
            content: '';
            transition: all 300ms ease;

            ${mediaBreakpointUp('md')} {
                width: ${vw(13, 'md')};
                height: ${vw(13, 'md')};
            }

            ${mediaBreakpointUp('lg')} {
                width: ${vw(13)};
                height: ${vw(13)};
            }
        }
    }

    input {
        display: none;

        &:checked ~ label {
            &:after {
                left: ${vw(30, 'xs')};
                background: #3150f9;

                ${mediaBreakpointUp('md')} {
                    left: ${vw(21, 'md')};
                }

                ${mediaBreakpointUp('lg')} {
                    left: ${vw(21)};
                }
            }
        }

        &:disabled ~ label {
            background: lighten(${color('steelBlack')}, 30%);
            pointer-events: none;

            &:after {
                background: lighten(${color('steelBlack')}, 20%);
            }
        }
    }
`;
