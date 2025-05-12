# Uruchom backend w nowym oknie PowerShell

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $PWD/backend; npm run server" -WindowStyle Normal

# Uruchom frontend w nowym oknie PowerShell

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $PWD/frontend; npm run dev" -WindowStyle Normal
