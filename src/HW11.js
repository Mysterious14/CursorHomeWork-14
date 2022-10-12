function calculateWordLetters(text) {
  let obj = {};
  let objKey;
  let textArr = text.split('');
  textArr.map((el) => {
    objKey = el;
    obj[objKey] = textArr.filter((item) => item === el).length;
  });
  return obj;
}

function HW11() {
  const text = 'text';
  return (
    <div>
      <h3>Home work 11</h3>
      <p>
        Кількість букв в слові "{text}" - {JSON.stringify(calculateWordLetters(text))}
      </p>
    </div>
  );
}
export default HW11;
