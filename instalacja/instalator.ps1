# Instalacja zależności backendu (katalog główny)
Write-Host "Instaluję zależności backendu..."
npm install

# Instalacja mongodb-memory-server w backendzie
Write-Host "Instaluję mongodb-memory-server w backendzie..."
npm install mongodb-memory-server --save

# Instalacja zależności frontendu
Write-Host "Instaluję zależności frontendu..."
cd frontend
npm install
cd ..
