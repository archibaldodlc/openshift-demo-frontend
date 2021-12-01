#/bin/bash
cd ../src/app/services
sed -i '' 's/API_IP/'${API_URL}'/g' usuario.service.ts
sed -i '' 's/API_IP/'${API_URL}'/g' parametro.service.ts
