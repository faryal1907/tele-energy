import { useParams } from "react-router-dom";
import useMQTTData from "../hooks/useMQTTData";
import DashboardContainer from "./DashboardContainer";
import departments from "../constants/departments";

export default function DepartmentDashboard() {
  const { department } = useParams();
  const normalizedKey = department?.trim().toLowerCase();

  const displayName = departments[normalizedKey] || "Unknown Department";

  const topic = `energy/data/${normalizedKey}`;
  const data = useMQTTData(topic);

  return (
    <div className="max-w-7xl pt-28 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {displayName} Dashboard
      </h1>

      {data && data.length > 0 ? (
        <DashboardContainer data={data} department={normalizedKey} />
      ) : (
        <div className="text-gray-600 text-center py-10">
          <p>📡 Waiting for live energy data on topic:</p>
          <code className="text-sm text-energy-500 bg-gray-100 px-2 py-1 rounded">
            {topic}
          </code>
          <p className="mt-2 text-sm text-gray-500">
            Make sure the backend publisher is running and publishing data to this topic.
          </p>
        </div>
      )}
    </div>
  );
}
