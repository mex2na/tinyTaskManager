-- CreateTable
CREATE TABLE "Collectif" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomCollectif" TEXT NOT NULL,
    "villeOrigine" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Poete" (
    "idPoete" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomPoete" TEXT NOT NULL,
    "prenomPoete" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "telPoete" TEXT NOT NULL,
    "dateNaissance" DATETIME NOT NULL,
    "idCollectif" INTEGER NOT NULL,
    CONSTRAINT "Poete_idCollectif_fkey" FOREIGN KEY ("idCollectif") REFERENCES "Collectif" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Collectif_email_key" ON "Collectif"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collectif_tel_key" ON "Collectif"("tel");
