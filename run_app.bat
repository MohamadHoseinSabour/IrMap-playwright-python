@echo off
title Map Localization Dashboard Launcher
echo ===================================================
echo   Map Localization Dashboard Local Server Launcher
echo ===================================================
echo.
echo Starting local HTTP server on port 8089...
echo The web dashboard will open in your default browser.
echo.
echo URL to open: http://localhost:8089
echo.
echo Press Ctrl+C in this window to stop the server.
echo ===================================================
echo.

:: Open the browser immediately (it runs asynchronously)
start http://localhost:8089

:: Start the Python HTTP server (this blocks, keeping the cmd window open)
python -m http.server 8089 --directory map-localization-app
