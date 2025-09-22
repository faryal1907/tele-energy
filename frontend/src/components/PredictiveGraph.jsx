import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import React from "react";

function toMs(ts) {
  const d = new Date(ts);
  if (!isNaN(d.getTime())) return d.getTime();
  const [h, m] = String(ts).split(":").map(Number);
  const now = new Date();
  const d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h || 0, m || 0, 0, 0);
  return d2.getTime();
}

function formatTime(ms) {
  const d = new Date(ms);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function linearRegression(points) {
  const n = points.length;
  if (n === 0) return { a: 0, b: 0 };

  const mean = (arr) => arr.reduce((s, v) => s + v, 0) / arr.length;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const xbar = mean(xs);
  const ybar = mean(ys);

  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - xbar;
    const dy = ys[i] - ybar;
    num += dx * dy;
    den += dx * dx;
  }
  const b = den === 0 ? 0 : num / den;
  const a = ybar - b * xbar;
  return { a, b };
}

export default function PredictiveGraph({ data }) {
  const points = Array.isArray(data) ? data : [];
  const chron = points
    .map((r) => ({ ...r, _t: toMs(r.timestamp) }))
    .sort((a, b) => a._t - b._t)
    .slice(-5);

  const t0 = chron.length ? chron[0]._t : Date.now();
  const toX = (ms) => (ms - t0) / 3600000;

  const buildModel = (key) => {
    const pts = chron.map((r) => ({ x: toX(r._t), y: Number(r[key] || 0) }));
    return linearRegression(pts);
  };

  const modelA = buildModel("phaseA");
  const modelB = buildModel("phaseB");
  const modelC = buildModel("phaseC");

  const lastT = chron.length ? chron[chron.length - 1]._t : Date.now();
  const future = [];
  for (let i = 1; i <= 12; i++) {
    const t = lastT + i * 3600000;
    const x = toX(t);
    future.push({
      timestamp: formatTime(t),
      phaseA_pred: modelA.a + modelA.b * x,
      phaseB_pred: modelB.a + modelB.b * x,
      phaseC_pred: modelC.a + modelC.b * x
    });
  }

  const chartData = future;

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
          <YAxis unit=" A" stroke="#6b7280" tick={{ fontSize: 10 }} />
          <Tooltip
            wrapperStyle={{ fontSize: 10 }}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
          />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Line
            type="monotone"
            dataKey="phaseA_pred"
            name="Phase A (predicted)"
            stroke="#16a34a"
            strokeDasharray="6 4"
            strokeWidth={2.5}
            dot={false}
          />
                    <Line
            type="monotone"
            dataKey="phaseA_pred"
            name="Phase A (predicted)"
            stroke="#16a34a"
            strokeDasharray="6 4"
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="phaseB_pred"
            name="Phase B (predicted)"
            stroke="#2563eb"
            strokeDasharray="6 4"
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="phaseC_pred"
            name="Phase C (predicted)"
            stroke="#ca8a04"
            strokeDasharray="6 4"
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}