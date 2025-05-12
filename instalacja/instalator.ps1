# Przejdź do katalogu ChatApp
Set-Location ../ChatApp

Write-Host "Instaluję zależności backendu..."
cd backend
npm install

Write-Host "Instaluję mongodb-memory-server w backendzie..."
npm install mongodb-memory-server --save

cd ..

Write-Host "Instaluję zależności frontendu..."
cd frontend
npm install

cd ../..

Write-Host "Instalacja zakończona."
