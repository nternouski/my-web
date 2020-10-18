# Estilo

-   Usar los estilos marcados en .editorconfig y tslint.
-   Usar la extensión EditorConfig for VS code para mantener los estilos de .editorconfig
-   Usar la extensión de vscode prettier.
-   Usar formatOnSave tal como esta en .vsconfig/settings.json
-   Usar la extensión de Code Spell Checker (+ spanish)
-   Favicon va como esta, en src/favicon.ico, no se corre a img
-   No poner el "loading" en el titulo
-   Las opciones de configuración que no cambian, no van a environments, sino a core/services/config.service
-   TRATAR DE EVITAR LAS FUENTAS CUSTOM !!!! (excepto las de material)
-   no tocar archivos de configuracion. Si el linter les tira un error, no cambien el linter, arreglen el error
-   no agregar paquetes. Yo tengo que estar involucrado en la decisión de agregar cada paquete
-   la medida de tamaño es "em" no "px"
-   no tocar los estilos generales salvo que este justificado
-   no usar h1 h2 etc.... usar [las tipografías](https://material.angular.io/guide/typography)
-   SIEMPRE USAR UBSERBABLES AL MOSTRAR VARIABLES EN EL HTML

# WebPack

`ng build --prod --stats-json`
y después
`npx webpack-bundle-analyzer dist/stats.json`
