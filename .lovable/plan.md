

## BAU GMBH 2 — Webseite (3 Seiten, Deutsch)

Sajt za **BAU GMBH 2**, nemačku građevinsku firmu koja radi i visokogradnju (Hochbau) i niskogradnju (Tiefbau). Sve na nemačkom jeziku, profesionalan korporativni dizajn.

### Struktura sajta

**1. Startseite (Početna — `/`)**
- Hero sekcija sa velikim banerom, naslov "BAU GMBH 2", podnaslov o Hoch- und Tiefbau
- Sekcija "Über uns" — kratko o firmi
- Sekcija "Unsere Leistungen" — kartice za Hochbau i Tiefbau sa ikonama
- CTA dugme ka projektima i kontaktu

**2. Projekte (Projekti — `/projekte`)**
- Galerija projekata sa uploadovanim slikama
- Filteri po kategoriji: Hochbau / Tiefbau / Alle
- Svaki projekat: slika, naziv, kratki opis, kategorija

**3. Kontakt (`/kontakt`)**
- Kontakt forma (Name, E-Mail, Telefon, Nachricht)
- Kontakt informacije firme (adresa, telefon, email)
- Google Maps placeholder

### Tehnički detalji

- **Navigacija**: Fiksni header sa logom "BAU GMBH 2" i linkovima (Startseite, Projekte, Kontakt)
- **Footer**: Na svim stranicama, info o firmi, linkovi, copyright
- **Slike**: Koriste se uploadovane slike za projekte i hero sekciju
- **Responsive**: Prilagođen za mobilne i desktop uređaje
- **Boje**: Tamno plava (#1a365d) + narandžasta/žuta (#ed8936) — profesionalan građevinski stil
- **Fajlovi**: Layout komponenta, 3 page komponente, data fajl za projekte

### Fajlovi za kreiranje/izmenu

| Fajl | Opis |
|------|------|
| `src/components/Layout.tsx` | Header + Footer wrapper |
| `src/pages/Index.tsx` | Startseite |
| `src/pages/Projekte.tsx` | Projekti galerija |
| `src/pages/Kontakt.tsx` | Kontakt forma |
| `src/data/projects.ts` | Lista projekata sa slikama |
| `src/App.tsx` | Dodati rute |
| `index.html` | Update title |
| `src/index.css` | Custom boje |

