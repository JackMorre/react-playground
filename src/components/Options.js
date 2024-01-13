function Options({ question, dispatch, answer }) {
  const hasAnswed = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          key={option}
          disabled={hasAnswed}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswed
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: i });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
