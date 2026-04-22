export type CalculatorInput = {
  monthlyRevenue: number;
  monthlyCosts: number;
  meiDAS: number;
  pjTaxRate: number;
  contadorCost: number;
  extraMeiDeduction: number;
};

export type CalculatorResult = {
  meiNet: number;
  pjNet: number;
  difference: number;
  annualizedRevenue: number;
  recommendation: "MEI" | "PJ" | "EMPATE";
};

export function calculateScenario(input: CalculatorInput): CalculatorResult {
  const revenue = Math.max(0, input.monthlyRevenue);
  const costs = Math.max(0, input.monthlyCosts);
  const meiDAS = Math.max(0, input.meiDAS);
  const pjTaxRate = Math.max(0, input.pjTaxRate);
  const contadorCost = Math.max(0, input.contadorCost);
  const extraMeiDeduction = Math.max(0, input.extraMeiDeduction);

  const meiNet = revenue - costs - meiDAS - extraMeiDeduction;
  const pjNet = revenue - costs - revenue * (pjTaxRate / 100) - contadorCost;
  const difference = pjNet - meiNet;
  const annualizedRevenue = revenue * 12;

  let recommendation: CalculatorResult["recommendation"] = "EMPATE";
  if (difference > 200) recommendation = "PJ";
  if (difference < -200) recommendation = "MEI";

  return {
    meiNet,
    pjNet,
    difference,
    annualizedRevenue,
    recommendation,
  };
}

