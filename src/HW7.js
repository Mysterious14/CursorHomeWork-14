const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

function getMyTaxes(salary) {
  return salary * this.tax;
}

function HW7() {
  const salary = 1000;
  return (
    <div>
      <h3>Home work 7</h3>
      <p>
        In Ukraine if you have salary {salary}, you have to pay {getMyTaxes.call(ukraine, salary)}{' '}
        for tax
      </p>
    </div>
  );
}

export default HW7;
