/*
  Warnings:

  - Added the required column `idCollectif` to the `Tournoi` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Performance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "duree" TEXT NOT NULL,
    "totalNote" INTEGER NOT NULL,
    "idPoete" INTEGER NOT NULL,
    CONSTRAINT "Performance_idPoete_fkey" FOREIGN KEY ("idPoete") REFERENCES "Poete" ("idPoete") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valeur" INTEGER NOT NULL,
    "prise" BOOLEAN NOT NULL DEFAULT true,
    "idPerfo" INTEGER NOT NULL,
    CONSTRAINT "Note_idPerfo_fkey" FOREIGN KEY ("idPerfo") REFERENCES "Performance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Penalite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valeur" INTEGER NOT NULL,
    "cause" TEXT NOT NULL,
    "idPerfo" INTEGER NOT NULL,
    CONSTRAINT "Penalite_idPerfo_fkey" FOREIGN KEY ("idPerfo") REFERENCES "Performance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PoeteToTournoi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PoeteToTournoi_A_fkey" FOREIGN KEY ("A") REFERENCES "Poete" ("idPoete") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PoeteToTournoi_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournoi" ("idTournoi") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collectif" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomCollectif" TEXT NOT NULL,
    "villeOrigine" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "logo" TEXT
);
INSERT INTO "new_Collectif" ("email", "id", "logo", "nomCollectif", "password", "tel", "villeOrigine") SELECT "email", "id", "logo", "nomCollectif", "password", "tel", "villeOrigine" FROM "Collectif";
DROP TABLE "Collectif";
ALTER TABLE "new_Collectif" RENAME TO "Collectif";
CREATE UNIQUE INDEX "Collectif_email_key" ON "Collectif"("email");
CREATE UNIQUE INDEX "Collectif_tel_key" ON "Collectif"("tel");
CREATE TABLE "new_Poete" (
    "idPoete" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomPoete" TEXT NOT NULL,
    "prenomPoete" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "telPoete" TEXT NOT NULL,
    "dateNaissance" TEXT NOT NULL,
    "idCollectif" INTEGER NOT NULL,
    CONSTRAINT "Poete_idCollectif_fkey" FOREIGN KEY ("idCollectif") REFERENCES "Collectif" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Poete" ("dateNaissance", "idCollectif", "idPoete", "nomPoete", "prenomPoete", "pseudo", "telPoete") SELECT "dateNaissance", "idCollectif", "idPoete", "nomPoete", "prenomPoete", "pseudo", "telPoete" FROM "Poete";
DROP TABLE "Poete";
ALTER TABLE "new_Poete" RENAME TO "Poete";
CREATE TABLE "new_Tournoi" (
    "idTournoi" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomTournoi" TEXT NOT NULL,
    "nbJury" INTEGER NOT NULL DEFAULT 3,
    "idCollectif" INTEGER NOT NULL,
    CONSTRAINT "Tournoi_idCollectif_fkey" FOREIGN KEY ("idCollectif") REFERENCES "Collectif" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tournoi" ("idTournoi", "nomTournoi") SELECT "idTournoi", "nomTournoi" FROM "Tournoi";
DROP TABLE "Tournoi";
ALTER TABLE "new_Tournoi" RENAME TO "Tournoi";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_PoeteToTournoi_AB_unique" ON "_PoeteToTournoi"("A", "B");

-- CreateIndex
CREATE INDEX "_PoeteToTournoi_B_index" ON "_PoeteToTournoi"("B");
