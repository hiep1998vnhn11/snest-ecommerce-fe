export enum PrintSize {
  A4 = 'Khổ in A4',
  A5 = 'Khổ in A5',
  K57 = 'Khổ in K57',
  K80 = 'Khổ in K80',
}

export const printSize = {
  A4: PrintSize.A4,
  A5: PrintSize.A5,
  K57: PrintSize.K57,
  K80: PrintSize.K80,
};

export const selectPrintSize = [
  { value: 'A4', label: PrintSize.A4 },
  { value: 'A5', label: PrintSize.A5 },
  { value: 'K57', label: PrintSize.K57 },
  { value: 'K80', label: PrintSize.K80 },
];
