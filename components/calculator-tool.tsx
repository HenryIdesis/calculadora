"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AlertCircle, Calculator, CircleDollarSign, ShieldCheck, TrendingUp } from "lucide-react";
import { calculateScenario } from "@/lib/finance";
import { formatBRL, formatPercent } from "@/lib/format";

const defaults = {
  monthlyRevenue: 12000,
  monthlyCosts: 2800,
  meiDAS: 75,
  pjTaxRate: 11.2,
  contadorCost: 350,
  extraMeiDeduction: 0,
};

const quickScenarios = [
  { label: "Começando", revenue: 5000, costs: 1200, tax: 6.0 },
  { label: "Em expansão", revenue: 15000, costs: 3800, tax: 11.2 },
  { label: "Alta operação", revenue: 28000, costs: 7000, tax: 13.5 },
];

function numberValue(value: string) {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function CalculatorTool() {
  const [form, setForm] = useState(defaults);
  const result = calculateScenario(form);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] text-white">
            <Calculator className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Comparador MEI x PJ</h2>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
              Simulação simples para comparar caixa líquido, custo fixo e imposto estimado. Use como decisão inicial, não como laudo tributário.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field
            label="Faturamento mensal"
            value={form.monthlyRevenue}
            onChange={(value) => setForm((current) => ({ ...current, monthlyRevenue: value }))}
          />
          <Field
            label="Custos mensais do negócio"
            value={form.monthlyCosts}
            onChange={(value) => setForm((current) => ({ ...current, monthlyCosts: value }))}
          />
          <Field
            label="DAS MEI estimado"
            value={form.meiDAS}
            onChange={(value) => setForm((current) => ({ ...current, meiDAS: value }))}
          />
          <Field
            label="Taxa de imposto PJ (%)"
            value={form.pjTaxRate}
            onChange={(value) => setForm((current) => ({ ...current, pjTaxRate: value }))}
          />
          <Field
            label="Custo de contador"
            value={form.contadorCost}
            onChange={(value) => setForm((current) => ({ ...current, contadorCost: value }))}
          />
          <Field
            label="Dedução extra no MEI"
            value={form.extraMeiDeduction}
            onChange={(value) => setForm((current) => ({ ...current, extraMeiDeduction: value }))}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {quickScenarios.map((scenario) => (
            <button
              key={scenario.label}
              type="button"
              className="rounded-full border border-[color:var(--border)] bg-[rgba(22,58,114,0.04)] px-4 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[rgba(22,58,114,0.25)] hover:bg-[rgba(22,58,114,0.08)] focus-ring"
              onClick={() =>
                setForm((current) => ({
                  ...current,
                  monthlyRevenue: scenario.revenue,
                  monthlyCosts: scenario.costs,
                  pjTaxRate: scenario.tax,
                }))
              }
            >
              {scenario.label}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-[linear-gradient(180deg,rgba(22,58,114,0.05),rgba(255,255,255,1))] p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
            <div className="text-sm leading-7 text-[color:var(--muted)]">
              O cálculo usa uma leitura simplificada para apoiar a decisão. Se o objetivo for migrar de regime, vale validar atividade, anexo, retenções e obrigações com contador.
            </div>
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <SummaryCard
          icon={<CircleDollarSign className="h-5 w-5" />}
          label="MEI líquido estimado"
          value={formatBRL(result.meiNet)}
          note={`Receita anualizada: ${formatBRL(result.annualizedRevenue)}`}
        />
        <SummaryCard
          icon={<TrendingUp className="h-5 w-5" />}
          label="PJ líquido estimado"
          value={formatBRL(result.pjNet)}
          note={`Imposto indicado: ${formatPercent(form.pjTaxRate)}`}
        />
        <SummaryCard
          icon={<ShieldCheck className="h-5 w-5" />}
          label="Leitura da simulação"
          value={result.recommendation === "EMPATE" ? "Empate técnico" : `Tende para ${result.recommendation}`}
          note={`Diferença entre cenários: ${formatBRL(result.difference)}`}
        />

        <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">Como interpretar</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            <li>• Se o PJ líquido sobe pouco, talvez a migração ainda não pague a complexidade.</li>
            <li>• Se o MEI fica perto do teto ou perde contratos, a decisão pode mudar mesmo com imposto baixo.</li>
            <li>• A comparação real depende de atividade, anexo, emissão e custo de conformidade.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function Field({ label, value, onChange }: FieldProps) {
  return (
    <label className="space-y-2">
      <span className="block text-sm font-medium text-[color:var(--ink)]">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        min="0"
        step="0.01"
        value={value}
        onChange={(event) => onChange(numberValue(event.target.value))}
        className="focus-ring w-full rounded-2xl border border-[color:var(--border)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-base text-[color:var(--ink)] shadow-sm transition placeholder:text-[color:var(--muted)]"
      />
    </label>
  );
}

type SummaryCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  note: string;
};

function SummaryCard({ icon, label, value, note }: SummaryCardProps) {
  return (
    <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
        <span className="text-[color:var(--brand)]">{icon}</span>
        {label}
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--ink)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{note}</p>
    </div>
  );
}
