# Axon AI — GitHub Pages Website

Dieses Projekt ist für **GitHub Pages mit automatischem Build und Deployment** vorbereitet.

## So veröffentlichst du die Website

1. Entpacke die ZIP-Datei.
2. Öffne dein GitHub-Repository oder erstelle ein neues Repository.
3. Lade den **Inhalt des Ordners `axon-ai-github`** in das Repository hoch. Wichtig: `.github/workflows/deploy.yml` muss mit hochgeladen werden.
4. Der Standard-Branch muss `main` oder `master` heißen.
5. Öffne im GitHub-Repository **Settings → Pages** und wähle bei **Build and deployment** die Quelle **GitHub Actions**.
6. Öffne den Tab **Actions**. Der Workflow baut und veröffentlicht die Website automatisch. Warte, bis der Lauf erfolgreich abgeschlossen ist.
7. Die öffentliche Adresse wird im Workflow unter dem Environment `github-pages` angezeigt. Bei einem normalen Projekt-Repository ist sie meist `https://DEIN-NUTZER.github.io/REPOSITORY/`.

Für spätere Änderungen reicht es, neue Dateien in GitHub hochzuladen bzw. Änderungen auf `main` oder `master` zu pushen. GitHub Actions veröffentlicht die aktualisierte Website automatisch.

## Was ist enthalten?

- Animierte Startseite
- Ecosystem-Unterseite
- Evolution-Unterseite
- Trust & Security-Unterseite
- Responsive Layout für Desktop und Mobilgeräte
- GitHub Actions Workflow für automatisches Deployment
- Konfiguration für GitHub Pages mit Repository-Unterpfad

## Wichtige Hinweise

- GitHub Pages hostet eine statische Website. Ein serverseitiges KI-Backend, Datenbank, Login oder geschützte API-Routen sind in diesem Starter nicht enthalten.
- Projektkarten und einige Texte sind Demo-Inhalte. Ersetze sie durch bestätigte Informationen über deine tatsächlichen Projekte.
- Die Website enthält derzeit einen Kontakt-Platzhalter (`hello@axonai.example`), der vor einer Veröffentlichung ersetzt werden sollte.
- Vor dem öffentlichen Launch müssen die rechtlichen Angaben (z. B. Impressum und Datenschutzhinweise) passend zum tatsächlichen Betrieb ergänzt werden.
- Wenn dein Repository `DEIN-NUTZER.github.io` heißt, wird automatisch die Domain-Root-Konfiguration verwendet.
