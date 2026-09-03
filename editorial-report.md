# Editorial consolidation report

## Deliverables

- Canonical package: `/workspace/nieuwamsterdam/english/content-en.json`
- Section Markdown: `/workspace/nieuwamsterdam/english/01-home.md` through `/workspace/nieuwamsterdam/english/14-dank.md`
- Final glossary: `/workspace/nieuwamsterdam/english/glossary-en.md`

## Final section order and titles

1. `home` — NEW AMSTERDAM AGENDA
2. `leeswijzer` — READER’S GUIDE
3. `proloog` — PROLOGUE: SPINOZA AS A COMPASS
4. `ch1` — I. THE INTELLIGENCE ECONOMY IS EMERGING
5. `ch2` — II. AMSTERDAM IS LOSING GROUND
6. `ch3` — III. THE PROMISE: WHAT THE INTELLIGENT CITY DELIVERS
7. `ch4` — IV. MENTAL MODELS FOR THIS NEW ERA
8. `ch5` — V. THE FIVE PILLARS OF THE INTELLIGENCE ECONOMY
9. `ch8` — VI. DILEMMAS
10. `ch6` — VII. CHOICES
11. `ch7` — VIII. BUILDING TOGETHER
12. `epiloog` — EPILOGUE: A NEW CROSSING
13. `bronnen` — SOURCES
14. `dank` — ACKNOWLEDGEMENTS

## Validation

- Strict JSON parse: passed.
- Top-level shape: exactly `{meta, sections}`.
- Meta: all 15 Dutch-source keys retained with the same object/array/value-type shape; UI-visible values translated.
- Sections: 14/14 present in the required id order; all 11 source fields retained in every section object.
- Markdown files: 14/14 present and byte-for-byte equal to their final `bodyMarkdown` value, apart from the conventional final newline.
- Structure, source → target: 1,090 → 1,090 lines; 517 → 517 blank-line-delimited blocks; 39 → 39 Markdown headings; 33 → 33 ordered-list lines; 70 → 70 bullet lines; 6 → 6 blockquote lines; 25 → 25 `• • •` ornaments; 57 → 57 two-space hard breaks; 3 → 3 images.
- URLs, mail links and image paths: exact source/target sequence comparison passed for all 14 sections.
- Figures and statistics: checked section by section. English-localised punctuation was retained where appropriate (`84,6%` → `84.6%`, `100.000` → `100,000`, `1.000` → `1,000`); ordinal wording preserves the same values.
- Proper-name sequences and acknowledgements lists: preserved.
- Residual-Dutch prose scan: passed. The official Dutch article title ‘Laten we het minder hebben over AI. Maar vooral over de intelligentie economie’ remains in Sources, as required. Dutch names and institutional abbreviations such as VNG, UvA and VU also remain.
- British-English scan: passed. The American spelling “organize” occurs only inside Dario Amodei’s verbatim English quotation.

The source metadata reports 516 paragraphs, although the source bodies contain 517 blank-line-delimited blocks; Chapter III has 39 such blocks while its source field says 38. In accordance with the instruction to recompute these fields, the English package records 517 total paragraphs and 39 for Chapter III.

## Source → target body character counts

| ID | Dutch source | Final English |
|---|---:|---:|
| home | 953 | 1,010 |
| leeswijzer | 1,630 | 1,695 |
| proloog | 3,997 | 3,738 |
| ch1 | 11,235 | 11,069 |
| ch2 | 5,239 | 5,044 |
| ch3 | 4,886 | 4,867 |
| ch4 | 5,538 | 5,341 |
| ch5 | 11,707 | 11,623 |
| ch8 | 4,894 | 4,700 |
| ch6 | 11,128 | 10,898 |
| ch7 | 9,187 | 9,277 |
| epiloog | 4,152 | 4,237 |
| bronnen | 1,567 | 1,519 |
| dank | 2,459 | 2,489 |
| **Total** | **78,572** | **77,507** |

The final data-array-only character total is 76,497.

## Terminology audit

- Fixed throughout: intelligence economy; knowledge economy; capacity to act; active affects; passive affects; caring city; entrepôt system; New Amsterdam Agenda; New Amsterdam; Reader’s Guide; Sources; Acknowledgements; Building Together; A New Crossing.
- Urban Tech Coalitions is spelt out on first mention in each major implementation context; subsequent plural references use `UTCs`. No English `STC`/`STCs` remains.
- `handelingsvermogen` is always capacity to act. Agency remains only in Chapter IV, where the Dutch source itself uses the English loanword. `handelingsperspectief` is consistently scope for action.
- Intelligence assembly is now consistent across Chapters VI and VIII.
- Broad prosperity and new broad prosperity are consistent.
- The five canonical pillar labels are identical in the Chapter V list and headings. Chapter VIII’s “measures” subsection retains its source-faithful descriptive pillar headings rather than replacing their distinct content with the canonical labels.
- Compass and Laboratories keeps the framework’s chosen capitalisation in the canonical labels; ordinary running references use lower case.

## Consolidation edits

- Harmonised section-label capitals and body-heading sentence case across the three translator batches, while retaining the fixed pillar-heading forms.
- Harmonised the home/meta tagline to “A path to an intelligent, caring city”.
- Replaced Chapter II’s less idiomatic “prospect for action” with the globally consistent “scope for action”; also changed “Amsterdam technology companies” to “Amsterdam-based technology companies”.
- Smoothed isolated literal phrasing in Chapter III (“fairer opportunities for work”, “a new route upwards”, and the sentence about unrest and people falling by the wayside).
- Corrected Chapter V idiom and mechanics: “contains tensions”, “the five pillars”, `Industrial Revolution`, punctuation around data access, and “transparent by design”.
- Smoothed two Chapter VI phrases concerning distribution of prosperity and craftsmanship.
- Applied British `human-centred`, improved one positioning phrase, and corrected `data-rich`, accountability preposition and selection-weight wording in Chapter VII.
- Unified “intelligence assembly”, restored “computing power” in the flywheel summary, and smoothed one vision sentence in Chapter VIII.
- Removed the redundant phrase “active capacity to act” in the epilogue without changing its meaning.
- Recomputed every section’s `charCount` and `paragraphCount`, plus all corresponding meta totals.

## Issues requiring judgement

None. No factual correction or change to the author’s argument was introduced.
