# Source des contours départementaux

Fichiers : `departement-<code>.geojson` (Paris 75, Seine-et-Marne 77, Yvelines 78,
Essonne 91, Hauts-de-Seine 92, Seine-Saint-Denis 93, Val-de-Marne 94, Val-d’Oise 95).

Origine : jeu de données **france-geojson** de Grégoire David
(https://github.com/gregoiredavid/france-geojson), construit à partir des données
administratives de l’IGN et de l’INSEE diffusées sous **Licence Ouverte**.

Ces fichiers servent uniquement à générer `src/lib/idf-geo.mjs`
(`node tools/genmap.mjs`). Ils ne sont pas servis au navigateur : seule la
version projetée et simplifiée est intégrée au site.

Mention à conserver sur les pages affichant la carte :
« Fond de carte : contours administratifs IGN / INSEE — Licence Ouverte ».
