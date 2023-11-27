/*
  Warnings:

  - Changed the type of `kunjung` on the `Bayi` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `kunjung` on the `Bumil` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `kunjung` on the `Lansia` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterSequence
ALTER SEQUENCE "Admin_id_seq" MAXVALUE 9223372036854775807;

-- AlterSequence
ALTER SEQUENCE "Lansia_id_seq" MAXVALUE 9223372036854775807;

-- AlterTable
ALTER TABLE "Bayi" DROP COLUMN "kunjung";
ALTER TABLE "Bayi" ADD COLUMN     "kunjung" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Bumil" DROP COLUMN "kunjung";
ALTER TABLE "Bumil" ADD COLUMN     "kunjung" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Lansia" DROP COLUMN "kunjung";
ALTER TABLE "Lansia" ADD COLUMN     "kunjung" STRING NOT NULL;
