function genSelectOptions() {
  const selectOptions = [];

  for (let i = 0; i <= 5; i++) {
    selectOptions.push({
      id: `${i}text`,
      label: `${i} Text`,
    });
  }
  return selectOptions;
}

export const selectOptions = genSelectOptions();
