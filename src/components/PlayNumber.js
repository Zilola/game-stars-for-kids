import { StartMatch } from './StartMatch';
export const PlayNumber = props => {


    const numberStatus = (number) => {
        if (!props.availableNum.includes(number)) {
            return 'used';
        }
        if (props.candidateNum.includes(number)) {
            return props.candidateAreNotCorrect ? 'wrong' : 'candidate';
        }
        return 'available';
    }

    return (
        <button
            className="number"
            style={{ backgroundColor: colors[numberStatus(props.number)] }}
            onClick={() => console.log('Num', props.number)}
        >{props.number}
        </button>
    );

}

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};
export default PlayNumber;





