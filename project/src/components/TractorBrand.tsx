interface TractorBrandProps {
  name: string;
  models: string[];
}

export function TractorBrand({ name, models }: TractorBrandProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-bold text-green-800 mb-4">{name}</h3>
      <ul className="space-y-3">
        {models.map((model) => (
          <li key={model} className="text-gray-700 flex items-center">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
            {model}
          </li>
        ))}
      </ul>
    </div>
  );
}