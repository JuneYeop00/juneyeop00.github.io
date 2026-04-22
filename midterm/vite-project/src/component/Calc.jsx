export default function Calc({ nums, op }) {
    const [num1, num2] = nums;

    let message = "";
    let result = 0;

    if (op === "+") {
        message = "덧셈 결과 입니다.";
        result = num1 + num2;
    } else if (op === "-") {
        message = "뺄셈 결과 입니다.";
        result = num1 - num2;
    } else if (op === "*") {
        message = "곱셈 결과 입니다.";
        result = num1 * num2;
    } else if (op === "/") {
        message = "나눗셈 결과 입니다.";
        result = num1 / num2;
    } else {
        message = "지원하지 않는 연산자입니다.";
    }

    return (
        <div>
            <p>{message}</p>
            {message !== "지원하지 않는 연산자입니다." && (
                <p>
                    {num1} {op} {num2} = {result}
                </p>
            )}
        </div>
    );
}