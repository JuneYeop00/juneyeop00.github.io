import Calc from "./Calc";

export default function MyCalc() {
    const nums = [5, 10];

    const op = "+";

    return (
        <div>
            <h1>나만의 계산기(MyCalc)</h1>
            <Calc nums={nums} op={op} />
        </div>
    );
}