import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import InputRange from '@gollum-ts/react-input-range';
import {
    Container,
    HygrovisionSimulatorPanel,
    HygrovisionSimulatorPanelLighting,
    HygrovisionSimulatorPanelLightingMode, HygrovisionSimulatorPanelLightingModeIllumination,
    HygrovisionSimulatorPanelLightingModeLaser,
    HygrovisionSimulatorPanelLightingModeSwitcher,
    HygrovisionSimulatorPanelTemperature,
    HygrovisionSimulatorPanelTemperatureRange,
    HygrovisionSimulatorPanelTitle,
    HygrovisionSimulatorVideo
} from './HygrovisionSimulator.styled';

const HygrovisionSimulator: React.FC = () => {
    const [temperature, setTemperature] = useState(0);
    const [isIllumination, setIsIllumination] = useState(false);

    const onChangeRange = (value: number) => {
        setTemperature(value);
    };

    const onChecked = () => {
        setIsIllumination(prevIsIllumination => !prevIsIllumination);
    };

    const getVideoTitle = () => {
        const temperatureValue = temperature === 0 ? temperature : `-${temperature}`;
        const illumination = isIllumination ? 'Illumination' : '';
        return `/video/simulator/${illumination + temperatureValue}.mp4`;
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'o':
                    onChecked();
                    break;
                case 'ArrowUp':
                    setTemperature(prevTemperature => (prevTemperature < 20 ? prevTemperature + 1 : prevTemperature));
                    break;
                case 'ArrowDown':
                    setTemperature(prevTemperature => (prevTemperature > 0 ? prevTemperature - 1 : prevTemperature));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isIllumination]);

    return (
        <Container>
            <HygrovisionSimulatorVideo>
                <ReactPlayer url={getVideoTitle()} muted playing loop playsinline height={'100%'} width={'100%'} />
            </HygrovisionSimulatorVideo>

            <HygrovisionSimulatorPanel>
                <HygrovisionSimulatorPanelTemperature>
                    <HygrovisionSimulatorPanelTitle>
                        <h3>Temperature mirror, °C</h3>
                    </HygrovisionSimulatorPanelTitle>

                    <HygrovisionSimulatorPanelTemperatureRange minus={temperature > 0}>
                        <InputRange value={temperature} onChange={(value) => onChangeRange(value as number)} minValue={0} maxValue={20} />
                    </HygrovisionSimulatorPanelTemperatureRange>
                </HygrovisionSimulatorPanelTemperature>

                <HygrovisionSimulatorPanelLighting>
                    <HygrovisionSimulatorPanelTitle>
                        <h3>Light Mode</h3>
                    </HygrovisionSimulatorPanelTitle>

                    <HygrovisionSimulatorPanelLightingMode>
                        <HygrovisionSimulatorPanelLightingModeLaser>
                            <label>Laser</label>
                            <span />
                        </HygrovisionSimulatorPanelLightingModeLaser>

                        <HygrovisionSimulatorPanelLightingModeIllumination isIllumination={isIllumination}>
                            <label>Illumination</label>
                            <span />
                            <HygrovisionSimulatorPanelLightingModeSwitcher>
                                <input
                                    type={'checkbox'}
                                    id={'illumination'}
                                    onChange={() => onChecked()}
                                    checked={isIllumination}
                                    readOnly
                                />
                                <label htmlFor={'illumination'} />
                            </HygrovisionSimulatorPanelLightingModeSwitcher>
                        </HygrovisionSimulatorPanelLightingModeIllumination>
                    </HygrovisionSimulatorPanelLightingMode>
                </HygrovisionSimulatorPanelLighting>
            </HygrovisionSimulatorPanel>
        </Container>
    );
}

export default HygrovisionSimulator;
