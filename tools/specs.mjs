import { CARS } from '../src/data/cars.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
for (const id of Object.keys(CARS)) {
  const s = buildSpec(id, stockEquip(id));
  console.log(id.padEnd(9), `${s.maxPowerPS.toFixed(0)}PS@${s.maxPowerRpm}`, `${s.maxTorque.toFixed(0)}Nm@${s.maxTorqueRpm}`, `${s.mass}kg`, 'rating', s.rating, '|', CARS[id].published);
}
