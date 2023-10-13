import {Container} from "./DescriptionBlock.styled";

const DescriptionBlock: React.FC = () => {
    return (
        <Container>
            <h3>Hygrovision mini Simulator</h3>
            <ol>
                <li>
                    The image on the left is the view of the condensation mirror as seen through the microscope! On the right is the control panel
                </li>
                <li>
                    Use the up and down arrows to change the temperature
                </li>
                <li>
                    Use the O key to switch between the two lighting modes
                </li>
            </ol>
        </Container>
    );
}

export default DescriptionBlock;
