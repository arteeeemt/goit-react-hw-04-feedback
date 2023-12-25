import { Item, TotalStat } from "./Statistics.styled";
import PropTypes from 'prop-types'

export const Statistics = ({ goodCounter, neutralCounter, badCounter, total, positivePercentage }) => {
    return (<>
            <ul>
                <Item>Good: {goodCounter}</Item>
                <Item>Neutral: {neutralCounter}</Item>
                <Item>Bed: {badCounter}</Item>
            </ul>
            <TotalStat>Total feedbacks: {total}</TotalStat>
            <TotalStat>Positive Feedbacks: {positivePercentage} %</TotalStat>
        </>);
};

Statistics.propTypes = {
    goodCounter: PropTypes.number.isRequired,
    neutralCounter: PropTypes.number.isRequired,
    badCounter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}