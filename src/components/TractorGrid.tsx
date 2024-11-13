import { TractorBrand } from './TractorBrand';

const brands = [
  {
    name: 'John Deere',
    models: ['6195M', '6215R', '7R 330', '8R 410'],
  },
  {
    name: 'Fendt',
    models: ['724 Vario', '828 Vario', '936 Vario'],
  },
  {
    name: 'Valtra',
    models: ['T234 Direct', 'S394', 'T254 Versu'],
  },
  {
    name: 'New Holland',
    models: ['T7.315', 'T8.435', 'T9.600'],
  },
];

export function TractorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {brands.map((brand) => (
        <TractorBrand key={brand.name} {...brand} />
      ))}
    </div>
  );
}