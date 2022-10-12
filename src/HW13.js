import './HW13.css';
function* newFontGenerator(font) {
  let changes = yield;
  while (true) {
    changes === 'increase' ? (font += 2) : (font -= 2);

    changes = yield font;
  }
}
const fontGenerator = newFontGenerator(16);
fontGenerator.next();
function increase() {
  document.body.style.fontSize = `${fontGenerator.next('increase').value}px`;
}

function reduce() {
  document.body.style.fontSize = `${fontGenerator.next('reduce').value}px`;
}
function HW13() {
  return (
    <div className="App">
      <h3>Home work 12</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reduce}>Reduce</button>
      <p>Some text</p>
    </div>
  );
}

export default HW13;
