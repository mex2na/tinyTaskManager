-- CreateTable
CREATE TABLE "Collectif" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomCollectif" TEXT NOT NULL,
    "villeOrigine" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Collectif_email_key" ON "Collectif"("email");
