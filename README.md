<div align="center">

<img src="./icon.svg" alt="Koriander Padel Toss" width="88" />

# 🎾 Koriander Padel Toss

**Van spelerslijst naar speelindeling, zonder gedoe.**

Een eenvoudige webapp voor padelavonden, met vier speelvormen in één overzicht.

### [▶️ Open de Koriander Toss](https://hound83.github.io/padel-toss-americano/)

**Directe URL:** https://hound83.github.io/padel-toss-americano/

*Werkt op telefoon, tablet en computer. Geen account nodig.*

</div>

---

## Kies je speelvorm

| Speelvorm | Wat doet de app? |
| :--- | :--- |
| 🎾 **Toss** | Genereert een speelschema voor de hele groep. Geen uitslagen bijhouden nodig. |
| ⚖️ **Gesplitste Toss** | Deelt spelers in binnen niveaugroepen (**Zilver**, **Goud** en **Platina**), zodat je per groep passende wedstrijden kunt organiseren. |
| 🏆 **Americano** | Maakt een speelschema en houdt scores en een klassement bij. |
| 👑 **King of the Court (KOC)** | Genereert **alleen de startindeling** per baan. Daarna spelen en schuiven de spelers zelf door volgens de KOC-regels. |

> **Toss en King of the Court zijn verschillende speelvormen.** De KOC-functie is bedoeld als hulpmiddel om te starten, niet als complete wedstrijdadministratie.

## Zo werkt het

1. **Open de [webapp](https://hound83.github.io/padel-toss-americano/)** en kies een speelvorm.
2. **Stel je avond in:** kies het aantal banen, het aantal spelers en waar van toepassing de rondes of niveaugroepen.
3. **Vul de namen in** en genereer de indeling.
4. **Speel!** Bekijk het schema, houd bij Americano de scores bij of gebruik de presentatiemodus om de indeling duidelijk te tonen.

### Handig tijdens de toss

- **Namen aanpassen:** ook wanneer de groep op het laatste moment verandert.
- **Schema bewaren en terughalen:** je kunt je speelschema opslaan als bestand en later weer laden.
- **Automatisch hervatten:** de app onthoudt je sessie in dezelfde browser.
- **Presentatiemodus:** toon de indeling overzichtelijk op een groter scherm.
- **Nederlands en Engels:** wissel de taal in de app.

### Speciaal voor KOC

- Kies **2 tot 8 banen**.
- Vink afwezige spelers uit of pas namen aan; starten met minder spelers kan ook.
- Gebruik **🎲 Genereer startindeling** opnieuw om een andere willekeurige indeling te maken.
- Kopieer de indeling eenvoudig voor **WhatsApp**.
- De app verzorgt de **start**. Het doorschuiven na de eerste wedstrijden gebeurt op de baan.

## 📱 Als app gebruiken

De website is het uitgangspunt; je hoeft geen los HTML-bestand te downloaden.

Je kunt de pagina op een geschikt apparaat ook aan je beginscherm toevoegen:

- **Android (Chrome):** open de website en kies via het browsermenu *App installeren* of *Toevoegen aan startscherm*.
- **iPhone/iPad (Safari):** open de website, tik op *Delen* en kies *Zet op beginscherm*.

De app ondersteunt offline gebruik **nadat de benodigde bestanden eerder zijn geladen**. De eerste keer openen vereist een internetverbinding.

## 🔒 Gegevens en privacy

Er is geen account nodig. Ingevoerde spelersnamen en je actuele sessie worden lokaal in je browser bewaard. Een opgeslagen speelschemabestand kun je zelf bewaren of delen. Wis je de browsergegevens, dan kan ook de lokaal bewaarde sessie verdwijnen.

## 🛠️ Over dit project

De Koriander Padel Toss is een statische webapp, gebouwd met **HTML, CSS en JavaScript** en gehost via **GitHub Pages**. Er is geen server of database nodig voor de speelindelingen.

| Bestand | Functie |
| :--- | :--- |
| `index.html` | De volledige webapp en indelingslogica |
| `manifest.webmanifest` | Installeerbare webapp |
| `sw.js` | Offline caching |
| `icon.svg` en `icon-*.png` | App-iconen |
| `tests/koc.test.cjs` | Geautomatiseerde tests voor de KOC-indeling |

KOC-tests uitvoeren met Node.js:

```bash
node --test tests/koc.test.cjs
```

---

<div align="center">

**Klaar om te spelen?**

### [🎾 Start de Koriander Toss](https://hound83.github.io/padel-toss-americano/)

*Gemaakt voor gezellige én goed georganiseerde padelavonden.*

</div>
