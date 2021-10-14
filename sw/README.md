# Generieren eines eigenen Service-Workers
> [Structuring a TypeScript project with workers](https://stackoverflow.com/a/56374158/504184)

Generell funktioniert die Erzeugung eigener Service-Worker über TS praktisch nicht wirklich.

Der Link oben zeigt einen Workaround. Faktisch wird im Projekt-Root

    tsc --build sw

aufgerufen. Der Aufruf generiert im `public`-Folder das File `service-worker.js`.
Dieses File kann im Browser allerdings nicht geladen werden.

Es kommt die Fehlermeldung: `Uncaught SyntaxError: Cannot use import statement outside a module`

Evtl. funktioniert die ganze Geschichte mit WorkBox 7...

