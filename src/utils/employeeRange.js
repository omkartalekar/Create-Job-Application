
function employeeRange(employeeCount) {
  if (employeeCount >= 1 && employeeCount <= 10) {
    return "1-10";
  } else if (employeeCount >= 11 && employeeCount <= 50) {
    return "11-50";
  } else if (employeeCount >= 51 && employeeCount <= 100) {
    return "51-100";
  } else if (employeeCount >= 101 && employeeCount <= 1000) {
    return "101-1000";
  } else {
    return "1001-10000";
  }
}

export { employeeRange };
