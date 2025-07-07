# BootstrapFromScratch

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Build Project

To build the project, run (PowerShell 7+):
```bash
ng build --output-path docs --base-href=https://ckarakoc.github.io/BootstrapFromScratch/ && robocopy /move /e .\docs\browser\ .\docs\ && copy .\docs\index.html .\docs\404.html 
```
