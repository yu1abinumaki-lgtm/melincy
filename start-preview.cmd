@echo off
cd /d "%~dp0"
echo Open http://127.0.0.1:4174 in your browser after the server starts.
echo Press Ctrl+C to stop the server.
node scripts\serve.mjs
pause
